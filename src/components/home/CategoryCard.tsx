"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CardTitle, CardDescription } from "@/components/ui/Card";
import { SpotlightCard } from "./SpotlightCard";
import { cn } from "@/lib/utils/cn";
import type { LearningCategory } from "@/config/homepage";

const accentClasses: Record<
  LearningCategory["accent"],
  { container: string; spotlightColor: string; arrowHover: string }
> = {
  primary: {
    container: "bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:text-primary",
    spotlightColor: "rgba(240, 80, 50, 0.14)",
    arrowHover: "text-primary",
  },
  tertiary: {
    container: "bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue/20 group-hover:text-accent-blue",
    spotlightColor: "rgba(59, 130, 246, 0.14)",
    arrowHover: "text-accent-blue",
  },
};

/**
 * CategoryCard enhanced with React Bits Spotlight interaction.
 *
 * Each card tracks cursor position to display a soft, localized ambient glow
 * matching the category's accent palette. The entire card acts as a single,
 * fully accessible link.
 */
export function CategoryCard({ title, description, href, icon: Icon, accent }: LearningCategory) {
  const styling = accentClasses[accent];

  return (
    <SpotlightCard
      spotlightColor={styling.spotlightColor}
      className="flex h-full w-full flex-col justify-between"
    >
      <Link href={href} className="flex h-full flex-col justify-between focus:outline-none">
        <div>
          <div
            className={cn(
              "mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 shadow-sm",
              styling.container
            )}
          >
            <Icon className="h-6 w-6" aria-hidden />
          </div>

          <CardTitle className="mb-2.5 flex items-center justify-between text-lg font-bold text-foreground transition-colors group-hover:text-primary">
            <span>{title}</span>
            <ArrowRight
              className={cn(
                "h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0",
                styling.arrowHover
              )}
              aria-hidden
            />
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed text-foreground-muted">
            {description}
          </CardDescription>
        </div>
      </Link>
    </SpotlightCard>
  );
}
