"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  project: string;
  message: string;
  "bot-field"?: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    try {
      const formData = new FormData();
      formData.append("form-name", "contact");
      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === "string") {
          formData.append(key, value);
        }
      });

      const urlParams = new URLSearchParams();
      formData.forEach((value, key) => {
        if (typeof value === "string") {
          urlParams.append(key, value);
        }
      });

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlParams.toString()
      });

      if (response.status >= 400) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <section className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Ready to hire a UI/UX designer?
          </h1>
          <p className="mt-4 text-muted">
            I&apos;m available for full-time roles, contracts, and collaborations.
            Share a quick overview and I&apos;ll reply within 48 hours.
          </p>

          <div className="mt-8 space-y-4">
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Email</p>
              <a
                href="mailto:Davidolumide123@gmail.com"
                className="mt-2 inline-block text-lg font-semibold text-ink"
              >
                Davidolumide123@gmail.com
              </a>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">WhatsApp</p>
              <p className="mt-2 text-sm text-muted">
                <a
                  href="https://wa.me/2349063723298"
                  className="font-semibold text-ink"
                >
                  +234 906 372 3298
                </a>
              </p>
            </div>
            <div className="card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Location</p>
              <p className="mt-2 text-sm text-muted">Abuja, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="card p-8">
          <p className="eyebrow">Project Inquiry</p>
          <form
            className="mt-6 grid gap-4"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" {...register("bot-field")} />
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-xs uppercase tracking-[0.2em] text-muted"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ink"
                {...register("name", { required: "Your name is required." })}
              />
              {errors.name ? (
                <p id="name-error" className="text-xs text-accent">
                  {errors.name.message}
                </p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.2em] text-muted"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ink"
                {...register("email", {
                  required: "Your email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address."
                  }
                })}
              />
              {errors.email ? (
                <p id="email-error" className="text-xs text-accent">
                  {errors.email.message}
                </p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="project"
                className="text-xs uppercase tracking-[0.2em] text-muted"
              >
                Role or project details
              </label>
              <input
                id="project"
                type="text"
                placeholder="Role details or project scope"
                aria-invalid={errors.project ? "true" : "false"}
                aria-describedby={errors.project ? "project-error" : undefined}
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ink"
                {...register("project", {
                  required: "Please share your role or project details."
                })}
              />
              {errors.project ? (
                <p id="project-error" className="text-xs text-accent">
                  {errors.project.message}
                </p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-[0.2em] text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your goals, timelines, and challenges."
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-ink"
                {...register("message", {
                  required: "Please add a short message."
                })}
              />
              {errors.message ? (
                <p id="message-error" className="text-xs text-accent">
                  {errors.message.message}
                </p>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary w-full">
              {isSubmitting ? "Sending..." : "Send Inquiry"}
            </button>
            <p className="text-sm text-muted" aria-live="polite">
              {status === "success"
                ? "Thanks for reaching out! I will respond within 48 hours."
                : status === "error"
                ? "Something went wrong. Please try again or email me directly."
                : null}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
