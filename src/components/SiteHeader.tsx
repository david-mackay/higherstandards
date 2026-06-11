"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/content/contact";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/philosophy", label: "Philosophy" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-parchment/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          aria-label="Higher Standards Software Design — home"
        >
          <span className="font-serif text-lg tracking-tight text-ink transition-colors group-hover:text-accent">
            Higher Standards
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-stone-500">
            Software Design
          </span>
        </Link>

        <nav className="flex items-center gap-8" aria-label="Primary">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href === "/work" && pathname.startsWith("/work"));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide transition-colors",
                  active
                    ? "text-ink"
                    : "text-stone-500 hover:text-ink",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${contact.email}`}
            className="hidden rounded-full border border-ink/15 bg-ink px-4 py-2 text-sm text-parchment transition hover:bg-accent sm:inline-block"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
