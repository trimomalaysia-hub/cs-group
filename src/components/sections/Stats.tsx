"use client";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import Parallax from "@/components/ui/Parallax";
import { groupStats } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Stats() {
  const { lang, t } = useLanguage();

  // `isolate` keeps the -z-10 backdrop inside this section rather than letting
  // it fall through to the page-level TechBackdrop layer.
  return (
    <Section id="stats" className="relative isolate overflow-hidden">
      {/* Faint drifting grid — depth behind the figures, never in front of them */}
      <Parallax
        distance={28}
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      >
        <div className="grid-lines h-[130%] w-full" aria-hidden />
      </Parallax>

      <SectionHeading
        eyebrow={t.stats.eyebrow}
        title={t.stats.title}
        lead={t.stats.lead}
      />

      <Stagger className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4 lg:border-t-0">
        {groupStats.map((s, i) => (
          <StaggerItem
            key={s.label.en}
            className={`border-b border-line py-10 lg:border-b-0 lg:border-t lg:py-0 lg:pr-8 ${
              i !== 0 ? "lg:border-l lg:border-line lg:pl-8" : ""
            }`}
          >
            <div className="lg:pt-10">
              <p className="font-display text-6xl leading-none tracking-tight text-fg lg:text-7xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-6 text-base text-fg">{s.label[lang]}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail[lang]}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
