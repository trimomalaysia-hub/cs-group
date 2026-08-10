/* ============================================================================
   CONTENT DATA — bilingual (English + Simplified Chinese).
   Each translatable field is a Loc: { en, zh }. Structural fields (id, index,
   brand, legalName, year, company) are language-neutral.
   In a component: const { lang } = useLanguage();  company.summary[lang]
   ============================================================================ */
import type { Loc } from "./i18n-types";

/* A flexible custom content block with its own heading + a grid of cards.
   Use for company-specific sections (product lines, AI agents, capabilities…). */
export interface DetailSection {
  eyebrow: Loc;
  title: Loc;
  intro?: Loc;
  cols?: 2 | 3;
  items: { name: Loc; text: Loc }[];
}

/* --- Visual blocks (all optional, per-company) ----------------------------
   These render as graphics rather than prose — used to break up text-heavy
   pages with a big-number band, a before/after table, a progression stepper
   and a scored readiness meter. */

/* Big-number impact band. `value` is display text (e.g. "+40%", "3.2×"). */
export interface StatBlock {
  eyebrow: Loc;
  title: Loc;
  intro?: Loc;
  items: { value: string; label: Loc }[];
}

/* Before → after transformation comparison table. */
export interface CompareBlock {
  eyebrow: Loc;
  title: Loc;
  intro?: Loc;
  beforeLabel: Loc;
  afterLabel: Loc;
  rows: { before: Loc; after: Loc }[];
}

/* Horizontal maturity / progression stepper (last step is highlighted). */
export interface JourneyBlock {
  eyebrow: Loc;
  title: Loc;
  intro?: Loc;
  steps: { name: Loc; text: Loc }[];
}

/* Scored readiness model — labelled bars (0–100) + one overall score. */
export interface ReadinessBlock {
  eyebrow: Loc;
  title: Loc;
  intro?: Loc;
  dimensions: { label: Loc; value: number }[];
  scoreValue: number;
  scoreCaption: Loc;
  scoreNote: Loc;
}

export interface CompanyDetail {
  tagline: Loc;
  intro: Loc;
  overview: Loc<string[]>;
  vision: Loc;
  // Everything below is optional — a company only fills in what applies.
  positioning?: Loc;
  quickFacts?: Loc<string[]>;
  facts?: { label: Loc; value: Loc }[];
  businessAreas?: { title: Loc; text: Loc }[];
  mission?: Loc;
  goals?: Loc<string[]>;
  projects?: { name: string; text: Loc }[];
  sections?: DetailSection[];
  // Visual blocks:
  journey?: JourneyBlock;
  compare?: CompareBlock;
  readiness?: ReadinessBlock;
  stats?: StatBlock;
}

export interface Company {
  id: string;             // URL slug: /companies/[id]
  index: string;          // editorial numbering
  legalName: string;      // registered entity (not translated)
  brand: string;          // brand name (not translated)
  category: Loc;
  sector: Loc;
  summary: Loc;
  description: Loc;
  highlights: Loc<string[]>;
  status: Loc;
  year: string;
  detail?: CompanyDetail;
}

