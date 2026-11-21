import { faqOrder, faqRegistry } from "@/content/reference/faq";
import type { SearchDocument } from "@/types/search";

const FAQ_KEYWORDS: Record<string, string[]> = {
  "git-vs-github": ["perbedaan git dan github", "beda git github", "git vs github", "difference"],
  offline: ["tanpa internet", "offline", "online", "koneksi", "lokal"],
  "undo-commit": ["undo commit", "batalkan commit", "hapus commit", "git reset", "git revert"],
  "main-branch": ["main", "master", "branch default", "cabang utama"],
  "fork-vs-branch": ["fork", "branch", "fork vs branch", "open source", "kontribusi"],
};

/**
 * Derived from `faqRegistry` so Indonesian titles and descriptions stay
 * in sync with the actual FAQ pages, enriched with common beginner
 * search phrasings in Indonesian and English.
 */
export const faqDocuments: SearchDocument[] = faqOrder.flatMap((slug): SearchDocument[] => {
  const faq = faqRegistry[slug];
  if (!faq) return [];
  return [
    {
      id: `faq-${slug}`,
      category: "FAQ",
      title: faq.title,
      description: faq.description,
      href: `/reference/faq/${slug}`,
      keywords: FAQ_KEYWORDS[slug],
    },
  ];
});
