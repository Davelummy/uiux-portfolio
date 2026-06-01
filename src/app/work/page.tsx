import type { Metadata } from "next";
import WorkGallery from "@/components/work/work-gallery";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work | David Olumide Daniel",
  description:
    "Case studies that show strategy, craft, and results across UI/UX design, frontend, full-stack, and mobile design."
};

export default async function WorkPage() {
  const projects = await getProjects({ publishedOnly: true });

  return <WorkGallery projects={projects} />;
}
