import { prisma } from "./client"
import { Generation, type GenerationData, type GenerationStatus } from "../../domain/generation/Generation"
import { GeneratedAsset, type GeneratedAssetData } from "../../domain/generation/GeneratedAsset"
import type { AssetType } from "@hotel-copy/shared"

function toGeneration(row: Record<string, unknown>): Generation {
  return new Generation(row as unknown as GenerationData)
}

function toAsset(row: Record<string, unknown>): GeneratedAsset {
  return new GeneratedAsset(row as unknown as GeneratedAssetData)
}

export const GenerationRepository = {
  async create(projectId: string, options?: { languages?: string[]; campaignContext?: string; name?: string }): Promise<Generation> {
    const row = await prisma.generation.create({
      data: {
        projectId,
        languages: options?.languages ?? [],
        campaignContext: options?.campaignContext ?? null,
        name: options?.name ?? null,
      },
    })
    return toGeneration(row as unknown as Record<string, unknown>)
  },

  async findById(id: string): Promise<Generation | null> {
    const row = await prisma.generation.findUnique({ where: { id } })
    return row ? toGeneration(row as unknown as Record<string, unknown>) : null
  },

  async findLatestByProjectId(projectId: string): Promise<Generation | null> {
    const row = await prisma.generation.findFirst({
      where: { projectId },
      orderBy: { triggeredAt: "desc" },
    })
    return row ? toGeneration(row as unknown as Record<string, unknown>) : null
  },

  async updateStatus(id: string, status: GenerationStatus, extra?: { completedAt?: Date; errorMessage?: string }): Promise<void> {
    await prisma.generation.update({
      where: { id },
      data: { status, ...extra },
    })
  },

  async updateName(id: string, name: string): Promise<Generation> {
    const row = await prisma.generation.update({
      where: { id },
      data: { name },
    })
    return toGeneration(row as unknown as Record<string, unknown>)
  },

  async updateRecipe(id: string, recipe: string): Promise<void> {
    await prisma.generation.update({
      where: { id },
      data: { recipe },
    })
  },

  async upsertAsset(data: Omit<GeneratedAssetData, "id" | "isEdited" | "createdAt" | "updatedAt">): Promise<GeneratedAsset> {
    const row = await prisma.generatedAsset.upsert({
      where: {
        generationId_hotelCode_assetType_variantCode: {
          generationId: data.generationId,
          hotelCode: data.hotelCode,
          assetType: data.assetType as AssetType,
          variantCode: data.variantCode,
        },
      },
      create: {
        generationId: data.generationId,
        hotelCode: data.hotelCode,
        assetType: data.assetType as AssetType,
        variantCode: data.variantCode,
        variantLabel: data.variantLabel,
        copies: data.copies as Record<string, string>,
      },
      update: {
        variantLabel: data.variantLabel,
        copies: data.copies as Record<string, string>,
        isEdited: false,
      },
    })
    return toAsset(row as unknown as Record<string, unknown>)
  },

  async findAssets(generationId: string): Promise<GeneratedAsset[]> {
    const rows = await prisma.generatedAsset.findMany({
      where: { generationId },
      orderBy: [{ hotelCode: "asc" }, { assetType: "asc" }, { variantCode: "asc" }],
    })
    return rows.map(toAsset)
  },

  async findAssetById(assetId: string): Promise<GeneratedAsset | null> {
    const row = await prisma.generatedAsset.findUnique({ where: { id: assetId } })
    return row ? toAsset(row as unknown as Record<string, unknown>) : null
  },

  async findAssetsByIds(assetIds: string[]): Promise<GeneratedAsset[]> {
    const rows = await prisma.generatedAsset.findMany({
      where: { id: { in: assetIds } },
    })
    return rows.map(toAsset)
  },

  async updateAsset(assetId: string, copies: Record<string, string>): Promise<GeneratedAsset> {
    const row = await prisma.generatedAsset.update({
      where: { id: assetId },
      data: { copies, isEdited: true },
    })
    return toAsset(row as unknown as Record<string, unknown>)
  },

  async addApprovedHotelCode(id: string, hotelCode: string): Promise<Generation> {
    const row = await prisma.generation.update({
      where: { id },
      data: { approvedHotelCodes: { push: hotelCode } },
    })
    return toGeneration(row as unknown as Record<string, unknown>)
  },

  async removeApprovedHotelCode(id: string, hotelCode: string): Promise<Generation> {
    const current = await prisma.generation.findUnique({ where: { id } })
    const filtered = (current?.approvedHotelCodes ?? []).filter((c: string) => c !== hotelCode)
    const row = await prisma.generation.update({
      where: { id },
      data: { approvedHotelCodes: { set: filtered } },
    })
    return toGeneration(row as unknown as Record<string, unknown>)
  },

  async setApprovedHotelCodes(id: string, codes: string[]): Promise<Generation> {
    const row = await prisma.generation.update({
      where: { id },
      data: { approvedHotelCodes: { set: codes } },
    })
    return toGeneration(row as unknown as Record<string, unknown>)
  },
}
