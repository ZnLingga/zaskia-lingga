/**
 * Renders "empty" CV values (null. / -) as an intentional developer-terminal element
 * instead of a blank space. The original value is shown verbatim.
 */
export default function NullBadge({
  label = 'status',
  value = 'null.',
  hint = 'documentation_pending',
  variant = 'pill',
  className = '',
}) {
  if (variant === 'terminal') {
    return (
      <div
        className={`rounded-2xl border border-line bg-black/50 p-4 font-mono text-xs leading-relaxed text-muted ${className}`}
      >
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ember/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-accent/80" />
          <span className="ml-2 text-[10px] uppercase tracking-widest text-white/30">{label}.txt</span>
        </div>
        <p>
          <span className="text-accent">$</span> cat {label}.txt
        </p>
        <p className="text-white/80">{value}</p>
        <p className="text-white/30">// {hint}</p>
        <p>
          <span className="text-accent">$</span> <span className="blink">▍</span>
        </p>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-dashed border-white/15 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-muted ${className}`}
    >
      <span className="text-white/30">[</span>
      <span>
        {label}: <span className="text-accent">{value}</span>
      </span>
      <span className="text-white/30">// {hint} ]</span>
    </span>
  );
}

