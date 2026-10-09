V25N Vercel TypeScript Build Patch

Replace these files in the current repository while KEEPING your current package.json and package-lock.json (the ones where Prisma 6.19.3 is already installed and postinstall=prisma generate).

Fixes:
- Next.js 16 route handler params are Promise-based and must be awaited.
- HomeClient optional product.family typing.
- HeroVideo fallback timer typing.
- products-data family narrowing.
- Excludes unused examples/websocket and unused shadcn UI scaffold files from TypeScript checks so missing optional UI packages do not block production build.

After copying:
  git add .
  git commit -m "fix Next 16 TypeScript build"
  git push origin main
