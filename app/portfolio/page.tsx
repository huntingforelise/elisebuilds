import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoogleAppointmentButton } from "../components/GoogleAppointmentButton";
import { PageShell, projectLinks } from "../components/SeoPageTemplates";
import { ScrollReveal } from "../components/ScrollReveal";
import { caseStudies, SITE_URL } from "../seo-content";

const ProjectLinks = ({ slug }: { slug: string }) => {
  const links = projectLinks[slug] ?? [];

  if (links.length === 0) {
    return null;
  }

  return (
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
  );
};

const SHIPPED_BAND_ITEMS = [
  {
    value: "4",
    label: "live websites",
    detail: "Real domains, booking flows, and portfolio work out in the world",
    tone: "bg-brand-sun text-black",
  },
  {
    value: "1",
    label: "App Store app",
    detail: "Mobile product work shipped into an app people can download",
    tone: "bg-accent text-surface",
  },
  {
    value: "1",
    label: "mobile app about to be released",
    detail: "Release setup, deployment, and launch polish in motion",
    tone: "bg-surface text-foreground",
  },
];

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio work by Elise Verhoeye, including Casa Film & Music, Casa la Sorpresa, Orca, and current mobile app work.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | elisebuilds",
    description:
      "Portfolio work by Elise Verhoeye, including Casa Film & Music, Casa la Sorpresa, Orca, and current mobile app work.",
    url: `${SITE_URL}/portfolio`,
    images: [
      {
        url: "/casa-film-website-screenshot.png",
        alt: "Casa Film and Music website screenshot",
      },
    ],
  },
};

const PortfolioPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio",
    description:
      "Portfolio and case study work by Elise Verhoeye across websites, booking systems, and React Native mobile apps.",
    url: `${SITE_URL}/portfolio`,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative isolate overflow-hidden border-b border-border/50 bg-background">
        <div className="grid-overlay-light pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-14 lg:px-8 lg:pt-18">
          <ScrollReveal className="max-w-5xl">
            <p className="eyebrow text-accent">What I&apos;ve been up to</p>
            <h1 className="poster-heading mt-4 max-w-4xl text-4xl leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              Things I’ve built, shaped, and shipped.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/92">
              A closer look at the problems I solved, the decisions I made, and
              the results achieved.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative z-10 w-full overflow-hidden border-y border-border/50 bg-accent-ink py-4 shadow-[0_18px_42px_rgba(18,26,42,0.12)]">
          <div className="shipping-reel gap-4 px-4">
            {[...SHIPPED_BAND_ITEMS, ...SHIPPED_BAND_ITEMS].map(
              (item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="shipping-tile grid min-h-[8.25rem] grid-cols-[4.75rem_1fr] items-stretch overflow-hidden border border-surface/14 bg-accent-ink/82 text-surface shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
                >
                  <div
                    className={`flex items-center justify-center font-mono text-5xl font-black leading-none ${item.tone}`}
                  >
                    {item.value}
                  </div>
                  <div className="grid content-center px-5 py-4">
                    <p className="eyebrow text-brand-sun">Shipped proof</p>
                    <p className="mt-2 text-xl font-black uppercase leading-6 text-surface">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-surface/72">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-surface-blue">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl pb-2">
              <p className="eyebrow text-accent">Case studies</p>
              <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl">
                A few projects in more detail.
              </h2>
              <p className="mt-4 text-base leading-8 text-foreground/82">
                Websites, app features, and practical improvements with a clear
                job behind them.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <article className="border border-surface/12 bg-accent-ink p-8 text-surface shadow-[0_18px_40px_rgba(18,26,42,0.12)]">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="font-mono text-sm font-bold text-accent">
                    01 / Current work
                  </p>
                  <h2 className="poster-heading mt-3 text-2xl leading-tight text-surface sm:text-3xl">
                    Real estate mobile app
                  </h2>
                  <p className="mt-4 text-base leading-8 text-surface/82">
                    I’m currently converting an existing real estate web app
                    into a more private mobile app experience for buyers and
                    sellers, with a focus on trust, product flow, and timely
                    updates. The finished app is planned for release on the App
                    Store and Google Play in June 2026.
                  </p>
                  <p className="mt-5 border-l-4 border-accent bg-surface/10 px-4 py-3 text-sm font-semibold leading-7 text-surface/88">
                    I’m building the app end to end myself, from product flow
                    and mobile implementation through deployment, release setup,
                    analytics, and the supporting technical details.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-[190px]">
                  <div className="rounded-[1.85rem] bg-accent-ink p-2 shadow-[0_18px_38px_rgba(18,26,42,0.18)] ring-1 ring-foreground/10">
                    <div className="mx-auto mb-1.5 h-1.5 w-11 rounded-full bg-surface/25" />
                    <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.3rem] bg-surface">
                      <Image
                        src="/app-placeholder.svg"
                        alt="Real estate mobile app placeholder"
                        fill
                        sizes="190px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {caseStudies.map((caseStudy, index) => (
            <ScrollReveal key={caseStudy.slug} delay={index * 0.08} y={18}>
              <article
                className={`border border-border/50 p-6 shadow-[0_18px_40px_rgba(18,26,42,0.07)] lg:p-8 ${
                  index % 2 === 0 ? "bg-surface" : "bg-background"
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div>
                    <p className="font-mono text-sm font-bold text-accent">
                      {String(index + 2).padStart(2, "0")} / {caseStudy.client}
                    </p>
                    <h2 className="poster-heading mt-4 text-2xl leading-tight text-foreground sm:text-3xl">
                      {caseStudy.projectType}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-foreground/90">
                      {caseStudy.summary}
                    </p>
                    <ul className="mt-5 grid gap-3">
                      {caseStudy.results.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent ring-2 ring-accent-soft" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ProjectLinks slug={caseStudy.slug} />
                    {caseStudy.projectNote ? (
                      <p className="mt-5 border-l-4 border-accent bg-surface-blue px-4 py-3 text-sm font-semibold leading-7 text-foreground/88">
                        {caseStudy.projectNote}
                      </p>
                    ) : null}
                  </div>

                  <div
                    className={`border border-border/50 bg-surface p-4 shadow-[0_14px_32px_rgba(18,26,42,0.08)] ${
                      caseStudy.slug === "/work/orca"
                        ? "mx-auto w-full max-w-[260px]"
                        : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-surface-blue ${
                        caseStudy.slug === "/work/orca"
                          ? "aspect-[853/1844]"
                          : "aspect-[16/10]"
                      }`}
                    >
                      <Image
                        src={caseStudy.image.src}
                        alt={caseStudy.image.alt}
                        fill
                        sizes={
                          caseStudy.slug === "/work/orca"
                            ? "260px"
                            : "(min-width: 1024px) 520px, calc(100vw - 64px)"
                        }
                        className={
                          caseStudy.slug === "/work/orca"
                            ? "object-contain"
                            : "object-cover"
                        }
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
                {caseStudy.testimonial ? (
                  <figure className="mt-8 border-l-4 border-accent bg-surface-blue p-5 lg:p-6">
                    <blockquote className="text-sm leading-7 italic text-foreground/92">
                      {caseStudy.testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-4 border-t border-border/50 pt-4">
                      <p className="font-semibold">
                        {caseStudy.testimonial.name}
                      </p>
                      <p className="mt-1 text-sm text-foreground/72">
                        {caseStudy.testimonial.role}
                      </p>
                    </figcaption>
                  </figure>
                ) : null}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="grid gap-8 border border-border/50 bg-surface p-8 shadow-[0_20px_45px_rgba(18,26,42,0.08)] lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow text-accent">Next step</p>
                <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl">
                  Have a similar project in mind?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/82">
                  Share the project context, the audience, and the part that
                  needs to perform better. I can help shape the flow, build, or
                  improvement around that.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <GoogleAppointmentButton />
                <Link href="/contact" className="cta-secondary">
                  Send an enquiry
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
};

export default PortfolioPage;
