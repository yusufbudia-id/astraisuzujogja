# SEO Phase 1 — Technical SEO

Target canonical: `https://www.astraisuzujogja.com`

## Implemented
- Stable production canonical URL; preview/Vercel hostnames are not used as canonical fallback.
- Homepage title/description focused on Isuzu Jogja + core product intent.
- Unique metadata for product listing and every product detail page.
- Product JSON-LD (`Product` + `AggregateOffer` only where OTR Yogyakarta price data exists).
- Breadcrumb JSON-LD on product detail pages.
- Unique metadata + Article JSON-LD + Breadcrumb JSON-LD on article detail pages.
- Metadata for Contact, Promo, Credit Simulation, About, and Articles index.
- Placeholder testimonial page set to `noindex,follow` and kept out of sitemap.
- `robots.txt`: allows public pages, blocks `/api/`, publishes sitemap and canonical host.
- `sitemap.xml`: static pages, all product pages and article pages with sensible priorities.
- Root JSON-LD graph: WebSite, AutoDealer and Yusuf Person relationship.
- Dynamic Open Graph image route at `/opengraph-image` so social metadata does not depend on a manually maintained OG image asset.
- Googlebot directives allow large image previews and unrestricted snippets/video previews.

## After deploy
1. Confirm these URLs return 200:
   - https://www.astraisuzujogja.com/robots.txt
   - https://www.astraisuzujogja.com/sitemap.xml
   - https://www.astraisuzujogja.com/opengraph-image
2. In Google Search Console, submit `https://www.astraisuzujogja.com/sitemap.xml`.
3. Use URL Inspection for homepage, `/produk`, and priority product pages, then request indexing.
4. Validate product/article structured data with Google Rich Results Test.

## Source-package note
The source ZIP supplied for this phase did not contain a `public/` directory. This SEO patch therefore does not recreate image/video assets. Apply it to the same repository that already contains the production `public/` assets, or copy those assets back before a clean deployment from this ZIP.
