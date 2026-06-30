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
    "CS Group is a diversified, founder-led ecosystem established by Kam Chin Seng — spanning green technology, enterprise AI, hospitality and property development, built on a long-term, investor-grade vision.",

  /* Public URL (used for SEO + social previews). Set your real domain here. */
  url: "https://www.csgroup.com",

  /* Contact */
  email: "office@csgroup.com",
  investorEmail: "invest@csgroup.com",
  phone: "+60 12-345 6789",
  location: "Kuala Lumpur, Malaysia",

  /* Primary navigation — maps to section IDs on the home page. */
  nav: [
    { label: "Founder", href: "/#founder" },
    { label: "Companies", href: "/#companies" },
    { label: "Vision", href: "/#vision" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Timeline", href: "/#timeline" },
    { label: "Insights", href: "/#insights" },
    { label: "Contact", href: "/#contact" },
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/csgroup",
    x: "https://x.com/csgroup",
  },
} as const;

export type Site = typeof site;
