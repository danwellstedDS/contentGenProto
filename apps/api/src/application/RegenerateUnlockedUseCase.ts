import { GenerationRepository } from "../infrastructure/prisma/GenerationRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import { runGenerationJob } from "./TriggerGenerationUseCase"

export async function regenerateUnlocked(
  generationId: string,
  projectId: string,
  userId: string,
  lockedAssetIds: string[],
  instruction?: string
): Promise<void> {
  const generation = await GenerationRepository.findById(generationId)
  if (!generation || generation.projectId !== projectId) throw new Error("Generation not found")

  const languages = generation.languages
  const baseCampaignContext = generation.campaignContext ?? undefined
  const campaignContext = instruction
    ? [baseCampaignContext, instruction].filter(Boolean).join("\n")
    : baseCampaignContext

  await DomainEventStore.write({
    eventType: "generation.regenerate_unlocked",
    aggregateId: generationId,
    aggregateType: "Generation",
    userId,
    projectId,
    payload: { lockedAssetIds, instruction },
  })

  runGenerationJob(generationId, projectId, userId, languages, campaignContext, lockedAssetIds).catch((err) => {
    console.error(`Regenerate-unlocked ${generationId} failed:`, err)
  })
}
