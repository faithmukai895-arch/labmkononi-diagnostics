import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { InfoNote, Section, SectionHeading } from "@/components/site/ui-bits";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, categoryName, labTests } from "@/content/catalogue";
import { site, whatsappLink, whatsappMessages } from "@/content/site";
import { pageHead } from "@/lib/seo";

type Search = { category?: string; q?: string };

export const Route = createFileRoute("/lab-tests")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    category: typeof search.category === "string" ? search.category : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () =>
    pageHead({
      title: "Lab Test Catalogue | LabMkononi Diagnostics",
      description:
        "Browse laboratory tests by category — haematology, biochemistry, diabetes screening, liver and kidney function, hormones, infectious disease testing and more.",
      path: "/lab-tests",
    }),
  component: LabTestsPage,
});

function LabTestsPage() {
  const { category, q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(q ?? "");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return labTests.filter((test) => {
      const matchesCategory = !category || test.categorySlug === category;
      const matchesQuery =
        !needle ||
        test.name.toLowerCase().includes(needle) ||
        test.shortDescription.toLowerCase().includes(needle) ||
        categoryName(test.categorySlug).toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          eyebrow="Test catalogue"
          title="Laboratory tests"
          description="Search the catalogue or filter by category. Prices, sample types, preparation requirements and turnaround times are confirmed by our team before your sample is collected."
        />

        <div className="mt-7 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="relative min-w-0">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                void navigate({
                  search: (prev) => ({ ...prev, q: event.target.value || undefined }),
                  replace: true,
                });
              }}
              placeholder="Search tests, e.g. haemogram, HbA1c, thyroid"
              className="h-12 pl-9"
              aria-label="Search laboratory tests"
            />
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link to="/order">Order a Test</Link>
          </Button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            to="/lab-tests"
            search={(prev) => ({ ...prev, category: undefined })}
            className={
              !category
                ? "rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                : "rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary hover:bg-secondary"
            }
          >
            All categories
          </Link>
          {categories.map((item) => (
            <Link
              key={item.slug}
              to="/lab-tests"
              search={(prev) => ({ ...prev, category: item.slug })}
              className={
                category === item.slug
                  ? "rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                  : "rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary hover:bg-secondary"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted" className="pt-4">
        {category ? (
          <p className="mb-6 text-sm text-muted-foreground">
            <span className="font-semibold text-primary">{categoryName(category)}</span> —{" "}
            {categories.find((c) => c.slug === category)?.description}
          </p>
        ) : null}

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="font-display text-lg font-bold text-primary">No tests matched</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We may still be able to arrange this test on request.
            </p>
            <Button asChild variant="secondary" className="mt-5">
              <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer">
                Ask us about a test
              </a>
            </Button>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((test) => (
              <li key={test.slug}>
                <Link
                  to="/lab-tests/$slug"
                  params={{ slug: test.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                      <FlaskConical className="h-4.5 w-4.5" />
                    </span>
                    {test.availability === "on_request" ? (
                      <Badge variant="outline" className="shrink-0 text-[0.65rem]">
                        On request
                      </Badge>
                    ) : null}
                  </div>
                  <h2 className="mt-3 font-display text-base font-bold text-primary group-hover:underline">
                    {test.name}
                  </h2>
                  <p className="mt-1.5 text-xs font-semibold tracking-wide text-brand-green uppercase">
                    {categoryName(test.categorySlug)}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {test.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                    View details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <InfoNote className="mt-8">{site.testInfoNotice}</InfoNote>
      </Section>
    </>
  );
}
