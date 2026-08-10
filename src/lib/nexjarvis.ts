/* ============================================================================
   NEXJARVIS — bilingual (English + Simplified Chinese) content for the dedicated
   NEXJARVIS company page (/companies/nexflo). Each field is a Loc: { en, zh }.
   Tone: confident, visionary, spare — category-defining, never salesy.
   ========================================================================== */
import type { Loc } from "./i18n-types";

export interface Loop {
  en: string;
  zh: string;
}
export interface Card {
  name: Loc;
  text: Loc;
}
export interface Pillar {
  label: Loc;
  role: Loc;
  text: Loc;
  jarvis: Loc;
}

export const nexjarvis = {
  hero: {
    eyebrow: { en: "AI Transformation Platform", zh: "AI 转型平台" },
    tagline: { en: "The AI Operating System for organizations.", zh: "面向组织的 AI 操作系统。" },
    lead: {
      en: "Not a tool you add to the company. The intelligence the company runs on.",
      zh: "不是为公司增添的一个工具，而是公司赖以运转的智能。",
    },
    body: {
      en: "NEXJARVIS transforms traditional organizations into AI-native enterprises — where strategy, work, and results run on a single, living system.",
      zh: "NEXJARVIS 将传统组织转变为 AI 原生企业 —— 让战略、执行与成果，运行在同一个鲜活的系统之上。",
    },
    primaryCta: { en: "Request a walkthrough", zh: "预约演示" },
  },

  jarvis: {
    eyebrow: { en: "01 — The AI Layer", zh: "01 — AI 智能层" },
    title: { en: "Jarvis", zh: "Jarvis" },
    subtitle: { en: "The intelligence layer of your organization.", zh: "组织的智能层。" },
    body: [
      {
        en: "Most companies don't fail on strategy. They fail in the space between deciding and doing.",
        zh: "多数公司并非败于战略，而是败于「决定」与「执行」之间的那道鸿沟。",
      },
      {
        en: "Strategy lives in one place. Work lives in another. Results live somewhere no one can quite see. Systems multiply; execution stalls; leadership flies blind.",
        zh: "战略在一处，工作在另一处，成果则散落在无人看得清的地方。系统越堆越多，执行却停滞不前，管理层如同盲飞。",
      },
      {
        en: "Jarvis closes that gap. It doesn't sit beside your operations — it runs beneath them: the intelligence layer that drives the work forward, keeps every commitment alive, and turns the daily motion of the company into something you can see and act on.",
        zh: "Jarvis 弥合这道鸿沟。它不是运营旁边的附属品，而是运行在运营之下的底层 —— 推动工作前进的智能层，让每一项承诺都不被遗忘，把公司日常的每一次运转，化为你看得见、可行动的洞察。",
      },
    ] as Loc[],
    capabilitiesLabel: { en: "What Jarvis does", zh: "Jarvis 做什么" },
    capabilities: [
      {
        name: { en: "Executes", zh: "自动执行" },
        text: {
          en: "Work moves on its own. Jarvis triggers, routes, and advances workflows without waiting to be told.",
          zh: "工作自行推进。Jarvis 主动触发、分派并推动流程前进，无需等待指令。",
        },
      },
      {
        name: { en: "Follows up", zh: "自动跟进" },
        text: {
          en: "Nothing is dropped. Jarvis chases the open loop, the late task, the unowned decision — automatically.",
          zh: "没有任何事被遗漏。未闭合的环节、逾期的任务、无人认领的决策 —— Jarvis 自动追踪到底。",
        },
      },
      {
        name: { en: "Understands", zh: "持续洞察" },
        text: {
          en: "Every action becomes data; every data point becomes insight; every insight becomes the next right move.",
          zh: "每一次行动化为数据，每一个数据化为洞察，每一个洞察指向下一步正确的行动。",
        },
      },
    ] as Card[],
    closer: {
      en: "Traditional software records what happened. Jarvis makes things happen.",
      zh: "传统软件记录已经发生的事。Jarvis 让事情发生。",
    },
    quote: {
      en: "Jarvis is not an AI tool your company uses. It is the intelligence your company runs on.",
      zh: "Jarvis 不是公司使用的一个 AI 工具，而是公司赖以运转的智能本身。",
    },
  },

  people: {
    eyebrow: { en: "02 — Powered by Jarvis", zh: "02 — 由 Jarvis 驱动" },
    title: { en: "The People & Execution System", zh: "人才与执行系统" },
    subtitle: {
      en: "Where strategy becomes execution — and execution becomes results.",
      zh: "让战略化为执行，让执行化为成果。",
    },
    body: [
      {
        en: "This is not an HR system. Not a task manager. Not a dashboard.",
        zh: "这不是一套 HR 系统，不是任务管理工具，也不是一块看板。",
      },
      {
        en: "It is the operating system for how your people work — a living structure that connects what the organization is trying to achieve to what each person does today.",
        zh: "它是「人如何工作」的操作系统 —— 一个鲜活的结构，将组织想要达成的目标，与每个人今天所做的事连接起来。",
      },
      {
        en: "Built on three primitives — Milestone · Task · KPI — and powered by Jarvis, it puts the entire company on a single line of sight: from direction, to action, to outcome. Strategy stops being a document. It becomes the way the company runs.",
        zh: "它建立在三个基本单元之上 —— 里程碑 · 任务 · KPI —— 由 Jarvis 驱动，让整个公司拥有同一条视线：从方向，到行动，到结果。战略不再是一份文件，而成为公司运转的方式本身。",
      },
    ] as Loc[],
  },

  framework: {
    eyebrow: { en: "03 — The Framework", zh: "03 — 核心框架" },
    title: { en: "Milestone → Task → KPI", zh: "里程碑 → 任务 → KPI" },
    lead: {
      en: "Three primitives that turn strategy into measurable execution.",
      zh: "三个基本单元，把战略转化为可衡量的执行。",
    },
    withJarvisLabel: { en: "With Jarvis", zh: "有了 Jarvis" },
    pillars: [
      {
        label: { en: "Milestone", zh: "里程碑" },
        role: { en: "Direction", zh: "方向" },
        text: {
          en: "Milestones translate strategy into commitments — with an owner, a horizon, and a reason it matters.",
          zh: "里程碑把战略转化为承诺 —— 有明确的负责人、时间跨度，以及为何重要的理由。",
        },
        jarvis: {
          en: "Every milestone stays alive. Jarvis connects it to the work beneath it, flags drift early, and shows leadership the true state of progress — not the reported one.",
          zh: "每一个里程碑都保持鲜活。Jarvis 将它与底层工作相连，在偏离时及早预警，让管理层看到真实的进度 —— 而非被汇报出来的进度。",
        },
      },
      {
        label: { en: "Task", zh: "任务" },
        role: { en: "Execution", zh: "执行" },
        text: {
          en: "Tasks are where intent becomes action. Every milestone breaks down into the work that moves it forward.",
          zh: "任务是意图转化为行动的地方。每一个里程碑，都拆解为推动它前进的具体工作。",
        },
        jarvis: {
          en: "Jarvis assigns, sequences, and follows up automatically — clearing bottlenecks and keeping execution in motion without a manager in the loop.",
          zh: "Jarvis 自动分派、排序并跟进 —— 疏通瓶颈，让执行持续运转，无需管理者时时盯守。",
        },
      },
      {
        label: { en: "KPI", zh: "KPI" },
        role: { en: "Performance", zh: "绩效" },
        text: {
          en: "KPIs make performance real — measuring outcomes, not activity.",
          zh: "KPI 让绩效变得真实 —— 衡量的是成果，而非忙碌。",
        },
        jarvis: {
          en: "Jarvis measures continuously, not quarterly, linking every result back to the people and tasks driving it — turning performance from a report into a feedback loop.",
          zh: "Jarvis 持续衡量，而非按季度衡量，把每一项成果追溯到驱动它的人与任务 —— 让绩效从一份报告，变成一个反馈闭环。",
        },
      },
    ] as Pillar[],
    loopLabel: { en: "The loop that compounds", zh: "不断复利的闭环" },
    loop: [
      { en: "Milestone", zh: "里程碑" },
      { en: "Task", zh: "任务" },
      { en: "KPI", zh: "KPI" },
      { en: "Feedback", zh: "反馈" },
      { en: "Improvement", zh: "改进" },
    ] as Loop[],
    loopCaption: {
      en: "…and back to the start — every cycle sharper than the last.",
      zh: "……再回到起点 —— 每一轮都比上一轮更精进。",
    },
    transform: [
      { en: "Work", zh: "工作" },
      { en: "Data", zh: "数据" },
      { en: "Intelligence", zh: "智能" },
      { en: "Growth", zh: "成长" },
    ] as Loop[],
  },

  value: {
    eyebrow: { en: "04 — System Value", zh: "04 — 系统价值" },
    title: {
      en: "What changes when the company runs on Jarvis.",
      zh: "当公司运行在 Jarvis 之上，会发生什么。",
    },
    items: [
      {
        name: { en: "Work becomes visible", zh: "工作变得可见" },
        text: {
          en: "Every commitment, task, and result — in one line of sight.",
          zh: "每一项承诺、每一个任务、每一份成果 —— 尽在同一条视线之中。",
        },
      },
      {
        name: { en: "Execution becomes structured", zh: "执行变得有序" },
        text: {
          en: "Not busier. Aligned — everyone pulling toward the same milestones.",
          zh: "不是更忙，而是更齐 —— 所有人朝着同一批里程碑发力。",
        },
      },
      {
        name: { en: "Performance becomes measurable", zh: "绩效变得可衡量" },
        text: {
          en: "Outcomes over activity, measured in real time.",
          zh: "以成果而非忙碌为准，并且实时衡量。",
        },
      },
      {
        name: { en: "Growth becomes continuous", zh: "成长变得持续" },
        text: {
          en: "Every cycle feeds the next. The organization compounds.",
          zh: "每一个周期滋养下一个。组织在复利中成长。",
        },
      },
    ] as Card[],
  },

  human: {
    eyebrow: { en: "05 — The Human Layer", zh: "05 — 人的层面" },
    title: { en: "The real transformation is cultural.", zh: "真正的转型，是文化的转型。" },
    body: [
      {
        en: "When work is visible, people are seen. When execution is shared, ownership is real. When everyone can trace their work to something that matters — they belong to it.",
        zh: "当工作被看见，人也被看见；当执行被共担，责任感才真实；当每个人都能把自己的工作，追溯到真正重要的事 —— 他们便对它有了归属。",
      },
      {
        en: "NEXJARVIS doesn't only make companies more efficient. It makes people more invested.",
        zh: "NEXJARVIS 不只让公司更高效，更让每个人更投入。",
      },
    ] as Loc[],
    pillars: [
      { name: { en: "Participation", zh: "参与" }, text: { en: "Everyone contributes to the same goals.", zh: "每个人都为同一个目标贡献力量。" } },
      { name: { en: "Ownership", zh: "责任" }, text: { en: "Everyone owns a piece of the outcome.", zh: "每个人都拥有成果中的一份。" } },
      { name: { en: "Belonging", zh: "归属" }, text: { en: "Everyone grows with the organization.", zh: "每个人都与组织一同成长。" } },
    ] as Card[],
    quote: {
      en: "Grow the team together — and build genuine participation and belonging.",
      zh: "让团队共同成长，建立员工的参与感与归属感。",
    },
  },

  vision: {
    eyebrow: { en: "06 — The Vision", zh: "06 — 愿景" },
    body: {
      en: "The AI-native company won't be built on more tools. It will be built on a single intelligence that runs the whole.",
      zh: "AI 原生的公司，不会建立在更多工具之上，而会建立在一个统领全局的智能之上。",
    },
    statement: { en: "Every company should have its own Jarvis.", zh: "每一家公司，都应拥有自己的 Jarvis。" },
    closer: { en: "NEXJARVIS is how you build yours.", zh: "NEXJARVIS，就是你打造它的方式。" },
    primaryCta: { en: "Talk to us", zh: "与我们联系" },
  },
};
