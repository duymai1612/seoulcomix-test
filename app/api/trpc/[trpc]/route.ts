import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '@/app/api/trpc/_trpc/routers/_app'
import { createContext } from '@/app/api/trpc/_trpc/context'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext
  })

export { handler as GET, handler as POST }
