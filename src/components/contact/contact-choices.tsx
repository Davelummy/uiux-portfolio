"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { ArrowUpRight, Calendar, Check, Copy, FileText, Mail, MessageCircle } from "lucide-react";

type Intent = "project" | "hiring";
type FormValues = { name: string; email: string; message: string; timing: string; "bot-field": string };
const email = "Davidolumide123@gmail.com";
const fieldClass = "w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-ink";

export function ContactChoices() {
  const params = useSearchParams();
  const queryIntent = params.get("intent");
  const [intentChoice, setIntentChoice] = useState<{ query: string | null; intent: Intent } | null>(null);
  const intent: Intent = intentChoice?.query === queryIntent ? intentChoice.intent : queryIntent === "hiring" ? "hiring" : "project";
  const setIntent = (next: Intent) => setIntentChoice({ query: queryIntent, intent: next });
  const [method, setMethod] = useState<"form" | "call" | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const nameField = register("name", { required: "Please add your name." });


  const subject = intent === "hiring" ? "Hiring opportunity for David Olumide" : "Design project enquiry";
  const draft = intent === "hiring" ? "Hi David, I'd like to discuss a role. Here is the role and what our team needs: " : "Hi David, I'd like to discuss a design project. Here is what I need help with: ";

  function showForm(next: "form" | "call") {
    setMethod(next);
    setStatus("idle");
    window.requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      nameRef.current?.focus({ preventScroll: true });
    });
  }

  async function onSubmit(data: FormValues) {
    setStatus("idle");
    try {
      const body = new URLSearchParams({ "form-name": "contact", name: data.name, email: data.email,
        project: `${intent === "hiring" ? "Hiring opportunity" : "Design project"}${method === "call" ? " — call requested" : ""}`,
        message: data.message, intent, method: method ?? "form", timing: data.timing || "Not specified", "bot-field": data["bot-field"] || "" });
      const response = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch { setStatus("error"); }
  }

  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopied(true); }
    catch { setCopied(false); }
  }

  return <div className="mx-auto max-w-6xl px-6 pb-24 pt-12">
    <header className="max-w-3xl"><p className="eyebrow">Get in touch</p><h1 className="mt-4 text-4xl font-semibold sm:text-5xl">A clear next step, your way.</h1><p className="mt-5 text-lg text-muted">Tell me about a project or a hiring opportunity. Choose the contact method that works for you.</p></header>
    <fieldset className="mt-8"><legend className="mb-3 text-sm font-semibold">What would you like to discuss?</legend><div className="flex flex-wrap gap-3">
      {([{ value: "project", label: "A design project" }, { value: "hiring", label: "A hiring opportunity" }] as const).map((item) => <label key={item.value} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-5 py-3 text-sm ${intent === item.value ? "border-ink bg-white font-semibold" : "border-border bg-white/60"}`}><input type="radio" name="intent-choice" value={item.value} checked={intent === item.value} onChange={() => { setIntent(item.value); setStatus("idle"); }} className="h-4 w-4 accent-[#b93818]" />{item.label}</label>)}
    </div></fieldset>
    <section aria-label="Contact methods" className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="card flex flex-col p-6"><MessageCircle className="h-6 w-6 text-accent" aria-hidden="true" /><h2 className="mt-4 text-xl font-semibold">WhatsApp</h2><p className="mt-3 text-sm text-muted">Open a chat with a message you can review and send in WhatsApp.</p><a href={`https://wa.me/2349063723298?text=${encodeURIComponent(draft)}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-5">Open WhatsApp <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a><p className="mt-auto pt-4 text-xs text-muted">Opening the chat does not send your message.</p></div>
      <div className="card flex flex-col p-6"><Mail className="h-6 w-6 text-accent" aria-hidden="true" /><h2 className="mt-4 text-xl font-semibold">Email</h2><p className="mt-3 text-sm text-muted">Open a draft in your email app and send your brief or role details.</p><a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`} className="btn btn-ghost mt-5">Open email draft <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a><p className="mt-auto break-all pt-4 text-xs text-muted">{email}</p><button type="button" onClick={copyEmail} className="mt-2 inline-flex items-center gap-2 self-start text-xs font-semibold">{copied ? <Check className="h-3 w-3" aria-hidden="true" /> : <Copy className="h-3 w-3" aria-hidden="true" />}{copied ? "Email copied" : "Copy email address"}</button><span className="sr-only" role="status">{copied ? "Email address copied to clipboard." : ""}</span></div>
      <div className="card flex flex-col p-6"><FileText className="h-6 w-6 text-accent" aria-hidden="true" /><h2 className="mt-4 text-xl font-semibold">Enquiry form</h2><p className="mt-3 text-sm text-muted">Send a short brief here with your name and reply email.</p><button type="button" onClick={() => showForm("form")} aria-expanded={method === "form"} aria-controls="enquiry-form" className="btn btn-ghost mt-5">Use the form <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button><p className="mt-auto pt-4 text-xs text-muted">You can start without a complete scope or budget.</p></div>
      <div className="card flex flex-col p-6"><Calendar className="h-6 w-6 text-accent" aria-hidden="true" /><h2 className="mt-4 text-xl font-semibold">Call request</h2><p className="mt-3 text-sm text-muted">Share what you want to discuss. We will agree a time by email.</p><button type="button" onClick={() => showForm("call")} aria-expanded={method === "call"} aria-controls="enquiry-form" className="btn btn-ghost mt-5">Request a call <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button><p className="mt-auto pt-4 text-xs text-muted">A request does not reserve a time or confirm a booking.</p></div>
    </section>
    <p className="mt-6 max-w-3xl text-sm text-muted">{intent === "project" ? "Share what you need help with and any existing website or product link. We can discuss scope, timing, and pricing after understanding the project." : "Share the role, organization, and what your team needs. A role link or short description is enough to begin."}</p>
    <section ref={formRef} id="enquiry-form" className="section-anchor mt-10" hidden={method === null}><div className="card max-w-3xl p-6 sm:p-8">
      <h2 className="text-2xl font-semibold">{method === "call" ? "Request a conversation" : intent === "hiring" ? "Tell me about the role" : "Tell me about your project"}</h2><p className="mt-3 text-sm text-muted">Name, email, and a short description are required. {method === "call" ? "I will reply to arrange a suitable time." : "I will review your enquiry and reply by email."}</p>
      {status === "success" ? <div className="mt-6 rounded-xl border border-border bg-white p-6" role="status"><Check className="h-7 w-7 text-accent" aria-hidden="true" /><h3 className="mt-3 text-xl font-semibold">{method === "call" ? "Your call request has been submitted." : "Your enquiry has been submitted."}</h3><p className="mt-3 text-sm text-muted">{method === "call" ? "I will reply by email to discuss your request and agree a time. No appointment is booked yet." : "I will review your message and reply using the email address you provided."}</p><button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold underline underline-offset-4">Review your message</button></div> :
        <form className="mt-6 grid gap-5" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" noValidate onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="form-name" value="contact" /><input type="hidden" {...register("bot-field")} />
          <div className="grid gap-5 sm:grid-cols-2">
            <div><label htmlFor="name" className="mb-2 block text-sm font-semibold">Name <span className="text-muted">(required)</span></label><input id="name" autoComplete="name" className={fieldClass} {...nameField} ref={(el) => { nameField.ref(el); nameRef.current = el; }} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p id="name-error" className="mt-2 text-sm text-accent">{errors.name.message}</p>}</div>
            <div><label htmlFor="email" className="mb-2 block text-sm font-semibold">Email <span className="text-muted">(required)</span></label><input id="email" type="email" autoComplete="email" className={fieldClass} {...register("email", { required: "Please add an email address for my reply.", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." } })} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" className="mt-2 text-sm text-accent">{errors.email.message}</p>}</div>
          </div>
          <div><label htmlFor="message" className="mb-2 block text-sm font-semibold">{intent === "hiring" ? "Role and team needs" : "What do you need help with?"} <span className="text-muted">(required)</span></label><textarea id="message" rows={5} className={fieldClass} placeholder={intent === "hiring" ? "A role description or link, and what your team needs…" : "Your website or product, the goal, and what you would like to improve…"} {...register("message", { required: "Please add a short description." })} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <p id="message-error" className="mt-2 text-sm text-accent">{errors.message.message}</p>}</div>
          <div><label htmlFor="timing" className="mb-2 block text-sm font-semibold">{method === "call" ? "Preferred times and timezone" : "Timing"} <span className="text-muted">(optional)</span></label><input id="timing" className={fieldClass} placeholder={method === "call" ? "For example, weekday afternoons in your timezone" : "Share a timeframe, or leave this blank if unsure"} {...register("timing")} /></div>
          {status === "error" && <p className="rounded-xl border border-accent p-4 text-sm" role="alert">Your message could not be submitted. Your entries are still here. Try again, or use email or WhatsApp above.</p>}
          <button type="submit" disabled={isSubmitting} className="btn btn-primary justify-self-start disabled:cursor-wait disabled:opacity-60">{isSubmitting ? "Submitting…" : method === "call" ? "Send call request" : "Send enquiry"}</button><span role="status" className="sr-only">{isSubmitting ? "Your enquiry is being submitted." : ""}</span>
        </form>}
    </div></section>
    <p className="mt-10 text-sm text-muted">Based in Abuja, Nigeria.</p>
  </div>;
}
