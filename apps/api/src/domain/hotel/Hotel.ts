export interface HotelData {
  id: string
  hotelCode: string
  hotelName: string
  chainId?: string | null
  brandId?: string | null
  // Resolved names — populated by repository when chain/brand are joined
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
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
}

// Input type for upsert/import — takes string names for chain/brand, resolved to IDs before save
export type HotelInput = Omit<HotelData, "id" | "createdAt" | "updatedAt" | "deletedAt" | "chainName" | "brandName"> & {
  chainId?: string | null
  brandId?: string | null
}

export class Hotel {
  constructor(private readonly data: HotelData) {}

  get id() { return this.data.id }
  get hotelCode() { return this.data.hotelCode }
  get hotelName() { return this.data.hotelName }
  get chainId() { return this.data.chainId }
  get brandId() { return this.data.brandId }
  get chainName() { return this.data.chainName }
  get brandName() { return this.data.brandName }
  get country() { return this.data.country }
  get city() { return this.data.city }
  get starRating() { return this.data.starRating }
  get roomCount() { return this.data.roomCount }
  get googlePlaceId() { return this.data.googlePlaceId }
  get description() { return this.data.description }
  get categories() { return this.data.categories }
  get amenities() { return this.data.amenities }
  get urls() { return this.data.urls }
  get localNames() { return this.data.localNames }
  get deletedAt() { return this.data.deletedAt }

  activeCategories(): string[] {
    return Object.entries(this.data.categories)
      .filter(([, v]) => v)
      .map(([k]) => k)
  }

  activeAmenities(): string[] {
    const result: string[] = []
    for (const group of Object.values(this.data.amenities)) {
      for (const [key, val] of Object.entries(group)) {
        if (val) result.push(key)
      }
    }
    return result
  }

  toData(): HotelData {
    return { ...this.data }
  }
}
