import Link from "next/link";
import { contact } from "@/content/contact";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-100/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <p className="font-serif text-xl text-ink">Higher Standards</p>
          <p className="mt-1 max-w-sm text-sm leading-relaxed text-stone-600">
            A Thoughtful Product Design Studio.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-stone-600 sm:items-end">
          <p className="font-medium text-ink">{contact.name}</p>
          <a
            href={`mailto:${contact.email}`}
            className="transition hover:text-ink"
          >
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="transition hover:text-ink">
            {contact.phone}
          </a>
          <p className="text-stone-500">{contact.locationLabel}</p>
          <div className="mt-1 flex gap-4">
            <Link href="/work" className="transition hover:text-ink">
              Work
            </Link>
            <Link href="/philosophy" className="transition hover:text-ink">
              Philosophy
            </Link>
          </div>
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} {contact.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
