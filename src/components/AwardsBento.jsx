import { Medal, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import { getRank } from '../lib/utils.js';
import SectionHeading from './ui/SectionHeading.jsx';
import SpotlightCard from './ui/SpotlightCard.jsx';
import Reveal from './ui/Reveal.jsx';

const { awards } = portfolioData;

const ROMAN = { 1: 'I', 2: 'II', 3: 'III' };
const tone = {
  1: { text: 'text-yellow-300', ring: 'border-yellow-300/40 bg-yellow-300/10', label: 'Gold' },
  2: { text: 'text-slate-200', ring: 'border-slate-200/40 bg-slate-200/10', label: 'Silver' },
  3: { text: 'text-orange-400', ring: 'border-orange-400/40 bg-orange-400/10', label: 'Bronze' },
};

// First card is the biggest: put the gold medal (if any) in the featured slot.
const sorted = [...awards].sort((a, b) => (getRank(a.title) ?? 9) - (getRank(b.title) ?? 9));

const spans = [
  'md:col-span-6 lg:col-span-7 lg:row-span-2',
  'md:col-span-3 lg:col-span-5',
  'md:col-span-3 lg:col-span-5',
];

export default function AwardsBento() {
  return (
    <section id="awards" className="relative z-10 px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="04" kicker="Honors" title="Champion discipline" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          {sorted.map((award, i) => {
            const rank = getRank(award.title);
            const t = tone[rank] ?? tone[2];
            const featured = i === 0;
            return (
              <Reveal key={award.title} delay={i * 0.08} className={spans[i] ?? 'md:col-span-3 lg:col-span-5'}>
                <SpotlightCard className="h-full">
                  <div className={`flex h-full flex-col p-7 md:p-10 ${featured ? 'min-h-[360px]' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${t.ring} ${t.text}`}>
                        {rank === 1 ? <Trophy size={22} /> : <Medal size={22} />}
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                        {award.date}
                      </span>
                    </div>

                    <div className="mt-8 flex items-baseline gap-3">
                      <span
                        className={`font-display font-extrabold leading-none ${t.text} ${
                          featured ? 'text-[7rem] md:text-[10rem]' : 'text-6xl md:text-7xl'
                        }`}
                      >
                        {ROMAN[rank] ?? '—'}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                        {t.label} · Juara
                      </span>
                    </div>

                    <div className="mt-auto pt-8">
                      <h3 className={`font-display font-bold leading-tight ${featured ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                        {award.title}
                      </h3>
                      <p className="mt-3 font-mono text-xs text-muted">{award.category}</p>
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

