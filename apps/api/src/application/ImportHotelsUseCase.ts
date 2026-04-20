import { parseXlsx } from "../infrastructure/xlsx/xlsxParser"
import { HotelRepository } from "../infrastructure/prisma/HotelRepository"
import { ChainRepository } from "../infrastructure/prisma/ChainRepository"
import { BrandRepository } from "../infrastructure/prisma/BrandRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"

interface CreatedChain { id: string; name: string }
interface CreatedBrand { id: string; name: string; chainId: string; chainName: string }

export async function importHotels(
  userId: string,
  buffer: Buffer,
  mode: "replace" | "merge" = "merge"
) {
  const result = parseXlsx(buffer)

  if (mode === "replace") {
    console.log(`[ImportHotels] replace mode — soft-deleting all library hotels`)
    await HotelRepository.softDeleteAll()
  }

  // Resolve chain and brand names → FK IDs (create if not found)
  const newChains: CreatedChain[] = []
  const newBrands: CreatedBrand[] = []
  // Cache within this import run to avoid redundant DB calls
  const chainIdCache = new Map<string, string>() // name.lower → id
  const brandIdCache = new Map<string, string>() // `${chainId}:name.lower` → id

  const hotelsWithIds = await Promise.all(
    result.hotels.map(async (h) => {
      let chainId: string | null = null
      let brandId: string | null = null

      if (h.chain) {
        const key = h.chain.toLowerCase()
        if (chainIdCache.has(key)) {
          chainId = chainIdCache.get(key)!
        } else {
          const { chain, created } = await ChainRepository.findOrCreate(h.chain)
          chainId = chain.id
          chainIdCache.set(key, chain.id)
          if (created) {
            newChains.push({ id: chain.id, name: chain.name })
            await DomainEventStore.write({
              eventType: "chain.created",
              aggregateId: chain.id,
              aggregateType: "Chain",
              userId,
              payload: { name: chain.name, source: "import" },
            })
          }
        }
      }

      if (h.brand && chainId) {
        const key = `${chainId}:${h.brand.toLowerCase()}`
        if (brandIdCache.has(key)) {
          brandId = brandIdCache.get(key)!
        } else {
          const chainName = chainIdCache.size > 0
            ? (await ChainRepository.findById(chainId))?.name ?? ""
            : h.chain ?? ""
          const { brand, created } = await BrandRepository.findOrCreate(chainId, h.brand)
          brandId = brand.id
          brandIdCache.set(key, brand.id)
          if (created) {
            newBrands.push({ id: brand.id, name: brand.name, chainId, chainName })
            await DomainEventStore.write({
              eventType: "brand.created",
              aggregateId: brand.id,
              aggregateType: "Brand",
              userId,
              payload: { name: brand.name, chainId, chainName, source: "import" },
            })
          }
        }
      }

      // Return hotel input with IDs instead of string names; strip chain/brand strings
      const { chain: _c, brand: _b, ...rest } = h
      return { ...rest, chainId, brandId }
    })
  )

  console.log(`[ImportHotels] upserting ${hotelsWithIds.length} hotels in transaction`)
  await HotelRepository.upsertMany(hotelsWithIds)

  await DomainEventStore.write({
    eventType: "hotel.imported",
    aggregateId: "library",
    aggregateType: "Hotel",
    userId,
    payload: {
      hotelCount: result.imported,
      skipped: result.skipped,
      validationErrors: result.warnings.length,
      newChains: newChains.length,
      newBrands: newBrands.length,
      mode,
    },
  })

  return {
    imported: result.imported,
    skipped: result.skipped,
    warnings: result.warnings,
    chains: { created: newChains },
    brands: { created: newBrands },
  }
}
