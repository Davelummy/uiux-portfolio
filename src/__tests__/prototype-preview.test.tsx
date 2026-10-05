import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { PrototypePreview } from "@/components/work/prototype-preview";

const embedUrl = "https://embed.figma.com/proto/example/Design?node-id=1-2&starting-point-node-id=1%3A2&embed-host=share";

describe("PrototypePreview", () => {
  it("shows a local preview and direct link without loading Figma", () => {
    const { container } = render(<PrototypePreview title="Riggs" embedUrl={embedUrl} imageUrl="/projects/riggs-pharmaceuticals.jpg" />);
    expect(container.querySelector("iframe")).toBeNull();
    expect(screen.getByAltText("Riggs static design preview")).toBeTruthy();
    const directUrl = new URL(screen.getByRole("link", { name: "Open prototype in Figma" }).getAttribute("href")!);
    expect(directUrl.hostname).toBe("www.figma.com");
    expect(directUrl.searchParams.get("node-id")).toBe("1-2");
    expect(directUrl.searchParams.get("starting-point-node-id")).toBe("1:2");
    expect(directUrl.searchParams.has("embed-host")).toBe(false);
  });

  it("loads the iframe only on request and removes it when closed", () => {
    const { container } = render(<PrototypePreview title="Voices" embedUrl={embedUrl} imageUrl="/projects/voices-unbroken.jpg" />);
    fireEvent.click(screen.getByRole("button", { name: "Load prototype here" }));
    expect(screen.getByTitle("Voices interactive Figma prototype").getAttribute("src")).toBe(embedUrl);
    expect(screen.getByRole("button", { name: "Close embedded preview" }).getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: "Close embedded preview" }));
    expect(container.querySelector("iframe")).toBeNull();
    expect(screen.getByAltText("Voices static design preview")).toBeTruthy();
  });
});
