import { prisma } from "../prisma/client"
import { captureEvent } from "../analytics/posthogClient"

export interface DomainEventInput {
  eventType: string
  aggregateId: string
  aggregateType: string
  userId?: string
  projectId?: string
  payload: Record<string, unknown>
}

export const DomainEventStore = {
  async write(input: DomainEventInput): Promise<void> {
    await prisma.domainEvent.create({
      data: {
        eventType: input.eventType,
        aggregateId: input.aggregateId,
        aggregateType: input.aggregateType,
        payload: input.payload as object,
        ...(input.userId ? { userId: input.userId } : {}),
        ...(input.projectId ? { projectId: input.projectId } : {}),
      },
    })
    captureEvent(input.userId ?? "system", input.eventType, input.payload)
  },

  async findByProject(projectId: string) {
    return prisma.domainEvent.findMany({
      where: { projectId },
      orderBy: { occurredAt: "desc" },
    })
  },
}
