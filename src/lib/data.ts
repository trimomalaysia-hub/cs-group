/* ============================================================================
   CONTENT DATA — bilingual (English + Simplified Chinese).
   Each translatable field is a Loc: { en, zh }. Structural fields (id, index,
   brand, legalName, year, company) are language-neutral.
   In a component: const { lang } = useLanguage();  company.summary[lang]
   ============================================================================ */
import type { Loc } from "./i18n";

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
          "TRIMO — reimagining human connection in the digital era. It is a next-generation one-to-one social interaction platform designed to foster authentic relationships through real-time communication and engaging digital experiences.",
          "The platform integrates messaging, video communication and a dynamic virtual economy — enabling users to connect, interact and express themselves in more meaningful ways.",
          "By combining social networking, entertainment and digital monetization, TRIMO delivers an immersive environment where users build genuine connections while taking part in a vibrant online community.",
        ],
        zh: [
          "TRIMO —— 重新想象数字时代的人际连接。它是新一代的一对一社交互动平台，通过实时沟通与引人入胜的数字体验，培育真实的人际关系。",
          "平台融合即时通讯、视频沟通与充满活力的虚拟经济 —— 让用户以更有意义的方式连接、互动并表达自我。",
          "通过将社交、娱乐与数字变现相结合，TRIMO 打造出沉浸式的环境，让用户在融入活跃线上社区的同时，建立真诚的连接。",
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
    brand: "Jarvis AI",
    category: { en: "Enterprise Intelligence Platform", zh: "企业智能平台" },
    sector: { en: "Artificial Intelligence", zh: "人工智能" },
    summary: {
      en: "Enterprise AI that unifies data and turns information into decisions.",
      zh: "统一数据、把信息转化为决策的企业级 AI。",
    },
    description: {
      en: "Jarvis AI gives organisations a single intelligence layer — connecting fragmented systems, automating knowledge work and surfacing the insight leaders need to act with speed and confidence. It is the group's bet on applied, enterprise-grade AI.",
      zh: "Jarvis AI 为组织提供统一的智能层 —— 打通分散的系统、自动化知识工作，并呈现领导者据以快速、果断行动所需的洞察。它是集团在落地的企业级 AI 上的布局。",
    },
    highlights: {
      en: ["Unified data intelligence", "Workflow automation", "Decision-grade insight"],
      zh: ["统一的数据智能", "工作流自动化", "决策级洞察"],
    },
    status: { en: "Scaling", zh: "高速成长" },
    year: "2023",
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
        ],
        zh: [
          "National 6A Investment Co., Ltd. 是一家总部位于柬埔寨金边的房地产开发公司，由马来西亚企业家 Kam Chin Seng 创立及领导。自 2012 年以来，公司以「马来西亚背景的柬埔寨地产开发商」立足，深耕金边市场。",
          "其业务覆盖完整的开发周期 —— 从房地产开发、项目投资，到销售、营销与长期物业管理 —— 为住户、合作伙伴与投资者创造可见、可长期持有的资产。",
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
    company: "Jarvis AI",
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
      en: "Nexflo introduces Jarvis AI, extending the group into applied enterprise intelligence.",
      zh: "Nexflo 推出 Jarvis AI，将集团拓展至落地的企业智能领域。",
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