const companiesRaw: Company[] = [
  {
    id: "nexxatech",
    index: "01",
    legalName: "Nexxatech Global Sdn. Bhd.",
    brand: "TRIMO",
    category: { en: "One-to-One Companionship Platform", zh: "一对一情感陪伴平台" },
    sector: { en: "Technology · Social", zh: "科技 · 社交" },
    summary: {
      en: "A one-to-one platform built around real emotional companionship — chat, voice and video that make people feel heard.",
      zh: "一个以「一对一情感陪伴」为核心的平台 —— 让聊天、语音与视频，都被倾听、被回应。",
    },
    description: {
      en: "Nexxatech Global is the creator of TRIMO — a one-to-one social platform built around genuine emotional companionship, connecting people through real-time chat, voice and video.",
      zh: "Nexxatech Global 是 TRIMO 的缔造者 —— 一个以「一对一情感陪伴」为核心的社交平台，通过实时聊天、语音与视频连接人与人。",
    },
    highlights: {
      en: ["One-to-one companionship", "Chat · Voice · Video", "Real, meaningful connection"],
      zh: ["一对一情感陪伴", "聊天 · 语音 · 视频", "真实而有意义的连接"],
    },
    status: { en: "Scaling", zh: "高速成长" },
    year: "2023",
    detail: {
      tagline: {
        en: "Every conversation, heard.",
        zh: "每一次沟通，都被听见。",
      },
      intro: {
        en: "TRIMO is the group's first core product — a one-to-one social platform built around genuine emotional companionship, launched in September 2023.",
        zh: "TRIMO 是集团推出的首个核心产品 —— 一个以「一对一情感陪伴」为核心的社交平台，于 2023 年 9 月正式上线。",
      },
      positioning: {
        en: "In a world with more ways to talk and less real connection, TRIMO brings interaction back to its most human form — being heard, being answered, being understood.",
        zh: "在一个沟通工具越来越多、真实连接却越来越少的时代，TRIMO 让互动回归最本质的样子 —— 被倾听、被回应、被理解。",
      },
      overview: {
        en: [
          "TRIMO is the group's first core product, launched in September 2023. It is built around a single idea — one-to-one emotional companionship — creating more genuine, human connection in a digital world.",
          "In today's fast-paced, hyper-digital society, the tools to communicate keep multiplying, yet real connection and companionship keep thinning. TRIMO was created for exactly this moment: a space where people can be listened to, be answered, and be understood — so every interaction means something.",
          "The platform connects people in real time through instant chat, voice and video. Unlike traditional social platforms built for broad reach and content exposure, TRIMO focuses on deep one-to-one interaction — returning to the most essential human need to communicate.",
          "Its model is built on genuine interaction. By delivering a high-quality communication experience, TRIMO turns real needs into stable usage and lasting habits — companionship that people return to.",
          "Core experiences span text chat, voice and video, enriched by virtual gifts that deepen engagement and emotional connection — giving the platform a foundation built to last.",
          "Since launch, TRIMO has continuously refined its experience and interaction mechanics, balancing efficiency with warmth. Its direction stays constant: to deepen emotional companionship into a long-term, sustainable platform, grounded entirely in the real needs of the people who use it.",
        ],
        zh: [
          "TRIMO 是集团推出的首个核心产品，于 2023 年 9 月正式上线。它以一个单纯的理念为核心 —— 一对一情感陪伴 —— 在数字世界中，建立更真实、有温度的人际连接。",
          "在当今快节奏、高度数字化的社会，沟通工具不断增加，人与人之间真实的交流与陪伴却逐渐减少。TRIMO 正是为此而生：一个可以被倾听、被回应、被理解的空间，让每一次沟通都更有意义。",
          "平台通过即时聊天、语音及视频，实现用户之间的实时连接。不同于以广泛连接或内容曝光为导向的传统社交平台，TRIMO 更专注于深度的一对一交流，让互动回归人与人之间最本质的沟通需求。",
          "在商业模式上，TRIMO 围绕用户真实的互动需求而建。通过提供高质量的沟通体验，平台将真实需求转化为稳定的使用场景与持续的参与，逐步形成长期的使用习惯。",
          "核心使用场景涵盖文字聊天、语音交流与视频互动，并结合虚拟礼物等形式，提升参与感与情感连接 —— 让平台的整体运作具备长期发展的基础。",
          "自上线以来，TRIMO 持续优化产品体验与互动机制，在「效率」与「温度」之间取得平衡。未来，平台将继续围绕「情感陪伴」的核心，深化功能与服务，打造一个长期可持续、以用户真实需求为基础的互动平台。",
        ],
      },
      quickFacts: {
        en: ["Launched Sept 2023", "One-to-one companionship", "Chat · Voice · Video"],
        zh: ["2023 年 9 月上线", "一对一情感陪伴", "聊天 · 语音 · 视频"],
      },
      facts: [
        { label: { en: "Launched", zh: "上线时间" }, value: { en: "September 2023", zh: "2023 年 9 月" } },
        { label: { en: "Focus", zh: "定位" }, value: { en: "One-to-one companionship", zh: "一对一情感陪伴" } },
        { label: { en: "Formats", zh: "互动形式" }, value: { en: "Chat · Voice · Video", zh: "聊天 · 语音 · 视频" } },
        { label: { en: "Headquarters", zh: "总部" }, value: { en: "Malaysia", zh: "马来西亚" } },
        { label: { en: "Founder", zh: "创始人" }, value: { en: "Kam Chin Seng", zh: "Kam Chin Seng" } },
      ],
      compare: {
        eyebrow: { en: "What makes it different", zh: "不同之处" },
        title: { en: "Not another social network.", zh: "不是又一个社交网络。" },
        intro: {
          en: "Where traditional platforms optimize for reach, TRIMO optimizes for connection.",
          zh: "传统平台追求广度，TRIMO 追求的是连接的深度。",
        },
        beforeLabel: { en: "Traditional social", zh: "传统社交" },
        afterLabel: { en: "TRIMO", zh: "TRIMO" },
        rows: [
          {
            before: { en: "Built for broad connection and content exposure.", zh: "以广泛连接与内容曝光为导向。" },
            after: { en: "Built for deep, one-to-one interaction.", zh: "专注深度的一对一交流。" },
          },
          {
            before: { en: "Measured in reach and followers.", zh: "以触达与粉丝数衡量。" },
            after: { en: "Measured in being heard and understood.", zh: "以「被倾听、被理解」衡量。" },
          },
          {
            before: { en: "More tools, less real connection.", zh: "工具越来越多，真实连接却越来越少。" },
            after: { en: "Fewer distractions, more genuine companionship.", zh: "更少干扰，更多真实的陪伴。" },
          },
        ],
      },
      businessAreas: [
        {
          title: { en: "Text Chat", zh: "文字聊天" },
          text: { en: "Real-time one-to-one conversation.", zh: "实时的一对一对话。" },
        },
        {
          title: { en: "Voice", zh: "语音交流" },
          text: { en: "Warmer, more present connection through the voice.", zh: "以声音传递更有温度、更临场的连接。" },
        },
        {
          title: { en: "Video", zh: "视频互动" },
          text: { en: "Face-to-face interaction that feels genuinely human.", zh: "面对面的互动，真实而有温度。" },
        },
        {
          title: { en: "Virtual Gifts", zh: "虚拟礼物" },
          text: { en: "Expressive moments that deepen engagement and emotional connection.", zh: "富有表达力的互动，深化参与感与情感连接。" },
        },
      ],
      vision: {
        en: "To deepen one-to-one emotional companionship into a lasting, sustainable platform — built entirely around people's real need to connect, be heard and belong.",
        zh: "持续深化「一对一情感陪伴」，打造一个长期可持续、完全以用户真实连接需求为基础的互动平台 —— 让每个人都能被倾听、被理解、有归属。",
      },
      mission: {
        en: "To balance efficiency with warmth — making every interaction not just fast, but truly felt.",
        zh: "在「效率」与「温度」之间取得平衡 —— 让每一次互动不只是高效，更有温度。",
      },
    },
  },
  {
    id: "nexflo",
    index: "02",
    legalName: "Nexflo Sdn Bhd",
    brand: "NEXJARVIS",
    category: { en: "AI Transformation Platform", zh: "AI 转型平台" },
    sector: { en: "Artificial Intelligence", zh: "人工智能" },
    summary: {
      en: "Helping enterprises become AI-native — with their own AI Brain, AI Workforce and AI Operating System.",
      zh: "助力企业迈向 AI 原生 —— 拥有专属的 AI 大脑、AI 员工与 AI 操作系统。",
    },
    description: {
      en: "Nexflo is the company behind NEXJARVIS — a Southeast Asian enterprise AI transformation platform that helps companies move from traditional operations to AI-native organizations.",
      zh: "Nexflo 是 NEXJARVIS 背后的公司 —— 一个面向东南亚的企业 AI 转型平台，帮助企业从传统运营迈向 AI 原生组织。",
    },
    highlights: {
      en: ["AI Brain & Workforce", "Workflow automation", "AI-native transformation"],
      zh: ["AI 大脑与员工", "流程自动化", "AI 原生转型"],
    },
    status: { en: "Scaling", zh: "高速成长" },
    year: "2026",
    detail: {
      tagline: {
        en: "Every Company Deserves Its Own Jarvis.",
        zh: "让每一家企业，都拥有属于自己的 Jarvis。",
      },
      intro: {
        en: "NEXJARVIS is an enterprise AI transformation platform — helping companies move from traditional operations to becoming AI-Native Enterprises.",
        zh: "NEXJARVIS 是一家企业 AI 转型平台公司，致力于帮助企业从传统运营模式迈向 AI 原生组织（AI-Native Enterprise）。",
      },
      positioning: {
        en: "We don't build AI tools. We build AI-powered organizations.",
        zh: "我们不打造 AI 工具，我们打造 AI 驱动的组织。",
      },
      overview: {
        en: [
          "We don't just provide AI tools. We help companies build their own AI Brain, AI Workforce and AI Operating System — making AI the core engine of growth, execution and decision-making.",
          "We guide enterprises through the full upgrade: Traditional → Digital → AI-Assisted → AI-Driven → AI-Native. Tomorrow's biggest competitive advantage isn't owning systems — it's owning AI that continuously learns, executes, analyses in real time and keeps optimising.",
          "Most companies don't lack systems — they already run ERP, CRM, HRMS, Excel, Workspace, Notion, Slack and Power BI. What they lack is real intelligence: information stays siloed, knowledge isn't retained, KPIs lack closed-loop management, tasks go unfollowed and decisions are slow. NEXJARVIS upgrades the human organization into Human Workforce + AI Workforce.",
          "Rather than adding yet another tool, NEXJARVIS gives every company an AI Brain that remembers, an AI Workforce that executes, and an AI Operating System that connects everything — so intelligence compounds instead of scattering across disconnected apps.",
          "Built for Southeast Asia's fast-growing enterprises, it turns fragmented systems and manual follow-up into a single, self-improving operating layer — the difference between a company that merely uses AI and one that truly runs on it.",
        ],
        zh: [
          "我们不只是提供 AI 工具。我们帮助企业建立属于自己的 AI 大脑（AI Brain）、AI 员工（AI Workforce）与 AI 操作系统（AI Operating System），让 AI 成为企业持续成长、执行与决策的核心驱动力。",
          "我们协助企业完成完整升级：传统企业 → 数字化企业 → AI 辅助 → AI 驱动 → AI 原生企业。未来企业最大的竞争优势，不再只是拥有系统，而是拥有能够持续学习、自动执行、实时分析与不断优化的 AI 能力。",
          "多数企业缺的并不是系统 —— 它们早已拥有 ERP、CRM、HRMS、Excel、Google Workspace、Notion、Slack 与 Power BI；但依然存在信息断层、知识无法沉淀、KPI 缺乏闭环、任务无人跟进、决策低效。NEXJARVIS 正是为此而生，将传统人力组织升级为「Human Workforce ＋ AI Workforce」。",
          "NEXJARVIS 要做的，不是再多加一个工具，而是为每一家企业配上一个会记忆的 AI 大脑、一支会执行的 AI 员工团队，以及一套把一切连接起来的 AI 操作系统 —— 让智能不断累积复利，而不是散落在彼此割裂的应用之中。",
          "面向东南亚快速成长的企业，NEXJARVIS 把割裂的系统与靠人力的跟进，转化为一个统一、能够自我进化的运营层 —— 这正是「只是使用 AI」与「真正以 AI 运转」之间的分水岭。",
        ],
      },
      quickFacts: {
        en: ["Enterprise AI Transformation", "AI Workforce", "Southeast Asia"],
        zh: ["企业 AI 转型", "AI 员工", "东南亚"],
      },
      facts: [
        { label: { en: "Founded", zh: "成立年份" }, value: { en: "2026", zh: "2026" } },
        { label: { en: "Headquarters", zh: "总部" }, value: { en: "Malaysia", zh: "马来西亚" } },
        {
          label: { en: "Industry", zh: "行业" },
          value: { en: "Enterprise AI Transformation", zh: "企业 AI 转型" },
        },
        { label: { en: "Focus", zh: "聚焦" }, value: { en: "Southeast Asia", zh: "东南亚" } },
        { label: { en: "Founder", zh: "创始人" }, value: { en: "Kam Chin Seng", zh: "Kam Chin Seng" } },
      ],
      vision: {
        en: "To become Southeast Asia's leading AI Transformation Platform — helping every company build its own AI Brain, AI Workforce and AI Operating System, and achieve truly AI-native operations.",
        zh: "成为东南亚领先的 AI 转型平台（AI Transformation Platform），帮助每一家企业建立属于自己的 AI Brain、AI Workforce 与 AI Operating System，实现真正意义上的 AI 原生化经营。",
      },
      mission: {
        en: "To help companies transform from traditional operations into AI-Native Enterprises — through AI readiness assessment, transformation strategy, workflow automation, AI agent deployment, an enterprise AI operating framework and continuous optimization — building lasting competitive advantage and continuously evolving organizational capability.",
        zh: "协助企业从传统运营模式，转型成为 AI 原生企业 —— 通过 AI 成熟度评估、转型战略、流程自动化、AI Agent 部署、企业 AI 运营框架与持续优化，建立长期竞争优势，实现组织能力的持续进化。",
      },
      journey: {
        eyebrow: { en: "Transformation path", zh: "转型路径" },
        title: { en: "From traditional to AI-native.", zh: "从传统企业，到 AI 原生企业。" },
        intro: {
          en: "We guide enterprises through every stage of the upgrade — not a single tool, but a complete evolution in how a company operates.",
          zh: "我们陪伴企业走过升级的每一个阶段 —— 不是加一个工具，而是一场企业运作方式的完整进化。",
        },
        steps: [
          {
            name: { en: "Traditional", zh: "传统" },
            text: { en: "Manual work, siloed systems, reactive decisions.", zh: "人工作业、系统割裂、被动决策。" },
          },
          {
            name: { en: "Digital", zh: "数字化" },
            text: { en: "Operations are digitised — but real intelligence is missing.", zh: "实现数字化，却仍缺乏真正的智能。" },
          },
          {
            name: { en: "AI-Assisted", zh: "AI 辅助" },
            text: { en: "AI augments people with insights and recommendations.", zh: "AI 辅助人力，提供洞察与建议。" },
          },
          {
            name: { en: "AI-Driven", zh: "AI 驱动" },
            text: { en: "AI automates core processes and drives measurable outcomes.", zh: "AI 自动执行核心流程，驱动可衡量的成果。" },
          },
          {
            name: { en: "AI-Native", zh: "AI 原生" },
            text: { en: "The organisation runs on AI — self-learning, self-optimising.", zh: "组织以 AI 运转 —— 自我学习、持续优化。" },
          },
        ],
      },
      compare: {
        eyebrow: { en: "Today vs tomorrow", zh: "现在与未来" },
        title: { en: "The business challenge, rewritten.", zh: "重写企业面对的挑战。" },
        intro: {
          en: "Most businesses are held back by fragmented systems and manual work. NEXJARVIS turns each drag into an advantage.",
          zh: "多数企业被割裂的系统与人工作业拖累。NEXJARVIS 把每一处阻力，都转化为优势。",
        },
        beforeLabel: { en: "Today — fragmented · manual · reactive", zh: "如今 —— 割裂 · 人工 · 被动" },
        afterLabel: { en: "With NEXJARVIS — intelligent · connected · proactive", zh: "有了 NEXJARVIS —— 智能 · 连接 · 主动" },
        rows: [
          {
            before: { en: "Costs rise with manual work and rework.", zh: "人工与返工，不断推高成本。" },
            after: { en: "AI cuts waste and lowers operating cost.", zh: "AI 减少浪费，降低运营成本。" },
          },
          {
            before: { en: "Hard to find and keep the right talent.", zh: "难以招到、也难以留住合适的人才。" },
            after: { en: "AI augments your people and closes skill gaps.", zh: "AI 赋能团队，弥补能力缺口。" },
          },
          {
            before: { en: "Disconnected data and siloed departments.", zh: "数据割裂，部门各自为政。" },
            after: { en: "Integrated platforms and one clean data layer.", zh: "平台整合，统一的数据底座。" },
          },
          {
            before: { en: "Limited visibility delays every decision.", zh: "信息有限，决策处处滞后。" },
            after: { en: "Real-time, predictive intelligence on hand.", zh: "实时预测洞察，随手可得。" },
          },
          {
            before: { en: "Repetitive tasks and manual approvals.", zh: "重复的任务与人工审批。" },
            after: { en: "Automated workflows that scale without limits.", zh: "自动化流程，无限扩展。" },
          },
        ],
      },
      readiness: {
        eyebrow: { en: "AIMRAM™", zh: "AIMRAM™" },
        title: { en: "AI readiness, measured.", zh: "让 AI 成熟度，可被衡量。" },
        intro: {
          en: "Our proprietary model scores an organisation across five dimensions — turning “are we ready for AI?” into a clear, actionable roadmap.",
          zh: "我们的专有模型从五个维度为企业打分 —— 把「我们准备好迎接 AI 了吗」，变成清晰、可执行的路线图。",
        },
        dimensions: [
          { label: { en: "Data infrastructure", zh: "数据基础" }, value: 78 },
          { label: { en: "AI application depth", zh: "AI 应用深度" }, value: 65 },
          { label: { en: "People & culture", zh: "人才与文化" }, value: 62 },
          { label: { en: "Process integration", zh: "流程整合" }, value: 70 },
          { label: { en: "Business impact", zh: "业务影响" }, value: 73 },
        ],
        scoreValue: 69,
        scoreCaption: { en: "Overall readiness", zh: "综合成熟度" },
        scoreNote: {
          en: "Developing — on the right path, with significant value still to unlock.",
          zh: "发展中 —— 方向正确，仍有巨大价值待释放。",
        },
      },
      stats: {
        eyebrow: { en: "Impact", zh: "成效" },
        title: { en: "Outcomes that compound.", zh: "可以复利的成效。" },
        intro: {
          en: "What an AI workforce delivers once it runs alongside your team.",
          zh: "当 AI 员工与团队并肩运转，会带来这些改变。",
        },
        items: [
          { value: "+40%", label: { en: "Productivity", zh: "生产力提升" } },
          { value: "−30%", label: { en: "Operating costs", zh: "运营成本下降" } },
          { value: "+25%", label: { en: "Revenue opportunities", zh: "营收机会增加" } },
          { value: "90%", label: { en: "Faster response", zh: "响应更快" } },
          { value: "2.5×", label: { en: "Customer satisfaction", zh: "客户满意度提升" } },
        ],
      },
      sections: [
        {
          eyebrow: { en: "Products", zh: "产品体系" },
          title: { en: "Our product system", zh: "我们的产品体系" },
          cols: 2,
          items: [
            {
              name: { en: "AIMRAM™ — AI Readiness Assessment", zh: "AIMRAM™ —— AI 成熟度评估" },
              text: {
                en: "An AI-maturity assessment framework spanning data infrastructure, process integration, people & culture, AI adoption and business impact — answering: where are we now, where should we go, and what's next?",
                zh: "企业 AI 成熟度评估框架，全面分析数据基础、流程整合、人才与文化、AI 采用与业务影响 —— 回答三个关键问题：我们现在在哪里？未来应走向哪里？下一步如何行动？",
              },
            },
            {
              name: { en: "AI Transformation Consulting", zh: "AI 转型咨询" },
              text: {
                en: "AI strategy, transformation roadmap, change management, organization adoption and governance — taking AI from concept to real operations.",
                zh: "协助制定 AI 战略、转型路线图、变革管理、组织采用与治理框架，推动 AI 从概念真正落地到组织运营。",
              },
            },
            {
              name: { en: "AI Operating System", zh: "AI 操作系统" },
              text: {
                en: "The enterprise AI hub — integrating CRM, HR, finance, marketing, operations and knowledge base into one Enterprise Intelligence Layer for full coordination of data, process and decisions.",
                zh: "企业 AI 中枢平台，整合并连接 CRM、HR、财务、市场、运营与知识库，建立统一的企业智能层（Enterprise Intelligence Layer），实现数据、流程与决策的全面协同。",
              },
            },
            {
              name: { en: "Jarvis AI Workforce", zh: "Jarvis AI Workforce" },
              text: {
                en: "A team of enterprise-dedicated AI digital employees across sales, marketing, customer service, operations and management.",
                zh: "打造企业专属的 AI 数字员工团队，覆盖销售、市场、客服、运营与管理。",
              },
            },
          ],
        },
        {
          eyebrow: { en: "AI Workforce", zh: "AI 员工" },
          title: { en: "Your AI digital workforce", zh: "企业专属 AI 数字员工" },
          intro: {
            en: "A team of AI agents that work alongside your people.",
            zh: "与你的团队并肩工作的 AI Agent 团队。",
          },
          cols: 2,
          items: [
            {
              name: { en: "Sales Agent", zh: "销售 Agent" },
              text: {
                en: "Lead generation, nurturing, automated follow-up and CRM updates.",
                zh: "客户开发、客户培育、自动跟进与 CRM 更新。",
              },
            },
            {
              name: { en: "Marketing Agent", zh: "市场 Agent" },
              text: {
                en: "Content generation, ad analysis, campaign optimization and ROI monitoring.",
                zh: "内容生成、广告分析、投放优化与 ROI 监测。",
              },
            },
            {
              name: { en: "Customer Service Agent", zh: "客服 Agent" },
              text: {
                en: "24/7 support, automated FAQ replies, knowledge-base management and ticketing.",
                zh: "24/7 客服支持、FAQ 自动回复、知识库管理与工单处理。",
              },
            },
            {
              name: { en: "Operations Agent", zh: "运营 Agent" },
              text: {
                en: "Process automation, KPI monitoring, anomaly alerts and task tracking.",
                zh: "流程自动化、KPI 监控、异常预警与任务追踪。",
              },
            },
            {
              name: { en: "Management Agent", zh: "管理 Agent" },
              text: {
                en: "Business analysis, forecasting, report generation, decision support and dashboards.",
                zh: "经营分析、预测模型、报告生成、决策辅助与管理仪表板。",
              },
            },
          ],
        },
        {
          eyebrow: { en: "Capabilities", zh: "核心能力" },
          title: { en: "Jarvis's three core capabilities", zh: "Jarvis 的三大核心能力" },
          cols: 3,
          items: [
            {
              name: { en: "Auto Execution", zh: "Auto Execution · 自动执行" },
              text: {
                en: "Automated workflows that drive tasks across departments — from creation to completion, in continuous motion.",
                zh: "自动执行工作流程，跨部门协同推动任务，从建立到完成，持续运转。",
              },
            },
            {
              name: { en: "Relentless Follow-Up", zh: "Relentless Follow-Up · 持续追踪" },
              text: {
                en: "Never forgets, never delays, never drops — automatic reminders, chasing and escalation keep the organization running at high efficiency.",
                zh: "不会遗忘、不会延迟、不会中断 —— 自动提醒、自动催办、自动升级，让组织保持高效运作。",
              },
            },
            {
              name: { en: "Instant Intelligence", zh: "Instant Intelligence · 即时洞察" },
              text: {
                en: "Key answers in seconds — why profit dropped, which ad earns most, which KPIs are off, which team is least efficient — turning decisions from experience-driven to intelligence-driven.",
                zh: "几秒内获得关键答案：为什么利润下降？哪个广告最赚钱？哪些 KPI 异常？哪个团队效率最低？让决策从经验驱动升级为智能驱动。",
              },
            },
          ],
        },
      ],
    },
  },
  {
    id: "gemas",
    index: "03",
    legalName: "Gemas Golf Resort Sdn Bhd",
    brand: "Gemas Golf Resort",
    category: { en: "Hospitality & Golf Resort", zh: "酒店与高尔夫度假村" },
    sector: { en: "Hospitality · Leisure", zh: "酒店 · 休闲" },
    summary: {
      en: "A golf and hospitality destination with over three decades of legacy — golf, resort, events and lifestyle in one place.",
      zh: "拥有三十余年传承的高尔夫与酒店目的地 —— 高尔夫、度假、活动与生活方式，汇聚于一处。",
    },
    description: {
      en: "Established in 1991 and now led by second-generation entrepreneur Kam Chin Seng, Gemas Golf Resort is the group's hospitality flagship — a golf and lifestyle destination where landscape, sport and service meet, anchoring the group's presence in premium experiential hospitality.",
      zh: "Gemas 高尔夫度假村成立于 1991 年，如今由第二代企业家 Kam Chin Seng 领导，是集团的酒店旗舰 —— 一处将自然景观、运动与服务融为一体的高尔夫与生活方式目的地，奠定集团在高端体验式酒店领域的布局。",
    },
    highlights: {
      en: ["Championship course", "Resort & events", "Premium guest experience"],
      zh: ["锦标级球场", "度假与活动", "高端宾客体验"],
    },
    status: { en: "Operating", zh: "运营中" },
    year: "1991",
    detail: {
      tagline: {
        en: "Where heritage meets hospitality.",
        zh: "让传承，遇见卓越款待。",
      },
      intro: {
        en: "Established in 1991, Gemas Golf Resort is a lifestyle and hospitality destination with over three decades of experience delivering premium golf, resort and recreational experiences.",
        zh: "Gemas 高尔夫度假村成立于 1991 年，是一处拥有三十余年经验的生活方式与酒店款待目的地，专注于呈现高端的高尔夫、度假与休闲体验。",
      },
      positioning: {
        en: "A legacy built across generations, delivering experiences beyond golf.",
        zh: "跨越两代人的传承，缔造超越高尔夫的体验。",
      },
      overview: {
        en: [
          "Established in 1991, Gemas Golf Resort is a lifestyle and hospitality destination with over three decades of experience delivering premium golf, resort and recreational experiences. Founded by the first generation of the family and now led by second-generation entrepreneur Kam Chin Seng, the resort reflects a legacy of vision, continuity and long-term value creation.",
          "Combining leisure, accommodation, corporate activities and nature-inspired environments, Gemas serves as a destination for both personal retreats and business gatherings.",
          "Set within nature-inspired surroundings, the resort brings together a golf and country club, resort accommodation, dining and wellness, and versatile spaces for corporate and private events — all within a single destination.",
          "Whether for a weekend escape, a corporate retreat or a family day out, Gemas is designed around memorable experiences that blend recreation, hospitality and lifestyle — creating a destination that reaches well beyond the fairway.",
        ],
        zh: [
          "Gemas 高尔夫度假村成立于 1991 年，是一处拥有三十余年经验的生活方式与酒店款待目的地，专注于呈现高端的高尔夫、度假与休闲体验。度假村由家族第一代创立，如今由第二代企业家 Kam Chin Seng 领导，承载着远见、传承与长期价值创造的家族传统。",
          "将休闲、住宿、企业活动与自然环境融为一体，Gemas 既是个人度假的去处，也是商务聚会的目的地。",
          "置身于自然环境之中，度假村将高尔夫与乡村俱乐部、度假住宿、餐饮与健康设施，以及适用于企业与私人活动的多功能空间汇聚一处，集于同一个目的地。",
          "无论是周末度假、企业静修，还是家庭出游，Gemas 都围绕难忘的体验而设计，将休闲、款待与生活方式融为一体 —— 打造一处远不止于球场的目的地。",
        ],
      },
      quickFacts: {
        en: ["Established 1991", "30+ years of legacy", "Golf · Resort · Events"],
        zh: ["成立于 1991", "三十余年传承", "高尔夫 · 度假 · 活动"],
      },
      facts: [
        { label: { en: "Established", zh: "成立年份" }, value: { en: "1991", zh: "1991" } },
        { label: { en: "Location", zh: "所在地" }, value: { en: "Gemas, Malaysia", zh: "马来西亚 · 金马士" } },
        { label: { en: "Industry", zh: "行业" }, value: { en: "Hospitality & Leisure", zh: "酒店与休闲" } },
        { label: { en: "Offering", zh: "主营" }, value: { en: "Golf · Resort · Events", zh: "高尔夫 · 度假 · 活动" } },
        { label: { en: "Leadership", zh: "领导者" }, value: { en: "Kam Chin Seng (2nd generation)", zh: "Kam Chin Seng（第二代）" } },
      ],
      businessAreas: [
        {
          title: { en: "Golf & Country Club", zh: "高尔夫与乡村俱乐部" },
          text: {
            en: "An 18-hole course for both leisure and competitive play, with course operations and management, membership programmes, corporate golf events and tournaments, and recreational and social activities.",
            zh: "18 洞球场，兼顾休闲与竞技；涵盖球场运营与管理、会籍计划与打球体验、企业高尔夫活动与赛事，以及休闲与社交活动。",
          },
        },
        {
          title: { en: "Resort & Hospitality", zh: "度假与酒店" },
          text: {
            en: "Resort accommodation and guest services, food and beverage experiences, leisure and wellness facilities, and weekend getaways and staycations.",
            zh: "度假住宿与宾客服务、餐饮体验、休闲与健康设施，以及周末度假与本地度假体验。",
          },
        },
        {
          title: { en: "Corporate Events & Retreats", zh: "企业活动与静修" },
          text: {
            en: "Team-building programmes, corporate retreats and seminars, conferences and business gatherings, and private functions and celebrations.",
            zh: "团队建设项目、企业静修与研讨会、会议与商务聚会，以及私人宴会与庆典。",
          },
        },
        {
          title: { en: "Lifestyle & Destination Experiences", zh: "生活方式与目的地体验" },
          text: {
            en: "Nature-inspired leisure activities, community engagement programmes, family-oriented recreation and sustainable tourism initiatives.",
            zh: "自然主题的休闲活动、社区参与项目、亲子休闲体验，以及可持续旅游倡议。",
          },
        },
      ],
      vision: {
        en: "To become a leading integrated golf and hospitality destination, creating memorable experiences that combine recreation, wellness, business connectivity and lifestyle excellence.",
        zh: "成为领先的高尔夫与酒店一体化目的地，创造将休闲、健康、商务连接与卓越生活方式融为一体的难忘体验。",
      },
    },
  },
  {
    id: "national6a",
    index: "04",
    legalName: "National 6A Investment Co., Ltd.",
    brand: "National 6A",
    category: { en: "Property Development", zh: "房地产开发" },
    sector: { en: "Real Estate · Development", zh: "房地产 · 开发" },
    summary: {
      en: "A Malaysian-backed property developer building high-quality projects across Cambodia's fast-growing market.",
      zh: "马来西亚背景的柬埔寨房地产开发商，在快速发展的柬埔寨市场打造高品质项目。",
    },
    description: {
      en: "National 6A is a Phnom Penh–based, Malaysian-founded property developer — an integrated platform spanning development, investment management, sales and property management across Cambodia's fast-growing real-estate market.",
      zh: "National 6A 是一家总部位于金边、由马来西亚人创立的房地产开发商 —— 在快速发展的柬埔寨房地产市场中，构建涵盖开发、投资管理、销售与物业管理的一体化平台。",
    },
    highlights: {
      en: ["Phnom Penh market", "Residential & mixed-use", "End-to-end development"],
      zh: ["深耕金边市场", "住宅与综合体", "全周期开发"],
    },
    status: { en: "Operating", zh: "运营中" },
    year: "2012",
    detail: {
      tagline: {
        en: "International standards, local expertise.",
        zh: "国际标准，本地专长。",
      },
      intro: {
        en: "National 6A Investment Co., Ltd. is a Malaysian real-estate developer based in Phnom Penh, Cambodia, led by Kam Chin Seng — pairing international standards with deep local expertise.",
        zh: "National 6A Investment Co., Ltd. 是一家总部位于柬埔寨金边的马来西亚房地产开发商，由 Kam Chin Seng 领导 —— 将国际标准与深厚的本地专长相结合。",
      },
      positioning: {
        en: "Strongly settled in Cambodia's real-estate landscape — an inter-cultural team and exclusive local partnerships, delivering strategic locations, aesthetic design and quality service.",
        zh: "深深扎根于柬埔寨房地产版图 —— 以跨文化团队与独家本地合作，交付战略选址、美学设计与优质服务。",
      },
      overview: {
        en: [
          "National 6A Investment Co., Ltd. is a Malaysian real-estate developer based in Phnom Penh, Cambodia, led by Mr. Kam Chin Seng. Strongly settled in the local landscape, it brings together an inter-cultural mix of Western and Asian management and exclusive leading partnerships across Cambodia — pairing international standards with local expertise.",
          "Cambodia's positive economic outlook, political stability and investor-friendly policies — reinforced by ASEAN Economic Community (AEC) integration — continue to open one of the region's most compelling investment landscapes, with high returns for those who move early.",
          "National 6A develops projects defined by strategic locations, aesthetic design and quality service. Each is built to appeal to both the investor and owner-occupier markets while generating a profitable return on investment. Across its portfolio, the company's projects carry a combined Gross Development Value (GDV) of US$110 million.",
        ],
        zh: [
          "National 6A Investment Co., Ltd. 是一家总部位于柬埔寨金边的马来西亚房地产开发商，由 Kam Chin Seng 先生领导。公司深深扎根于当地房地产版图，汇聚西方与亚洲相融的跨文化管理团队，并在柬埔寨各地建立独家领先的合作关系 —— 将国际标准与本地专长融为一体。",
          "柬埔寨积极的经济前景、稳定的政局与友好的投资政策，加之东盟经济共同体（AEC）一体化的推动，持续开启区域内最具吸引力的投资版图之一，为先行者带来可观回报。",
          "National 6A 以战略选址、美学设计与优质服务打造每一个项目，兼顾投资者与自住业主两个市场，同时创造可观的投资回报。纵观其项目组合，公司各项目的开发总值（GDV）合计达 1.1 亿美元。",
        ],
      },
      quickFacts: {
        en: ["Est. 2012", "Phnom Penh, Cambodia", "US$110M combined GDV"],
        zh: ["成立于 2012", "柬埔寨金边", "开发总值 1.1 亿美元"],
      },
      facts: [
        { label: { en: "Founded", zh: "成立年份" }, value: { en: "2012", zh: "2012" } },
        { label: { en: "Headquarters", zh: "总部" }, value: { en: "Phnom Penh, Cambodia", zh: "柬埔寨金边" } },
        { label: { en: "Employees", zh: "员工规模" }, value: { en: "11–50", zh: "11–50 人" } },
        { label: { en: "Combined GDV", zh: "开发总值" }, value: { en: "US$110 million+", zh: "1.1 亿美元以上" } },
        { label: { en: "Services", zh: "主营服务" }, value: { en: "Development management & property development", zh: "开发管理与房地产开发" } },
        { label: { en: "Managing Director", zh: "董事总经理" }, value: { en: "Kam Chin Seng", zh: "Kam Chin Seng" } },
      ],
      businessAreas: [
        {
          title: { en: "Property Development", zh: "房地产开发" },
          text: {
            en: "Developing residential, apartment and integrated projects that hold both living and investment value.",
            zh: "专注住宅、公寓及综合项目开发，打造兼具居住与投资价值的地产产品。",
          },
        },
        {
          title: { en: "Investment & Development Management", zh: "投资与开发管理" },
          text: {
            en: "Project screening, development planning and full-lifecycle management that maximizes value for partners.",
            zh: "为合作伙伴提供项目筛选、开发策划及全周期管理服务，实现项目价值最大化。",
          },
        },
        {
          title: { en: "Sales & Marketing", zh: "销售与营销" },
          text: {
            en: "Systematic marketing strategy and local market insight that drive sales performance and brand influence.",
            zh: "通过系统化营销策略与本地市场洞察，推动项目销售表现与品牌影响力。",
          },
        },
        {
          title: { en: "Property Management", zh: "物业管理" },
          text: {
            en: "Complete operations and management — security, maintenance and leasing support — that grow long-term asset value.",
            zh: "提供完善的运营与管理服务，包括安全、维护及租赁支持，提升资产的长期价值。",
          },
        },
      ],
      vision: {
        en: "To shape Cambodia's urban future — building sustainable, well-designed communities that endure for generations.",
        zh: "塑造柬埔寨的城市未来 —— 打造可持续、精心设计、世代传承的社区。",
      },
      mission: {
        en: "To develop and manage real estate that pairs Malaysian standards of quality with deep local insight, creating lasting value for residents, partners and investors across Phnom Penh and beyond.",
        zh: "以马来西亚的品质标准结合对本地的深刻洞察，开发并管理房地产，为金边乃至更广区域的住户、合作伙伴与投资者创造持久价值。",
      },
      sections: [
        {
          eyebrow: { en: "Why National 6A", zh: "公司优势" },
          title: { en: "Competitive advantages.", zh: "公司优势。" },
          cols: 2,
          items: [
            {
              name: { en: "A cross-border team", zh: "跨国背景团队" },
              text: {
                en: "Malaysian management experience combined with deep, on-the-ground Cambodian resources.",
                zh: "结合马来西亚的管理经验与柬埔寨的本地资源。",
              },
            },
            {
              name: { en: "Full value-chain capability", zh: "全产业链能力" },
              text: {
                en: "Development, investment, sales and operations — delivered end to end, in-house.",
                zh: "覆盖开发、投资、销售与运营，全流程一体化交付。",
              },
            },
            {
              name: { en: "A strategic partner network", zh: "战略合作网络" },
              text: {
                en: "Long-term relationships with leading local and international developers and investment institutions.",
                zh: "与本地及国际领先的开发商、投资机构建立长期合作关系。",
              },
            },
            {
              name: { en: "Deep market focus", zh: "市场深耕能力" },
              text: {
                en: "Concentrated on Phnom Penh's core districts, continually uncovering high-potential projects.",
                zh: "专注金边核心区域，持续挖掘高潜力项目。",
              },
            },
          ],
        },
      ],
      projects: [
        {
          name: "Galaxy Residence",
          text: {
            en: "A contemporary riverside condominium — 9 storeys plus a rooftop, with 40 condominiums, 4 penthouses and 9 shophouses. River-view units, freehold title deed and a 2-year rental guarantee. GDV: US$10 million.",
            zh: "一座现代化的滨河公寓 —— 9 层加顶层，含 40 套公寓、4 套顶层豪宅与 9 间商铺。河景单位、永久产权地契，并提供 2 年租金保证。开发总值：1,000 万美元。",
          },
        },
        {
          name: "240 Phnom Penh",
          text: {
            en: "A high-end condominium of 7 storeys and 42 apartments, built to United States safety guidelines. Amenities include 2 bars, a restaurant, boutiques, a rooftop sports centre and a swimming pool. GDV: US$20 million.",
            zh: "一座高端公寓，7 层、42 套单位，按美国安全标准建造。配套包括 2 间酒吧、餐厅、精品店、顶层运动中心与游泳池。开发总值：2,000 万美元。",
          },
        },
        {
          name: "The Peninsula Private Residences",
          text: {
            en: "A 25-floor landmark of 158 condominium and retail units (commenced 2018, completed 2020). Developed through a joint venture with Cambodia's Sun & Moon Group and Chinese investment partners, it blends residence with hotel service in a “Homespitality” concept. GDV: US$40 million.",
            zh: "一座 25 层的地标建筑，含 158 套公寓与商业单位（2018 年动工，2020 年落成）。由 National 6A 联合柬埔寨 Sun & Moon Group 及中国投资伙伴共同开发，融合住宅与酒店服务，打造「Homespitality」概念。开发总值：4,000 万美元。",
          },
        },
        {
          name: "Angkor Grace",
          text: {
            en: "A contemporary resort development in Siem Reap — 320 units with pool and garden views and a social clubhouse, set across a 2.5-hectare site. GDV: US$40 million.",
            zh: "位于暹粒的现代化度假项目 —— 320 套单位，配泳池与花园景观及社交会所，坐落于 2.5 公顷的地块之上。开发总值：4,000 万美元。",
          },
        },
      ],
    },
  },
];

