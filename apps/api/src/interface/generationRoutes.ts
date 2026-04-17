import type { FastifyInstance } from "fastify"
import { ProjectRepository } from "../infrastructure/prisma/ProjectRepository"
import { GenerationRepository } from "../infrastructure/prisma/GenerationRepository"
import { DomainEventStore } from "../infrastructure/events/DomainEventStore"

import { triggerGeneration } from "../application/TriggerGenerationUseCase"
import { editAsset } from "../application/EditAssetUseCase"
import { regenerateAsset } from "../application/RegenerateAssetUseCase"
import { regenerateUnlocked } from "../application/RegenerateUnlockedUseCase"
import { extractRecipe } from "../application/ExtractRecipeUseCase"
import { applyRecipe } from "../application/ApplyRecipeUseCase"
import { exportAssets } from "../application/ExportAssetsUseCase"
import type { AssetType } from "@hotel-copy/shared"

export async function generationRoutes(app: FastifyInstance) {
  const auth = { onRequest: [app.authenticate] }

  const guardProject = async (projectId: string, userId: string) => {
    const project = await ProjectRepository.findById(projectId)
    if (!project || project.userId !== userId) return null
    return project
  }

  // POST /projects/:id/generations
  app.post<{
    Params: { id: string }
    Body: { languages?: string[]; campaignContext?: string; name?: string }
  }>("/projects/:id/generations", auth, async (req, reply) => {
    const { sub } = req.user as { sub: string }
    const project = await guardProject(req.params.id, sub)
    if (!project) return reply.status(404).send({ error: "Not found" })

    const generationId = await triggerGeneration(req.params.id, sub, {
      languages: req.body?.languages,
      campaignContext: req.body?.campaignContext,
      name: req.body?.name,
    })
    return reply.status(202).send({ generationId })
  })

  // GET /projects/:id/generations/latest
  app.get<{ Params: { id: string } }>(
    "/projects/:id/generations/latest",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const generation = await GenerationRepository.findLatestByProjectId(req.params.id)
      if (!generation) return reply.status(404).send({ error: "No generations found" })
      return generation.toData()
    }
  )

  // GET /projects/:id/generations/:generationId
  app.get<{ Params: { id: string; generationId: string } }>(
    "/projects/:id/generations/:generationId",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const generation = await GenerationRepository.findById(req.params.generationId)
      if (!generation || generation.projectId !== req.params.id) {
        return reply.status(404).send({ error: "Not found" })
      }
      return generation.toData()
    }
  )

  // PATCH /projects/:id/generations/:generationId
  app.patch<{
    Params: { id: string; generationId: string }
    Body: { name?: string }
  }>(
    "/projects/:id/generations/:generationId",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const generation = await GenerationRepository.findById(req.params.generationId)
      if (!generation || generation.projectId !== req.params.id) {
        return reply.status(404).send({ error: "Not found" })
      }

      if (req.body?.name !== undefined) {
        const updated = await GenerationRepository.updateName(req.params.generationId, req.body.name)
        return updated.toData()
      }

      return generation.toData()
    }
  )

  // GET /projects/:id/generations/:generationId/assets
  app.get<{ Params: { id: string; generationId: string } }>(
    "/projects/:id/generations/:generationId/assets",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const generation = await GenerationRepository.findById(req.params.generationId)
      if (!generation || generation.projectId !== req.params.id) {
        return reply.status(404).send({ error: "Not found" })
      }

      const assets = await GenerationRepository.findAssets(req.params.generationId)
      return assets.map((a) => a.toData())
    }
  )

  // PATCH /projects/:id/generations/:generationId/assets/:assetId
  app.patch<{
    Params: { id: string; generationId: string; assetId: string }
    Body: { copies: Record<string, string> }
  }>(
    "/projects/:id/generations/:generationId/assets/:assetId",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const asset = await editAsset(req.params.assetId, req.body.copies, sub, req.params.id)
      return asset.toData()
    }
  )

  // POST /projects/:id/generations/:generationId/assets/:assetId/regenerate
  app.post<{
    Params: { id: string; generationId: string; assetId: string }
  }>(
    "/projects/:id/generations/:generationId/assets/:assetId/regenerate",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const asset = await regenerateAsset(req.params.assetId, req.params.generationId, req.params.id, sub)
      return asset.toData()
    }
  )

  // POST /projects/:id/generations/:generationId/regenerate-unlocked
  app.post<{
    Params: { id: string; generationId: string }
    Body: { lockedAssetIds: string[]; instruction?: string }
  }>(
    "/projects/:id/generations/:generationId/regenerate-unlocked",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      await regenerateUnlocked(
        req.params.generationId,
        req.params.id,
        sub,
        req.body.lockedAssetIds ?? [],
        req.body.instruction
      )
      return reply.status(202).send({ status: "RUNNING" })
    }
  )

  // POST /projects/:id/generations/:generationId/extract-recipe
  app.post<{
    Params: { id: string; generationId: string }
    Body: {
      anchorHotelCode: string
      approvedAssets: Array<{ variantCode: string; assetType: string; copies: Record<string, string> }>
      campaignContext: string
    }
  }>(
    "/projects/:id/generations/:generationId/extract-recipe",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const recipe = await extractRecipe(
        req.params.generationId,
        req.params.id,
        sub,
        req.body.anchorHotelCode,
        req.body.approvedAssets,
        req.body.campaignContext ?? ""
      )
      return { recipe }
    }
  )

  // POST /projects/:id/generations/:generationId/apply-recipe
  app.post<{
    Params: { id: string; generationId: string }
    Body: { recipe: string; anchorHotelCode: string; recipeEdited?: boolean }
  }>(
    "/projects/:id/generations/:generationId/apply-recipe",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      await applyRecipe(
        req.params.generationId,
        req.params.id,
        sub,
        req.body.recipe,
        req.body.anchorHotelCode,
        req.body.recipeEdited ?? false
      )
      return reply.status(202).send({ status: "RUNNING" })
    }
  )

  // GET /projects/:id/generations/:generationId/export
  app.get<{
    Params: { id: string; generationId: string }
    Querystring: { assetType?: string }
  }>(
    "/projects/:id/generations/:generationId/export",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const assetType = (req.query.assetType ?? "HEADLINE") as AssetType

      const { csv, filename, violationCount } = await exportAssets(
        req.params.generationId,
        req.params.id,
        sub,
        assetType
      )

      reply
        .header("Content-Type", "text/csv")
        .header("Content-Disposition", `attachment; filename="${filename}"`)
        .header("X-Violation-Count", String(violationCount))
      return reply.send(csv)
    }
  )

  // POST /projects/:id/generations/:generationId/approve-hotel
  app.post<{
    Params: { id: string; generationId: string }
    Body: { hotelCode: string }
  }>(
    "/projects/:id/generations/:generationId/approve-hotel",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const generation = await GenerationRepository.findById(req.params.generationId)
      if (!generation || generation.projectId !== req.params.id) {
        return reply.status(404).send({ error: "Not found" })
      }

      const wasEmpty = generation.approvedHotelCodes.length === 0
      const updated = await GenerationRepository.addApprovedHotelCode(
        req.params.generationId,
        req.body.hotelCode
      )

      if (wasEmpty) {
        await ProjectRepository.updateStatus(req.params.id, "IN_REVIEW")
      }

      await DomainEventStore.write({
        eventType: "hotel.approved",
        aggregateId: req.params.generationId,
        aggregateType: "Generation",
        userId: sub,
        projectId: req.params.id,
        payload: {
          hotelCode: req.body.hotelCode,
          approvedCount: updated.approvedHotelCodes.length,
          triggeredInReview: wasEmpty,
        },
      })

      return { approvedHotelCodes: updated.approvedHotelCodes }
    }
  )

  // POST /projects/:id/generations/:generationId/unapprove-hotel
  app.post<{
    Params: { id: string; generationId: string }
    Body: { hotelCode: string }
  }>(
    "/projects/:id/generations/:generationId/unapprove-hotel",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const updated = await GenerationRepository.removeApprovedHotelCode(
        req.params.generationId,
        req.body.hotelCode
      )

      await DomainEventStore.write({
        eventType: "hotel.unapproved",
        aggregateId: req.params.generationId,
        aggregateType: "Generation",
        userId: sub,
        projectId: req.params.id,
        payload: {
          hotelCode: req.body.hotelCode,
          remainingApprovedCount: updated.approvedHotelCodes.length,
        },
      })

      return { approvedHotelCodes: updated.approvedHotelCodes }
    }
  )

  // POST /projects/:id/generations/:generationId/auto-approve
  app.post<{
    Params: { id: string; generationId: string }
    Body: { hotelCodes: string[] }
  }>(
    "/projects/:id/generations/:generationId/auto-approve",
    auth,
    async (req, reply) => {
      const { sub } = req.user as { sub: string }
      const project = await guardProject(req.params.id, sub)
      if (!project) return reply.status(404).send({ error: "Not found" })

      const generation = await GenerationRepository.findById(req.params.generationId)
      if (!generation || generation.projectId !== req.params.id) {
        return reply.status(404).send({ error: "Not found" })
      }

      const union = Array.from(new Set([...generation.approvedHotelCodes, ...req.body.hotelCodes]))
      await GenerationRepository.setApprovedHotelCodes(req.params.generationId, union)
      await ProjectRepository.updateStatus(req.params.id, "COMPLETE")

      await DomainEventStore.write({
        eventType: "generation.auto_approved",
        aggregateId: req.params.generationId,
        aggregateType: "Generation",
        userId: sub,
        projectId: req.params.id,
        payload: {
          autoApprovedCount: req.body.hotelCodes.length,
          totalApprovedCount: union.length,
        },
      })

      return { status: "COMPLETE" }
    }
  )
}
