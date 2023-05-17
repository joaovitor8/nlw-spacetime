import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memorias'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  })
