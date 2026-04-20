// Fat join entity — carries Hotel profile fields denormalised alongside per-project metadata.
// This lets use cases (generation, export, etc.) work with a single object without a second lookup.

export interface ProjectHotelData {
  // Join fields
  id: string
  projectId: string
  hotelId: string
  notes?: string | null
  included: boolean

  // Denormalised hotel fields
  hotelCode: string
  hotelName: string
  chain?: string | null
  brand?: string | null
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
}

export class ProjectHotel {
  constructor(private readonly data: ProjectHotelData) {}

  // Join metadata
  get id() { return this.data.id }
  get projectId() { return this.data.projectId }
  get hotelId() { return this.data.hotelId }
  get notes() { return this.data.notes }
  get included() { return this.data.included }

  // Hotel fields
  get hotelCode() { return this.data.hotelCode }
  get hotelName() { return this.data.hotelName }
  get chain() { return this.data.chain }
  get brand() { return this.data.brand }
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

  toData(): ProjectHotelData {
    return { ...this.data }
  }
}
