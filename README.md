# KCS Group — Official Website

A premium, investor-grade corporate website for **KCS Group**, the founder-led
group of companies established by **Kam Chin Seng**. Monochrome black/white/beige,
minimal, investor-grade aesthetic.

**The ecosystem**
- **Nexxatech Global Sdn. Bhd.** — *TRIMO*, a one-to-one social technology platform
- **Nexflo Sdn Bhd** — *Jarvis AI*, an enterprise intelligence platform
- **Gemas Golf Resort Sdn Bhd** — hospitality & golf resort
- **National 6A Investment Co., Ltd.** — property development

**Sections:** Hero · Founder · Companies · Vision · Portfolio · Timeline · Insights · Contact

---

## Tech stack
Next.js 15 (App Router) · TypeScript · TailwindCSS v4 · Framer Motion

## Getting started
```bash
npm install     # first time / after pulling changes
npm run dev      # http://localhost:3000
```
| Command         | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local dev server           |
| `npm run build` | Build the production site            |
| `npm run start` | Serve the production build           |

## Editing the site
You mostly edit **content**, not code:
- **Company / vision / timeline / insights text** → [`src/lib/data.ts`](src/lib/data.ts)
- **Group name, founder, navigation, contact, social** → [`src/lib/site.ts`](src/lib/site.ts)
- **Colours, fonts, motion** → [`src/app/globals.css`](src/app/globals.css)

Or just ask **Claude Code** in plain English (e.g. *"add a Careers section",
"make the accent colour deep blue", "update the founder bio"*). It follows the
built-in **ui-ux-pro-max** design guide so changes stay premium and consistent.

## Project structure
```
src/
  app/          layout, home page, global styles + design tokens
  components/
    ui/         reusable primitives (Container, Section, Button, Reveal, …)
    layout/     Header, Footer
    sections/   the 8 page sections
  lib/          site config + content data
.claude/skills/ ui-ux-pro-max design system skill for Claude Code
```

## Before going live
- Set the real domain in `src/lib/site.ts` (`url`).
- Replace **illustrative** years/metrics in `data.ts` with verified figures, and
  confirm the holding brand name (placeholder: *KCS Group*).
- Add real imagery (founder portrait, logo) via `next/image`.
- Connect the contact form (replace `YOUR_FORM_ID` in `src/components/sections/Contact.tsx`).
- Add a `public/og-image.png` (1200×630) for social sharing.

## Deploy (free)
Optimised for **Vercel** (the makers of Next.js): push the repo to GitHub and
import it at vercel.com — it auto-detects Next.js and deploys on every push.
Netlify and Cloudflare Pages also work. (Ask Claude Code: *"help me deploy to Vercel"*.)
