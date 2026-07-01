/* ============================================================================
   CAREERS CONTENT — bilingual (English + Simplified Chinese).
   All copy for the /careers page. Each translatable field is a Loc: { en, zh }.

   ── Adding culture photos ──────────────────────────────────────────────────
   Drop image files into  public/culture/  (e.g. team.jpg), then set that shot's
   `src` below to "/culture/team.jpg". Until a shot has a `src`, it shows a tasteful
   placeholder frame. Recommended: portrait shots ~1200×1500px; a "wide" shot ~1600×1000px.
   ========================================================================== */
import type { Loc } from "./i18n-types";

export interface CultureShot {
  caption: Loc;
  src?: string;              // e.g. "/culture/offsite.jpg" — leave unset for a placeholder frame
  span?: "wide";             // "wide" spans two columns (use for a landscape hero shot)
}

export interface CareerValue {
  title: Loc;
  text: Loc;
}

export interface HiringStep {
  name: Loc;
  text: Loc;
}

export const careersContent = {
  hero: {
    eyebrow: { en: "Careers", zh: "招贤纳士" },
    title: {
      en: "Build what endures — with people who care.",
      zh: "与在乎的人一起，缔造经得起时间考验的事业。",
    },
    lead: {
      en: "CS Group is a founder-led ecosystem spanning social technology, enterprise AI, hospitality and property. We grow by growing people — and we're always glad to meet talent with real ambition and warmth.",
      zh: "CS Group 是一个创始人主导的生态，横跨社交科技、企业 AI、酒店与房地产。我们因成就人而成长 —— 也始终乐于结识真正有抱负、有温度的人才。",
    },
    secondaryCta: { en: "Explore the group", zh: "了解集团" },
  },

  culture: {
    eyebrow: { en: "Life at CS Group", zh: "在 CS Group 的日常" },
    title: { en: "A place to do the best work of your life.", zh: "一个能让你做出人生最好作品的地方。" },
    lead: {
      en: "A small, ambitious team building across four industries. Here's a glimpse of the people and places behind it.",
      zh: "一支精悍而有抱负的团队，横跨四个行业。这里，让你一窥背后的人与场景。",
    },
    note: {
      en: "Photography coming soon — a real look inside the group.",
      zh: "实景照片即将上线 —— 带你走进集团的真实一面。",
    },
    shots: [
      { caption: { en: "Our Kuala Lumpur base", zh: "吉隆坡的大本营" }, span: "wide" },
      { caption: { en: "Building, together", zh: "并肩共建" } },
      { caption: { en: "Where ideas start", zh: "灵感的起点" } },
      { caption: { en: "Team offsites", zh: "团队团建" } },
      { caption: { en: "Celebrating the wins", zh: "一起庆祝成果" } },
      { caption: { en: "Mentorship & growth", zh: "指导与成长" } },
      { caption: { en: "On the green at Gemas", zh: "在 Gemas 的果岭上" }, span: "wide" },
      { caption: { en: "The next chapter", zh: "下一段旅程" } },
    ] as CultureShot[],
  },

  values: {
    eyebrow: { en: "Why join", zh: "为何加入" },
    title: { en: "What it feels like to build here.", zh: "在这里共建，是怎样的体验。" },
    lead: { en: "The things that make people stay — and grow.", zh: "让人们留下、并不断成长的理由。" },
    items: [
      {
        title: { en: "Room to grow", zh: "成长的空间" },
        text: {
          en: "A company should be a place that creates opportunity. We cultivate talent and give people the space to grow — and to glimpse the future.",
          zh: "企业应是创造机会的地方。我们培养人才，给人成长的空间 —— 也让人看见未来。",
        },
      },
      {
        title: { en: "Real ownership", zh: "真实的责任" },
        text: {
          en: "Small teams, real companies, real impact. Your work ships and matters — across social technology, AI, hospitality and property.",
          zh: "小团队、真业务、真影响。你的工作会落地、会被看见 —— 横跨社交科技、AI、酒店与房地产。",
        },
      },
      {
        title: { en: "People first, always", zh: "始终以人为本" },
        text: {
          en: "We build with technology, but never lose our warmth. Culture and care come before everything else.",
          zh: "我们用科技建造，却从不失去温度。文化与关怀，先于一切。",
        },
      },
      {
        title: { en: "Built to last", zh: "为长远而建" },
        text: {
          en: "We think in decades, not quarters. Grow with a group that plays the long game — and holds a high standard.",
          zh: "我们以数十年、而非季度为尺度。与一个着眼长远、坚持高标准的集团一起成长。",
        },
      },
    ] as CareerValue[],
  },

  across: {
    eyebrow: { en: "Across the group", zh: "在集团各处" },
    title: { en: "Careers across four industries.", zh: "横跨四大行业的职涯。" },
    lead: {
      en: "Talent grows across the whole ecosystem — technology, AI, hospitality and property. Explore where you might fit.",
      zh: "人才在整个生态中成长 —— 科技、AI、酒店与房地产。看看哪一处适合你。",
    },
  },

  hiring: {
    eyebrow: { en: "How to reach us", zh: "如何联系我们" },
    title: { en: "Always open to great people.", zh: "始终为优秀的人敞开大门。" },
    lead: {
      en: "No open role that fits right now? Reach out anyway — we hire for ambition and character, not just vacancies.",
      zh: "眼下没有正好合适的职位？也欢迎联系我们 —— 我们看重的是抱负与品格，而不只是空缺。",
    },
    steps: [
      {
        name: { en: "Tell us your story", zh: "讲讲你的故事" },
        text: {
          en: "Send a short note with your CV or portfolio — tell us what you'd love to build.",
          zh: "写一封短信，附上简历或作品集，告诉我们你想创造什么。",
        },
      },
      {
        name: { en: "We read every note", zh: "每封信都有人读" },
        text: {
          en: "No bots. A real person reads every introduction and replies with intent.",
          zh: "没有机器人。每一份自我介绍，都由真人阅读、用心回复。",
        },
      },
      {
        name: { en: "Let's talk", zh: "让我们聊聊" },
        text: {
          en: "If there's a fit — now or later — we'll reach out for a conversation.",
          zh: "只要合适 —— 无论现在还是将来 —— 我们都会主动联系你聊聊。",
        },
      },
    ] as HiringStep[],
  },

  cta: {
    title: { en: "Introduce yourself.", zh: "向我们介绍你自己。" },
    lead: {
      en: "Tell us who you are and what you'd love to build. A real person reads every message.",
      zh: "告诉我们你是谁、想创造什么。每一封信，都有真人阅读。",
    },
    button: { en: "Email our team", zh: "给我们写信" },
    emailLabel: { en: "Or write to", zh: "或来信至" },
    subject: { en: "Talent introduction — CS Group", zh: "人才自荐 — CS Group" },
  },
};
