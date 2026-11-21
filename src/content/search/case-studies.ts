import { troubleshooting, troubleshootingOrder } from "@/content/troubleshooting";
import type { SearchDocument } from "@/types/search";

const CASE_STUDY_KEYWORDS: Record<string, string[]> = {
  "merge-conflict": ["conflict", "konflik", "<<<<<<<", "bentrok", "troubleshooting"],
  "salah-commit": ["undo commit", "batalkan commit", "git reset", "git revert", "troubleshooting"],
  "push-ditolak": ["rejected", "non-fast-forward", "push ditolak", "error push", "troubleshooting"],
  "detached-head": ["detached head", "head", "checkout commit", "troubleshooting"],
  "gagal-clone": ["clone error", "permission denied", "gagal clone", "autentikasi", "troubleshooting"],
};

/**
 * Derived from `troubleshooting` registry so search results always
 * reflect the actual troubleshooting pages under `/troubleshooting/[slug]`.
 */
export const caseStudyDocuments: SearchDocument[] = troubleshootingOrder.flatMap(
  (slug): SearchDocument[] => {
    const item = troubleshooting[slug];
    if (!item) return [];
    return [
      {
        id: `case-study-${slug}`,
        category: "Case Study",
        title: item.title,
        description: item.description,
        href: `/troubleshooting/${slug}`,
        keywords: CASE_STUDY_KEYWORDS[slug],
      },
    ];
  }
);
