import { prisma } from "./client"
import { ToneConfig, type ToneConfigData, type ToneConfigLevel } from "../../domain/tone-config/ToneConfig"

function toToneConfig(row: Record<string, unknown>): ToneConfig {
  return new ToneConfig(row as unknown as ToneConfigData)
}

export const ToneConfigRepository = {
  async findAll(): Promise<ToneConfig[]> {
    const rows = await prisma.toneConfig.findMany({
      orderBy: [{ level: "asc" }, { entityName: "asc" }],
    })
    return rows.map(toToneConfig)
  },

  async findById(id: string): Promise<ToneConfig | null> {
    const row = await prisma.toneConfig.findUnique({ where: { id } })
    return row ? toToneConfig(row as unknown as Record<string, unknown>) : null
  },

  async create(data: {
    level: ToneConfigLevel
    entityName: string
    tone: string
    prohibitedWords: string[]
    mandatoryIncludes: string[]
    copyStyle: string
    notes?: string
  }): Promise<ToneConfig> {
    const row = await prisma.toneConfig.create({ data })
    return toToneConfig(row as unknown as Record<string, unknown>)
  },

  async update(id: string, data: {
    tone?: string
    prohibitedWords?: string[]
    mandatoryIncludes?: string[]
    copyStyle?: string
    notes?: string | null
  }): Promise<ToneConfig> {
    const row = await prisma.toneConfig.update({ where: { id }, data })
    return toToneConfig(row as unknown as Record<string, unknown>)
  },

  async delete(id: string): Promise<void> {
    await prisma.toneConfig.delete({ where: { id } })
  },
}
