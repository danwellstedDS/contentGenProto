import { prisma } from "./client"
import { Project, type ProjectData } from "../../domain/project/Project"

function toProject(row: ProjectData): Project {
  return new Project(row)
}

export const ProjectRepository = {
  async findByUserId(userId: string): Promise<Project[]> {
    const rows = await prisma.project.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    })
    return rows.map((r: unknown) => toProject(r as ProjectData))
  },

  async findById(id: string): Promise<Project | null> {
    const row = await prisma.project.findUnique({ where: { id } })
    return row ? toProject(row as unknown as ProjectData) : null
  },

  async create(data: { name: string; userId: string; campaignType?: string }): Promise<Project> {
    const row = await prisma.project.create({
      data: { name: data.name, userId: data.userId, campaignType: data.campaignType ?? null },
    })
    return toProject(row as unknown as ProjectData)
  },

  async delete(id: string): Promise<void> {
    await prisma.project.delete({ where: { id } })
  },

  async updateStatus(id: string, status: ProjectData["status"]): Promise<void> {
    await prisma.project.update({ where: { id }, data: { status } })
  },

  async fork(projectId: string, userId: string): Promise<{ newProjectId: string }> {
    const source = await prisma.project.findUnique({ where: { id: projectId } })
    if (!source || source.userId !== userId) throw new Error("Not found")

    const hotels = await prisma.hotelProfile.findMany({ where: { projectId } })

    const newProject = await prisma.project.create({
      data: {
        name: source.name,
        userId,
        campaignType: source.campaignType,
        versionNumber: (source.versionNumber ?? 1) + 1,
        parentProjectId: projectId,
      },
    })

    if (hotels.length > 0) {
      await prisma.hotelProfile.createMany({
        data: hotels.map(({ id: _id, projectId: _pid, createdAt: _ca, updatedAt: _ua, ...rest }) => ({
          ...rest,
          projectId: newProject.id,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          categories: rest.categories as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          amenities: rest.amenities as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          urls: rest.urls as any,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          localNames: rest.localNames as any,
        })),
      })
    }

    return { newProjectId: newProject.id }
  },
}
