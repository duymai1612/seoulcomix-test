'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Restaurant } from "@/types/restaurant"

interface RestaurantCardProps {
  restaurant: Restaurant
  onFavoriteToggle: () => void
}

export function RestaurantCard({ restaurant, onFavoriteToggle }: RestaurantCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-none">
      <div className="relative">
        <AspectRatio ratio={1.5}>
          <Image
            src={restaurant.images[0]}
            alt={restaurant.name}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </AspectRatio>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90"
          onClick={onFavoriteToggle}
        >
          <Heart
            className={`h-5 w-5 ${
              restaurant.isFavorite ? "fill-red-500 text-red-500" : "text-slate-600"
            }`}
          />
        </Button>
      </div>
      <CardContent className="px-0 pt-3">
        {restaurant.featured && (
          <div className="flex items-center gap-1 text-orange-500 mb-1">
            <span className="text-xs">⭐</span>
            <span className="text-xs font-medium">{restaurant.featured.text}</span>
          </div>
        )}
        <h3 className="font-medium text-base leading-tight line-clamp-2">
          {restaurant.name}
        </h3>
        <div className="mt-1 flex items-center gap-1 text-sm">
          <span className="text-yellow-500">★</span>
          <span className="font-medium">{restaurant.rating}</span>
          <span className="text-slate-400">({restaurant.rating_count})</span>
        </div>
        <p className="mt-1 text-sm text-slate-600 line-clamp-2">
          {restaurant.desc}
        </p>
        <div className="mt-2 text-xs text-slate-500">
          {restaurant.city} · {restaurant.category} · {restaurant.price_range}만원
        </div>
      </CardContent>
    </Card>
  )
}
