import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-surface shadow-[0_1px_0_rgba(40,50,59,0.05),0_12px_30px_rgba(40,50,59,0.04)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="w-40 shrink-0 md:w-48 lg:w-64">
          <Image
            src="/elisebuilds.svg"
            alt="Elise Verhoeye logo"
            width={196}
            height={72}
            className="h-auto w-full object-contain"
            preload
          />
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full border-2 border-border bg-surface px-4 py-2 text-sm font-bold text-foreground transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
          </Link>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};
