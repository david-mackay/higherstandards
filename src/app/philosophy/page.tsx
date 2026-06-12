import type { Metadata } from "next";
import Link from "next/link";
import { principles, studioStatement } from "@/content/philosophy";
import { contact } from "@/content/contact";
import { PrincipleBlock } from "@/components/PrincipleBlock";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "Six principles that guide Higher Standards Software Design — restraint, honest interfaces, workflow-first thinking, and craft over churn.",
};

export default function PhilosophyPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <header className="max-w-3xl">
        <SectionLabel>Philosophy</SectionLabel>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-ink lg:text-5xl">
          Why higher standards matter
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-600 lg:text-xl">
          Most software fails in the gaps — the loading spinner that lies, the
          onboarding that explains features instead of setting tone, the grading
          flow that assumes teachers work one page at a time. These principles
          are how I close those gaps.
        </p>
      </header>

      <nav
        className="mt-12 flex flex-wrap gap-2 border-y border-stone-200 py-6"
        aria-label="Principles"
      >
        {principles.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="rounded-full border border-stone-200 px-3 py-1.5 text-xs text-stone-600 transition hover:border-accent hover:text-accent"
          >
            {p.title}
          </a>
        ))}
      </nav>

      <div className="mt-4">
        {principles.map((principle, index) => (
          <PrincipleBlock
            key={principle.id}
            principle={principle}
            index={index}
          />
        ))}
      </div>

      <aside className="mt-20 rounded-2xl border border-stone-200 bg-white/60 p-8 lg:p-12">
        <SectionLabel>On the name</SectionLabel>
        <h2 className="mt-4 font-serif text-2xl text-ink lg:text-3xl">
          Standards are respect
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600 lg:text-lg">
          <p>
            &ldquo;Higher Standards&rdquo; is a commitment to the people on the
            other side of the screen: the teacher grading on a Sunday night, the
            guest ordering from a pool chair, the person rewriting a letter for
            the third time because the words have to be right.
          </p>
          <p>
            {studioStatement.closing}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-parchment transition hover:bg-accent"
          >
            See the work
          </Link>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </aside>
    </div>
  );
}
