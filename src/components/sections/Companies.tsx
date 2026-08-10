"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { companies } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { onSpotlightMove } from "@/lib/spotlight";

/* Companies — the group at a glance: a clean four-up card grid.
   One name, one line each; depth lives on the detail page, not here. */
export default function Companies() {
  const { lang, t } = useLanguage();

  return (
    <Section id="companies">
      <SectionHeading
        eyebrow={t.companies.eyebrow}
        title={
          <>
            {t.companies.titleLine1}
            <br />
            {t.companies.titleLine2}
          </>
        }
        lead={t.companies.lead}
      />

      <Stagger className="mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {companies.map((c) => (
          <StaggerItem key={c.id} className="h-full">
            <Link
              href={`/companies/${c.id}`}
              onMouseMove={onSpotlightMove}
              className="spotlight hv-card group flex h-full min-h-[16rem] flex-col rounded-2xl border border-line bg-surface/40 p-7"
            >
              <span className="label text-faint">{c.index}</span>

              <h3 className="mt-6 font-display text-2xl leading-tight text-fg transition-colors duration-[var(--hover-dur)] group-hover:text-accent group-focus-visible:text-accent">
                {c.brand}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">{c.category[lang]}</p>

              <span
                className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm text-accent opacity-0 transition-opacity duration-[var(--hover-dur)] group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden
              >
                {t.companies.view}
                <span className="transition-transform duration-[var(--hover-dur)] group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
