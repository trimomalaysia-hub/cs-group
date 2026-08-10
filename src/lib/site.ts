/* ============================================================================
   SITE CONFIG — global identity, navigation and contact details.
   Edit the text between quotes to update the whole site.
   ============================================================================ */

export const site = {
  /* Holding group identity. Rename here if the group adopts a formal brand. */
  name: "CS Group",
  legalName: "CS Group",
  founder: "Kam Chin Seng",
  tagline: "A founder-led group building enduring companies across technology, hospitality and capital.",
  description:
    "CS Group is a diversified, founder-led ecosystem established by Kam Chin Seng — spanning social technology, enterprise AI, hospitality and property development, built on a long-term, investor-grade vision.",

  /* Public URL (used for SEO + social previews, sitemap.xml and robots.txt). */
  url: "https://cs-group.international",

  /* Contact */
  email: "office@csgroup.com",
  investorEmail: "invest@csgroup.com",
  careersEmail: "careers@csgroup.com",
  phone: "+60 12-345 6789",
  location: "Kuala Lumpur, Malaysia",

  /* Primary navigation — maps to section IDs on the home page. */
  nav: [
    { label: "About", href: "/#about" },
    { label: "Companies", href: "/#companies" },
    { label: "Talent", href: "/#talent" },
    { label: "Founder", href: "/#founder" },
    { label: "Vision", href: "/#vision" },
    { label: "Contact", href: "/#contact" },
  ],

  /* Standalone pages (routes, not homepage anchors). */
  careersHref: "/careers",
  investHref: "/invest",

  social: {
    linkedin: "https://www.linkedin.com/company/csgroup",
    x: "https://x.com/csgroup",
  },
} as const;

export type Site = typeof site;
