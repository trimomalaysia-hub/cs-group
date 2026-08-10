/* ============================================================================
   INVESTORS CONTENT — bilingual (English + Simplified Chinese).
   All copy for the /invest page. Each translatable field is a Loc: { en, zh }.

   NOTE: the "facts" strip uses only structural facts (company/sector counts,
   ownership, horizon) — NOT performance metrics. Add verified traction numbers
   (revenue, growth, users, etc.) only once they are real and defensible.
   ========================================================================== */
import type { Loc } from "./i18n-types";

export interface Fact {
  value: Loc;
  label: Loc;
}
export interface ThesisPoint {
  title: Loc;
  text: Loc;
}
export interface Edge {
  title: Loc;
  text: Loc;
}
export interface ProcessStep {
  name: Loc;
  text: Loc;
}

export const investContent = {
  hero: {
    eyebrow: { en: "Investors", zh: "投资者" },
    title: {
      en: "Invest in a founder-led group building what endures.",
      zh: "投资一家创始人主导、缔造长青事业的集团。",
    },
    lead: {
      en: "CS Group brings four companies — across social technology, enterprise AI, hospitality and property — under one founder, one standard and one long-term vision. For venture and strategic investors, that means diversified exposure to high-growth ventures with the discipline of a patient owner.",
      zh: "CS Group 将四家公司 —— 横跨社交科技、企业 AI、酒店与房地产 —— 汇聚于同一位创始人、同一套标准与同一个长期愿景之下。对风险投资与战略投资者而言，这意味着以耐心所有者的纪律，获得对高增长企业的多元化配置。",
    },
    primaryCta: { en: "Request the investor deck", zh: "索取投资资料" },
    secondaryCta: { en: "Explore the companies", zh: "了解旗下企业" },
    subject: { en: "Investor enquiry — CS Group", zh: "投资垂询 — CS Group" },
  },

  facts: {
    items: [
      { value: { en: "4", zh: "4" }, label: { en: "Operating companies", zh: "运营中的公司" } },
      { value: { en: "4", zh: "4" }, label: { en: "Distinct sectors", zh: "不同行业" } },
      { value: { en: "Founder-led", zh: "创始人主导" }, label: { en: "Aligned ownership", zh: "一致的所有权" } },
      { value: { en: "Long-term", zh: "长期主义" }, label: { en: "Investment horizon", zh: "投资视野" } },
    ] as Fact[],
  },

  thesis: {
    eyebrow: { en: "The opportunity", zh: "投资机会" },
    title: { en: "Why invest in CS Group.", zh: "为何投资 CS Group。" },
    lead: {
      en: "Not a single bet — a diversified base of companies that move on different cycles and reinforce one another.",
      zh: "这不是单一押注 —— 而是一组处于不同周期、彼此成就的多元化企业基石。",
    },
    points: [
      {
        title: { en: "Diversified by design", zh: "刻意的多元化" },
        text: {
          en: "Four sectors — social technology, enterprise AI, hospitality and property — deliberately spread across different cycles, reducing risk while compounding capability.",
          zh: "四大行业 —— 社交科技、企业 AI、酒店与房地产 —— 刻意分布于不同周期，在分散风险的同时让能力不断复利。",
        },
      },
      {
        title: { en: "Founder alignment", zh: "创始人利益一致" },
        text: {
          en: "Concentrated, founder-led ownership means conviction outlasts market noise — decisions are made for the long term, not the quarter.",
          zh: "集中的、创始人主导的所有权，意味着信念能穿越市场噪音 —— 决策着眼长远，而非季度。",
        },
      },
      {
        title: { en: "An ecosystem, not a portfolio", zh: "是生态，而非组合" },
        text: {
          en: "The companies share talent, standards and vision — so the whole compounds faster than the sum of its parts.",
          zh: "各家公司共享人才、标准与愿景 —— 因此整体的复利速度，快于各部分之和。",
        },
      },
      {
        title: { en: "High-growth, with discipline", zh: "高增长，有纪律" },
        text: {
          en: "Scaling ventures in technology and AI, anchored by cash-generative hospitality and real assets — growth backed by a patient, investor-grade balance.",
          zh: "科技与 AI 领域的高增长业务，由能产生现金流的酒店与实体资产托底 —— 增长之下，是耐心而投资级的平衡。",
        },
      },
    ] as ThesisPoint[],
  },

  portfolio: {
    eyebrow: { en: "The portfolio", zh: "投资组合" },
    title: { en: "Four companies, one thesis.", zh: "四家公司，一个逻辑。" },
    lead: {
      en: "Each company is investable in its own right — together they form a diversified, founder-aligned base.",
      zh: "每一家公司本身都具备投资价值 —— 合在一起，构成一个多元化、与创始人利益一致的基石。",
    },
    viewLabel: { en: "Company profile", zh: "公司详情" },
  },

  edge: {
    eyebrow: { en: "Why partner with us", zh: "为何与我们同行" },
    title: { en: "What sets this group apart.", zh: "这个集团的不同之处。" },
    items: [
      {
        title: { en: "A patient, aligned owner", zh: "耐心且一致的所有者" },
        text: {
          en: "We think in decades, not quarters — and we invest alongside, not just around, the companies we build.",
          zh: "我们以数十年、而非季度为尺度 —— 并与我们所建的公司共同投资，而非置身其外。",
        },
      },
      {
        title: { en: "An operator's insight", zh: "经营者的洞察" },
        text: {
          en: "We build and run these businesses — so capital comes with hands-on operating experience, not just a cheque.",
          zh: "这些业务由我们亲手建造与经营 —— 因此资本随附的是亲历一线的经营经验，而不只是一张支票。",
        },
      },
      {
        title: { en: "Transparent governance", zh: "透明的治理" },
        text: {
          en: "Clear structure, honest reporting and disciplined capital allocation across the whole group.",
          zh: "清晰的架构、诚实的汇报，以及贯穿整个集团的严谨资本配置。",
        },
      },
    ] as Edge[],
  },

  process: {
    eyebrow: { en: "How we work with investors", zh: "我们如何与投资者合作" },
    title: { en: "A clear path to partnership.", zh: "通往合作的清晰路径。" },
    lead: {
      en: "From first conversation to committed partner — considered, transparent, and on your timeline.",
      zh: "从初次交流到正式伙伴 —— 审慎、透明，并尊重你的节奏。",
    },
    steps: [
      {
        name: { en: "Introduce", zh: "初步接洽" },
        text: {
          en: "Reach out for the investor deck and an overview of the group and its companies.",
          zh: "与我们联系，索取投资资料，以及集团与旗下公司的整体概览。",
        },
      },
      {
        name: { en: "Deep dive", zh: "深入了解" },
        text: {
          en: "We share the detail — strategy, unit economics and the numbers behind each company — and answer your diligence.",
          zh: "我们分享细节 —— 战略、单位经济与每家公司背后的数据 —— 并回应你的尽职调查。",
        },
      },
      {
        name: { en: "Partner", zh: "达成合作" },
        text: {
          en: "We agree terms that fit both sides and build a long-term relationship — not just a transaction.",
          zh: "我们商定双方契合的条款，建立长期关系 —— 而不只是一笔交易。",
        },
      },
    ] as ProcessStep[],
  },

  cta: {
    title: { en: "Let's talk.", zh: "让我们聊聊。" },
    lead: {
      en: "For investment, co-investment or partnership enquiries, reach out to our investor relations team. We read every message and reply with intent.",
      zh: "如有投资、联合投资或合作垂询，欢迎联系我们的投资者关系团队。每一条讯息，我们都会认真阅读、用心回复。",
    },
    button: { en: "Contact investor relations", zh: "联系投资者关系" },
    emailLabel: { en: "Or email", zh: "或来信至" },
  },
};
