import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import { site } from "@/lib/site";
import { LanguageProvider } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

/* Literary editorial serif for display headlines (Lux Capital feel) */
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

/* Clean grotesque for UI + body (Lux-like restraint) */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`${serif.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
