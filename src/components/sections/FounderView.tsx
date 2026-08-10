"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";
import { founderContent } from "@/lib/founder";

export default function FounderView() {
  const { lang, t } = useLanguage();

  return (
    <article>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-line pb-20 pt-36 sm:pt-44">
        <div className="vignette pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative">
          <Reveal>
            <Link
              href="/#founder"
              className="label inline-flex items-center gap-2 text-faint transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent"
            >
              ← {t.founder.back}
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <Reveal>
                <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/founder.png"
                      alt={`${site.founder}, ${t.founder.role}, ${site.name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-[center_15%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" aria-hidden />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-line bg-bg/40 px-6 py-5 backdrop-blur-sm">
                    <div>
                      <p className="font-display text-xl text-fg">{site.founder}</p>
                      <p className="mt-1 text-sm text-muted">{t.founder.role}</p>
                    </div>
                    <span className="label text-faint">{site.name}</span>
                  </div>
                </figure>
              </Reveal>
            </div>

            {/* Name + lead */}
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal>
                <Eyebrow>{t.founder.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-6 text-4xl tracking-tight sm:text-6xl">{site.founder}</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 font-display text-2xl leading-snug text-fg sm:text-3xl">
                  {founderContent.lead[lang]}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Philosophy essay ---------------- */}
      <Section bordered={false}>
        <div className="mx-auto max-w-3xl space-y-7">
          {founderContent.blocks.map((b, i) => {
            if (b.type === "rule") {
              return (
                <Reveal key={i}>
                  <div className="mx-auto my-4 h-px w-16 bg-line" aria-hidden />
                </Reveal>
              );
            }
            if (b.type === "quote") {
              return (
                <Reveal key={i}>
                  <blockquote className="border-l border-accent/60 pl-6 font-display text-2xl italic leading-snug text-fg sm:text-[1.75rem]">
                    {b.text![lang]}
                  </blockquote>
                </Reveal>
              );
            }
            return (
              <Reveal key={i}>
                <p className="text-lg leading-relaxed text-muted">{b.text![lang]}</p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------------- Closing manifesto ---------------- */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto mb-9 h-px w-12 bg-accent/60" aria-hidden />
          </Reveal>
          <div className="space-y-2">
            {founderContent.closing[lang].map((line, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="font-display text-2xl leading-snug text-fg sm:text-[2rem]">{line}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <p className="mt-8 text-sm text-faint">— {site.founder}</p>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- CTA ---------------- */}
      <Section className="text-center">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/#companies" size="lg">{t.company.allCompaniesCta}</Button>
            <Button href="/#contact" variant="outline" size="lg">{t.header.enquire}</Button>
          </div>
        </Reveal>
      </Section>
    </article>
  );
}
