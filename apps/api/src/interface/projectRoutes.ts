import type { FastifyInstance } from "fastify"
import { ProjectRepository } from "../infrastructure/prisma/ProjectRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"

export async function projectRoutes(app: FastifyInstance) {
  const auth = { onRequest: [app.authenticate] }

  // GET /projects
  app.get("/projects", auth, async (req) => {
    const { sub } = req.user as { sub: string }
    const projects = await ProjectRepository.findByUserId(sub)
    return projects.map((p) => p.toData())
  })

  // POST /projects
  app.post<{ Body: { name: string } }>("/projects", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.create({ name: req.body.name, userId: sub })

    await DomainEventStore.write({
      eventType: "project.created",
      aggregateId: project.id,
      aggregateType: "Project",
      userId: sub,
      projectId: project.id,
      payload: { projectName: project.name },
    })

    return reply.status(201).send(project.toData())
  })

  // GET /projects/:id
  app.get<{ Params: { id: string } }>("/projects/:id", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    return project.toData()
  })

  // DELETE /projects/:id
  app.delete<{ Params: { id: string } }>("/projects/:id", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    await ProjectRepository.delete(req.params.id)
    return reply.status(204).send()
  })

  // GET /projects/:id/events
  app.get<{ Params: { id: string } }>("/projects/:id/events", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    const events = await DomainEventStore.findByProject(req.params.id)
    return events
  })

  // POST /projects/:id/fork
  app.post<{ Params: { id: string } }>("/projects/:id/fork", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await ProjectRepository.findById(req.params.id)
    if (!project || project.userId !== sub) {
      return reply.status(404).send({ error: "Not found" })
    }
    const { newProjectId } = await ProjectRepository.fork(req.params.id, sub)

    await DomainEventStore.write({
      eventType: "project.forked",
      aggregateId: req.params.id,
      aggregateType: "Project",
      userId: sub,
      projectId: req.params.id,
      payload: { sourceProjectId: req.params.id, newProjectId },
    })

    return reply.status(201).send({ newProjectId })
  })
}
