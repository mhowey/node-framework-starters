import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { message: 'hello world - Fastify' }
})
const port = process.env.PORT || 4002

fastify.listen({port: port, host: '0.0.0.0'}, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Fastify server listening at http://localhost:${port}`)
})