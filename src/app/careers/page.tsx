import type { Metadata } from "next";
import { site } from "@/lib/site";
import CareersView from "@/components/sections/CareersView";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${site.name} — a founder-led group across social technology, enterprise AI, hospitality and property. We hire for ambition and character; interesting talent is always welcome to reach out.`,
};

export default function CareersPage() {
  return <CareersView />;
}
