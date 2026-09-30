import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// SITE_BASE lets CI serve the build from a sub-path (e.g. GitHub Pages).
// Production builds leave it unset so the site deploys at the domain root.
// SITE_URL sets the origin used for canonical/OG/JSON-LD/robots/sitemap URLs.
const base = process.env.SITE_BASE || undefined;
const site = process.env.SITE_URL || 'https://wonderivf.com';

export default defineConfig({
  site,
  ...(base ? { base } : {}),
  integrations: [react(), sitemap()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
