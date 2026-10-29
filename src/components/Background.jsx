/** Slowly drifting blue light + a faint panning grid. CSS-only, GPU-friendly. */
export default function Background() {
  return (
    <div className="bg-scene" aria-hidden>
      <div className="bg-blob a" />
      <div className="bg-blob b" />
      <div className="bg-blob c" />
      <div className="bg-grid" />
    </div>
  );
}

