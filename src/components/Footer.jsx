import { Briefcase, GitBranch, Globe, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import ExternalLink from './ui/ExternalLink.jsx';
import Magnetic from './ui/Magnetic.jsx';
import Reveal from './ui/Reveal.jsx';
import { scrollToId } from '../lib/lenis.js';

const { profile } = portfolioData;

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 px-5 pb-8 pt-24 md:px-10 md:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted">
            <span className="text-accent">07</span> — Contact
          </p>
          <a
            href={`mailto:${profile.email}`}
            data-cursor
            className="group block font-display text-[clamp(3rem,12vw,11rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.03em]"
          >
            <span className="block">Let's</span>
            <span className="block text-outline transition-all duration-500 group-hover:text-accent group-hover:[-webkit-text-stroke:0]">
              Collaborate
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-ink"
            >
              <Mail size={18} /> {profile.email}
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-7 py-4 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Phone size={18} /> {profile.phone}
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-3">
          <ExternalLink href={profile.links.portfolio} label="Portfolio" icon={Globe} />
          <ExternalLink href={profile.links.linkedin} label="LinkedIn" icon={Briefcase} />
          <ExternalLink href={profile.links.github} label="GitHub" icon={GitBranch} />
        </Reveal>

        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-widest text-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React · Vite · Tailwind · GSAP · Lenis</span>
          <button onClick={() => scrollToId('hero')} data-cursor className="hover:text-accent">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

