import React from "react";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

/**
 * GitMastery Brand Logo & Icon Component.
 * Represents a modern Git branch and commit network inside a sleek gradient container.
 */
export function Logo({ className = "h-6 w-6", size, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="gm-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1502F" />
          <stop offset="100%" stopColor="#DF3813" />
        </linearGradient>
      </defs>

      {/* Rounded Squircle Background */}
      <rect width="32" height="32" rx="7" fill="url(#gm-logo-grad)" />

      {/* Main Commit Trunk Line */}
      <line
        x1="11"
        y1="9"
        x2="11"
        y2="23"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Branch Path */}
      <path
        d="M 11 19 C 11 14, 21 16.5, 21 12"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Commit Node: Top Left */}
      <circle cx="11" cy="9" r="2.75" fill="#FFFFFF" />
      <circle cx="11" cy="9" r="1.25" fill="#F1502F" />

      {/* Commit Node: Bottom Left */}
      <circle cx="11" cy="23" r="2.75" fill="#FFFFFF" />
      <circle cx="11" cy="23" r="1.25" fill="#DF3813" />

      {/* Commit Node: Branch Right */}
      <circle cx="21" cy="11" r="2.75" fill="#FFFFFF" />
      <circle cx="21" cy="11" r="1.25" fill="#F1502F" />
    </svg>
  );
}
