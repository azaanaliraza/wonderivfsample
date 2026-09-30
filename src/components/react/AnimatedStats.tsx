import { useEffect, useRef, useState } from 'react';
import type { Stat } from '../../lib/content-types';

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return val;
}

function StatItem({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const val = useCountUp(stat.value, active, 1200 + index * 180);
  const formatted = stat.value >= 1000 ? val.toLocaleString('en-IN') : String(val);
  return (
    <div
      className="stat"
      data-reveal="in"
      style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
    >
      <span className="stat-value">
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function AnimatedStats({ stats, className = 'stats' }: { stats: Stat[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={className} ref={ref}>
      {stats.map((s, i) => (
        <StatItem key={s.label} stat={s} active={active} index={i} />
      ))}
    </div>
  );
}
