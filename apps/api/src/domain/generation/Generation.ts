export type GenerationStatus = "PENDING" | "RUNNING" | "COMPLETE" | "FAILED"

export interface GenerationData {
  id: string
  projectId: string
  name?: string | null
  languages: string[]
  campaignContext?: string | null
  recipe?: string | null
  approvedHotelCodes: string[]
  status: GenerationStatus
  triggeredAt: Date
  completedAt?: Date | null
  errorMessage?: string | null
}

export class Generation {
  constructor(private data: GenerationData) {}

  get id() { return this.data.id }
  get projectId() { return this.data.projectId }
  get name() { return this.data.name }
  get languages() { return this.data.languages }
  get campaignContext() { return this.data.campaignContext }
  get recipe() { return this.data.recipe }
  get approvedHotelCodes() { return this.data.approvedHotelCodes ?? [] }
  get status() { return this.data.status }
  get triggeredAt() { return this.data.triggeredAt }
  get completedAt() { return this.data.completedAt }
  get errorMessage() { return this.data.errorMessage }

  markRunning(): void {
    this.data.status = "RUNNING"
  }

  markComplete(): void {
    this.data.status = "COMPLETE"
    this.data.completedAt = new Date()
  }

  markFailed(errorMessage: string): void {
    this.data.status = "FAILED"
    this.data.completedAt = new Date()
    this.data.errorMessage = errorMessage
  }

  toData(): GenerationData {
    return { ...this.data }
  }
}
