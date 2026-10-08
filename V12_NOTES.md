# V12 — Production QA & Performance Hardening

- Deferred YouTube hero iframe until after page load/idle; poster remains immediate fallback.
- Respects prefers-reduced-motion by not loading the hero video.
- Corrected header/footer logo intrinsic ratio to the latest 1398×465 logo.
- Added security headers (nosniff, referrer policy, permissions policy, SAMEORIGIN).
- Disabled X-Powered-By.
- Enabled AVIF/WebP image output and 24h remote image cache.
- Added web app manifest and theme color.
- Added dedicated 1200×630 Open Graph image for social sharing.
- Version bumped to 0.8.0.

Known production dependency:
- Product photos are still fetched from astraisuzu.co.id because approved/local original photo files have not been supplied. Replace these with local approved assets before a fully self-contained production release.
