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

  const newChains: CreatedChain[] = []
  const newBrands: CreatedBrand[] = []

  // --- Pass 1: resolve unique chain names sequentially (no concurrent creates) ---
  const chainIdCache = new Map<string, string>() // normalised name → id

  const uniqueChainNames = new Set<string>()
  for (const h of result.hotels) {
    if (h.chain) uniqueChainNames.add(h.chain)
  }

  for (const chainName of uniqueChainNames) {
    const { chain, created } = await ChainRepository.findOrCreate(chainName)
    chainIdCache.set(chainName.toLowerCase(), chain.id)
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

  // --- Pass 2: resolve unique (chainId, brand name) pairs sequentially ---
  const brandIdCache = new Map<string, string>() // `${chainId}:normalised name` → id

  const uniqueBrandPairs = new Set<string>() // `${chainName.lower}:${brandName.lower}`
  for (const h of result.hotels) {
    if (h.chain && h.brand) {
      uniqueBrandPairs.add(`${h.chain.toLowerCase()}:${h.brand.toLowerCase()}`)
    }
  }

  for (const pair of uniqueBrandPairs) {
    const colonIdx = pair.indexOf(":")
    const chainKey = pair.slice(0, colonIdx)
    const brandKey = pair.slice(colonIdx + 1)
    const chainId = chainIdCache.get(chainKey)
    if (!chainId) continue

    // Find original-case brand name from the parsed hotels
    const origBrand = result.hotels.find(
      (h) => h.chain?.toLowerCase() === chainKey && h.brand?.toLowerCase() === brandKey
    )?.brand ?? brandKey

    const chainName = newChains.find((c) => c.id === chainId)?.name ?? chainKey

    const { brand, created } = await BrandRepository.findOrCreate(chainId, origBrand)
    brandIdCache.set(`${chainId}:${brandKey}`, brand.id)
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

  // --- Pass 3: map hotels to resolved IDs (synchronous, no DB calls) ---
  const hotelsWithIds = result.hotels.map((h) => {
    const chainId = h.chain ? (chainIdCache.get(h.chain.toLowerCase()) ?? null) : null
    const brandId = (h.brand && chainId)
      ? (brandIdCache.get(`${chainId}:${h.brand.toLowerCase()}`) ?? null)
      : null
    const { chain: _c, brand: _b, ...rest } = h
    return { ...rest, chainId, brandId }
  })

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
