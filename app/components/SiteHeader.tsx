import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import { navigationLinks } from "./navigation";

export const SiteHeader = () => {
  const desktopLinks = navigationLinks.filter(
    (link) => link.href !== "/contact",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-surface/10 bg-black shadow-[0_12px_32px_rgba(5,5,7,0.18)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="w-40 shrink-0 md:w-48 lg:w-56">
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
                className="rounded-full px-3 py-2 text-sm font-bold text-surface/86 transition hover:bg-accent/14 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:px-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden rounded-full border-2 border-accent bg-accent px-4 py-2 text-sm font-bold text-surface shadow-[0_10px_24px_rgba(216,79,119,0.24)] transition hover:-translate-y-0.5 hover:border-surface hover:bg-surface hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black md:inline-flex"
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
