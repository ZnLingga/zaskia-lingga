import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import { isEmptyValue } from '../lib/utils.js';
import SectionHeading from './ui/SectionHeading.jsx';
import NullBadge from './ui/NullBadge.jsx';
import Reveal from './ui/Reveal.jsx';

const { projects } = portfolioData;

function ProjectRow({ project }) {
  const shift = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    shift.set(((e.clientX - rect.left) / rect.width - 0.5) * 36);
  };

  return (
    <motion.article
      data-cursor
      onMouseMove={onMove}
      onMouseLeave={() => shift.set(0)}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative border-t border-line py-8 transition-colors hover:bg-white/[0.025] md:py-12"
    >
      <div className="grid items-center gap-5 px-2 md:grid-cols-12 md:px-6">
        <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent md:col-span-1">
          {project.id}
        </span>

        <motion.h3
          style={{ x: shift }}
          className="font-display text-[clamp(2rem,6vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight transition-colors md:col-span-7 group-hover:text-accent"
        >
          {project.title}
        </motion.h3>

        <div className="flex flex-wrap items-center gap-2 md:col-span-3 md:justify-end">
          <span className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-white/80">
            {project.role}
          </span>
          <span className="rounded-full bg-white/[0.06] px-3 py-1.5 font-mono text-[11px] text-muted">
            {project.date}
          </span>
        </div>

        <div className="hidden justify-end md:col-span-1 md:flex">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>

      <div className="px-2 pt-4 md:px-6 md:pl-[calc(8.333%+1.5rem)]">
        {isEmptyValue(project.description) ? (
          <NullBadge label="status" value={project.description} hint="documentation_pending" />
        ) : (
          <p className="max-w-2xl text-white/70">{project.description}</p>
        )}
      </div>
    </motion.article>
  );
}

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative z-10 px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="03" kicker="Selected Projects" title="Things I've built" />

        <Reveal>
          <div className="border-b border-line">
            {projects.map((p) => (
              <ProjectRow key={p.id} project={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

