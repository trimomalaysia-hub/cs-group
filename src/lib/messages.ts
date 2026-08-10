/* ============================================================================
   UI MESSAGE DICTIONARY (English + Simplified Chinese).
   Every interface string lives here. `nav` is in the same order as site.nav.
   Keep the `en` and `zh` objects structurally identical (same keys).
   Content data (companies, vision, timeline, insights) is localized in data.ts.
   ============================================================================ */

import type { Lang } from "./i18n-types";

export const messages = {
  en: {
    nav: ["About", "Founder", "Companies", "Vision", "Team"],
    header: { enquire: "Enquire", careers: "Careers", investors: "Investors" },

    /* The logo-lockup opening screen. `monogram` and `wordmark` are the brand
       identity and stay in Latin in both languages; only the pillars localise. */
    logo: {
      monogram: "CS",
      wordmark: "CS GROUP",
      pillars: ["Excellence", "Prestige", "Legacy"],
      enter: "Enter",
    },

    hero: {
      eyebrow: "CS Group · Founder-Led",
      line1: "We build people.",
      line2pre: "People build ",
      line2accent: "the future",
      line2post: ".",
      sub: "A founder-led group building talent, companies, and intelligent systems.",
      ctaPrimary: "Explore Group",
      ctaSecondary: "Join Talent Network",
    },

    about: {
      eyebrow: "About",
      line1: "Founder-led since the first day.",
      line2: "Compounding across technology, hospitality and capital.",
      line3: "Built for the long horizon — measured in decades, not quarters.",
      milestones: "Milestones",
    },

    founder: {
      eyebrow: "Founder",
      heading: "Leadership measured in decades.",
      p1: "Kam Chin Seng builds companies the way others build institutions — slowly, deliberately, and to be handed on.",
      p2: "He believes a company is a place to create opportunity: to cultivate talent, to unite a culture, and to give people the room to grow.",
      quote:
        "A company can grow ever more intelligent — but it must never lose its warmth.",
      role: "Founder & Chairman",
      readMore: "Read his philosophy",
      back: "Back to group",
    },

    companies: {
      eyebrow: "Companies",
      /* Split into fragments so one word can carry the gold, the same way the
         hero headline does. Never split a localized string at render time. */
      titleLine1pre: "An ecosystem of ",
      titleLine1accent: "companies",
      titleLine1post: ".",
      titleLine2: "Designed for scale, built for the future.",
      lead: "Each operates independently — yet all move as one.",
      discover: "Discover our ecosystem",
      view: "Explore",
      since: "Since",
    },

    talent: {
      eyebrow: "Talent",
      statement: "We don’t just build companies. We build people.",
      lead: "Talent is the asset that compounds. Everything else follows from it.",
      values: [
        { title: "Growth", text: "Room to stretch beyond your title — early, and often." },
        { title: "Ownership", text: "Real decisions, real consequences, real credit." },
        { title: "Collaboration", text: "One bench across the group — knowledge travels." },
        {
          title: "Human first, AI-native",
          text: "Everyone here works alongside an AI workforce. The technology takes the repetition; the people keep the judgement and the warmth.",
        },
        {
          title: "Built to be handed on",
          text: "We hire and mentor for the decade ahead, not the quarter — training people to outgrow the role they were hired into.",
        },
      ],
      cta: "Join Us",
    },

    finalCta: {
      heading: "Build the future with us.",
      cta: "Get in Touch",
      note: "Or write to us at",
    },

    stats: {
      eyebrow: "By the numbers",
      title: "Built slowly, on purpose.",
      lead: "The group’s scale is the product of three decades of operating — not of a single funding round.",
    },

    vision: {
      eyebrow: "Vision",
      statement: "Building AI-native organizations for the next generation.",
      support:
        "Not software bolted onto old structures — companies designed, from the ground up, around intelligence.",
      manifesto:
        "Technology compounds. Hospitality endures. Capital is patient. Held together by a single vision, they build something larger than any one company — and made to last beyond any one lifetime.",
    },

    portfolio: {
      eyebrow: "Portfolio",
      title: "A diversified base, by design.",
      lead: "The group is deliberately spread across sectors that move on different cycles — reducing risk while compounding capability.",
    },

    timeline: {
      eyebrow: "Timeline",
      title: "A deliberate progression.",
      lead: "The group has grown one considered step at a time — each company laying the ground for the next.",
    },

    insights: {
      eyebrow: "Insights",
      title: "Perspectives.",
      lead: "Notes on building enduring companies — on technology, hospitality and the discipline of patient capital.",
      read: "Read",
    },

    contact: {
      eyebrow: "Contact",
      heading: "Let’s build something that lasts.",
      lead: "For partnership, investment or media enquiries, reach out — we read every message and reply with intent.",
      general: "General",
      investor: "Investor relations",
      office: "Office",
      name: "Name",
      email: "Email",
      organisation: "Organisation",
      message: "Message",
      namePh: "Your name",
      emailPh: "you@company.com",
      orgPh: "Company / fund (optional)",
      messagePh: "How can we help?",
      send: "Send enquiry",
      orEmail: "Or email",
    },

    footer: {
      tagline: "A founder-led group building enduring companies across technology, hospitality and capital.",
      foundedBy: "Founded by",
      companies: "Companies",
      navigate: "Navigate",
      getInTouch: "Get in touch",
      rights: "All rights reserved.",
      tagcloud: "Technology · Hospitality · Capital",
    },

    company: {
      allCompanies: "All companies",
      overview: "Overview",
      directionEyebrow: "Direction",
      visionMissionTitle: "Vision & Mission",
      visionLabel: "Vision",
      missionLabel: "Mission",
      goalsEyebrow: "Goals",
      goalsTitle: "What we’re building toward",
      coreEyebrow: "Core business",
      coreTitle: "What we do.",
      projectsEyebrow: "Portfolio",
      projectsTitle: "Signature projects.",
      interestedPre: "Interested in ",
      interestedPost: "?",
      ctaLead: "For partnership, investment or media enquiries, get in touch with the group.",
      contactCta: "Contact CS Group",
      allCompaniesCta: "All companies",
      fallback: { sector: "Sector", status: "Status", since: "Since", founder: "Founder" },
    },

    a11y: {
      skipToContent: "Skip to content",
      skipIntro: "Skip",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      prev: "Previous",
      next: "Next",
    },

    notFound: {
      title: "Page not found",
      lead: "The page you’re looking for doesn’t exist or may have moved.",
      home: "Back to home",
    },
  },

  zh: {
    nav: ["关于", "创始人", "旗下企业", "愿景", "团队"],
    header: { enquire: "咨询", careers: "招贤纳士", investors: "投资者" },

    logo: {
      monogram: "CS",
      wordmark: "CS GROUP",
      pillars: ["卓越", "尊崇", "传承"],
      enter: "进入",
    },

    hero: {
      eyebrow: "CS Group · 创始人主导",
      line1: "我们成就人。",
      line2pre: "人，成就",
      line2accent: "未来",
      line2post: "。",
      sub: "一家创始人主导的集团 —— 培育人才，创建企业，构建智能系统。",
      ctaPrimary: "了解集团",
      ctaSecondary: "加入人才网络",
    },

    about: {
      eyebrow: "关于",
      line1: "自第一天起，由创始人主导。",
      line2: "在科技、酒店与资本之间，复利生长。",
      line3: "为长远而建 —— 以十年计，而非以季度计。",
      milestones: "关键节点",
    },

    founder: {
      eyebrow: "创始人",
      heading: "以十年为尺度的领导力。",
      p1: "Kam Chin Seng 以建造机构的方式建造企业 —— 缓慢、审慎，并且是为了传承。",
      p2: "他相信，企业是创造机会的地方：培育人才，凝聚文化，让人有生长的余地。",
      quote:
        "企业可以越来越智能，但不能失去温度。",
      role: "创始人兼主席",
      readMore: "阅读他的理念",
      back: "返回集团",
    },

    companies: {
      eyebrow: "旗下企业",
      titleLine1pre: "一个",
      titleLine1accent: "企业生态",
      titleLine1post: "。",
      titleLine2: "为规模而设计，为未来而建造。",
      lead: "各自独立运营 —— 却如一体般前行。",
      discover: "探索我们的生态",
      view: "了解",
      since: "始于",
    },

    talent: {
      eyebrow: "人才",
      statement: "我们不只是创建企业。我们成就人。",
      lead: "人才，才是真正复利的资产。其余一切，皆由此而来。",
      values: [
        { title: "成长", text: "越过头衔的边界 —— 尽早，也常常。" },
        { title: "主人翁", text: "真实的决策，真实的结果，真实的认可。" },
        { title: "协作", text: "全集团，一支队伍 —— 让经验流动。" },
        {
          title: "以人为本，AI 原生",
          text: "这里的每个人，都与 AI 员工并肩工作。让技术承担重复，让人保有判断力与温度。",
        },
        {
          title: "为传承而建",
          text: "我们的招聘与培养着眼于未来十年，而非下一个季度 —— 让每个人都能成长，超越当初被聘任的那个岗位。",
        },
      ],
      cta: "加入我们",
    },

    finalCta: {
      heading: "与我们一起，建造未来。",
      cta: "联系我们",
      note: "或来信至",
    },

    stats: {
      eyebrow: "集团数据",
      title: "慢，是刻意的。",
      lead: "集团今日的规模，来自三十余年的实业经营 —— 而非某一轮融资。",
    },

    vision: {
      eyebrow: "愿景",
      statement: "为下一代，构建 AI 原生的组织。",
      support:
        "不是把软件嫁接在旧结构之上 —— 而是从根基起，就围绕智能而设计的企业。",
      manifesto:
        "科技在复利，酒店在沉淀，资本在等待。由同一个愿景凝聚，它们共同成就的，远大于任何一家企业 —— 并注定超越任何一代人的时光。",
    },

    portfolio: {
      eyebrow: "投资版图",
      title: "刻意打造的多元化基石。",
      lead: "集团刻意布局于不同周期的行业 —— 在分散风险的同时，让能力不断复利累积。",
    },

    timeline: {
      eyebrow: "发展历程",
      title: "稳健而有序的演进。",
      lead: "集团每一步都走得审慎而笃定 —— 每一家企业，都为下一家奠定基础。",
    },

    insights: {
      eyebrow: "洞察",
      title: "观点。",
      lead: "关于打造长青企业的思考 —— 谈科技、谈酒店，也谈耐心资本的纪律。",
      read: "阅读",
    },

    contact: {
      eyebrow: "联系",
      heading: "携手打造，长久之业。",
      lead: "无论是合作、投资还是媒体垂询，欢迎与我们联系 —— 每一条讯息我们都会认真阅读、用心回复。",
      general: "综合垂询",
      investor: "投资者关系",
      office: "办公地点",
      name: "姓名",
      email: "电邮",
      organisation: "机构",
      message: "留言",
      namePh: "您的姓名",
      emailPh: "you@company.com",
      orgPh: "公司 / 基金（选填）",
      messagePh: "我们能为您做些什么？",
      send: "发送垂询",
      orEmail: "或来信",
    },

    footer: {
      tagline: "一家创始人主导的企业集团，横跨科技、酒店与资本，缔造长青企业。",
      foundedBy: "创立者",
      companies: "旗下企业",
      navigate: "导航",
      getInTouch: "联系我们",
      rights: "保留所有权利。",
      tagcloud: "科技 · 酒店 · 资本",
    },

    company: {
      allCompanies: "返回企业列表",
      overview: "概览",
      directionEyebrow: "方向",
      visionMissionTitle: "愿景与使命",
      visionLabel: "愿景",
      missionLabel: "使命",
      goalsEyebrow: "目标",
      goalsTitle: "我们正努力实现的目标",
      coreEyebrow: "核心业务",
      coreTitle: "我们的业务。",
      projectsEyebrow: "项目",
      projectsTitle: "代表项目。",
      interestedPre: "对 ",
      interestedPost: " 感兴趣？",
      ctaLead: "如有合作、投资或媒体垂询，欢迎与集团联系。",
      contactCta: "联系 CS Group",
      allCompaniesCta: "全部企业",
      fallback: { sector: "行业", status: "状态", since: "始于", founder: "创始人" },
    },

    a11y: {
      skipToContent: "跳到主要内容",
      skipIntro: "跳过",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      prev: "上一个",
      next: "下一个",
    },

    notFound: {
      title: "页面未找到",
      lead: "您访问的页面不存在，或可能已被移动。",
      home: "返回首页",
    },
  },
};

export type Messages = typeof messages.en;

/* Compile-time guard: `zh` must stay structurally identical to `en` (see CLAUDE.md). */
const _localeParity: Record<Lang, Messages> = messages;
void _localeParity;
