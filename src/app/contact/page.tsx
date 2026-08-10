import type { Metadata } from "next";
import { site } from "@/lib/site";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: `Partnership, investment and media enquiries for ${site.name} — a founder-led group across social technology, enterprise AI, hospitality and property.`,
};

/* The full enquiry form. The home page closes on the Final CTA band (#contact),
   which points here for anyone who wants to write more than an email. */
export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
