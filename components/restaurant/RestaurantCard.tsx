'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { Restaurant } from '@/types/restaurant'

interface RestaurantCardProps {
  restaurant: Restaurant
  onFavoriteToggle: () => void
}

const FEATURED_ICONS = {
  'stars-02': '⭐',
  trophy: '🏆',
  crown: '👑',
  diamond: '💎',
  fire: '🔥',
  new: '🆕',
  trending: '📈',
  default: '🔖'
} as const

export function RestaurantCard({ restaurant, onFavoriteToggle }: RestaurantCardProps) {
  return (
    <Card className="group overflow-hidden border border-slate-200 rounded-2xl bg-white hover:shadow-[0_8px_12px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-200">
      <AspectRatio ratio={4 / 3} className="bg-slate-50">
        <Image
          src={restaurant.images[0]}
          alt={restaurant.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] hover:bg-white/90"
          onClick={onFavoriteToggle}
        >
          <Heart className={`h-5 w-5 ${restaurant.isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
        </Button>
      </AspectRatio>
      <CardContent className="p-4">
        {restaurant.featured && (
          <div className="flex items-center gap-1 text-orange-500 mb-1">
            <span className="text-xs">
              {FEATURED_ICONS[restaurant.featured.icon as keyof typeof FEATURED_ICONS] || FEATURED_ICONS.default}
            </span>
            <span className="text-xs font-medium">{restaurant.featured.text}</span>
          </div>
        )}
        <h3 className="font-medium text-base leading-tight line-clamp-2">{restaurant.name}</h3>
        <div className="mt-1 flex items-center gap-1">
          <span className="text-yellow-500 text-sm">★</span>
          <span className="text-sm font-medium">{restaurant.rating}</span>
          <span className="text-sm text-slate-400">({restaurant.rating_count})</span>
        </div>
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">{restaurant.desc}</p>
        <div className="mt-2 text-sm text-slate-500">
          {restaurant.city} · {restaurant.category} · {restaurant.price_range}만원
        </div>
      </CardContent>
    </Card>
  )
}
