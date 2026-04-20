import type { FastifyInstance } from "fastify"
import { HotelRepository } from "../infrastructure/prisma/HotelRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"
import { importHotels } from "../application/ImportHotelsUseCase"

export async function hotelRoutes(app: FastifyInstance) {
  const auth = { onRequest: [app.authenticate] }

  // POST /hotels/import — import XLSX into the hotel library
  app.post("/hotels/import", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }

    const data = await req.file()
    if (!data) {
      return reply.status(400).send({ error: "No file uploaded" })
    }

    const chunks: Buffer[] = []
    for await (const chunk of data.file) {
      chunks.push(chunk as Buffer)
    }
    const buffer = Buffer.concat(chunks)

    const modeField = (data.fields?.mode as { value?: string } | undefined)?.value
    const mode: "replace" | "merge" = modeField === "replace" ? "replace" : "merge"

    try {
      const result = await importHotels(sub, buffer, mode)
      return result
    } catch (err) {
      const message = err instanceof Error ? err.message : "Parse error"
      return reply.status(422).send({ error: message })
    }
  })

  // GET /hotels — list library hotels (with optional search + chainId filter)
  app.get<{
    Querystring: { search?: string; chainId?: string }
  }>("/hotels", auth, async (req) => {
    const hotels = await HotelRepository.findAll({
      search: req.query.search,
      chainId: req.query.chainId,
    })
    return hotels.map((h) => h.toData())
  })

  // GET /hotels/:hotelCode — single hotel detail
  app.get<{ Params: { hotelCode: string } }>("/hotels/:hotelCode", auth, async (req, reply) => {
    const hotel = await HotelRepository.findByCode(req.params.hotelCode)
    if (!hotel) return reply.status(404).send({ error: "Not found" })
    return hotel.toData()
  })

  // PATCH /hotels/:hotelCode — update hotel profile fields
  app.patch<{
    Params: { hotelCode: string }
    Body: Record<string, unknown>
  }>("/hotels/:hotelCode", auth, async (req, reply) => {
    const hotel = await HotelRepository.findByCode(req.params.hotelCode)
    if (!hotel) return reply.status(404).send({ error: "Not found" })

    const { sub } = req.user as { sub: string }
    const updated = await HotelRepository.patch(req.params.hotelCode, req.body as Parameters<typeof HotelRepository.patch>[1])

    await DomainEventStore.write({
      eventType: "hotel.updated",
      aggregateId: hotel.id,
      aggregateType: "Hotel",
      userId: sub,
      payload: { hotelCode: req.params.hotelCode, fields: Object.keys(req.body) },
    })

    return updated.toData()
  })

  // DELETE /hotels/:hotelCode — soft delete
  app.delete<{ Params: { hotelCode: string } }>("/hotels/:hotelCode", auth, async (req, reply) => {
    const hotel = await HotelRepository.findByCode(req.params.hotelCode)
    if (!hotel) return reply.status(404).send({ error: "Not found" })

    const { sub } = req.user as { sub: string }
    await HotelRepository.softDelete(req.params.hotelCode)

    await DomainEventStore.write({
      eventType: "hotel.deleted",
      aggregateId: hotel.id,
      aggregateType: "Hotel",
      userId: sub,
      payload: { hotelCode: req.params.hotelCode },
    })

    return reply.status(204).send()
  })
}
