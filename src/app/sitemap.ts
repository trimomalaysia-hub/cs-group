import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { companies } from "@/lib/data";

/* Static routes + one entry per company detail page. Uses site.url as the base,
   so it becomes correct automatically once the real domain is set in site.ts. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();
  const staticPaths = ["", "/founder", "/careers", "/invest", "/contact"];
  const companyPaths = companies.map((c) => `/companies/${c.id}`);

  return [...staticPaths, ...companyPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
