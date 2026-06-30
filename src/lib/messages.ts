/* ============================================================================
   UI MESSAGE DICTIONARY (English + Simplified Chinese).
   Every interface string lives here. `nav` is in the same order as site.nav.
   Keep the `en` and `zh` objects structurally identical (same keys).
   Content data (companies, vision, timeline, insights) is localized in data.ts.
   ============================================================================ */

export const messages = {
  en: {
    nav: ["Founder", "Companies", "Vision", "Portfolio", "Timeline", "Insights", "Contact"],
    header: { enquire: "Enquire" },

    hero: {
      eyebrow: "Founder-Led Group — Established by Kam Chin Seng",
      headline: {
        a: "A founder-led group building ",
        accent: "what endures",
        post: " — across technology, hospitality & capital.",
      },
      description:
        "CS Group is a diversified, founder-led ecosystem established by Kam Chin Seng — spanning social technology, enterprise AI, hospitality and property development, built on a long-term, investor-grade vision.",
      ctaPrimary: "Explore the companies",
      ctaSecondary: "Meet the founder",
      sectors: ["Social Technology", "Enterprise AI", "Hospitality", "Property"],
    },

    founder: {
      eyebrow: "Founder",
      heading: "A builder’s mindset, held to a generational horizon.",
      p1: "Kam Chin Seng founded CS Group on a simple conviction: the companies worth building are the ones designed to outlast their founder. Rather than chase a single market, he set out to assemble a diversified ecosystem — where technology, hospitality and capital each strengthen the others.",
      p2: "That philosophy now spans a social technology platform, an enterprise AI company, a destination golf resort and a property development arm — distinct businesses united by one long-term vision and a shared standard of craft.",
      quote:
        "Build companies that compound — in value, in trust, and in the good they do for the communities around them.",
      role: "Founder & Chairman",
    },

    companies: {
      eyebrow: "Companies",
      titleLine1: "Four companies,",
      titleLine2: "one ecosystem.",
      lead: "Each business stands on its own — yet shares a founder, a standard and a long-term vision.",
      view: "View",
      since: "Since",
    },

    vision: {
      eyebrow: "Vision",
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
  },

  zh: {
    nav: ["创始人", "旗下企业", "愿景", "投资版图", "发展历程", "洞察", "联系"],
    header: { enquire: "咨询" },

    hero: {
      eyebrow: "创始人主导的企业集团 — 由 Kam Chin Seng 创立",
      headline: {
        a: "一家创始人主导的企业集团，缔造",
        accent: "经得起时间考验的事业",
        post: " —— 横跨科技、酒店与资本。",
      },
      description:
        "CS Group 是由 Kam Chin Seng 创立的多元化、创始人主导的企业生态 —— 横跨社交科技、企业级 AI、酒店与房地产开发，秉持长期、投资级的愿景。",
      ctaPrimary: "了解旗下企业",
      ctaSecondary: "认识创始人",
      sectors: ["社交科技", "企业级 AI", "酒店", "房地产"],
    },

    founder: {
      eyebrow: "创始人",
      heading: "建造者的格局，着眼于跨越世代的远见。",
      p1: "Kam Chin Seng 怀着一个简单的信念创立 CS Group：值得打造的企业，是那些注定要超越创始人本身、长久存续的企业。他没有押注单一市场，而是着手构建一个多元化的生态系统 —— 让科技、酒店与资本彼此成就。",
      p2: "这一理念如今已延伸至一个社交科技平台、一家企业级 AI 公司、一座目的地高尔夫度假村，以及一个房地产开发板块 —— 这些各自独立的业务，由同一个长期愿景与同一套对品质的坚持紧密相连。",
      quote:
        "打造能够复利成长的企业 —— 在价值上、在信任上，也在它们为周遭社区带来的福祉上。",
      role: "创始人兼主席",
    },

    companies: {
      eyebrow: "旗下企业",
      titleLine1: "四家企业，",
      titleLine2: "一个生态。",
      lead: "每一项业务都独立运营 —— 却共享同一位创始人、同一套标准与同一个长期愿景。",
      view: "查看",
      since: "始于",
    },

    vision: {
      eyebrow: "愿景",
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
  },
};
