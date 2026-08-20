import Link from "next/link";

import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import type { RoadmapStep } from "@/types/roadmap";

export interface RoadmapStepCardProps {
  step: RoadmapStep;
  /** 1-based position, shown inside the numbered node. */
  index: number;
}

/**
 * The whole card is a single link — same pattern as `CategoryCard` on
 * the homepage — rather than a card with a separate "read more" link
 * nested inside it. One clear click target, one accessible name.
 */
export function RoadmapStepCard({ step, index }: RoadmapStepCardProps) {
  return (
    <div className="relative flex gap-5">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-bold text-primary shadow-sm"
        aria-hidden
      >
        {index}
      </div>

      <Card asChild className="group flex-1">
        <Link href={step.href}>
          <CardTitle as="h2" className="transition-colors group-hover:text-primary">
            {step.title}
          </CardTitle>
          <CardDescription className="mt-1.5">{step.description}</CardDescription>
        </Link>
      </Card>
    </div>
  );
}
