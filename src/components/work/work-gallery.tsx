"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { LayoutGrid, LayoutList, Search } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "@/components/work/project-card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

type ViewMode = "grid" | "list";

type Props = {
  projects: Project[];
};

const FILTERS = [
  "All",
  "UI/UX Design",
  "Web Design",
  "Frontend",
  "Full-Stack",
  "Mobile Design",
  "Figma Prototype",
  "Game Design"
] as const;

function matchesQuery(project: Project, query: string) {
  if (!query) return true;
  const haystack = [
    project.title,
    project.summary ?? project.overview,
    project.overview,
    project.category,
    project.client,
    project.role,
    project.tags.join(" ")
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

export default function WorkGallery({ projects }: Props) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const stats = useMemo(() => {
    const categoryCount = new Set(
      projects
        .map((project) => project.category)
        .filter((value): value is string => Boolean(value))
    ).size;
    return [
      { value: `${projects.length}`, label: "Case Studies" },
      { value: "Web & Mobile", label: "Design Platforms" },
      { value: `${categoryCount}`, label: "Disciplines" }
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" || project.tags.includes(activeFilter);
      return matchesFilter && matchesQuery(project, query);
    });
  }, [projects, activeFilter, query]);

  const hasActiveFilter = query.trim().length > 0 || activeFilter !== "All";

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <FadeIn>
        <header className="max-w-3xl">
          <p className="eyebrow">Work</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl text-balance">
            Case studies that show strategy, craft, and delivery.
          </h1>
          <p className="mt-4 text-muted text-balance">
            Explore projects that highlight UX problem-solving, visual craft, and
            scalable design systems.
          </p>
        </header>
      </FadeIn>

      {projects.length === 0 ? (
        <section className="mt-10">
          <FadeIn className="card p-6">
            <h2 className="text-2xl font-semibold">No case studies yet.</h2>
            <p className="mt-3 text-sm text-muted">
              Publish a project to start showcasing your work here.
            </p>
            <Link href="/contact" className="btn btn-primary mt-6">
              Start a Project
            </Link>
          </FadeIn>
        </section>
      ) : (
        <>
          <StaggerContainer className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="stat">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.15} className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm min-w-[260px] max-w-sm flex-1">
                <Search className="h-4 w-4 text-muted" aria-hidden />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects..."
                  className="w-full bg-transparent text-sm outline-none"
                  aria-label="Search projects"
                />
              </div>
              <div className="flex gap-2">
                {(
                  [
                    { id: "list", icon: LayoutList },
                    { id: "grid", icon: LayoutGrid }
                  ] as const
                ).map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setViewMode(mode.id)}
                    aria-pressed={viewMode === mode.id}
                    className={clsx(
                      "rounded-full border p-2.5 transition",
                      viewMode === mode.id
                        ? "border-ink bg-ink text-white"
                        : "border-border bg-white text-ink-soft hover:bg-black/5"
                    )}
                    aria-label={`${mode.id} view`}
                  >
                    <mode.icon className="h-4 w-4" aria-hidden />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by discipline">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                  className={clsx(
                    "rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition",
                    activeFilter === filter
                      ? "border-ink bg-ink text-white shadow-sm"
                      : "border-border bg-white text-ink-soft hover:border-ink/30 hover:text-ink"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>

            <p className="mt-3 text-xs text-muted" aria-live="polite">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} match
              {hasActiveFilter ? (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setActiveFilter("All");
                  }}
                  className="ml-2 font-semibold text-ink underline-offset-2 hover:underline"
                >
                  Clear
                </button>
              ) : null}
            </p>
          </FadeIn>

          <section className="mt-10">
            <div className="flex items-center justify-between">
              <p className="eyebrow">
                {hasActiveFilter ? "Results" : "All Case Studies"}
              </p>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="card mt-6 p-6">
                <p className="text-sm text-muted">
                  No projects match your current filters.
                </p>
              </div>
            ) : (
              <div
                className={clsx(
                  "mt-6 grid gap-6",
                  viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                )}
              >
                {filteredProjects.map((project) => (
                  <article key={project.id} className="min-w-0">
                    <ProjectCard project={project} viewMode={viewMode} />
                  </article>
                ))}
              </div>
            )}
          </section>

          <FadeIn className="mt-20">
            <div className="card flex flex-col items-center gap-6 px-8 py-12 text-center animate-float shadow-lg border-white/50 bg-white/40">
              <p className="eyebrow">Next Step</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Want to explore a design partnership?
              </h2>
              <p className="max-w-2xl text-muted text-balance">
                Share your product goals and I will recommend a design plan
                tailored to your timeline.
              </p>
              <Link href="/contact" className="btn btn-primary mt-2">
                Choose how to get in touch
              </Link>
            </div>
          </FadeIn>
        </>
      )}
    </div>
  );
}
