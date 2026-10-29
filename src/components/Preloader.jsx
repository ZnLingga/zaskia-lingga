import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext.jsx';
import { ui } from '../data/ui.js';

const CURTAIN = '#0A1B5C'; // deep blue, same in both themes
const EASE = [0.76, 0, 0.24, 1];

/**
 * Minimal theatre-curtain loader: two deep-blue panels hold a name, a hairline progress bar
 * and a counter, then slide apart to reveal the page. Runs on every load / refresh.
 */
export default function Preloader({ onComplete }) {
  const { t } = useLang();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 400 : 1700;
    const start = performance.now();
    let raf;
    let timeout;

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else timeout = setTimeout(onComplete, 250);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100]"
      role="status"
      aria-label={t(ui.loading)}
      exit={{ pointerEvents: 'none' }}
    >
      {/* Curtain panels */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2"
        style={{ background: CURTAIN }}
        exit={{ x: '-100%' }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2"
        style={{ background: CURTAIN }}
        exit={{ x: '100%' }}
        transition={{ duration: 1.1, ease: EASE }}
      />

      {/* Centered content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white"
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
          {t(ui.loading)}
        </p>
        <p className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
          Zaskia Nurismi Lingga
        </p>

        <div className="mt-10 h-px w-48 overflow-hidden bg-white/20 md:w-72">
          <div
            className="h-full bg-sky-300"
            style={{ width: `${count}%`, transition: 'width 80ms linear' }}
          />
        </div>
        <p className="mt-4 text-base font-semibold tabular-nums text-white/70">
          {String(count).padStart(3, '0')}
        </p>
      </motion.div>
    </motion.div>
  );
}
