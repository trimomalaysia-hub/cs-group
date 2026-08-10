"use client";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import { companies } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { investContent as v } from "@/lib/invest";
import { onSpotlightMove } from "@/lib/spotlight";

export default function InvestView() {
  const { lang, t } = useLanguage();
  const mailto = `mailto:${site.investorEmail}?subject=${encodeURIComponent(v.hero.subject[lang])}`;

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
            <Eyebrow>{v.hero.eyebrow[lang]}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {v.hero.title[lang]}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {v.hero.lead[lang]}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href={mailto} size="lg">{v.hero.primaryCta[lang]}</Button>
              <Button href="/#companies" variant="outline" size="lg">{v.hero.secondaryCta[lang]}</Button>
            </div>
          </Reveal>

          {/* Facts strip — structural facts only (no unverified performance metrics) */}
          <Reveal delay={0.2}>
            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {v.facts.items.map((f) => (
                <div key={f.label.en} className="bg-bg p-6">
                  <dt className="font-display text-2xl tracking-tight text-fg sm:text-3xl">{f.value[lang]}</dt>
                  <dd className="label mt-2 text-faint">{f.label[lang]}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- The opportunity / thesis ---------------- */}
      <Section>
        <SectionHeading eyebrow={v.thesis.eyebrow[lang]} title={v.thesis.title[lang]} lead={v.thesis.lead[lang]} />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {v.thesis.points.map((p) => (
            <StaggerItem key={p.title.en}>
              <div
                onMouseMove={onSpotlightMove}
                className="spotlight hv-card h-full overflow-hidden rounded-2xl border border-line bg-surface/40 p-8"
              >
                <h3 className="font-display text-xl text-fg sm:text-2xl">{p.title[lang]}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{p.text[lang]}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- Portfolio (the four companies) ---------------- */}
      <Section>
        <SectionHeading eyebrow={v.portfolio.eyebrow[lang]} title={v.portfolio.title[lang]} lead={v.portfolio.lead[lang]} />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {companies.map((co) => (
            <StaggerItem key={co.id}>
              <a
                href={`/companies/${co.id}`}
                onMouseMove={onSpotlightMove}
                className="spotlight hv-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="label text-faint">{co.index}</span>
                  <span className="label text-accent/80">{co.status[lang]}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-fg transition-colors duration-[var(--hover-dur)] group-hover:text-accent sm:text-3xl">
                  {co.brand}
                </h3>
                <p className="mt-2 text-sm text-muted">{co.sector[lang]}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{co.summary[lang]}</p>
                <span
                  className="mt-6 inline-flex items-center gap-1.5 text-sm text-faint transition-colors duration-[var(--hover-dur)] group-hover:text-accent"
                  aria-hidden
                >
                  {v.portfolio.viewLabel[lang]}
                  <span className="transition-transform duration-[var(--hover-dur)] group-hover:translate-x-1">→</span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- Why partner with us / edge ---------------- */}
      <Section>
        <SectionHeading eyebrow={v.edge.eyebrow[lang]} title={v.edge.title[lang]} />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {v.edge.items.map((e) => (
            <StaggerItem key={e.title.en}>
              <div className="h-full rounded-2xl border border-line bg-surface/40 p-8">
                <h3 className="font-display text-lg text-fg sm:text-xl">{e.title[lang]}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{e.text[lang]}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- How we work with investors ---------------- */}
      <Section>
        <SectionHeading eyebrow={v.process.eyebrow[lang]} title={v.process.title[lang]} lead={v.process.lead[lang]} />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {v.process.steps.map((s, i) => (
            <StaggerItem key={s.name.en}>
              <div className="h-full rounded-2xl border border-line bg-surface/40 p-8">
                <span className="font-display text-2xl text-accent/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-lg text-fg sm:text-xl">{s.name[lang]}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{s.text[lang]}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- CTA ---------------- */}
      <Section className="text-center">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl">{v.cta.title[lang]}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{v.cta.lead[lang]}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={mailto} size="lg">{v.cta.button[lang]}</Button>
            <Button href="/#contact" variant="outline" size="lg">{t.header.enquire}</Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            {v.cta.emailLabel[lang]}{" "}
            <a href={mailto} className="hv-link to-gold text-muted">
              {site.investorEmail}
            </a>
          </p>
        </Reveal>
      </Section>
    </article>
  );
}
