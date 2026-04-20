import type { LanguageCode } from "../constants/languages"

export type AssetType = "HEADLINE" | "DESCRIPTION" | "LONG_HEADLINE"

export type ProjectStatus = "DRAFT" | "GENERATING" | "IN_REVIEW" | "COMPLETE"

export type GenerationStatus = "PENDING" | "RUNNING" | "COMPLETE" | "FAILED"

export type LanguageCopies = Record<LanguageCode, string>

export interface Project {
  id: string
  name: string
  status: ProjectStatus
  campaignType?: string | null
  versionNumber: number
  parentProjectId?: string | null
  createdAt: string
  updatedAt: string
}

// Chain — top-level brand hierarchy with tone of voice
export interface Chain {
  id: string
  name: string
  tone?: string | null
  prohibitedWords: string[]
  mandatoryIncludes: string[]
  copyStyle?: string | null
  notes?: string | null
  createdAt: string
  updatedAt: string
  deletedAt?: string | null
}

// Brand — belongs to a Chain; tone fields override chain per-field at generation time
export interface Brand {
  id: string
  name: string
  chainId: string
  tone?: string | null
  prohibitedWords: string[]
  mandatoryIncludes: string[]
  copyStyle?: string | null
  notes?: string | null
  createdAt: string
  updatedAt: string
  deletedAt?: string | null
}

export interface Hotel {
  id: string
  hotelCode: string
  hotelName: string
  chainId?: string | null
  brandId?: string | null
  chainName?: string | null   // resolved from FK join
  brandName?: string | null   // resolved from FK join
  country?: string | null
  city?: string | null
  starRating?: string | null
  roomCount?: number | null
  googlePlaceId?: string | null
  description?: string | null
  categories: Record<string, boolean>
  amenities: Record<string, Record<string, boolean>>
  urls: Record<string, Record<string, string>>
  localNames: Record<string, Record<string, string>>
  createdAt: string
  updatedAt: string
  deletedAt?: string | null
}

// Per-project join — carries hotel fields denormalised for UI convenience
export interface ProjectHotel {
  id: string
  projectId: string
  hotelId: string
  hotelCode: string
  hotelName: string
  chainId?: string | null
  brandId?: string | null
  chainName?: string | null
  brandName?: string | null
  country?: string | null
  city?: string | null
  starRating?: string | null
  roomCount?: number | null
  googlePlaceId?: string | null
  description?: string | null
  categories: Record<string, boolean>
  amenities: Record<string, Record<string, boolean>>
  urls: Record<string, Record<string, string>>
  localNames: Record<string, Record<string, string>>
  notes?: string | null
  included: boolean
  createdAt: string
  updatedAt: string
}

export interface GeneratedAsset {
  id: string
  generationId: string
  hotelCode: string
  assetType: AssetType
  variantCode: string
  variantLabel: string
  copies: LanguageCopies
  isEdited: boolean
  createdAt: string
  updatedAt: string
}

export interface Generation {
  id: string
  projectId: string
  name?: string | null
  languages: string[]
  campaignContext?: string | null
  recipe?: string | null
  approvedHotelCodes: string[]
  status: GenerationStatus
  triggeredAt: string
  completedAt?: string
  errorMessage?: string
}

export interface DomainEvent {
  id: string
  eventType: string
  aggregateId: string
  aggregateType: string
  userId?: string
  projectId?: string
  payload: Record<string, unknown>
  occurredAt: string
}
