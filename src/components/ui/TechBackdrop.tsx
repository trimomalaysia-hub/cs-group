/* Fixed, site-wide ambient background: a cinematic gold "flowing lines" image
   (public/brand/bg-flow.jpg) with a fine film grain on top. Purely decorative,
   behind all content (z-10 below). Static — safe under prefers-reduced-motion. */
export default function TechBackdrop() {
  return (
    <div className="tech-backdrop" aria-hidden>
      <div className="flow" />
      <div className="grain" />
    </div>
  );
}
