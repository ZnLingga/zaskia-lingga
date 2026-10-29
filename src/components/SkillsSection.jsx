import { portfolioData } from '../data/portfolioData.js';
import { ui } from '../data/ui.js';
import { useLang } from '../context/LanguageContext.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Card from './ui/Card.jsx';
import Reveal from './ui/Reveal.jsx';

const { skills } = portfolioData;

function Pill({ children, accent = false }) {
  return (
    <span
      className={`rounded-full border px-4 py-2 text-base font-semibold ${
        accent ? 'border-accent/40 bg-accent/10 text-accent' : 'border-line text-fg/85'
      }`}
    >
      {children}
    </span>
  );
}

export default function SkillsSection() {
  const { t } = useLang();

  const groups = [
    { key: 'programming', items: skills.programming, accent: true },
    { key: 'database', items: skills.database },
    { key: 'tools', items: skills.tools },
  ];

  return (
    <section id="skills" className="relative z-10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading index="06" title={t(ui.skills.title)} />

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <Card className="p-7 md:p-9">
              <h3 className="mb-6 text-lg font-bold text-muted">{t(ui.skills.languages)}</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {skills.languages.map((l) => (
                  <div
                    key={l.name.id}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-line px-5 py-4"
                  >
                    <span className="text-lg font-bold">{t(l.name)}</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-bold text-accent">
                      {t(l.level)}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          {groups.map((g, i) => (
            <Reveal
              key={g.key}
              delay={i * 0.08}
              className={g.key === 'tools' ? 'md:col-span-2' : ''}
            >
              <Card className="h-full p-7 md:p-9">
                <h3 className="mb-6 text-lg font-bold text-muted">{t(ui.skills[g.key])}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((item) => (
                    <Pill key={item} accent={g.accent}>
                      {item}
                    </Pill>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

