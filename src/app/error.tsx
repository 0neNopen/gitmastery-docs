"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

export interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Route-level Next.js error boundary so unexpected client runtime errors
 * recover cleanly in Indonesian instead of rendering a blank or raw crash screen.
 */
export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-16 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-red/30 bg-accent-red/10 text-accent-red">
        <AlertTriangle className="h-6 w-6" aria-hidden />
      </div>
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Terjadi Kesalahan
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-foreground-muted">
        Maaf, halaman ini mengalami kendala saat dimuat. Silakan coba muat ulang
        halaman atau kembali ke beranda.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Button type="button" onClick={reset} size="md">
          <RotateCcw className="h-4 w-4" aria-hidden />
          Coba Lagi
        </Button>
        <Link href="/" className={cn(buttonVariants({ variant: "secondary", size: "md" }))}>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
