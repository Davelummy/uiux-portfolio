import { Resend } from "resend";

const MAX_BODY_BYTES = 20_000;

function value(form: FormData, key: string) {
  const entry = form.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return false;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "Request is too large." }, { status: 413 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (value(form, "bot-field")) {
    return Response.json({ ok: true });
  }

  const name = value(form, "name");
  const email = value(form, "email");
  const message = value(form, "message");
  const timing = value(form, "timing") || "Not specified";
  const intent = value(form, "intent") === "hiring" ? "hiring" : "project";
  const method = value(form, "method") === "call" ? "call" : "form";

  if (!name || name.length > 120 || !message || message.length > 4_000 || timing.length > 300) {
    return Response.json({ error: "Please check the submitted fields." }, { status: 400 });
  }
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please provide a valid reply email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !recipient) {
    return Response.json({ error: "Contact delivery is not configured." }, { status: 503 });
  }

  const subject = method === "call"
    ? `[Portfolio] ${intent === "hiring" ? "Hiring" : "Project"} call request`
    : `[Portfolio] ${intent === "hiring" ? "Hiring opportunity" : "Design project enquiry"}`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "David Olumide Portfolio <onboarding@resend.dev>",
    to: [recipient],
    replyTo: email,
    subject,
    text: [
      `Name: ${name}`,
      `Reply email: ${email}`,
      `Intent: ${intent}`,
      `Contact method: ${method}`,
      `Timing: ${timing}`,
      "",
      message
    ].join("\n")
  });

  if (error) {
    console.error("Resend contact delivery failed", error);
    return Response.json({ error: "Message delivery failed." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
