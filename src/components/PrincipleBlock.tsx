import type { Principle } from "@/content/philosophy";

export function PrincipleBlock({
  principle,
  index,
}: {
  principle: Principle;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      id={principle.id}
      className="scroll-mt-24 border-t border-stone-200 py-12 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-12 lg:gap-10"
    >
      <div className="lg:col-span-4">
        <p className="font-mono text-xs text-stone-400">{number}</p>
        <h2 className="mt-3 font-serif text-2xl leading-snug text-ink lg:text-3xl">
          {principle.title}
        </h2>
        <p className="mt-3 text-sm font-medium text-accent">{principle.summary}</p>
      </div>
      <p className="mt-6 text-base leading-[1.75] text-stone-600 lg:col-span-8 lg:mt-0 lg:text-lg">
        {principle.body}
      </p>
    </article>
  );
}
