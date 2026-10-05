import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import { getCoverStyle } from "@/lib/utils/image-utils";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BehanceIcon } from "@/components/ui/social-icons";
import { SITE_URL } from "@/lib/site";
import { ProjectCard } from "@/components/work/project-card";
import { PrototypePreview } from "@/components/work/prototype-preview";
import { CaseStudyGallery } from "@/components/work/case-study-gallery";
import { FadeIn } from "@/components/ui/fade-in";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getProjects({ publishedOnly: true });
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug, true);
  const title = project?.title ?? "Project";
  const description =
    project?.summary ?? project?.overview ?? "UI/UX Design Case Study";
  const image = project?.coverImageUrl ?? "/og-image.jpg";

  return {
    title: `${title} | David Olumide`,
    description,
    openGraph: {
      title: `${title} | David Olumide`,
      description,
      url: `${SITE_URL}/work/${slug}`,
      images: [image],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | David Olumide`,
      description
    },
    alternates: {
      canonical: `/work/${slug}`
    }
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await Promise.resolve(params);
  const project = await getProjectBySlug(slug, true);

  if (!project) return notFound();

  const relatedProjects = (await getProjects({ publishedOnly: true }))
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary ?? project.overview ?? undefined,
    url: `${SITE_URL}/work/${project.slug}`,
    image: project.coverImageUrl
      ? `${SITE_URL}${project.coverImageUrl}`
      : undefined,
    creator: { "@type": "Person", name: "David Olumide Daniel" },
    dateCreated: project.createdAt,
    dateModified: project.updatedAt,
    keywords: project.tags.join(", ")
  };

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Link
        href="/work"
        className="text-sm font-semibold text-muted transition hover:text-ink"
      >
        &larr; Back to Work
      </Link>

      <FadeIn className="mt-6">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            {project.summary ?? project.overview}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
           <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="stat">
                <p className="stat-value">{metric.value}</p>
                <p className="stat-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="relative aspect-[4/3] bg-white">
            {project.coverImageUrl ? <Image src={project.coverImageUrl} alt={`${project.title} design presentation`} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain p-4" priority /> : <div className="absolute inset-0" style={getCoverStyle(project)} />}
          </div>
          <div className="p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Project Snapshot
            </p>
            <dl className="mt-4 grid gap-4 text-sm">
              {project.behanceUrl ? (
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                    Behance
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-ink"
                    >
                      <BehanceIcon className="h-4 w-4" />
                      View presentation
                    </a>
                  </dd>
                </div>
              ) : null}
              {project.sourceUrl ? (
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                    Source
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-ink"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      {project.sourceCtaLabel ?? "View Source"}
                    </a>
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  Role
                </dt>
                <dd className="mt-1 text-base font-semibold text-ink">
                  {project.role}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  Team
                </dt>
                <dd className="mt-1 text-base font-semibold text-ink">
                  {project.team}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  Duration
                </dt>
                <dd className="mt-1 text-base font-semibold text-ink">
                  {project.duration}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">
                  Tools
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="pill">
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn className="mt-10" delay={0.08}>
      <nav
        className="flex flex-wrap gap-3 text-sm text-muted"
        aria-label="Case study sections"
      >
           {[
          { label: "Overview", href: "#overview" },
          { label: "Problem", href: "#problem" },
          { label: "Goals", href: "#goals" },
          { label: "Design decisions", href: "#approach" },
          { label: "Solution", href: "#solution" },
           { label: "Delivered output", href: "#outcome" },
           ...(project.gallery?.length
             ? [{ label: "Gallery", href: "#gallery" }]
             : []),
           { label: "Preview", href: "#preview" }
           ]
             .map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-border bg-white px-4 py-2 transition hover:border-ink hover:text-ink"
          >
            {item.label}
          </a>
        ))}
      </nav>
      </FadeIn>

      <FadeIn className="section-anchor mt-10">
      <section id="overview" className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-3 text-sm text-muted">{project.overview}</p>
        </div>
        <div id="problem" className="section-anchor card p-6">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-3 text-sm text-muted">{project.problem}</p>
        </div>
        <div id="goals" className="section-anchor card p-6">
          <h2 className="text-2xl font-semibold">Goals</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {project.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
      </section>
      </FadeIn>

      <FadeIn className="mt-12">
      <section className="grid gap-6 lg:grid-cols-2">
        <div id="responsibilities" className="section-anchor card p-6">
          <h2 className="text-2xl font-semibold">Responsibilities</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="approach" className="section-anchor card p-6">
          <h2 className="text-2xl font-semibold">Design decisions</h2>
          <div className="mt-4 space-y-4 text-sm text-muted">
            {project.approach.map((step, index) => (
              <div key={step.title}>
                <p className="text-sm font-semibold text-ink">
                  0{index + 1} {step.title}
                </p>
                <p className="mt-1 text-sm text-muted">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn className="mt-12">
      <section className="grid gap-6 lg:grid-cols-2">
        <div id="solution" className="section-anchor card p-6">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="mt-3 text-sm text-muted">{project.solution}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div id="outcome" className="section-anchor card p-6">
          <h2 className="text-2xl font-semibold">Delivered output</h2>
          <p className="mt-3 text-sm text-muted">{project.outcome}</p>
           <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="stat text-center">
                <p className="stat-value">{metric.value}</p>
                <p className="stat-label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

       {project.gallery?.length ? (
          <FadeIn className="section-anchor mt-12">
          <section id="gallery">
           <p className="eyebrow">Gallery</p>
           <CaseStudyGallery gallery={project.gallery ?? []} />
          </section>
          </FadeIn>
       ) : null}

        <FadeIn className="section-anchor mt-12">
        <section id="preview">
        <p className="eyebrow">Project Link</p>
        {project.liveUrl ? (
          <div className="card mt-4 p-8 flex flex-col items-center justify-center text-center gap-4 bg-white/60">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
              <ArrowUpRight className="h-8 w-8 text-accent" />
            </div>
            <div>
               <h3 className="text-2xl font-semibold">
                 {project.liveUrl ? "View Live Project" : "Project Preview"}
               </h3>
              <p className="mt-2 text-sm text-muted max-w-md mx-auto text-balance">
                Experience the live version of {project.title} deployed in production.
              </p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2"
            >
              {project.liveCtaLabel ?? "Visit Website"}
            </a>
            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {project.sourceCtaLabel ?? "View Source"}
              </a>
            ) : null}
          </div>
        ) : project.figmaEmbed ? (
          <PrototypePreview
            title={project.title}
            embedUrl={project.figmaEmbed}
            imageUrl={project.coverImageUrl}
          />
        ) : project.behanceUrl ? (
          <div className="card mt-4 p-6">
            <p className="text-sm text-muted">
              Prototype preview available on Behance.
            </p>
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-ink"
            >
              <BehanceIcon className="h-4 w-4" />
              View Behance presentation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <div className="card mt-4 p-6">
            <p className="text-sm text-muted">
              Project preview available upon request.
            </p>
          </div>
        )}
       </section>
       </FadeIn>

      <section className="card mt-12 p-7">
        <h2 className="text-2xl font-semibold">Have a related design challenge?</h2>
        <p className="mt-3 text-sm text-muted">Share what you are working on. We can discuss the scope and where design or frontend delivery would help.</p>
        <Link href="/contact?intent=project" className="btn btn-primary mt-5">Choose how to get in touch</Link>
      </section>

      {relatedProjects.length > 0 && (
        <FadeIn className="mt-16">
        <section>
          <p className="eyebrow">More Work</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {relatedProjects.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </section>
        </FadeIn>
      )}
    </div>
  );
}
