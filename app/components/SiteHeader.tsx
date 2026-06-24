import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import { navigationLinks } from "./navigation";

export const SiteHeader = () => {
  const desktopLinks = navigationLinks.filter(
    (link) => link.href !== "/contact",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-surface/10 bg-accent-ink/95 shadow-[0_12px_32px_rgba(18,26,42,0.18)] backdrop-blur-md [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="w-36 shrink-0 md:w-44 lg:w-48">
          <Image
            src="/elisebuilds.png"
            alt="Elise Verhoeye logo"
            width={1456}
            height={310}
            className="h-auto w-full object-contain"
            preload
          />
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <nav
            aria-label="Site navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {desktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-transparent px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-surface/78 transition hover:border-surface/18 hover:bg-surface/8 hover:text-brand-sun focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-accent-ink lg:px-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden border border-brand-sun bg-brand-sun px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-foreground shadow-[0.25rem_0.25rem_0_rgba(232,95,141,0.95)] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-accent-ink md:inline-flex"
          >
            Get in touch
          </Link>
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
