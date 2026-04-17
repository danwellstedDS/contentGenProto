import type { LanguageCode } from "../constants/languages"

export type AssetType = "HEADLINE" | "DESCRIPTION" | "LONG_HEADLINE"

export type ProjectStatus = "DRAFT" | "GENERATING" | "IN_REVIEW" | "COMPLETE"

export type GenerationStatus = "PENDING" | "RUNNING" | "COMPLETE" | "FAILED"

export type ToneConfigLevel = "CHAIN" | "BRAND"

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

export interface HotelProfile {
  id: string
  projectId: string
  hotelCode: string
  hotelName: string
  chain: string
  brand: string
  country: string
  city: string
  starRating?: string
  roomCount?: number
  googlePlaceId?: string
  description?: string
  categories: Record<string, boolean>
  amenities: Record<string, Record<string, boolean>>
  urls: Record<string, Record<string, string>>
  localNames: Record<string, Record<string, string>>
  notes?: string
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

export interface ToneConfig {
  id: string
  level: ToneConfigLevel
  entityName: string
  tone: string
  prohibitedWords: string[]
  mandatoryIncludes: string[]
  copyStyle: string
  notes?: string
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
