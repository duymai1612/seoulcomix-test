import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { Restaurant } from '@/types/restaurant';

export const restaurantRouter = router({
  getAll: publicProcedure
    .input(z.object({
      category: z.string().optional(),
      search: z.string().optional(),
    }).optional())
    .query(async ({ ctx, input }): Promise<Restaurant[]> => {
      return ctx.prisma.restaurant.findMany({
        where: {
          AND: [
            // Category filter
            input?.category && input.category !== 'all'
              ? { category: input.category }
              : {},
            // Search filter
            input?.search
              ? {
                  OR: [
                    { name: { contains: input.search, mode: 'insensitive' } },
                    { desc: { contains: input.search, mode: 'insensitive' } },
                    { category: { contains: input.search, mode: 'insensitive' } },
                    { city: { contains: input.search, mode: 'insensitive' } },
                  ],
                }
              : {},
          ],
        },
        orderBy: [
          { rating: 'desc' },
          { rating_count: 'desc' }
        ],
      });
    }),

  toggleFavorite: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }): Promise<Restaurant> => {
      const restaurant = await ctx.prisma.restaurant.findUnique({
        where: { id: input.id }
      });
      return ctx.prisma.restaurant.update({
        where: { id: input.id },
        data: { isFavorite: !restaurant?.isFavorite }
      });
    })
}); 