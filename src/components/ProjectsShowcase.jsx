import { portfolioData } from '../data/portfolioData.js';
import { ui } from '../data/ui.js';
import { useLang } from '../context/LanguageContext.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Card from './ui/Card.jsx';
import Reveal from './ui/Reveal.jsx';

const { projects } = portfolioData;

export default function ProjectsShowcase() {
  const { t } = useLang();

  return (
    <section id="projects" className="relative z-10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading index="03" title={t(ui.projects.title)} />

        <div className="space-y-6">
          {projects.map((p) => (
            <Reveal key={p.id}>
              <Card className="grid gap-8 p-7 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
                <div>
                  <p className="text-lg font-extrabold text-accent">{p.id}</p>
                  <h3 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                    {t(p.title)}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <span className="rounded-full bg-accent/10 px-4 py-1.5 text-base font-semibold text-accent">
                      {t(p.role)}
                    </span>
                    <span className="rounded-full border border-line px-4 py-1.5 text-base font-medium text-muted">
                      {t(p.date)}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <p className="text-lg leading-relaxed text-fg/80">{t(h)}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
