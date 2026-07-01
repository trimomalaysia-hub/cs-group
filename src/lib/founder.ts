/* ============================================================================
   FOUNDER PHILOSOPHY — the content for the /founder page (bilingual).
   `lead` is the opening statement; `blocks` is the ordered essay
   (p = paragraph, quote = pull-quote, rule = divider); `closing` is the
   signature manifesto shown at the end. Edit copy here.
   ============================================================================ */
import type { Loc } from "./i18n-types";

export interface FounderBlock {
  type: "p" | "quote" | "rule";
  text?: Loc;
}

export const founderContent: {
  lead: Loc;
  blocks: FounderBlock[];
  closing: Loc<string[]>;
} = {
  lead: {
    en: "A builder's vision lies in enabling people, in taking part in the growth of an era — and in believing in the future.",
    zh: "建造者的远见，在于成就人，也在于参与时代的成长，也相信未来。",
  },
  blocks: [
    {
      type: "p",
      text: {
        en: "Kam Chin Seng believes a company is not only a platform for creating commercial value, but — more importantly — a place for creating opportunity: cultivating talent, uniting culture, letting more people glimpse the future as they grow, and giving the organization the strength to keep moving forward.",
        zh: "Kam Chin Seng 相信，企业不仅是创造商业价值的平台，更重要的是创造机会——培养人才、凝聚文化，让更多人在成长中看见未来，并赋予组织持续前行的力量。",
      },
    },
    {
      type: "p",
      text: {
        en: "He keeps an open mind, and believes learning has no finish line. Facing a fast-changing world, he actively embraces new technologies, seeks out new trends, continually renews his thinking, and keeps pushing past his own limits.",
        zh: "他始终保持开放的思维，相信学习没有终点。面对快速变化的世界，他主动拥抱新技术、理解新趋势，不断更新认知，也持续突破自身的边界。",
      },
    },
    {
      type: "p",
      text: {
        en: "In an age where artificial intelligence is redefining the rules of business, what he sees is not merely gains in efficiency, but an entirely new way for people and technology to work together.",
        zh: "在人工智能重新定义商业规则的今天，他看到的并不仅是效率的提升，而是人与科技之间全新的协作方式。",
      },
    },
    {
      type: "quote",
      text: {
        en: "Technology can amplify capability — but what truly drives an organization's growth is, always, its people.",
        zh: "科技能够放大能力，但真正驱动组织持续成长的，始终是人。",
      },
    },
    {
      type: "p",
      text: {
        en: "And so he values systems, and treasures trust; he cares about results, and about the growth of every single member.",
        zh: "因此，他重视制度，也珍视信任；关注结果，也关注每一位成员的成长轨迹。",
      },
    },
    {
      type: "p",
      text: {
        en: "He believes the finest people don't stay only for today's salary. More importantly, they stay because they trust the organization will keep creating opportunities — so they can keep growing, and hold a wider future.",
        zh: "他相信，真正优秀的人才，不只是为了今天的薪资而留下，更重要的是，相信组织能够持续创造机会，让自己不断成长，并拥有更广阔的未来。",
      },
    },
    {
      type: "p",
      text: {
        en: "Growth is not always comfortable. Sometimes it needs support; sometimes it needs challenge; sometimes it means facing higher standards and expectations.",
        zh: "成长并不总是舒适的。有时候，需要支持；有时候，需要挑战；有时候，也意味着必须面对更高的标准与期待。",
      },
    },
    {
      type: "p",
      text: {
        en: "So he is willing to bear the pressure that driving growth brings, and to carry responsibilities that may not be understood right away. Because to him, a leader's duty is not only to make the team feel secure, but to help them build capability, keep progressing, and keep seeing what the future could hold.",
        zh: "因此，他愿意承担推动成长所带来的压力，也愿意承担那些未必能够被立即理解的责任。因为在他看来，领导者的职责，不只是让团队感到安心，更是帮助团队建立能力、保持进步，并持续看见未来的可能。",
      },
    },
    {
      type: "p",
      text: {
        en: "If an organization only keeps giving without growth — if pay keeps rising while capability stands still — then, for individuals and the organization alike, no truly healthy, long-term development can take shape.",
        zh: "如果组织只是不断给予，而缺乏成长；如果薪资持续提升，而能力却停留在原地，最终，无论对于个人还是组织，都难以形成真正健康而长远的发展。",
      },
    },
    {
      type: "p",
      text: {
        en: "So he chooses to be the one who keeps driving change. Not out of harshness, but out of belief that everyone holds greater potential; not to demand more, but in the hope that everyone gains, through growth, more freedom to choose their own future.",
        zh: "因此，他选择成为那个持续推动改变的人。不是因为苛刻，而是因为相信每一个人都拥有更大的潜力；不是为了要求更多，而是希望每一个人都能够在成长中拥有更多选择未来的能力。",
      },
    },
    {
      type: "p",
      text: {
        en: "Rather than a manager who issues orders, he would rather be a practitioner who walks shoulder to shoulder with the team — taking part himself, understanding for himself, exploring for himself, finding direction amid change, and leading the team to grow together.",
        zh: "与其成为发号施令的管理者，他更愿意成为与团队并肩前行的实践者。他愿意亲自参与、亲自理解、亲自探索，在变化中寻找方向，并带领团队共同成长。",
      },
    },
    {
      type: "quote",
      text: {
        en: "A company's most important asset has never been its systems, nor its capital — but a group of people willing to believe in the future together, to keep learning, and to grow as one.",
        zh: "企业最重要的资产，从来不是系统，也不是资本。而是一群愿意共同相信未来、持续学习、共同成长的人。",
      },
    },
    { type: "rule" },
    {
      type: "p",
      text: {
        en: "As we move ever further into an intelligent age, he holds fast to one conviction: a company can grow ever more intelligent, but it must never lose its warmth.",
        zh: "在不断迈向智能化时代的过程中，他始终坚持一个理念：企业可以越来越智能，但不能失去温度。",
      },
    },
    {
      type: "p",
      text: {
        en: "He pursues efficiency, and values trust; he embraces innovation, and cherishes the real, sincere connection between people.",
        zh: "他追求效率，也重视信任；拥抱创新，也珍惜人与人之间真实而真诚的连接。",
      },
    },
    {
      type: "p",
      text: {
        en: "Because to him, a truly great organization is not one that merely owns advanced technology, refined systems, or an outstanding business model. What matters more is that it lets every person be seen, be respected, and find — in the course of growing — their own value and possibility.",
        zh: "因为在他看来，真正优秀的组织，不只是拥有先进的技术、完善的制度或卓越的商业模式。更重要的是，它能够让每一个人被看见、被尊重，并在成长的过程中找到属于自己的价值与可能性。",
      },
    },
    { type: "rule" },
  ],
  closing: {
    en: [
      "A company can grow ever more intelligent — but it must never lose its warmth.",
      "Technology lifts efficiency; culture unites hearts.",
      "Systems drive growth; but trust decides how far an organization can go.",
    ],
    zh: [
      "企业可以越来越智能，但不能失去温度。",
      "科技提升效率，文化凝聚人心；",
      "系统推动增长，而信任决定组织能够走多远。",
    ],
  },
};
