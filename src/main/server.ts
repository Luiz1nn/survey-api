/* eslint-disable no-console */
import chalk from 'chalk'
import Fastify from 'fastify'

import type { FastifyInstance } from 'fastify'

const buildServer = (): FastifyInstance => {
  const fastify = Fastify({
    logger: true
  })

  fastify.get('/', async (_request, reply) => {
    reply.send('Hello World')
  })

  return fastify
}

const start = async (): Promise<void> => {
  try {
    const fastify = buildServer()
    await fastify.listen({ port: 3000 })
    console.log(chalk.green('Server listening on port 3000'))
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
