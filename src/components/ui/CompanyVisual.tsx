/* Abstract gold visual for a company card — one distinct graphic per business,
   so the four cards read as a set without four photographs.

   All coordinates are literal: no Math.random, so server and client markup
   match. Pure SVG, decorative, and it inherits the card's hover via the
   parent's group-hover classes. Swap any of these for real photography by
   rendering a next/image in place of <CompanyVisual /> — the card layout does
   not care which it gets. */

type Variant = "wave" | "terrain" | "ribbon" | "structure";

/* Keyed by company id so reordering the list never reshuffles the artwork. */
const BY_ID: Record<string, Variant> = {
  nexflo: "wave",
  gemas: "terrain",
  nexxatech: "ribbon",
  national6a: "structure",
};

const ORDER: Variant[] = ["wave", "terrain", "ribbon", "structure"];

export function variantFor(id: string, index: number): Variant {
  return BY_ID[id] ?? ORDER[index % ORDER.length];
}

export default function CompanyVisual({
  id,
  index = 0,
  className = "",
}: {
  id: string;
  index?: number;
  className?: string;
}) {
  const variant = variantFor(id, index);

  return (
    <svg
      viewBox="0 0 320 180"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id={`cv-l-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.85" />
          <stop offset="70%" stopColor="var(--color-accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.06" />
        </linearGradient>
        <radialGradient id={`cv-g-${id}`} cx="50%" cy="95%" r="70%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.20" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Common ground glow so every variant sits on the same light */}
      <rect width="320" height="180" fill={`url(#cv-g-${id})`} />

      {variant === "wave" && (
        <g stroke={`url(#cv-l-${id})`} strokeWidth="1">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <path
              key={i}
              d={`M-10 ${118 - i * 9} C 60 ${96 - i * 11}, 120 ${140 - i * 7}, 190 ${112 - i * 10} S 300 ${78 - i * 8}, 330 ${100 - i * 9}`}
              opacity={0.9 - i * 0.1}
            />
          ))}
        </g>
      )}

      {variant === "terrain" && (
        <g>
          <circle cx="232" cy="58" r="16" fill="var(--color-accent)" opacity="0.16" />
          <g stroke={`url(#cv-l-${id})`} strokeWidth="1">
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M-10 ${150 - i * 16} C 70 ${112 - i * 18}, 140 ${158 - i * 12}, 210 ${128 - i * 16} S 300 ${104 - i * 14}, 330 ${132 - i * 15}`}
                opacity={0.85 - i * 0.14}
              />
            ))}
          </g>
        </g>
      )}

      {variant === "ribbon" && (
        <g stroke={`url(#cv-l-${id})`} strokeWidth="1">
          {Array.from({ length: 14 }, (_, i) => (
            <path
              key={i}
              d={`M-10 ${150 - i * 4} C 80 ${132 - i * 7}, 150 ${52 + i * 5}, 240 ${44 + i * 3} S 310 ${64 + i * 4}, 330 ${58 + i * 4}`}
              opacity={0.75 - i * 0.04}
            />
          ))}
        </g>
      )}

      {variant === "structure" && (
        <g stroke={`url(#cv-l-${id})`} strokeWidth="1">
          {/* Facade */}
          <path d="M96 168 V64 L182 36 V152 Z" opacity="0.75" />
          <path d="M182 36 L246 58 V162 L182 152" opacity="0.5" />
          {/* Floor lines */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path key={i} d={`M96 ${86 + i * 15} L182 ${58 + i * 15}`} opacity={0.42 - i * 0.05} />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={`r${i}`} d={`M182 ${58 + i * 18} L246 ${80 + i * 18}`} opacity={0.32 - i * 0.05} />
          ))}
          {/* Mullions */}
          {[0, 1, 2].map((i) => (
            <path key={`m${i}`} d={`M${118 + i * 22} ${161 - i * 7} V ${57 - i * 7}`} opacity="0.22" />
          ))}
        </g>
      )}
    </svg>
  );
}
