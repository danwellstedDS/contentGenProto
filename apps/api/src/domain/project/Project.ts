export type ProjectStatus = "DRAFT" | "GENERATING" | "IN_REVIEW" | "COMPLETE"

export interface ProjectData {
  id: string
  name: string
  userId: string
  status: ProjectStatus
  campaignType?: string | null
  versionNumber: number
  parentProjectId?: string | null
  deletedAt?: Date | null
  createdAt: Date
  updatedAt: Date
}

export class Project {
  constructor(private readonly data: ProjectData) {}

  get id() { return this.data.id }
  get name() { return this.data.name }
  get userId() { return this.data.userId }
  get status() { return this.data.status }
  get campaignType() { return this.data.campaignType }
  get versionNumber() { return this.data.versionNumber }
  get parentProjectId() { return this.data.parentProjectId }
  get createdAt() { return this.data.createdAt }
  get updatedAt() { return this.data.updatedAt }

  toData(): ProjectData {
    return { ...this.data }
  }
}
