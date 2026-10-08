V25B — Mobile Our Lineup Direct Image Fix

- Mobile Our Lineup now renders local model WebP files using a native <img> element.
- This bypasses Next.js image optimization/srcset on small viewports.
- Explicit 235px/285px mobile image stage prevents collapse.
- Added product slug keys so changing tabs always remounts the displayed image.
- Desktop (lg+) continues to use next/image with fill.
- Version bumped to 1.6.2.
