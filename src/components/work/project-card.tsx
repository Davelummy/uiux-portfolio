import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { getCoverStyle } from "@/lib/utils/image-utils";

export function ProjectCard({ project, viewMode = "grid" }: {
  project: Project;
  viewMode?: "grid" | "list";
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`View ${project.title} case study`}
      className={clsx(
        "card group flex h-full overflow-hidden transition hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
        viewMode === "list" ? "flex-col sm:flex-row" : "flex-col"
      )}
    >
      <div
        className={clsx(
          "relative aspect-[16/10] shrink-0 overflow-hidden border-b border-border bg-[#f1eee9]",
          viewMode === "list" ? "sm:w-[42%] sm:border-b-0 sm:border-r" : "w-full"
        )}
      >
        {project.coverImageUrl ? (
          <Image
            src={project.coverImageUrl}
            alt={`${project.title} design preview`}
            fill
            sizes={viewMode === "grid"
              ? "(max-width: 767px) calc(100vw - 48px), (max-width: 1152px) calc((100vw - 72px) / 2), 540px"
              : "(max-width: 639px) calc(100vw - 48px), (max-width: 1152px) 42vw, 464px"}
            className="object-contain"
            placeholder={project.blurDataUrl ? "blur" : "empty"}
            blurDataURL={project.blurDataUrl ?? undefined}
          />
        ) : (
          <div className="absolute inset-0" style={getCoverStyle(project)} aria-hidden />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold leading-snug text-ink sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.summary ?? project.overview}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-ink">
          View case study
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
