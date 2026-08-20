import type { MetadataRoute } from "next";

import { docsStructure } from "@/config/docs-structure";
import { docsRegistry } from "@/content/docs";
import { tutorials } from "@/content/tutorials";
import { faqOrder } from "@/content/reference/faq";
import { troubleshootingOrder } from "@/content/troubleshooting";
import { siteConfig } from "@/config/site";

/**
 * Generated dynamically from `docsStructure` + `docsRegistry`, tutorials,
 * faq, and troubleshooting registries — every real page on the site is
 * automatically included in the sitemap without manual list drift.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/curriculum`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/reference/cheat-sheet`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/reference/glossary`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const docRoutes: MetadataRoute.Sitemap = docsStructure.flatMap((category) =>
    Object.keys(docsRegistry[category.slug] ?? {}).map((slug) => ({
      url: `${siteConfig.url}/docs/${category.slug}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const tutorialRoutes: MetadataRoute.Sitemap = Object.keys(tutorials).map((slug) => ({
    url: `${siteConfig.url}/tutorials/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const faqRoutes: MetadataRoute.Sitemap = faqOrder.map((slug) => ({
    url: `${siteConfig.url}/reference/faq/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const troubleshootingRoutes: MetadataRoute.Sitemap = troubleshootingOrder.map((slug) => ({
    url: `${siteConfig.url}/troubleshooting/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...docRoutes,
    ...tutorialRoutes,
    ...faqRoutes,
    ...troubleshootingRoutes,
  ];
}
