"use client";

/* Hero — the first screen of the page proper, revealed when the LogoIntro
   overlay dissolves. Same stone surface and gold reflections as the intro, so
   the two read as one material. No particles and no wireframe orb: the weight
   comes from the lit slab, its texture and its foot shadow, not from floating
   geometry. Carries the page's only <h1> — the intro is transient, so its
   wordmark is deliberately not a heading. */

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import StoneSurface from "@/components/ui/StoneSurface";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  /* Slower and shorter-travelling than before: 1.8s with a 12px rise, so the
     type settles rather than drifts. */
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.8, ease: EASE, delay },
  });

  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-center justify-center overflow-hidden"
    >
      <StoneSurface />

      {/* A single low, wide gold pool behind the statement — grounded at the
          type's baseline rather than hovering as a disc behind it. */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[22rem] w-[38rem] max-w-[140vw] -translate-x-1/2 -translate-y-[46%] rounded-full bg-accent/[0.05] blur-[130px] sm:h-[28rem] sm:w-[56rem]"
        aria-hidden
      />

      <Container className="py-24 text-center sm:py-32">
        <motion.p {...rise(0)} className="label text-faint">
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          {...rise(0.25)}
          className="mx-auto mt-8 max-w-4xl text-5xl leading-[1.05] tracking-tight text-fg sm:text-7xl lg:text-8xl"
        >
          {t.hero.line1}
          <br />
          {t.hero.line2pre}
          <span className="italic text-accent">{t.hero.line2accent}</span>
          {t.hero.line2post}
        </motion.h1>

        <motion.p
          {...rise(0.5)}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          {...rise(0.75)}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/#companies" variant="gold" size="lg">
            {t.hero.ctaPrimary}
          </Button>
          <Button href={site.careersHref} variant="outline" size="lg">
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>
      </Container>

      {/* Scroll cue — a travelling gold hairline; desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: EASE, delay: 1.2 }}
        className="pointer-events-none absolute inset-x-0 bottom-10 hidden justify-center sm:flex"
      >
        <span className="flex items-center gap-4">
          <span className="label text-faint">{t.a11y.scrollCue}</span>
          <span
            className="relative h-px w-24 overflow-hidden bg-line-strong"
            aria-hidden
          >
            <span className="scroll-cue absolute inset-y-0 left-0 w-1/3 bg-accent" />
          </span>
        </span>
      </motion.div>
    </section>
  );
}
