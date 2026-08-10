"use client";

/* FOUNDER — split portrait + short narrative.
   Left: the founder photograph, given a black-and-gold duotone treatment that
   eases back to full colour on hover. Right: three or four lines only, a pull
   quote, and a link through to the full philosophy page. */

import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export default function Founder() {
  const { t } = useLanguage();

  return (
    <Section id="founder" className="relative overflow-hidden">
      {/* Soft gold bloom behind the portrait — decorative only. */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[26rem] w-[26rem] rounded-full bg-accent/[0.05] blur-[140px]"
        aria-hidden
      />

      <div className="relative grid gap-14 lg:grid-cols-12 lg:gap-20">
        {/* ---------------------------------------------------- Portrait --- */}
        <div className="lg:col-span-5">
          <Reveal>
            <Link href="/founder" className="group block rounded-2xl">
              <figure className="hv-card relative overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/founder.png"
                    alt={`${site.founder} — ${t.founder.role}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-[center_15%]"
                  />
                  {/* Bottom fade into the page so the caption sits on black. */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent"
                    aria-hidden
                  />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 border-t border-line px-6 py-5 backdrop-blur-sm transition-colors duration-[var(--hover-dur)] group-hover:border-accent/30">
                  <p className="font-display text-xl text-fg sm:text-2xl">{site.founder}</p>
                  <p className="mt-1 text-sm text-muted">{t.founder.role}</p>
                </figcaption>
              </figure>
            </Link>
          </Reveal>
        </div>

        {/* --------------------------------------------------- Narrative --- */}
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>{t.founder.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-2xl text-4xl leading-[1.08] text-fg sm:text-5xl">
              {t.founder.heading}
            </h2>
          </Reveal>

          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
            <Reveal delay={0.1}>
              <p>{t.founder.p1}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>{t.founder.p2}</p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <blockquote className="mt-12 max-w-2xl border-l border-accent/60 pl-6">
              <p className="font-display text-2xl italic leading-snug text-fg sm:text-3xl">
                {t.founder.quote}
              </p>
              <footer className="mt-4 text-sm text-muted">— {site.founder}</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.25}>
            <Link
              href="/founder"
              className="group mt-10 inline-flex items-center gap-2.5 text-sm text-fg transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent"
            >
              {t.founder.readMore}
              <span
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                aria-hidden
              >
                &rarr;
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
