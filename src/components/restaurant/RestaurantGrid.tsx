import { RestaurantCard } from "./RestaurantCard"

interface Restaurant {
  id: string
  name: string
  desc: string
  rating: number
  rating_count: number
  category: string
  price_range: string
  images: string[]
  isFavorite: boolean
}

interface RestaurantGridProps {
  restaurants: Restaurant[]
  onFavoriteToggle: (id: string) => void
}

export function RestaurantGrid({ restaurants, onFavoriteToggle }: RestaurantGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onFavoriteToggle={() => onFavoriteToggle(restaurant.id)}
        />
      ))}
    </div>
  )
} 