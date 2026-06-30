import type { ReactNode } from "react";
import Container from "./Container";

/* A page section: consistent vertical rhythm + a top hairline + container.
   `wide` removes the container for full-bleed sections. */
export default function Section({
  id,
  children,
  className = "",
  bordered = true,
  wide = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-24 sm:py-32 lg:py-40 ${
        bordered ? "border-t border-line" : ""
      } ${className}`}
    >
      {wide ? children : <Container>{children}</Container>}
    </section>
  );
}
