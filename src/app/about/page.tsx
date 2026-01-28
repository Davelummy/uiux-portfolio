export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Designing with clarity, empathy, and real product intent.
          </h1>
          <p className="mt-4 text-muted">
            I'm David Olumide Daniel, an Abuja-based UI/UX designer focused on
            translating product goals into clear, user-centered experiences.
            My work blends research, interaction design, and visual craft to
            create interfaces that feel confident and easy to use.
          </p>
          <p className="mt-4 text-muted">
            With 1+ year of hands-on experience, I enjoy collaborating closely
            with founders, PMs, and engineers to ship thoughtful products and
            scalable UI systems.
          </p>
        </div>

        <div className="card p-6">
          <p className="eyebrow">Snapshot</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Mobile-first UI and responsive web design.</li>
            <li>UX flow mapping and rapid prototyping.</li>
            <li>Collaborative partner for founders, PMs, and engineers.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Figma", "FigJam", "Maze", "Notion", "Miro"].map((tool) => (
              <span key={tool} className="pill">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">Principles</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Make complexity feel effortless through clear hierarchy.</li>
            <li>Design for trust with transparency, tone, and consistency.</li>
            <li>Prototype early to keep feedback fast and focused.</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">Capabilities</h2>
          <p className="mt-4 text-sm text-muted">
            I run lean discovery, map user journeys, and ship aligned UI
            systems. The goal is to keep teams moving quickly while staying
            anchored on user insight and usability.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Research", "UX Strategy", "UI Design", "Prototyping", "Design Systems"].map(
              (item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
