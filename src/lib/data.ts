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

export const companies: Company[] = [
  {
    id: "nexxatech",
    index: "01",
    legalName: "Nexxatech Global Sdn. Bhd.",
    brand: "TRIMO",
    category: { en: "Social Technology Platform", zh: "社交科技平台" },
    sector: { en: "Technology · Social Entertainment", zh: "科技 · 社交娱乐" },
    summary: {
      en: "A one-to-one social platform building meaningful digital human connection.",
      zh: "一个一对一社交平台，缔造有温度的数字人际连接。",
    },
    description: {
      en: "Nexxatech Global is a digital entertainment and social technology company and the creator of TRIMO — a next-generation one-to-one platform uniting real-time communication, entertainment and a virtual economy in one seamless ecosystem.",
      zh: "Nexxatech Global 是一家数字娱乐与社交科技公司，也是 TRIMO 的缔造者 —— 一个将实时沟通、娱乐与虚拟经济融为一体的新一代一对一社交平台。",
    },
    highlights: {
      en: ["One-to-one connection", "Messaging & video", "Virtual economy"],
      zh: ["一对一连接", "即时通讯与视频", "虚拟经济"],
    },
    status: { en: "Scaling", zh: "高速成长" },
    year: "2022",
    detail: {
      tagline: {
        en: "Building the Future of Digital Human Connection",
        zh: "构建数字人际连接的未来",
      },
      intro: {
        en: "Nexxatech Global Sdn. Bhd. is a digital entertainment and social technology company focused on creating meaningful one-to-one connections through immersive online experiences.",
        zh: "Nexxatech Global Sdn. Bhd. 是一家数字娱乐与社交科技公司，专注于通过沉浸式的线上体验，缔造有意义的一对一连接。",
      },
      positioning: {
        en: "As the creator of TRIMO, Nexxatech is redefining social interaction in the digital era — combining communication, entertainment and virtual engagement within a seamless ecosystem.",
        zh: "作为 TRIMO 的缔造者，Nexxatech 正在重新定义数字时代的社交 —— 将沟通、娱乐与虚拟互动融汇于一个无缝的生态之中。",
      },
      overview: {
        en: [
          "Nexxatech Global Sdn. Bhd. is a digital entertainment and social technology company built on a single mission — to make human connection in the digital era feel genuine again. As the creator of TRIMO, it is reimagining how people meet, talk and build relationships online.",
          "TRIMO is a next-generation one-to-one social interaction platform designed to foster authentic relationships through real-time communication and genuinely engaging digital experiences.",
          "At its heart, the platform brings together instant messaging, face-to-face video communication and a dynamic virtual economy — letting users connect, interact and express themselves in more personal and meaningful ways.",
          "Virtual gifting and a built-in Diamond economy turn everyday interactions into moments worth sharing, while powering premium, personalized experiences across the community.",
          "By weaving social networking, entertainment and digital monetization into one seamless ecosystem, TRIMO creates an immersive environment where people build real connections and belong to a vibrant, growing community — the foundation of the group's long-term ambition in social technology.",
        ],
        zh: [
          "Nexxatech Global Sdn. Bhd. 是一家数字娱乐与社交科技公司，怀着一个单纯的使命 —— 让数字时代的人际连接重新变得真实。作为 TRIMO 的缔造者，它正在重新想象人们在线上相遇、交流与建立关系的方式。",
          "TRIMO 是新一代的一对一社交互动平台，通过实时沟通与真正引人入胜的数字体验，培育真实的人际关系。",
          "平台的核心，融合了即时通讯、面对面的视频沟通与充满活力的虚拟经济 —— 让用户以更私人、更有意义的方式连接、互动并表达自我。",
          "虚拟礼物与内置的钻石经济，把日常的互动化为值得分享的时刻，同时为社区中的高级、个性化体验提供动力。",
          "通过将社交、娱乐与数字变现交织成一个无缝的生态，TRIMO 打造出沉浸式的环境，让人们建立真实的连接、归属于一个充满活力、不断成长的社区 —— 这也是集团在社交科技领域长期抱负的基石。",
        ],
      },
      quickFacts: {
        en: ["Creator of TRIMO", "Social Technology", "Est. 2022"],
        zh: ["TRIMO 缔造者", "社交科技", "成立于 2022"],
      },
      facts: [
        { label: { en: "Founded", zh: "成立年份" }, value: { en: "2022", zh: "2022" } },
        { label: { en: "Headquarters", zh: "总部" }, value: { en: "Malaysia", zh: "马来西亚" } },
        {
          label: { en: "Industry", zh: "行业" },
          value: { en: "Social Technology & Digital Entertainment", zh: "社交科技与数字娱乐" },
        },
        { label: { en: "Product", zh: "产品" }, value: { en: "TRIMO", zh: "TRIMO" } },
        { label: { en: "Founder", zh: "创始人" }, value: { en: "Kam Chin Seng", zh: "Kam Chin Seng" } },
      ],
      businessAreas: [
        {
          title: { en: "Instant Messaging", zh: "即时通讯" },
          text: { en: "Real-time one-to-one conversations.", zh: "实时的一对一对话。" },
        },
        {
          title: { en: "Video Communication", zh: "视频沟通" },
          text: { en: "Interactive, face-to-face experiences.", zh: "面对面的互动体验。" },
        },
        {
          title: { en: "Virtual Gifting", zh: "虚拟礼物" },
          text: { en: "Digital expressions that enrich social engagement.", zh: "丰富社交互动的数字表达。" },
        },
        {
          title: { en: "Diamond Economy", zh: "钻石经济" },
          text: {
            en: "A virtual-currency system powering premium interactions and personalized experiences.",
            zh: "驱动高级互动与个性化体验的虚拟货币系统。",
          },
        },
      ],
      vision: {
        en: "To become a leading global social entertainment platform that empowers meaningful digital relationships through innovation, engagement and technology-driven experiences.",
        zh: "成为全球领先的社交娱乐平台，以创新、互动与技术驱动的体验，赋能有意义的数字关系。",
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
    year: "2023",
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
        { label: { en: "Founded", zh: "成立年份" }, value: { en: "2023", zh: "2023" } },
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
      en: "A destination resort pairing championship golf with refined hospitality.",
      zh: "将锦标级高尔夫与精致酒店服务融为一体的目的地度假村。",
    },
    description: {
      en: "Gemas Golf Resort is the group's hospitality flagship — a considered leisure destination where landscape, sport and service meet. It anchors the group's long-term presence in premium experiential hospitality.",
      zh: "Gemas 高尔夫度假村是集团的酒店旗舰 —— 一处将自然景观、运动与服务融为一体的精心打造的休闲胜地，奠定集团在高端体验式酒店领域的长期布局。",
    },
    highlights: {
      en: ["Championship course", "Resort & events", "Premium guest experience"],
      zh: ["锦标级球场", "度假与活动", "高端宾客体验"],
    },
    status: { en: "Operating", zh: "运营中" },
    year: "2021",
    detail: {
      tagline: {
        en: "Where Leisure Meets Hospitality Excellence",
        zh: "让休闲，遇见卓越款待",
      },
      intro: {
        en: "Gemas Golf Resort is a lifestyle and hospitality destination dedicated to delivering premium golf, resort and recreational experiences.",
        zh: "Gemas 高尔夫度假村是一处生活方式与酒店款待目的地，专注于呈现高端的高尔夫、度假与休闲体验。",
      },
      positioning: {
        en: "Creating destinations beyond golf.",
        zh: "打造超越高尔夫的目的地。",
      },
      overview: {
        en: [
          "Combining leisure, accommodation, corporate activities and nature-inspired environments, Gemas serves as a destination for both personal retreats and business gatherings.",
          "From championship golf to weekend escapes, corporate retreats and family recreation, the resort brings golf, hospitality and lifestyle together in one place.",
          "Set within nature-inspired surroundings, Gemas brings together a golf and country club, resort accommodation, dining and wellness, and versatile spaces for corporate and private events — all within a single destination.",
          "Whether for a weekend escape, a corporate retreat or a family day out, the resort is designed around memorable experiences that blend recreation, hospitality and lifestyle — creating a destination that reaches well beyond the fairway.",
        ],
        zh: [
          "将休闲、住宿、企业活动与自然环境融为一体，Gemas 既是个人度假的去处，也是商务聚会的目的地。",
          "从锦标级高尔夫到周末度假、企业静修与家庭休闲，度假村将高尔夫、款待与生活方式汇聚于一处。",
          "置身于自然环境之中，Gemas 将高尔夫与乡村俱乐部、度假住宿、餐饮与健康设施，以及适用于企业与私人活动的多功能空间汇聚一处，集于同一个目的地。",
          "无论是周末度假、企业静修，还是家庭出游，度假村都围绕难忘的体验而设计，将休闲、款待与生活方式融为一体 —— 打造一处远不止于球场的目的地。",
        ],
      },
      quickFacts: {
        en: ["Golf & Country Club", "Resort & Hospitality", "Corporate Retreats"],
        zh: ["高尔夫与乡村俱乐部", "度假与酒店", "企业静修"],
      },
      facts: [
        { label: { en: "Founded", zh: "成立年份" }, value: { en: "2021", zh: "2021" } },
        { label: { en: "Location", zh: "所在地" }, value: { en: "Gemas, Malaysia", zh: "马来西亚 · 金马士" } },
        { label: { en: "Industry", zh: "行业" }, value: { en: "Hospitality & Leisure", zh: "酒店与休闲" } },
        { label: { en: "Offering", zh: "主营" }, value: { en: "Golf · Resort · Events", zh: "高尔夫 · 度假 · 活动" } },
        { label: { en: "Founder", zh: "创始人" }, value: { en: "Kam Chin Seng", zh: "Kam Chin Seng" } },
      ],
      businessAreas: [
        {
          title: { en: "Golf & Country Club", zh: "高尔夫与乡村俱乐部" },
          text: {
            en: "Golf course operations and management, membership programmes, corporate golf events and tournaments, and recreational and social activities.",
            zh: "高尔夫球场运营与管理、会籍计划与打球体验、企业高尔夫活动与赛事，以及休闲与社交活动。",
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
      en: "Sustainable urban communities and real-estate development in Cambodia.",
      zh: "在柬埔寨打造可持续的城市社区与房地产开发。",
    },
    description: {
      en: "National 6A is a Phnom Penh–based, Malaysian-founded developer creating sustainable urban communities across Cambodia — spanning development, investment management and long-term property management.",
      zh: "National 6A 是一家总部位于金边、由马来西亚人创立的开发商，在柬埔寨打造可持续的城市社区 —— 业务涵盖开发、投资管理与长期物业管理。",
    },
    highlights: {
      en: ["Phnom Penh market", "Residential & mixed-use", "End-to-end development"],
      zh: ["深耕金边市场", "住宅与综合体", "全周期开发"],
    },
    status: { en: "Operating", zh: "运营中" },
    year: "2012",
    detail: {
      tagline: {
        en: "Creating Sustainable Urban Communities in Cambodia",
        zh: "在柬埔寨缔造可持续的城市社区",
      },
      intro: {
        en: "A Cambodian urban-development and real-estate investment platform, focused on residential, mixed-use and resort property projects.",
        zh: "一个柬埔寨城市开发与房地产投资平台，专注于住宅、综合体及度假地产项目的开发。",
      },
      positioning: {
        en: "A Malaysian-founded property developer rooted in Cambodia, with a deep focus on the Phnom Penh market.",
        zh: "一家由马来西亚人创立、扎根柬埔寨的房地产开发商，深耕金边市场。",
      },
      overview: {
        en: [
          "National 6A Investment Co., Ltd. is a Phnom Penh–based property developer founded and led by Malaysian entrepreneur Kam Chin Seng. Since 2012, the company has established itself as a Malaysian-background developer with deep roots in the Cambodian capital.",
          "Its work spans the full development lifecycle — from property development and project investment to sales, marketing and long-term property management — creating tangible, long-horizon assets for residents, partners and investors.",
          "The company pairs Malaysian standards of design and delivery with a deep understanding of the Cambodian market, building places that are made to last — and to appreciate — across market cycles.",
          "From landmark residences such as Galaxy Residence and The Peninsula to integrated urban communities, National 6A focuses on developments that raise the standard of city living while creating durable, long-horizon value for residents, partners and investors alike.",
        ],
        zh: [
          "National 6A Investment Co., Ltd. 是一家总部位于柬埔寨金边的房地产开发公司，由马来西亚企业家 Kam Chin Seng 创立及领导。自 2012 年以来，公司以「马来西亚背景的柬埔寨地产开发商」立足，深耕金边市场。",
          "其业务覆盖完整的开发周期 —— 从房地产开发、项目投资，到销售、营销与长期物业管理 —— 为住户、合作伙伴与投资者创造可见、可长期持有的资产。",
          "公司将马来西亚的设计与交付标准，与对柬埔寨市场的深刻理解相结合，打造经得起时间考验、并能跨越市场周期持续增值的作品。",
          "从 Galaxy Residence、The Peninsula 等地标住宅，到一体化的城市社区，National 6A 专注于既能提升城市生活标准、又能为住户、合作伙伴与投资者创造持久长期价值的开发项目。",
        ],
      },
      quickFacts: {
        en: ["Phnom Penh, Cambodia", "Est. 2012", "11–50 employees"],
        zh: ["柬埔寨金边", "成立于 2012", "11–50 人"],
      },
      facts: [
        { label: { en: "Founded", zh: "成立年份" }, value: { en: "2012", zh: "2012" } },
        { label: { en: "Headquarters", zh: "总部" }, value: { en: "Phnom Penh, Cambodia", zh: "柬埔寨金边" } },
        { label: { en: "Industry", zh: "行业" }, value: { en: "Property Development", zh: "房地产开发" } },
        { label: { en: "Team", zh: "员工规模" }, value: { en: "11–50 employees", zh: "11–50 人" } },
        { label: { en: "Founder", zh: "创始人" }, value: { en: "Kam Chin Seng", zh: "Kam Chin Seng" } },
        {
          label: { en: "Core business", zh: "核心业务" },
          value: { en: "Development · Asset & property management", zh: "开发 · 资产与物业管理" },
        },
      ],
      businessAreas: [
        {
          title: { en: "Property Development", zh: "房地产开发" },
          text: {
            en: "Conceiving and delivering residential, mixed-use and resort developments from land to handover.",
            zh: "从土地到交付，构思并交付住宅、综合体与度假项目。",
          },
        },
        {
          title: { en: "Investment & Development Management", zh: "投资与开发管理" },
          text: {
            en: "Structuring capital and managing project execution across the full development lifecycle.",
            zh: "在完整的开发周期中统筹资金结构与项目执行。",
          },
        },
        {
          title: { en: "Sales & Marketing", zh: "销售与营销" },
          text: {
            en: "Positioning and selling projects to local and international buyers and investors.",
            zh: "面向本地与国际买家及投资者，进行项目定位与销售。",
          },
        },
        {
          title: { en: "Property Management", zh: "物业管理" },
          text: {
            en: "Operating and maintaining completed communities to a lasting, professional standard.",
            zh: "以持久、专业的标准运营和维护建成社区。",
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
      goals: {
        en: [
          "Deliver landmark residential and mixed-use developments that raise the standard of city living in Cambodia.",
          "Build long-term value through disciplined investment and end-to-end development management.",
          "Partner with leading regional and international groups to bring world-class projects to market.",
          "Steward every community we create with professional, long-term property management.",
          "Grow responsibly — balancing commercial returns with sustainable, people-centred urban design.",
        ],
        zh: [
          "打造地标级的住宅与综合体项目，提升柬埔寨的城市生活标准。",
          "以纪律化的投资与全周期开发管理，构建长期价值。",
          "携手区域与国际领先机构，将世界级项目推向市场。",
          "以专业、长期的物业管理，悉心守护我们打造的每一个社区。",
          "负责任地成长 —— 在商业回报与可持续、以人为本的城市设计之间取得平衡。",
        ],
      },
      projects: [
        {
          name: "Galaxy Residence",
          text: {
            en: "A residential development in Phnom Penh, reflecting the company's focus on quality city living.",
            zh: "位于金边的住宅项目，体现公司对高品质城市生活的专注。",
          },
        },
        {
          name: "The Peninsula Private Residences",
          text: {
            en: "A high-end residential project co-developed with Cambodia's Sun & Moon Group and Chinese investment partners.",
            zh: "与柬埔寨 Sun & Moon Group 及中国投资方共同开发的高端住宅项目。",
          },
        },
      ],
    },
  },
];

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

/* --- Timeline ------------------------------------------------------------- */
export interface Milestone {
  year: string;
  title: Loc;
  text: Loc;
}

export const timeline: Milestone[] = [
  {
    year: "2021",
    title: { en: "Hospitality foundation", zh: "酒店基石" },
    text: {
      en: "Gemas Golf Resort establishes the group's presence in premium experiential hospitality.",
      zh: "Gemas 高尔夫度假村奠定集团在高端体验式酒店领域的存在。",
    },
  },
  {
    year: "2022",
    title: { en: "Social technology", zh: "社交科技" },
    text: {
      en: "Nexxatech Global launches TRIMO, its flagship one-to-one social platform.",
      zh: "Nexxatech Global 推出 TRIMO，旗舰级的一对一社交平台。",
    },
  },
  {
    year: "2023",
    title: { en: "Enterprise AI", zh: "企业 AI" },
    text: {
      en: "Nexflo introduces NEXJARVIS, extending the group into applied enterprise intelligence.",
      zh: "Nexflo 推出 NEXJARVIS，将集团拓展至落地的企业智能领域。",
    },
  },
  {
    year: "2024",
    title: { en: "Real assets", zh: "实体资产" },
    text: {
      en: "National 6A Investment formalises the group's long-horizon property development arm.",
      zh: "National 6A Investment 正式确立集团在长周期房地产开发的板块。",
    },
  },
  {
    year: "2025",
    title: { en: "An integrated ecosystem", zh: "一个融合的生态" },
    text: {
      en: "The companies begin operating as one ecosystem — technology, hospitality and capital reinforcing each other.",
      zh: "各家企业开始作为一个生态协同运作 —— 科技、酒店与资本彼此成就。",
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
      en: "When green technology, enterprise AI and real assets share a vision, the whole becomes greater than its parts.",
      zh: "当绿色科技、企业 AI 与实体资产共享同一愿景，整体便大于部分之和。",
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
