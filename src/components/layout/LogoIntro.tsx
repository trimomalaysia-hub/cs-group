"use client";

/* Brand opener for the home page. The logo lockup holds full-screen until the
   visitor enters — by pressing Enter, or by clicking anywhere — with a 10s
   auto-advance so nobody is ever stuck. It is an overlay, not a section:
   nothing here is scrollable and none of it stays on the page afterwards.

   The wordmark is deliberately a <p>, not a heading: this content is transient,
   so the page's <h1> belongs to the Hero underneath it. */

import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import StoneSurface from "@/components/ui/StoneSurface";
import { useLanguage } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Once per browser session. Clicking the header wordmark, or coming back to the
   home page from /careers, must not replay the opener. */
const SEEN_KEY = "cs-group-intro-seen";

/* Runs before paint on the client so a skipped intro never flashes; falls back
   to useEffect during SSR, where layout effects don't run anyway. */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Fallback only. The intended action is to click / tap / press a key — this just
   guarantees nobody is gated if they never interact.
   Counted from when the lockup has FINISHED arriving, not from mount, so the
   opener is never cut off mid-animation. */
const AUTO_ADVANCE_MS = 4500;

/* Longest entrance chain: the corner brackets start at 0.45 + 3x0.07 = 0.66s and
   run 1.5s, landing at ~2.16s. Rounded up so nothing is still moving. */
const ENTRANCE_MS = 2300;

/* Corner brackets. Each draws its two hairlines outward from the corner it
   sits in, so the frame appears to be struck rather than fading up. */
const CORNERS = [
  { key: "tl", box: "left-0 top-0", h: "left-0 top-0", v: "left-0 top-0", hOrigin: "left", vOrigin: "top" },
  { key: "tr", box: "right-0 top-0", h: "right-0 top-0", v: "right-0 top-0", hOrigin: "right", vOrigin: "top" },
  { key: "bl", box: "bottom-0 left-0", h: "bottom-0 left-0", v: "bottom-0 left-0", hOrigin: "left", vOrigin: "bottom" },
  { key: "br", box: "bottom-0 right-0", h: "bottom-0 right-0", v: "bottom-0 right-0", hOrigin: "right", vOrigin: "bottom" },
] as const;

