export interface HotelProfileData {
  id: string
  projectId: string
  hotelCode: string
  hotelName: string
  chain: string
  brand: string
  country: string
  city: string
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
  createdAt: Date
  updatedAt: Date
}

export class HotelProfile {
  constructor(private readonly data: HotelProfileData) {}

  get id() { return this.data.id }
  get projectId() { return this.data.projectId }
  get hotelCode() { return this.data.hotelCode }
  get hotelName() { return this.data.hotelName }
  get chain() { return this.data.chain }
  get brand() { return this.data.brand }
  get country() { return this.data.country }
  get city() { return this.data.city }
  get starRating() { return this.data.starRating }
  get roomCount() { return this.data.roomCount }
  get description() { return this.data.description }
  get categories() { return this.data.categories }
  get amenities() { return this.data.amenities }
  get urls() { return this.data.urls }
  get localNames() { return this.data.localNames }
  get notes() { return this.data.notes }
  get included() { return this.data.included }

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

  toData(): HotelProfileData {
    return { ...this.data }
  }
}
