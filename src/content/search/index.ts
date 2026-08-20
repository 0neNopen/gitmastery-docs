import type { SearchDocument } from "@/types/search";
import { lessonDocuments } from "./getting-started";
import { tutorialDocuments } from "./tutorials";
import { commandDocuments } from "./commands";
import { githubDocuments } from "./github-topics";
import { caseStudyDocuments } from "./case-studies";
import { faqDocuments } from "./faq";
import { glossaryDocuments } from "./glossary";

/**
 * The full search corpus: Lessons, Git Commands, GitHub Topics, Case
 * Studies, FAQ, and Glossary, all in one flat array. Adding a new
 * searchable page anywhere on the site means adding one entry to the
 * relevant file above — nothing else in the search system needs to
 * change.
 */
export const searchIndex: SearchDocument[] = [
  ...lessonDocuments,
  ...tutorialDocuments,
  ...commandDocuments,
  ...githubDocuments,
  ...caseStudyDocuments,
  ...faqDocuments,
  ...glossaryDocuments,
];