/* Display order of the four companies — edit this list to reorder them
   everywhere (home Companies section + footer). The 01–04 numbers auto-update. */
const COMPANY_ORDER = ["nexflo", "gemas", "nexxatech", "national6a"];
export const companies: Company[] = [...companiesRaw]
  .sort((a, b) => COMPANY_ORDER.indexOf(a.id) - COMPANY_ORDER.indexOf(b.id))
  .map((c, i) => ({ ...c, index: String(i + 1).padStart(2, "0") }));

/* --- Vision principles ---------------------------------------------------- */
export interface Principle {
  index: string;
  title: Loc;
  text: Loc;
}

export const principles: Principle[] = [
  {
    index: "I",
    title: { en: "Long-term Vision", zh: "长期愿景" },
    text: {
      en: "We build for decades, not quarters — compounding value patiently across companies and cycles.",
      zh: "我们以数十年、而非数个季度为尺度 —— 跨越企业与周期，耐心地让价值复利。",
    },
  },
  {
    index: "II",
    title: { en: "Innovation & Technology", zh: "创新与科技" },
    text: {
      en: "We treat technology as leverage, backing ventures that reshape how people and enterprises operate.",
      zh: "我们视科技为杠杆，支持那些重塑人与企业运作方式的事业。",
    },
  },
  {
    index: "III",
    title: { en: "Community Building", zh: "社区共建" },
    text: {
      en: "We grow companies that strengthen the communities they serve — impact and enterprise advancing together.",
      zh: "我们培育能让所服务社区更强大的企业 —— 让影响力与商业并肩前行。",
    },
  },
  {
    index: "IV",
    title: { en: "Investment Perspective", zh: "投资视角" },
    text: {
      en: "We allocate capital with discipline and conviction, holding for fundamental, durable returns.",
      zh: "我们以纪律与信念配置资本，为基本面扎实、持久的回报而长期持有。",
    },
  },
];

