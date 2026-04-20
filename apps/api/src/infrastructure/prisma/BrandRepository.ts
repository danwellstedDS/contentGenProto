import { prisma } from "./client"
import { Brand, type BrandData } from "../../domain/hotel/Brand"

function toBrand(row: Record<string, unknown>): Brand {
  return new Brand({
    id: row.id as string,
    name: row.name as string,
    chainId: row.chainId as string,
    tone: row.tone as string | null,
    prohibitedWords: (row.prohibitedWords ?? []) as string[],
    mandatoryIncludes: (row.mandatoryIncludes ?? []) as string[],
    copyStyle: row.copyStyle as string | null,
    notes: row.notes as string | null,
    createdAt: row.createdAt as Date,
    updatedAt: row.updatedAt as Date,
    deletedAt: row.deletedAt as Date | null,
  })
}

export const BrandRepository = {
  async findAll(opts?: { chainId?: string; hasVoice?: boolean }): Promise<Brand[]> {
    const rows = await prisma.brand.findMany({
      where: {
        deletedAt: null,
        ...(opts?.chainId ? { chainId: opts.chainId } : {}),
        ...(opts?.hasVoice === true
          ? { OR: [{ tone: { not: null } }, { copyStyle: { not: null } }] }
          : opts?.hasVoice === false
          ? { AND: [{ tone: null }, { copyStyle: null }] }
          : {}),
      },
      orderBy: [{ chain: { name: "asc" } }, { name: "asc" }],
    })
    return rows.map((r) => toBrand(r as unknown as Record<string, unknown>))
  },

  async findById(id: string): Promise<Brand | null> {
    const row = await prisma.brand.findUnique({ where: { id } })
    return row ? toBrand(row as unknown as Record<string, unknown>) : null
  },

  async findByChainAndName(chainId: string, name: string): Promise<Brand | null> {
    const row = await prisma.brand.findFirst({
      where: { chainId, name: { equals: name, mode: "insensitive" }, deletedAt: null },
    })
    return row ? toBrand(row as unknown as Record<string, unknown>) : null
  },

  async findOrCreate(chainId: string, name: string): Promise<{ brand: Brand; created: boolean }> {
    const existing = await BrandRepository.findByChainAndName(chainId, name)
    if (existing) return { brand: existing, created: false }
    const row = await prisma.brand.create({ data: { chainId, name } })
    return { brand: toBrand(row as unknown as Record<string, unknown>), created: true }
  },

  async patch(id: string, data: Partial<BrandData>): Promise<Brand> {
    const row = await prisma.brand.update({ where: { id }, data })
    return toBrand(row as unknown as Record<string, unknown>)
  },

  async softDelete(id: string): Promise<void> {
    await prisma.brand.update({ where: { id }, data: { deletedAt: new Date() } })
  },

  async hotelCount(id: string): Promise<number> {
    return prisma.hotel.count({ where: { brandId: id, deletedAt: null } })
  },

  // For list views: brands with hotel count and chain name
  async findAllWithCounts(opts?: { chainId?: string; hasVoice?: boolean }): Promise<Array<BrandData & { hotelCount: number; chainName: string }>> {
    const rows = await prisma.brand.findMany({
      where: {
        deletedAt: null,
        ...(opts?.chainId ? { chainId: opts.chainId } : {}),
        ...(opts?.hasVoice === true
          ? { OR: [{ tone: { not: null } }, { copyStyle: { not: null } }] }
          : opts?.hasVoice === false
          ? { AND: [{ tone: null }, { copyStyle: null }] }
          : {}),
      },
      orderBy: [{ chain: { name: "asc" } }, { name: "asc" }],
      include: {
        chain: { select: { name: true } },
        _count: { select: { hotels: true } },
      },
    })
    return rows.map((r) => ({
      ...toBrand(r as unknown as Record<string, unknown>).toData(),
      hotelCount: r._count.hotels,
      chainName: r.chain.name,
    }))
  },
}
