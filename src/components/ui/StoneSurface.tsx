/* Dark mineral surface for the opening screens: a lit slab, a coarse mineral
   tooth, and two very slow gold reflections raking across it. Gradients only —
   no image payload — and fully opaque, so it also masks the site-wide gold flow
   backdrop that would otherwise read as "techy" behind these screens.
   Purely decorative; a server component (CSS animation only). */
export default function StoneSurface({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Slab + directional key light */}
      <div className="stone absolute inset-0" />

      {/* Gold reflections. Inset outwards because the drift scales and
          translates — this keeps its soft edges off the screen. */}
      <div className="gold-streaks absolute -inset-x-1/4 -inset-y-1/3" />

      {/* Slow light raking across the slab — the surface reads as lit and
          alive rather than as a flat fill. */}
      <div className="light-pass absolute -inset-x-1/4 inset-y-0" />

      {/* Mineral tooth, last so it sits over both */}
      <div className="stone-tooth absolute inset-0" />
    </div>
  );
}
