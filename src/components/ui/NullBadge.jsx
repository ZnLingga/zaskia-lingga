/**
 * Renders "empty" CV values (null / '-') as a small intentional pill
 * instead of a blank space. The original value is shown verbatim.
 */
export default function NullBadge({ label, value = 'null', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3 py-1 text-sm text-muted ${className}`}
    >
      {label && <span>{label}</span>}
      <span className="font-semibold text-accent">{value}</span>
    </span>
  );
}
