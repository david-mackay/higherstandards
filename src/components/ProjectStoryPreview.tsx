import type { Project } from "@/content/projects";
import { SectionLabel } from "@/components/SectionLabel";

export function ProjectStoryPreview({ project }: { project: Project }) {
  return (
    <section className="border-b border-stone-200 bg-gradient-to-b from-white/50 to-parchment py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Behind the work</SectionLabel>
          <h2 className="mt-3 font-serif text-2xl text-ink lg:text-3xl">
            Screenshots coming — the story is already here
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-600 lg:text-lg">
            Visual walkthroughs are being prepared for this project. Until then,
            scroll for the full case study: the constraint we solved, the
            decisions we made, and what shipped.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {project.approach.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-stone-200 bg-white/50 p-6"
            >
              <p className="font-mono text-xs text-stone-400">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
