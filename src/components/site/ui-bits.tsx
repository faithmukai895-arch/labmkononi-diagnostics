import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-brand-green-soft px-3 py-1 text-[0.68rem] font-bold tracking-[0.16em] text-accent-foreground uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      {eyebrow ? (
        <Eyebrow className={inverted ? "bg-primary-foreground/12 text-primary-foreground" : ""}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "text-2xl font-extrabold sm:text-3xl lg:text-4xl",
          inverted ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-sm leading-relaxed sm:text-base",
            inverted ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-14 sm:py-20",
        tone === "muted" && "bg-muted/60",
        tone === "navy" && "surface-navy",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function InfoNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "rounded-xl border border-border bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
