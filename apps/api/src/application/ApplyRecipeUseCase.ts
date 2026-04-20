import { GenerationRepository } from "../infrastructure/prisma/GenerationRepository"
import { ProjectHotelRepository } from "../infrastructure/prisma/ProjectHotelRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import { runGenerationJob } from "./TriggerGenerationUseCase"

export async function applyRecipe(
  generationId: string,
  projectId: string,
  userId: string,
  recipe: string,
  anchorHotelCode: string,
  recipeEdited: boolean = false
): Promise<void> {
  const generation = await GenerationRepository.findById(generationId)
  if (!generation || generation.projectId !== projectId) throw new Error("Generation not found")

  // Persist the recipe on the generation record
  await GenerationRepository.updateRecipe(generationId, recipe)

  const hotels = await ProjectHotelRepository.findByProject(projectId)
  const remainingCount = hotels.filter(
    (h) => h.included && h.hotelCode !== anchorHotelCode
  ).length

  if (recipeEdited) {
    await DomainEventStore.write({
      eventType: "recipe.edited",
      aggregateId: generationId,
      aggregateType: "Generation",
      userId,
      projectId,
      payload: { generationId },
    })
  }

  await DomainEventStore.write({
    eventType: "recipe.applied",
    aggregateId: generationId,
    aggregateType: "Generation",
    userId,
    projectId,
    payload: {
      anchorHotelCode,
      remainingHotelCount: remainingCount,
      generationId,
    },
  })

  // Fire-and-forget: generate for all hotels except the anchor
  runGenerationJob(
    generationId,
    projectId,
    userId,
    generation.languages,
    generation.campaignContext,
    undefined,           // lockedAssetIds — not applicable here
    [anchorHotelCode],   // excludeHotelCodes
    recipe
  ).catch((err) => {
    console.error(`ApplyRecipe job ${generationId} failed:`, err)
  })
}
