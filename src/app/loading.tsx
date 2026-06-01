export default function RootLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted border-t-ink" aria-label="Loading" />
    </div>
  );
}
