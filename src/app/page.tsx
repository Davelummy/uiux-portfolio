import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Code, LayoutGrid } from "lucide-react";
import { getProjects } from "@/lib/projects";
import { FadeIn } from "@/components/ui/fade-in";

const services = [
  { title: "Websites & landing pages", description: "Make your offer easy to understand and give visitors a clear next step.", detail: "Service websites · Redesigns · Landing pages", icon: Compass },
  { title: "Product & interface design", description: "Turn complex tasks into usable flows for web and mobile products.", detail: "User flows · Interactive prototypes · UI systems", icon: LayoutGrid },
  { title: "Frontend delivery", description: "Bring the agreed design to life as a responsive, working web experience.", detail: "React · Next.js · Responsive components", icon: Code }
];

export default async function Home() {
  const projects = await getProjects({ publishedOnly: true });
  const selected = ["crystalline-max", "riggs-pharmaceuticals", "voices-unbroken"].flatMap((slug) => projects.filter((project) => project.slug === slug));
  const lead = selected[0];
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">David Olumide Daniel · Product design & frontend</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">I design clear, trustworthy websites and product interfaces.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">I connect business goals with usable digital experiences, from user flows and interface design to frontend delivery.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Link href="/contact" className="btn btn-primary">Choose how to get in touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link><Link href="#selected-work" className="btn btn-ghost">Explore design work</Link></div>
          <p className="mt-3 text-sm text-muted">Project or hiring opportunity? Choose WhatsApp, email, a form, or a call request.</p>
        </div>
        {lead && <Link href={`/work/${lead.slug}`} className="card group block overflow-hidden">
          <div className="relative aspect-[4/3] bg-white">{lead.coverImageUrl && <Image src={lead.coverImageUrl} alt="Current Crystalline Max website interface" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain p-4" />}</div>
          <div className="border-t border-border p-6"><p className="eyebrow">Website design & frontend delivery</p><h2 className="mt-2 text-2xl font-semibold">Crystalline Max</h2><p className="mt-2 text-sm text-muted">Clarifying cleaning services and giving customers a direct WhatsApp enquiry path.</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">Explore the design decisions <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span></div>
        </Link>}
      </section>
      <section aria-label="Choose your path" className="mt-10 grid gap-4 md:grid-cols-2">
        <Link href="#client-work" className="card group p-6 sm:p-7"><p className="eyebrow">For founders, businesses & agencies</p><h2 className="mt-2 text-2xl font-semibold">Explore working together</h2><p className="mt-3 text-sm text-muted">See what I can help you design, explore relevant work, and share your project.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Explore project services <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span></Link>
        <Link href="/hiring" className="card group p-6 sm:p-7"><p className="eyebrow">For recruiters & hiring teams</p><h2 className="mt-2 text-2xl font-semibold">Explore my fit for your team</h2><p className="mt-3 text-sm text-muted">Review my design contribution, frontend capability, and approach to product work.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Explore skills & role fit <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span></Link>
      </section>
      <FadeIn className="mt-20"><section id="client-work" className="section-anchor">
        <p className="eyebrow">Working together</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">A clearer experience for the people who use your product.</h2><p className="mt-4 max-w-2xl text-muted">Whether you need a business website, a landing page, or a web or mobile interface, we can start with the task your users need to accomplish.</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">{services.map(({ title, description, detail, icon: Icon }) => <article key={title} className="card p-6"><Icon className="h-6 w-6 text-accent" aria-hidden="true" /><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm text-muted">{description}</p><p className="mt-5 border-t border-border pt-4 text-xs text-muted">{detail}</p></article>)}</div>
        <Link href="/contact?intent=project" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">Choose how to discuss your project <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
      </section></FadeIn>
      <section id="selected-work" className="section-anchor mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Selected design work</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The thinking behind the interface.</h2></div><Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold">All case studies <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">{selected.map((project) => <Link key={project.slug} href={`/work/${project.slug}`} className="card group flex flex-col overflow-hidden"><div className="relative aspect-[4/3] bg-white">{project.coverImageUrl && <Image src={project.coverImageUrl} alt={`${project.title} design presentation`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-3" />}</div><div className="flex flex-1 flex-col border-t border-border p-6"><p className="text-xs text-muted">{project.role}</p><h3 className="mt-2 text-xl font-semibold">{project.title}</h3><p className="mt-3 text-sm text-muted">{project.summary}</p><p className="mt-4 text-xs text-muted">{project.liveUrl ? "Website delivery" : "UI design & prototype"}</p><span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold">Read the case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></span></div></Link>)}</div>
      </section>
      <FadeIn className="mt-20"><section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">From goal to delivery</p><h2 className="mt-3 text-3xl font-semibold">Know what we are solving and what comes next.</h2></div><ol className="grid gap-5">{[["Understand the brief", "Discuss the people, business goal, current experience, and scope before choosing a direction."], ["Make the design tangible", "Use flows and interactive prototypes to discuss hierarchy, interactions, and the decisions behind the screens."], ["Agree the delivery", "Define the design handoff or frontend build, review points, and next steps for your project."]].map(([title, detail], index) => <li key={title} className="card p-6"><p className="text-xs font-semibold text-accent">0{index + 1}</p><h3 className="mt-2 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm text-muted">{detail}</p></li>)}</ol></section></FadeIn>
      <section className="card mt-20 p-8 sm:p-12"><p className="eyebrow">Start a conversation</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Tell me what you are working on.</h2><p className="mt-4 max-w-2xl text-muted">A short description is enough to start. We can discuss scope, timing, and pricing after understanding your needs.</p><Link href="/contact?intent=project" className="btn btn-primary mt-6">Choose how to get in touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></section>
    </div>
  );
}
