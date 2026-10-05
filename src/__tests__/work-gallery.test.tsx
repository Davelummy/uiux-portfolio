import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import WorkGallery from "@/components/work/work-gallery";
import { getProjects } from "@/lib/projects";

const projects = await getProjects({ publishedOnly: true });

describe("WorkGallery", () => {
  it("shows project count in stats", () => {
    render(<WorkGallery projects={projects} />);
    const stats = screen.getAllByText(`${projects.length}`);
    expect(stats.length).toBeGreaterThan(0);
  });

  it("renders project cards with titles", () => {
    render(<WorkGallery projects={projects} />);
    projects.forEach((project) => {
      const links = screen.getAllByText(project.title);
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it("renders Neon Breach as a single discoverable case-study link", () => {
    render(<WorkGallery projects={projects} />);
    const link = screen.getByRole("link", { name: /Neon Breach/ });

    expect(link.getAttribute("href")).toBe("/work/neon-breach");
  });

  it("filters projects when a filter button is clicked", async () => {
    render(<WorkGallery projects={projects} />);
    const filterBtn = screen.getByRole("button", { name: "UI/UX Design" });
    fireEvent.click(filterBtn);
    const matchEls = screen.getAllByText(/\d+ projects? match/);
    expect(matchEls.length).toBeGreaterThan(0);
  });

  it("starts in grid view and switches between list and grid", () => {
    render(<WorkGallery projects={projects} />);
    const gridBtn = screen.getByLabelText("grid view");
    const listBtn = screen.getByLabelText("list view");
    expect(gridBtn.getAttribute("aria-pressed")).toBe("true");
    fireEvent.click(listBtn);
    expect(listBtn.getAttribute("aria-pressed")).toBe("true");
    expect(gridBtn.getAttribute("aria-pressed")).toBe("false");
    fireEvent.click(gridBtn);
    expect(gridBtn.getAttribute("aria-pressed")).toBe("true");
    expect(listBtn.getAttribute("aria-pressed")).toBe("false");
  });
});
