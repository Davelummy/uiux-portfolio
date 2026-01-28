export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <section className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Ready to hire a UI/UX designer?
          </h1>
          <p className="mt-4 text-muted">
            I'm available for full-time roles, contracts, and collaborations.
            Share a quick overview and I'll reply within 48 hours.
          </p>

          <div className="mt-8 space-y-4">
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Email</p>
              <a
                href="mailto:Davidolumide123@gmail.com"
                className="mt-2 inline-block text-lg font-semibold text-ink"
              >
                Davidolumide123@gmail.com
              </a>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">WhatsApp</p>
              <p className="mt-2 text-sm text-muted">
                <a
                  href="https://wa.me/2349063723298"
                  className="font-semibold text-ink"
                >
                  +234 906 372 3298
                </a>
              </p>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Location</p>
              <p className="mt-2 text-sm text-muted">Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="card p-8">
          <p className="eyebrow">Project Inquiry</p>
          <form
            className="mt-6 grid gap-4"
            action="mailto:Davidolumide123@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-xs uppercase tracking-[0.2em] text-muted"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ink"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.2em] text-muted"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ink"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="project"
                className="text-xs uppercase tracking-[0.2em] text-muted"
              >
                Role or project details
              </label>
              <input
                id="project"
                name="project"
                type="text"
                placeholder="Role details or project scope"
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ink"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-[0.2em] text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your goals, timelines, and challenges."
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ink"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
