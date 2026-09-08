import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact | David Olumide Daniel",
  description:
    "Contact David Olumide Daniel about product design, frontend development, full-stack work, or collaboration.",
  alternates: { canonical: "/contact" }
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
