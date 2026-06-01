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

  it("filters projects when a filter button is clicked", async () => {
    render(<WorkGallery projects={projects} />);
    const filterBtn = screen.getByRole("button", { name: "UI/UX Design" });
    fireEvent.click(filterBtn);
    const matchEls = screen.getAllByText(/\d+ projects? match/);
    expect(matchEls.length).toBeGreaterThan(0);
  });

  it("switches to grid view when grid button is clicked", () => {
    render(<WorkGallery projects={projects} />);
    const gridBtn = screen.getByLabelText("grid view");
    fireEvent.click(gridBtn);
    expect(gridBtn.getAttribute("aria-pressed")).toBe("true");
  });
});
