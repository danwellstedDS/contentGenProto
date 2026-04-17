import type { FastifyInstance } from "fastify"
import { ToneConfigRepository } from "../infrastructure/prisma/ToneConfigRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import type { ToneConfigLevel } from "../domain/tone-config/ToneConfig"

export async function toneConfigRoutes(app: FastifyInstance) {
  const auth = { onRequest: [app.authenticate] }

  // GET /tone-configs
  app.get("/tone-configs", auth, async (req) => {
    const configs = await ToneConfigRepository.findAll()
    return configs.map((c) => c.toData())
  })

  // POST /tone-configs
  app.post<{
    Body: {
      level: ToneConfigLevel
      entityName: string
      tone: string
      prohibitedWords: string[]
      mandatoryIncludes: string[]
      copyStyle: string
      notes?: string
    }
  }>("/tone-configs", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }

    const config = await ToneConfigRepository.create(req.body)

    await DomainEventStore.write({
      eventType: "tone_config.created",
      aggregateId: config.id,
      aggregateType: "ToneConfig",
      userId: sub,
      payload: { level: config.level, entityName: config.entityName },
    })

    return reply.status(201).send(config.toData())
  })

  // PUT /tone-configs/:toneConfigId
  app.put<{
    Params: { toneConfigId: string }
    Body: {
      tone?: string
      prohibitedWords?: string[]
      mandatoryIncludes?: string[]
      copyStyle?: string
      notes?: string | null
    }
  }>("/tone-configs/:toneConfigId", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }

    const existing = await ToneConfigRepository.findById(req.params.toneConfigId)
    if (!existing) return reply.status(404).send({ error: "Not found" })

    const config = await ToneConfigRepository.update(req.params.toneConfigId, req.body)

    await DomainEventStore.write({
      eventType: "tone_config.updated",
      aggregateId: config.id,
      aggregateType: "ToneConfig",
      userId: sub,
      payload: { level: config.level, entityName: config.entityName, changedFields: Object.keys(req.body) },
    })

    return config.toData()
  })

  // DELETE /tone-configs/:toneConfigId
  app.delete<{
    Params: { toneConfigId: string }
  }>("/tone-configs/:toneConfigId", auth, async (req, reply) => {
    const existing = await ToneConfigRepository.findById(req.params.toneConfigId)
    if (!existing) return reply.status(404).send({ error: "Not found" })

    await ToneConfigRepository.delete(req.params.toneConfigId)
    return reply.status(204).send()
  })
}
