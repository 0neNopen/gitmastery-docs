"use client";

import React, { useCallback, useRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spotlightColor?: string;
  className?: string;
}

/**
 * SpotlightCard tracks cursor coordinates directly via CSS custom properties
 * (`--spotlight-x` / `--spotlight-y`) so hover motion triggers zero React
 * re-renders per frame while preserving the smooth radial glow effect.
 */
export function SpotlightCard({
  children,
  spotlightColor = "rgba(240, 80, 50, 0.12)",
  className,
  style,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={
        {
          "--spotlight-x": "50%",
          "--spotlight-y": "50%",
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface-low p-6 transition-all duration-300",
        "hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-primary/10",
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at var(--spotlight-x) var(--spotlight-y), ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Card Content Layer */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
