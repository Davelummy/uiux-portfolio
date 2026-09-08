import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About | David Olumide Daniel",
  description:
    "About David Olumide Daniel, a product designer and full-stack developer bridging design and engineering.",
  alternates: { canonical: "/about" }
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
