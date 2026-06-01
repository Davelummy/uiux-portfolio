import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-semibold">404</h1>
      <p className="mt-4 text-lg text-muted">Page not found.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link href="/work" className="btn btn-ghost">
          View Work
        </Link>
      </div>
    </main>
  );
}
