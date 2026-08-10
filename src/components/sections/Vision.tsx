"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import ParticleField from "@/components/ui/ParticleField";
import { useLanguage } from "@/lib/i18n";

/* Vision / Future — a darker, atmospheric band: one bold statement over an
   abstract network field. All coordinates below are literal (never random) so
   the server and client markup match exactly. */

type NetNode = { x: number; y: number; r: number; o: number };
type Edge = { a: number; b: number; o: number };

/* Constellation on a 1200 x 620 field. The centre is left deliberately sparse
   and faint so the headline always sits on quiet ground. */
const NODES: NetNode[] = [
  { x: 60, y: 140, r: 2.5, o: 0.55 },
  { x: 168, y: 262, r: 2, o: 0.5 },
  { x: 96, y: 412, r: 3, o: 0.6 },
  { x: 236, y: 520, r: 2, o: 0.45 },
  { x: 300, y: 96, r: 2, o: 0.5 },
  { x: 252, y: 352, r: 2.5, o: 0.5 },
  { x: 432, y: 64, r: 2, o: 0.4 },
  { x: 520, y: 536, r: 2.5, o: 0.45 },
  { x: 604, y: 36, r: 2, o: 0.35 },
  { x: 628, y: 572, r: 2, o: 0.4 },
  { x: 700, y: 124, r: 2.5, o: 0.4 },
  { x: 764, y: 486, r: 2, o: 0.4 },
  { x: 900, y: 92, r: 2, o: 0.5 },
  { x: 964, y: 268, r: 3, o: 0.6 },
  { x: 1044, y: 436, r: 2, o: 0.5 },
  { x: 884, y: 528, r: 2.5, o: 0.45 },
  { x: 1148, y: 168, r: 2, o: 0.5 },
  { x: 1120, y: 356, r: 2.5, o: 0.55 },
  { x: 400, y: 300, r: 1.5, o: 0.18 },
  { x: 812, y: 318, r: 1.5, o: 0.18 },
];

const EDGES: Edge[] = [
  { a: 0, b: 1, o: 0.2 },
  { a: 1, b: 2, o: 0.18 },
  { a: 2, b: 3, o: 0.16 },
  { a: 1, b: 5, o: 0.18 },
  { a: 5, b: 3, o: 0.14 },
  { a: 0, b: 4, o: 0.16 },
  { a: 4, b: 6, o: 0.14 },
  { a: 4, b: 1, o: 0.12 },
  { a: 6, b: 8, o: 0.14 },
  { a: 8, b: 10, o: 0.16 },
  { a: 10, b: 12, o: 0.14 },
  { a: 12, b: 13, o: 0.2 },
  { a: 13, b: 16, o: 0.16 },
  { a: 13, b: 17, o: 0.18 },
  { a: 17, b: 14, o: 0.16 },
  { a: 14, b: 15, o: 0.14 },
  { a: 15, b: 11, o: 0.14 },
  { a: 11, b: 7, o: 0.16 },
  { a: 7, b: 9, o: 0.14 },
  { a: 9, b: 3, o: 0.1 },
  { a: 7, b: 3, o: 0.12 },
  { a: 10, b: 13, o: 0.14 },
  { a: 12, b: 16, o: 0.12 },
  { a: 5, b: 18, o: 0.08 },
  { a: 18, b: 6, o: 0.08 },
  { a: 19, b: 11, o: 0.08 },
  { a: 19, b: 13, o: 0.08 },
  { a: 18, b: 19, o: 0.06 },
];

/* The three anchor nodes carry a faint orbit ring — a little depth, no noise. */
const RINGS = [2, 13, 17];

function NetworkField() {
  return (
    <svg
      viewBox="0 0 1200 620"
      className="h-auto w-full text-accent"
      aria-hidden
      focusable="false"
    >
      {/* vector-effect does not inherit, so it sits on each shape: it keeps
          every edge a true 1px hairline whatever the field is scaled to. */}
      <g stroke="currentColor" strokeWidth={1}>
        {EDGES.map((e) => (
          <line
            key={`${e.a}-${e.b}`}
            x1={NODES[e.a].x}
            y1={NODES[e.a].y}
            x2={NODES[e.b].x}
            y2={NODES[e.b].y}
            opacity={e.o}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      <g fill="none" stroke="currentColor" strokeWidth={1}>
        {RINGS.map((i) => (
          <circle
            key={`ring-${i}`}
            cx={NODES[i].x}
            cy={NODES[i].y}
            r={13}
            opacity={0.16}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      <g fill="currentColor">
        {NODES.map((n, i) => (
          <circle key={`node-${i}`} cx={n.x} cy={n.y} r={n.r} opacity={n.o} />
        ))}
      </g>
    </svg>
  );
}

export default function Vision() {
  const { t } = useLanguage();

  return (
    <Section id="vision" wide className="relative isolate overflow-hidden">
      {/* Richer, deeper ground than the sections either side of it */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-surface/30" aria-hidden />

      {/* Single diffused gold focal glow behind the statement */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[160px]"
        aria-hidden
      />

      {/* Abstract network, drifting slowly with the scroll. Full-bleed and
          vertically centred, so its dense clusters stay out at the edges and
          only the deliberately faint centre sits behind the statement. */}
      <Parallax
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2"
        distance={26}
      >
        <NetworkField />
      </Parallax>

      <ParticleField count={56} className="-z-10" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>{t.vision.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-8 text-4xl leading-[1.1] text-fg sm:text-5xl lg:text-6xl">
              {t.vision.statement}
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rule-gold mx-auto mt-12 w-28" aria-hidden />
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mx-auto mt-12 max-w-2xl text-lg leading-relaxed text-muted">
              {t.vision.support}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
