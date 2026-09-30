import type { APIRoute } from 'astro';
import { siteBase } from '../lib/urls';

export const GET: APIRoute = () =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      '# Boilerplate WordPress endpoints — not part of the site',
      'Disallow: /?page_id=',
      'Disallow: /category/',
      'Disallow: /wp-admin/',
      'Disallow: /wp-includes/',
      '',
      `Sitemap: ${siteBase}/sitemap-index.xml`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
