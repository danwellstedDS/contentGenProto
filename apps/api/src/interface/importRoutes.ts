import type { FastifyInstance } from "fastify"
import { ProjectRepository } from "../infrastructure/prisma/ProjectRepository"
import { HotelRepository } from "../infrastructure/prisma/HotelRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import { importHotels } from "../application/ImportHotelsUseCase"

export async function importRoutes(app: FastifyInstance) {
  const auth = { onRequest: [app.authenticate] }

  // POST /projects/:id/import
  app.post<{ Params: { id: string } }>("/projects/:id/import", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }

    const data = await req.file()
    if (!data) {
      return reply.status(400).send({ error: "No file uploaded" })
    }

    const chunks: Buffer[] = []
    for await (const chunk of data.file) {
      chunks.push(chunk as Buffer)
    }
    const buffer = Buffer.concat(chunks)

    try {
      const result = await importHotels(req.params.id, sub, buffer)
      return { imported: result.imported, skipped: result.skipped, warnings: result.warnings }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Parse error"
      return reply.status(422).send({ error: message })
    }
  })

  // GET /projects/:id/hotels
  app.get<{ Params: { id: string } }>("/projects/:id/hotels", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    const hotels = await HotelRepository.findByProject(req.params.id)
    return hotels.map((h) => h.toData())
  })

  // PATCH /projects/:id/hotels/:hotelCode
  app.patch<{
    Params: { id: string; hotelCode: string }
    Body: { notes?: string; included?: boolean }
  }>("/projects/:id/hotels/:hotelCode", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    const hotel = await HotelRepository.patch(req.params.id, req.params.hotelCode, req.body)
    return hotel.toData()
  })

  // POST /projects/:id/hotels/selection
  app.post<{
    Params: { id: string }
    Body: { action: "all" | "none" }
  }>("/projects/:id/hotels/selection", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    const included = req.body.action === "all"
    await HotelRepository.setAllIncluded(req.params.id, included)
    await DomainEventStore.write({
      eventType: included ? "selection.all" : "selection.none",
      aggregateId: req.params.id,
      aggregateType: "Project",
      userId: sub,
      projectId: req.params.id,
      payload: {},
    })
    return { action: req.body.action }
  })
}
