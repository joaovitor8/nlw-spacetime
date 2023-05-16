import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()



app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})



// Iniciando o servidor
app.listen({
  port: 3333,
}).then(() => {
  console.log('Servidor rodando na porta: http://localhost:3333')
})
