import { ArrowUpRight } from 'lucide-react';
import { isPlaceholderLink } from '../../lib/utils.js';
import { useLang } from '../../context/LanguageContext.jsx';
import { ui } from '../../data/ui.js';

/**
 * Social / profile link. While the CV still contains a placeholder such as <linkedin>,
 * it renders an inert button with a tooltip showing the exact placeholder string,
 * so nothing navigates to a broken page until the real URL is filled in.
 */
export default function ExternalLink({ href, label, icon: Icon, className = '' }) {
  const { t } = useLang();
  const base =
    'inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-6 py-3.5 text-base font-semibold backdrop-blur transition-colors';

  if (isPlaceholderLink(href)) {
    return (
      <span className="group relative inline-flex">
        <button
          type="button"
          aria-disabled="true"
          onClick={(e) => e.preventDefault()}
          className={`${base} text-fg/80 hover:border-accent/50 ${className}`}
        >
          {Icon && <Icon size={18} />}
          {label}
          <span className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
            {t(ui.contact.soon)}
          </span>
        </button>
        <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-accent opacity-0 shadow-xl transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
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
      className={`${base} text-fg hover:border-accent hover:text-accent ${className}`}
    >
      {Icon && <Icon size={18} />}
      {label}
      <ArrowUpRight size={16} />
    </a>
  );
}