/* --- Portfolio overview --------------------------------------------------- */
export interface PortfolioPillar {
  label: Loc;
  value: Loc;
  detail: Loc;
}

export const portfolioStats: PortfolioPillar[] = [
  {
    label: { en: "Operating companies", zh: "运营中的企业" },
    value: { en: "4", zh: "4" },
    detail: { en: "Across four distinct sectors", zh: "横跨四个不同领域" },
  },
  {
    label: { en: "Core sectors", zh: "核心领域" },
    value: { en: "Tech · AI · Hospitality · Real Estate", zh: "科技 · AI · 酒店 · 地产" },
    detail: { en: "A deliberately diversified base", zh: "刻意多元化的基础" },
  },
  {
    label: { en: "Horizon", zh: "时间尺度" },
    value: { en: "Long-term", zh: "长期" },
    detail: { en: "Patient, founder-led ownership", zh: "耐心的、创始人主导的持有" },
  },
  {
    label: { en: "Base", zh: "根据地" },
    value: { en: "Malaysia", zh: "马来西亚" },
    detail: { en: "With a global outlook", zh: "怀抱全球视野" },
  },
];

/* --- Group scale, as counted figures -------------------------------------
   Rendered by <Stats> with a count-up on scroll. `value` must stay a plain
   number so it can animate; put any unit in `suffix`.
   NOTE: verify these against the owner's real figures before launch. */
