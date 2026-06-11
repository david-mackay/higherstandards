export type Principle = {
  id: string;
  title: string;
  summary: string;
  body: string;
};

export const principles: Principle[] = [
  {
    id: "restraint",
    title: "Restraint is the hardest feature",
    summary: "Every screen earns its pixels.",
    body: "Software teams are rewarded for adding. Users are punished by it. I start by asking what can be removed — not what can be shipped next. Letters with Love deliberately omits read receipts, typing indicators, and engagement hooks because those features would betray the product's promise. Restraint isn't minimalism for aesthetics; it's alignment between what you say you build and what the interface actually allows.",
  },
  {
    id: "workflow",
    title: "Design for the real workflow",
    summary: "Observe first. Prototype second.",
    body: "Graider exists because teachers grade in stacks, not in the linear flows most ed-tech assumes. Speedy Weedy routes orders through hotel lobbies because that is how delivery actually works in a resort corridor. I spend time understanding the messy middle — the pile of papers, the guest who only has one hand free, the letter someone rewrites three times before sending. Software that ignores reality becomes shelfware with good typography.",
  },
  {
    id: "honesty",
    title: "Interfaces should tell the truth",
    summary: "Especially about time and state.",
    body: "Async work is everywhere: grading jobs, scheduled letters, background sync. Users deserve to know what is happening, what failed, and what they can do about it. I separate preview from commit, surface progress without theater, and never pretend something is instant when it isn't. Trust compounds in small moments — a spinner that matches reality, a confirmation that shows exactly what will change.",
  },
  {
    id: "voice",
    title: "Voice is part of the system",
    summary: "Copy is not decoration.",
    body: "The welcome letter in Letters with Love is not marketing fluff — it sets the contract for how the product speaks. Error messages, empty states, onboarding kickers: these are design decisions with the same weight as color and spacing. I write copy that sounds like a person who respects your time, not a brand trying to be your friend. Warmth and precision are not opposites.",
  },
  {
    id: "craft",
    title: "Craft over churn",
    summary: "Fewer projects, held to a higher bar.",
    body: "Higher Standards is not a volume shop. I take on work where the details matter — where a paper style, a sheet animation, or a grading checkpoint can change whether someone trusts the product. That means attention to detail in unglamorous work: schema design, worker health checks, the third pass on spacing. Quality is a series of small, uncelebrated decisions that add up.",
  },
  {
    id: "native",
    title: "Native feel is earned",
    summary: "Platform conventions exist for a reason.",
    body: "Whether building for iOS, the mobile web, or a teacher's phone in a fluorescent classroom, I study how people already move through similar experiences. Graider's wizard mirrors how educators think about batches. Speedy Weedy's sheets borrow from iOS gesture vocabulary. The goal is to disappear into muscle memory.",
  },
];

export const studioStatement = {
  headline: "Software should know what it is for.",
  lead: "Higher Standards Software Design is a studio for products that need more than a template — mobile apps, commerce flows, educator tools, and brand-forward web experiences where the interface and the intent stay in conversation.",
  closing:
    "I work with founders and small teams who care about the unglamorous parts: the schema, the copy, the loading state, the moment a user decides whether to trust you. If that sounds like your project, I'd like to hear about it.",
};
