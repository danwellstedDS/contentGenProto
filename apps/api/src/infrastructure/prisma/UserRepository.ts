import { prisma } from "./client"

export interface UserRow {
  id: string
  email: string
  passwordHash: string
  name: string
  createdAt: Date
  updatedAt: Date
}

export const UserRepository = {
  async findByEmail(email: string): Promise<UserRow | null> {
    return prisma.user.findUnique({ where: { email } }) as Promise<UserRow | null>
  },

  async findById(id: string): Promise<UserRow | null> {
    return prisma.user.findUnique({ where: { id } }) as Promise<UserRow | null>
  },

  async create(data: { email: string; passwordHash: string; name: string }): Promise<UserRow> {
    return prisma.user.create({ data }) as Promise<UserRow>
  },
}
