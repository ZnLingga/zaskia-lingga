import { Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import { isEmptyValue, isOngoing } from '../lib/utils.js';
import SectionHeading from './ui/SectionHeading.jsx';
import SpotlightCard from './ui/SpotlightCard.jsx';
import NullBadge from './ui/NullBadge.jsx';
import Reveal from './ui/Reveal.jsx';

const { organizations } = portfolioData;

export default function OrganizationsSection() {
  return (
    <section id="organizations" className="relative z-10 px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="05" kicker="Leadership" title="Organizations" />

        <div className="grid gap-4 md:grid-cols-2">
          {organizations.map((org, i) => {
            const active = isOngoing(org.period);
            return (
              <Reveal key={org.organization} delay={(i % 2) * 0.08}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-7 md:p-9">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white/[0.04] text-accent">
                        <Users size={20} />
                      </div>
                      {active ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> Active
                        </span>
                      ) : (
                        <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                          Completed
                        </span>
                      )}
                    </div>

                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{org.period}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{org.role}</h3>
                    <p className="mt-2 text-white/70">{org.organization}</p>

                    <div className="mt-auto pt-6">
                      {isEmptyValue(org.description) ? (
                        <NullBadge label="description" value={org.description} hint="documentation_pending" />
                      ) : (
                        <p className="text-sm leading-relaxed text-white/60">{org.description}</p>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

