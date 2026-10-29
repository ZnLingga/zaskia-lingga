import Reveal from './Reveal.jsx';

export default function SectionHeading({ index, title }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 text-base font-bold tracking-[0.2em] text-accent">{index}</p>
      <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h2>
      <div className="mt-6 h-1.5 w-16 rounded-full bg-accent" />
    </Reveal>
  );
}
