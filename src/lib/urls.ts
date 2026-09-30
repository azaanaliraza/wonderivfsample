/**
 * Absolute URL helpers.
 *
 * The deploy host comes from `site` in astro.config.mjs (driven by SITE_URL) and
 * the sub-path from `base` (driven by SITE_BASE). Local builds default to the
 * production origin; the GitHub Pages build passes its own origin so canonical,
 * Open Graph, JSON-LD, robots and sitemap URLs stay self-referential.
 */
const origin = (import.meta.env.SITE || 'https://wonderivf.com').replace(/\/+$/, '');
const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export const siteOrigin = origin;
export const basePath = base;
export const siteBase = `${origin}${base}`;
export const siteUrl = `${siteBase}/`;

/** Absolute URL for a root-relative path, honouring the configured base. */
export const abs = (path: string): string =>
  `${siteBase}${path.startsWith('/') ? path : `/${path}`}`;

/** Absolute URL for a route path, regardless of whether it is already absolute. */
export const toAbsolute = (value: string): string =>
  /^https?:\/\//i.test(value) ? value : abs(value);

/** Drop the configured base from a pathname so it can be re-prefixed safely. */
export const stripBase = (pathname: string): string => {
  if (!base) return pathname;
  if (pathname === base) return '/';
  if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length) || '/';
  return pathname;
};
