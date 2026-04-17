export type ToneConfigLevel = "CHAIN" | "BRAND"

export interface ToneConfigData {
  id: string
  level: ToneConfigLevel
  entityName: string
  tone: string
  prohibitedWords: string[]
  mandatoryIncludes: string[]
  copyStyle: string
  notes?: string | null
  createdAt: Date
  updatedAt: Date
}

export class ToneConfig {
  constructor(private readonly data: ToneConfigData) {}

  get id() { return this.data.id }
  get level() { return this.data.level }
  get entityName() { return this.data.entityName }
  get tone() { return this.data.tone }
  get prohibitedWords() { return this.data.prohibitedWords }
  get mandatoryIncludes() { return this.data.mandatoryIncludes }
  get copyStyle() { return this.data.copyStyle }
  get notes() { return this.data.notes }

  toPromptText(): string {
    const parts = [`Tone: ${this.data.tone}`, `Style: ${this.data.copyStyle}`]
    if (this.data.prohibitedWords.length > 0) {
      parts.push(`Prohibited words: ${this.data.prohibitedWords.join(", ")}`)
    }
    if (this.data.mandatoryIncludes.length > 0) {
      parts.push(`Must include: ${this.data.mandatoryIncludes.join(", ")}`)
    }
    if (this.data.notes) {
      parts.push(`Notes: ${this.data.notes}`)
    }
    return parts.join(". ")
  }

  toData(): ToneConfigData {
    return { ...this.data }
  }
}
