export interface Restaurant {
  id: string
  name: string
  desc: string
  rating: number
  rating_count: number
  category: string
  city: string
  price_range: string
  images: string[]
  isFavorite: boolean
  featured?: {
    text: string
    icon: string
  }
} 