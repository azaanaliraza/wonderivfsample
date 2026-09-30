import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// SITE_BASE lets CI serve the build from a sub-path (e.g. GitHub Pages).
// Production builds leave it unset so the site deploys at the domain root.
const base = process.env.SITE_BASE || undefined;

export default defineConfig({
  site: 'https://wonderivf.com',
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
