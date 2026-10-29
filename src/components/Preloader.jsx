import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();
    let raf;
    let timeout;

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timeout = setTimeout(onComplete, 350);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#070709] p-6 md:p-10"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted md:text-xs">
        <span>Zaskia Nurismi Lingga</span>
        <span>Portfolio — 2026</span>
      </div>

      <div className="flex items-end justify-between">
        <div className="font-mono text-[28vw] font-bold leading-[0.8] tracking-tighter text-white md:text-[20vw]">
          {String(count).padStart(2, '0')}
          <span className="text-accent text-[8vw] md:text-[5vw]">%</span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 bg-line">
        <div
          className="h-full bg-accent"
          style={{ width: `${count}%`, transition: 'width 80ms linear' }}
        />
      </div>
    </motion.div>
  );
}

