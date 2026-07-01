---
name: ui-ux-pro-max
description: >-
  Senior product-designer playbook for the KCS Group website (Next.js 15 +
  TypeScript + TailwindCSS v4 + Framer Motion). USE THIS WHENEVER building or
  editing anything visual or structural — pages, sections, components, layout,
  typography, colour, spacing, motion/animation, responsiveness, forms, or
  accessibility. It enforces the deep-navy corporate, investor-grade design system
  (Lux Capital × McKinsey) so every change stays premium and consistent.
  Trigger on requests like "add a section/page", "change the look", "make it
  feel more premium", "add an animation", "fix the spacing/typography", or any
  design/layout/styling work.
---

# UI/UX Pro Max — KCS Group Design System & Playbook

Act as a **senior product designer + front-end engineer** for the **KCS Group**
corporate site — a founder-led holding group. The bar is **investor-grade**:
deep-navy corporate, minimal, professional, authoritative. A navy canvas, cool
near-white type, clean sans-serif headlines, a steel-blue accent, generous whitespace.
Restraint is the aesthetic. When unsure, do less, with more space.

## 0. Before you touch anything
1. **Reuse before you create.** There is a full design system and component
   library already. Compose existing pieces; don't reinvent.
2. **Read first:** `src/lib/site.ts`, `src/lib/data.ts`, `src/app/globals.css`,
   and the relevant files in `src/components/`. Match their patterns exactly.
3. **Stay on-system.** Never introduce off-palette colours, new fonts, or one-off
   spacing. If something genuinely new is needed, add a token in `globals.css`.

## 1. Tech & file architecture
- **Next.js 15 App Router** + **TypeScript** + **Tailwind v4** + **Framer Motion**.
- Path alias `@/*` → `src/*`.
```
src/
  app/            layout.tsx (fonts, metadata, header/footer), page.tsx (composes sections), globals.css
  components/
    ui/           Container, Section, SectionHeading, Eyebrow, Button, Reveal (+ Stagger/StaggerItem)
    layout/       Header (client, scroll-aware), Footer
    sections/     Hero, Founder, Companies, Vision, Portfolio, Timeline, Insights, Contact
  lib/            site.ts (identity/nav/contact), data.ts (companies, principles, timeline, insights)
```
- **Server components by default.** Add `"use client"` only when a component uses
  state, effects, or Framer Motion directly. Server components may render the
  client motion wrappers (`Reveal`, `Stagger`) freely.

## 2. The design system (use these tokens — defined in `globals.css @theme`)
**Colour** (deep navy, layered, corporate):
- Surfaces: `bg-bg` (deep navy page), `bg-surface` (raised navy cards), `bg-elevated` (hover/raised).
- Text: `text-fg` (cool near-white), `text-muted` (steel secondary), `text-faint` (meta).
- Lines: `border-line` (hairlines), `border-line-strong`.
- Accent: `text-accent` / `bg-accent` (steel blue). **Use sparingly** — eyebrows,
  one keyword, hairline highlights, hover states. Never fill large areas with it.
- **Never** use raw hex or default Tailwind colours in markup. Tune tokens instead.

**Typography:**
- All type is **Inter** (`font-display` = `font-sans` = Inter). Headings are
  heavier (600) with tight tracking for a clean, confident corporate feel.
- Scale is **large and structured**: hero `text-6xl`→`text-7xl`; section titles
  `text-4xl`→`text-6xl`; keep `leading` tight on headlines, relaxed on body.
- A coloured/italic accent keyword in a headline (`text-accent`) is the signature
  flourish — at most one per headline.

**Layout & spacing:**
- Wrap content in `<Container>` (max-w-7xl, consistent gutters).
- Every band is a `<Section id="...">` — it provides the generous rhythm
  (`py-24 sm:py-32 lg:py-40`) and top hairline. Don't hand-roll section padding.
- Open every section with `<SectionHeading index="0X" eyebrow="..." title=...
  lead=... />` for a consistent editorial top.
- **Whitespace is the luxury.** Be generous; never crowd.

**Shape:** soft, restrained — cards `rounded-2xl`, buttons `rounded-full`,
hairline borders, no heavy shadows (the depth comes from layered dark surfaces).

## 3. Motion (Framer Motion — subtle, premium)
- Reveal content on scroll with `<Reveal>` (single) or `<Stagger>` + `<StaggerItem>`
  (lists). Default easing is `[0.16, 1, 0.3, 1]`; durations ~0.6–0.9s.
- Motion is **felt, not noticed**: short fades + small lifts (y ≈ 20–28px). No
  bounce, no spin, no parallax-heavy gimmicks. Hover transitions are slow (300–500ms).
- Always respect `prefers-reduced-motion` (the Reveal primitives already do via
  `useReducedMotion` — keep it that way; don't hard-code large offsets).
- `whileInView` with `viewport={{ once: true }}` so things animate once.

## 4. Accessibility (non-negotiable)
- Semantic HTML; one `<h1>` (in Hero) per page; logical `<h2>`/`<h3>` order.
- Form fields need `<label htmlFor>` + matching `id` (see `Contact.tsx`).
- Decorative elements get `aria-hidden`; icon-only controls get `aria-label`.
- Strong contrast: `fg`/`muted` on dark surfaces; never `faint` for body copy on
  busy backgrounds. Keep the focus ring (global `:focus-visible`) intact.

## 5. Responsiveness & performance
- **Mobile-first.** Base styles for small screens; layer `sm:`/`lg:` up. Verify
  ~375px and desktop; nothing overflows; large type scales down gracefully.
- Keep client components minimal — push `"use client"` to the leaf that needs it.
- Images: `next/image` from `next/image`, with width/height + meaningful `alt`;
  put source files in `/public`. Replace monogram placeholders (Founder portrait,
  logo mark) with real assets when available.

## 6. Common tasks — the right way
- **Edit content** (companies, timeline, insights, vision) → `src/lib/data.ts`.
- **Edit identity / nav / contact** → `src/lib/site.ts`.
- **Retune colours, fonts, easing** → `src/app/globals.css` (`@theme`) and the
  `next/font` setup in `layout.tsx`.
- **Add a section** → new file in `src/components/sections/`, build it from
  `Section` + `SectionHeading` + `Reveal/Stagger` + existing UI; import it into
  `src/app/page.tsx`; add its `#id` to `nav` in `site.ts`.
- **Add a button** → `Button` (`variant="primary|outline|ghost"`). Don't hand-style.
- **A new page** (e.g. /insights/[slug]) → add a route under `src/app/`, reuse the
  same primitives and tokens.

## 7. Definition of done — self-check
- [ ] Server/client split correct (`"use client"` only where needed); builds clean.
- [ ] Only design-system tokens + components; no raw hex, no stray fonts/colours.
- [ ] Section uses `Section` + `SectionHeading`; rhythm and hairlines consistent.
- [ ] Large editorial type; generous whitespace; accent used sparingly.
- [ ] Motion is subtle, once-only, reduced-motion-safe.
- [ ] Great at ~375px and desktop; no overflow; type scales.
- [ ] Accessible: heading order, labels, `aria-hidden`/`aria-label`, focus ring.
- [ ] New content in `data.ts`/`site.ts`, not hard-coded in markup.
- [ ] `npm run build` passes.

After a change, summarise what you did plainly and suggest `npm run dev` to preview.
