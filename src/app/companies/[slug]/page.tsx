import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies } from "@/lib/data";
import CompanyDetailView from "@/components/sections/CompanyDetailView";

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

  return <CompanyDetailView slug={slug} />;
}
