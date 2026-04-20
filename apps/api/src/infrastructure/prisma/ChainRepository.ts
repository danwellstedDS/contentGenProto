import { prisma } from "./client"
import { Chain, type ChainData } from "../../domain/hotel/Chain"

function toChain(row: Record<string, unknown>): Chain {
  return new Chain({
    id: row.id as string,
    name: row.name as string,
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

export const ChainRepository = {
  async findAll(opts?: { hasVoice?: boolean }): Promise<Chain[]> {
    const rows = await prisma.chain.findMany({
      where: {
        deletedAt: null,
        ...(opts?.hasVoice === true
          ? { OR: [{ tone: { not: null } }, { copyStyle: { not: null } }] }
          : opts?.hasVoice === false
          ? { AND: [{ tone: null }, { copyStyle: null }] }
          : {}),
      },
      orderBy: { name: "asc" },
    })
    return rows.map((r) => toChain(r as unknown as Record<string, unknown>))
  },

  async findById(id: string): Promise<Chain | null> {
    const row = await prisma.chain.findUnique({ where: { id } })
    return row ? toChain(row as unknown as Record<string, unknown>) : null
  },

  async findByName(name: string): Promise<Chain | null> {
    const row = await prisma.chain.findFirst({
      where: { name: { equals: name, mode: "insensitive" }, deletedAt: null },
    })
    return row ? toChain(row as unknown as Record<string, unknown>) : null
  },

  async findOrCreate(name: string): Promise<{ chain: Chain; created: boolean }> {
    const existing = await ChainRepository.findByName(name)
    if (existing) return { chain: existing, created: false }
    const row = await prisma.chain.create({ data: { name } })
    return { chain: toChain(row as unknown as Record<string, unknown>), created: true }
  },

  async patch(id: string, data: Partial<ChainData>): Promise<Chain> {
    const row = await prisma.chain.update({
      where: { id },
      data,
    })
    return toChain(row as unknown as Record<string, unknown>)
  },

  async softDelete(id: string): Promise<void> {
    await prisma.chain.update({ where: { id }, data: { deletedAt: new Date() } })
  },

  async hotelCount(id: string): Promise<number> {
    return prisma.hotel.count({ where: { chainId: id, deletedAt: null } })
  },

  // For list views: returns chain with hotel count and brand count
  async findAllWithCounts(opts?: { hasVoice?: boolean }): Promise<Array<ChainData & { hotelCount: number; brandCount: number }>> {
    const rows = await prisma.chain.findMany({
      where: {
        deletedAt: null,
        ...(opts?.hasVoice === true
          ? { OR: [{ tone: { not: null } }, { copyStyle: { not: null } }] }
          : opts?.hasVoice === false
          ? { AND: [{ tone: null }, { copyStyle: null }] }
          : {}),
      },
      orderBy: { name: "asc" },
      include: {
        _count: { select: { hotels: true, brands: true } },
      },
    })
    return rows.map((r) => ({
      ...toChain(r as unknown as Record<string, unknown>).toData(),
      hotelCount: r._count.hotels,
      brandCount: r._count.brands,
    }))
  },

  // Returns brands belonging to this chain
  async findBrands(chainId: string) {
    const rows = await prisma.brand.findMany({
      where: { chainId, deletedAt: null },
      orderBy: { name: "asc" },
      include: { _count: { select: { hotels: true } } },
    })
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      chainId: r.chainId,
      tone: r.tone,
      prohibitedWords: r.prohibitedWords,
      mandatoryIncludes: r.mandatoryIncludes,
      copyStyle: r.copyStyle,
      notes: r.notes,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
      deletedAt: r.deletedAt,
      hotelCount: r._count.hotels,
    }))
  },
}
