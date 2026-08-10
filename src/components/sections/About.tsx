"use client";

/* About — a three-line statement of who the group is, followed by a horizontal
   milestone rail: a continuous gold hairline on desktop, scroll-snap on mobile. */

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { timeline } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { lang, t } = useLanguage();
  const last = timeline.length - 1;

  return (
    <Section id="about">
      <Reveal>
        <Eyebrow>{t.about.eyebrow}</Eyebrow>
      </Reveal>

      {/* The statement — three short lines, one gold for emphasis. */}
      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-4xl text-3xl leading-[1.25] text-fg sm:text-4xl lg:text-5xl">
          <span className="block text-accent">{t.about.line1}</span>
          <span className="block">{t.about.line2}</span>
          <span className="block">{t.about.line3}</span>
        </h2>
      </Reveal>

      {/* Milestones */}
      <div className="mt-20 lg:mt-28">
        <Reveal>
          <span className="label text-faint">{t.about.milestones}</span>
        </Reveal>

        <div className="relative mt-10">
          {/* Desktop: one continuous gold hairline running through every marker. */}
          <div
            className="rule-gold pointer-events-none absolute inset-x-0 top-1 hidden lg:block"
            aria-hidden
          />

          <Stagger className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:items-start lg:gap-6 lg:overflow-visible lg:pb-0 xl:gap-10">
            {timeline.map((m, i) => (
              <StaggerItem
                key={`${m.year}-${m.title.en}`}
                className="relative w-[72%] shrink-0 snap-start sm:w-[46%] lg:w-auto lg:shrink"
              >
                {/* Mobile: per-card segment, continuous because it spans the gutter. */}
                <div
                  className={`pointer-events-none absolute inset-x-0 top-1 h-px lg:hidden ${
                    i === last
                      ? "bg-gradient-to-r from-accent/30 to-transparent"
                      : "bg-accent/30"
                  }`}
                  aria-hidden
                />

                <div className="pr-6 lg:pr-0">
                  <span
                    className="relative block h-2 w-2 rounded-full bg-accent ring-4 ring-bg"
                    aria-hidden
                  />
                  <span className="label mt-6 block text-accent">{m.year}</span>
                  <h3 className="mt-3 text-lg leading-snug text-fg">{m.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {m.text[lang]}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
