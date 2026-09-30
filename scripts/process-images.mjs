import { readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'img-src');
const OUT = path.join(ROOT, 'public', 'images');

const RULES = [
  [/kanika|rinnoy|rinoy|shilpa/, 'doctors'],
  [/manish|jasmeet/, 'leadership'],
  [/blog-\d/, 'blog'],
  [/best-ivf-centre|best-ivf-clinic|happy-family|mother-newborn|parenthood-journey|fertility-hope|fertility-parenthood/, 'hero'],
  [/adenomyosis|endometriosis|fallopian|fibroid|pcos|ovarian-insufficiency|premature-ovarian|unexplained-infertility|low-ovarian|ovarian-reserve|ovarian-follicle|ovarian-health|repeated-ivf|female-infertility|female-fertility|female-reproductive|male-fertility|male-infertility|uterus|uterine|infertility-treatment|infertility-care|fertility-support-consultation/, 'conditions'],
  [/ultrasound|hysteroscopy|laparoscop|hormonal-fertility|fertility-diagnosis|diagnostic-tools|fertility-ultrasound/, 'diagnostics'],
  [/laboratory|embryology|ivf-hospital|ivf-clinic-mumbai|wonder-ivf-mumbai|advanced-ivf-laboratory|ivf-laboratory|ivf-expert|trusted-ivf/, 'facility'],
  [/location|andheri|kolhapur|maps/, 'locations'],
];

const brandFiles = new Set(['2025__04__wonder-ivf-mumbai-india.png', '2026__05__logo-white.png', '2026__05__favicon.png']);
const skipRe = /-\d+x\d+\.(webp|png|jpe?g)$/i;
const WIDTHS = [640, 1024, 1600];

function baseName(file) {
  let b = file.replace(/\.[a-z0-9]+$/i, '').toLowerCase();
  b = b.replace(/^\d{4}__\d{2}__/, '').replace(/^elementor__thumbs__/, '');
  b = b.replace(/^mother-newborn-care-mumbai-rsw.*$/, 'mother-newborn-care-mumbai');
  b = b.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return b;
}

function groupFor(file) {
  const f = file.toLowerCase();
  for (const [re, g] of RULES) if (re.test(f)) return g;
  return 'treatments';
}

const manifest = {};
await mkdir(path.join(ROOT, 'public', 'brand'), { recursive: true });

const files = (await readdir(SRC)).filter((f) => !skipRe.test(f)).sort();
let count = 0;

for (const file of files) {
  const src = path.join(SRC, file);
  const isBrand = brandFiles.has(file);

  if (isBrand) {
    const name = baseName(file) + path.extname(file).toLowerCase();
    const dest = path.join(ROOT, 'public', 'brand', name);
    const img = sharp(src);
    const meta = await img.metadata();
    if (path.extname(file).toLowerCase() === '.png' && file.includes('favicon')) {
      await img.resize(192, 192).png().toFile(dest);
      await img.resize(512, 512).png().toFile(path.join(ROOT, 'public', 'brand', 'favicon-512.png'));
    } else {
      await img.png().toFile(dest);
    }
    manifest['/brand/' + name] = { w: meta.width, h: meta.height, variants: [] };
    count++;
    continue;
  }

  const group = groupFor(file);
  const base = baseName(file);
  const dir = path.join(OUT, group);
  await mkdir(dir, { recursive: true });

  const meta = await sharp(src).metadata();
  const ow = meta.width || 1600;
  const variants = [];
  const targetWidths = WIDTHS.filter((w) => w <= ow);
  if (!targetWidths.length) targetWidths.push(ow);

  const canonicalWidth = targetWidths[targetWidths.length - 1];
  for (const w of targetWidths) {
    const name = `${base}${w === canonicalWidth ? '' : `@${w}`}.webp`;
    const dest = path.join(dir, name);
    const pipeline = sharp(src).rotate().resize({ width: w, withoutEnlargement: true });
    await pipeline.webp({ quality: 78, effort: 5 }).toFile(dest);
    const outMeta = await sharp(dest).metadata();
    variants.push({ w: outMeta.width, h: outMeta.height, path: `/images/${group}/${name}` });
  }

  // canonical path = the largest variant
  const canonical = variants[variants.length - 1];
  manifest[`/images/${group}/${base}.webp`] = {
    w: canonical.w,
    h: canonical.h,
    variants: variants.map((v) => ({ w: v.w, path: v.path })),
    srcset: variants.map((v) => `${v.path} ${v.w}w`).join(', '),
  };
  count++;
}

await mkdir(path.join(ROOT, 'src', 'generated'), { recursive: true });
await writeFile(
  path.join(ROOT, 'src', 'generated', 'images.json'),
  JSON.stringify(manifest, null, 0),
);
console.log(`processed ${count} images, ${Object.keys(manifest).length} manifest entries`);
