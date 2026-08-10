"use client";

import { useLanguage } from "@/lib/i18n";

/* The three forces, as a quiet atmospheric index — not a UI component.
   Cashflow · Intelligence · Assets, joined by faint hairlines. */
const FORCES = [
  { en: "Cashflow", zh: "现金流" },
  { en: "Intelligence", zh: "智能" },
  { en: "Assets", zh: "资产" },
];

export default function SystemFlow() {
  const { lang } = useLanguage();
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {FORCES.map((f, i) => (
        <span key={f.en} className="flex items-center gap-x-6">
          {i > 0 && <span className="h-px w-7 bg-accent/25" aria-hidden />}
          <span className="font-display text-base tracking-tight text-muted sm:text-lg">
            {f[lang]}
          </span>
        </span>
      ))}
    </div>
  );
}
