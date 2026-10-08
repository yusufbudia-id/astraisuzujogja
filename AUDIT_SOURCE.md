# Source Audit — Astra Isuzu Yogyakarta

## Status
- Old-brand text/path scan: clean.
- Remote vehicle image scan: clean.
- Local image references checked: 10 references, 0 missing files.
- Product/article imagery: local under `public/images/isuzu/`.
- Hero: YouTube embed remains intentional; local poster fallback is included.
- Google Maps and WhatsApp remain external integrations by design.

## Removed during audit
- Obsolete legacy/recovery documentation.
- Unused websocket/examples/template folders.
- Unused UI component library and toast/mobile hooks.
- Unused article API + database layer.
- Unused database and seed files.
- Build configuration that ignored TypeScript errors.

## Dependency cleanup
Runtime dependencies are limited to Next.js/React, Lucide icons, and Sharp. The lockfile dependency graph was pruned from the previous template-heavy graph to the packages reachable from the current application.

## Validation performed
- Repository-wide old-brand scan.
- Repository-wide remote image URL scan.
- Local asset path existence scan.
- SVG XML parse check.
- TypeScript syntax/type diagnostic pass excluding missing-package diagnostics caused by dependencies not being installable in this environment.

## Remaining production checks
Run `npm ci`, `npm run lint`, and `npm run build` on a machine with npm registry access. Confirm the production domain and dealer details, then replace representative local SVG artwork with approved official photography when available. Yusuf WhatsApp is confirmed as 0821 7463 5218 (wa.me digits: 6282174635218).

- App Router icon legacy di `src/app/icon.png` dihapus; favicon aktif memakai `public/icon.png`.

- V18: all 14 catalog model visuals are local optimized WebP assets sourced from the shared official Isuzu Drive library; remote product image fallbacks removed.
