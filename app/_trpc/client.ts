import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '../api/trpc/_trpc/routers/_app'

export const trpc = createTRPCReact<AppRouter>()
