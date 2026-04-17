import Papa from "papaparse"
import { VARIANTS, LANGUAGES, LIMITS } from "@hotel-copy/shared"
import { GenerationRepository } from "../infrastructure/prisma/GenerationRepository"
import { HotelRepository } from "../infrastructure/prisma/HotelRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import { countCharacters } from "@hotel-copy/shared"
import type { AssetType } from "@hotel-copy/shared"

const ALL_LANG_NAMES: Record<string, string> = {}
for (const l of LANGUAGES) ALL_LANG_NAMES[l.code] = l.name

export interface ExportResult {
  csv: string
  filename: string
  violationCount: number
}

export async function exportAssets(
  generationId: string,
  projectId: string,
  userId: string,
  assetType: AssetType
): Promise<ExportResult> {
  const generation = await GenerationRepository.findById(generationId)
  if (!generation || generation.projectId !== projectId) {
    throw new Error("Generation not found")
  }

  // Use generation's languages if set, otherwise fall back to all languages
  const langCodes = generation.languages.length > 0
    ? generation.languages
    : LANGUAGES.map((l) => l.code as string)

  const allAssets = await GenerationRepository.findAssets(generationId)
  const assets = allAssets.filter((a) => a.assetType === assetType)

  const hotels = await HotelRepository.findByProject(projectId)
  const hotelChain: Record<string, string> = {}
  for (const h of hotels) hotelChain[h.hotelCode] = h.chain

  const limit = LIMITS[assetType]
  let violationCount = 0

  const langHeaders = langCodes.map((code) => ALL_LANG_NAMES[code] ?? code)
  const headers = ["Chain", "Variant", ...langHeaders]

  const rows: string[][] = [
    headers,
    [`Character limit`, ``, ...langCodes.map(() => String(limit))],
  ]

  const byHotel: Record<string, Record<string, Record<string, string>>> = {}
  for (const asset of assets) {
    if (!byHotel[asset.hotelCode]) byHotel[asset.hotelCode] = {}
    byHotel[asset.hotelCode][asset.variantCode] = asset.copies
  }

  for (const [hotelCode, variantMap] of Object.entries(byHotel)) {
    for (const variant of VARIANTS) {
      const copies = variantMap[variant.code] ?? {}
      const chain = hotelChain[hotelCode] ?? ""
      const variantLabel = `${variant.code} - ${variant.label}`
      const langValues = langCodes.map((code) => {
        const text = (copies as Record<string, string>)[code] ?? ""
        if (countCharacters(text) > limit) violationCount++
        return text
      })
      rows.push([chain, variantLabel, ...langValues])
    }
  }

  const csv = Papa.unparse(rows)

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19)
  const filename = `${assetType}_${timestamp}.csv`

  await DomainEventStore.write({
    eventType: "export.triggered",
    aggregateId: generationId,
    aggregateType: "Generation",
    userId,
    projectId,
    payload: {
      assetType,
      hotelCount: Object.keys(byHotel).length,
      languages: langCodes,
    },
  })

  return { csv, filename, violationCount }
}
