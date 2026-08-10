"use client";

/* OUR TEAM — the people behind the group.
   Photos are resolved on the server (see app/team/page.tsx): any file dropped
   into public/team/ named after a member's `id` arrives here in `photos`, so a
   non-technical editor never has to touch code to add a portrait. */

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import { companies } from "@/lib/data";
import { useLanguage, type Lang } from "@/lib/i18n";
import { teamContent as c, type TeamMember } from "@/lib/team";
import { onSpotlightMove } from "@/lib/spotlight";

export default function TeamView({ photos = {} }: { photos?: Record<string, string> }) {
  const { lang, t } = useLanguage();
  const mailto = `mailto:${site.careersEmail}?subject=${encodeURIComponent(c.cta.subject[lang])}`;

  /* An explicit `photo` in team.ts wins; otherwise use whatever was found in
     public/team/ for this id. Undefined means "show the monogram frame". */
  const photoFor = (m: TeamMember) => m.photo ?? photos[m.id];

  const featured = c.members.find((m) => m.featured);
  const others = c.members.filter((m) => !m.featured);

  return (
    <article>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-line pb-20 pt-36 sm:pt-44">
        <div className="vignette pointer-events-none absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-[-8rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[140px]"
          aria-hidden
        />
        <Container className="relative">
          <Reveal>
            <Eyebrow>{c.hero.eyebrow[lang]}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {c.hero.title[lang]}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {c.hero.lead[lang]}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href={site.careersHref} size="lg">{c.hero.primaryCta[lang]}</Button>
              <Button href="/#companies" variant="outline" size="lg">
                {c.hero.secondaryCta[lang]}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Leadership ---------------- */}
      <Section>
        <SectionHeading
          eyebrow={c.leadership.eyebrow[lang]}
          title={c.leadership.title[lang]}
          lead={c.leadership.lead[lang]}
        />

        {/* Founder — the one large lead card */}
        {featured && (
          <Reveal delay={0.05}>
            <Link href="/founder" className="group mt-12 block rounded-2xl">
              <div
                onMouseMove={onSpotlightMove}
                className="spotlight hv-card grid overflow-hidden rounded-2xl border border-line bg-surface/40 lg:grid-cols-12"
              >
                <div className="relative lg:col-span-5">
                  <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:h-full lg:min-h-[28rem] lg:aspect-auto">
                    <Portrait
                      src={photoFor(featured)}
                      name={featured.name}
                      alt={`${featured.name} — ${featured.role[lang]}`}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-bg/50"
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="flex h-full flex-col justify-center p-8 sm:p-12">
                    <span className="label text-faint">{c.leadership.eyebrow[lang]}</span>
                    <h3 className="mt-4 text-3xl text-fg sm:text-4xl">{featured.name}</h3>
                    <p className="mt-2 text-base text-accent">{featured.role[lang]}</p>
                    {featured.bio && (
                      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                        {featured.bio[lang]}
                      </p>
                    )}
                    <blockquote className="mt-8 max-w-xl border-l border-accent/60 pl-5">
                      <p className="font-display text-lg italic leading-snug text-fg sm:text-xl">
                        {t.founder.quote}
                      </p>
                    </blockquote>
                    <span className="mt-8 inline-flex items-center gap-2.5 text-sm text-fg transition-colors duration-[var(--hover-dur)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent">
                      {c.leadership.viewProfile[lang]}
                      <span
                        className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                        aria-hidden
                      >
                        &rarr;
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* The rest of the bench */}
        <Stagger className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((m) => (
            <StaggerItem key={m.id}>
              <MemberCard member={m} src={photoFor(m)} lang={lang} tba={c.leadership.tba[lang]} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-faint">{c.leadership.note[lang]}</p>
        </Reveal>
      </Section>

      {/* ---------------- How we work ---------------- */}
      <Section>
        <SectionHeading
          eyebrow={c.values.eyebrow[lang]}
          title={c.values.title[lang]}
          lead={c.values.lead[lang]}
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {c.values.items.map((v, i) => (
            <StaggerItem key={i}>
              <div
                onMouseMove={onSpotlightMove}
                className="spotlight hv-card h-full overflow-hidden rounded-2xl border border-line bg-surface/40 p-8"
              >
                <span className="font-display text-2xl text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl text-fg sm:text-2xl">{v.title[lang]}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{v.text[lang]}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- Across the group ---------------- */}
      <Section>
        <SectionHeading
          eyebrow={c.across.eyebrow[lang]}
          title={c.across.title[lang]}
          lead={c.across.lead[lang]}
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {companies.map((co) => (
            <StaggerItem key={co.id}>
              <Link
                href={`/companies/${co.id}`}
                onMouseMove={onSpotlightMove}
                className="spotlight hv-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 p-7"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="label text-faint">{co.index}</span>
                    <h3 className="mt-3 text-xl text-fg sm:text-2xl">{co.brand}</h3>
                    <p className="mt-2 text-sm text-accent/80">{co.sector[lang]}</p>
                  </div>
                  <span
                    className="mt-1 text-muted transition-all duration-[var(--hover-dur)] group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden
                  >
                    &rarr;
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted">{co.summary[lang]}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* ---------------- CTA ---------------- */}
      <Section className="text-center">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl">{c.cta.title[lang]}</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{c.cta.lead[lang]}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={site.careersHref} size="lg">{c.cta.button[lang]}</Button>
            <Button href="/#contact" variant="outline" size="lg">{t.header.enquire}</Button>
          </div>
          <p className="mt-6 text-sm text-faint">
            {c.cta.emailLabel[lang]}{" "}
            <a href={mailto} className="hv-link to-gold text-muted">
              {site.careersEmail}
            </a>
          </p>
        </Reveal>
      </Section>
    </article>
  );
}

/* --------------------------------------------------------------- Member --- */

function MemberCard({
  member,
  src,
  lang,
  tba,
}: {
  member: TeamMember;
  src?: string;
  lang: Lang;
  tba: string;
}) {
  const named = member.name.trim().length > 0;

  return (
    <figure
      onMouseMove={onSpotlightMove}
      className="spotlight hv-card flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/40"
    >
      <div className="relative aspect-[4/5]">
        <Portrait
          src={src}
          name={member.name}
          alt={named ? `${member.name} — ${member.role[lang]}` : member.role[lang]}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <figcaption className="flex flex-1 flex-col border-t border-line p-6">
        <h3 className={`text-xl ${named ? "text-fg" : "text-faint"}`}>
          {named ? member.name : tba}
        </h3>
        <p className="mt-1.5 text-sm text-accent">{member.role[lang]}</p>
        {member.company && <p className="mt-1 text-sm text-faint">{member.company}</p>}
        {member.bio && (
          <p className="mt-4 text-sm leading-relaxed text-muted">{member.bio[lang]}</p>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hv-link to-gold mt-5 w-fit text-sm text-faint"
          >
            LinkedIn
          </a>
        )}
      </figcaption>
    </figure>
  );
}

/* The portrait frame: the photograph when one exists, otherwise a monogram of
   the person's initials — or a neutral mark for a role not yet announced. */
function Portrait({
  src,
  name,
  alt,
  sizes,
  priority = false,
}: {
  src?: string;
  name: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-[center_20%]"
      />
    );
  }

  const mono = initials(name);
  return (
    <>
      <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        {mono ? (
          <span className="font-display text-4xl tracking-[0.08em] text-accent/45">{mono}</span>
        ) : (
          <PersonMark />
        )}
      </div>
    </>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/* Minimal portrait glyph shown while a role is still unannounced. */
function PersonMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-faint"
      aria-hidden
    >
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}
