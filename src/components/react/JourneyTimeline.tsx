import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react';

const steps = [
  {
    title: 'Consultation',
    text: 'A detailed fertility evaluation — history review, hormonal profiling, ovarian reserve assessment, ultrasound and semen analysis to find the exact cause.',
  },
  {
    title: 'Personalised planning',
    text: 'A tailored pathway that may include natural planning, ovulation induction, IUI or IVF/ICSI — explained with clear timelines, transparent costs and realistic expectations.',
  },
  {
    title: 'Ovarian stimulation',
    text: 'Hormonal medication for 8 to 14 days encourages the ovaries to produce multiple mature eggs rather than the single egg usually produced each month.',
  },
  {
    title: 'Monitoring',
    text: 'Frequent ultrasounds and blood tests track follicle development, so medication is working optimally and safely throughout stimulation.',
  },
  {
    title: 'Egg retrieval',
    text: 'A trigger shot is given, and roughly 36 hours later eggs are collected in a brief, minimally invasive procedure under light sedation — no incisions or stitches.',
  },
  {
    title: 'Fertilisation & culture',
    text: 'Eggs are joined with sperm in the lab, with ICSI where male-factor infertility is present. Embryos are cultured for 3 to 5 days in the embryology laboratory.',
  },
  {
    title: 'Embryo transfer',
    text: 'The most viable embryo is placed into the uterus using a thin catheter. Remaining high-quality embryos can be cryopreserved for future use.',
  },
  {
    title: 'Pregnancy care',
    text: 'Early pregnancy monitoring, high-risk pregnancy support when needed, and delivery planning — because continuity of care matters as much as treatment.',
  },
];

export default function JourneyTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [horizontal, setHorizontal] = useState(false);
  const [distance, setDistance] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1025px)');
    const set = () => setHorizontal(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, []);

  useEffect(() => {
    if (!horizontal) return;
    const measure = () => {
      const track = trackRef.current;
      const viewport = track?.parentElement;
      if (!track || !viewport) return;
      setDistance(Math.max(track.scrollWidth - viewport.clientWidth, 0));
    };
    measure();
    window.addEventListener('resize', measure);
    const t = window.setTimeout(measure, 300);
    return () => {
      window.removeEventListener('resize', measure);
      window.clearTimeout(t);
    };
  }, [horizontal]);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 });
  const x = useTransform(progress, [0, 1], [0, -distance]);

  if (horizontal && !reduce && distance > 0) {
    return (
      <div className="journey-scroll" ref={wrapRef}>
        <div className="journey-sticky">
          <div className="journey-progress" aria-hidden="true">
            <motion.div className="journey-progress-bar" style={{ scaleX: progress }} />
          </div>
          <div className="journey-viewport">
            <motion.div className="journey-track" ref={trackRef} style={{ x }}>
              {steps.map((s, i) => (
                <article className="journey-card" key={s.title}>
                  <span className="journey-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="journey-rule" aria-hidden="true" />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </motion.div>
          </div>
          <p className="journey-hint">Scroll to follow your journey →</p>
        </div>
      </div>
    );
  }

  return (
    <ol className="journey-vertical">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="journey-num">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
      <style>{`
        .journey-vertical { display: grid; gap: 0.9rem; }
        .journey-vertical li {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1rem;
          background: #fff;
          border: 1px solid var(--line-soft);
          border-radius: var(--r-lg);
          padding: clamp(1.15rem, 3vw, 1.5rem);
        }
        .journey-vertical h3 {
          font-family: var(--font-display);
          font-size: 1.12rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 0.35rem;
          color: var(--ink);
        }
        .journey-vertical p { font-size: 0.93rem; color: var(--body); line-height: 1.6; }
        .journey-num {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--rose-deep);
        }
      `}</style>
    </ol>
  );
}
