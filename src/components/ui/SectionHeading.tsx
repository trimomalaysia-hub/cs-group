import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

/* Standard section header: eyebrow + large editorial title + optional lead.
   Keeps every section's top consistent. */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      <Reveal>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className={`mt-6 text-lg leading-relaxed text-muted sm:text-xl ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
