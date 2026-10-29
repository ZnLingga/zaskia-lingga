import { ArrowUpRight } from 'lucide-react';
import { isPlaceholderLink } from '../../lib/utils.js';

/**
 * Social / profile link. When the CV still contains a placeholder such as <linkedin>,
 * it renders an inert button with a tooltip showing the exact placeholder string,
 * so nothing navigates to a broken page until the real URL is filled in.
 */
export default function ExternalLink({ href, label, icon: Icon, className = '' }) {
  const base =
    'inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-5 py-3 text-sm font-medium backdrop-blur transition-colors';

  if (isPlaceholderLink(href)) {
    return (
      <span className="group relative inline-flex">
        <button
          type="button"
          aria-disabled="true"
          onClick={(e) => e.preventDefault()}
          data-cursor
          className={`${base} text-white/80 hover:border-accent/50 ${className}`}
        >
          {Icon && <Icon size={16} />}
          {label}
          <span className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-muted">soon</span>
        </button>
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-line bg-black px-3 py-1.5 font-mono text-xs text-accent opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
          {href}
        </span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${base} text-white hover:border-accent hover:text-accent ${className}`}
    >
      {Icon && <Icon size={16} />}
      {label}
      <ArrowUpRight size={14} />
    </a>
  );
}

