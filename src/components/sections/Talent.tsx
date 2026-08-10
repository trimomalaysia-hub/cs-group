"use client";

/* Talent — the group's people-first statement, three culture values and the
   careers invitation, paired with an abstract gold visual instead of a photo. */

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import GoldOrb from "@/components/ui/GoldOrb";
import ParticleField from "@/components/ui/ParticleField";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export default function Talent() {
  const { t } = useLanguage();

  return (
    <Section id="talent" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/[0.045] blur-[140px]"
        aria-hidden
      />

      <div className="relative grid items-stretch gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Statement, values, invitation */}
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>{t.talent.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-xl text-4xl leading-[1.08] text-fg sm:text-5xl">
              {t.talent.statement}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              {t.talent.lead}
            </p>
          </Reveal>

          <Stagger className="mt-14 max-w-xl border-b border-line">
            {/* Keyed by index, not by title: the titles are already translated,
                so keying on them would remount all three rows on an EN/中 switch —
                straight into a Stagger that has already fired (once: true), which
                would leave them stuck at the hidden variant. */}
            {t.talent.values.map((value, i) => (
              <StaggerItem
                key={i}
                className="flex gap-5 border-t border-line py-6 transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent/40"
              >
                <span
                  className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                  aria-hidden
                />
                <div>
                  <h3 className="text-xl text-fg">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15}>
            <div className="mt-12">
              <Button href={site.careersHref} variant="gold" size="lg">
                {t.talent.cta}
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Abstract visual — decorative only */}
        <div className="lg:col-span-5">
          <Reveal delay={0.12} className="h-full">
            <div
              className="relative flex h-[24rem] items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface/40 sm:h-[30rem] lg:h-full lg:min-h-[36rem]"
              aria-hidden
            >
              <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
              <ParticleField count={26} />

              {/* Concentric orbits — one bench, widening circles */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/[0.09] sm:h-[26rem] sm:w-[26rem]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/[0.14] sm:h-[19rem] sm:w-[19rem]" />

              <GoldOrb className="h-56 w-56 opacity-60 sm:h-72 sm:w-72" />

              <div className="rule-gold pointer-events-none absolute inset-x-10 top-12" />
              <div className="rule-gold pointer-events-none absolute inset-x-10 bottom-12" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
