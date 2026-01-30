export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectApproach = {
  title: string;
  detail: string;
};

export type ProjectCover = {
  background: string;
  foreground: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  client: string | null;
  year: string | null;
  category: string | null;
  role: string | null;
  duration: string | null;
  tools: string[];
  team: string | null;
  summary: string | null;
  overview: string | null;
  problem: string | null;
  goals: string[];
  responsibilities: string[];
  approach: ProjectApproach[];
  solution: string | null;
  outcome: string | null;
  highlights: string[];
  metrics: ProjectMetric[];
  tags: string[];
  cover: ProjectCover;
  coverImageUrl: string | null;
  blurDataUrl: string | null;
  figmaEmbed: string | null;
  isFeatured: boolean;
  isPublished: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzLz48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZWVlOGVmIi8+PC9zdmc+";

const PROJECTS: Project[] = [
  {
    id: "voices-unbroken",
    slug: "voices-unbroken",
    title: "Voices Unbroken",
    client: "Voices Unbroken",
    year: "2024",
    category: "Blog Website",
    role: "UI/UX Designer",
    duration: "5 weeks",
    tools: ["Figma", "FigJam", "Notion"],
    team: "Solo designer",
    summary:
      "Community storytelling site for recovery journeys, built for openness and anonymity.",
    overview:
      "Designed a web platform where people in recovery can share stories safely, explore community posts, and access supportive resources.",
    problem:
      "The community needed a calm, trustworthy space to post sensitive stories while staying anonymous and feeling supported.",
    goals: [
      "Create a low-friction story submission flow with privacy controls.",
      "Design a readable, calm interface for long-form narratives.",
      "Support discovery through categories and curated highlights."
    ],
    responsibilities: [
      "Mapped user journeys and key storytelling moments.",
      "Designed responsive layouts and reusable UI components.",
      "Prototyped core flows for feedback and iteration."
    ],
    approach: [
      {
        title: "Discovery",
        detail:
          "Outlined user motivations and emotional states to guide tone, hierarchy, and copy."
      },
      {
        title: "Information design",
        detail:
          "Structured story browsing with categories, tags, and reading modes to reduce overwhelm."
      },
      {
        title: "Interface polish",
        detail:
          "Applied a soft visual system and accessibility-first typography for trust."
      }
    ],
    solution:
      "A lightweight community blog experience with anonymous posting, guided story prompts, and calm reading layouts.",
    outcome:
      "Delivered a complete UI system and prototype ready for stakeholder review and build handoff.",
    highlights: [
      "Anonymous storytelling flow with consent prompts.",
      "Accessible reading layouts for long-form content.",
      "Community tagging for discovery and support themes."
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "Community", label: "Focus" },
      { value: "MVP", label: "Scope" }
    ],
    tags: ["Web UX", "Storytelling", "Community"],
    cover: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e40af 60%, #93c5fd 100%)",
      foreground: "#ffffff"
    },
    coverImageUrl: "/projects/voices-unbroken.jpg",
    blurDataUrl: BLUR_DATA_URL,
    figmaEmbed:
      "https://embed.figma.com/proto/VqIXa8Hf2hpx0Con2YpSfJ/Voices-Unbroken?page-id=0%3A1&node-id=125-11721&viewport=-1237%2C662%2C0.32&scaling=scale-down&content-scaling=fixed&starting-point-node-id=125%3A11721&show-proto-sidebar=1&embed-host=share",
    isFeatured: true,
    isPublished: true,
    sortOrder: 2,
    createdAt: "2024-04-10",
    updatedAt: "2024-06-05"
  },
  {
    id: "riggs-pharmaceuticals",
    slug: "riggs-pharmaceuticals",
    title: "Riggs Pharmaceuticals",
    client: "Riggs Pharmaceuticals",
    year: "2024",
    category: "Healthcare",
    role: "UI/UX Designer",
    duration: "6 weeks",
    tools: ["Figma", "FigJam", "Maze"],
    team: "Solo designer",
    summary:
      "Mobile pharmacy experience for browsing, ordering, and pharmacist support.",
    overview:
      "Designed a mobile-first product that helps users find verified medications, manage refills, and connect with pharmacists.",
    problem:
      "Users needed a trusted way to order medications, validate products, and ask questions without delays or confusion.",
    goals: [
      "Improve product discovery and verification for critical meds.",
      "Streamline ordering and refill management.",
      "Make pharmacist consultation easy and approachable."
    ],
    responsibilities: [
      "Defined user flows for search, ordering, and consultation.",
      "Designed high-fidelity mobile UI and components.",
      "Prepared interaction prototypes for feedback."
    ],
    approach: [
      {
        title: "Flow mapping",
        detail:
          "Mapped critical paths for browsing, checkout, and prescription management."
      },
      {
        title: "UI design",
        detail:
          "Developed a trustworthy visual system with clear hierarchy and CTAs."
      },
      {
        title: "Validation",
        detail:
          "Refined screens based on stakeholder feedback and usability checks."
      }
    ],
    solution:
      "A clean mobile app experience that prioritizes trust signals, product clarity, and fast ordering.",
    outcome:
      "Produced a cohesive mobile UI kit and clickable prototype for development planning.",
    highlights: [
      "Verified product indicators for safer decisions.",
      "Quick-access refills and order tracking.",
      "Integrated pharmacist chat entry points."
    ],
    metrics: [
      { value: "Mobile", label: "Platform" },
      { value: "Healthcare", label: "Industry" },
      { value: "Prototype", label: "Output" }
    ],
    tags: ["Mobile UX", "Healthcare", "E-commerce"],
    cover: {
      background: "linear-gradient(135deg, #0b3b34 0%, #0f766e 50%, #99f6e4 100%)",
      foreground: "#ffffff"
    },
    coverImageUrl: "/projects/riggs-pharmaceuticals.jpg",
    blurDataUrl: BLUR_DATA_URL,
    figmaEmbed:
      "https://embed.figma.com/proto/7HY70zXNqb9PrmLsr2r3AF/RIGGS-PHARMACEUTICALS?page-id=1343%3A6067&node-id=1343-6099&viewport=633%2C1586%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1381%3A27595&show-proto-sidebar=1&embed-host=share",
    isFeatured: false,
    isPublished: true,
    sortOrder: 1,
    createdAt: "2024-03-20",
    updatedAt: "2024-05-02"
  }
];

function sortProjects(projects: Project[]) {
  return [...projects].sort((a, b) => {
    if (a.isFeatured !== b.isFeatured) {
      return a.isFeatured ? -1 : 1;
    }
    if (a.sortOrder !== b.sortOrder) {
      return b.sortOrder - a.sortOrder;
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export const projects = PROJECTS;

export async function getProjects(options?: {
  publishedOnly?: boolean;
  limit?: number;
}) {
  const publishedOnly = options?.publishedOnly ?? true;
  const limit = options?.limit ?? null;
  const filtered = publishedOnly
    ? PROJECTS.filter((project) => project.isPublished)
    : PROJECTS;
  const sorted = sortProjects(filtered);
  return limit ? sorted.slice(0, limit) : sorted;
}

export async function getProjectBySlug(
  slug: string,
  publishedOnly = true
) {
  const projects = await getProjects({ publishedOnly });
  return projects.find((project) => project.slug === slug) ?? null;
}
