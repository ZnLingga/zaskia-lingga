import { Medal, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import { ui } from '../data/ui.js';
import { useLang } from '../context/LanguageContext.jsx';
import SectionHeading from './ui/SectionHeading.jsx';
import Card from './ui/Card.jsx';
import Reveal from './ui/Reveal.jsx';

const { awards } = portfolioData;

const tone = {
  1: 'bg-amber-500/15 text-amber-500',
  2: 'bg-slate-400/15 text-slate-400',
  3: 'bg-orange-500/15 text-orange-500',
};

// Gold first, keeping the CV order within the same rank.
const sorted = [...awards].sort((a, b) => a.rank - b.rank);

export default function AwardsSection() {
  const { t } = useLang();

  return (
    <section id="awards" className="relative z-10 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading index="04" title={t(ui.awards.title)} />

        <div className="grid gap-5 md:grid-cols-3">
          {sorted.map((award, i) => (
            <Reveal key={award.title.id} delay={i * 0.08}>
              <Card className="flex h-full flex-col p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tone[award.rank] ?? tone[2]}`}
                  >
                    {award.rank === 1 ? <Trophy size={26} /> : <Medal size={26} />}
                  </span>
                  <span className="text-base font-medium text-muted">{t(award.date)}</span>
                </div>

                <p className={`mt-6 text-lg font-extrabold ${tone[award.rank]?.split(' ')[1] ?? 'text-accent'}`}>
                  {t(ui.awards.place[award.rank])}
                </p>
                <h3 className="mt-2 text-xl font-extrabold leading-snug md:text-2xl">{t(award.title)}</h3>
                <p className="mt-auto pt-6 text-base text-muted">{t(award.category)}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

