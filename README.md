# Restaurant App

A modern restaurant discovery application built with Next.js, tRPC, and Prisma. Users can browse restaurants, filter by categories, and mark their favorites.

## Features

- 🍣 Browse restaurants with detailed information
- 🔍 Filter by categories and search functionality
- ⭐ Mark restaurants as favorites
- 📱 Responsive design following Figma specifications
- 🚀 Server-side rendering with Next.js
- 🔄 Real-time updates with tRPC
- 🗃️ PostgreSQL database with Prisma ORM

## Tech Stack

- **Frontend**:

  - Next.js 14 (App Router)
  - React 18
  - TailwindCSS for styling
  - Radix UI for accessible components
  - TypeScript for type safety

- **Backend**:

  - tRPC for type-safe APIs
  - Prisma as ORM
  - PostgreSQL database

- **Development**:
  - ESLint & Prettier for code quality
  - Husky for git hooks
  - GitHub Actions for CI/CD
  - Vercel for deployment

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn 4.5.0+
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/restaurant-app.git
cd restaurant-app
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`

5. Initialize the database:

```bash
yarn prisma migrate dev
yarn db:seed
```

6. Start the development server:

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
restaurant-app/
├── app/                    # Next.js app directory
│   ├── api/               # API routes including tRPC
│   │   └── trpc/         # tRPC router definitions
│   ├── components/        # Shared React components
│   └── page.tsx          # Main page component
├── prisma/                # Database configuration
│   ├── migrations/       # Database migrations
│   ├── schema.prisma     # Prisma schema
│   └── seed.ts          # Seed data script
├── lib/                   # Shared utilities
│   └── db.ts            # Database client
├── types/                 # TypeScript type definitions
└── public/               # Static assets
```

## API Routes

### tRPC Restaurant Procedures

- `getAll`: Retrieve all restaurants

  - Optional filters: category, search
  - Returns: Restaurant[]

- `toggleFavorite`: Toggle restaurant favorite status
  - Input: Restaurant ID
  - Returns: Updated restaurant

## Development

### Available Scripts

- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn start`: Start production server
- `yarn lint`: Run ESLint
- `yarn format`: Format code with Prettier
- `yarn db:seed`: Seed database with sample data

### Code Quality

We use several tools to ensure code quality:

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking
- Husky for pre-commit hooks

### Database Management

1. Create a new migration:

```bash
yarn prisma migrate dev --name migration_name
```

2. Reset database and seed:

```bash
yarn prisma migrate reset
```

3. Update Prisma client:

```bash
yarn prisma generate
```

## Deployment

The application is automatically deployed to Vercel through GitHub Actions:

1. Push to main branch triggers deployment
2. CI/CD pipeline runs:
   - Linting
   - Type checking
   - Building
   - Deployment to Vercel

### Environment Variables

Required environment variables for deployment:

```bash
DATABASE_URL=your_production_database_url
DATABASE_URL_UNPOOLED=your_production_database_direct_url
```

## Live Demo

- **Demo URL**: [https://seoulcomix-test-neon.vercel.app/](https://seoulcomix-test-neon.vercel.app/)
- **Demo Video**: [Link to demo video](https://drive.google.com/file/d/1cfZmV4tIx-tJCL0zLLBv9vq7pQyWnvcN/view?usp=sharing)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from [Figma template](https://www.figma.com/design/rcomlVLL8LS3xfUVSXkCUY)
- Built as part of the Seoul Comix Full Stack Developer Challenge
