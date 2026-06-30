import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function Founder() {
  return (
    <Section id="founder">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Portrait — replace the monogram block with a real photo:
            drop founder.jpg in /public and use next/image here. */}
        <div className="lg:col-span-5">
          <Reveal>
            <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="vignette absolute inset-0" aria-hidden />
              <div className="flex aspect-[4/5] items-center justify-center">
                <span className="font-display text-7xl tracking-tight text-accent/80">KCS</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between border-t border-line bg-bg/40 px-6 py-5 backdrop-blur-sm">
                <div>
                  <p className="font-display text-xl text-fg">{site.founder}</p>
                  <p className="mt-1 text-sm text-muted">Founder &amp; Chairman</p>
                </div>
                <span className="label text-faint">{site.name}</span>
              </div>
            </figure>
          </Reveal>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow index="01">Founder</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.08] sm:text-5xl">
              A builder&rsquo;s mindset, held to a generational horizon.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
            <Reveal delay={0.1}>
              <p>
                {site.founder} founded {site.name} on a simple conviction: the companies
                worth building are the ones designed to outlast their founder. Rather than
                chase a single market, he set out to assemble a diversified ecosystem —
                where technology, hospitality and capital each strengthen the others.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                That philosophy now spans a green social platform, an enterprise AI company,
                a destination golf resort and a property development arm — distinct businesses
                united by one long-term vision and a shared standard of craft.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <blockquote className="mt-12 border-l border-accent/60 pl-6">
              <p className="font-display text-2xl italic leading-snug text-fg sm:text-3xl">
                &ldquo;Build companies that compound — in value, in trust, and in the good
                they do for the communities around them.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-faint">— {site.founder}</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
