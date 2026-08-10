"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import CompanyVisual from "@/components/ui/CompanyVisual";
import { useContent } from "@/lib/content/context";
import { useLanguage } from "@/lib/i18n";
import { onSpotlightMove } from "@/lib/spotlight";

/* Companies — the group at a glance. Image-led cards: a visual plate on top,
   then index, name and one line, with a persistent Explore affordance.
   The plates are abstract gold graphics rather than photography; swap
   <CompanyVisual /> for a next/image when real artwork exists. */
export default function Companies() {
  const { lang, t } = useLanguage();
  const { companies } = useContent();

  return (
    <Section id="companies">
      {/* Headline block, with the section CTA sitting opposite it on desktop */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{t.companies.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              {t.companies.titleLine1pre}
              <span className="text-accent">{t.companies.titleLine1accent}</span>
              {t.companies.titleLine1post}
              <br />
              {t.companies.titleLine2}
            </h2>
          </Reveal>

          {/* Gold rule between headline and lead — the mark of the section */}
          <Reveal delay={0.1}>
            <div className="rule-gold mt-8 w-24" aria-hidden />
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 text-lg leading-relaxed text-muted sm:text-xl">
              {t.companies.lead}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="shrink-0">
          <Link
            href="#companies-grid"
            className="hv-mark group inline-flex items-center gap-5"
          >
            <span className="label text-muted transition-colors duration-[var(--hover-dur)] group-hover:text-accent">
              {t.companies.discover}
            </span>
            <span
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent/50 text-accent transition-all duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-accent group-hover:bg-accent/[0.06]"
              aria-hidden
            >
              <span className="transition-transform duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </Reveal>
      </div>

      <Stagger
        id="companies-grid"
        className="mt-16 grid scroll-mt-28 grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
      >
        {companies.map((c, i) => (
          <StaggerItem key={c.id} className="h-full">
            <Link
              href={`/companies/${c.id}`}
              onMouseMove={onSpotlightMove}
              className="spotlight hv-card group flex h-full flex-col overflow-hidden rounded-2xl border border-accent/25 bg-surface/40"
            >
              {/* Visual plate */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-accent/15 bg-bg/60">
                <CompanyVisual
                  id={c.id}
                  index={i}
                  className="opacity-70 transition-opacity duration-[var(--hover-dur)] group-hover:opacity-100"
                />
                <span className="label absolute left-5 top-4 text-accent/80">{c.index}</span>
                {/* Foot fade so the plate settles into the card body */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface/80 to-transparent"
                  aria-hidden
                />
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl leading-tight text-fg transition-colors duration-[var(--hover-dur)] group-hover:text-accent group-focus-visible:text-accent">
                  {c.brand}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-muted">{c.category[lang]}</p>

                {/* Persistent, not hover-only — the card should always show the
                    way in, as in the reference composition. */}
                <span
                  className="label mt-auto inline-flex items-center gap-2.5 pt-8 text-accent/80 transition-colors duration-[var(--hover-dur)] group-hover:text-accent"
                  aria-hidden
                >
                  {t.companies.view}
                  <span className="h-px w-6 bg-accent/50 transition-all duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-10 group-hover:bg-accent" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
