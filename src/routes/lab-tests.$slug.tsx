import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";

import { InfoNote, Section } from "@/components/site/ui-bits";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryName, formatPrice, labTests } from "@/content/catalogue";
import { site, whatsappLink } from "@/content/site";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lab-tests/$slug")({
  loader: ({ params }) => {
    const test = labTests.find((item) => item.slug === params.slug);
    if (!test) throw notFound();
    return { test };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Test unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { test } = loaderData;
    const head = pageHead({
      title: `${test.name} | LabMkononi Diagnostics`,
      description: `${test.shortDescription} Order online and request home or workplace sample collection in Nairobi.`,
      path: `/lab-tests/${params.slug}`,
      type: "article",
    });
    return {
      ...head,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Lab Tests", path: "/lab-tests" },
              { name: test.name, path: `/lab-tests/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: TestDetailPage,
  notFoundComponent: TestNotFound,
});

function TestNotFound() {
  return (
    <Section>
      <h1 className="font-display text-2xl font-extrabold text-primary">Test not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        This test may have been renamed or is available on request.
      </p>
      <Button asChild className="mt-6">
        <Link to="/lab-tests">Back to catalogue</Link>
      </Button>
    </Section>
  );
}

function TestDetailPage() {
  const { test } = Route.useLoaderData();
  const related = labTests
    .filter((item) => item.categorySlug === test.categorySlug && item.slug !== test.slug)
    .slice(0, 3);

  const rows: { label: string; value: string | null }[] = [
    { label: "Category", value: categoryName(test.categorySlug) },
    { label: "Sample type", value: test.sampleType },
    { label: "Price", value: formatPrice(test.price) },
    { label: "Turnaround time", value: test.turnaround },
    { label: "Preparation required", value: test.preparation },
    {
      label: "Availability",
      value: test.availability === "available" ? "Available to order" : "Available on request",
    },
  ];

  return (
    <>
      <Section className="pb-8">
        <Link
          to="/lab-tests"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to catalogue
        </Link>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="min-w-0">
            <Badge variant="outline">{categoryName(test.categorySlug)}</Badge>
            <h1 className="mt-3 text-2xl font-extrabold text-primary sm:text-3xl lg:text-4xl">
              {test.name}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {test.shortDescription}
            </p>

            <h2 className="mt-8 font-display text-lg font-bold text-primary">
              What this test is used for
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{test.usedFor}</p>

            <h2 className="mt-8 font-display text-lg font-bold text-primary">Test information</h2>
            <dl className="mt-3 overflow-hidden rounded-2xl border border-border">
              {rows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-3 p-4 text-sm ${
                    index % 2 === 0 ? "bg-card" : "bg-secondary/50"
                  }`}
                >
                  <dt className="font-semibold text-primary">{row.label}</dt>
                  <dd className="min-w-0 text-muted-foreground">
                    {row.value ?? site.pricingFallback}
                  </dd>
                </div>
              ))}
            </dl>

            <InfoNote className="mt-6">{site.testInfoNotice}</InfoNote>
          </div>

          <aside className="min-w-0">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lift">
              <h2 className="font-display text-lg font-bold text-primary">Order this test</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {site.serviceArea.freeCollectionCopy}
              </p>
              <div className="mt-5 space-y-3">
                <Button asChild size="lg" className="w-full">
                  <Link to="/order" search={{ test: test.slug, type: "individual_test" }}>
                    Add to request
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full">
                  <a
                    href={whatsappLink(
                      `Hello LabMkononi. I would like to order the ${test.name} test.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
                  </a>
                </Button>
              </div>
              {!test.clinicallyReviewed ? (
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Test details are pending clinical review by the {site.shortName} team. Contact us
                  to confirm preparation requirements before your appointment.
                </p>
              ) : null}
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="muted" className="pt-4">
          <h2 className="font-display text-xl font-bold text-primary">Related tests</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/lab-tests/$slug"
                  params={{ slug: item.slug }}
                  className="block h-full rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lift"
                >
                  <h3 className="font-display text-sm font-bold text-primary">{item.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.shortDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  );
}
