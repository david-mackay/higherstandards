import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";
import { categoryLabels } from "@/content/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const meta = `${categoryLabels[project.category]} · ${project.year}`;

  return (
    <div
      className="group relative flex flex-col border-t border-stone-200 py-10 transition-colors hover:bg-stone-50/80 sm:flex-row sm:items-center sm:gap-10 sm:px-4"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} case study`}
      />

      <div className="pointer-events-none mb-6 flex items-start gap-4 sm:mb-0 sm:contents">
        <span className="shrink-0 pt-3 font-mono text-xs text-stone-400 sm:w-10 sm:pt-0 sm:text-center">
          {String(index + 1).padStart(2, "0")}
        </span>

        {project.thumbnail ? (
          <div className="w-fit shrink-0">
            <div className="overflow-hidden rounded-[1.35rem] border border-stone-200 bg-stone-900 p-1.5 shadow-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md sm:rounded-2xl sm:p-1">
              <Image
                src={project.thumbnail}
                alt=""
                width={120}
                height={260}
                className="h-44 w-[5.25rem] object-cover object-top sm:h-32 sm:w-16"
              />
            </div>
          </div>
        ) : (
          <span
            className="mt-2 h-2 w-2 shrink-0 rounded-full sm:hidden"
            style={{ backgroundColor: project.color }}
            aria-hidden
          />
        )}

        <div className="hidden shrink-0 sm:mb-0 sm:flex sm:w-32 sm:flex-col sm:items-start sm:gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: project.color }}
            aria-hidden
          />
          <span className="text-xs text-stone-500">{meta}</span>
        </div>
      </div>

      {!project.thumbnail ? (
        <div className="pointer-events-none hidden shrink-0 sm:mb-0 sm:flex sm:w-16 sm:justify-center">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: project.color }}
            aria-hidden
          />
        </div>
      ) : null}

      <div className="pointer-events-none flex-1">
        <p className="mb-2 text-xs text-stone-500 sm:hidden">{meta}</p>
        <h3 className="font-serif text-2xl text-ink transition-colors group-hover:text-accent sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-stone-600">
          {project.tagline}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
          {project.excerpt}
        </p>
        {project.beats?.length ? (
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {project.beats.length} screens to explore
          </p>
        ) : null}
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto relative z-20 mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:gap-2.5"
          >
            Live site
            <span aria-hidden>↗</span>
          </a>
        ) : null}
      </div>

      <span
        className="pointer-events-none relative mt-6 text-sm text-stone-400 transition group-hover:translate-x-1 group-hover:text-accent sm:mt-0"
        aria-hidden
      >
        →
      </span>
    </div>
  );
}
