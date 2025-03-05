import { prisma } from '@/lib/db';
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export async function createContext(opts: FetchCreateContextFnOptions) {
  return {
    prisma,
    ...opts,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>; 