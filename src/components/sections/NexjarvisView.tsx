"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { companies } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { nexjarvis as n } from "@/lib/nexjarvis";
import { onSpotlightMove } from "@/lib/spotlight";

/* Dedicated, category-defining page for NEXJARVIS (the nexflo company).
   Full flow: Hero → Jarvis → People & Execution → Framework → Value → Human → Vision. */
export default function NexjarvisView() {
  const { lang, t } = useLanguage();
  const company = companies.find((c) => c.id === "nexflo");
  if (!company) return null;

  return (
    <article>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-line pb-20 pt-36 sm:pt-44">
        <div className="vignette pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-[-8rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[140px]"
          aria-hidden
        />
        <Container className="relative">
          <Reveal>
            <Link
              href="/#companies"
              className="label inline-flex items-center gap-2 text-faint transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent"
            >
              ← {t.company.allCompanies}
            </Link>
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <Eyebrow index={company.index}>{n.hero.eyebrow[lang]}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-5xl tracking-tight sm:text-7xl">{company.brand}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 font-display text-2xl italic leading-snug text-accent sm:text-3xl">
                {n.hero.tagline[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-2xl font-display text-xl leading-snug text-fg sm:text-2xl">
                {n.hero.lead[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{n.hero.body[lang]}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Button href="/#contact" size="lg">{n.hero.primaryCta[lang]}</Button>
                <Button href="/#companies" variant="outline" size="lg">{t.company.allCompanies}</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- 01 · Jarvis (AI Layer) ---------------- */}
      <Section>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{n.jarvis.eyebrow[lang]}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-5xl tracking-tight sm:text-6xl">{n.jarvis.title[lang]}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-display text-2xl leading-snug text-muted sm:text-3xl">
              {n.jarvis.subtitle[lang]}
            </p>
          </Reveal>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            {n.jarvis.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p[lang]}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="label mt-16 text-faint">{n.jarvis.capabilitiesLabel[lang]}</p>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-3">
          {n.jarvis.capabilities.map((cap) => (
            <StaggerItem key={cap.name.en}>
              <div
                onMouseMove={onSpotlightMove}
                className="spotlight hv-card h-full overflow-hidden rounded-2xl border border-line bg-surface/40 p-8"
              >
                <h3 className="font-display text-xl text-fg sm:text-2xl">{cap.name[lang]}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{cap.text[lang]}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-3xl font-display text-2xl leading-snug text-fg sm:text-3xl">
            {n.jarvis.closer[lang]}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 max-w-3xl border-l border-accent/60 pl-6 font-display text-xl italic leading-snug text-fg sm:text-2xl">
            {n.jarvis.quote[lang]}
          </p>
        </Reveal>
      </Section>

      {/* ---------------- 02 · People & Execution System ---------------- */}
      <Section>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{n.people.eyebrow[lang]}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{n.people.title[lang]}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-display text-2xl leading-snug text-accent sm:text-[1.7rem]">
              {n.people.subtitle[lang]}
            </p>
          </Reveal>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            {n.people.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p[lang]}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------------- 03 · Core Framework ---------------- */}
      <Section>
        <SectionHeading
          eyebrow={n.framework.eyebrow[lang]}
          title={n.framework.title[lang]}
          lead={n.framework.lead[lang]}
        />
        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {n.framework.pillars.map((p) => (
            <StaggerItem key={p.label.en}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface/40 p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-fg sm:text-3xl">{p.label[lang]}</h3>
                  <span className="label text-accent/80">{p.role[lang]}</span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-muted">{p.text[lang]}</p>
                <div className="mt-6 border-t border-line pt-6">
                  <span className="label text-faint">{n.framework.withJarvisLabel[lang]}</span>
                  <p className="mt-3 text-base leading-relaxed text-fg">{p.jarvis[lang]}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* The loop that compounds */}
        <Reveal delay={0.1}>
          <div className="mt-6 rounded-2xl border border-line bg-surface/30 p-8 text-center sm:p-12">
            <p className="label text-faint">{n.framework.loopLabel[lang]}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {n.framework.loop.map((node, i) => (
                <span key={node.en} className="inline-flex items-center gap-3 sm:gap-4">
                  <span className="rounded-full border border-line-strong px-4 py-2 text-sm text-fg sm:px-5 sm:text-base">
                    {node[lang]}
                  </span>
                  {i < n.framework.loop.length - 1 && (
                    <span className="text-accent" aria-hidden>→</span>
                  )}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-faint">{n.framework.loopCaption[lang]}</p>

            <div className="mx-auto mt-10 h-px w-24 bg-line" aria-hidden />

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-display text-lg sm:text-2xl">
              {n.framework.transform.map((node, i) => {
                const isLast = i === n.framework.transform.length - 1;
                return (
                  <span key={node.en} className="inline-flex items-center gap-x-4">
                    <span className={isLast ? "text-accent" : "text-muted"}>{node[lang]}</span>
                    {!isLast && <span className="text-accent/60" aria-hidden>→</span>}
                  </span>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- 04 · System Value ---------------- */}
      <Section>
        <SectionHeading eyebrow={n.value.eyebrow[lang]} title={n.value.title[lang]} />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {n.value.items.map((item) => (
            <StaggerItem key={item.name.en}>
              <div
                onMouseMove={onSpotlightMove}
                className="spotlight hv-card h-full overflow-hidden rounded-2xl border border-line bg-surface/40 p-8"
              >
                <h3 className="font-display text-xl text-fg sm:text-2xl">{item.name[lang]}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.text[lang]}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- 05 · Cultural Impact (Human Layer) ---------------- */}
      <Section>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{n.human.eyebrow[lang]}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{n.human.title[lang]}</h2>
          </Reveal>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            {n.human.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p[lang]}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {n.human.pillars.map((p) => (
            <StaggerItem key={p.name.en}>
              <div className="h-full rounded-2xl border border-line bg-surface/40 p-8">
                <h3 className="font-display text-xl text-accent sm:text-2xl">{p.name[lang]}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{p.text[lang]}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-12 max-w-3xl border-l border-accent/60 pl-6 font-display text-xl italic leading-snug text-fg sm:text-2xl">
            {n.human.quote[lang]}
          </p>
        </Reveal>
      </Section>

      {/* ---------------- 06 · Vision (Closing) ---------------- */}
      <Section className="text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow>{n.vision.eyebrow[lang]}</Eyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted">{n.vision.body[lang]}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-10 max-w-4xl font-display text-4xl leading-[1.1] tracking-tight sm:text-6xl">
            {n.vision.statement[lang]}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 text-lg text-accent">{n.vision.closer[lang]}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/#contact" size="lg">{n.vision.primaryCta[lang]}</Button>
            <Button href="/#companies" variant="outline" size="lg">{t.company.allCompaniesCta}</Button>
          </div>
        </Reveal>
      </Section>
    </article>
  );
}
