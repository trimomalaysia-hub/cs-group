"use client";

import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Atmospheric backdrops */}
      <div className="vignette pointer-events-none absolute inset-0" aria-hidden />
      <div className="grid-lines pointer-events-none absolute inset-x-0 bottom-0 h-1/2 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[140px]"
        aria-hidden
      />

      <Container className="relative z-10 pb-24 pt-32">
        <motion.p {...rise(0)} className="label inline-flex items-center gap-3 text-muted">
          <span className="h-px w-10 bg-accent/70" aria-hidden />
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          {...rise(0.1)}
          className="mt-8 max-w-5xl text-[2.75rem] leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {t.hero.headline.a}
          <span className="italic text-accent">{t.hero.headline.accent}</span>
          {t.hero.headline.post}
        </motion.h1>

        <motion.p {...rise(0.25)} className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {t.hero.description}
        </motion.p>

        <motion.div {...rise(0.4)} className="mt-12 flex flex-wrap items-center gap-4">
          <Button href="/#companies" size="lg">{t.hero.ctaPrimary}</Button>
          <Button href="/#founder" variant="outline" size="lg">{t.hero.ctaSecondary}</Button>
        </motion.div>

        {/* Sector index */}
        <motion.div
          {...rise(0.55)}
          className="mt-24 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8"
        >
          {t.hero.sectors.map((s, i) => (
            <span key={s} className="flex items-center gap-8">
              {i > 0 && <span className="hidden h-3 w-px bg-line-strong sm:block" aria-hidden />}
              <span className="label text-faint">{s}</span>
            </span>
          ))}
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line-strong p-1.5">
          <motion.span
            animate={reduce ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
