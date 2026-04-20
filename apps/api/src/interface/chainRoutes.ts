import type { FastifyInstance } from "fastify"
import { ChainRepository } from "../infrastructure/prisma/ChainRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"

export async function chainRoutes(app: FastifyInstance) {
  const auth = { onRequest: [app.authenticate] }

  // GET /chains — list with hotel/brand counts; optional ?hasVoice=true|false
  app.get<{ Querystring: { hasVoice?: string } }>("/chains", auth, async (req) => {
    const hasVoice = req.query.hasVoice === "true" ? true : req.query.hasVoice === "false" ? false : undefined
    return ChainRepository.findAllWithCounts(hasVoice !== undefined ? { hasVoice } : undefined)
  })

  // GET /chains/:id — detail with nested brand list
  app.get<{ Params: { id: string } }>("/chains/:id", auth, async (req, reply) => {
    const chain = await ChainRepository.findById(req.params.id)
    if (!chain) return reply.status(404).send({ error: "Not found" })
    const brands = await ChainRepository.findBrands(req.params.id)
    const hotelCount = await ChainRepository.hotelCount(req.params.id)
    return { ...chain.toData(), brands, hotelCount }
  })

  // PATCH /chains/:id — update tone fields and metadata
  app.patch<{
    Params: { id: string }
    Body: {
      tone?: string | null
      prohibitedWords?: string[]
      mandatoryIncludes?: string[]
      copyStyle?: string | null
      notes?: string | null
    }
  }>("/chains/:id", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const chain = await ChainRepository.findById(req.params.id)
    if (!chain) return reply.status(404).send({ error: "Not found" })

    const updated = await ChainRepository.patch(req.params.id, req.body)

    await DomainEventStore.write({
      eventType: "chain.updated",
      aggregateId: req.params.id,
      aggregateType: "Chain",
      userId: sub,
      payload: { fields: Object.keys(req.body) },
    })

    return updated.toData()
  })

  // DELETE /chains/:id — soft delete; blocked if hotels are still linked
  app.delete<{ Params: { id: string } }>("/chains/:id", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const chain = await ChainRepository.findById(req.params.id)
    if (!chain) return reply.status(404).send({ error: "Not found" })

    const count = await ChainRepository.hotelCount(req.params.id)
    if (count > 0) {
      return reply.status(409).send({ error: `Cannot delete: ${count} hotel(s) still linked to this chain` })
    }

    await ChainRepository.softDelete(req.params.id)

    await DomainEventStore.write({
      eventType: "chain.deleted",
      aggregateId: req.params.id,
      aggregateType: "Chain",
      userId: sub,
      payload: { name: chain.name },
    })

    return reply.status(204).send()
  })
}
