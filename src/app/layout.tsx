import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import {
  BehanceIcon,
  MailIcon,
  WhatsAppIcon
} from "@/components/ui/social-icons";

import { SmoothScrollProvider } from "@/components/ui/smooth-scroll";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { MotionProvider } from "@/components/ui/motion-provider";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "David Olumide Daniel | Product Designer & Software Engineer",
  description:
    "Abuja-based Product Designer and Software Engineer crafting clear, accessible digital products from first flow to production.",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "David Olumide Daniel | Product Designer & Software Engineer",
    description:
      "Abuja-based Product Designer and Software Engineer crafting clear, accessible digital products from first flow to production.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "David Olumide Daniel | Product Designer & Software Engineer",
    description:
      "Abuja-based Product Designer and Software Engineer crafting clear, accessible digital products from first flow to production."
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen text-ink">
        <MotionProvider>
          <SmoothScrollProvider>
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
                <Link href="/" className="flex items-center gap-3 transition-transform hover:-translate-y-0.5">
                  <span className="text-lg font-semibold">David Olumide</span>
                  <span className="hidden text-sm text-muted sm:inline">
                    Design Engineer
                  </span>
                </Link>

                <nav
                  aria-label="Primary navigation"
                  className="order-3 flex basis-full flex-wrap items-center justify-center gap-5 text-sm font-medium text-ink-soft sm:order-none sm:basis-auto"
                >
                  <Link href="/work" className="transition hover:text-accent">
                    Work
                  </Link>
                  <Link href="/about" className="transition hover:text-accent">
                    About
                  </Link>
                  <Link href="/contact" className="transition hover:text-accent">
                    Contact
                  </Link>
                </nav>

                <div className="hidden items-center gap-3 sm:flex">
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
               <script
                 type="application/ld+json"
                 dangerouslySetInnerHTML={{
                   __html: JSON.stringify({
                     "@context": "https://schema.org",
                     "@graph": [
                       {
                         "@type": "Person",
                         "@id": `${SITE_URL}/#person`,
                         name: SITE_NAME,
                         url: SITE_URL,
                         jobTitle: "Product Designer and Software Engineer",
                         email: "mailto:Davidolumide123@gmail.com",
                         sameAs: ["https://www.behance.net/davelummy"]
                       },
                       {
                         "@type": "WebSite",
                         "@id": `${SITE_URL}/#website`,
                         name: SITE_NAME,
                         url: SITE_URL,
                         about: { "@id": `${SITE_URL}/#person` }
                       }
                     ]
                   })
                 }}
               />
               {children}
            </main>

            <footer className="border-t border-border">
              <FadeIn>
              <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 text-sm md:grid-cols-3 md:items-center">
                <div>
                  <p className="text-sm font-semibold">David Olumide Daniel</p>
                  <p className="mt-2 text-muted">
                    Product Designer and Full-Stack Engineer bridging the gap between 
                    clear, calm interfaces and robust, scalable architectures.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted md:justify-center">
                  <Link href="/work" className="transition hover:text-accent">
                    Work
                  </Link>
                  <Link href="/about" className="transition hover:text-accent">
                    About
                  </Link>
                  <Link href="/contact" className="transition hover:text-accent">
                    Contact
                  </Link>
                </div>
                <div className="text-muted md:text-right">
                  <p>Available for full-time roles, contracts, and collaborations.</p>
                  <a
                    href="mailto:Davidolumide123@gmail.com"
                    className="mt-2 inline-flex items-center gap-2 transition hover:text-accent"
                  >
                    <MailIcon className="h-4 w-4" />
                    Davidolumide123@gmail.com
                  </a>
                  <br/>
                  <a
                    href="https://wa.me/2349063723298"
                    className="mt-1 inline-flex items-center gap-2 transition hover:text-accent"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp: +234 906 372 3298
                  </a>
                  <br/>
                  <a
                    href="https://www.behance.net/davelummy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 transition hover:text-accent"
                  >
                    <BehanceIcon className="h-4 w-4" />
                    Behance: davelummy
                  </a>
                </div>
              </div>
              </FadeIn>
            </footer>
             <FloatingWhatsApp />
          </div>
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
