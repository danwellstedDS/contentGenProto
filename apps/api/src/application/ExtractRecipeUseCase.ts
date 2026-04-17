import { makeAIClient } from "../infrastructure/ai/aiClient"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"

export interface ApprovedAsset {
  variantCode: string
  assetType: string
  copies: Record<string, string>
}

export async function extractRecipe(
  generationId: string,
  projectId: string,
  userId: string,
  anchorHotelCode: string,
  approvedAssets: ApprovedAsset[],
  campaignContext: string
): Promise<string> {
  const aiClient = makeAIClient()

  const systemPrompt = `
You are a senior Google Ads copywriter analysing a set of approved hotel ad copy.
Your job is to extract a concise reusable style recipe that describes HOW the copy was written — not what it says.
Focus on: sentence structure, tone markers, what benefits are emphasised, what is avoided, length approach, and any consistent framing patterns.
Respond with a short plain-text paragraph (4-8 sentences). No bullet points. No JSON.
`

  const userPrompt = `
Campaign context: ${campaignContext || "none provided"}

Approved copy samples:
${approvedAssets
  .map(
    (a) =>
      `${a.variantCode} (${a.assetType}): ${Object.entries(a.copies)
        .map(([lang, text]) => `${lang}: "${text}"`)
        .join(", ")}`
  )
  .join("\n")}

Describe the style recipe used in this copy so it can be applied consistently to other hotels in the same campaign.
`

  const recipe = await aiClient.completePlainText(systemPrompt, userPrompt)

  await DomainEventStore.write({
    eventType: "recipe.extracted",
    aggregateId: generationId,
    aggregateType: "Generation",
    userId,
    projectId,
    payload: {
      anchorHotelCode,
      assetCount: approvedAssets.length,
      generationId,
    },
  })

  return recipe
}
