/**
 * One node in the learning roadmap. Deliberately just title/description/
 * href — no "locked"/"completed" status fields, since that would require
 * a real per-user progress system that doesn't exist yet. Adding fake
 * progress states would be inventing a feature the approved design's
 * simplified brief didn't ask for.
 */
export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  href: string;
}