export default function LogoIntro() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  /* Rendered from the root layout so it sits OUTSIDE #site-shell — it marks that
     shell `inert`, and when it lived inside it (via page.tsx -> <main>) it made
     itself inert too, which silently killed the backdrop click and the Enter
     button. Gated on the path here so it still only opens the home page. */
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [done, setDone] = useState(false);
  /* Dismissed without an exit animation — used when the opener is skipped
     outright, so there is nothing to animate away. */
  const [instant, setInstant] = useState(false);

  /* Decide before first paint whether this visit should see the opener at all.
     Skipped when: motion is reduced, the URL targets a section (a deep link
     like /#about is a request for content, not an invitation to a splash), or
     it has already played once this session. */
  useIsoLayoutEffect(() => {
    if (!isHome) return;
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* private mode / storage blocked — just show it */
    }
    const deepLink = window.location.hash.length > 1;

    if (reduce || seen || deepLink) {
      setInstant(true);
      setDone(true);
    }
  }, [reduce, isHome]);

  useEffect(() => {
    if (!isHome || done) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const startHold = () => {
      if (cancelled) return;
      timer = setTimeout(() => setDone(true), ENTRANCE_MS + AUTO_ADVANCE_MS);
    };

    /* Wait for the webfonts first. The mark is set in Bodoni Moda; if the timer
       ran from mount, the countdown would start while the lockup was still
       swapping in and the opener would leave before it had finished arriving. */
    const fonts = document.fonts;
    if (fonts?.ready) {
      fonts.ready.then(startHold, startHold);
    } else {
      startHold();
    }

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [done, isHome]);

  /* Remember it played, so returning to the home page goes straight in. */
  useEffect(() => {
    if (!isHome || !done) return;
    try {
      window.sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
  }, [done, isHome]);

  /* Honour the hash once the overlay is out of the way. The browser's own hash
     scroll happens while the body is still locked, so it needs redoing. */
  useEffect(() => {
    if (!isHome || !done) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() =>
      el.scrollIntoView({ behavior: instant ? "auto" : "smooth", block: "start" }),
    );
  }, [done, instant, isHome]);

  /* Keyboard: Enter, Space or Escape enters at once — no waiting for the fallback.
     A global listener, since nothing is focused on first paint. */
  useEffect(() => {
    if (!isHome || done) return;
    const onKey = (e: KeyboardEvent) => {
      if (["Enter", " ", "Spacebar", "Escape"].includes(e.key)) {
        e.preventDefault();
        setDone(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [done, isHome]);

  useEffect(() => {
    if (!isHome || done) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done, isHome]);

  /* The overlay is opaque, so the page beneath must leave the tab order and the
     accessibility tree while it is up — otherwise focus lands on controls with
     the focus ring painted underneath the panel. */
  useEffect(() => {
    const shell = document.getElementById("site-shell");
    if (!shell) return;
    if (!isHome || done) shell.removeAttribute("inert");
    else shell.setAttribute("inert", "");
    return () => shell.removeAttribute("inert");
  }, [done, isHome]);

  const settle = (delay: number, y = 10) => ({
    initial: { opacity: 0, y: reduce ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.3, ease: EASE, delay },
  });

  const pillarList: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.72 } },
  };
  const pillarItem: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
  };

  return (
    <AnimatePresence>
      {isHome && !done && (
        <motion.div
          key="logo-intro"
          data-logo-intro
          role="presentation"
          onClick={() => setDone(true)}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          /* Dissolve with a slight push-through rather than a wipe — the mark
             recedes into the site instead of sliding off it. */
          exit={{ opacity: 0, scale: reduce || instant ? 1 : 1.04 }}
          transition={{ duration: instant ? 0 : 0.9, ease: EASE }}
        >
          <StoneSurface />

          {/* Corner frame — gives the empty field the feel of a struck plate
             rather than a blank screen. */}
          <div
            className="pointer-events-none absolute inset-5 sm:inset-8 lg:inset-12"
            aria-hidden
          >
            {CORNERS.map((c, i) => (
              <div key={c.key} className={`absolute h-10 w-10 sm:h-16 sm:w-16 ${c.box}`}>
                <motion.span
                  className={`absolute h-px w-full bg-accent/30 ${c.h}`}
                  style={{ transformOrigin: c.hOrigin }}
                  initial={{ scaleX: reduce ? 1 : 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: EASE, delay: 0.45 + i * 0.07 }}
                />
                <motion.span
                  className={`absolute h-full w-px bg-accent/30 ${c.v}`}
                  style={{ transformOrigin: c.vOrigin }}
                  initial={{ scaleY: reduce ? 1 : 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: EASE, delay: 0.45 + i * 0.07 }}
                />
              </div>
            ))}
          </div>

          <Container className="text-center">
            {/* Settles down onto the plate rather than fading in flat. */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, y: reduce ? 0 : 12, scale: reduce ? 1 : 1.03 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: EASE }}
            >
              <span className="metal-emblem glint block font-logo text-[7.5rem] font-normal leading-[0.8] tracking-[-0.03em] sm:text-[11rem] lg:text-[15rem]">
                {t.logo.monogram}
              </span>
            </motion.div>

            {/* Draws outward from its centre. */}
            <motion.div
              className="mx-auto mt-10 w-20 sm:mt-12 sm:w-24"
              aria-hidden
              initial={{ opacity: 0, scaleX: reduce ? 1 : 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.28 }}
            >
              <div className="rule-gold" />
            </motion.div>

            {/* Wipe reveal, left to right. Applied to the whole block rather
                than per letter: the metallic fill is one clipped background
                across the word, and transforming individual letters inside it
                would break that clip. */}
            <motion.p
              className="mt-10 sm:mt-12"
              initial={{
                opacity: 0,
                clipPath: reduce ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
              }}
              animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.38 }}
            >
              <span className="metal-gold metal-sheen block font-logo text-3xl font-normal leading-tight tracking-[0.18em] [text-indent:0.18em] sm:text-5xl lg:text-6xl">
                {t.logo.wordmark}
              </span>
            </motion.p>

            {/* One pillar at a time. */}
            <motion.p
              className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:mt-11"
              variants={pillarList}
              initial="hidden"
              animate="show"
            >
              {t.logo.pillars.map((pillar, i) => (
                <motion.span key={i} variants={pillarItem} className="flex items-center gap-x-4">
                  {i > 0 && <span className="h-3 w-px bg-accent/40" aria-hidden />}
                  <span className="label text-muted">{pillar}</span>
                </motion.span>
              ))}
            </motion.p>

            {/* The way in. Appears early so nobody sits waiting on a gate they
                can't see, and it is a real <button> so it is keyboard-reachable
                — clicking the backdrop is only a convenience on top of it. */}
            <motion.button
              type="button"
              onClick={() => setDone(true)}
              {...settle(0.6)}
              className="group mt-16 inline-flex items-center gap-3 sm:mt-20"
            >
              <span className="label text-muted transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent">
                {t.logo.enter}
              </span>
              <span
                className="h-px w-8 bg-accent/50 transition-all duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-14 group-hover:bg-accent"
                aria-hidden
              />
            </motion.button>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
