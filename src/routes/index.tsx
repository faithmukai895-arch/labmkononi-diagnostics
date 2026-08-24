import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardList,
  FlaskConical,
  HeartPulse,
  Home,
  Lock,
  MessageCircle,
  Microscope,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Truck,
} from "lucide-react";

import heroImage from "@/assets/hero-home-collection.jpg";
import { BookingWidget } from "@/components/site/BookingWidget";
import { InfoNote, Section, SectionHeading } from "@/components/site/ui-bits";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, labTests, wellnessPackages } from "@/content/catalogue";
import { site, whatsappLink, whatsappMessages } from "@/content/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: `${site.name} | ${site.tagline}`,
      description:
        "Order laboratory tests online in Nairobi. Request free home or workplace sample collection, track your order and receive results securely in your patient area.",
      path: "/",
    }),
  component: HomePage,
});

const steps = [
  {
    icon: ClipboardList,
    title: "Choose Your Test",
    body: "Browse the catalogue by category, or select a wellness screening package.",
  },
  {
    icon: Home,
    title: "Select Collection",
    body: "Home, workplace or a partner collection point — whichever suits you.",
  },
  {
    icon: Truck,
    title: "Sample Collected",
    body: "A trained collection officer attends at your chosen date and time.",
  },
  {
    icon: Microscope,
    title: "Laboratory Processing",
    body: "Your sample is processed by the laboratory handling your test.",
  },
  {
    icon: Smartphone,
    title: "Digital Results",
    body: "You are notified, then log in to view or download your report.",
  },
];

const trustPoints = [
  {
    icon: Home,
    title: "Doorstep Sample Collection",
    body: site.serviceArea.freeCollectionCopy,
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    body: "Your results are delivered to a private patient area, not a public link.",
  },
  {
    icon: Smartphone,
    title: "Digital Results Delivery",
    body: "Reports are available online, on any device, whenever you need them.",
  },
  {
    icon: BadgeCheck,
    title: "Partner Laboratory Network",
    body: site.partnershipWording,
  },
];

function HomePage() {
  const popular = labTests.filter((test) => test.popular).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="surface-navy relative overflow-hidden">
        <div className="container-page grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="min-w-0">
            <Badge className="rounded-full bg-primary-foreground/12 text-primary-foreground hover:bg-primary-foreground/20">
              {site.announcement}
            </Badge>
            <h1 className="mt-5 text-3xl leading-[1.1] font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">
              Laboratory testing,
              <br />
              <span className="text-brand-green">at your doorstep.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              {site.name} lets you order laboratory tests online, request sample collection at your
              home or workplace, and receive your results digitally — {site.tagline.toLowerCase()}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/order">
                  Order a Test <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link to="/home-sample-collection">Book Home Collection</Link>
              </Button>
              <Button asChild size="lg" variant="ghostLight">
                <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </Button>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                site.serviceArea.freeCollectionCopy,
                "Confidential digital results",
                "Order online in minutes",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs leading-relaxed text-primary-foreground/75"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 space-y-5">
            <div className="overflow-hidden rounded-3xl border border-primary-foreground/12">
              <img
                src={heroImage}
                alt="A trained collection officer preparing to take a blood sample at a patient's home"
                className="h-48 w-full object-cover sm:h-60"
                loading="eager"
              />
            </div>
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Trust */}
      <Section>
        <SectionHeading
          eyebrow="Why LabMkononi"
          title="Clinical care, delivered the modern way"
          description="A technology-driven diagnostics service built around convenience, confidentiality and professional laboratory handling."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lift"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green-soft text-accent-foreground">
                <point.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-primary">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="How it works"
          title="Five steps from order to results"
          align="center"
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <step.icon className="h-4.5 w-4.5 text-brand-green" />
              </div>
              <h3 className="mt-3 font-display text-sm font-bold text-primary">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/how-it-works">See the full process</Link>
          </Button>
        </div>
      </Section>

      {/* Popular tests */}
      <Section>
        <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Test catalogue"
            title="Popular laboratory tests"
            description="Browse by category or search the full catalogue."
          />
          <Button asChild variant="outline">
            <Link to="/lab-tests">
              View all tests <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((test) => (
            <Link
              key={test.slug}
              to="/lab-tests/$slug"
              params={{ slug: test.slug }}
              className="group rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lift"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-secondary text-primary">
                <FlaskConical className="h-4.5 w-4.5" />
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-primary group-hover:underline">
                {test.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {test.shortDescription}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-green">
                View details <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.slice(0, 10).map((category) => (
            <Link
              key={category.slug}
              to="/lab-tests"
              search={{ category: category.slug }}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-secondary"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <InfoNote className="mt-8">{site.testInfoNotice}</InfoNote>
      </Section>

      {/* Wellness packages */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Wellness screening"
          title="Preventive screening packages"
          description="Grouped screening options for individuals, families and corporate teams. Package contents and pricing are confirmed by our team before booking."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wellnessPackages.map((pack) => (
            <div key={pack.slug} className="rounded-2xl border border-border bg-card p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green-soft text-accent-foreground">
                <HeartPulse className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-primary">{pack.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pack.description}
              </p>
              <p className="mt-3 text-xs font-semibold text-brand-green">{site.pricingFallback}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link to="/wellness-packages">Explore wellness packages</Link>
          </Button>
        </div>
      </Section>

      {/* Partners / corporate */}
      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
              <Stethoscope className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-primary">
              For healthcare professionals
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nurses, clinical officers, doctors, pharmacists and laboratory professionals can
              register to refer patients for laboratory services and follow up on requests.
            </p>
            <Button asChild className="mt-5">
              <Link to="/partner-with-us">Register as a partner</Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-green-soft text-accent-foreground">
              <Building2 className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-primary">
              For companies & institutions
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Arrange workplace health screening and employee wellness programmes with on-site
              sample collection for your team.
            </p>
            <Button asChild variant="secondary" className="mt-5">
              <Link to="/corporate-testing">Request a corporate quote</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="navy">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <SectionHeading
            inverted
            eyebrow="Ready when you are"
            title="Order your laboratory test today"
            description={`${site.serviceArea.coverageNote} ${site.serviceArea.freeCollectionCopy}`}
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg" variant="secondary">
              <Link to="/order">Order a Test</Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <a href={whatsappLink(whatsappMessages.collection)} target="_blank" rel="noreferrer">
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <InfoNote className="mt-8 border-primary-foreground/15 bg-primary-foreground/8 text-primary-foreground/80">
          {site.disclaimer}
        </InfoNote>
      </Section>
    </>
  );
}
