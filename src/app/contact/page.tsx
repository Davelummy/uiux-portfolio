import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactChoices } from "@/components/contact/contact-choices";

export const metadata: Metadata = { title: "Get in Touch | David Olumide", description: "Choose email, WhatsApp, an enquiry form, or a call request to discuss a design project or hiring opportunity." };

export default function ContactPage() {
  return <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-12"><h1 className="text-4xl font-semibold">Choose how to get in touch.</h1><p className="mt-4 text-muted">Loading your contact options…</p></div>}><ContactChoices /></Suspense>;
}
