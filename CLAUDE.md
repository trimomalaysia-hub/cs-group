# KCS Group Website — Project Guide for Claude

Premium corporate site for **KCS Group**, the founder-led group established by
**Kam Chin Seng**. Built with **Next.js 15 (App Router) · TypeScript · TailwindCSS v4
· Framer Motion**. Aesthetic: dark, minimal, editorial, investor-grade (Lux Capital ×
McKinsey). It will often be edited by a **non-technical team member** in plain English.

## Golden rule: design work → use the `ui-ux-pro-max` skill
For anything visual or structural (pages, sections, styling, layout, colour,
typography, motion, responsiveness, forms), **use the `ui-ux-pro-max` skill** in
`.claude/skills/ui-ux-pro-max/`. It defines the design system and quality bar.
Follow it; do not freelance styling or introduce off-system colours/fonts.

## Architecture
```
src/
  app/         layout.tsx (fonts, SEO, header/footer) · page.tsx (composes sections) · globals.css (tokens)
  components/
    ui/        Container, Section, SectionHeading, Eyebrow, Button, Reveal (+Stagger/StaggerItem)
    layout/    Header (client, scroll-aware) · Footer
    sections/  Hero, Founder, Companies, Vision, Portfolio, Timeline, Insights, Contact
  lib/         site.ts (identity/nav/contact) · data.ts (companies, principles, timeline, insights)
```
- Path alias `@/*` → `src/*`.
- **Server components by default**; add `"use client"` only for state/effects/Framer
  Motion. Server components can render the client `Reveal`/`Stagger` wrappers.

## Where things live (edit these, not the markup)
- **Companies / vision / timeline / insights copy** → `src/lib/data.ts`
- **Group name, founder, nav, contact, social** → `src/lib/site.ts`
- **Colours, fonts, motion easing** → `src/app/globals.css` (`@theme`) + `layout.tsx`
- **Add a section** → file in `src/components/sections/`, built from `Section` +
  `SectionHeading` + `Reveal/Stagger`; import into `src/app/page.tsx`; add its `#id`
  to `nav` in `site.ts`.

## Design system quick reference
- Surfaces `bg-bg` / `bg-surface` / `bg-elevated`; text `text-fg` / `text-muted` /
  `text-faint`; hairlines `border-line` / `border-line-strong`; accent `text-accent`
  (champagne — **sparingly**). Headings = serif `font-display`; body = Inter.
- Sections via `<Section>`; container via `<Container>`; buttons via `<Button>`.
- Motion: `<Reveal>` / `<Stagger>` only — subtle, once-only, reduced-motion-safe.

## Commands
- `npm run dev` — local dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build

## Quality bar (always)
- Investor-grade restraint: large type, generous whitespace, accent used sparingly.
- Mobile-first and fully responsive (check ~375px and desktop).
- Accessible: one `<h1>`, logical headings, labelled inputs, `aria-hidden`/`aria-label`,
  visible focus ring.
- Run `npm run build` after non-trivial changes; summarise changes plainly.

## Content / TODO notes
- `data.ts` years and portfolio metrics are **illustrative placeholders** — replace
  with verified figures. The group name **"KCS Group"** is a placeholder for the
  holding brand; rename in `site.ts` if a formal brand exists.
- Replace monogram placeholders (Founder portrait, logo mark) with real assets via
  `next/image` when available.
- Contact form posts to a placeholder Formspree endpoint (see `Contact.tsx`).

## Environment notes
- Node.js and Git are no-admin user-folder installs (`%LOCALAPPDATA%\Programs\nodejs`
  and `…\Programs\MinGit\cmd`), on the user PATH. If a fresh terminal can't find
  `node`/`npm`/`git`, open a new terminal or prepend those folders to PATH.
