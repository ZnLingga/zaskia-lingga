import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, GitBranch, Globe, MapPin } from 'lucide-react';
import { gsap } from '../lib/gsap.js';
import { portfolioData } from '../data/portfolioData.js';
import ExternalLink from './ui/ExternalLink.jsx';
import CountUp from './ui/CountUp.jsx';
import Magnetic from './ui/Magnetic.jsx';
import { scrollToId } from '../lib/lenis.js';
import profile from '../assets/profile.jpg';

const { profile: me, projects, awards, organizations, skills } = portfolioData;
const nameLines = me.name.toUpperCase().split(' ');
const taglineParts = me.tagline.split('•').map((s) => s.trim());

const stats = [
  { label: 'Projects', value: projects.length },
  { label: 'Podium Finishes', value: awards.length },
  { label: 'Organizations', value: organizations.length },
  { label: 'Programming Languages', value: skills.programming.length },
];

function Line({ text, ready, lineIndex }) {
  return (
    <span className="hero-line block overflow-hidden pb-[0.06em]">
      <span className="block">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: '115%', rotate: 6 }}
            animate={ready ? { y: '0%', rotate: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.15 + lineIndex * 0.12 + i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export default function Hero({ ready }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-photo', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero-line:nth-child(odd) > span', {
        xPercent: -6,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero-line:nth-child(even) > span', {
        xPercent: 6,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to('.hero-content', {
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: '60% top', end: 'bottom top', scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-12 pt-28 md:px-10"
    >
      <div className="hero-content mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-12">
        {/* Text column */}
        <div className="relative z-20 order-2 lg:order-1 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>{me.university}</span>
            <span className="text-white/20">/</span>
            <MapPin size={12} className="text-accent" />
            <span>Malang, ID</span>
          </motion.div>

          <h1 className="font-display text-[clamp(3.2rem,11.5vw,10.5rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.03em]">
            {nameLines.map((word, i) => (
              <Line key={word} text={word} ready={ready} lineIndex={i} />
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {taglineParts.map((part, i) => (
              <span
                key={part}
                className={`rounded-full border px-4 py-1.5 font-mono text-xs ${
                  i === 0
                    ? 'border-accent/40 bg-accent/10 text-accent'
                    : 'border-line bg-surface/70 text-white/70'
                }`}
              >
                {part}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.25, duration: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.25}>
              <button
                onClick={() => scrollToId('projects')}
                data-cursor
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink"
              >
                <Briefcase size={16} /> Lihat Proyek
              </button>
            </Magnetic>
            <ExternalLink href={me.links.portfolio} label="Portfolio" icon={Globe} />
            <ExternalLink href={me.links.github} label="GitHub" icon={GitBranch} />
          </motion.div>
        </div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 mx-auto w-full max-w-[320px] lg:order-2 lg:col-span-4 lg:max-w-none"
        >
          <div className="hero-photo relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-transparent to-ember/20 blur-2xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
              <img
                src={profile}
                alt="Foto Zaskia Nurismi Lingga"
                className="h-full w-full object-cover object-[50%_20%] grayscale-[25%] transition duration-700 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/80">
                <span>Data × Taekwondo</span>
                <span className="text-accent">● Live</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.9 }}
        className="hero-content mx-auto mt-14 grid w-full max-w-[1400px] grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-surface/90 px-6 py-5 backdrop-blur">
            <div className="font-display text-4xl font-extrabold md:text-5xl">
              <CountUp to={s.value} />
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.button
        onClick={() => scrollToId('about')}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2 }}
        data-cursor
        className="mx-auto mt-10 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted md:flex"
      >
        Scroll <ArrowDown size={12} className="animate-bounce" />
      </motion.button>
    </section>
  );
}

