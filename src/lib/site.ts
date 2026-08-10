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

  /* Short form, for tight spots where one line is all that fits. */
  location: "Kuala Lumpur, Malaysia",

  /* Registered office, one array entry per rendered line. Not translated —
     a Malaysian postal address is the same in both languages. */
  address: [
    "B-06-01 & 06-02,",
    "Tower B, Vertical Business Suite,",
    "Avenue 3, 8, Jalan Kerinchi,",
    "Bangsar South,",
    "59200 Kuala Lumpur",
  ],

  /* Primary navigation — mostly home-page section anchors; "Team" is a route.
     Labels here are only a fallback: the header/footer render messages.nav,
     so that array must stay in this exact order and length.
     No "Contact" entry on purpose — the Enquire button in the header (and the
     closing #contact band it points at) already carries that, and Careers /
     Investors cover the two enquiries people actually arrive with. */
  nav: [
    { label: "About", href: "/#about" },
    { label: "Founder", href: "/#founder" },
    { label: "Companies", href: "/#companies" },
    { label: "Vision", href: "/#vision" },
    { label: "Team", href: "/team" },
  ],

  /* Standalone pages (routes, not homepage anchors). */
  teamHref: "/team",
  careersHref: "/careers",
  investHref: "/invest",

  social: {
    linkedin: "https://www.linkedin.com/company/csgroup",
    x: "https://x.com/csgroup",
  },
} as const;

export type Site = typeof site;
