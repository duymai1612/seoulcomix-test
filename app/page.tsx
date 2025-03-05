'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { RestaurantGrid } from '@/components/restaurant/RestaurantGrid'
import { CategoryTabs } from '@/components/restaurant/CategoryTabs'
import { trpc } from './_trpc/client'
import { type Restaurant } from '@prisma/client'

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const utils = trpc.useContext()
  
  const { data: restaurants, isLoading } = trpc.restaurant.getAll.useQuery({
    category: selectedCategory
  })

  const toggleFavorite = trpc.restaurant.toggleFavorite.useMutation({
    onSuccess: () => {
      utils.restaurant.getAll.invalidate()
    },
  })

  return (
    <main className="container mx-auto py-4 px-4">
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="맛집 이름을 검색해보세요"
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Category Tabs */}
        <CategoryTabs
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category)
            // Optionally prefetch the data for the new category
            utils.restaurant.getAll.prefetch({ category })
          }}
        />

        {/* Restaurant Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-lg bg-slate-100 animate-pulse">
                <div className="h-48 bg-slate-200 rounded-t-lg" /> {/* Image */}
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-slate-200 rounded w-3/4" /> {/* Title */}
                  <div className="h-3 bg-slate-200 rounded w-1/2" /> {/* Description */}
                  <div className="h-3 bg-slate-200 rounded w-1/4" /> {/* Rating */}
                </div>
              </div>
            ))}
          </div>
        ) : restaurants && Array.isArray(restaurants) && restaurants.length > 0 ? (
          <RestaurantGrid 
            restaurants={restaurants} 
            onFavoriteToggle={(id) => toggleFavorite.mutate({ id })}
          />
        ) : (
          <div className="text-center text-slate-500 py-8">
            검색 결과가 없습니다
          </div>
        )}
      </div>
    </main>
  )
}
