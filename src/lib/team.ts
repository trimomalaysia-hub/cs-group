/* ============================================================================
   TEAM CONTENT — bilingual (English + Simplified Chinese).
   All copy and the people roster for the /team page ("Our Team").

   ── ADDING A PHOTO — no code needed ────────────────────────────────────────
   Drop the photo into  public/team/  and name the file after that person's
   `id` below. For example:

       id: "kam-chin-seng"   →   public/team/kam-chin-seng.jpg

   .jpg  .jpeg  .png  .webp  .avif all work. The portrait then appears
   automatically — no editing of this file required. Until a photo exists the
   card shows a tasteful monogram frame instead.
   Recommended: a portrait crop, about 1000 × 1250 px (4:5), under ~500 KB.
   (Optional: set `photo: "/team/whatever.jpg"` to point at a specific file.)

   ── ADDING A PERSON ────────────────────────────────────────────────────────
   Copy one entry in `members` below, give it a new `id`, fill in `name`,
   `role` and `bio` in BOTH languages. Leave `name: ""` for a role that has not
   been announced yet — the card shows “To be announced / 即将公布”.
   ========================================================================== */
import type { Loc } from "./i18n-types";

export interface TeamMember {
  id: string;            // also the photo filename: public/team/<id>.jpg
  name: string;          // leave "" for a role that is not yet announced
  role: Loc;
  company?: string;      // brand name, e.g. "NEXJARVIS" (not translated)
  bio?: Loc;
  photo?: string;        // optional override, e.g. "/founder.png"
  linkedin?: string;
  featured?: boolean;    // one person only — rendered as the large lead card
}

export interface TeamValue {
  title: Loc;
  text: Loc;
}

