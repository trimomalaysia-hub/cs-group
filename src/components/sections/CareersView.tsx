"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import { companies } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { careersContent as c } from "@/lib/careers";
import { onSpotlightMove } from "@/lib/spotlight";

export default function CareersView() {
  const { lang, t } = useLanguage();
  const mailto = `mailto:${site.careersEmail}?subject=${encodeURIComponent(c.cta.subject[lang])}`;

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
            <Eyebrow>{c.hero.eyebrow[lang]}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {c.hero.title[lang]}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {c.hero.lead[lang]}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href={mailto} size="lg">{c.cta.button[lang]}</Button>
              <Button href="/#companies" variant="outline" size="lg">{c.hero.secondaryCta[lang]}</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Culture gallery ---------------- */}
      <Section>
        <SectionHeading
          eyebrow={c.culture.eyebrow[lang]}
          title={c.culture.title[lang]}
          lead={c.culture.lead[lang]}
        />
        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {c.culture.shots.map((shot, i) => (
            <StaggerItem key={i} className={shot.span === "wide" ? "col-span-2" : ""}>
              <figure className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/40">
                <div className={`relative ${shot.span === "wide" ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                  {shot.src ? (
                    <Image
                      src={shot.src}
                      alt={shot.caption[lang]}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />
                      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
                        <PhotoMark />
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" aria-hidden />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3">
                  <span className="label text-faint transition-colors group-hover:text-accent">
                    {shot.caption[lang]}
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-faint">{c.culture.note[lang]}</p>
        </Reveal>
      </Section>

      {/* ---------------- Why join / values ---------------- */}
      <Section>
        <SectionHeading
          eyebrow={c.values.eyebrow[lang]}
          title={c.values.title[lang]}
          lead={c.values.lead[lang]}
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {c.values.items.map((v) => (
            <StaggerItem key={v.title.en}>
              <div
                onMouseMove={onSpotlightMove}
                className="spotlight h-full overflow-hidden rounded-2xl border border-line bg-surface/40 p-8 transition-colors duration-500 hover:border-accent/40"
              >
                <h3 className="font-display text-xl text-fg sm:text-2xl">{v.title[lang]}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{v.text[lang]}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- Across the group (companies) ---------------- */}
      <Section>
        <SectionHeading
          eyebrow={c.across.eyebrow[lang]}
          title={c.across.title[lang]}
          lead={c.across.lead[lang]}
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {companies.map((co) => (
            <StaggerItem key={co.id}>
              <a
                href={`/companies/${co.id}`}
                onMouseMove={onSpotlightMove}
                className="spotlight group flex h-full items-start justify-between gap-6 overflow-hidden rounded-2xl border border-line bg-surface/40 p-7 transition-colors duration-500 hover:border-accent/40"
              >
                <div>
                  <span className="label text-faint">{co.index}</span>
                  <h3 className="mt-3 font-display text-xl text-fg sm:text-2xl">{co.brand}</h3>
                  <p className="mt-2 text-sm text-muted">{co.sector[lang]}</p>
                </div>
                <span
                  className="mt-1 text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden
                >
                  →
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- How we hire / talent network ---------------- */}
      <Section>
        <SectionHeading
          eyebrow={c.hiring.eyebrow[lang]}
          title={c.hiring.title[lang]}
          lead={c.hiring.lead[lang]}
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {c.hiring.steps.map((s, i) => (
            <StaggerItem key={s.name.en}>
              <div className="h-full rounded-2xl border border-line bg-surface/40 p-8">
                <span className="font-display text-2xl text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
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
          <h2 className="text-4xl sm:text-5xl">{c.cta.title[lang]}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{c.cta.lead[lang]}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={mailto} size="lg">{c.cta.button[lang]}</Button>
            <Button href="/#contact" variant="outline" size="lg">{t.header.enquire}</Button>
          </div>
          <p className="mt-6 text-sm text-faint">
            {c.cta.emailLabel[lang]}{" "}
            <a href={mailto} className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
              {site.careersEmail}
            </a>
          </p>
        </Reveal>
      </Section>
    </article>
  );
}

/* Minimal "image" glyph shown inside empty culture frames until a photo is added. */
function PhotoMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-faint"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 15.5 16 10.5 5 21" />
    </svg>
  );
}
