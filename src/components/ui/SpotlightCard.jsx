import { useRef } from 'react';

/** Bento card with a mouse-tracking radial spotlight + 1px glowing border. */
export default function SpotlightCard({ children, className = '', ...props }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      data-cursor
      className={`spotlight-card overflow-hidden rounded-3xl border border-line bg-surface ${className}`}
      {...props}
    >
      <div className="relative z-[1] h-full">{children}</div>
    </div>
  );
}

