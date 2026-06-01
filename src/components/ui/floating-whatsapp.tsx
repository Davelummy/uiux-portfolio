"use client";

import { WhatsAppIcon } from "@/components/ui/social-icons";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2349063723298"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
