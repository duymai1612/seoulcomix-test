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
          <div>로딩중...</div>
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
