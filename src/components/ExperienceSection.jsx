import { Building2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import SectionHeading from './ui/SectionHeading.jsx';
import SpotlightCard from './ui/SpotlightCard.jsx';
import Reveal from './ui/Reveal.jsx';

const { experience } = portfolioData;

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="02" kicker="Experience" title="Where theory meets production" />

        <div className="relative space-y-6 md:pl-14">
          <div className="absolute bottom-0 left-4 top-2 hidden w-px bg-gradient-to-b from-accent via-line to-transparent md:block" />

          {experience.map((job) => (
            <Reveal key={job.company} className="relative">
              <span className="absolute -left-[3.05rem] top-9 hidden h-3 w-3 rounded-full border-2 border-accent bg-ink md:block">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
              </span>

              <SpotlightCard>
                <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent">
                      {job.period}
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-bold leading-tight md:text-5xl">
                      {job.company}
                    </h3>
                    <p className="mt-3 text-lg text-white/80">{job.role}</p>

                    <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5">
                        <Building2 size={13} /> {job.mode}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5">
                        <MapPin size={13} /> {job.location}
                      </span>
                    </div>
                  </div>

                  <ol className="space-y-2 lg:col-span-7">
                    {job.highlights.map((h, i) => (
                      <li
                        key={i}
                        data-cursor
                        className="group flex gap-4 rounded-2xl border border-transparent p-4 transition-colors hover:border-line hover:bg-white/[0.03]"
                      >
                        <span className="font-mono text-xs text-accent">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-[15px] leading-relaxed text-white/75 transition-colors group-hover:text-white">
                          {h}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

