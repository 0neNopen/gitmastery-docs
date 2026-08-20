import type { LessonContent } from "@/types/lesson";
import { gitVsGithub } from "./git-vs-github";
import { offline } from "./offline";
import { undoCommit } from "./undo-commit";
import { mainBranch } from "./main-branch";
import { forkVsBranch } from "./fork-vs-branch";

export const faqRegistry: Record<string, LessonContent> = {
  "git-vs-github": gitVsGithub,
  offline,
  "undo-commit": undoCommit,
  "main-branch": mainBranch,
  "fork-vs-branch": forkVsBranch,
};

export const faqOrder: string[] = [
  "git-vs-github",
  "offline",
  "undo-commit",
  "main-branch",
  "fork-vs-branch",
];
