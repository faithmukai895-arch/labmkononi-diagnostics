import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, ShieldCheck, User } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site, telLink, whatsappLink } from "@/content/site";
import { useSession } from "@/lib/use-auth";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/lab-tests", label: "Lab Tests" },
  { to: "/wellness-packages", label: "Wellness Packages" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/home-sample-collection", label: "Home Collection" },
  { to: "/partner-with-us", label: "Partner With Us" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useSession();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="surface-navy hidden text-center text-xs md:block">
        <div className="container-page flex items-center justify-between gap-4 py-1.5">
          <p className="truncate opacity-90">{site.announcement}</p>
          <div className="flex shrink-0 items-center gap-4">
            <a href={telLink} className="inline-flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5" /> {site.phone}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:underline"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3">
        <Logo />

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3 py-2 text-[0.82rem] font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="outline" size="sm">
              <Link to={user ? "/patient/results" : "/auth"}>
                <ShieldCheck className="h-4 w-4" /> My Results
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/order">Order a Test</Link>
            </Button>
          </div>

          <Button asChild variant="ghost" size="icon" className="lg:hidden" aria-label="My results">
            <Link to={user ? "/patient/results" : "/auth"}>
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="border-b border-border p-4">
                <Logo showTagline />
              </div>
              <nav className="flex flex-col p-3">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="rounded-xl px-4 py-3.5 text-[0.95rem] font-semibold text-foreground transition-colors hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/corporate-testing"
                  className="rounded-xl px-4 py-3.5 text-[0.95rem] font-semibold text-foreground hover:bg-secondary"
                >
                  Corporate Testing
                </Link>
                <Link
                  to="/collection-points"
                  className="rounded-xl px-4 py-3.5 text-[0.95rem] font-semibold text-foreground hover:bg-secondary"
                >
                  Collection Points
                </Link>
                <Link
                  to="/faq"
                  className="rounded-xl px-4 py-3.5 text-[0.95rem] font-semibold text-foreground hover:bg-secondary"
                >
                  FAQ
                </Link>
              </nav>
              <div className="flex flex-col gap-2 p-4 pt-0">
                <Button asChild size="lg">
                  <Link to="/order">Order a Test</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={whatsappLink()} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to={user ? "/patient/dashboard" : "/auth"}>
                    <ShieldCheck className="h-4 w-4" /> {user ? "My Account" : "My Results"}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
