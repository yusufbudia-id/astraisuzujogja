export const SITE_URL = 'https://www.astraisuzujogja.com';

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, '');

  // Keep canonical URLs stable on production and preview deployments.
  // This prevents a Vercel preview hostname from leaking into canonical, sitemap,
  // structured data, and Open Graph URLs when NEXT_PUBLIC_BASE_URL is unset.
  return SITE_URL;
}
