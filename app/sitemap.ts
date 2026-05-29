import type { MetadataRoute } from "next";
import { SITE_URL, allSitePages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allSitePages.map((page) => ({
    url: new URL(page.href, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: page.href === "/" ? 1 : 0.8,
  }));
}
