"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { messages } from "./messages";
import type { Lang, Loc } from "./i18n-types";

// Re-export the types so existing imports from "@/lib/i18n" keep working.
export type { Lang, Loc };

/* ============================================================================
   Lightweight i18n — in-place language toggle (EN / 中), no URL change.
   The choice is remembered in localStorage. Default language: English.

   A "Loc" value holds both languages, e.g. { en: "Vision", zh: "愿景" }.
   In a component:  const { lang } = useLanguage();  value[lang]
   For UI strings:  const { t } = useLanguage();     t.nav.contact
   ========================================================================== */

const STORAGE_KEY = "cs-group-lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (typeof messages)["en"];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start as "en" so server and first client render match (no hydration
  // mismatch); then restore the saved choice after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "zh") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "zh" ? "zh-Hans" : "en";
    }
  };

  const toggle = () => setLang(lang === "en" ? "zh" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: messages[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within <LanguageProvider>");
  return ctx;
}
