"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectBeat } from "@/content/projects";
import { SectionLabel } from "@/components/SectionLabel";

function WalkthroughBeat({
  beat,
  index,
  accentColor,
}: {
  beat: ProjectBeat;
  index: number;
  accentColor: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const imageFirst = index % 2 === 0;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`grid items-center gap-10 transition-all duration-700 lg:grid-cols-2 lg:gap-16 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className={`${imageFirst ? "lg:order-1" : "lg:order-2"} flex justify-center`}
      >
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: accentColor }}
            aria-hidden
          />
          <div className="relative rounded-[2.75rem] border border-stone-300/80 bg-stone-900 p-2 shadow-[0_24px_80px_-12px_rgba(28,25,23,0.35)]">
            <Image
              src={beat.image}
              alt={beat.alt}
              width={430}
              height={932}
              className="h-auto w-[min(100%,280px)] rounded-[2.25rem] sm:w-[300px]"
              sizes="(max-width: 640px) 280px, 300px"
              priority={index === 0}
            />
          </div>
        </div>
      </div>

      <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
        <p className="font-mono text-xs text-stone-400">{beat.eyebrow}</p>
        <h3 className="mt-3 font-serif text-2xl leading-snug text-ink lg:text-3xl">
          {beat.title}
        </h3>
        <p className="mt-5 text-base leading-[1.8] text-stone-600 lg:text-lg">
          {beat.body}
        </p>
        {beat.detail ? (
          <p className="mt-4 border-l-2 border-stone-200 pl-4 text-sm leading-relaxed text-stone-500">
            {beat.detail}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectWalkthrough({
  beats,
  accentColor,
  intro,
}: {
  beats: ProjectBeat[];
  accentColor: string;
  intro: string;
}) {
  if (beats.length === 0) return null;

  return (
    <section className="border-b border-stone-200 bg-gradient-to-b from-white/50 to-parchment py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Walkthrough</SectionLabel>
          <h2 className="mt-3 font-serif text-3xl text-ink lg:text-4xl">
            See how the details add up
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600 lg:text-lg">
            {intro}
          </p>
        </div>

        <div className="relative mt-16 space-y-24 lg:mt-20 lg:space-y-32">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-stone-200 lg:left-1/2 lg:block"
            aria-hidden
          />
          {beats.map((beat, index) => (
            <WalkthroughBeat
              key={beat.eyebrow}
              beat={beat}
              index={index}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
