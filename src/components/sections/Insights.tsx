import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { insights } from "@/lib/data";

export default function Insights() {
  return (
    <Section id="insights">
      <SectionHeading
        index="06"
        eyebrow="Insights"
        title="Perspectives."
        lead="Notes on building enduring companies — on technology, hospitality and the discipline of patient capital."
      />

      <Stagger className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        {insights.map((post) => (
          <StaggerItem key={post.title} className="h-full">
            {/* href is a placeholder — point to real articles or a /insights route later */}
            <a
              href="#insights"
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface/40 p-8 transition-colors duration-500 hover:border-accent/40 hover:bg-elevated/50"
            >
              <span className="label text-accent/80">{post.category}</span>
              <h3 className="mt-6 font-display text-2xl leading-snug text-fg transition-colors duration-500 group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{post.excerpt}</p>
              <div className="mt-8 flex items-center justify-between border-t border-line pt-5 text-sm text-faint">
                <span>{post.date} · {post.readingTime}</span>
                <span className="text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
                  Read →
                </span>
              </div>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
