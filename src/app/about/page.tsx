"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <StaggerContainer className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <StaggerItem>
            <p className="eyebrow">About</p>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Building with clarity, empathy, and strong engineering.
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 text-muted">
              I&apos;m David Olumide Daniel, an Abuja-based Product Designer with frontend
              development capability. I focus on translating business goals into clear, user-centered
              experiences—and bringing the agreed interfaces to life through frontend development.
            </p>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 text-muted">
              Blending UX research, interaction design, and modern web development, I enjoy
              collaborating closely with founders and teams to ship thoughtful, usable digital experiences.
            </p>
          </StaggerItem>
        </div>

        <StaggerItem>
          <div className="card p-6">
            <p className="eyebrow">Snapshot</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Product design with frontend delivery.</li>
              <li>Mobile interface design and responsive web development.</li>
              <li>Collaborative partner capable of bridging design and engineering.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Figma", "React", "Next.js", "Firebase", "Node.js", "Tailwind"].map((tool) => (
                <span key={tool} className="pill">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>

      <StaggerContainer className="mt-16 grid gap-6 lg:grid-cols-2">
        <StaggerItem>
          <div className="card p-6">
            <h2 className="text-2xl font-semibold">Principles</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Make complexity feel effortless through clear hierarchy.</li>
              <li>Design for trust with transparency, tone, and consistency.</li>
              <li>Prototype early to keep feedback fast and focused.</li>
            </ul>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="card p-6">
            <h2 className="text-2xl font-semibold">Capabilities</h2>
            <p className="mt-4 text-sm text-muted">
              I run lean discovery, map user journeys, and then actually build the
              solutions. I connect interaction design with frontend implementation so the decisions behind a screen can carry through to the working experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["UI/UX Design", "Frontend Dev", "Design Systems"].map(
                (item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
}
