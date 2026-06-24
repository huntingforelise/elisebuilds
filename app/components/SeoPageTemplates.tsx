import type { JSX, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoogleAppointmentButton } from "./GoogleAppointmentButton";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import {
  services,
  SITE_URL,
  type CaseStudyContent,
  type InfoPageContent,
  type ServicePageContent,
} from "../seo-content";

type ShellProps = {
  children: ReactNode;
};

type ServicePageProps = {
  page: ServicePageContent;
};

type CaseStudyPageProps = {
  page: CaseStudyContent;
};

type InfoPageProps = {
  page: InfoPageContent;
};

export const projectLinks: Record<
  string,
  Array<{
    href: string;
    label: string;
  }>
> = {
  "/work/casa-film": [
    {
      href: "https://casa-film.com",
      label: "Visit the Casa Film & Music website",
    },
  ],
  "/work/orca": [
    {
      href: "https://getorca.com/",
      label: "Visit the Orca website",
    },
    {
      href: "https://help.getorca.com/en/articles/8260060-how-do-i-download-the-orca-app",
      label: "Download the Orca app",
    },
  ],
  "/work/casa-la-sorpresa": [
    {
      href: "https://casa-la-sorpresa.vercel.app/",
      label: "Visit the Casa la Sorpresa website",
    },
  ],
};

export const PageShell = ({ children }: ShellProps): JSX.Element => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
};

const SectionHeading = ({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}): JSX.Element => {
  return (
    <div>
      <p className="eyebrow text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

const BulletList = ({ items }: { items: string[] }): JSX.Element => {
  return (
    <ul className="mt-6 grid gap-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 border-t border-border/40 pt-4 text-sm leading-7 text-foreground/92"
        >
          <span className="mt-2 h-1.5 w-6 shrink-0 bg-accent/80" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export const ServiceLandingPage = ({ page }: ServicePageProps): JSX.Element => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${page.slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: "elisebuilds",
      url: SITE_URL,
    },
    areaServed: ["Mallorca", "Europe", "International"],
    serviceType: page.shortTitle,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-border/50 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-18">
          <div className="max-w-4xl">
            <p className="eyebrow text-accent">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/92">
              {page.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GoogleAppointmentButton />
              <Link href="/#contact" className="cta-secondary">
                Send an enquiry
              </Link>
            </div>
          </div>

          <div className="mt-12 grid border-y border-border/50 bg-background sm:grid-cols-3">
            {page.outcomes.slice(0, 3).map((outcome, index) => (
              <div
                key={outcome}
                className="grid grid-cols-[2rem_1fr] gap-3 border-b border-border/50 px-5 py-5 sm:block sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="font-mono text-sm font-bold leading-7 text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-sm font-semibold leading-7 text-foreground/88 sm:mt-3">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Outcomes" title="What this helps with" />
            <BulletList items={page.outcomes} />
          </div>
          <div className="border-l-4 border-accent bg-surface-strong p-8 shadow-[0_18px_40px_rgba(53,63,68,0.07)]">
            <SectionHeading eyebrow="Deliverables" title="What I can build" />
            <BulletList items={page.deliverables} />
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-surface-blue">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading eyebrow="Process" title="How the work usually runs" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.process.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[2rem_1fr] gap-3 border border-border/50 bg-surface p-6 md:block"
              >
                <p className="font-mono text-sm font-bold leading-7 text-accent">
                  0{index + 1}
                </p>
                <p className="text-sm leading-7 text-foreground/92 md:mt-4">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <SectionHeading eyebrow="Related" title="Connected services" />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {page.related.map((slug) => {
              const related = services.find((service) => service.slug === slug);

              if (!related) {
                return null;
              }

              return (
                <Link
                  key={related.slug}
                  href={related.slug}
                  className="border border-border/50 bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/45"
                >
                  <p className="eyebrow text-accent">
                    {related.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl">
                    {related.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/85">
                    {related.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export const CaseStudyPage = ({ page }: CaseStudyPageProps): JSX.Element => {
  const links = projectLinks[page.slug] ?? [];
  const imageUrl = page.image.src.startsWith("http")
    ? page.image.src
    : `${SITE_URL}${page.image.src}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    url: `${SITE_URL}${page.slug}`,
    image: imageUrl,
    author: {
      "@type": "Person",
      name: "Elise Verhoeye",
      url: SITE_URL,
    },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-border/50 bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-18">
          <div>
            <p className="eyebrow text-accent">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/92">
              {page.summary}
            </p>
            <dl className="mt-8 grid gap-4 border border-border/50 bg-surface p-6 sm:grid-cols-2">
              <div>
                <dt className="eyebrow text-accent">
                  Client
                </dt>
                <dd className="mt-2 font-semibold">{page.client}</dd>
              </div>
              <div>
                <dt className="eyebrow text-accent">
                  Project
                </dt>
                <dd className="mt-2 font-semibold">{page.projectType}</dd>
              </div>
            </dl>
            {links.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-accent/35 px-4 py-3 text-sm font-semibold leading-5 text-accent transition hover:border-foreground/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {link.label}
                    <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <div className="border border-border/50 bg-surface p-4 shadow-[0_18px_40px_rgba(53,63,68,0.07)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-blue">
                <Image
                  src={page.image.src}
                  alt={page.image.alt}
                  fill
                  sizes="(min-width: 1024px) 520px, calc(100vw - 64px)"
                  className="object-cover"
                  preload
                  unoptimized={
                    page.image.src.startsWith("http") ||
                    page.image.src.endsWith(".png")
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/50 bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Focus" title="What the work centered on" />
            <BulletList items={page.focus} />
          </div>
          <div className="border-l-4 border-accent bg-surface-strong p-8 shadow-[0_18px_40px_rgba(53,63,68,0.07)]">
            <SectionHeading eyebrow="Results" title="What changed" />
            <BulletList items={page.results} />
            {page.projectNote ? (
              <p className="mt-6 border-l-4 border-accent bg-surface px-4 py-3 text-sm font-semibold leading-7 text-foreground/88">
                {page.projectNote}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {page.testimonial ? (
        <section className="border-t border-border/50 bg-surface-blue">
          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
            <figure className="border border-border/50 bg-surface p-8 shadow-[0_18px_40px_rgba(53,63,68,0.07)]">
              <p className="eyebrow text-accent">
                Client words
              </p>
              <blockquote className="mt-5 text-base leading-8 italic text-foreground/92">
                {page.testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border/50 pt-5">
                <p className="font-semibold">{page.testimonial.name}</p>
                <p className="mt-1 text-sm text-foreground/72">
                  {page.testimonial.role}
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}
    </PageShell>
  );
};

export const InfoPage = ({ page }: InfoPageProps): JSX.Element => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${page.slug}`,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-border/50 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-18">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/92">
              {page.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GoogleAppointmentButton />
              <Link href="/#contact" className="cta-secondary">
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-5 px-6 py-16 lg:px-8">
          {page.sections.map((section, index) => (
            <article
              key={section.title}
              className={`border border-border/50 p-6 shadow-[0_18px_40px_rgba(53,63,68,0.07)] lg:p-8 ${
                index % 2 === 0 ? "bg-surface-strong" : "bg-surface-blue"
              }`}
            >
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="font-mono text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-2xl leading-tight text-foreground sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-foreground/88">
                    {section.text}
                  </p>
                </div>
                <BulletList items={section.points} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};
