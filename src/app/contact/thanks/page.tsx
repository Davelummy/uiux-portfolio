import Link from "next/link";

export default function ContactThanksPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-16">
      <section className="card flex flex-col items-center gap-4 px-8 py-12 text-center">
        <p className="eyebrow">Thank you</p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Your inquiry has been sent.
        </h1>
        <p className="max-w-2xl text-muted">
          Thanks for reaching out. I&apos;ll review your message and respond
          within 48 hours.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href="/work" className="btn btn-ghost">
            View Work
          </Link>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
