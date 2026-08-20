import Link from "next/link";
import { FileQuestion } from "lucide-react";

import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

/**
 * Next.js renders this automatically for any unmatched route. Kept
 * deliberately small — reuses `buttonVariants` rather than introducing
 * a new styled element, matching the rest of the site instead of
 * falling back to the framework's bare default 404.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <FileQuestion className="h-10 w-10 text-foreground-muted" aria-hidden />
      <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
      <p className="max-w-sm text-sm text-foreground-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link href="/" className={cn(buttonVariants({ size: "md" }), "mt-2")}>
        Back to Documentation
      </Link>
    </main>
  );
}
