/* ============================================================================
   CONTENT DATA — the group's companies, vision, milestones and insights.
   This is the editorial source of truth. Update copy here; the UI follows.
   Years / metrics marked as illustrative — replace with verified figures.
   ============================================================================ */

export interface Company {
  id: string;
  index: string;          // editorial numbering, e.g. "01"
  legalName: string;      // registered entity
  brand: string;          // product / brand name
  category: string;       // what it is
  sector: string;         // sector tag
  summary: string;        // one-line positioning
  description: string;    // fuller paragraph
  highlights: string[];   // 3 short proof points
  status: string;         // Operating / Scaling / In development
  year: string;
}

export const companies: Company[] = [
  {
    id: "nexxatech",
    index: "01",
    legalName: "Nexxatech Global Sdn Bhd",
    brand: "TRIMO",
    category: "Green Social Platform",
    sector: "Technology · Sustainability",
    summary:
      "A social platform that turns everyday actions into measurable environmental impact.",
    description:
      "TRIMO connects people, brands and causes around sustainability — rewarding real-world green behaviour and making collective impact visible, social and habitual. It is the group's flagship technology venture for community-led climate action.",
    highlights: ["Community-driven impact", "Rewards & engagement engine", "Brand sustainability partnerships"],
    status: "Scaling",
    year: "2022",
  },
  {
    id: "nexflo",
    index: "02",
    legalName: "Nexflo Sdn Bhd",
    brand: "Jarvis AI",
    category: "Enterprise Intelligence Platform",
    sector: "Artificial Intelligence",
    summary:
      "Enterprise AI that unifies data and turns information into decisions.",
    description:
      "Jarvis AI gives organisations a single intelligence layer — connecting fragmented systems, automating knowledge work and surfacing the insight leaders need to act with speed and confidence. It is the group's bet on applied, enterprise-grade AI.",
    highlights: ["Unified data intelligence", "Workflow automation", "Decision-grade insight"],
    status: "Scaling",
    year: "2023",
  },
  {
    id: "gemas",
    index: "03",
    legalName: "Gemas Golf Resort Sdn Bhd",
    brand: "Gemas Golf Resort",
    category: "Hospitality & Golf Resort",
    sector: "Hospitality · Leisure",
    summary:
      "A destination resort pairing championship golf with refined hospitality.",
    description:
      "Gemas Golf Resort is the group's hospitality flagship — a considered leisure destination where landscape, sport and service meet. It anchors the group's long-term presence in premium experiential hospitality.",
    highlights: ["Championship course", "Resort & events", "Premium guest experience"],
    status: "Operating",
    year: "2021",
  },
  {
    id: "national6a",
    index: "04",
    legalName: "National 6A Investment Co., Ltd.",
    brand: "National 6A",
    category: "Property Development",
    sector: "Real Estate · Development",
    summary:
      "Property development creating long-term value through considered places.",
    description:
      "National 6A develops and invests in real estate with a patient, value-led approach — building community-anchored places designed to appreciate across cycles. It is the group's foundation in tangible, long-horizon assets.",
    highlights: ["Long-horizon assets", "Community-anchored design", "Disciplined capital"],
    status: "In development",
    year: "2024",
  },
];

/* --- Vision principles ---------------------------------------------------- */
export interface Principle {
  index: string;
  title: string;
  text: string;
}

export const principles: Principle[] = [
  {
    index: "I",
    title: "Long-term Vision",
    text: "We build for decades, not quarters — compounding value patiently across companies and cycles.",
  },
  {
    index: "II",
    title: "Innovation & Technology",
    text: "We treat technology as leverage, backing ventures that reshape how people and enterprises operate.",
  },
  {
    index: "III",
    title: "Community Building",
    text: "We grow companies that strengthen the communities they serve — impact and enterprise advancing together.",
  },
  {
    index: "IV",
    title: "Investment Perspective",
    text: "We allocate capital with discipline and conviction, holding for fundamental, durable returns.",
  },
];

/* --- Portfolio dimensions (investor-grade overview) ----------------------- */
export interface PortfolioPillar {
  label: string;
  value: string;
  detail: string;
}

export const portfolioStats: PortfolioPillar[] = [
  { label: "Operating companies", value: "4", detail: "Across four distinct sectors" },
  { label: "Core sectors", value: "Tech · AI · Hospitality · Real Estate", detail: "A deliberately diversified base" },
  { label: "Horizon", value: "Long-term", detail: "Patient, founder-led ownership" },
  { label: "Base", value: "Malaysia", detail: "With a global outlook" },
];

export const sectors = [
  {
    name: "Technology & Sustainability",
    text: "Consumer and social platforms that turn participation into measurable impact.",
    company: "TRIMO",
  },
  {
    name: "Artificial Intelligence",
    text: "Enterprise intelligence that compounds in value as organisations scale.",
    company: "Jarvis AI",
  },
  {
    name: "Hospitality & Leisure",
    text: "Experiential, destination assets built around landscape and service.",
    company: "Gemas Golf Resort",
  },
  {
    name: "Real Estate & Development",
    text: "Tangible, long-horizon assets anchored in community and discipline.",
    company: "National 6A",
  },
];

/* --- Timeline ------------------------------------------------------------- */
export interface Milestone {
  year: string;
  title: string;
  text: string;
}

export const timeline: Milestone[] = [
  { year: "2021", title: "Hospitality foundation", text: "Gemas Golf Resort establishes the group's presence in premium experiential hospitality." },
  { year: "2022", title: "Green technology", text: "Nexxatech Global launches TRIMO, the group's flagship green social platform." },
  { year: "2023", title: "Enterprise AI", text: "Nexflo introduces Jarvis AI, extending the group into applied enterprise intelligence." },
  { year: "2024", title: "Real assets", text: "National 6A Investment formalises the group's long-horizon property development arm." },
  { year: "2025", title: "An integrated ecosystem", text: "The companies begin operating as one ecosystem — technology, hospitality and capital reinforcing each other." },
];

/* --- Insights ------------------------------------------------------------- */
export interface Insight {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
}

export const insights: Insight[] = [
  {
    category: "Perspective",
    title: "Why founder-led groups compound differently",
    excerpt: "Concentrated ownership and a long horizon let conviction outlast market noise — and let companies reinforce one another.",
    date: "Jun 2025",
    readingTime: "6 min",
  },
  {
    category: "Technology",
    title: "From platforms to ecosystems: the next decade of impact",
    excerpt: "When green technology, enterprise AI and real assets share a vision, the whole becomes greater than its parts.",
    date: "May 2025",
    readingTime: "8 min",
  },
  {
    category: "Investment",
    title: "Patient capital in an impatient market",
    excerpt: "A disciplined view on allocating across cycles — and why the best returns are measured in decades.",
    date: "Apr 2025",
    readingTime: "5 min",
  },
];
