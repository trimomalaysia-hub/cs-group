"use client";

/* Final CTA — the closing note of the home page. Carries id="contact" because
   the header, footer and sub-pages all link to /#contact. Centred, quiet and
   generous: a gold bloom, one large serif line, one lead action. */

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ParticleField from "@/components/ui/ParticleField";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export default function FinalCta() {
  const { t } = useLanguage();
  const mailto = `mailto:${site.email}`;

  return (
    <Section id="contact" className="relative overflow-hidden">
      {/* Decorative: soft gold bloom behind the headline + drifting motes. */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[150px]"
        aria-hidden
      />
      <ParticleField count={26} className="opacity-60" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="rule-gold mx-auto max-w-[6rem]" aria-hidden />
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-10 text-4xl leading-[1.05] tracking-tight sm:mt-12 sm:text-6xl lg:text-7xl">
            {t.finalCta.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          {/* Leads to the full enquiry form at /contact; the mailto below is
              the quick path for anyone who just wants to send an email. */}
          <div className="mt-12 flex justify-center sm:mt-16">
            <Button href="/contact" variant="gold" size="lg">
              {t.finalCta.cta}
            </Button>
          </div>

          <p className="mt-8 text-sm text-faint">
            {t.finalCta.note}{" "}
            <a
              href={mailto}
              className="hv-link to-gold text-muted"
            >
              {site.email}
            </a>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
