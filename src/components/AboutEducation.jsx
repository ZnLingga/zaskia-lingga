import { GraduationCap, Mail, MapPin, Phone, School } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import { ui } from '../data/ui.js';
import { useLang } from '../context/LanguageContext.jsx';
import { isEmptyValue, isOngoing } from '../lib/utils.js';
import SectionHeading from './ui/SectionHeading.jsx';
import Card from './ui/Card.jsx';
import NullBadge from './ui/NullBadge.jsx';
import Reveal from './ui/Reveal.jsx';

const { profile, education } = portfolioData;

function Fact({ icon: Icon, label, children, href }) {
  const Inner = href ? 'a' : 'div';
  return (
    <Inner
      {...(href ? { href } : {})}
      className="flex items-start gap-4 rounded-2xl px-1 py-3 transition-colors hover:text-accent"
    >
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon size={20} />
      </span>
      <span>
        <span className="block text-sm font-semibold text-muted">{label}</span>
        <span className="block break-all text-lg font-semibold sm:break-normal">{children}</span>
      </span>
    </Inner>
  );
}

export default function AboutEducation() {
  const { t } = useLang();

  return (
    <section id="about" className="relative z-10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading index="01" title={t(ui.about.title)} />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <p className="text-xl leading-relaxed text-fg/85 md:text-2xl md:leading-relaxed">
              {isEmptyValue(profile.about) ? <NullBadge value={String(profile.about)} /> : t(profile.about)}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="divide-y divide-line p-6 md:p-8">
              <Fact icon={School} label={t(ui.about.university)}>
                {profile.university}
              </Fact>
              <Fact icon={MapPin} label={t(ui.about.location)}>
                {t(profile.location)}
              </Fact>
              <Fact icon={Mail} label={t(ui.about.email)} href={`mailto:${profile.email}`}>
                {profile.email}
              </Fact>
              <Fact
                icon={Phone}
                label={t(ui.about.phone)}
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
              >
                {profile.phone}
              </Fact>
            </Card>
          </Reveal>
        </div>

        {/* Education */}
        <Reveal className="mb-8 mt-24 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <GraduationCap size={24} />
          </span>
          <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t(ui.education.title)}</h3>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.institution} delay={i * 0.08}>
              <Card className="flex h-full flex-col p-7 md:p-9">
                <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-base font-semibold text-accent">
                  {isOngoing(t(item.period)) && (
                    <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  )}
                  {t(item.period)}
                </span>

                <h4 className="text-2xl font-extrabold leading-tight md:text-3xl">{item.institution}</h4>
                <p className="mt-2 text-lg text-fg/80">{t(item.degree)}</p>
                <p className="mt-1 flex items-center gap-2 text-base text-muted">
                  <MapPin size={16} /> {t(item.location)}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-base">
                  <span className="font-semibold text-muted">{t(ui.education.gpa)}</span>
                  {isEmptyValue(item.gpa) ? (
                    <NullBadge value={item.gpa === null ? 'null' : item.gpa} />
                  ) : (
                    <span className="font-bold text-accent">{item.gpa}</span>
                  )}
                </div>

                {item.relevantCourses.length > 0 && (
                  <div className="mt-auto pt-7">
                    <p className="mb-3 text-base font-semibold text-muted">{t(ui.education.courses)}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.relevantCourses.map((c) => (
                        <span
                          key={c.id}
                          className="rounded-full border border-line px-4 py-1.5 text-base font-medium"
                        >
                          {t(c)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

