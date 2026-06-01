"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, LayoutGrid, LayoutList, Search } from "lucide-react";
import type { Project } from "@/lib/projects";
import { getCoverStyle } from "@/lib/utils/image-utils";
import { BehanceIcon } from "@/components/ui/social-icons";
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
  "Figma Prototype"
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
  const reducedMotion = useReducedMotion() ?? true;
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  const stats = useMemo(() => {
    const clientCount = new Set(
      projects
        .map((project) => project.client)
        .filter((value): value is string => Boolean(value))
    ).size;
    const categoryCount = new Set(
      projects
        .map((project) => project.category)
        .filter((value): value is string => Boolean(value))
    ).size;
    return [
      { value: `${projects.length}`, label: "Case Studies" },
      { value: `${clientCount}`, label: "Client Partners" },
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
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <FadeIn direction="up">
        <header className="max-w-3xl">
          <p className="eyebrow">Work</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl text-balance">
            Case studies that show strategy, craft, and results.
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

          <FadeIn delay={0.15} direction="up" className="mt-10">
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
              <motion.div
                layout={!reducedMotion}
                suppressHydrationWarning
                className={clsx(
                  "mt-6 gap-6",
                  viewMode === "grid"
                    ? "columns-1 sm:columns-2 lg:columns-2 [&>*]:break-inside-avoid"
                    : "grid grid-cols-1"
                )}
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.article
                      key={project.id}
                      layout={!reducedMotion}
                      suppressHydrationWarning
                      initial={
                        reducedMotion ? false : { opacity: 0, y: 16 }
                      }
                      animate={
                        reducedMotion
                          ? { opacity: 1 }
                          : { opacity: 1, y: 0 }
                      }
                      exit={
                        reducedMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: -16 }
                      }
                      transition={{ duration: 0.25 }}
                      className="mb-6"
                    >
                      <div
                        className={clsx(
                          "card flex h-full overflow-hidden transition hover:-translate-y-1.5 hover:shadow-md",
                          viewMode === "list" ? "sm:flex-row" : "flex-col"
                        )}
                      >
                        <div
                          className={clsx(
                            "relative overflow-hidden",
                            viewMode === "list" ? "sm:w-[40%] shrink-0" : ""
                          )}
                        >
                          <Link href={`/work/${project.slug}`} className="block focus-ring">
                            <div
                              className={clsx(
                                "relative p-6 text-white min-h-[200px] flex flex-col justify-end overflow-hidden",
                                viewMode === "list" ? "sm:min-h-[220px]" : ""
                              )}
                            >
                              {project.coverImageUrl ? (
                                <>
                                  <Image
                                    src={project.coverImageUrl}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    placeholder={
                                      project.blurDataUrl ? "blur" : "empty"
                                    }
                                    blurDataURL={project.blurDataUrl ?? undefined}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                                </>
                              ) : (
                                <div className="absolute inset-0" style={getCoverStyle(project)} />
                              )}
                              <p className="relative z-10 text-xs uppercase tracking-[0.2em] text-white/70">
                                {project.category}
                              </p>
                              <h3 className="relative z-10 mt-1.5 text-xl font-semibold">
                                {project.title}
                              </h3>
                              <p className="relative z-10 mt-1 text-sm text-white/80 line-clamp-2">
                                {project.summary ?? project.overview}
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-1 flex-col gap-3 p-5">
                          <Link href={`/work/${project.slug}`} className="flex flex-1 flex-col gap-3 focus-ring">
                            <div className="flex items-center justify-between text-xs text-muted">
                              <span>{project.role}</span>
                              <span>{project.duration}</span>
                            </div>
                            <p className="text-sm text-muted leading-relaxed line-clamp-3">
                              {project.overview}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.map((tag) => (
                                <span key={tag} className="pill">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </Link>
                          <div className="mt-auto flex flex-wrap items-center gap-3 text-sm font-semibold text-ink">
                            <Link
                              href={`/work/${project.slug}`}
                              className="inline-flex items-center gap-2 focus-ring"
                            >
                              View case study
                              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
                            </Link>
                            {project.behanceUrl ? (
                              <a
                                href={project.behanceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-semibold text-accent transition hover:text-ink"
                              >
                                <BehanceIcon className="h-3.5 w-3.5" />
                                Behance
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </section>

          <FadeIn direction="up" className="mt-20">
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
                Book a Project Call
              </Link>
            </div>
          </FadeIn>
        </>
      )}
    </main>
  );
}
