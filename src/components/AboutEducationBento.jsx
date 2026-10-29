import { Code, Database, GraduationCap, Languages, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import { isEmptyValue, isOngoing } from '../lib/utils.js';
import SectionHeading from './ui/SectionHeading.jsx';
import SpotlightCard from './ui/SpotlightCard.jsx';
import NullBadge from './ui/NullBadge.jsx';
import Reveal from './ui/Reveal.jsx';

const { profile, education, skills } = portfolioData;

function Pill({ children, accent = false }) {
  return (
    <span
      className={`rounded-full border px-3 py-1.5 font-mono text-xs ${
        accent ? 'border-accent/40 bg-accent/10 text-accent' : 'border-line bg-white/[0.03] text-white/75'
      }`}
    >
      {children}
    </span>
  );
}

function EducationCard({ item, index }) {
  const ongoing = isOngoing(item.period);
  return (
    <SpotlightCard className="h-full">
      <div className="flex h-full flex-col p-7 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white/[0.04] text-accent">
            <GraduationCap size={20} />
          </div>
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
            {ongoing && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />}
            {item.period}
          </span>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          Education / 0{index + 1}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold leading-tight md:text-3xl">
          {item.institution}
        </h3>
        <p className="mt-2 text-white/70">{item.degree}</p>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={13} /> {item.location}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">GPA</span>
          {isEmptyValue(item.gpa) ? (
            <NullBadge label="gpa" value={item.gpa === null ? 'null' : item.gpa} hint="not_provided" />
          ) : (
            <Pill accent>{item.gpa}</Pill>
          )}
        </div>

        {item.relevantCourses.length > 0 && (
          <div className="mt-auto pt-6">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted">
              Relevant Courses
            </p>
            <div className="flex flex-wrap gap-2">
              {item.relevantCourses.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </div>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}

export default function AboutEducationBento() {
  return (
    <section id="about" className="relative z-10 px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="01" kicker="About & Education" title="Who is behind the code" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {/* About */}
          <Reveal className="md:col-span-6 lg:col-span-7">
            <SpotlightCard className="h-full">
              <div className="flex h-full flex-col p-7 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white/[0.04] text-accent">
                    <Sparkles size={20} />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">About</p>
                </div>

                <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                  {profile.name}
                </h3>
                <p className="mt-3 max-w-xl text-white/70">
                  {profile.tagline.split('•').map((s) => s.trim()).join('  ·  ')}
                </p>

                <div className="mt-6">
                  {isEmptyValue(profile.about) ? (
                    <NullBadge variant="terminal" label="about" value={profile.about} />
                  ) : (
                    <p className="max-w-xl leading-relaxed text-white/80">{profile.about}</p>
                  )}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-white/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Mail size={14} /> {profile.email}
                  </a>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-white/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Phone size={14} /> {profile.phone}
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.08} className="md:col-span-3 lg:col-span-5">
            <EducationCard item={education[0]} index={0} />
          </Reveal>

          <Reveal delay={0.05} className="md:col-span-3 lg:col-span-5">
            <EducationCard item={education[1]} index={1} />
          </Reveal>

          {/* Core competencies */}
          <Reveal delay={0.1} className="md:col-span-6 lg:col-span-7">
            <SpotlightCard className="h-full">
              <div className="p-7 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white/[0.04] text-accent">
                    <Code size={20} />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                    Core Competencies
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted">
                      Programming
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((s) => (
                        <Pill key={s} accent>
                          {s}
                        </Pill>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                      <Database size={12} /> Database & Data
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skills.database.map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted">
                      Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {education[0].relevantCourses.map((c) => (
                        <Pill key={c}>{c}</Pill>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Languages */}
          <Reveal delay={0.12} className="md:col-span-6 lg:col-span-12">
            <SpotlightCard>
              <div className="grid gap-6 p-7 md:p-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white/[0.04] text-accent">
                    <Languages size={20} />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Languages</p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {skills.languages.map((l) => (
                    <div
                      key={l.name}
                      className="flex items-center justify-between rounded-2xl border border-line bg-white/[0.02] px-5 py-4"
                    >
                      <span className="font-display text-lg font-semibold">{l.name}</span>
                      <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                        {l.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

