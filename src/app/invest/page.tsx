import type { Metadata } from "next";
import { site } from "@/lib/site";
import InvestView from "@/components/sections/InvestView";

export const metadata: Metadata = {
  title: "Investors",
  description: `Invest in ${site.name} — a founder-led group across social technology, enterprise AI, hospitality and property. Diversified exposure to high-growth ventures with the discipline of a patient owner.`,
};

export default function InvestPage() {
  return <InvestView />;
}
