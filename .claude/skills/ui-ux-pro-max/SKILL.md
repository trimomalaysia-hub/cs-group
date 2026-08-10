---
name: ui-ux-pro-max
description: >-
  Senior product-designer playbook for the CS Group website (Next.js 15 +
  TypeScript + TailwindCSS v4 + Framer Motion). USE THIS WHENEVER building or
  editing anything visual or structural — pages, sections, components, layout,
  typography, colour, spacing, motion/animation, responsiveness, forms, or
  accessibility. It enforces the black-and-gold (#0B0B0B / #C6A96B), serif-headline,
  investor-grade design system so every change stays premium and consistent.
  Trigger on requests like "add a section/page", "change the look", "make it
  feel more premium", "add an animation", "fix the spacing/typography", or any
  design/layout/styling work.
---

# UI/UX Pro Max — CS Group Design System & Playbook

Act as a **senior product designer + front-end engineer** for the **CS Group**
corporate site — a founder-led holding group. The bar is **investor-grade**:
**black & gold**, minimal, elegant, timeless. A deep matte black canvas (#0B0B0B),
near-white text (#F5F5F5), a soft metallic gold accent (#C6A96B) used sparingly,
**elegant serif headlines** over clean sans body copy, generous whitespace.
The target feel is a hybrid of a luxury brand (minimal, cinematic), a consulting
firm (structured, credible) and a future-focused AI company (modern, visionary):
premium, calm, powerful — never flashy.
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
**Colour** (black & gold):
- Surfaces: `bg-bg` (#0B0B0B deep matte black), `bg-surface` (#1A1A1A cards),
  `bg-elevated` (#232323 hover/raised).
- Text: `text-fg` (#F5F5F5), `text-muted` (#A0A0A0 secondary), `text-faint` (#6B6B6B meta).
- Lines: `border-line` (hairlines), `border-line-strong`.
- Accent: `text-accent` / `bg-accent` (#C6A96B soft metallic gold). **Use sparingly** —
  eyebrows, one headline keyword, hairlines, borders, hover states. Never a large gold
  fill, never gold body copy. No other colour anywhere.
- **Never** use raw hex or default Tailwind colours in markup. Tune tokens instead.

**Typography (two faces):**
- **Headings are serif.** A global rule in `globals.css` applies `--font-display`
  (**Playfair Display**) to `h1`–`h4`, so you **never** need `font-display` on a heading.
  Weight 500, tracking `-0.012em`. Use `font-display` explicitly only to set the serif on
  a *non-heading* element (a pull quote in a `<p>`/`<blockquote>`).
- **Body and UI are Inter** (`font-sans`), inherited from `body`.
- **Chinese**: Playfair has no Han glyphs, so `--font-display` falls back to a CJK serif
  and a `:lang(zh)` rule drops headings to weight 400 with slightly looser tracking.
  Don't fight this; don't hard-code weights on headings.
- Scale is **large and structured**: hero `text-5xl`→`sm:text-7xl`→`lg:text-8xl`; section
  titles `text-4xl`→`text-6xl`; keep `leading` tight on headlines, relaxed on body.
- An **italic gold keyword** in a headline (`className="italic text-accent"`) is the
  signature flourish — at most one per headline. Never split a localized string on a
  separator to achieve it; the copy must supply the fragments (see `hero.line2accent`).

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
  bounce, no spin, no parallax-heavy gimmicks.

**Hover is a system, not a per-component decision.** Four classes in `globals.css`
cover every interactive surface; do not invent a fifth or hand-roll `hover:` colour
changes. All run at `--hover-dur` (0.4s) on `--ease-out-soft`, and all also fire on
`:focus-visible` so keyboard users get the same affordance:
- `.hv-nav` — nav items: muted → gold + underline sweeping in from the left
- `.hv-link` — text links: brighten + underline fades in; add `.to-gold` to land on gold
- `.hv-card` — the single card hover: `translateY(-4px)`, gold edge, deeper shadow
- `.hv-mark` — headings and the logo: brightness only, **never** transform or scale
Buttons carry their hover inside `Button.tsx`. For a genuine one-off, still use
`duration-[var(--hover-dur)]` so it moves in step with everything else.
Never: strong glows, neon, bounce, or two different card hovers on one page.
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
