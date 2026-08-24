import { Link } from "@tanstack/react-router";

import logoMark from "@/assets/logo-mark.png.asset.json";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showTagline = false,
  inverted = false,
}: {
  className?: string;
  showTagline?: boolean;
  inverted?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn("flex min-w-0 items-center gap-2.5", className)}
      aria-label={`${site.name} home`}
    >
      <img
        src={logoMark.url}
        alt={`${site.name} logo`}
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 rounded-full object-contain sm:h-11 sm:w-11"
      />
      <span className="min-w-0">
        <span
          className={cn(
            "block truncate font-display text-base leading-tight font-extrabold tracking-tight sm:text-lg",
            inverted ? "text-primary-foreground" : "text-primary",
          )}
        >
          Lab<span className={inverted ? "opacity-80" : "text-brand-green"}>Mkononi</span>
        </span>
        <span
          className={cn(
            "block truncate text-[0.6rem] font-semibold tracking-[0.22em] uppercase",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          {showTagline ? site.tagline : "Diagnostics"}
        </span>
      </span>
    </Link>
  );
}
