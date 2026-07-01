/* Fixed, site-wide tech atmosphere: a faint blueprint grid + two slow-drifting
   steel-blue aurora glows. Purely decorative (behind all content, z-10 below).
   Motion is disabled automatically under prefers-reduced-motion (see globals.css). */
export default function TechBackdrop() {
  return (
    <div className="tech-backdrop" aria-hidden>
      <div className="grid" />
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
    </div>
  );
}
