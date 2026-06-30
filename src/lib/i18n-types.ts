/* Plain (non-"use client") module holding the shared i18n types.
   Server-graph modules (data.ts, messages.ts) import types from HERE — never
   from the "use client" i18n.tsx — so the RSC bundler keeps a clean client
   boundary for the provider. */

export type Lang = "en" | "zh";
export type Loc<T = string> = { en: T; zh: T };
