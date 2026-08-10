/* Abstract gold object for the hero — a wireframe sphere inside two
   contra-rotating rings. Pure SVG + CSS keyframes, so this stays a server
   component; the global prefers-reduced-motion rule freezes the animation. */

const C = 200; // viewBox centre
const R = 132; // sphere radius

/* Longitude / latitude wireframe, as fractions of R */
const LONGITUDES = [0.18, 0.5, 0.8];
const LATITUDES = [0.3, 0.62, 0.88];

export default function GoldOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative ${className}`} aria-hidden>
      {/* Soft bloom behind the object */}
      <div className="absolute inset-[12%] rounded-full bg-accent/[0.10] blur-[90px]" />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="relative h-full w-full"
        style={{ animation: "orb-float 11s ease-in-out infinite" }}
      >
        <defs>
          <linearGradient id="orb-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.85" />
            <stop offset="55%" stopColor="var(--color-accent)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="orb-ring" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="orb-core" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.22" />
            <stop offset="70%" stopColor="var(--color-accent)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Inner glow */}
        <circle cx={C} cy={C} r={R} fill="url(#orb-core)" />

        {/* Wireframe sphere */}
        <g stroke="url(#orb-stroke)" strokeWidth="1">
          <circle cx={C} cy={C} r={R} strokeOpacity="0.55" />
          {LONGITUDES.map((f) => (
            <ellipse key={`lon-${f}`} cx={C} cy={C} rx={R * f} ry={R} />
          ))}
          <line x1={C} y1={C - R} x2={C} y2={C + R} />
          {LATITUDES.map((f) => (
            <ellipse key={`lat-${f}`} cx={C} cy={C} rx={R} ry={R * f} />
          ))}
          <line x1={C - R} y1={C} x2={C + R} y2={C} />
        </g>

        {/* Two contra-rotating rings, slightly outside the sphere */}
        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "orb-spin 38s linear infinite",
          }}
        >
          <ellipse
            cx={C}
            cy={C}
            rx={R + 34}
            ry={R - 44}
            stroke="url(#orb-ring)"
            strokeWidth="1.25"
          />
        </g>
        <g
          style={{
            transformOrigin: "200px 200px",
            animation: "orb-spin-rev 54s linear infinite",
          }}
        >
          <ellipse
            cx={C}
            cy={C}
            rx={R + 52}
            ry={R - 18}
            stroke="var(--color-accent)"
            strokeOpacity="0.18"
            strokeWidth="1"
            strokeDasharray="2 10"
          />
        </g>

        {/* Bright rim arc — the metallic highlight that sells the gold */}
        <path
          d={`M ${C - R * 0.72} ${C - R * 0.68} A ${R} ${R} 0 0 1 ${C + R * 0.5} ${C - R * 0.86}`}
          stroke="var(--color-accent)"
          strokeOpacity="0.75"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
