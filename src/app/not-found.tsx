"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/lib/i18n";

/* Bilingual, on-brand 404. Rendered inside the root layout, so it keeps the
   header, footer and language context. Covers unknown company slugs and any
   stray/old URLs. */
export default function NotFound() {
  const { t } = useLanguage();
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="label text-accent">404</p>
      <h1 className="mt-6 font-display text-4xl leading-[1.06] sm:text-5xl">
        {t.notFound.title}
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
        {t.notFound.lead}
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full border border-line-strong px-6 py-3 text-sm text-fg transition-all duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent/70 hover:bg-accent/[0.04] hover:text-accent"
      >
        {t.notFound.home}
      </Link>
    </Container>
  );
}
