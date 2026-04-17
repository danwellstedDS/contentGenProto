import "dotenv/config"
import path from "path"
import fs from "fs"
import Fastify from "fastify"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import multipart from "@fastify/multipart"
import fastifyStatic from "@fastify/static"
import { authRoutes } from "./interface/authRoutes"
import { projectRoutes } from "./interface/projectRoutes"
import { importRoutes } from "./interface/importRoutes"
import { toneConfigRoutes } from "./interface/toneConfigRoutes"
import { generationRoutes } from "./interface/generationRoutes"

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: { sub: string; email: string }
    user: { sub: string; email: string }
  }
}

declare module "fastify" {
  interface FastifyInstance {
    authenticate: (req: import("fastify").FastifyRequest, reply: import("fastify").FastifyReply) => Promise<void>
  }
}

const app = Fastify({ logger: true })

const PORT = parseInt(process.env.PORT ?? "3001", 10)
const HOST = process.env.HOST ?? "0.0.0.0"

async function main() {
  await app.register(cors, { origin: true })

  await app.register(jwt, {
    secret: process.env.JWT_SECRET ?? "dev-secret-change-in-production",
  })

  app.decorate("authenticate", async function (req, reply) {
    try {
      await req.jwtVerify()
    } catch (err) {
      reply.status(401).send({ error: "Unauthorized" })
    }
  })

  await app.register(multipart, { limits: { fileSize: 20 * 1024 * 1024 } }) // 20 MB

  app.get("/health", async () => ({ status: "ok" }))

  await app.register(authRoutes)
  await app.register(projectRoutes)
  await app.register(importRoutes)
  await app.register(toneConfigRoutes)
  await app.register(generationRoutes)

  // Serve the compiled React frontend in production
  const webDistPath = path.join(__dirname, "../../web/dist")
  if (fs.existsSync(webDistPath)) {
    await app.register(fastifyStatic, { root: webDistPath, prefix: "/" })
    // SPA fallback — any unmatched GET returns index.html for React Router
    app.setNotFoundHandler(async (req, reply) => {
      if (req.method === "GET") {
        return reply.type("text/html").sendFile("index.html")
      }
      return reply.status(404).send({ error: "Not found" })
    })
  }

  await app.listen({ port: PORT, host: HOST })
}

main().catch((err) => {
  app.log.error(err)
  process.exit(1)
})
