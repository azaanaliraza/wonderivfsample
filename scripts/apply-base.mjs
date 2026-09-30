/**
 * Rebase every root-absolute URL in `dist` so the site can be served from a
 * sub-path (e.g. GitHub Pages at /wonderivfsample/).
 *
 * No-op unless SITE_BASE is set:
 *   SITE_BASE=/wonderivfsample bun run build && SITE_BASE=/wonderivfsample node scripts/apply-base.mjs
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const BASE = (process.env.SITE_BASE ?? '').replace(/\/+$/, '');

if (!BASE) {
  console.log('[apply-base] SITE_BASE not set — skipping');
  process.exit(0);
}
if (!BASE.startsWith('/')) {
  console.error(`[apply-base] SITE_BASE must start with "/", got "${BASE}"`);
  process.exit(1);
}

const DIST = join(process.cwd(), 'dist');
const EXTERNAL = /^(https?:)?\/\/|^data:|^mailto:|^tel:|^javascript:|^#/;

/** Prefix a single URL if it is root-absolute and not already rebased. */
const rebase = (url) => {
  const trimmed = url.trim();
  if (!trimmed || EXTERNAL.test(trimmed)) return url;
  if (!trimmed.startsWith('/')) return url;
  if (trimmed === BASE || trimmed.startsWith(`${BASE}/`)) return url;
  if (trimmed === '/') return `${BASE}/`;
  return `${BASE}${trimmed}`;
};

/** Rewrites a srcset value: "/a.webp 640w, /b.webp 1024w" */
const rebaseSrcset = (value) =>
  value
    .split(',')
    .map((part) => {
      const [url, ...rest] = part.trim().split(/\s+/);
      return [rebase(url), ...rest].join(' ');
    })
    .join(', ');

/** HTML attributes that can carry a local URL. */
const HTML_ATTR = /\b(href|src|srcset|action|poster|data-src|data-srcset)\s*=\s*"([^"]*)"/g;
/** CSS url() references, quoted or bare. */
const CSS_URL = /url\(\s*(['"]?)([^'")]+)\1\s*\)/g;
async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const files = await walk(DIST);
let changed = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  // Only markup and styles are rewritten. JS is never touched: bundlers embed
  // non-URL string sentinels (React's "/$" comment marker, motion's "/*")
  // which must not be rebased. Island hrefs use import.meta.env.BASE_URL.
  if (!['.html', '.css'].includes(ext)) continue;

  const original = await readFile(file, 'utf8');
  let next = original;

  if (ext === '.html') {
    next = next.replace(HTML_ATTR, (match, attr, value) => {
      const rebuilt = attr === 'srcset' || attr === 'data-srcset' ? rebaseSrcset(value) : rebase(value);
      return rebuilt === value ? match : `${attr}="${rebuilt}"`;
    });
    // Inline <style> blocks can reference fonts/images too.
    next = next.replace(CSS_URL, (match, quote, url) => {
      const rebuilt = rebase(url);
      return rebuilt === url ? match : `url(${quote}${rebuilt}${quote})`;
    });
  } else if (ext === '.css') {
    next = next.replace(CSS_URL, (match, quote, url) => {
      const rebuilt = rebase(url);
      return rebuilt === url ? match : `url(${quote}${rebuilt}${quote})`;
    });
  }

  if (next !== original) {
    await writeFile(file, next);
    changed++;
  }
}

console.log(`[apply-base] base="${BASE}" rewrote ${changed} file(s)`);
