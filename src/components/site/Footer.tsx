import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { mailLink, site, telLink, whatsappLink } from "@/content/site";

const columns = [
  {
    title: "Services",
    links: [
      { to: "/lab-tests", label: "Lab Tests" },
      { to: "/wellness-packages", label: "Wellness Packages" },
      { to: "/home-sample-collection", label: "Home Sample Collection" },
      { to: "/corporate-testing", label: "Corporate Testing" },
      { to: "/collection-points", label: "Collection Points" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About LabMkononi" },
      { to: "/how-it-works", label: "How It Works" },
      { to: "/partner-with-us", label: "Partner With Us" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Patients",
    links: [
      { to: "/order", label: "Order a Test" },
      { to: "/patient/dashboard", label: "Patient Dashboard" },
      { to: "/patient/results", label: "My Results" },
      { to: "/privacy", label: "Privacy & Data Protection" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="surface-navy mt-auto">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.3fr_2fr]">
        <div className="space-y-5">
          <div className="rounded-2xl bg-primary-foreground/95 p-3 shadow-card">
            <Logo showTagline />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            A digital diagnostics platform connecting patients, collection professionals, partner
            outlets and testing facilities.
          </p>
          <div className="space-y-2 text-sm">
            <a href={telLink} className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4 shrink-0" /> {site.phone}
            </a>
            <a href={mailLink} className="flex items-center gap-2 break-all hover:underline">
              <Mail className="h-4 w-4 shrink-0" /> {site.email}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <MessageCircle className="h-4 w-4 shrink-0" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold tracking-[0.18em] text-primary-foreground/60 uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-primary-foreground/65">
          <p className="max-w-4xl leading-relaxed">{site.disclaimer}</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} {site.name}. {site.tagline}
            </p>
            <p>{site.serviceArea.coverageNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
