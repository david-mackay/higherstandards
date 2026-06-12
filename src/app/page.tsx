import Link from "next/link";
import { projects } from "@/content/projects";
import { studioStatement } from "@/content/philosophy";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";
import { HeroEmblem } from "@/components/HeroEmblem";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% -20%, color-mix(in srgb, var(--accent) 18%, transparent), transparent),
              linear-gradient(to bottom, transparent 60%, var(--parchment))
            `,
          }}
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-20 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="animate-fade-up max-w-3xl">
            <SectionLabel>Software design studio</SectionLabel>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {studioStatement.headline}
            </h1>
            <div className="hero-rule mt-8 h-px w-24 bg-accent" aria-hidden />
            <p className="mt-8 text-lg leading-relaxed text-stone-600 sm:text-xl">
              {studioStatement.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-parchment transition hover:bg-accent"
              >
                Explore work
              </Link>
              <Link
                href="/philosophy"
                className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                Read the philosophy
              </Link>
            </div>
          </div>

          <div
            className="animate-fade-up hidden lg:block"
            style={{ animationDelay: "0.25s" }}
          >
            <HeroEmblem />
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl text-ink lg:text-4xl">
                Projects held to a higher bar
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm text-stone-500 transition hover:text-accent"
            >
              View all →
            </Link>
          </div>

          <div>
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel>How we work</SectionLabel>
              <h2 className="mt-3 font-serif text-3xl leading-snug text-ink lg:text-4xl">
                Taste, practicality, and craft.
              </h2>
            </div>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-stone-600 lg:mt-0 lg:text-lg">
              <p>
                We build software for founders and small teams who care how a
                product feels day to day — real workflows, human copy, loading
                states that tell the truth.
              </p>
              <p>
                Fewer engagements, more attention per pixel. If you want a team
                that pushes back on feature bloat and sweats the details, we
                should talk.
              </p>
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:gap-3"
              >
                Six principles that guide every project
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-ink text-parchment">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="font-serif text-2xl leading-snug sm:text-3xl">
            {studioStatement.closing}
          </p>
          <ContactCTA variant="dark" className="mt-10" />
        </div>
      </section>
    </>
  );
}
