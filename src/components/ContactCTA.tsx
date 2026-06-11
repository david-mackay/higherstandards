import { contact } from "@/content/contact";
import { cn } from "@/lib/utils";

type Variant = "dark" | "light" | "inline";

export function ContactCTA({
  variant = "dark",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4",
        variant === "inline" && "items-start text-left",
        className,
      )}
    >
      <p
        className={cn(
          "font-serif text-lg",
          isDark ? "text-parchment" : "text-ink",
        )}
      >
        {contact.name}
      </p>

      <div
        className={cn(
          "flex flex-col gap-2 text-sm",
          variant === "inline" ? "items-start" : "items-center",
          isDark ? "text-parchment/80" : "text-stone-600",
        )}
      >
        <a
          href={`mailto:${contact.email}`}
          className={cn(
            "transition",
            isDark ? "hover:text-parchment" : "hover:text-accent",
          )}
        >
          {contact.email}
        </a>
        <a
          href={contact.phoneHref}
          className={cn(
            "transition",
            isDark ? "hover:text-parchment" : "hover:text-accent",
          )}
        >
          {contact.phone}
        </a>
        <p className={isDark ? "text-parchment/60" : "text-stone-500"}>
          {contact.locationLabel}
        </p>
      </div>
    </div>
  );
}
