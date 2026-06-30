"use client";

import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { principles } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Vision() {
  const { lang, t } = useLanguage();

  return (
    <Section id="vision" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow index="03">{t.vision.eyebrow}</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 font-display text-3xl leading-[1.2] tracking-tight text-fg sm:text-4xl lg:text-[2.9rem]">
            {t.vision.manifesto}
          </p>
        </Reveal>
      </div>

      <Stagger className="relative mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {principles.map((p) => (
          <StaggerItem key={p.index} className="bg-bg">
            <div className="h-full bg-surface/40 p-8 transition-colors duration-500 hover:bg-elevated/60 sm:p-10">
              <span className="font-display text-2xl text-accent/80">{p.index}</span>
              <h3 className="mt-5 text-xl text-fg sm:text-2xl">{p.title[lang]}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{p.text[lang]}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
