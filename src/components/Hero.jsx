import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { gsap } from '../lib/gsap.js';
import { scrollToId } from '../lib/lenis.js';
import { portfolioData } from '../data/portfolioData.js';
import { ui } from '../data/ui.js';
import { useLang } from '../context/LanguageContext.jsx';
import profilePhoto from '../assets/profile.jpg';

const { profile } = portfolioData;
const nameLines = ['Zaskia', 'Nurismi', 'Lingga'];
const CV_HREF = `${import.meta.env.BASE_URL}CV-Zaskia-Nurismi-Lingga.pdf`;

function NameLine({ text, ready, index }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={ready ? { y: '0%' } : {}}
        transition={{ duration: 1, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero({ ready }) {
  const { t } = useLang();
  const root = useRef(null);
  const taglineParts = t(profile.tagline).split('•').map((s) => s.trim());
  const summary = `${t(profile.about).split('. ')[0].replace(/\.$/, '')}.`;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-photo', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const fade = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="hero"
      ref={root}
      className="relative z-10 flex min-h-screen items-center px-6 pb-16 pt-32 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <div>
          <motion.p {...fade(0.1)} className="mb-5 text-lg font-semibold text-accent md:text-xl">
            {t(ui.hero.greeting)}
          </motion.p>

          <h1 className="text-[clamp(3rem,7.2vw,5.75rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {nameLines.map((line, i) => (
              <NameLine key={line} text={line} ready={ready} index={i} />
            ))}
          </h1>

          <motion.div {...fade(0.7)} className="mt-8 flex flex-wrap gap-2.5">
            {taglineParts.map((part, i) => (
              <span
                key={part}
                className={`rounded-full border px-4 py-2 text-base font-semibold ${
                  i === 0
                    ? 'border-accent/40 bg-accent/10 text-accent'
                    : 'border-line bg-surface/70 text-fg/80'
                }`}
              >
                {part}
              </span>
            ))}
          </motion.div>

          <motion.p {...fade(0.85)} className="mt-8 max-w-2xl text-xl leading-relaxed text-fg/75">
            {summary}
          </motion.p>

          <motion.div {...fade(1)} className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToId('projects')}
              className="inline-flex items-center rounded-full bg-accent px-7 py-4 text-base font-bold text-onaccent transition-transform hover:-translate-y-0.5"
            >
              {t(ui.hero.projects)}
            </button>
            <a
              href={CV_HREF}
              download
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-7 py-4 text-base font-bold transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={18} /> {t(ui.hero.cv)}
            </a>
            <button
              type="button"
              onClick={() => scrollToId('contact')}
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-4 text-base font-bold text-fg/80 transition-colors hover:text-accent"
            >
              <Mail size={18} /> {t(ui.hero.contact)}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[340px] lg:max-w-none"
        >
          <div className="hero-photo">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_40px_90px_-40px_rgb(var(--accent)/0.55)]">
              <img
                src={profilePhoto}
                alt={t(ui.hero.photoAlt)}
                className="h-full w-full object-cover object-[50%_22%]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
