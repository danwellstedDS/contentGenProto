import { GenerationRepository } from "../infrastructure/prisma/GenerationRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import type { GeneratedAsset } from "../domain/generation/GeneratedAsset"

export async function editAsset(
  assetId: string,
  copies: Record<string, string>,
  userId: string,
  projectId: string
): Promise<GeneratedAsset> {
  const asset = await GenerationRepository.updateAsset(assetId, copies)

  await DomainEventStore.write({
    eventType: "asset.edited",
    aggregateId: assetId,
    aggregateType: "GeneratedAsset",
    userId,
    projectId,
    payload: {
      assetType: asset.assetType,
      variantCode: asset.variantCode,
      hotelCode: asset.hotelCode,
    },
  })

  return asset
}
