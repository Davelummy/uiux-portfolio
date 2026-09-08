"use client";

import { FadeIn } from "@/components/ui/fade-in";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <FadeIn>
      <div role="alert" className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="text-sm text-muted">Please try again or return home.</p>
        <button
          onClick={() => reset()}
          className="rounded-full bg-accent px-4 py-2 text-white transition hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </FadeIn>
  );
}
