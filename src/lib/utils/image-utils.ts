import type { Project } from "@/lib/projects";

export function getCoverStyle(project: Project) {
  return {
    background: project.cover.background,
    color: project.cover.foreground
  };
}
