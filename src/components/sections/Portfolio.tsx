import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { portfolioStats, sectors } from "@/lib/data";

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <SectionHeading
        index="04"
        eyebrow="Portfolio"
        title="A diversified base, by design."
        lead="The group is deliberately spread across sectors that move on different cycles — reducing risk while compounding capability."
      />

      {/* Metric strip */}
      <Reveal delay={0.1}>
        <div className="mt-16 grid grid-cols-1 overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-4">
          {portfolioStats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-surface/40 p-8 ${
                i !== 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
              } ${i === 2 ? "lg:border-l sm:border-t lg:border-t-0" : ""} ${
                i === 3 ? "border-t border-line sm:border-l lg:border-t-0" : ""
              }`}
            >
              <p className="label text-faint">{s.label}</p>
              <p className="mt-4 font-display text-2xl leading-tight text-fg lg:text-3xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm text-muted">{s.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Sector allocation */}
      <Stagger className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {sectors.map((s) => (
          <StaggerItem key={s.name}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/40 p-7 transition-colors duration-500 hover:border-accent/40">
              <div className="grid-lines pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden />
              <div className="relative">
                <p className="label text-accent/80">{s.company}</p>
                <h3 className="mt-4 text-lg leading-snug text-fg">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
