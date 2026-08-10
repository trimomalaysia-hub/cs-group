"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { site } from "@/lib/site";
import { useLanguage, type Lang } from "@/lib/i18n";
import Container from "@/components/ui/Container";

function LangToggle({
  lang,
  setLang,
  className = "",
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  className?: string;
}) {
  const opts: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "zh", label: "中" },
  ];
  return (
    <div className={`inline-flex items-center rounded-full border border-line-strong p-0.5 ${className}`}>
      {opts.map((o) => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            lang === o.code ? "bg-fg text-bg" : "text-muted hover:text-accent"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* Reading-progress hairline across the bottom of the bar */
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled && !open ? "h-16" : "h-20"
        }`}
      >
        {/* Wordmark */}
        {/* Brand mark: brightens, never moves. */}
        <Link
          href="/#top"
          className="hv-mark group flex items-center gap-2.5"
          aria-label={site.name}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line-strong text-[0.85rem] font-display text-accent transition-colors duration-[var(--hover-dur)] group-hover:border-accent/60">
            C
          </span>
          <span className="font-display text-lg text-fg">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="hv-nav text-sm text-muted"
            >
              {t.nav[i]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={site.careersHref}
            className="hv-nav text-sm text-muted"
          >
            {t.header.careers}
          </Link>
          <Link
            href={site.investHref}
            className="hv-nav text-sm text-muted"
          >
            {t.header.investors}
          </Link>
          <LangToggle lang={lang} setLang={setLang} />
          <Link
            href="/#contact"
            className="rounded-full border border-line-strong px-5 py-2 text-sm text-fg transition-all duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-accent/70 hover:bg-accent/[0.04] hover:text-accent"
          >
            {t.header.enquire}
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            className="flex h-10 w-10 items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
          >
            <div className="relative h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-fg transition-all duration-300 ${
                  open ? "top-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-fg transition-all duration-300 ${
                  open ? "bottom-1/2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Reading progress — a hairline that fills as the page is read */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className={`h-px origin-left bg-accent/70 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col py-6">
              {site.nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 font-display text-2xl text-fg transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent"
                >
                  {t.nav[i]}
                </Link>
              ))}
              <Link
                href={site.careersHref}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-2xl text-fg transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent"
              >
                {t.header.careers}
              </Link>
              <Link
                href={site.investHref}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-2xl text-fg transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-accent"
              >
                {t.header.investors}
              </Link>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
