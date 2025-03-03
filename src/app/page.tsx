'use client'

import { useState } from 'react'
import { RestaurantGrid } from '@/components/restaurant/RestaurantGrid'

// Temporary mock data for testing
const mockRestaurants = [
  {
    id: "4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d",
    rating: 4.2,
    rating_count: 139,
    category: "YAKITORI",
    desc: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는",
    name: "카구라자카 이시카와 스시하루 나카노시마 스시야",
    price_range: "3~5",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    isFavorite: true
  },
  // Add more mock restaurants as needed
]

export default function Home() {
  const [restaurants, setRestaurants] = useState(mockRestaurants)

  const handleFavoriteToggle = (id: string) => {
    setRestaurants(prev =>
      prev.map(restaurant =>
        restaurant.id === id
          ? { ...restaurant, isFavorite: !restaurant.isFavorite }
          : restaurant
      )
    )
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Restaurants</h1>
          <p className="text-slate-500 mt-1">
            Discover and save your favorite restaurants
          </p>
        </div>
        
        <RestaurantGrid 
          restaurants={restaurants} 
          onFavoriteToggle={handleFavoriteToggle} 
        />
      </div>
    </main>
  )
}