export interface GroupStat {
  value: number;
  suffix?: string;
  label: Loc;
  detail: Loc;
}

export const groupStats: GroupStat[] = [
  {
    value: 4,
    label: { en: "Operating companies", zh: "运营中的企业" },
    detail: { en: "Technology, AI, hospitality and real estate", zh: "科技、AI、酒店与地产" },
  },
  {
    value: 34,
    suffix: "+",
    label: { en: "Years of operating history", zh: "年运营积淀" },
    detail: { en: "The earliest business dates to 1991", zh: "最早的业务可追溯至 1991 年" },
  },
  {
    value: 4,
    label: { en: "Core sectors", zh: "核心领域" },
    detail: { en: "Deliberately spread across different cycles", zh: "刻意分散于不同周期的行业" },
  },
  {
    value: 2,
    label: { en: "Markets", zh: "运营市场" },
    detail: { en: "Malaysia and Cambodia, with a global outlook", zh: "马来西亚与柬埔寨，怀抱全球视野" },
  },
];

export interface Sector {
  name: Loc;
  text: Loc;
  company: string;
}

export const sectors: Sector[] = [
  {
    name: { en: "Social Technology", zh: "社交科技" },
    text: {
      en: "Consumer social platforms that connect people through real-time, immersive experiences.",
      zh: "通过实时、沉浸式体验连接人与人的消费级社交平台。",
    },
    company: "TRIMO",
  },
  {
    name: { en: "Artificial Intelligence", zh: "人工智能" },
    text: {
      en: "Enterprise intelligence that compounds in value as organisations scale.",
      zh: "随组织规模扩大而价值复利的企业智能。",
    },
    company: "NEXJARVIS",
  },
  {
    name: { en: "Hospitality & Leisure", zh: "酒店与休闲" },
    text: {
      en: "Experiential, destination assets built around landscape and service.",
      zh: "围绕自然景观与服务打造的体验式目的地资产。",
    },
    company: "Gemas Golf Resort",
  },
  {
    name: { en: "Real Estate & Development", zh: "房地产与开发" },
    text: {
      en: "Tangible, long-horizon assets anchored in community and discipline.",
      zh: "扎根社区与纪律的、可长期持有的实体资产。",
    },
    company: "National 6A",
  },
];

