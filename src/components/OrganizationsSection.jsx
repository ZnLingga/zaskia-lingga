import { portfolioData } from '../data/portfolioData.js';
import { ui } from '../data/ui.js';
import { useLang } from '../context/LanguageContext.jsx';
import { isEmptyValue, isOngoing } from '../lib/utils.js';
import SectionHeading from './ui/SectionHeading.jsx';
import Card from './ui/Card.jsx';
import NullBadge from './ui/NullBadge.jsx';
import Reveal from './ui/Reveal.jsx';

const { organizations } = portfolioData;

export default function OrganizationsSection() {
  const { t } = useLang();

  return (
    <section id="organizations" className="relative z-10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading index="05" title={t(ui.organizations.title)} />

        <div className="grid gap-5 md:grid-cols-2">
          {organizations.map((org, i) => {
            const active = isOngoing(t(org.period));
            return (
              <Reveal key={org.organization.id} delay={(i % 2) * 0.08}>
                <Card className="flex h-full flex-col p-7 md:p-9">
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-base font-semibold text-muted">{t(org.period)}</span>
                    {active ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-sm font-bold text-accent">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                        {t(ui.organizations.active)}
                      </span>
                    ) : (
                      <span className="rounded-full border border-line px-3.5 py-1 text-sm font-semibold text-muted">
                        {t(ui.organizations.done)}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold leading-snug">{t(org.role)}</h3>
                  <p className="mt-2 text-lg font-semibold text-accent">{t(org.organization)}</p>

                  <div className="mt-auto pt-5">
                    {isEmptyValue(org.description) ? (
                      <NullBadge value={String(org.description)} />
                    ) : (
                      <p className="text-lg leading-relaxed text-fg/75">{t(org.description)}</p>
                    )}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
