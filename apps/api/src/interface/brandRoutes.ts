import type { FastifyInstance } from "fastify"
import { BrandRepository } from "../infrastructure/prisma/BrandRepository"
import { ChainRepository } from "../infrastructure/prisma/ChainRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import { makeAIClient } from "../infrastructure/ai/aiClient"
import { LIMITS } from "@hotel-copy/shared"

export async function brandRoutes(app: FastifyInstance) {
  const auth = { onRequest: [app.authenticate] }

  // GET /brands — list with chain name, hotel count, voice state
  // ?chainId=... &hasVoice=true|false
  app.get<{ Querystring: { chainId?: string; hasVoice?: string } }>("/brands", auth, async (req) => {
    const hasVoice = req.query.hasVoice === "true" ? true : req.query.hasVoice === "false" ? false : undefined
    return BrandRepository.findAllWithCounts({ chainId: req.query.chainId, hasVoice })
  })

  // GET /brands/:id — detail with resolved tone (brand overrides chain per-field)
  app.get<{ Params: { id: string } }>("/brands/:id", auth, async (req, reply) => {
    const brand = await BrandRepository.findById(req.params.id)
    if (!brand) return reply.status(404).send({ error: "Not found" })

    const chain = await ChainRepository.findById(brand.chainId)
    const hotelCount = await BrandRepository.hotelCount(req.params.id)

    // Resolved tone: brand fields override chain where non-empty
    const resolved = {
      tone: brand.tone || chain?.tone || null,
      prohibitedWords: brand.prohibitedWords.length > 0 ? brand.prohibitedWords : (chain?.prohibitedWords ?? []),
      mandatoryIncludes: brand.mandatoryIncludes.length > 0 ? brand.mandatoryIncludes : (chain?.mandatoryIncludes ?? []),
      copyStyle: brand.copyStyle || chain?.copyStyle || null,
      notes: brand.notes || chain?.notes || null,
    }

    // Which fields are inherited from chain vs set on brand
    const sources = {
      tone: brand.tone ? "brand" : chain?.tone ? "chain" : "none",
      prohibitedWords: brand.prohibitedWords.length > 0 ? "brand" : chain?.prohibitedWords?.length ? "chain" : "none",
      mandatoryIncludes: brand.mandatoryIncludes.length > 0 ? "brand" : chain?.mandatoryIncludes?.length ? "chain" : "none",
      copyStyle: brand.copyStyle ? "brand" : chain?.copyStyle ? "chain" : "none",
      notes: brand.notes ? "brand" : chain?.notes ? "chain" : "none",
    }

    return {
      ...brand.toData(),
      chain: chain ? chain.toData() : null,
      hotelCount,
      resolved,
      sources,
    }
  })

  // PATCH /brands/:id — update tone fields
  app.patch<{
    Params: { id: string }
    Body: {
      tone?: string | null
      prohibitedWords?: string[]
      mandatoryIncludes?: string[]
      copyStyle?: string | null
      notes?: string | null
    }
  }>("/brands/:id", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const brand = await BrandRepository.findById(req.params.id)
    if (!brand) return reply.status(404).send({ error: "Not found" })

    const hadVoice = brand.hasVoice()
    const updated = await BrandRepository.patch(req.params.id, req.body)
    const nowHasVoice = updated.hasVoice()

    await DomainEventStore.write({
      eventType: "brand.updated",
      aggregateId: req.params.id,
      aggregateType: "Brand",
      userId: sub,
      payload: { fields: Object.keys(req.body) },
    })

    // Emit brand.voice_configured the first time a tone field becomes non-empty
    if (!hadVoice && nowHasVoice) {
      await DomainEventStore.write({
        eventType: "brand.voice_configured",
        aggregateId: req.params.id,
        aggregateType: "Brand",
        userId: sub,
        payload: { name: brand.name, chainId: brand.chainId },
      })
    }

    return updated.toData()
  })

  // DELETE /brands/:id — soft delete; blocked if hotels linked
  app.delete<{ Params: { id: string } }>("/brands/:id", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const brand = await BrandRepository.findById(req.params.id)
    if (!brand) return reply.status(404).send({ error: "Not found" })

    const count = await BrandRepository.hotelCount(req.params.id)
    if (count > 0) {
      return reply.status(409).send({ error: `Cannot delete: ${count} hotel(s) still linked to this brand` })
    }

    await BrandRepository.softDelete(req.params.id)

    await DomainEventStore.write({
      eventType: "brand.deleted",
      aggregateId: req.params.id,
      aggregateType: "Brand",
      userId: sub,
      payload: { name: brand.name, chainId: brand.chainId },
    })

    return reply.status(204).send()
  })

  // POST /brands/:id/preview — generate a sample headline using resolved tone
  app.post<{ Params: { id: string } }>("/brands/:id/preview", auth, async (req, reply) => {
    const brand = await BrandRepository.findById(req.params.id)
    if (!brand) return reply.status(404).send({ error: "Not found" })

    const chain = await ChainRepository.findById(brand.chainId)

    // Resolve tone (brand overrides chain)
    const tone = brand.tone || chain?.tone || ""
    const prohibitedWords = brand.prohibitedWords.length > 0 ? brand.prohibitedWords : (chain?.prohibitedWords ?? [])
    const mandatoryIncludes = brand.mandatoryIncludes.length > 0 ? brand.mandatoryIncludes : (chain?.mandatoryIncludes ?? [])
    const copyStyle = brand.copyStyle || chain?.copyStyle || ""
    const notes = brand.notes || chain?.notes || ""

    const toneText = [
      tone ? `Tone: ${tone}` : "",
      copyStyle ? `Style: ${copyStyle}` : "",
      prohibitedWords.length > 0 ? `Prohibited words: ${prohibitedWords.join(", ")}` : "",
      mandatoryIncludes.length > 0 ? `Must include: ${mandatoryIncludes.join(", ")}` : "",
      notes ? `Notes: ${notes}` : "",
    ].filter(Boolean).join(". ") || "No tone guidance configured."

    const limit = LIMITS["HEADLINE"]
    const aiClient = makeAIClient()

    const systemPrompt = `You are a Google Ads copywriter. Write one hotel ad headline in English only.
Character limit: ${limit} characters.
Output ONLY a valid JSON object: { "preview": "..." }

Brand tone guidance:
${toneText}`

    const userPrompt = `Chain: ${chain?.name ?? brand.name}
Brand: ${brand.name}
Write one compelling ad headline for a generic ${brand.name} hotel property.`

    try {
      const raw = await aiClient.complete(systemPrompt, userPrompt)
      const parsed = JSON.parse(raw) as { preview?: string }
      return {
        preview: parsed.preview ?? raw.slice(0, limit),
        resolvedTone: { tone, prohibitedWords, mandatoryIncludes, copyStyle, notes },
      }
    } catch {
      return reply.status(500).send({ error: "Preview generation failed" })
    }
  })
}
