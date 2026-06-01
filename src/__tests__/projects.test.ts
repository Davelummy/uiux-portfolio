import { describe, it, expect } from "vitest";
import {
  getProjects,
  getProjectBySlug,
  getFeaturedProjects,
  getProjectCategories,
} from "@/lib/projects";

describe("getProjects", () => {
  it("returns published projects sorted by featured then sortOrder", async () => {
    const results = await getProjects({ publishedOnly: true });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((p) => p.isPublished)).toBe(true);
  });

  it("respects the limit option", async () => {
    const results = await getProjects({ publishedOnly: true, limit: 2 });
    expect(results.length).toBe(2);
  });

  it("returns all projects when publishedOnly is false", async () => {
    const results = await getProjects({ publishedOnly: false });
    expect(results.length).toBeGreaterThanOrEqual(4);
  });
});

describe("getProjectBySlug", () => {
  it("returns the matching project", async () => {
    const project = await getProjectBySlug("crystalline-max");
    expect(project).not.toBeNull();
    expect(project?.title).toBe("Crystalline Max");
  });

  it("returns null for non-existent slug", async () => {
    const project = await getProjectBySlug("non-existent");
    expect(project).toBeNull();
  });
});

describe("getFeaturedProjects", () => {
  it("returns only featured projects", async () => {
    const results = await getFeaturedProjects();
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((p) => p.isFeatured)).toBe(true);
  });
});

describe("getProjectCategories", () => {
  it("returns unique published categories as strings", async () => {
    const categories = await getProjectCategories();
    expect(categories.length).toBeGreaterThan(0);
    expect(categories.every((c) => typeof c === "string")).toBe(true);
  });
});
