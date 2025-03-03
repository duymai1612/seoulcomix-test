'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Heart } from "lucide-react"

interface RestaurantCardProps {
  restaurant: {
    name: string
    desc: string
    rating: number
    rating_count: number
    category: string
    price_range: string
    images: string[]
    isFavorite: boolean
  }
  onFavoriteToggle: () => void
}

export function RestaurantCard({ restaurant, onFavoriteToggle }: RestaurantCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={restaurant.images[0]}
            alt={restaurant.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </AspectRatio>
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
          onClick={onFavoriteToggle}
        >
          <Heart
            className={`h-4 w-4 ${
              restaurant.isFavorite ? "fill-red-500 text-red-500" : "text-slate-600"
            }`}
          />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium leading-none line-clamp-2">
          {restaurant.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
            <span className="ml-1 text-sm text-slate-500">
              ({restaurant.rating_count})
            </span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {restaurant.category}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-slate-500 line-clamp-2">
          {restaurant.desc}
        </p>
        <div className="mt-3">
          <span className="text-sm text-slate-500">
            ¥{restaurant.price_range}만
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
