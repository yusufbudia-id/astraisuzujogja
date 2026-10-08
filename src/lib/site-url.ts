export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, '');

  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionDomain) return `https://${productionDomain.replace(/\/$/, '')}`;

  const deploymentDomain = process.env.VERCEL_URL?.trim();
  if (deploymentDomain) return `https://${deploymentDomain.replace(/\/$/, '')}`;

  return 'http://localhost:3000';
}
