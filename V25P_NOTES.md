# V25P — Production Build Cleanup

- Removed unused shadcn/Radix UI scaffold (`src/components/ui`) and related unused hooks/provider.
- Removed unused websocket examples from the production project.
- Removed unused Prisma/SQLite article API scaffold; public article pages already use `src/lib/articles-data.ts`.
- Removed Prisma dependencies and `postinstall` generation step.
- Narrowed TypeScript include scope to production `src` code and Next generated types.
- Kept Next.js 16 dynamic route signatures compatible with Promise params.
- Simplified HeroVideo idle scheduling fallback.
- Pinned core runtime versions for reproducible Vercel installs.
- Node runtime declared as 22.x.
