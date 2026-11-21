import { docsStructure } from "@/config/docs-structure";
import { docsRegistry } from "@/content/docs";
import { faqOrder, faqRegistry } from "@/content/reference/faq";
import { troubleshooting, troubleshootingOrder } from "@/content/troubleshooting";
import { tutorials } from "@/content/tutorials";
import type { NavGroup } from "@/types/navigation";

/**
 * Builds the complete documentation sidebar dynamically from the site's
 * registries (`docsStructure`/`docsRegistry`, `tutorials`, `faqRegistry`,
 * and `troubleshooting`), plus core reference pages — so every learning
 * and reference section stays discoverable and highlights its active page.
 */
export function getSidebarGroups(): NavGroup[] {
  const docGroups: NavGroup[] = docsStructure.map((category) => ({
    title: category.label,
    items: category.order.flatMap((slug) => {
      const lesson = docsRegistry[category.slug]?.[slug];
      return lesson ? [{ label: lesson.title, href: `/docs/${category.slug}/${slug}` }] : [];
    }),
  }));

  const tutorialItems = Object.entries(tutorials).map(([slug, tutorial]) => ({
    label: tutorial.title,
    href: `/tutorials/${slug}`,
  }));

  const referenceGroup: NavGroup = {
    title: "Referensi",
    items: [
      { label: "Roadmap Belajar", href: "/curriculum" },
      { label: "Git Cheat Sheet", href: "/reference/cheat-sheet" },
      { label: "Glosarium", href: "/reference/glossary" },
    ],
  };

  const faqItems = faqOrder.flatMap((slug) => {
    const faq = faqRegistry[slug];
    return faq ? [{ label: faq.title, href: `/reference/faq/${slug}` }] : [];
  });

  const troubleshootingItems = troubleshootingOrder.flatMap((slug) => {
    const item = troubleshooting[slug];
    return item ? [{ label: item.title, href: `/troubleshooting/${slug}` }] : [];
  });

  return [
    ...docGroups,
    ...(tutorialItems.length > 0 ? [{ title: "Tutorial", items: tutorialItems }] : []),
    referenceGroup,
    ...(faqItems.length > 0 ? [{ title: "FAQ", items: faqItems }] : []),
    ...(troubleshootingItems.length > 0
      ? [{ title: "Troubleshooting", items: troubleshootingItems }]
      : []),
  ];
}
