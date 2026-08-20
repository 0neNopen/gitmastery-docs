import type { RoadmapStep } from "@/types/roadmap";
import { RoadmapStepCard } from "./RoadmapStepCard";

export interface RoadmapTimelineProps {
  steps: RoadmapStep[];
}

/**
 * Renders any ordered list of steps as a vertical timeline — a numbered
 * node per step, connected by a single continuous line. Takes `steps`
 * as a prop rather than hardcoding the 9-step Git/GitHub roadmap, so
 * the same component could render a different roadmap later without
 * being copied.
 *
 * Marked up as a real ordered list (`<ol>`) so screen readers announce
 * "list of 9 items, item 3 of 9" etc. — the connecting line is a
 * decorative `::before`-style absolutely positioned div, not content.
 */
export function RoadmapTimeline({ steps }: RoadmapTimelineProps) {
  return (
    <ol className="relative">
      {/* Connecting line — spans the full height of the list, sits behind the numbered nodes */}
      <div className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-border" aria-hidden />

      {steps.map((step, i) => (
        <li key={step.id} className="mb-6 last:mb-0">
          <RoadmapStepCard step={step} index={i + 1} />
        </li>
      ))}
    </ol>
  );
}
