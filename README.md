# Nexxatech Official Website

The official Nexxatech company website. Built with [Astro](https://astro.build) +
[Tailwind CSS](https://tailwindcss.com). Designed to be edited with the help of
**Claude Code** — you describe the change in plain English, Claude makes it.

---

## 🚀 For the website editor (non-technical) — start here

You don't need to know how to code. You'll mostly do two things: **preview the
site** and **ask Claude Code to make changes**.

### 1. Preview the website on your computer
Open a terminal in this folder and run:

```bash
npm install      # only needed the first time
npm run dev
```

Then open the link it prints (usually **http://localhost:4321**) in your browser.
The page updates automatically as changes are made. Press `Ctrl + C` to stop.

### 2. Ask Claude Code to make changes
Just describe what you want, for example:
- "Change the headline on the home page to …"
- "Add a new page called Careers with a list of open jobs."
- "Update the company phone number and email."
- "Make the buttons green instead of purple."
- "Add a Pricing section with three plans."

Claude follows the built-in **ui-ux-pro-max** design guide, so changes stay
clean, consistent, and on-brand automatically.

### 3. Quick edits you can make yourself
Open `src/data/site.ts` to change the **company name, phone, email, address,
menu links, and social media links** — it's all plain text between quotes.

---

## 🧑‍💻 For developers

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies (first time / after pull) |
| `npm run dev`     | Start local dev server at `localhost:4321`     |
| `npm run build`   | Build the production site into `dist/`         |
| `npm run preview` | Preview the production build locally           |

**Project structure**

```
src/
  data/site.ts        # single source of truth (name, nav, contact, SEO)
  styles/global.css   # design tokens (colours, fonts) + base styles
  layouts/            # BaseLayout.astro — head/SEO/header/footer wrapper
  components/         # Button, Section, Header, Footer, FeatureCard, CTA
  pages/              # one file per page (file name = URL)
public/               # static assets (favicon, og-image, robots.txt)
.claude/skills/       # ui-ux-pro-max design system skill for Claude Code
```

The design system and front-end conventions live in
[`.claude/skills/ui-ux-pro-max/SKILL.md`](.claude/skills/ui-ux-pro-max/SKILL.md)
and [`CLAUDE.md`](CLAUDE.md).

---

## 🌐 Publishing the site (when ready)

This is a static site — it can be hosted **free**. Easiest options:
- **Netlify** or **Vercel** — connect this project's Git repository and it deploys
  automatically on every change. (Ask Claude Code: "help me deploy to Netlify".)
- **Cloudflare Pages** — also free and fast.

Before going live: set the real domain in `src/data/site.ts` (`url`), add a
`public/og-image.png` (1200×630) for social sharing, and connect the contact form
(see the note at the top of `src/pages/contact.astro`).
