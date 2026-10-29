import { Briefcase, GitBranch, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import { ui } from '../data/ui.js';
import { useLang } from '../context/LanguageContext.jsx';
import { scrollToId } from '../lib/lenis.js';
import ExternalLink from './ui/ExternalLink.jsx';
import Reveal from './ui/Reveal.jsx';

const { profile } = portfolioData;

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="relative z-10 px-6 pb-10 pt-24 md:px-10 md:pt-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mb-3 text-base font-bold tracking-[0.2em] text-accent">07</p>
          <p className="text-lg font-semibold text-muted">{t(ui.contact.title)}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 block text-[clamp(2.8rem,9vw,7.5rem)] font-extrabold leading-[1] tracking-[-0.035em] transition-colors hover:text-accent"
          >
            {t(ui.contact.cta)}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-base font-bold text-onaccent transition-transform hover:-translate-y-0.5"
          >
            <Mail size={18} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-7 py-4 text-base font-bold transition-colors hover:border-accent hover:text-accent"
          >
            <Phone size={18} /> {profile.phone}
          </a>
        </Reveal>

        <Reveal delay={0.15} className="mt-4 flex flex-wrap gap-3">
          <ExternalLink href={profile.links.github} label="GitHub" icon={GitBranch} />
          <ExternalLink href={profile.links.linkedin} label="LinkedIn" icon={Briefcase} />
        </Reveal>

        <div className="mt-24 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-base text-muted md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{t(ui.contact.built)}</span>
          <button
            type="button"
            onClick={() => scrollToId('hero')}
            className="font-semibold transition-colors hover:text-accent"
          >
            {t(ui.controls.toTop)} ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
