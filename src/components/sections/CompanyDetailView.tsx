"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { companies } from "@/lib/data";
import { site } from "@/lib/site";
import { useLanguage } from "@/lib/i18n";

export default function CompanyDetailView({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const company = companies.find((c) => c.id === slug);
  if (!company) return null;

  const d = company.detail;

  // Resolve optional pieces up front (keeps the JSX clean + type-safe).
  const overview = d ? d.overview[lang] : [company.description[lang]];
  const positioning = d?.positioning?.[lang];
  const quickFacts = d?.quickFacts?.[lang];
  const goals = d?.goals?.[lang];
  const businessAreas = d?.businessAreas;
  const projects = d?.projects;
  const hasMission = !!d?.mission;

  const facts =
    d?.facts?.map((f) => ({ label: f.label[lang], value: f.value[lang] })) ?? [
      { label: t.company.fallback.sector, value: company.sector[lang] },
      { label: t.company.fallback.status, value: company.status[lang] },
      { label: t.company.fallback.since, value: company.year },
      { label: t.company.fallback.founder, value: site.founder },
    ];

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
            <Link
              href="/#companies"
              className="label inline-flex items-center gap-2 text-faint transition-colors hover:text-accent"
            >
              ← {t.company.allCompanies}
            </Link>
          </Reveal>

          <div className="mt-10">
            <Reveal>
              <Eyebrow index={company.index}>{company.sector[lang]}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-5xl tracking-tight sm:text-7xl">{company.brand}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-muted">{company.legalName}</p>
            </Reveal>

            {d && (
              <Reveal delay={0.15}>
                <p className="mt-8 font-display text-2xl italic leading-snug text-accent sm:text-3xl">
                  {d.tagline[lang]}
                </p>
              </Reveal>
            )}

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                {d ? d.intro[lang] : company.summary[lang]}
              </p>
            </Reveal>

            {quickFacts && quickFacts.length > 0 && (
              <Reveal delay={0.25}>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
                  {quickFacts.map((chip, i) => (
                    <span key={chip} className="flex items-center gap-8">
                      {i > 0 && <span className="hidden h-3 w-px bg-line-strong sm:block" aria-hidden />}
                      <span className="label text-faint">{chip}</span>
                    </span>
                  ))}
                </div>
              </Reveal>
            )}

            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Button href="/#contact" size="lg">{t.header.enquire}</Button>
                <Button href="/#companies" variant="outline" size="lg">{t.company.allCompanies}</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- Overview + Facts ---------------- */}
      <Section bordered={false}>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{t.company.overview}</Eyebrow>
            </Reveal>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
              {overview.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {positioning ? (
              <Reveal delay={0.15}>
                <p className="mt-10 border-l border-accent/60 pl-6 font-display text-xl italic leading-snug text-fg sm:text-2xl">
                  {positioning}
                </p>
              </Reveal>
            ) : !d ? (
              <Reveal delay={0.1}>
                <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                  {company.highlights[lang].map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-faint">
                      <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>

          {/* At a glance */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface/40">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-start justify-between gap-6 px-6 py-4">
                    <dt className="label text-faint">{f.label}</dt>
                    <dd className="text-right text-sm text-fg">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---------------- Vision & Mission ---------------- */}
      {d && (
        <Section>
          <SectionHeading
            eyebrow={t.company.directionEyebrow}
            title={hasMission ? t.company.visionMissionTitle : t.company.visionLabel}
          />
          <div className={`mt-12 grid gap-4 ${hasMission ? "md:grid-cols-2" : ""}`}>
            <Reveal>
              <div className="h-full rounded-2xl border border-line bg-surface/40 p-8 sm:p-10">
                <span className="label text-accent/80">{t.company.visionLabel}</span>
                <p className="mt-6 font-display text-2xl leading-snug text-fg sm:text-[1.7rem]">
                  {d.vision[lang]}
                </p>
              </div>
            </Reveal>
            {d.mission && (
              <Reveal delay={0.08}>
                <div className="h-full rounded-2xl border border-line bg-surface/40 p-8 sm:p-10">
                  <span className="label text-accent/80">{t.company.missionLabel}</span>
                  <p className="mt-6 font-display text-2xl leading-snug text-fg sm:text-[1.7rem]">
                    {d.mission[lang]}
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </Section>
      )}

      {/* ---------------- Goals ---------------- */}
      {goals && goals.length > 0 && (
        <Section>
          <SectionHeading eyebrow={t.company.goalsEyebrow} title={t.company.goalsTitle} />
          <Stagger className="mt-12">
            {goals.map((g, i) => (
              <StaggerItem key={i}>
                <div className="flex items-baseline gap-6 border-t border-line py-6">
                  <span className="font-display text-xl text-accent/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-muted">{g}</p>
                </div>
              </StaggerItem>
            ))}
            <div className="border-t border-line" />
          </Stagger>
        </Section>
      )}

      {/* ---------------- Core business / experiences ---------------- */}
      {businessAreas && businessAreas.length > 0 && (
        <Section>
          <SectionHeading eyebrow={t.company.coreEyebrow} title={t.company.coreTitle} />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
            {businessAreas.map((a) => (
              <StaggerItem key={a.title.en}>
                <div className="h-full rounded-2xl border border-line bg-surface/40 p-7 transition-colors duration-500 hover:border-accent/40">
                  <h3 className="text-lg text-fg sm:text-xl">{a.title[lang]}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{a.text[lang]}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      )}

      {/* ---------------- Signature projects ---------------- */}
      {projects && projects.length > 0 && (
        <Section>
          <SectionHeading eyebrow={t.company.projectsEyebrow} title={t.company.projectsTitle} />
          <Stagger className="mt-12">
            {projects.map((p, i) => (
              <StaggerItem key={p.name}>
                <article className="grid grid-cols-1 gap-3 border-t border-line py-10 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-1">
                    <span className="label text-faint">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-2xl text-fg sm:text-3xl lg:col-span-5">{p.name}</h3>
                  <p className="text-lg leading-relaxed text-muted lg:col-span-6">{p.text[lang]}</p>
                </article>
              </StaggerItem>
            ))}
            <div className="border-t border-line" />
          </Stagger>
        </Section>
      )}

      {/* ---------------- CTA ---------------- */}
      <Section className="text-center">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl">
            {t.company.interestedPre}{company.brand}{t.company.interestedPost}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{t.company.ctaLead}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/#contact" size="lg">{t.company.contactCta}</Button>
            <Button href="/#companies" variant="outline" size="lg">{t.company.allCompaniesCta}</Button>
          </div>
        </Reveal>
      </Section>
    </article>
  );
}
