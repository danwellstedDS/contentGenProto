import { VARIANTS, LIMITS, LANGUAGES } from "@hotel-copy/shared"
import type { AssetType, LanguageCode } from "@hotel-copy/shared"
import { ProjectHotelRepository } from "../infrastructure/prisma/ProjectHotelRepository"
import { ToneConfigRepository } from "../infrastructure/prisma/ToneConfigRepository"
import { GenerationRepository } from "../infrastructure/prisma/GenerationRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import { makeAIClient } from "../infrastructure/ai/aiClient"
import type { ProjectHotel } from "../domain/hotel/ProjectHotel"
import type { ToneConfig } from "../domain/tone-config/ToneConfig"

const ASSET_TYPES: AssetType[] = ["HEADLINE", "DESCRIPTION", "LONG_HEADLINE"]
const CONCURRENCY = 5

async function withConcurrency<T>(items: T[], limit: number, fn: (item: T) => Promise<void>): Promise<void> {
  let idx = 0
  async function worker() {
    while (idx < items.length) {
      const item = items[idx++]
      await fn(item)
    }
  }
  const workers = Array.from({ length: Math.min(limit, items.length) }, worker)
  await Promise.allSettled(workers)
}

function buildToneText(configs: ToneConfig[], hotel: ProjectHotel): string {
  const chain = configs.find((c) => c.level === "CHAIN" && hotel.chain && c.entityName.toLowerCase() === hotel.chain.toLowerCase())
  const brand = configs.find((c) => c.level === "BRAND" && hotel.brand && c.entityName.toLowerCase() === hotel.brand.toLowerCase())
  const parts: string[] = []
  if (chain) parts.push(`Chain (${chain.entityName}): ${chain.toPromptText()}`)
  if (brand) parts.push(`Brand (${brand.entityName}): ${brand.toPromptText()}`)
  return parts.join("\n") || "No specific tone guidance. Use professional, engaging hotel marketing copy."
}

function buildLanguageStructure(langCodes: string[]): string {
  const example: Record<string, string> = {}
  for (const code of langCodes) example[code] = "..."
  return JSON.stringify(example)
}

async function generateForHotel(
  generationId: string,
  hotel: ProjectHotel,
  toneConfigs: ToneConfig[],
  assetType: AssetType,
  languages: string[],
  campaignContext: string | null | undefined,
  aiClient: ReturnType<typeof makeAIClient>,
  recipe?: string | null
): Promise<void> {
  const limit = LIMITS[assetType]
  const toneText = buildToneText(toneConfigs, hotel)
  const activeCats = hotel.activeCategories().join(", ") || "none"
  const activeAmen = hotel.activeAmenities().slice(0, 20).join(", ") || "none"
  const langCount = languages.length
  const langStructure = buildLanguageStructure(languages)

  const campaignLine = campaignContext ? `\nCampaign context: ${campaignContext}` : ""
  const recipeBlock = recipe
    ? `\nStyle recipe — apply this writing style consistently:\n${recipe}\n`
    : ""

  const variantKeys = VARIANTS.map((v) => `  "${v.code}_${v.label}": ${langStructure}`).join(",\n")

  const systemPrompt = `You are a Google Ads copywriter for hotel campaigns.
You write ad copy in multiple languages simultaneously.
You must strictly follow character limits. CJK characters (Chinese, Japanese, Korean) count as 2 characters each.

Asset type: ${assetType}
Character limit: ${limit} characters (CJK double-count applied)
Languages to generate: ${languages.join(", ")} (${langCount} languages)${campaignLine}${recipeBlock}

Output ONLY a valid JSON object with this exact structure:
{
${variantKeys}
}

Brand tone guidance:
${toneText}`

  const userPrompt = `Hotel: ${hotel.hotelName}
Local names: ${JSON.stringify(hotel.localNames)}
Chain: ${hotel.chain ?? "N/A"}
Brand: ${hotel.brand ?? "N/A"}
Country: ${hotel.country ?? "N/A"}, City: ${hotel.city ?? "N/A"}
Star rating: ${hotel.starRating ?? "N/A"}
Rooms: ${hotel.roomCount ?? "N/A"}
Description: ${hotel.description ?? "N/A"}
Categories: ${activeCats}
Amenities: ${activeAmen}
Notes: ${hotel.notes ?? "N/A"}

Generate all 15 variants in all ${langCount} languages. Every value must be within the character limit.`

  const raw = await aiClient.complete(systemPrompt, userPrompt)
  const parsed = JSON.parse(raw) as Record<string, Record<string, string>>

  for (const variant of VARIANTS) {
    const key = `${variant.code}_${variant.label}`
    const copies = parsed[key] ?? {}

    await GenerationRepository.upsertAsset({
      generationId,
      hotelCode: hotel.hotelCode,
      assetType,
      variantCode: variant.code,
      variantLabel: variant.label,
      copies,
    })
  }
}

