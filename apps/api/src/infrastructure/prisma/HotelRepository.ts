import { prisma } from "./client"
import { HotelProfile, type HotelProfileData } from "../../domain/hotel/HotelProfile"

function toHotel(row: Record<string, unknown>): HotelProfile {
  return new HotelProfile(row as unknown as HotelProfileData)
}

export const HotelRepository = {
  async findByProject(projectId: string): Promise<HotelProfile[]> {
    const rows = await prisma.hotelProfile.findMany({
      where: { projectId },
      orderBy: { hotelName: "asc" },
    })
    return rows.map(toHotel)
  },

  async findByCode(projectId: string, hotelCode: string): Promise<HotelProfile | null> {
    const row = await prisma.hotelProfile.findUnique({
      where: { projectId_hotelCode: { projectId, hotelCode } },
    })
    return row ? toHotel(row as unknown as Record<string, unknown>) : null
  },

  async upsert(projectId: string, data: Omit<HotelProfileData, "id" | "projectId" | "createdAt" | "updatedAt">): Promise<HotelProfile> {
    const row = await prisma.hotelProfile.upsert({
      where: { projectId_hotelCode: { projectId, hotelCode: data.hotelCode } },
      create: { projectId, ...data },
      update: { ...data },
    })
    return toHotel(row as unknown as Record<string, unknown>)
  },

  async upsertMany(projectId: string, hotels: Omit<HotelProfileData, "id" | "projectId" | "createdAt" | "updatedAt">[]): Promise<void> {
    await prisma.$transaction(
      hotels.map((data) =>
        prisma.hotelProfile.upsert({
          where: { projectId_hotelCode: { projectId, hotelCode: data.hotelCode } },
          create: { projectId, ...data },
          update: { ...data },
        })
      )
    )
  },

  async patch(projectId: string, hotelCode: string, data: Partial<Pick<HotelProfileData, "notes" | "included">>): Promise<HotelProfile> {
    const row = await prisma.hotelProfile.update({
      where: { projectId_hotelCode: { projectId, hotelCode } },
      data,
    })
    return toHotel(row as unknown as Record<string, unknown>)
  },

  async setAllIncluded(projectId: string, included: boolean): Promise<void> {
    await prisma.hotelProfile.updateMany({
      where: { projectId },
      data: { included },
    })
  },

  async deleteByProject(projectId: string): Promise<void> {
    await prisma.hotelProfile.deleteMany({ where: { projectId } })
  },
}
