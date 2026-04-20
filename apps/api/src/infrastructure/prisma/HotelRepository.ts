import { prisma } from "./client"
import { Hotel, type HotelData, type HotelInput } from "../../domain/hotel/Hotel"

function toHotel(row: Record<string, unknown>): Hotel {
  return new Hotel({
    ...row,
    categories: (row.categories ?? {}) as Record<string, boolean>,
    amenities: (row.amenities ?? {}) as Record<string, Record<string, boolean>>,
    urls: (row.urls ?? {}) as Record<string, Record<string, string>>,
    localNames: (row.localNames ?? {}) as Record<string, Record<string, string>>,
  } as HotelData)
}

export const HotelRepository = {
  async findAll(opts?: { chain?: string; search?: string }): Promise<Hotel[]> {
    const rows = await prisma.hotel.findMany({
      where: {
        deletedAt: null,
        ...(opts?.chain ? { chain: opts.chain } : {}),
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
    })
    return rows.map((r) => toHotel(r as unknown as Record<string, unknown>))
  },

  async findByCode(hotelCode: string): Promise<Hotel | null> {
    const row = await prisma.hotel.findUnique({ where: { hotelCode } })
    return row ? toHotel(row as unknown as Record<string, unknown>) : null
  },

  async findById(id: string): Promise<Hotel | null> {
    const row = await prisma.hotel.findUnique({ where: { id } })
    return row ? toHotel(row as unknown as Record<string, unknown>) : null
  },

  async upsert(data: HotelInput): Promise<Hotel> {
    const row = await prisma.hotel.upsert({
      where: { hotelCode: data.hotelCode },
      create: { ...data, deletedAt: null },
      update: { ...data, deletedAt: null },
    })
    return toHotel(row as unknown as Record<string, unknown>)
  },

  async upsertMany(hotels: HotelInput[]): Promise<void> {
    await prisma.$transaction(
      hotels.map((data) =>
        prisma.hotel.upsert({
          where: { hotelCode: data.hotelCode },
          create: { ...data, deletedAt: null },
          update: { ...data, deletedAt: null },
        })
      )
    )
  },

  async patch(hotelCode: string, data: Partial<HotelInput>): Promise<Hotel> {
    const row = await prisma.hotel.update({
      where: { hotelCode },
      data,
    })
    return toHotel(row as unknown as Record<string, unknown>)
  },

  async softDelete(hotelCode: string): Promise<void> {
    await prisma.hotel.update({
      where: { hotelCode },
      data: { deletedAt: new Date() },
    })
  },

  // Used by replace-mode import: soft-deletes all library hotels so the upsert revives matches
  async softDeleteAll(): Promise<void> {
    await prisma.hotel.updateMany({ data: { deletedAt: new Date() } })
  },
}
