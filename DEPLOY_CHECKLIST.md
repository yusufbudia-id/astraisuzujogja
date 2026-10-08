# Deploy Checklist — Astra Isuzu Yogyakarta

## Required before production
1. Set `NEXT_PUBLIC_WHATSAPP_NUMBER=6282174635218`.
2. Set `NEXT_PUBLIC_WHATSAPP_DISPLAY=0821 7463 5218`.
3. Set `NEXT_PUBLIC_BASE_URL` to the final custom domain when available. On Vercel previews, the code can fall back to Vercel's system URL variables.
4. Run `npm ci`.
5. Run `npm run check:deploy` (TypeScript, ESLint, then Next production build).
6. Test homepage, `/produk`, every `/produk/[slug]`, `/promo`, `/kontak`, `/simulasi-kredit`, `/artikel`, `robots.txt`, and `sitemap.xml`.
7. Test all WhatsApp CTAs on desktop and mobile.
8. Confirm local vehicle WebP assets render correctly across homepage, catalog, and detail pages. Source masters are documented in ASSET_SOURCES.md.
9. Test video hero with autoplay blocked / slow network; poster fallback must remain readable. Hero iframe is intentionally deferred until after page load/idle.
10. Verify custom domain, HTTPS, canonical URLs, Open Graph preview, manifest, and favicon after domain is connected.
11. Verify custom 404 and error recovery states.

## Recommended Vercel settings
- Framework preset: Next.js
- Node.js: use a version supported by the current Next.js release (do not pin an old unsupported runtime).
- Build command: `npm run build`
- Install command: `npm ci`
- Environment variables: Production + Preview as appropriate.

## Current known external dependencies
- YouTube hero background
- Google Maps embed
- Official Isuzu vehicle media assets (local optimized WebP)

The site itself has no database or authenticated admin backend in this build.
