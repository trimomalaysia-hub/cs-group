import type { ReactNode } from "react";

/* Small uppercase editorial label with an accent marker.
   Used above section headings, e.g.  "—  02 / Companies". */
export default function Eyebrow({
  index,
  children,
  className = "",
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`label inline-flex items-center gap-3 text-accent ${className}`}>
      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
      <span className="h-px w-8 bg-accent/60" aria-hidden />
      {index && <span className="text-faint">{index}</span>}
      <span className="text-muted">{children}</span>
    </span>
  );
}
