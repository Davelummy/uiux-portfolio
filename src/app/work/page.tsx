import type { Metadata } from "next";
import WorkGallery from "@/components/work/work-gallery";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work | David Olumide Daniel",
  description:
    "Selected projects across product design, frontend development, interactive prototypes, and game development.",
  alternates: { canonical: "/work" }
};

export default async function WorkPage() {
  const projects = await getProjects({ publishedOnly: true });

  return <WorkGallery projects={projects} />;
}
