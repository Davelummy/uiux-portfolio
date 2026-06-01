import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About | David Olumide Daniel",
  description:
    "Abuja-based Product Designer and Full-Stack Developer bridging design and engineering."
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
