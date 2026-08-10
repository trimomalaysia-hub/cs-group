"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/* Number that counts up once, when it first scrolls into view.
   Reduced-motion users get the final value immediately. */
export default function Counter({
  to,
  duration = 1.8,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: {
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }

    let frame = 0;
    let start: number | null = null;
    // Same easing curve as the rest of the site's motion (ease-out-soft).
    const ease = (p: number) => 1 - Math.pow(1 - p, 4);

    const tick = (now: number) => {
      if (start === null) start = now;
      const p = Math.min((now - start) / (duration * 1000), 1);
      setValue(to * ease(p));
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, to, duration]);

  const display = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {/* Screen readers get the final figure, never the ticking intermediate values. */}
      <span aria-hidden>
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {to.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
        {suffix}
      </span>
    </span>
  );
}
