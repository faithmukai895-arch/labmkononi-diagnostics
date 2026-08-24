import { Link, useRouterState } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/content/site";

/** Floating WhatsApp button + sticky mobile "Order a Test" bar. */
export function FloatingActions() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hideOrderBar = pathname.startsWith("/order") || pathname.startsWith("/patient");

  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with LabMkononi on WhatsApp"
        className="fixed right-4 bottom-20 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-brand-green text-brand-green-foreground shadow-lift transition-transform hover:scale-105 sm:bottom-6 sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {!hideOrderBar ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
          <Button asChild size="lg" className="w-full">
            <Link to="/order">Order a Test</Link>
          </Button>
        </div>
      ) : null}
    </>
  );
}