export async function triggerGeneration(
  projectId: string,
  userId: string,
  options?: { languages?: string[]; campaignContext?: string; name?: string }
): Promise<string> {
  const allLanguageCodes = LANGUAGES.map((l) => l.code as string)
  const languages = options?.languages && options.languages.length > 0
    ? options.languages
    : allLanguageCodes

  const generation = await GenerationRepository.create(projectId, {
    languages,
    campaignContext: options?.campaignContext,
    name: options?.name,
  })

  await DomainEventStore.write({
    eventType: "generation.triggered",
    aggregateId: generation.id,
    aggregateType: "Generation",
    userId,
    projectId,
    payload: { generationId: generation.id, languages, campaignContext: options?.campaignContext },
  })

  runGenerationJob(generation.id, projectId, userId, languages, options?.campaignContext).catch((err) => {
    console.error(`Generation ${generation.id} job failed:`, err)
  })

  return generation.id
}

export async function runGenerationJob(
  generationId: string,
  projectId: string,
  userId: string,
  languages: string[],
  campaignContext?: string | null,
  lockedAssetIds?: string[],
  excludeHotelCodes?: string[],
  recipe?: string | null
): Promise<void> {
  const startedAt = Date.now()

  await GenerationRepository.updateStatus(generationId, "RUNNING")

  try {
    const projectHotels = await ProjectHotelRepository.findByProject(projectId)
    const included = projectHotels.filter(
      (h) => h.included && !(excludeHotelCodes?.includes(h.hotelCode))
    )
    const toneConfigs = await ToneConfigRepository.findAll()
    const aiClient = makeAIClient()

    const tasks: Array<{ hotel: ProjectHotel; assetType: AssetType }> = []

    if (lockedAssetIds && lockedAssetIds.length > 0) {
      // Only regenerate assets not in lockedAssetIds
      const existingAssets = await GenerationRepository.findAssets(generationId)
      const lockedSet = new Set(lockedAssetIds)

      for (const hotel of included) {
        for (const assetType of ASSET_TYPES) {
          const assetsForCombo = existingAssets.filter(
            (a) => a.hotelCode === hotel.hotelCode && a.assetType === assetType
          )
          const allLocked = assetsForCombo.length > 0 && assetsForCombo.every((a) => lockedSet.has(a.id))
          if (!allLocked) tasks.push({ hotel, assetType })
        }
      }
    } else {
      for (const hotel of included) {
        for (const assetType of ASSET_TYPES) {
          tasks.push({ hotel, assetType })
        }
      }
    }

    await withConcurrency(tasks, CONCURRENCY, async ({ hotel, assetType }) => {
      await generateForHotel(generationId, hotel, toneConfigs, assetType, languages, campaignContext, aiClient, recipe)
    })

    await GenerationRepository.updateStatus(generationId, "COMPLETE", { completedAt: new Date() })

    await DomainEventStore.write({
      eventType: "generation.completed",
      aggregateId: generationId,
      aggregateType: "Generation",
      userId,
      projectId,
      payload: {
        durationMs: Date.now() - startedAt,
        assetCount: tasks.length * VARIANTS.length,
      },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    await GenerationRepository.updateStatus(generationId, "FAILED", {
      completedAt: new Date(),
      errorMessage: message,
    })

    await DomainEventStore.write({
      eventType: "generation.failed",
      aggregateId: generationId,
      aggregateType: "Generation",
      userId,
      projectId,
      payload: { errorMessage: message },
    })
  }
}
