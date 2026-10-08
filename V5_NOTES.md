# V5 — Product Detail & Contact Hardening

## Changes
- Product detail pages now add need-based consultation cards, a clearer variant search/recommendation CTA, and related Isuzu families.
- WhatsApp number/display can now be configured via `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_WHATSAPP_DISPLAY`.
- Dealer address/map constants are centralized in `src/lib/site-config.ts` and reused by homepage/contact/footer.
- Global navigation now points Product, Promo, and Contact to their actual pages.
- `.env.example` documents production configuration.

## Validation performed
- All 22 TS/TSX source files parsed with TypeScript transpilation: 0 syntax diagnostics.
- Local import resolver audit: 0 missing local imports.
- Asset paths remain local for product imagery.
- Full `npm ci` / `next build` could not be completed in the working environment because package installation timed out; this is not reported as build success.

## Production blocker
Confirm Yusuf's actual WhatsApp number before deployment. The current fallback number is inherited from the earlier project and exists only to keep local CTA flows testable.
