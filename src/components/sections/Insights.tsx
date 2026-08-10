"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { insights } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import { onSpotlightMove } from "@/lib/spotlight";

export default function Insights() {
  const { lang, t } = useLanguage();
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    // Advance by one card, derived from the first item so it tracks the breakpoint.
    const card = el.querySelector("li");
    const step = card ? card.clientWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const arrowCls =
    "grid h-11 w-11 place-items-center rounded-full border border-line-strong text-fg transition-all duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent/70 hover:bg-accent/[0.04] hover:text-accent disabled:pointer-events-none disabled:opacity-30";

  return (
    <Section id="insights">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="06"
          eyebrow={t.insights.eyebrow}
          title={t.insights.title}
          lead={t.insights.lead}
        />

        <Reveal delay={0.15} className="hidden shrink-0 gap-3 sm:flex">
          <button type="button" onClick={() => page(-1)} disabled={atStart} aria-label={t.a11y.prev} className={arrowCls}>
            <span aria-hidden>←</span>
          </button>
          <button type="button" onClick={() => page(1)} disabled={atEnd} aria-label={t.a11y.next} className={arrowCls}>
            <span aria-hidden>→</span>
          </button>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ul
          ref={trackRef}
          className="no-scrollbar mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {insights.map((post) => (
            <li
              key={post.title.en}
              className="w-[82%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              {/* href is a placeholder — point to real articles or a /insights route later */}
              <Link
                href="/#insights"
                onMouseMove={onSpotlightMove}
                className="spotlight hv-card group flex h-full flex-col rounded-2xl border border-line bg-surface/40 p-8"
              >
                <span className="label text-accent/80">{post.category[lang]}</span>
                <h3 className="mt-6 font-display text-2xl leading-snug text-fg transition-colors duration-[var(--hover-dur)] group-hover:text-accent">
                  {post.title[lang]}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{post.excerpt[lang]}</p>
                <div className="mt-8 flex items-center justify-between border-t border-line pt-5 text-sm text-faint">
                  <span>{post.date[lang]} · {post.readingTime[lang]}</span>
                  <span className="text-accent opacity-0 transition-opacity duration-[var(--hover-dur)] group-hover:opacity-100" aria-hidden>
                    {t.insights.read} →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
