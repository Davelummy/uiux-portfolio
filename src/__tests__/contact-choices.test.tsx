import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ContactChoices } from "@/components/contact/contact-choices";

const search = vi.hoisted(() => ({ value: "" }));
vi.mock("next/navigation", () => ({ useSearchParams: () => new URLSearchParams(search.value) }));

beforeEach(() => {
  search.value = "";
  vi.stubGlobal("fetch", vi.fn());
  Element.prototype.scrollIntoView = vi.fn();
  vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })));
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

function fillBrief() {
  fireEvent.change(screen.getByLabelText(/Name \(required\)/), { target: { value: "Preview Tester" } });
  fireEvent.change(screen.getByLabelText(/Email \(required\)/), { target: { value: "preview@example.com" } });
  fireEvent.change(screen.getByLabelText(/What do you need help with/), { target: { value: "Please help improve our website." } });
}

describe("contact choices", () => {
  it("preserves hiring context in drafts and updates when the entry query changes", () => {
    search.value = "intent=hiring";
    const { rerender } = render(<ContactChoices />);
    expect(screen.getByRole("radio", { name: "A hiring opportunity" })).toBeChecked();
    expect(decodeURIComponent(screen.getByRole("link", { name: /Open email draft/ }).getAttribute("href")!)).toContain("Hiring opportunity");
    search.value = "intent=project";
    rerender(<ContactChoices />);
    expect(screen.getByRole("radio", { name: "A design project" })).toBeChecked();
  });

  it("validates the minimum brief without sending an empty enquiry", async () => {
    render(<ContactChoices />);
    fireEvent.click(screen.getByRole("button", { name: /Use the form/ }));
    fireEvent.click(screen.getByRole("button", { name: "Send enquiry" }));
    expect(await screen.findByText("Please add a short description.")).toBeVisible();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("keeps the brief after a failed submission and permits a successful retry", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({ ok: false } as Response).mockResolvedValueOnce({ ok: true } as Response);
    render(<ContactChoices />);
    fireEvent.click(screen.getByRole("button", { name: /Use the form/ }));
    fillBrief();
    fireEvent.click(screen.getByRole("button", { name: "Send enquiry" }));
    expect(await screen.findByRole("alert")).toHaveTextContent("Your entries are still here");
    expect(screen.getByLabelText(/What do you need help with/)).toHaveValue("Please help improve our website.");
    fireEvent.click(screen.getByRole("button", { name: "Send enquiry" }));
    expect(await screen.findByText("Your enquiry has been submitted.")).toBeVisible();
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
    expect(vi.mocked(fetch).mock.calls[1][0]).toBe("/api/contact");
    const options = vi.mocked(fetch).mock.calls[1][1]!;
    expect(options.headers).toMatchObject({ Accept: "application/json" });
    const body = new URLSearchParams(options.body as string);
    expect(body.get("intent")).toBe("project");
    expect(body.get("method")).toBe("form");
  });

  it("sends a call request while clearly withholding booking confirmation", async () => {
    vi.mocked(fetch).mockResolvedValue({ ok: true } as Response);
    render(<ContactChoices />);
    fireEvent.click(screen.getByRole("button", { name: /Request a call/ }));
    fillBrief();
    fireEvent.change(screen.getByLabelText(/Preferred times and timezone/), { target: { value: "Tuesday afternoon, London" } });
    fireEvent.click(screen.getByRole("button", { name: "Send call request" }));
    expect(await screen.findByText(/No appointment is booked yet/)).toBeVisible();
    const body = new URLSearchParams(vi.mocked(fetch).mock.calls[0][1]!.body as string);
    expect(body.get("method")).toBe("call");
    expect(body.get("timing")).toContain("London");
  });
});
