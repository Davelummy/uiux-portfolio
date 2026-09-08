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

export type ProjectMedia = {
  src: string;
  alt: string;
  caption: string;
  label?: string;
  presentation?: "capture" | "object" | "material";
  width: number;
  height: number;
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
  behanceUrl: string | null;
  figmaEmbed: string | null;
  liveUrl: string | null;
  liveCtaLabel?: string;
  sourceUrl?: string | null;
  sourceCtaLabel?: string;
  gallery?: ProjectMedia[];
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
    id: "kasada-mvp",
    slug: "kasada-mvp",
    title: "Kasada MVP",
    client: "Kasada",
    year: "2024",
    category: "Full-Stack",
    role: "Product Designer & Full-Stack Developer",
    duration: "8 weeks",
    tools: ["React", "Vite", "Tailwind CSS", "Firebase", "Three.js", "Paystack"],
    team: "Solo designer and developer",
    summary:
      "A premium e-commerce platform for bespoke furniture and artisanal pieces, featuring AR visualization and multi-vendor capabilities.",
    overview:
      "Designed and developed a comprehensive marketplace for Kasada that connects customers with premium furniture makers. The platform includes seamless checkout, an artisan seller portal, B2B services, and an Augmented Reality (AR) viewer to visualize furniture in real spaces.",
    problem:
      "Kasada needed to establish trust for high-ticket bespoke furniture purchases online, requiring an immersive shopping experience and a robust backend to handle artisan onboarding and complex multi-vendor logistics.",
    goals: [
      "Create a premium, trust-building visual aesthetic for high-end furniture.",
      "Implement AR visualization to reduce purchase hesitation.",
      "Build a scalable seller portal for artisans to manage their inventory.",
      "Integrate local payment solutions (Paystack) for seamless checkout."
    ],
    responsibilities: [
      "End-to-end UX/UI design of the customer storefront and artisan dashboard.",
      "Full-stack development using React, Firebase, and Tailwind CSS.",
      "Integrated 3D model viewer and AR capabilities using Three.js and Google Model Viewer.",
      "Implemented secure payment processing via Paystack."
    ],
    approach: [
      {
        title: "Immersive Commerce",
        detail:
          "Prioritized high-quality imagery, clean typography, and WebXR-powered AR to replicate the premium showroom experience in a digital space."
      },
      {
        title: "Two-Sided Architecture",
        detail:
          "Separated the frontend into distinct consumer and seller experiences, ensuring complex vendor inventory management didn't clutter the shopping flow."
      },
      {
        title: "Seamless Transactions",
        detail:
          "Integrated Paystack and Firebase to handle secure, instantaneous payment verification and order state management."
      }
    ],
    solution:
      "A fully functional React/Firebase MVP that allows users to discover, visualize in AR, and purchase premium furniture, while empowering artisans to manage their own storefronts.",
    outcome:
      "Built an MVP covering customer, seller, product-preview, and checkout flows. Production usage and transaction outcomes are not reported here.",
    highlights: [
      "Augmented Reality (AR) product visualization.",
      "Dedicated portal for artisans/sellers.",
      "B2B and Bespoke service inquiry flows.",
      "Paystack integration for the Nigerian/African market."
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "E-Commerce", label: "Industry" },
      { value: "React/Firebase", label: "Stack" },
      { value: "Live MVP", label: "Status" }
    ],
    tags: ["UI/UX Design", "Web Design", "Frontend", "Full-Stack", "AR/3D"],
    cover: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      foreground: "#ffffff"
    },
    coverImageUrl: "/projects/kasada-mvp.png",
    blurDataUrl: BLUR_DATA_URL,
    behanceUrl: null,
    figmaEmbed: null,
    liveUrl: null,
    isFeatured: false,
    isPublished: true,
    sortOrder: 4,
    createdAt: "2024-05-15",
    updatedAt: "2026-06-01"
  },
  {
    id: "crystalline-max",
    slug: "crystalline-max",
    title: "Crystalline Max",
    client: "Crystalline Max (CTMDS)",
    year: "2025",
    category: "Frontend",
    role: "UI/UX Designer & Front-End Developer",
    duration: "4 weeks",
    tools: ["Figma", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    team: "Solo designer and developer",
    summary:
      "Responsive marketing site for Crystalline Max, designed and built to clarify cleaning services and route enquiries to WhatsApp.",
    overview:
      "Designed and developed a modern landing page to market Crystalline Max's cleaning business. The focus was on establishing trust, clearly communicating service offerings, and driving booking inquiries through WhatsApp with a seamless conversion flow.",
    problem:
      "Crystalline Max needed an online presence that reflected the quality of their service, built instant trust with potential clients, and made it dead simple to book — all within a single, fast-loading page.",
    goals: [
      "Establish a professional, trustworthy brand presence online.",
      "Clearly present service packages and pricing without overwhelming visitors.",
      "Drive conversions through WhatsApp with minimal friction.",
      "Design a premium visual experience with smooth scroll animations."
    ],
    responsibilities: [
      "Designed the landing page UI and brand aesthetic in Figma.",
      "Built the frontend using Next.js, Tailwind CSS, and Framer Motion.",
      "Created responsive layouts optimized for mobile-first browsing.",
      "Integrated WhatsApp-based CTA flow for instant lead capture."
    ],
    approach: [
      {
        title: "Trust-First Design",
        detail:
          "Focused on professional imagery, clean layout, and social proof elements to immediately convey credibility for a service-based business."
      },
      {
        title: "Conversion-Focused Flow",
        detail:
          "Every section guided visitors toward the WhatsApp CTA, removing unnecessary steps between interest and booking."
      },
      {
        title: "Premium Aesthetic",
        detail:
          "Employed glassmorphism, subtle gradients, and refined typography to communicate quality and a modern brand identity."
      }
    ],
    solution:
      "A fast, beautifully animated marketing page that establishes the Crystalline Max brand, clearly presents their services, and channels leads directly into WhatsApp conversations.",
    outcome:
      "Delivered the brand's first digital presence and a direct WhatsApp enquiry path. Conversion performance is not reported here.",
    highlights: [
      "Smooth scroll animations using Framer Motion.",
      "WhatsApp-first conversion flow for instant lead capture.",
      "Responsive, mobile-first design architecture.",
      "Premium UI with glassmorphic elements and dynamic gradients."
    ],
    metrics: [
      { value: "Web", label: "Platform" },
      { value: "Marketing", label: "Focus" },
      { value: "Next.js", label: "Stack" },
      { value: "Live", label: "Status" }
    ],
    tags: ["UI/UX Design", "Web Design", "Frontend", "Marketing"],
    cover: {
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #e94560 100%)",
      foreground: "#ffffff"
    },
    coverImageUrl: "/projects/crystalline-max.jpg",
    blurDataUrl: BLUR_DATA_URL,
    behanceUrl: null,
    figmaEmbed: null,
    liveUrl: "https://ctmds.co.uk/",
    isFeatured: true,
    isPublished: true,
    sortOrder: 3,
    createdAt: "2025-01-15",
    updatedAt: "2026-04-19"
  },
  {
    id: "voices-unbroken",
    slug: "voices-unbroken",
    title: "Voices Unbroken",
    client: "Voices Unbroken",
    year: "2024",
    category: "Web Design",
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
    tags: ["UI/UX Design", "Web Design", "Figma Prototype", "Storytelling", "Community"],
    cover: {
      background: "linear-gradient(135deg, #0f172a 0%, #1e40af 60%, #93c5fd 100%)",
      foreground: "#ffffff"
    },
    coverImageUrl: "/projects/voices-unbroken.jpg",
    blurDataUrl: BLUR_DATA_URL,
    behanceUrl:
      "https://www.behance.net/gallery/241149933/Voices-Unbroken/modules/1391924665",
    figmaEmbed:
      "https://embed.figma.com/proto/VqIXa8Hf2hpx0Con2YpSfJ/Voices-Unbroken?page-id=0%3A1&node-id=125-11721&viewport=-1237%2C662%2C0.32&scaling=scale-down&content-scaling=fixed&starting-point-node-id=125%3A11721&show-proto-sidebar=1&embed-host=share",
    liveUrl: null,
    isFeatured: false,
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
    category: "Mobile Design",
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
    tags: ["UI/UX Design", "Mobile Design", "Figma Prototype", "Healthcare"],
    cover: {
      background: "linear-gradient(135deg, #0b3b34 0%, #0f766e 50%, #99f6e4 100%)",
      foreground: "#ffffff"
    },
    coverImageUrl: "/projects/riggs-pharmaceuticals.jpg",
    blurDataUrl: BLUR_DATA_URL,
    behanceUrl:
      "https://www.behance.net/gallery/240443253/Riggs-Pharmaceuticals-Landing-Page/modules/1385218391",
    figmaEmbed:
      "https://embed.figma.com/proto/7HY70zXNqb9PrmLsr2r3AF/RIGGS-PHARMACEUTICALS?page-id=1343%3A6067&node-id=1343-6099&viewport=633%2C1586%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1381%3A27595&show-proto-sidebar=1&embed-host=share",
    liveUrl: null,
    isFeatured: false,
    isPublished: true,
    sortOrder: 1,
    createdAt: "2024-03-20",
    updatedAt: "2024-05-02"
  },
  {
    id: "neon-breach",
    slug: "neon-breach",
    title: "Neon Breach",
    client: "Independent Project",
    year: "2026",
    category: "Game Design & Development",
    role: "Game Designer & Full-Stack Developer",
    duration: "Ongoing",
    tools: [
      "JavaScript",
      "Three.js",
      "WebGL2",
      "Web Audio API",
      "Netlify Functions",
      "Netlify Blobs"
    ],
    team: "Solo designer and developer",
    summary:
      "A browser-native 3D tactical FPS featuring three campaign operations, squad-based enemy AI, multi-phase boss encounters, vehicles, progression, and global leaderboards.",
    overview:
      "Neon Breach is a playable friends-and-family beta built to explore how far a browser-native game can push atmosphere, systems design, and responsive interaction without an install.",
    problem:
      "The project needed to make a technically ambitious FPS feel immediate in a browser while keeping its systems legible across keyboard, controller, and touch input.",
    goals: [
      "Create a memorable tactical visual language for a standalone browser game.",
      "Build a campaign structure with meaningful mission and progression loops.",
      "Support responsive input across desktop, controller, and touch devices.",
      "Keep the game deployable as a self-contained Netlify experience."
    ],
    responsibilities: [
      "Designed the game loop, mission structure, HUD, menus, and progression model.",
      "Built the browser client with JavaScript, Three.js, WebGL2, and Web Audio API.",
      "Implemented squad-based enemy AI, boss encounters, vehicles, and input systems.",
      "Built Netlify Functions and Netlify Blobs integrations for campaign saves and leaderboards.",
      "Profiled the renderer and tuned asset loading for a playable browser beta."
    ],
    approach: [
      {
        title: "Systems before spectacle",
        detail:
          "Established operations, enemy archetypes, progression, and objective states before layering on visual effects and atmosphere."
      },
      {
        title: "A readable tactical language",
        detail:
          "Used cyan mission instrumentation, angular panels, clear objective copy, and a restrained HUD to make a dense game state scannable."
      },
      {
        title: "Browser-native constraints",
        detail:
          "Balanced WebGL2 rendering, audio, controller support, touch controls, and serverless persistence against the realities of a public web deployment."
      }
    ],
    solution:
      "A standalone browser FPS with three operations, six enemy archetypes, multi-phase boss encounters, vehicles, progression, controller support, and a shared leaderboard.",
    outcome:
      "A live, playable friends-and-family beta that demonstrates end-to-end game design and engineering ownership. It is intentionally presented as an evolving independent project, not a finished commercial release.",
    highlights: [
      "Three campaign operations with mission objectives.",
      "Six enemy archetypes with squad-based behavior.",
      "WebGL2 renderer with vehicles and multi-phase encounters.",
      "Progression, controller support, and global leaderboard systems."
    ],
    metrics: [
      { value: "3", label: "Operations" },
      { value: "6", label: "Enemy Archetypes" },
      { value: "WebGL2", label: "Renderer" },
      { value: "Live Beta", label: "Status" }
    ],
    tags: ["Game Design", "Frontend", "Three.js", "WebGL2", "Full-Stack"],
    cover: {
      background: "linear-gradient(135deg, #06141c 0%, #102b34 50%, #563d8f 100%)",
      foreground: "#ffffff"
    },
    coverImageUrl: "/projects/neon-breach-cover.jpg",
    blurDataUrl: BLUR_DATA_URL,
    behanceUrl: null,
    figmaEmbed: null,
    liveUrl: "https://neon-breach-fps.netlify.app/",
    liveCtaLabel: "Play Game",
    sourceUrl: "https://github.com/Davelummy/neon-breach",
    sourceCtaLabel: "View Source",
    gallery: [
      {
        src: "/projects/neon-breach-gameplay.jpg",
        alt: "Neon Breach extraction mission with the tactical HUD, objective banner, squad enemies, and weapon state visible",
        caption: "Gameplay capture from the Burn Out extraction operation.",
        label: "IN-GAME CAPTURE",
        presentation: "capture",
        width: 800,
        height: 600
      },
      {
        src: "/projects/neon-breach-interceptor.webp",
        alt: "Angular dark interceptor vehicle with cyan accent lights from Neon Breach",
        caption: "Interceptor vehicle asset used in the game's vehicle phase.",
        label: "PROCEDURAL VEHICLE",
        presentation: "object",
        width: 980,
        height: 653
      },
      {
        src: "/projects/neon-breach-interceptor-side.webp",
        alt: "Side profile of the angular Neon Breach interceptor vehicle with cyan accent lights",
        caption: "Side profile from the interceptor's vehicle asset study.",
        label: "OBJECT STUDY / SIDE",
        presentation: "object",
        width: 980,
        height: 464
      },
      {
        src: "/projects/neon-breach-interceptor-rear.webp",
        alt: "Rear view of the angular Neon Breach interceptor vehicle with cyan accent lights",
        caption: "Rear profile from the interceptor's vehicle asset study.",
        label: "OBJECT STUDY / REAR",
        presentation: "object",
        width: 980,
        height: 653
      },
      {
        src: "/projects/neon-breach-environment.webp",
        alt: "Dark industrial wall material used to build Neon Breach environments",
        caption: "A modular environment material from the renderer's asset set.",
        label: "MATERIAL STUDY",
        presentation: "material",
        width: 512,
        height: 512
      }
    ],
    isFeatured: false,
    isPublished: true,
    sortOrder: 5,
    createdAt: "2026-01-15",
    updatedAt: "2026-07-23"
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
  return limit == null ? sorted : sorted.slice(0, Math.max(0, limit));
}

export async function getFeaturedProjects() {
  return sortProjects(PROJECTS).filter(
    (project) => project.isFeatured && project.isPublished,
  );
}

export async function getProjectCategories() {
  const categories = new Set(
    PROJECTS.filter((p) => p.isPublished).map((p) => p.category),
  );
  return Array.from(categories).filter(Boolean) as string[];
}

export async function getProjectBySlug(
  slug: string,
  publishedOnly = true
) {
  const projects = await getProjects({ publishedOnly });
  return projects.find((project) => project.slug === slug) ?? null;
}
