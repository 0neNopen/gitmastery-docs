import type { LessonContent } from "@/types/lesson";
import { introduction } from "./introduction";
import { versionControl } from "./version-control";
import { installation } from "./installation";
import { configuration } from "./configuration";
import { init } from "./init";
import { status } from "./status";
import { commit } from "./commit";
import { log } from "./log";
import { branch } from "./branch";
import { merge } from "./merge";
import { remote } from "./remote";

/**
 * Every Git lesson, keyed by slug. Matches `config/docs-structure.ts`'s
 * `order` for the "git" category exactly. Note there's no separate
 * "add" entry — `git add` is taught inside the "commit" lesson as part
 * of the stage-then-commit workflow, rather than as its own page.
 */
export const gitDocs: Record<string, LessonContent> = {
  introduction,
  "version-control": versionControl,
  installation,
  configuration,
  init,
  status,
  commit,
  log,
  branch,
  merge,
  remote,
};
