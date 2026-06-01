import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Gauge, LayoutGrid } from "lucide-react";
import { getProjects } from "@/lib/projects";
import { getCoverStyle } from "@/lib/utils/image-utils";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const services = [
  {
    title: "Discovery & Strategy",
    description:
      "Align on goals, map user journeys, and define the key moments that matter.",
    deliverables: ["Research synthesis", "User flows", "Opportunity framing"],
    icon: Compass
  },
  {
    title: "UX/UI Design",
    description:
      "Design intuitive interfaces, refine interactions, and test early for clarity.",
    deliverables: ["Wireframes", "High-fidelity UI", "Clickable prototypes"],
    icon: LayoutGrid
  },
  {
    title: "Design Systems",
    description:
      "Build scalable components and handoff-ready guidance for consistent delivery.",
    deliverables: ["Component library", "Design tokens", "Handoff support"],
    icon: Gauge
  }
];

const processSteps = [
  {
    title: "Understand",
    description:
      "Clarify user needs, project goals, and the core workflow to prioritize."
  },
  {
    title: "Design",
    description:
      "Prototype rapidly, test the flow, and refine the UI for clarity."
  },
  {
    title: "Refine",
    description:
      "Polish visuals, document components, and prepare assets for handoff."
  }
];

export default async function Home() {
  const projects = await getProjects({ publishedOnly: true });
  const featuredProjects = projects.slice(0, 3);
  const heroProject =
    projects.find((project) => project.isFeatured) ?? projects[0];
  const clients = Array.from(
    new Set(
      projects
        .map((project) => project.client)
        .filter((value): value is string => Boolean(value))
    )
  );
  const categoryCount = new Set(
    projects
      .map((project) => project.category)
      .filter((value): value is string => Boolean(value))
  ).size;
  const stats = [
    { value: `${projects.length}`, label: "Case Studies" },
    { value: `${clients.length}`, label: "Client Partners" },
    { value: `${categoryCount}`, label: "Industries" }
  ];
  const heroMeta = heroProject
    ? [heroProject.client, heroProject.year].filter(Boolean).join(" / ")
    : "";

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <StaggerContainer className="space-y-6">
          <StaggerItem direction="up">
            <p className="eyebrow">Abuja - UI/UX Designer</p>
          </StaggerItem>
          
          <StaggerItem direction="up">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl text-balance">
              I design mobile and web interfaces people trust.
            </h1>
          </StaggerItem>
          
          <StaggerItem direction="up">
            <p className="max-w-xl text-lg text-muted text-balance">
              With 1+ year of hands-on product design experience, I create clear,
              usable flows and polished UI that help teams ship faster and users
              feel confident.
            </p>
          </StaggerItem>
          
          <StaggerItem direction="up" className="flex flex-wrap gap-4 pt-2">
            <Link href="/work" className="btn btn-primary">
              View Work
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Hire me
            </Link>
          </StaggerItem>
          
          <StaggerItem direction="up" className="flex flex-wrap gap-2 pt-2">
            {["Mobile-first UI", "Responsive UX", "Research-led"].map(
              (item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              )
            )}
          </StaggerItem>
          
          <StaggerItem direction="up" className="grid gap-3 sm:grid-cols-3 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </StaggerItem>
        </StaggerContainer>

        <FadeIn direction="left" delay={0.3} className="card overflow-hidden animate-float">
          {heroProject ? (
            <>
              <div
                className="relative overflow-hidden"
                style={
                  heroProject.coverImageUrl ? undefined : getCoverStyle(heroProject)
                }
              >
                {heroProject.coverImageUrl ? (
                  <>
                    <Image
                      src={heroProject.coverImageUrl}
                      alt={heroProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      placeholder={heroProject.blurDataUrl ? "blur" : "empty"}
                      blurDataURL={heroProject.blurDataUrl ?? undefined}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-900/80" />
                  </>
                ) : null}
                <div
                  className="relative z-10 p-6"
                  style={
                    heroProject.coverImageUrl
                      ? { color: heroProject.cover.foreground }
                      : undefined
                  }
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Featured Case Study
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">
                    {heroProject.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/80">
                    {heroProject.summary ?? heroProject.overview}
                  </p>
                  {heroMeta ? (
                    <p className="mt-4 text-xs text-white/70">{heroMeta}</p>
                  ) : null}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted">{heroProject.overview}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {heroProject.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <Link
                  href={`/work/${heroProject.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
                >
                  Read case study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </>
          ) : (
            <div className="p-6">
              <p className="eyebrow">Featured Case Study</p>
              <h2 className="mt-3 text-2xl font-semibold">
                Case studies publishing soon.
              </h2>
              <p className="mt-3 text-sm text-muted">
                New projects will appear here once published.
              </p>
              <Link href="/contact" className="btn btn-primary mt-6">
                Start a Project
              </Link>
            </div>
          )}
        </FadeIn>
      </section>

      <FadeIn delay={0.2} className="mt-12">
        <p className="eyebrow">Selected Clients</p>
        {clients.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {clients.map((client) => (
              <span
                key={client}
                className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-ink-soft transition-transform hover:-translate-y-0.5 hover:shadow-sm"
              >
                {client}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted">
            Client partnerships will appear here once projects are published.
          </p>
        )}
      </FadeIn>

      <section className="mt-20">
        <FadeIn className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-balance">
              Case studies that show clarity and impact.
            </h2>
            <p className="mt-4 max-w-xl text-muted text-balance">
              A snapshot of projects where I led UX/UI, flow mapping, and
              interface systems from start to prototype.
            </p>
          </div>
          {projects.length > 0 ? (
            <Link
              href="/work"
              className="text-sm font-semibold text-ink transition hover:text-accent"
            >
              View all case studies
            </Link>
          ) : null}
        </FadeIn>

        {projects.length > 0 ? (
          <StaggerContainer className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <StaggerItem key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="p-5 text-white" style={getCoverStyle(project)}>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-white/80">
                      {project.summary ?? project.overview}
                    </p>
                  </div>
                  <div className="flex h-full flex-col gap-4 p-5">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{project.role}</span>
                      <span>{project.duration}</span>
                    </div>
                    <p className="text-sm text-muted">{project.overview}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="pill bg-surface">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-ink">
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <FadeIn className="card mt-8 p-6">
            <p className="text-sm text-muted">
              No published case studies yet. Check back soon.
            </p>
          </FadeIn>
        )}
      </section>

      <section className="mt-20">
        <FadeIn className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A focused design partnership for growing teams.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              From early discovery to polished UI systems, I help teams move
              quickly without sacrificing quality.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title} className="card p-6 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm">
                  <service.icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted">{service.description}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Deliverables
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent/40" />
                    {deliverable}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="mt-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn direction="right">
            <p className="eyebrow">Process</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-balance">
              A clear, collaborative design process.
            </h2>
            <p className="mt-4 text-muted text-balance">
              I keep the work structured and transparent, so teams stay aligned
              and shipping stays predictable.
            </p>
          </FadeIn>
          <StaggerContainer className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.title} className="card p-6 transition-transform hover:-translate-y-1">
                <p className="text-sm font-semibold text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FadeIn className="mt-20 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-balance">
            A collaborative designer for product teams.
          </h2>
          <p className="mt-4 text-muted text-balance">
            I&apos;m David Olumide Daniel, an Abuja-based UI/UX designer focused on
            mobile and web interfaces. I partner with founders and product teams
            to clarify direction, build intuitive UX, and ship consistent UI
            systems.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
          >
            Learn more about me
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="card p-6 shadow-sm">
          <h3 className="text-2xl font-semibold">What you get</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Clear decision-making frameworks to keep teams aligned.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Production-ready UI with consistent components.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Collaboration across product, design, and engineering.
            </li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.2} className="mt-20">
        <div className="card flex flex-col items-center gap-6 px-8 py-12 text-center animate-float shadow-lg border-white/50 bg-white/40">
          <p className="eyebrow">Next Project</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to design your next release?
          </h2>
          <p className="max-w-2xl text-muted text-balance">
            Share a quick overview of your goals and timelines, and I will
            recommend a design plan that fits your product stage.
          </p>
          <Link href="/contact" className="btn btn-primary mt-2">
            Contact Me
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
