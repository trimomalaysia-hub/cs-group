/* Subtle drifting gold particles. Positions come from a deterministic hash of
   the index — never Math.random — so server and client markup match exactly.
   Pure CSS animation, so this stays a server component and the global
   prefers-reduced-motion rule freezes it. */

function pseudo(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x); // 0..1, stable across server and client
}

export default function ParticleField({
  count = 44,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const dots = Array.from({ length: count }, (_, i) => {
    const size = 1 + pseudo(i, 3) * 2.2;
    return {
      left: pseudo(i, 1) * 100,
      top: pseudo(i, 2) * 100,
      size,
      // Bigger dots sit closer, so they drift faster and glow a touch brighter.
      duration: 14 + pseudo(i, 4) * 20,
      delay: -pseudo(i, 5) * 28,
      opacity: 0.16 + pseudo(i, 6) * 0.4,
    };
  });

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            opacity: d.opacity,
            animation: `particle-drift ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
