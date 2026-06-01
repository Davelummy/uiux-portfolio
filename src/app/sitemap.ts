import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://davidolumide.com";

  const routes = ["", "/about", "/work", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const projects = await getProjects({ publishedOnly: true });

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...routes, ...projectRoutes];
}
