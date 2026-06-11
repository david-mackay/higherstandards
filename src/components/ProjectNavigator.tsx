import Link from "next/link";
import Image from "next/image";
import { getAdjacentProjects } from "@/content/projects";

export function ProjectNavigator({ slug }: { slug: string }) {
  const { prev, next, index, total } = getAdjacentProjects(slug);

  return (
    <nav
      className="border-t border-stone-200"
      aria-label="More projects"
    >
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.24em] text-stone-500">
          Project {index + 1} of {total}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex items-center gap-5 rounded-2xl border border-stone-200 bg-white/40 p-5 transition hover:border-stone-300 hover:bg-white/70"
            >
              <span className="text-stone-400 transition group-hover:text-accent">
                ←
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-stone-500">Previous</p>
                <p className="mt-1 truncate font-serif text-lg text-ink group-hover:text-accent">
                  {prev.title}
                </p>
              </div>
              {prev.thumbnail ? (
                <div className="hidden shrink-0 overflow-hidden rounded-xl border border-stone-200 sm:block">
                  <Image
                    src={prev.thumbnail}
                    alt=""
                    width={48}
                    height={96}
                    className="h-16 w-8 object-cover object-top"
                  />
                </div>
              ) : (
                <span
                  className="hidden h-3 w-3 shrink-0 rounded-full sm:block"
                  style={{ backgroundColor: prev.color }}
                  aria-hidden
                />
              )}
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center gap-5 rounded-2xl border border-stone-200 bg-white/40 p-5 text-right transition hover:border-stone-300 hover:bg-white/70 sm:flex-row-reverse"
            >
              <span className="text-stone-400 transition group-hover:text-accent">
                →
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-stone-500">Next</p>
                <p className="mt-1 truncate font-serif text-lg text-ink group-hover:text-accent">
                  {next.title}
                </p>
              </div>
              {next.thumbnail ? (
                <div className="hidden shrink-0 overflow-hidden rounded-xl border border-stone-200 sm:block">
                  <Image
                    src={next.thumbnail}
                    alt=""
                    width={48}
                    height={96}
                    className="h-16 w-8 object-cover object-top"
                  />
                </div>
              ) : (
                <span
                  className="hidden h-3 w-3 shrink-0 rounded-full sm:block"
                  style={{ backgroundColor: next.color }}
                  aria-hidden
                />
              )}
            </Link>
          ) : (
            <Link
              href="/work"
              className="group flex items-center justify-end gap-5 rounded-2xl border border-stone-200 bg-white/40 p-5 transition hover:border-stone-300 hover:bg-white/70"
            >
              <div>
                <p className="text-xs text-stone-500">Finished?</p>
                <p className="mt-1 font-serif text-lg text-ink group-hover:text-accent">
                  Back to all work
                </p>
              </div>
              <span className="text-stone-400 transition group-hover:text-accent">
                →
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
