import type { Metadata } from "next";
import { Bodoni_Moda, Inter, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import TechBackdrop from "@/components/ui/TechBackdrop";
import "./globals.css";

/* Clean grotesque for body copy and UI chrome */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Elegant serif for headlines — the luxury half of the brand.
   Latin only; Chinese headings fall back to a CJK serif (see globals.css). */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

/* Didone for the logo lockup only. Playfair's stroke contrast is too moderate
   to match the brand mark — Bodoni Moda has the hairline serifs and extreme
   thick/thin the reference logo is drawn with. Regular weight on purpose: the
   contrast does the work, not the mass. */
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Founder-Led Group`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  keywords: [
    site.name,
    site.founder,
    "TRIMO",
    "NEXJARVIS",
    "Gemas Golf Resort",
    "National 6A",
    "founder-led group",
    "investment",
    "technology",
    "hospitality",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Founder-Led Group`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Founder-Led Group`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${bodoni.variable}`}
    >
      <body className="min-h-screen bg-bg text-fg antialiased">
        <TechBackdrop />
        <LanguageProvider>
          {/* The home page's <LogoIntro /> marks this `inert` while its overlay
              is up, so Tab cannot reach controls hidden behind it. */}
          <div id="site-shell">
            <SkipLink />
            <Header />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
