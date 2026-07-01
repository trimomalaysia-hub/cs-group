"use client";

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
    <Section id="founder">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Portrait — uses /public/founder.png */}
        <div className="lg:col-span-5">
          <Reveal>
            <Link href="/founder" className="group block">
            <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors group-hover:border-accent/40">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/founder.png"
                  alt={`${site.founder}, ${t.founder.role}, ${site.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_15%]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-line bg-bg/40 px-6 py-5 backdrop-blur-sm">
                <div>
                  <p className="font-display text-xl text-fg">{site.founder}</p>
                  <p className="mt-1 text-sm text-muted">{t.founder.role}</p>
                </div>
                <span className="label text-faint">{site.name}</span>
              </div>
            </figure>
            </Link>
          </Reveal>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow index="01">{t.founder.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.08] sm:text-5xl">{t.founder.heading}</h2>
          </Reveal>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <Reveal delay={0.1}>
              <p>{t.founder.p1}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>{t.founder.p2}</p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <blockquote className="mt-12 border-l border-accent/60 pl-6">
              <p className="font-display text-2xl italic leading-snug text-fg sm:text-3xl">
                &ldquo;{t.founder.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-faint">— {site.founder}</footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.25}>
            <Link
              href="/founder"
              className="group mt-10 inline-flex items-center gap-2 text-sm text-fg transition-colors hover:text-accent"
            >
              {t.founder.readMore}
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
