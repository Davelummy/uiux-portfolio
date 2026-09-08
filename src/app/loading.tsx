import { FadeIn } from "@/components/ui/fade-in";

export default function RootLoading() {
  return (
    <FadeIn className="flex min-h-[60vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted border-t-ink" aria-label="Loading" />
    </FadeIn>
  );
}
