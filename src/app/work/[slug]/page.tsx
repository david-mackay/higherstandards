import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProject,
  getProjectSlugs,
  categoryLabels,
} from "@/content/projects";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectWalkthrough } from "@/components/ProjectWalkthrough";
import { ProjectNavigator } from "@/components/ProjectNavigator";
import { ProjectStoryPreview } from "@/components/ProjectStoryPreview";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const hasWalkthrough = project.beats && project.beats.length > 0;

  return (
    <article>
      <header className="border-b border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <Link
            href="/work"
            className="text-sm text-stone-500 transition hover:text-accent"
          >
            ← All work
          </Link>

          <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-16">
            <div className={hasWalkthrough ? "lg:col-span-7" : "lg:col-span-12"}>
              <div className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: project.color }}
                  aria-hidden
                />
                <span className="text-sm text-stone-500">
                  {categoryLabels[project.category]} · {project.year}
                </span>
              </div>

              <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-ink lg:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-xl font-medium text-accent">
                {project.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
                {project.hero}
              </p>
              <p className="mt-6 max-w-2xl border-l-2 border-accent/40 pl-5 text-sm leading-relaxed text-stone-500">
                I design and build end-to-end — product thinking, interface
                craft, and the systems underneath. What follows is how that
                shows up in practice.
              </p>
            </div>

            {hasWalkthrough && project.thumbnail ? (
              <div className="mt-10 flex justify-center lg:col-span-5 lg:mt-0 lg:justify-end">
                <div className="relative">
                  <div
                    className="absolute -inset-8 rounded-full opacity-25 blur-3xl"
                    style={{ backgroundColor: project.color }}
                    aria-hidden
                  />
                  <div className="relative rounded-[2.75rem] border border-stone-300/80 bg-stone-900 p-2 shadow-[0_24px_80px_-12px_rgba(28,25,23,0.3)]">
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} preview`}
                      width={430}
                      height={932}
                      className="h-auto w-[220px] rounded-[2.25rem] sm:w-[240px]"
                      priority
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      {hasWalkthrough ? (
        <ProjectWalkthrough
          beats={project.beats!}
          accentColor={project.color}
          intro={project.walkthroughIntro ?? "A closer look at the product."}
        />
      ) : (
        <ProjectStoryPreview project={project} />
      )}

      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <SectionLabel>The story</SectionLabel>
          <h2 className="mt-3 font-serif text-2xl text-ink lg:text-3xl">
            What was built, and why it holds up
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            {hasWalkthrough
              ? "Beyond what you see on screen — the constraints, decisions, and outcomes that shaped the work."
              : "The constraints, decisions, and outcomes behind the work."}
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <dl className="space-y-8 lg:sticky lg:top-24">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
                  Role
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-stone-600">
                  {project.role}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
                  Stack
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-stone-200 bg-white/60 px-3 py-1 text-xs text-stone-600"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">
                  Principles applied
                </dt>
                <dd className="mt-2 space-y-2">
                  {project.principles.map((p) => (
                    <p key={p} className="text-sm text-stone-600">
                      {p}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>

          <div className="space-y-16 lg:col-span-8">
            <section>
              <SectionLabel>The challenge</SectionLabel>
              <p className="mt-4 text-base leading-[1.8] text-stone-600 lg:text-lg">
                {project.challenge}
              </p>
            </section>

            <section>
              <SectionLabel>Approach</SectionLabel>
              <ul className="mt-6 space-y-5">
                {project.approach.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 text-base leading-relaxed text-stone-600 lg:text-lg"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-stone-200 bg-white/50 p-8">
              <SectionLabel>Outcome</SectionLabel>
              <p className="mt-4 font-serif text-xl leading-relaxed text-ink lg:text-2xl">
                {project.outcome}
              </p>
            </section>
          </div>
        </div>
      </div>

      <ProjectNavigator slug={slug} />

      <footer className="border-t border-stone-200 bg-ink text-parchment">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:px-8">
          <p className="font-serif text-xl leading-snug sm:text-2xl">
            Want someone who sweats the details you just scrolled through?
          </p>
          <ContactCTA variant="dark" className="mt-8" />
        </div>
      </footer>
    </article>
  );
}
