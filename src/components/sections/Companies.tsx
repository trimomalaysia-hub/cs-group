import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { companies } from "@/lib/data";

export default function Companies() {
  return (
    <Section id="companies">
      <SectionHeading
        index="02"
        eyebrow="Companies"
        title={
          <>
            Four companies,
            <br />
            one ecosystem.
          </>
        }
        lead="Each business stands on its own — yet shares a founder, a standard and a long-term vision."
      />

      <Stagger className="mt-16 sm:mt-20">
        {companies.map((c) => (
          <StaggerItem key={c.id}>
            <Link
              href={`/companies/${c.id}`}
              className="group grid grid-cols-1 gap-6 border-t border-line py-10 transition-colors duration-500 hover:bg-elevated/40 lg:grid-cols-12 lg:gap-8 lg:px-4"
            >
              {/* Identity */}
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="label text-faint">{c.index}</span>
                  <h3 className="font-display text-3xl tracking-tight text-fg transition-colors duration-500 group-hover:text-accent sm:text-4xl">
                    {c.brand}
                  </h3>
                </div>
                <p className="mt-3 pl-10 text-sm text-muted">{c.legalName}</p>
              </div>

              {/* Description */}
              <div className="lg:col-span-6">
                <p className="label text-accent/80">{c.category}</p>
                <p className="mt-3 text-lg leading-relaxed text-muted">{c.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-faint">
                      <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta */}
              <div className="flex items-start justify-between lg:col-span-2 lg:flex-col lg:items-end lg:justify-between lg:text-right">
                <div>
                  <p className="text-sm text-fg">{c.status}</p>
                  <p className="mt-1 text-sm text-faint">Since {c.year}</p>
                </div>
                <span
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-faint transition-colors duration-500 group-hover:text-accent"
                  aria-hidden
                >
                  View
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
        <div className="border-t border-line" />
      </Stagger>
    </Section>
  );
}
