import type { ReactNode } from "react";
import Link from "next/link";

/* Link-style button with four restrained variants.
   Defaults to an anchor (href); falls back to a real <button>.
   Internal hrefs route through next/link so they are client transitions — a raw
   <a> would full-reload the document, dropping the language back to the
   provider's "en" default on every CTA click. */
type Variant = "gold" | "primary" | "outline" | "ghost";
type Size = "md" | "lg";

/* Duration comes from --hover-dur so buttons stay in step with every other
   hover on the site. */
const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  /* The lead CTA: gold edge brightens, a faint gold tint fills, and a very
     soft bloom sits behind it — low opacity on purpose, never neon. */
  gold:
    "border border-accent/55 text-accent hover:border-accent hover:bg-accent/[0.07] hover:shadow-[0_10px_34px_-16px_color-mix(in_srgb,var(--color-accent)_38%,transparent)]",
  primary:
    "bg-fg text-bg hover:bg-accent-soft",
  outline:
    "border border-line-strong text-fg hover:border-accent/70 hover:text-accent hover:bg-accent/[0.04]",
  ghost:
    "text-muted hover:text-accent",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    // mailto:/tel:/http(s): and bare fragments must stay plain anchors.
    const isPlainAnchor = /^(?:https?:|mailto:|tel:|#)/i.test(href);
    if (isPlainAnchor) {
      return (
        <a href={href} className={cls} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  return <button className={cls}>{children}</button>;
}
