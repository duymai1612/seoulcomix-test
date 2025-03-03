'use client'

import { cn } from "@/lib/utils"

const categories = [
  { id: 'all', label: '전체' },
  { id: 'sushi', label: '스시·해산물' },
  { id: 'yakitori', label: '장어' },
  { id: 'tempura', label: '텐푸라' },
  { id: 'ramen', label: '라멘·츠케멘' }
]

interface CategoryTabsProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function CategoryTabs({ selectedCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 -mb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={cn(
            "whitespace-nowrap px-1 py-2 text-sm transition-colors",
            selectedCategory === category.id
              ? "font-medium text-slate-900 border-b-2 border-slate-900"
              : "text-slate-600 hover:text-slate-900"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
} 