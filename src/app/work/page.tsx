import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Past projects from Higher Standards Software Design — mobile apps, platforms, commerce, and brand-forward web experiences.",
};

export default function WorkPage() {
  const featured = projects[0];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <header className="max-w-2xl">
        <SectionLabel>Work</SectionLabel>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-ink lg:text-5xl">
          Past projects
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          Different domains, same bar — software that fits how people actually
          work.
        </p>
      </header>

      {featured ? (
        <aside className="mt-10 rounded-2xl border border-stone-200 bg-white/60 p-6 lg:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone-500">
            Suggested starting point
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-serif text-xl text-ink lg:text-2xl">
                {featured.title}
              </h2>
              <p className="mt-1 text-sm text-stone-600">{featured.tagline}</p>
              {featured.beats?.length ? (
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {featured.beats.length} screens · full walkthrough
                </p>
              ) : null}
            </div>
            <Link
              href={`/work/${featured.slug}`}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-parchment transition hover:bg-accent"
            >
              Start here →
            </Link>
          </div>
        </aside>
      ) : null}

      <div className="mt-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
