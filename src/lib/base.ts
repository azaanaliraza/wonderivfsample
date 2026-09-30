/**
 * Prefix a root-absolute site path with the configured Astro `base`.
 *
 * When the site is built for a sub-path (GitHub Pages) `import.meta.env.BASE_URL`
 * is e.g. "/wonderivfsample/"; for a normal domain-root build it is "/".
 * Without this, absolute hrefs written inside React islands would point past
 * the sub-path.
 */
const root = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  if (root === '') return path;
  return `${root}${path}`;
}
