import { countCharacters, LIMITS } from "@hotel-copy/shared"
import type { AssetType } from "@hotel-copy/shared"

export interface GeneratedAssetData {
  id: string
  generationId: string
  hotelCode: string
  assetType: AssetType
  variantCode: string
  variantLabel: string
  copies: Record<string, string>
  isEdited: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CharacterViolation {
  language: string
  count: number
  limit: number
}

export class GeneratedAsset {
  constructor(private readonly data: GeneratedAssetData) {}

  get id() { return this.data.id }
  get generationId() { return this.data.generationId }
  get hotelCode() { return this.data.hotelCode }
  get assetType() { return this.data.assetType }
  get variantCode() { return this.data.variantCode }
  get variantLabel() { return this.data.variantLabel }
  get copies() { return this.data.copies }
  get isEdited() { return this.data.isEdited }

  characterViolations(): CharacterViolation[] {
    const limit = LIMITS[this.data.assetType]
    const violations: CharacterViolation[] = []
    for (const [lang, text] of Object.entries(this.data.copies)) {
      const count = countCharacters(text)
      if (count > limit) {
        violations.push({ language: lang, count, limit })
      }
    }
    return violations
  }

  hasViolations(): boolean {
    return this.characterViolations().length > 0
  }

  toData(): GeneratedAssetData {
    return { ...this.data }
  }
}
