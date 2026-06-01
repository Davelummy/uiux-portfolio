import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact | David Olumide Daniel",
  description:
    "Available for full-time roles, contracts, and collaborations. Send a message and I'll reply within 48 hours."
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
