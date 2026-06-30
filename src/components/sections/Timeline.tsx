import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <Section id="timeline">
      <SectionHeading
        index="05"
        eyebrow="Timeline"
        title="A deliberate progression."
        lead="The group has grown one considered step at a time — each company laying the ground for the next."
      />

      <div className="relative mt-16">
        {/* Vertical rail */}
        <div className="absolute left-2 top-2 bottom-2 w-px bg-line" aria-hidden />

        <Stagger className="space-y-12">
          {timeline.map((m) => (
            <StaggerItem key={m.year}>
              <div className="relative grid grid-cols-1 gap-2 pl-10 sm:grid-cols-[7rem_1fr] sm:items-baseline sm:gap-10">
                {/* Node */}
                <span
                  className="absolute left-2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg"
                  aria-hidden
                />
                <span className="font-display text-2xl text-accent">{m.year}</span>
                <div>
                  <h3 className="text-xl text-fg sm:text-2xl">{m.title}</h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted">{m.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
