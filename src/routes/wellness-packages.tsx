import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, HeartPulse } from "lucide-react";

import { InfoNote, Section, SectionHeading } from "@/components/site/ui-bits";
import { Button } from "@/components/ui/button";
import { formatPrice, wellnessPackages } from "@/content/catalogue";
import { site, whatsappLink, whatsappMessages } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/wellness-packages")({
  head: () =>
    pageHead({
      title: "Wellness Screening Packages | LabMkononi Diagnostics",
      description:
        "Preventive wellness screening packages for individuals, women, men, corporate teams, diabetes and heart health — with home or workplace sample collection in Nairobi.",
      path: "/wellness-packages",
    }),
  component: WellnessPage,
});

function WellnessPage() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          eyebrow="Wellness screening"
          title="Preventive screening packages"
          description="Grouped screening options designed for prevention and routine health monitoring. Included tests are confirmed by qualified healthcare professionals before your appointment."
        />
      </Section>

      <Section tone="muted" className="pt-4">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wellnessPackages.map((pack) => (
            <li
              key={pack.slug}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-green-soft text-accent-foreground">
                <HeartPulse className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-primary">{pack.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {pack.description}
              </p>

              <div className="mt-4">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Included tests
                </p>
                {pack.includedTests.length > 0 ? (
                  <ul className="mt-2 space-y-1.5">
                    {pack.includedTests.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Package contents are being confirmed by the {site.shortName} team — contact us
                    for the current list.
                  </p>
                )}
              </div>

              <p className="mt-4 text-sm font-semibold text-primary">
                {formatPrice(pack.price) ?? site.pricingFallback}
              </p>
              {pack.suitableFor ? (
                <p className="mt-1 text-xs text-muted-foreground">Suitable for: {pack.suitableFor}</p>
              ) : null}

              <Button asChild className="mt-5">
                <Link to="/order" search={{ package: pack.slug, type: "wellness_package" }}>
                  Request this package
                </Link>
              </Button>
            </li>
          ))}
        </ul>

        <InfoNote className="mt-8">{site.disclaimer}</InfoNote>
      </Section>

      <Section tone="navy">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <SectionHeading
            inverted
            eyebrow="Corporate wellness"
            title="Screening for teams and institutions"
            description="Companies, schools and organisations can arrange grouped wellness screening with on-site sample collection."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" variant="secondary">
              <Link to="/corporate-testing">Request a quote</Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <a href={whatsappLink(whatsappMessages.wellness)} target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
