import { useState } from 'react';
import { treatments } from '../../content/treatments';
import { diagnostics } from '../../content/diagnostics';
import { treatmentCategories } from '../../lib/site';
import manifest from '../../generated/images.json';
import { withBase } from '../../lib/base';

type Item = {
  slug: string;
  path: string;
  category: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  srcset?: string;
};

const M = manifest as Record<string, { srcset?: string }>;

const items: Item[] = [...treatments, ...diagnostics].map((t) => ({
  slug: t.slug,
  path: t.path,
  category: t.category,
  title: t.title,
  lede: t.lede,
  image: t.image,
  imageAlt: t.imageAlt,
  srcset: M[t.image]?.srcset,
}));

const ALL = { key: 'all', label: 'All' } as const;

export default function TreatmentExplorer() {
  const [active, setActive] = useState<string>('all');
  const filtered = active === 'all' ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="explorer-nav" role="tablist" aria-label="Treatment categories">
        {[ALL, ...treatmentCategories].map((c) => {
          const isActive = active === c.key;
          const count =
            c.key === 'all' ? items.length : items.filter((i) => i.category === c.key).length;
          return (
            <button
              key={c.key}
              role="tab"
              type="button"
              aria-selected={isActive}
              className={`explorer-tab${isActive ? ' is-active' : ''}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
              <span className="explorer-count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="explorer-grid" role="tabpanel">
        {filtered.map((t, i) => (
          <a
            key={t.slug}
            className="explorer-card"
            href={withBase(t.path)}
            style={{ ['--d' as string]: `${Math.min(i, 8) * 45}ms` }}
          >
            <span className="explorer-media">
              <img
                src={t.srcset ? t.srcset.split(', ').pop()?.split(' ')[0] ?? t.image : t.image}
                srcSet={t.srcset}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={t.imageAlt}
                width={1024}
                height={640}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="explorer-body">
              <span className="explorer-cat">
                {treatmentCategories.find((c) => c.key === t.category)?.label}
              </span>
              <span className="explorer-title">{t.title}</span>
              <span className="explorer-lede">{t.lede}</span>
              <span className="explorer-cta">
                Learn more
                <svg
                  className="arrow"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h13m0 0-5.5-5.5M18 12l-5.5 5.5" />
                </svg>
              </span>
            </span>
          </a>
        ))}
      </div>

      <style>{`
        .explorer-nav {
          display: flex;
          gap: 0.6rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          margin-bottom: 2rem;
          scrollbar-width: thin;
          -webkit-overflow-scrolling: touch;
        }
        .explorer-tab {
          flex: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.25rem;
          border-radius: 999px;
          border: 1.5px solid var(--line);
          background: var(--white);
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--body);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.4s var(--ease);
        }
        .explorer-tab:hover {
          border-color: var(--rose);
          color: var(--plum);
        }
        .explorer-tab.is-active {
          background: var(--plum);
          border-color: var(--plum);
          color: #fff;
        }
        .explorer-count {
          font-size: 0.72rem;
          padding: 0.1rem 0.45rem;
          border-radius: 999px;
          background: rgba(74, 30, 68, 0.08);
          font-variant-numeric: tabular-nums;
        }
        .explorer-tab.is-active .explorer-count {
          background: rgba(255, 255, 255, 0.2);
        }
        .explorer-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 1.6rem);
        }
        @media (max-width: 1024px) {
          .explorer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .explorer-grid { grid-template-columns: minmax(0, 1fr); }
        }
        .explorer-card {
          display: flex;
          flex-direction: column;
          background: var(--white);
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          overflow: hidden;
          animation: cardIn 0.6s var(--ease) both;
          animation-delay: var(--d, 0ms);
          transition:
            transform 0.55s var(--ease),
            box-shadow 0.55s var(--ease),
            border-color 0.4s var(--ease);
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: none; }
        }
        .explorer-card:hover {
          transform: translateY(-7px);
          box-shadow: var(--shadow-md);
          border-color: rgba(209, 127, 156, 0.45);
        }
        .explorer-media {
          display: block;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--cream-2);
        }
        .explorer-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s var(--ease);
        }
        .explorer-card:hover .explorer-media img { transform: scale(1.07); }
        .explorer-body {
          display: grid;
          gap: 0.4rem;
          padding: clamp(1.1rem, 2vw, 1.5rem);
          align-content: start;
          flex: 1;
        }
        .explorer-cat {
          font-family: var(--font-display);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--rose-deep);
        }
        .explorer-title {
          font-family: var(--font-display);
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: -0.025em;
          color: var(--ink);
          line-height: 1.2;
        }
        .explorer-lede {
          font-size: 0.88rem;
          color: var(--body-soft);
          line-height: 1.55;
        }
        .explorer-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.7rem;
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--plum);
        }
        .explorer-cta .arrow { transition: transform 0.45s var(--ease); }
        .explorer-card:hover .explorer-cta .arrow { transform: translateX(5px); }
        @media (prefers-reduced-motion: reduce) {
          .explorer-card { animation: none; }
        }
      `}</style>
    </div>
  );
}