/* --- Timeline -------------------------------------------------------------
   The founder's journey, told as milestones. `year` is a Loc because the last
   entry is a word ("Today" / "至今"), not a number — so use `id` for React keys.
   `tag` is optional: a place or a brand that anchors that chapter.
   `quote` is the closing maxim, rendered as the pull line of each entry. */
export interface Milestone {
  id: string;
  year: Loc;
  title: Loc;
  tag?: Loc;
  text: Loc;
  quote: Loc;
}

export const timeline: Milestone[] = [
  {
    id: "cambodia",
    year: { en: "2012", zh: "2012" },
    title: {
      en: "The First Vision Beyond Borders",
      zh: "跨出国界的第一个远见",
    },
    tag: { en: "Cambodia", zh: "柬埔寨" },
    text: {
      en: "What began as a venture in Cambodia became the first step towards building something much larger than a single business. Through property development and long-term investments, Kam Chin Seng established not only a company, but a philosophy — building with patience, discipline, and a long-term mindset.",
      zh: "始于柬埔寨的一次创业，成为通往更宏大格局的第一步 —— 它所建立的，远不止一门生意。通过房地产开发与长期投资，Kam Chin Seng 立下的不只是一家公司，更是一套理念：以耐心、纪律与长期主义去建造。",
    },
    quote: {
      en: "Every ecosystem begins with a single conviction.",
      zh: "每一个生态，都始于一个坚定的信念。",
    },
  },
  {
    id: "legacy",
    year: { en: "2013", zh: "2013" },
    title: {
      en: "When Legacy Became Responsibility",
      zh: "当传承成为责任",
    },
    text: {
      en: "A turning point in the family placed a legacy built over decades in his hands. His focus remained on expanding the businesses in Cambodia — but the resolve to one day return and lead the next generation had already taken root.",
      zh: "家族的一次转折，将数十年积累的基业交到了他手上。彼时重心仍在柬埔寨的业务拓展，但有朝一日回来、带领下一代的念头，已经生根。",
    },
    quote: {
      en: "A legacy isn't inherited. It's earned.",
      zh: "传承不是继承而来的，是挣来的。",
    },
  },
  {
    id: "homecoming",
    year: { en: "2021", zh: "2021" },
    title: {
      en: "Returning Home. Building Forward.",
      zh: "归来，向前",
    },
    text: {
      en: "Following the pandemic, Kam Chin Seng returned to Gemas Golf Resort — not simply to manage a business, but to reimagine its future. What followed was the beginning of a long-term transformation that balanced heritage with innovation.",
      zh: "疫情之后，Kam Chin Seng 回到 Gemas 高尔夫度假村 —— 不只是为了经营一门生意，而是要重新想象它的未来。随之开启的，是一场在传承与创新之间取得平衡的长期变革。",
    },
    quote: {
      en: "Respect the past. Build the future.",
      zh: "敬重过去，建造未来。",
    },
  },
  {
    id: "digital",
    year: { en: "2023", zh: "2023" },
    title: {
      en: "Building the Digital Economy",
      zh: "构建数字经济",
    },
    tag: { en: "TRIMO", zh: "TRIMO" },
    text: {
      en: "The group's expansion into digital platforms marked a new chapter. TRIMO introduced a scalable business model centred on meaningful human connection, extending CS Group beyond traditional industries.",
      zh: "集团向数字平台的拓展，翻开了新的一页。TRIMO 以「有意义的人际连接」为核心，带来了一个可规模化的商业模式，让 CS Group 跨出传统行业的边界。",
    },
    quote: {
      en: "Every generation builds on different platforms.",
      zh: "每一代人，都在不同的平台上建造。",
    },
  },
  {
    id: "reimagined",
    year: { en: "2025", zh: "2025" },
    title: {
      en: "A Legacy Reimagined",
      zh: "重塑传承",
    },
    text: {
      en: "Gemas Golf Resort entered its most significant transformation in decades. From operational excellence to a complete brand repositioning, the resort evolved into a modern destination while preserving the values on which it was founded.",
      zh: "Gemas 高尔夫度假村迎来数十年来最重要的一次蜕变。从运营的精进，到品牌的全面重塑，度假村在守住立身之本的同时，成长为一处现代的目的地。",
    },
    quote: {
      en: "Transformation begins with courage, not construction.",
      zh: "变革始于勇气，而非工程。",
    },
  },
  {
    id: "intelligence",
    year: { en: "2026", zh: "2026" },
    title: {
      en: "Intelligence Becomes Infrastructure",
      zh: "让智能成为基础设施",
    },
    tag: { en: "NEXJARVIS", zh: "NEXJARVIS" },
    text: {
      en: "NEXJARVIS represents more than an AI platform. It reflects the belief that every organisation deserves an intelligent operating system — where people and AI work together to build better businesses.",
      zh: "NEXJARVIS 不只是一个 AI 平台。它承载着一个信念：每一家企业，都值得拥有属于自己的智能操作系统 —— 让人与 AI 并肩协作，把生意做得更好。",
    },
    quote: {
      en: "The future belongs to organisations that can think.",
      zh: "未来，属于会思考的组织。",
    },
  },
  {
    id: "today",
    year: { en: "Today", zh: "至今" },
    title: {
      en: "One Founder. Different Sectors. One System.",
      zh: "一位创始人。不同领域。一个系统。",
    },
    text: {
      en: "Today, CS Group operates across hospitality, real estate, digital platforms and enterprise AI. One philosophy holds them together: every business strengthens the next, creating an ecosystem designed to endure — not just grow.",
      zh: "今天，CS Group 的业务横跨酒店、房地产、数字平台与企业 AI。同一套理念将它们贯穿：每一项事业都在成就下一项，构成一个为长存而生、而非只为增长而生的生态。",
    },
    quote: {
      en: "Build. Keep. Compound.",
      zh: "建造。守成。复利。",
    },
  },
];

