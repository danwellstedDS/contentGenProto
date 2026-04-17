import type { FastifyInstance } from "fastify"
import bcrypt from "bcrypt"
import { UserRepository } from "../infrastructure/prisma/UserRepository"
import { identifyUser } from "../infrastructure/analytics/posthogClient"

export async function authRoutes(app: FastifyInstance) {
  // POST /auth/register — admin only
  app.post<{
    Body: { email: string; password: string; name: string }
  }>("/auth/register", async (req, reply) => {
    const secret = req.headers["x-admin-secret"]
    if (secret !== process.env.ADMIN_REGISTRATION_SECRET) {
      return reply.status(403).send({ error: "Forbidden" })
    }

    const { email, password, name } = req.body
    const existing = await UserRepository.findByEmail(email)
    if (existing) {
      return reply.status(409).send({ error: "Email already registered" })
    }

    const passwordHash = await bcrypt.hash(password, 12)
    const user = await UserRepository.create({ email, passwordHash, name })

    return reply.status(201).send({ id: user.id, email: user.email, name: user.name })
  })

  // POST /auth/login
  app.post<{
    Body: { email: string; password: string }
  }>("/auth/login", async (req, reply) => {
    const { email, password } = req.body
    const user = await UserRepository.findByEmail(email)
    if (!user) {
      return reply.status(401).send({ error: "Invalid credentials" })
    }

    const valid = await bcrypt.compare(password, user.passwordHash)
    if (!valid) {
      return reply.status(401).send({ error: "Invalid credentials" })
    }

    const token = app.jwt.sign({ sub: user.id, email: user.email })
    identifyUser(user.id, { email: user.email, name: user.name })
    return { token, user: { id: user.id, email: user.email, name: user.name } }
  })

  // GET /auth/me
  app.get("/auth/me", { onRequest: [app.authenticate] }, async (req, reply) => {
    const payload = req.user as { sub: string }
    const user = await UserRepository.findById(payload.sub)
    if (!user) return reply.status(404).send({ error: "User not found" })
    return { id: user.id, email: user.email, name: user.name }
  })
}
