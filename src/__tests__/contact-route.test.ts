import { beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/contact/route";

const send = vi.hoisted(() => vi.fn());

vi.mock("resend", () => ({
  Resend: class {
    emails = { send };
  }
}));

function request(fields: Record<string, string>) {
  const body = new URLSearchParams(fields);
  return new Request("https://portfolio.example/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: "https://portfolio.example",
      Host: "portfolio.example"
    },
    body
  });
}

beforeEach(() => {
  send.mockReset();
  send.mockResolvedValue({ data: { id: "email_123" }, error: null });
  process.env.RESEND_API_KEY = "re_test";
  process.env.CONTACT_TO_EMAIL = "owner@example.com";
});

describe("contact route", () => {
  it("delivers a valid enquiry without exposing the API key to the client", async () => {
    const response = await POST(request({
      name: "Preview Tester",
      email: "preview@example.com",
      message: "Please help improve our website.",
      timing: "Next month",
      intent: "project",
      method: "form",
      "bot-field": ""
    }));

    expect(response.status).toBe(200);
    expect(send).toHaveBeenCalledWith(expect.objectContaining({
      to: ["owner@example.com"],
      replyTo: "preview@example.com",
      subject: "[Portfolio] Design project enquiry"
    }));
  });

  it("rejects cross-origin submissions", async () => {
    const body = new URLSearchParams({ name: "Attacker" });
    const response = await POST(new Request("https://portfolio.example/api/contact", {
      method: "POST",
      headers: { Origin: "https://attacker.example", Host: "portfolio.example" },
      body
    }));

    expect(response.status).toBe(403);
    expect(send).not.toHaveBeenCalled();
  });

  it("silently accepts honeypot submissions without sending email", async () => {
    const response = await POST(request({ "bot-field": "spam" }));

    expect(response.status).toBe(200);
    expect(send).not.toHaveBeenCalled();
  });
});
