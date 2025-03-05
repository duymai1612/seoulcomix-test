import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.restaurant.deleteMany()

  // Insert mock data
  await prisma.restaurant.createMany({
    data: [
      {
        id: "4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d",
        rating: 4.2,
        rating_count: 139,
        category: "YAKITORI",
        city: "osaka",
        desc: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는",
        name: "카구라자카 이시카와 스시하루 나카노시마 스시야",
        price_range: "3~5",
        images: [
          "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&auto=format&fit=crop",
        ],
        isFavorite: true,
        featured: { text: "나카노시마×야키토리 상위 맛집" }
      },
      {
        id: "6ac3e2d1-ge98-5a29-c86a-g9cc1de2396d",
        rating: 4.5,
        rating_count: 200,
        category: "SUSHI",
        city: "tokyo",
        desc: "신선한 해산물과 정통 스시를 제공하는",
        name: "스시 긴자 이시카와",
        price_range: "4~6",
        images: [
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop",
        ],
        isFavorite: false,
        featured: { text: "도쿄의 상위 스시 맛집" }
      },
      {
        id: "7bd4f3e2-hf98-6b39-d87b-h0dd2ee2397e",
        rating: 4.7,
        rating_count: 180,
        category: "RAMEN",
        city: "kyoto",
        desc: "진한 국물과 다양한 토핑을 자랑하는",
        name: "라멘 이치란",
        price_range: "2~4",
        images: [
          "https://images.unsplash.com/photo-1632709810780-b5a4343cebec?w=800&auto=format&fit=crop",
        ],
        isFavorite: true,
        featured: { text: "교토의 라멘 명소" }
      },
      {
        id: "8ce5g4f3-jg09-7c40-e98c-i1ee3ff3408f",
        rating: 4.3,
        rating_count: 220,
        category: "TEMPURA",
        city: "nagoya",
        desc: "바삭한 텐푸라를 맛볼 수 있는",
        name: "텐푸라 마츠야",
        price_range: "3~5",
        images: [
          "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&auto=format&fit=crop",
        ],
        isFavorite: false,
        featured: { text: "나고야 최고의 텐푸라집" }
      },
      {
        id: "9df6h5g4-kh10-8d41-f09d-j2ff4gg4519g",
        rating: 4.6,
        rating_count: 190,
        category: "SOBA",
        city: "fukuoka",
        desc: "쫄깃한 면발과 진한 육수를 자랑하는",
        name: "우동 타로",
        price_range: "2~4",
        images: [
          "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&auto=format&fit=crop",
        ],
        isFavorite: true,
        featured: { text: "후쿠오카 우동 맛집" }
      },
      {
        id: "0eg7i6h5-lj21-9e52-g10e-k3gg5hh5620h",
        rating: 4.1,
        rating_count: 160,
        category: "YAKITORI",
        city: "osaka",
        desc: "맛있고 저렴한 야키토리 전문점",
        name: "야키토리 하치베",
        price_range: "1~3",
        images: [
          "https://images.unsplash.com/photo-1519624014191-508652cbd7b5?w=800&auto=format&fit=crop",
        ],
        isFavorite: false,
        featured: { text: "오사카 야키토리 숨은 맛집" }
      },
      {
        id: "1fh8j7i6-mk32-0f63-h11f-l4hh6ii6731i",
        rating: 4.8,
        rating_count: 250,
        category: "SUSHI",
        city: "sapporo",
        desc: "신선한 해산물로 만든 정통 스시를 즐길 수 있는",
        name: "스시 사토",
        price_range: "4~6",
        images: [
          "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800&auto=format&fit=crop",
        ],
        isFavorite: true,
        featured: { text: "삿포로 스시 맛집" }
      },
      {
        id: "2gi9k8j7-nl43-1g74-i22g-m5ii7jj7842j",
        rating: 4.4,
        rating_count: 170,
        category: "RAMEN",
        city: "hiroshima",
        desc: "깊은 맛의 국물과 탱탱한 면발을 자랑하는",
        name: "라멘 타츠야",
        price_range: "2~4",
        images: [
          "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&auto=format&fit=crop",
        ],
        isFavorite: false,
        featured: { text: "히로시마 라멘 추천" }
      },
      {
        id: "3hj0l9k8-om54-2h85-j33h-n6jj8kk8953k",
        rating: 4.9,
        rating_count: 300,
        category: "TEMPURA",
        city: "yokohama",
        desc: "고급스러운 텐푸라를 제공하는",
        name: "텐푸라 야마구치",
        price_range: "5~7",
        images: [
          "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&auto=format&fit=crop",
        ],
        isFavorite: true,
        featured: { text: "요코하마 텐푸라 추천" }
      },
      {
        id: "4ik1m0l9-pn65-3i96-k44i-o7kk9ll9064l",
        rating: 4.0,
        rating_count: 150,
        category: "SOBA",
        city: "kobe",
        desc: "담백한 국물과 쫄깃한 면발이 일품인",
        name: "우동 가게야마",
        price_range: "2~4",
        images: [
          "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=800&auto=format&fit=crop",
        ],
        isFavorite: false,
        featured: { text: "고베 우동 맛집" }
      }
    ] as unknown as Prisma.RestaurantCreateManyInput[]
  })

  console.log('Seed data inserted successfully')
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 