export const teamContent = {
  hero: {
    eyebrow: { en: "Our Team", zh: "我们的团队" },
    title: {
      en: "The people behind the group.",
      zh: "集团背后的，是一群人。",
    },
    lead: {
      en: "CS Group is four companies, one bench. Operators, builders and hosts who work across social technology, enterprise AI, hospitality and property — held together by a single long-term vision.",
      zh: "CS Group 是四家企业，一支队伍。经营者、建造者与款待者，横跨社交科技、企业 AI、酒店与房地产 —— 由同一个长期愿景凝聚在一起。",
    },
    primaryCta: { en: "Join the team", zh: "加入我们" },
    secondaryCta: { en: "Explore the group", zh: "了解集团" },
  },

  leadership: {
    eyebrow: { en: "Leadership", zh: "领导团队" },
    title: { en: "Led by people who build.", zh: "由建造者带领。" },
    lead: {
      en: "A deliberately small bench. Each leader carries a real business, and every one of them is close to the work.",
      zh: "一支刻意精简的团队。每一位负责人都肩负着真实的业务，也始终贴近一线。",
    },
    tba: { en: "To be announced", zh: "即将公布" },
    note: {
      en: "More of the team is being introduced here — portraits and profiles are added as each appointment is confirmed.",
      zh: "更多团队成员将陆续在此介绍 —— 每一位任命确认后，照片与简介会同步更新。",
    },
    viewProfile: { en: "Read his philosophy", zh: "阅读他的经营哲学" },
  },

  /* How the team actually works day to day — distinct from the careers pitch. */
  values: {
    eyebrow: { en: "How we work", zh: "我们的工作方式" },
    title: { en: "One bench, four companies.", zh: "一支队伍，四家企业。" },
    lead: {
      en: "The group is diversified by design, but the people are not siloed. This is how the team operates.",
      zh: "集团的业务刻意多元，但人并不被割裂。这是团队真实的运作方式。",
    },
    items: [
      {
        title: { en: "Knowledge travels", zh: "知识在流动" },
        text: {
          en: "What one company learns, the others inherit. A hospitality insight sharpens a product decision; an AI workflow lifts a property team.",
          zh: "一家企业学到的，其他企业都会承接。酒店业的洞察能磨亮产品决策，AI 的流程能托起地产团队。",
        },
      },
      {
        title: { en: "Small teams, real ownership", zh: "小团队，真责任" },
        text: {
          en: "Teams stay deliberately small so decisions stay close to the work — real decisions, real consequences, real credit.",
          zh: "团队刻意保持精简，让决策贴近一线 —— 真实的决定、真实的结果、真实的功劳。",
        },
      },
      {
        title: { en: "Human first, AI-native", zh: "以人为本，AI 原生" },
        text: {
          en: "Every person here works alongside an AI workforce. The technology takes the repetition; the people keep the judgement and the warmth.",
          zh: "这里的每个人，都与 AI 员工并肩工作。让技术承担重复，让人保有判断力与温度。",
        },
      },
      {
        title: { en: "Built to be handed on", zh: "为传承而建" },
        text: {
          en: "We hire and mentor for the decade ahead, not the quarter. People are trained to outgrow the role they were hired into.",
          zh: "我们的招聘与培养着眼于未来十年，而非下一个季度。让每个人都能成长，超越当初被聘任的那个岗位。",
        },
      },
    ] as TeamValue[],
  },

  across: {
    eyebrow: { en: "Across the group", zh: "遍布集团" },
    title: { en: "The teams behind each company.", zh: "每家企业背后的团队。" },
    lead: {
      en: "Four operating companies, four distinct crafts — technology, artificial intelligence, hospitality and real estate.",
      zh: "四家运营中的企业，四种不同的专长 —— 科技、人工智能、酒店与房地产。",
    },
  },

  cta: {
    title: { en: "There's a seat for the right person.", zh: "总有一个位置，属于对的人。" },
    lead: {
      en: "We hire for ambition and character, not just vacancies. Tell us what you'd love to build.",
      zh: "我们看重抱负与品格，而不只是空缺。告诉我们，你想创造什么。",
    },
    button: { en: "Join the team", zh: "加入我们" },
    emailLabel: { en: "Or write to", zh: "或来信至" },
    subject: { en: "Talent introduction — CS Group", zh: "人才自荐 — CS Group" },
  },

  /* ------------------------------------------------------------------------
     THE ROSTER. Photo files go in public/team/ named after each `id`.
     ---------------------------------------------------------------------- */
  members: [
    {
      id: "kam-chin-seng",
      name: "Kam Chin Seng",
      role: { en: "Founder & Chairman", zh: "创始人兼董事长" },
      photo: "/founder.png",
      featured: true,
      bio: {
        en: "A second-generation entrepreneur, Kam Chin Seng founded CS Group and leads it across social technology, enterprise AI, hospitality and property. He builds companies the way others build institutions — slowly, deliberately, and to be handed on.",
        zh: "作为第二代企业家，Kam Chin Seng 创立了 CS Group，并带领集团横跨社交科技、企业 AI、酒店与房地产。他以建立百年基业的方式经营企业 —— 缓慢、审慎、可传承。",
      },
    },
    {
      id: "group-coo",
      name: "",
      role: { en: "Group Chief Operating Officer", zh: "集团首席运营官" },
      bio: {
        en: "Runs the group day to day — turning a long-term vision into the standards, rhythm and follow-through that four companies share.",
        zh: "统筹集团的日常运营 —— 把长期愿景，转化为四家企业共享的标准、节奏与执行力。",
      },
    },
    {
      id: "group-cto",
      name: "",
      role: { en: "Group Chief Technology Officer", zh: "集团首席技术官" },
      bio: {
        en: "Owns the technology and AI foundation the whole group runs on, so intelligence compounds instead of scattering across companies.",
        zh: "掌管全集团赖以运转的技术与 AI 底座，让智能不断复利，而非散落在各家企业之间。",
      },
    },
    {
      id: "trimo-product",
      name: "",
      role: { en: "Head of Product", zh: "产品负责人" },
      company: "TRIMO",
      bio: {
        en: "Shapes the one-to-one companionship experience — balancing efficiency with the warmth that makes people feel heard.",
        zh: "打磨「一对一情感陪伴」的体验 —— 在效率与温度之间取得平衡，让人真正被倾听。",
      },
    },
    {
      id: "nexjarvis-transformation",
      name: "",
      role: { en: "Head of AI Transformation", zh: "AI 转型负责人" },
      company: "NEXJARVIS",
      bio: {
        en: "Takes enterprises from AI-assisted to AI-native — assessment, roadmap, workflow automation and the AI workforce that follows.",
        zh: "带领企业从「AI 辅助」走向「AI 原生」—— 涵盖成熟度评估、转型路线图、流程自动化与随之落地的 AI 员工团队。",
      },
    },
    {
      id: "gemas-gm",
      name: "",
      role: { en: "General Manager", zh: "总经理" },
      company: "Gemas Golf Resort",
      bio: {
        en: "Keeps three decades of hospitality legacy in good hands — the course, the resort and every guest experience around them.",
        zh: "守护三十余年的款待传承 —— 球场、度假村，以及围绕其间的每一段宾客体验。",
      },
    },
    {
      id: "national6a-development",
      name: "",
      role: { en: "Head of Development", zh: "开发负责人" },
      company: "National 6A",
      bio: {
        en: "Leads projects from land to handover in Phnom Penh — pairing Malaysian standards of quality with deep local insight.",
        zh: "在金边主导从土地到交付的全周期项目 —— 以马来西亚的品质标准，结合深厚的本地洞察。",
      },
    },
  ] as TeamMember[],
};
