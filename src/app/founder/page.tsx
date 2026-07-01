import type { Metadata } from "next";
import { site } from "@/lib/site";
import FounderView from "@/components/sections/FounderView";

export const metadata: Metadata = {
  title: `${site.founder} — Founder`,
  description:
    "Kam Chin Seng on building enduring companies: creating opportunity, growing people, and keeping a company's warmth in the age of AI.",
};

export default function FounderPage() {
  return <FounderView />;
}
