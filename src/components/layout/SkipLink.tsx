"use client";

import { useLanguage } from "@/lib/i18n";

/* Visually-hidden link that appears on keyboard focus, letting keyboard and
   screen-reader users jump past the fixed header straight to the main content. */
export default function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#main-content" className="skip-link">
      {t.a11y.skipToContent}
    </a>
  );
}
