import { portfolioData } from '../data/portfolioData.js';
import SectionHeading from './ui/SectionHeading.jsx';
import Reveal from './ui/Reveal.jsx';

const { skills } = portfolioData;

const allSkills = [...skills.programming, ...skills.database, ...skills.tools];
const reversed = [...allSkills].reverse();

function MarqueeRow({ items, reverse = false, outline = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee overflow-hidden py-2" aria-hidden>
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`mx-6 flex items-center gap-12 whitespace-nowrap font-display text-5xl font-extrabold uppercase tracking-tight md:text-8xl ${
              outline ? 'text-outline' : 'text-white'
            }`}
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const groups = [
  { title: 'Programming', items: skills.programming, accent: true },
  { title: 'Database', items: skills.database },
  { title: 'Tools', items: skills.tools },
];

export default function SkillsMarquee() {
  return (
    <section id="skills" className="relative z-10 overflow-hidden py-24 md:py-36">
      <div className="px-5 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading index="06" kicker="Toolbox" title="Skills & stack" />
        </div>
      </div>

      <div className="space-y-2">
        <MarqueeRow items={allSkills} />
        <MarqueeRow items={reversed} reverse outline />
      </div>

      <div className="mt-16 px-5 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <p className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                <span className="h-px w-8 bg-line" /> {g.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    data-cursor
                    className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
                      g.accent
                        ? 'border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-ink'
                        : 'border-line bg-surface text-white/80 hover:border-accent hover:text-accent'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

