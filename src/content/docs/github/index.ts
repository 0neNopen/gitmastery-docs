import type { LessonContent } from "@/types/lesson";
import { introduction } from "./introduction";
import { account } from "./account";
import { repository } from "./repository";
import { remote } from "./remote";
import { push } from "./push";
import { pull } from "./pull";
import { clone } from "./clone";
import { pullRequest } from "./pull-request";

/**
 * Every GitHub lesson, keyed by slug. Matches `config/docs-structure.ts`'s
 * `order` for the "github" category exactly.
 *
 * There is no "workflow" entry — that lesson was retired during the
 * curriculum audit: it covered the exact same end-to-end walkthrough
 * (mkdir → init → add file → commit → create GitHub repo → remote add
 * → push) as the standalone tutorial at `/tutorials/project-pertamaku`,
 * just condensed into one cramped code block instead of the tutorial's
 * per-step format. Keeping both was pure duplication.
 */
export const githubDocs: Record<string, LessonContent> = {
  introduction,
  account,
  repository,
  remote,
  push,
  pull,
  clone,
  "pull-request": pullRequest,
};
