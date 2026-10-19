import type { MetadataRoute } from "next";
import { projects } from "../data/projects";
import { SITE_URL } from "../data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/projects", "/team", "/distinctions", "/contact"];
  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
