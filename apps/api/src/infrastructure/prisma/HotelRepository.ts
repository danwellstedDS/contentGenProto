import { prisma } from "./client"
import { Hotel, type HotelData, type HotelInput } from "../../domain/hotel/Hotel"

function toHotel(row: Record<string, unknown>): Hotel {
  const chain = row.chain as { name: string } | null | undefined
  const brand = row.brand as { name: string } | null | undefined
  return new Hotel({
    ...row,
    chainId: row.chainId as string | null,
    brandId: row.brandId as string | null,
    chainName: chain?.name ?? null,
    brandName: brand?.name ?? null,
    categories: (row.categories ?? {}) as Record<string, boolean>,
    amenities: (row.amenities ?? {}) as Record<string, Record<string, boolean>>,
    urls: (row.urls ?? {}) as Record<string, Record<string, string>>,
    localNames: (row.localNames ?? {}) as Record<string, Record<string, string>>,
  } as HotelData)
}

const chainBrandInclude = { chain: { select: { name: true } }, brand: { select: { name: true } } }

export const HotelRepository = {
  async findAll(opts?: { chainId?: string; search?: string }): Promise<Hotel[]> {
    const rows = await prisma.hotel.findMany({
      where: {
        deletedAt: null,
        ...(opts?.chainId ? { chainId: opts.chainId } : {}),
        ...(opts?.search
          ? {
              OR: [
                { hotelName: { contains: opts.search, mode: "insensitive" } },
                { hotelCode: { contains: opts.search, mode: "insensitive" } },
              ],
            }
          : {}),
      },
      orderBy: { hotelName: "asc" },
      include: chainBrandInclude,
    })
    return rows.map((r) => toHotel(r as unknown as Record<string, unknown>))
  },

  async findByCode(hotelCode: string): Promise<Hotel | null> {
    const row = await prisma.hotel.findUnique({ where: { hotelCode }, include: chainBrandInclude })
    return row ? toHotel(row as unknown as Record<string, unknown>) : null
  },

  async findById(id: string): Promise<Hotel | null> {
    const row = await prisma.hotel.findUnique({ where: { id }, include: chainBrandInclude })
    return row ? toHotel(row as unknown as Record<string, unknown>) : null
  },

  async upsert(data: HotelInput): Promise<Hotel> {
    const { chainName: _cn, brandName: _bn, ...dbData } = data as HotelInput & { chainName?: unknown; brandName?: unknown }
    const row = await prisma.hotel.upsert({
      where: { hotelCode: dbData.hotelCode },
      create: { ...dbData, deletedAt: null },
      update: { ...dbData, deletedAt: null },
      include: chainBrandInclude,
    })
    return toHotel(row as unknown as Record<string, unknown>)
  },

  async upsertMany(hotels: HotelInput[]): Promise<void> {
    await prisma.$transaction(
      hotels.map((data) => {
        const { chainName: _cn, brandName: _bn, ...dbData } = data as HotelInput & { chainName?: unknown; brandName?: unknown }
        return prisma.hotel.upsert({
          where: { hotelCode: dbData.hotelCode },
          create: { ...dbData, deletedAt: null },
          update: { ...dbData, deletedAt: null },
        })
      })
    )
  },

  async patch(hotelCode: string, data: Partial<HotelInput>): Promise<Hotel> {
    const row = await prisma.hotel.update({
      where: { hotelCode },
      data,
      include: chainBrandInclude,
    })
    return toHotel(row as unknown as Record<string, unknown>)
  },

  async softDelete(hotelCode: string): Promise<void> {
    await prisma.hotel.update({
      where: { hotelCode },
      data: { deletedAt: new Date() },
    })
  },

  async softDeleteAll(): Promise<void> {
    await prisma.hotel.updateMany({ data: { deletedAt: new Date() } })
  },
}
