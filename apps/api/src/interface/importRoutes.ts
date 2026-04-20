import type { FastifyInstance } from "fastify"
import { ProjectRepository } from "../infrastructure/prisma/ProjectRepository"
import { ProjectHotelRepository } from "../infrastructure/prisma/ProjectHotelRepository"
import { HotelRepository } from "../infrastructure/prisma/HotelRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"

export async function importRoutes(app: FastifyInstance) {
  const auth = { onRequest: [app.authenticate] }

  // GET /projects/:id/hotels — list hotels linked to this project
  app.get<{ Params: { id: string } }>("/projects/:id/hotels", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    const hotels = await ProjectHotelRepository.findByProject(req.params.id)
    return hotels.map((h) => h.toData())
  })

  // POST /projects/:id/hotels — add a hotel from the library to this project
  app.post<{
    Params: { id: string }
    Body: { hotelCode: string }
  }>("/projects/:id/hotels", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    const hotel = await HotelRepository.findByCode(req.body.hotelCode)
    if (!hotel) {
      return reply.status(404).send({ error: "Hotel not found in library" })
    }
    const ph = await ProjectHotelRepository.addHotelToProject(req.params.id, hotel.id)
    return reply.status(201).send(ph.toData())
  })

  // PATCH /projects/:id/hotels/:hotelCode — update per-project metadata (notes, included)
  app.patch<{
    Params: { id: string; hotelCode: string }
    Body: { notes?: string | null; included?: boolean }
  }>("/projects/:id/hotels/:hotelCode", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    const ph = await ProjectHotelRepository.patchProjectHotel(req.params.id, req.params.hotelCode, req.body)
    return ph.toData()
  })

  // DELETE /projects/:id/hotels/:hotelCode — remove hotel link from this project
  app.delete<{
    Params: { id: string; hotelCode: string }
  }>("/projects/:id/hotels/:hotelCode", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    await ProjectHotelRepository.removeHotelFromProject(req.params.id, req.params.hotelCode)
    return reply.status(204).send()
  })

  // POST /projects/:id/hotels/selection — bulk set included flag
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
    await ProjectHotelRepository.setAllIncluded(req.params.id, included)
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
