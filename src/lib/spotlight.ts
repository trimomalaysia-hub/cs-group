import type { MouseEvent } from "react";

/* Attach to a card's onMouseMove (with the `spotlight` class) to make a soft
   accent glow follow the cursor. Writes --mx/--my CSS vars read in globals.css. */
export function onSpotlightMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}
