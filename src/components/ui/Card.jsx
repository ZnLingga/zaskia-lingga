/** Minimal surface card: thin border, soft hover lift. */
export default function Card({ children, className = '', as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={`rounded-3xl border border-line bg-surface/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

