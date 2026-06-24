import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const SiteFooter = (): JSX.Element => {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-foreground text-surface [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-45" />
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Image
              src="/elisebuilds.png"
              alt="Elise Verhoeye logo"
              width={1456}
              height={310}
              className="h-auto w-44"
            />
            <p className="mt-5 text-sm leading-7 text-surface/78">
              Websites, apps, and automations that make your business easier to
              run.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col items-start gap-3 md:items-end md:text-right">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-black uppercase tracking-[0.14em] text-surface/76 underline-offset-8 decoration-2 transition hover:text-brand-sun hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-surface/15 pt-6 text-sm text-surface/62 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Elise Verhoeye. All rights reserved.</p>
          <p>Based in Spain, working internationally.</p>
        </div>
      </div>
    </footer>
  );
};
