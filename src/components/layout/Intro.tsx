"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

/* Full-screen brand opener that plays on landing, then lifts to reveal the site.
   Monochrome ink → black. Skippable; instantly skipped under reduced-motion.
   To play it only once per browser session, see the sessionStorage note below. */

const EASE = [0.16, 1, 0.3, 1] as const;

// Opener overlay palette (its own dramatic ink tones).
const INK = "#0c0b08";
const CREAM = "#f4f0e6";
const HAIR = "#c8b48c";
const META = "#8c8474";

export default function Intro() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Play once per session instead? Uncomment:
    // if (sessionStorage.getItem("cs-intro")) { setDone(true); return; }
    // sessionStorage.setItem("cs-intro", "1");
    if (reduce) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          role="presentation"
          onClick={() => setDone(true)}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center"
          style={{ backgroundColor: INK }}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="px-6 text-center">
            <motion.div
              className="mx-auto mb-8 h-px w-16 origin-center"
              style={{ backgroundColor: HAIR }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            />

            <div className="overflow-hidden pb-1">
              <motion.h1
                className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
                style={{ color: CREAM }}
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.95, ease: EASE, delay: 0.35 }}
              >
                {site.name}
              </motion.h1>
            </div>

            <motion.p
              className="label mt-6"
              style={{ color: META }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 1 }}
            >
              Technology · Hospitality · Capital
            </motion.p>
          </div>

          <motion.button
            onClick={() => setDone(true)}
            className="label absolute bottom-6 right-6"
            style={{ color: META }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
