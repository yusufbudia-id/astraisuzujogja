V25C — Our Lineup LCP / duplicate renderer fix

- Removed duplicate mobile <img> + desktop Next <Image> rendering for the same active product.
- Our Lineup now uses one responsive local WebP <img> at every breakpoint.
- Added loading="eager" and fetchPriority="high" for the active product image.
- Keeps explicit responsive stage heights to prevent mobile collapse.
- Version 1.6.3.
