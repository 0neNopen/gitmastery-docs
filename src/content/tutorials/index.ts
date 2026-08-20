import type { TutorialContent } from "@/types/tutorial";
import { projectPertamaku } from "./project-pertamaku";

/**
 * Every practical tutorial, keyed by slug — same registry pattern as
 * `content/docs`. Adding a second tutorial later means creating one
 * content file here and registering it below; no new route or
 * component is needed.
 */
export const tutorials: Record<string, TutorialContent> = {
  "project-pertamaku": projectPertamaku,
};
