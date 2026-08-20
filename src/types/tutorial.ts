import type { ReactNode } from "react";

/**
 * One numbered step in a practical tutorial. Unlike `LessonContent`
 * (which has exactly one Code Example / Output pair for a whole page),
 * a tutorial needs a command + explanation + expected output *per
 * step*, since each step in a hands-on walkthrough is its own small
 * command. Both `command` and `expectedOutput` are optional — a few
 * steps (like "buka terminal" or "buka repository di GitHub") are pure
 * actions with no command to run.
 */
export interface TutorialStep {
  title: string;
  description: ReactNode;
  command?: {
    label?: string;
    code: string;
  };
  commandExplanation?: ReactNode;
  expectedOutput?: {
    label?: string;
    code: string;
  };
}

export interface TutorialContent {
  title: string;
  description: string;
  /** Natural SEO `<title>` text — see `LessonContent.seoTitle` for the reasoning. */
  seoTitle?: string;
  intro: ReactNode;
  diagram?: {
    caption: string;
    content: ReactNode;
  };
  steps: TutorialStep[];
  summary: ReactNode;
}
