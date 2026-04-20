export interface ChainData {
  id: string
  name: string
  tone?: string | null
  prohibitedWords: string[]
  mandatoryIncludes: string[]
  copyStyle?: string | null
  notes?: string | null
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

export type ChainInput = Omit<ChainData, "id" | "createdAt" | "updatedAt" | "deletedAt">

export class Chain {
  constructor(private readonly data: ChainData) {}

  get id() { return this.data.id }
  get name() { return this.data.name }
  get tone() { return this.data.tone }
  get prohibitedWords() { return this.data.prohibitedWords }
  get mandatoryIncludes() { return this.data.mandatoryIncludes }
  get copyStyle() { return this.data.copyStyle }
  get notes() { return this.data.notes }
  get deletedAt() { return this.data.deletedAt }

  hasVoice(): boolean {
    return !!(this.data.tone || this.data.copyStyle || this.data.prohibitedWords.length > 0 || this.data.mandatoryIncludes.length > 0)
  }

  toPromptText(): string {
    const parts: string[] = []
    if (this.data.tone) parts.push(`Tone: ${this.data.tone}`)
    if (this.data.copyStyle) parts.push(`Style: ${this.data.copyStyle}`)
    if (this.data.prohibitedWords.length > 0) parts.push(`Prohibited words: ${this.data.prohibitedWords.join(", ")}`)
    if (this.data.mandatoryIncludes.length > 0) parts.push(`Must include: ${this.data.mandatoryIncludes.join(", ")}`)
    if (this.data.notes) parts.push(`Notes: ${this.data.notes}`)
    return parts.join(". ")
  }

  toData(): ChainData {
    return { ...this.data }
  }
}
