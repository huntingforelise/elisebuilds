import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components/SeoPageTemplates";
import { ScrollReveal } from "../components/ScrollReveal";
import { caseStudies, SITE_URL } from "../seo-content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio work by Elise Verhoeye, including Casa Film & Music, Casa la Sorpresa, Orca, and current mobile app work.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | elisebuilds",
    description:
      "Portfolio work by Elise Verhoeye, including Casa Film & Music, Casa la Sorpresa, Orca, and current mobile app work.",
    url: `${SITE_URL}/work`,
    images: [
      {
        url: "/casa-film-website-screenshot.png",
        alt: "Casa Film and Music website screenshot",
      },
    ],
  },
};

const WorkPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Work",
    description:
      "Portfolio and case study work by Elise Verhoeye across websites, booking systems, and React Native mobile apps.",
    url: `${SITE_URL}/work`,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-border/50 bg-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8 lg:py-18">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow text-accent">
              Work
            </p>
            <h1 className="mt-4 text-4xl leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              Work that had to survive contact with real people.
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/92">
              A compact portfolio of recent and current work, with enough
              context to understand the business problem, the technical shape,
              and the result.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} y={14}>
            <div className="grid grid-cols-3 border border-border/50 bg-surface text-center shadow-[0_14px_32px_rgba(18,26,42,0.06)]">
              <div className="border-r border-border/50 px-4 py-5">
                <p className="font-mono text-xl font-bold text-accent">01</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground/70">
                  Current
                </p>
              </div>
              <div className="border-r border-border/50 px-4 py-5">
                <p className="font-mono text-xl font-bold text-accent">
                  {String(caseStudies.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground/70">
                  Studies
                </p>
              </div>
              <div className="px-4 py-5">
                <p className="font-mono text-xl font-bold text-accent">3</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-foreground/70">
                  Formats
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface-blue">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:px-8">
          <ScrollReveal>
            <article className="border border-surface/12 bg-accent-ink p-8 text-surface shadow-[0_18px_40px_rgba(18,26,42,0.12)]">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="eyebrow text-accent">
                    Current work
                  </p>
                  <h2 className="poster-heading mt-3 text-2xl leading-tight text-surface sm:text-3xl">
                    Real estate mobile app
                  </h2>
                  <p className="mt-4 text-base leading-8 text-surface/82">
                    I’m currently converting an existing real estate web app
                    into a more private mobile app experience for buyers and
                    sellers, with a focus on trust, product flow, and timely
                    updates.
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
                      {String(index + 1).padStart(2, "0")} / {caseStudy.client}
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
                    {caseStudy.projectNote ? (
                      <p className="mt-5 border-l-4 border-accent bg-surface-blue px-4 py-3 text-sm font-semibold leading-7 text-foreground/88">
                        {caseStudy.projectNote}
                      </p>
                    ) : null}
                  </div>

                  <div>
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
                    {caseStudy.testimonial ? (
                      <figure className="mt-5 border-l-4 border-accent bg-surface-warm p-5">
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
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/50 bg-surface-blue">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl text-foreground sm:text-4xl">
            Have a similar project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/92">
            I can help shape the workflow, product flow, or website structure
            before building the thing itself.
          </p>
          <Link href="/contact" className="cta-primary mt-8 inline-flex">
            Start a conversation
          </Link>
        </div>
      </section>
    </PageShell>
  );
};

export default WorkPage;