/* --- Insights ------------------------------------------------------------- */
export interface Insight {
  category: Loc;
  title: Loc;
  excerpt: Loc;
  date: Loc;
  readingTime: Loc;
}

export const insights: Insight[] = [
  {
    category: { en: "Perspective", zh: "观点" },
    title: {
      en: "Why founder-led groups compound differently",
      zh: "为什么创始人主导的集团，复利方式与众不同",
    },
    excerpt: {
      en: "Concentrated ownership and a long horizon let conviction outlast market noise — and let companies reinforce one another.",
      zh: "集中的所有权与长远的视野，让信念得以穿越市场的噪音 —— 也让各家企业彼此成就。",
    },
    date: { en: "Jun 2025", zh: "2025年6月" },
    readingTime: { en: "6 min", zh: "6 分钟" },
  },
  {
    category: { en: "Technology", zh: "科技" },
    title: {
      en: "From platforms to ecosystems: the next decade of impact",
      zh: "从平台到生态：影响力的下一个十年",
    },
    excerpt: {
      en: "When social technology, enterprise AI and real assets share a vision, the whole becomes greater than its parts.",
      zh: "当社交科技、企业 AI 与实体资产共享同一愿景，整体便大于部分之和。",
    },
    date: { en: "May 2025", zh: "2025年5月" },
    readingTime: { en: "8 min", zh: "8 分钟" },
  },
  {
    category: { en: "Investment", zh: "投资" },
    title: {
      en: "Patient capital in an impatient market",
      zh: "在浮躁市场中的耐心资本",
    },
    excerpt: {
      en: "A disciplined view on allocating across cycles — and why the best returns are measured in decades.",
      zh: "关于跨周期配置的纪律之见 —— 以及为何最好的回报，要以数十年为尺度。",
    },
    date: { en: "Apr 2025", zh: "2025年4月" },
    readingTime: { en: "5 min", zh: "5 分钟" },
  },
];
