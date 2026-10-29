import Reveal from './Reveal.jsx';

export default function SectionHeading({ index, kicker, title }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted">
        <span className="text-accent">{index}</span>
        <span className="h-px w-10 bg-line" />
        <span>{kicker}</span>
      </div>
      <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        {title}
      </h2>
    </Reveal>
  );
}

