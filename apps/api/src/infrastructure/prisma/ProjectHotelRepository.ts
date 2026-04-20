import { prisma } from "./client"
import { ProjectHotel, type ProjectHotelData } from "../../domain/hotel/ProjectHotel"

type PrismaProjectHotelRow = {
  id: string
  projectId: string
  hotelId: string
  notes: string | null
  included: boolean
  createdAt: Date
  updatedAt: Date
  hotel: {
    id: string
    hotelCode: string
    hotelName: string
    chain: string | null
    brand: string | null
    country: string | null
    city: string | null
    starRating: string | null
    roomCount: number | null
    googlePlaceId: string | null
    description: string | null
    categories: unknown
    amenities: unknown
    urls: unknown
    localNames: unknown
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
  }
}

function toProjectHotel(row: PrismaProjectHotelRow): ProjectHotel {
  return new ProjectHotel({
    id: row.id,
    projectId: row.projectId,
    hotelId: row.hotelId,
    notes: row.notes,
    included: row.included,
    hotelCode: row.hotel.hotelCode,
    hotelName: row.hotel.hotelName,
    chain: row.hotel.chain,
    brand: row.hotel.brand,
    country: row.hotel.country,
    city: row.hotel.city,
    starRating: row.hotel.starRating,
    roomCount: row.hotel.roomCount,
    googlePlaceId: row.hotel.googlePlaceId,
    description: row.hotel.description,
    categories: (row.hotel.categories ?? {}) as Record<string, boolean>,
    amenities: (row.hotel.amenities ?? {}) as Record<string, Record<string, boolean>>,
    urls: (row.hotel.urls ?? {}) as Record<string, Record<string, string>>,
    localNames: (row.hotel.localNames ?? {}) as Record<string, Record<string, string>>,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  } as ProjectHotelData)
}

export const ProjectHotelRepository = {
  async findByProject(projectId: string): Promise<ProjectHotel[]> {
    const rows = await prisma.projectHotel.findMany({
      where: { projectId },
      include: { hotel: true },
      orderBy: { hotel: { hotelName: "asc" } },
    })
    return rows.map((r) => toProjectHotel(r as unknown as PrismaProjectHotelRow))
  },

  async findByProjectAndCode(projectId: string, hotelCode: string): Promise<ProjectHotel | null> {
    const row = await prisma.projectHotel.findFirst({
      where: { projectId, hotel: { hotelCode } },
      include: { hotel: true },
    })
    return row ? toProjectHotel(row as unknown as PrismaProjectHotelRow) : null
  },

  async addHotelToProject(projectId: string, hotelId: string): Promise<ProjectHotel> {
    const row = await prisma.projectHotel.create({
      data: { projectId, hotelId },
      include: { hotel: true },
    })
    return toProjectHotel(row as unknown as PrismaProjectHotelRow)
  },

  async removeHotelFromProject(projectId: string, hotelCode: string): Promise<void> {
    const row = await prisma.projectHotel.findFirst({
      where: { projectId, hotel: { hotelCode } },
      select: { id: true },
    })
    if (row) {
      await prisma.projectHotel.delete({ where: { id: row.id } })
    }
  },

  async patchProjectHotel(
    projectId: string,
    hotelCode: string,
    data: { notes?: string | null; included?: boolean }
  ): Promise<ProjectHotel> {
    const existing = await prisma.projectHotel.findFirst({
      where: { projectId, hotel: { hotelCode } },
      select: { id: true },
    })
    if (!existing) throw new Error("ProjectHotel not found")

    const row = await prisma.projectHotel.update({
      where: { id: existing.id },
      data,
      include: { hotel: true },
    })
    return toProjectHotel(row as unknown as PrismaProjectHotelRow)
  },

  async setAllIncluded(projectId: string, included: boolean): Promise<void> {
    await prisma.projectHotel.updateMany({
      where: { projectId },
      data: { included },
    })
  },
}
