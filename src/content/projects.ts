export type ProjectCategory =
  | "mobile"
  | "web"
  | "platform"
  | "commerce";

export type ProjectBeat = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
  detail?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  category: ProjectCategory;
  excerpt: string;
  hero: string;
  stack: string[];
  role: string;
  challenge: string;
  approach: string[];
  outcome: string;
  principles: string[];
  color: string;
  url?: string;
  thumbnail?: string;
  walkthroughIntro?: string;
  beats?: ProjectBeat[];
};

export const projects: Project[] = [
  {
    slug: "letters-with-love",
    title: "Letters with Love",
    tagline: "Correspondence that cannot be rushed",
    year: "2026",
    category: "mobile",
    excerpt:
      "An iOS app for slow, intentional letter-writing — real pen pals, scheduled delivery, and ember letters that vanish after reading.",
    hero: "A mailbox for the people you love, built against the grain of instant messaging.",
    stack: ["Expo", "React Native", "Clerk", "Supabase", "PostgreSQL"],
    role: "Product design, iOS development, brand voice",
    challenge:
      "Most messaging apps optimize for speed and engagement loops. The product needed to feel like paper and ink — deliberate, warm, and free of performance anxiety.",
    approach: [
      "Designed onboarding as a gallery of moods, not a feature tour — users should feel the tone before they create an account.",
      "Built pen-pal discovery around real identities (@username search) so correspondence stays human, not algorithmic.",
      "Introduced ember letters as a first-class paper style: words meant to be felt once, with a timer that starts at opening.",
      "Wrote every system message in the voice of the product — fond, patient, never corporate.",
    ],
    outcome:
      "A shipped iOS experience where the interface gets out of the way of the letter. No read receipts. No typing indicators. Just words traveling on their own time.",
    principles: [
      "Restraint is a feature",
      "Voice is interface",
      "Slowness as luxury",
    ],
    color: "#8B3A3A",
    thumbnail: "/projects/letters-with-love/mailbox.png",
    walkthroughIntro:
      "Scroll through the product as a user would experience it — from the moment a letter arrives to the ritual of writing one. Every screen is a decision about what to include, and what to leave out.",
    beats: [
      {
        image: "/projects/letters-with-love/mailbox.png",
        alt: "Letters with Love mailbox screen showing a sealed letter with a wax seal",
        eyebrow: "01 · Arrival",
        title: "A mailbox, not a feed",
        body:
          "The home screen greets you by name and tells you exactly what is waiting — one sealed letter, not an infinite scroll. The wax seal and rose-tinted card make arrival feel like an event. The badge on the tab is informative, not anxious: you know something is there, but nothing demands your attention before you are ready.",
        detail:
          "No unread counts in aggressive red. No pull-to-refresh dopamine loop. The interface respects that correspondence has its own rhythm.",
      },
      {
        image: "/projects/letters-with-love/compose.png",
        alt: "Letters with Love compose screen with paper style picker and delivery timing options",
        eyebrow: "02 · The ritual",
        title: "Every choice reinforces intention",
        body:
          "Writing a letter means choosing your paper, your pen pal, and when the words should arrive. Delivery delay is not a gimmick — it is the product keeping its promise that words travel on their own time. Paper styles are tactile choices, not theme settings. Even the placeholder copy asks you to take your time.",
        detail:
          "Drafts auto-save per pen pal on device, with an honest path to cloud backup. The UX never pretends writing is instant.",
      },
      {
        image: "/projects/letters-with-love/outbox.png",
        alt: "Letters with Love outbox screen showing a letter in transit with relay towers, progress bar, and arrival countdown",
        eyebrow: "03 · Transit",
        title: "Honest about the wait",
        body:
          "After you send, the letter does not vanish behind a checkmark. The outbox shows it still on your desk — traveling through a chain of relay towers, with a progress bar and a real arrival countdown. You can see the journey length and when words will land. Once delivered, the letter leaves your outbox for good.",
      },
    ],
  },
  {
    slug: "graider",
    title: "Graider",
    url: "https://graider.vercel.app/",
    tagline: "Grading at the speed of a classroom",
    year: "2025–2026",
    category: "platform",
    excerpt:
      "A teacher-first grading platform with mobile capture, stack processing, and background workers that respect how educators actually work.",
    hero: "Turn a pile of papers into reviewed feedback — without fighting the software.",
    stack: [
      "Next.js",
      "Expo",
      "PostgreSQL",
      "BullMQ",
      "Drizzle",
      "Render",
    ],
    role: "Architecture, full-stack development, workflow design",
    challenge:
      "Teachers grade in stacks, not one page at a time. Existing tools force linear flows that break when reality arrives: mixed orientations, multi-page answers, and batches that need to ship before Monday.",
    approach: [
      "Modeled grading as a wizard with clear checkpoints — pick a test, upload a stack, review matches, release results.",
      "Separated preview from commit in the job pipeline so teachers can verify before anything touches student records.",
      "Built a dedicated worker service with health checks and queue semantics, not cron hacks.",
      "Designed the mobile experience for capture in the classroom, not at a desk.",
    ],
    outcome:
      "A platform where the heavy lifting happens asynchronously and the UI stays honest about progress. Teachers see what will happen before it happens.",
    principles: [
      "Match the real workflow",
      "Preview before commit",
      "Honest async UI",
    ],
    color: "#2D4A3E",
  },
  {
    slug: "speedy-weedy",
    title: "Speedy Weedy",
    tagline: "Resort delivery, done with care",
    year: "2025",
    category: "commerce",
    excerpt:
      "A mobile-first cannabis delivery PWA for Jamaica's resort corridor — licensed, lobby handoffs, and a checkout flow that feels native on a phone.",
    hero: "Regulated commerce in a tourist context demands clarity, not cleverness.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Framer Motion",
      "Tailwind CSS",
    ],
    role: "Product design, full-stack development",
    challenge:
      "Guests at all-inclusive resorts need ordering to feel effortless, but the business operates under real compliance constraints — licensed dispensary, pre-cleared drivers, hotel lobby logistics.",
    approach: [
      "Structured the catalog and checkout around hotel context first, so every order knows where it is going.",
      "Used motion sparingly to mimic native sheet behavior — drawers that feel like iOS, not a website pretending.",
      "Kept admin and customer surfaces separate with clear audience routing.",
      "Designed for thumb reach and one-handed use throughout the purchase path.",
    ],
    outcome:
      "A PWA that reads as an app in the hand and a reliable system behind the counter. Commerce without the usual e-commerce noise.",
    principles: [
      "Context before catalog",
      "Native feel on the web",
      "Compliance as UX constraint",
    ],
    color: "#3D5C2E",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    index,
    total: projects.length,
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const categoryLabels: Record<ProjectCategory, string> = {
  mobile: "Mobile",
  web: "Web",
  platform: "Platform",
  commerce: "Commerce",
};
