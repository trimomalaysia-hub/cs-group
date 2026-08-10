import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies } from "@/lib/data";
import { nexjarvis } from "@/lib/nexjarvis";
import CompanyDetailView from "@/components/sections/CompanyDetailView";
import NexjarvisView from "@/components/sections/NexjarvisView";

type Params = { slug: string };

/* Pre-render a static page for every company. */
export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = companies.find((x) => x.id === slug);
  if (!c) return {};
  if (c.id === "nexflo") {
    return {
      title: `${c.brand} — AI Transformation Platform`,
      description: nexjarvis.hero.body.en,
    };
  }
  return {
    title: `${c.brand} — ${c.category.en}`,
    description: c.detail?.intro.en ?? c.summary.en,
  };
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.id === slug);
  if (!company) notFound();

  if (slug === "nexflo") return <NexjarvisView />;
  return <CompanyDetailView slug={slug} />;
}
