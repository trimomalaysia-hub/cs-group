# Nexxatech Official Website — Project Guide for Claude

This is the **Nexxatech company website**, built with **Astro 5 + Tailwind CSS v4**.
It will mostly be edited by a **non-technical team member** giving you plain-English
requests. Your job: make the changes correctly, keep the site polished and on-brand,
and explain what you did in simple terms.

## Golden rule: design work → use the `ui-ux-pro-max` skill

Whenever a request involves **anything visual or structural** — adding/editing pages
or sections, styling, layout, colours, components, spacing, responsiveness, forms,
or "make it look nicer" — **use the `ui-ux-pro-max` skill** (in
`.claude/skills/ui-ux-pro-max/`). It defines the design system and quality bar.
Follow it; don't freelance the styling.

## Project map

```
src/
  data/site.ts          ← SINGLE source of truth: name, nav, contact, socials, SEO
  styles/global.css     ← design tokens (colours, fonts) + base styles
  layouts/BaseLayout.astro  ← shared head/SEO/header/footer wrapper for every page
  components/            ← reusable pieces: Button, Section, Header, Footer, FeatureCard, CTA
  pages/                ← one file = one page (index, about, services, contact). URL = filename.
public/                 ← static files served as-is (favicon, og-image, robots.txt)
```

## How to do common things (do them this way)

- **Change company name / contact info / menu / social links** → edit `src/data/site.ts` only.
- **Change brand colours or fonts** → edit the `@theme` block in `src/styles/global.css`
  (and the font `<link>` in `BaseLayout.astro` if changing fonts).
- **Add a page** → new file in `src/pages/`, wrap in `<BaseLayout title=... description=...>`,
  build from `<Section>` + existing components, then add it to `nav` in `src/data/site.ts`.
- **Add/edit a section** → copy an existing `<Section>` block and change its content.
- **Buttons** → always use `Button.astro`. **Cards** → `FeatureCard.astro`. Don't hand-roll styles.
- **Never** hard-code hex colours or random fonts in markup — use the design tokens.

## Commands

- `npm run dev` — start the local preview server (then open the printed `localhost` URL).
- `npm run build` — build the production site into `dist/`.
- `npm run preview` — preview the production build locally.

When starting the dev server during a task, prefer background mode so it doesn't
block: `astro dev --background` (manage with `astro dev stop` / `status` / `logs`).

## Quality bar (always)

- Mobile-first and fully responsive; check ~375px and desktop.
- Accessible: semantic HTML, one `<h1>` per page, labelled form fields, `alt` on images,
  strong contrast, visible focus rings.
- Astro ships **zero JS** by default — keep it that way unless real interactivity is needed.
- After a change, summarise it plainly and suggest previewing with `npm run dev`.

## Environment notes

- Node.js and Git are installed in the user folder (`%LOCALAPPDATA%\Programs\nodejs`
  and `…\Programs\MinGit\cmd`). If a fresh terminal can't find `node`/`npm`/`git`,
  they're on the user PATH — open a new terminal, or prepend those two folders to PATH.

## Reference docs

Full Astro docs: https://docs.astro.build — consult before non-trivial work:
- [Pages & routing](https://docs.astro.build/en/basics/astro-pages/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Styling & Tailwind](https://docs.astro.build/en/guides/styling/)
- [Images](https://docs.astro.build/en/guides/images/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/) (for a blog later)
- [Deploy](https://docs.astro.build/en/guides/deploy/)
