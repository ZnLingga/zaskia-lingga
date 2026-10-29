import { Building2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import { ui } from '../data/ui.js';
import { useLang } from '../context/LanguageContext.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Card from './ui/Card.jsx';
import Reveal from './ui/Reveal.jsx';

const { experience } = portfolioData;

export default function ExperienceSection() {
  const { t } = useLang();

  return (
    <section id="experience" className="relative z-10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading index="02" title={t(ui.experience.title)} />

        <div className="space-y-6">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <Card className="grid gap-10 p-7 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-base font-semibold text-accent">
                    {t(job.period)}
                  </span>
                  <h3 className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl">{job.company}</h3>
                  <p className="mt-3 text-xl text-fg/80">{t(job.role)}</p>

                  <div className="mt-6 flex flex-wrap gap-2.5 text-base text-muted">
                    <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2">
                      <Building2 size={16} /> {t(job.mode)}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2">
                      <MapPin size={16} /> {t(job.location)}
                    </span>
                  </div>
                </div>

                <ol className="space-y-5">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                        {i + 1}
                      </span>
                      <p className="text-lg leading-relaxed text-fg/80">{t(h)}</p>
                    </li>
                  ))}
                </ol>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
