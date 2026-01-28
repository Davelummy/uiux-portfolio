import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { Manrope, Sora } from "next/font/google";

const displayFont = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "David Olumide Daniel | UI/UX Designer",
  description:
    "Abuja-based UI/UX designer crafting accessible, high-conversion digital products."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <div className="page-shell">
          <div className="ambient-orbs" aria-hidden="true">
            <span className="orb orb-one" />
            <span className="orb orb-two" />
            <span className="orb orb-three" />
          </div>
          <header className="sticky top-0 z-20 border-b border-border bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <span className="text-lg font-semibold">David Olumide</span>
                <span className="hidden text-sm text-muted sm:inline">
                  UI/UX Designer
                </span>
              </Link>

              <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-ink-soft">
                <Link href="/work" className="transition hover:text-ink">
                  Work
                </Link>
                <Link href="/about" className="transition hover:text-ink">
                  About
                </Link>
                <Link href="/contact" className="transition hover:text-ink">
                  Contact
                </Link>
              </nav>

              <div className="flex items-center gap-3">
                <Link href="/contact" className="btn btn-ghost">
                  Contact
                </Link>
                <Link href="/work" className="btn btn-primary">
                  View Work
                </Link>
              </div>
            </div>
          </header>

          <main id="content" className="min-h-screen">
            {children}
          </main>

          <footer className="border-t border-border">
            <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 text-sm md:grid-cols-3 md:items-center">
              <div>
                <p className="text-sm font-semibold">David Olumide Daniel</p>
                <p className="mt-2 text-muted">
                  UI/UX designer focused on mobile and web interfaces that feel
                  clear, calm, and ready to build.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted md:justify-center">
                <Link href="/work" className="transition hover:text-ink">
                  Work
                </Link>
                <Link href="/about" className="transition hover:text-ink">
                  About
                </Link>
                <Link href="/contact" className="transition hover:text-ink">
                  Contact
                </Link>
              </div>
              <div className="text-muted md:text-right">
                <p>Available for full-time roles, contracts, and collaborations.</p>
                <a
                  href="mailto:Davidolumide123@gmail.com"
                  className="mt-2 block transition hover:text-ink"
                >
                  Davidolumide123@gmail.com
                </a>
                <a
                  href="https://wa.me/2349063723298"
                  className="mt-1 block transition hover:text-ink"
                >
                  WhatsApp: +234 906 372 3298
                </a>
                <a
                  href="https://www.behance.net/davelummy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block transition hover:text-ink"
                >
                  Behance: davelummy
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
