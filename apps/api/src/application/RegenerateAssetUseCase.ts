import { LIMITS } from "@hotel-copy/shared"
import type { AssetType } from "@hotel-copy/shared"
import { GenerationRepository } from "../infrastructure/prisma/GenerationRepository"
import { ProjectHotelRepository } from "../infrastructure/prisma/ProjectHotelRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import { makeAIClient } from "../infrastructure/ai/aiClient"
import type { GeneratedAsset } from "../domain/generation/GeneratedAsset"
import type { ProjectHotel } from "../domain/hotel/ProjectHotel"
import type { ChainData } from "../domain/hotel/Chain"
import type { BrandData } from "../domain/hotel/Brand"

function hasVoice(entity: ChainData | BrandData): boolean {
  return !!(entity.tone || entity.copyStyle || entity.prohibitedWords.length > 0 || entity.mandatoryIncludes.length > 0)
}

function toPromptText(entity: ChainData | BrandData): string {
  const parts: string[] = []
  if (entity.tone) parts.push(`Tone: ${entity.tone}`)
  if (entity.copyStyle) parts.push(`Style: ${entity.copyStyle}`)
  if (entity.prohibitedWords.length > 0) parts.push(`Prohibited words: ${entity.prohibitedWords.join(", ")}`)
  if (entity.mandatoryIncludes.length > 0) parts.push(`Must include: ${entity.mandatoryIncludes.join(", ")}`)
  if (entity.notes) parts.push(`Notes: ${entity.notes}`)
  return parts.join(". ")
}

function buildToneText(hotel: ProjectHotel): string {
  const chain = hotel.chain
  const brand = hotel.brand
  const parts: string[] = []
  if (chain && hasVoice(chain)) parts.push(`Chain (${chain.name}): ${toPromptText(chain)}`)
  if (brand && hasVoice(brand)) parts.push(`Brand (${brand.name}): ${toPromptText(brand)}`)
  return parts.join("\n") || "No specific tone guidance."
}

export async function regenerateAsset(
  assetId: string,
  generationId: string,
  projectId: string,
  userId: string
): Promise<GeneratedAsset> {
  const existing = await GenerationRepository.findAssetById(assetId)
  if (!existing) throw new Error("Asset not found")

  const generation = await GenerationRepository.findById(generationId)
  if (!generation) throw new Error("Generation not found")

  const hotel = await ProjectHotelRepository.findByProjectAndCode(projectId, existing.hotelCode)
  if (!hotel) throw new Error("Hotel not found")

  const aiClient = makeAIClient()

  const assetType = existing.assetType as AssetType
  const limit = LIMITS[assetType]
  const toneText = buildToneText(hotel)
  const languages = generation.languages.length > 0 ? generation.languages : ["en"]
  const langStructure: Record<string, string> = {}
  for (const code of languages) langStructure[code] = "..."

  const systemPrompt = `You are a Google Ads copywriter for hotel campaigns.
Asset type: ${assetType}, character limit: ${limit} (CJK double-count applied).

Output ONLY a valid JSON object with this exact structure (one variant):
{
  "${existing.variantCode}_${existing.variantLabel}": ${JSON.stringify(langStructure)}
}

Brand tone: ${toneText}`

  const userPrompt = `Hotel: ${hotel.hotelName}
Chain: ${hotel.chain?.name ?? "N/A"}, Brand: ${hotel.brand?.name ?? "N/A"}
Country: ${hotel.country ?? "N/A"}, City: ${hotel.city ?? "N/A"}
Description: ${hotel.description ?? "N/A"}
Regenerate variant "${existing.variantCode} - ${existing.variantLabel}" in ${languages.length} languages: ${languages.join(", ")}.`

  const raw = await aiClient.complete(systemPrompt, userPrompt)
  const parsed = JSON.parse(raw) as Record<string, Record<string, string>>
  const key = `${existing.variantCode}_${existing.variantLabel}`
  const copies = parsed[key] ?? {}

  const updated = await GenerationRepository.upsertAsset({
    generationId,
    hotelCode: existing.hotelCode,
    assetType,
    variantCode: existing.variantCode,
    variantLabel: existing.variantLabel,
    copies,
  })

  await DomainEventStore.write({
    eventType: "asset.regenerated",
    aggregateId: assetId,
    aggregateType: "GeneratedAsset",
    userId,
    projectId,
    payload: { assetType, variantCode: existing.variantCode, hotelCode: existing.hotelCode },
  })

  return updated
}
