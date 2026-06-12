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
      "A React Native app for slow letter-writing — pen pals, scheduled delivery, and ember letters that vanish after reading. Built to feel native on iOS.",
    hero:
      "I built this because there's one person in my life I wanted to flirt with. Everything else followed from trying to make letter-writing feel worth the wait.",
    stack: ["Expo", "React Native", "Clerk", "Supabase", "PostgreSQL"],
    role: "Product design, iOS development, brand voice",
    challenge:
      "I wanted correspondence to feel like paper and ink — deliberate, warm, and free of the pressure that comes with instant messaging.",
    approach: [
      "Onboarding is a gallery of moods. You feel the tone before you create an account.",
      "Pen-pal discovery uses real @usernames — you find a person, not an algorithm.",
      "Ember letters are a paper style for words meant to be read once, with a timer that starts when you open them.",
      "Every system message is written in the product's voice — fond, patient, human.",
    ],
    outcome:
      "A shipped app where the interface stays out of the way. No read receipts, no typing indicators — just words traveling on their own time. React Native under the hood, but I leaned into the iOS renderer because I wanted it to feel at home on iPhone.",
    principles: [
      "Restraint is a feature",
      "Voice is interface",
      "Slowness as luxury",
    ],
    color: "#8B3A3A",
    thumbnail: "/projects/letters-with-love/mailbox.png",
    walkthroughIntro:
      "Three screens — from a letter arriving to sending one back.",
    beats: [
      {
        image: "/projects/letters-with-love/mailbox.png",
        alt: "Letters with Love mailbox screen showing a sealed letter with a wax seal",
        eyebrow: "01 · Arrival",
        title: "Your mailbox",
        body:
          "The home screen greets you by name and shows what's waiting — usually sealed letters. The wax seal and rose-tinted card make arrival feel like an event.",
        detail:
          "No aggressive unread counts. No pull-to-refresh loop. Correspondence has its own rhythm.",
      },
      {
        image: "/projects/letters-with-love/compose.png",
        alt: "Letters with Love compose screen with paper style picker and delivery timing options",
        eyebrow: "02 · Writing",
        title: "Choosing the details",
        body:
          "You pick your paper, your pen pal, and when the words should arrive. Delivery takes time on purpose. The paper styles feel tactile, and the placeholder copy asks you to slow down.",
        detail:
          "Drafts auto-save per pen pal on device, with cloud backup when you want it.",
      },
      {
        image: "/projects/letters-with-love/outbox.png",
        alt: "Letters with Love outbox screen showing a letter in transit with relay towers, progress bar, and arrival countdown",
        eyebrow: "03 · Transit",
        title: "On its way",
        body:
          "After you send, the letter stays on your desk — traveling through relay towers with a progress bar and a real arrival countdown. Once it lands, it leaves your outbox.",
      },
    ],
  },
  {
    slug: "graider",
    title: "Graider",
    url: "https://graider.vercel.app/",
    tagline: "Grading at the speed of a classroom",
    year: "2026",
    category: "platform",
    excerpt:
      "A grading platform built for teachers who work in stacks — mobile capture, batch processing, and background workers that keep up.",
    hero:
      "My mom is an instructor. She grades a lot of papers. I built Graider for her workflow.",
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
      "Teachers grade in stacks. Most tools assume one page at a time, which falls apart with mixed orientations, multi-page answers, and batches due before Monday.",
    approach: [
      "Grading runs as a wizard: pick a test, upload a stack, review matches, release results.",
      "Preview is separate from commit — teachers verify before anything touches student records.",
      "A dedicated worker service handles the heavy lifting, with health checks and proper queue semantics.",
      "Mobile capture is built for the classroom, where grading actually happens.",
    ],
    outcome:
      "Teachers see what will happen before it happens. The heavy work runs in the background, and the UI stays straight about progress.",
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
    year: "2026",
    category: "commerce",
    excerpt:
      "A mobile-first cannabis delivery PWA for Jamaica's resort corridor — licensed, lobby handoffs, and checkout that feels native on a phone.",
    hero:
      "Regulated delivery for tourists who want ordering to feel effortless — licensed dispensary, pre-cleared drivers, hotel lobby handoffs.",
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
      "Guests at all-inclusive resorts need a simple order flow. The business runs under real compliance — licensed dispensary, vetted drivers, lobby logistics at every hotel.",
    approach: [
      "Catalog and checkout start with hotel context, so every order knows where it's going.",
      "Motion mimics native sheet behavior — drawers that feel like iOS.",
      "Admin and customer surfaces are separate, with clear routing for each audience.",
      "The whole purchase path is designed for thumb reach and one-handed use.",
    ],
    outcome:
      "A PWA that feels like an app in your hand and runs reliably behind the counter.",
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
