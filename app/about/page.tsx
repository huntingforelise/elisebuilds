import type { JSX } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GoogleAppointmentButton } from "../components/GoogleAppointmentButton";
import { PageShell } from "../components/SeoPageTemplates";
import { ScrollReveal } from "../components/ScrollReveal";
import { getInfoPageBySlug, SITE_URL } from "../seo-content";

const page = getInfoPageBySlug("/about");

export const metadata: Metadata = {
  title: "About elisebuilds",
  description: page.description,
  alternates: {
    canonical: page.slug,
  },
  openGraph: {
    title: "About elisebuilds",
    description: page.description,
    url: `${SITE_URL}${page.slug}`,
    images: [
      {
        url: page.image.src,
        alt: page.image.alt,
      },
    ],
  },
};

const SNAPSHOTS = [
  {
    value: "3",
    label: "Languages",
  },
  {
    value: "4",
    label: "Years",
  },
  {
    value: "4",
    label: "Countries",
  },
];

const WORK_MODES = [
  "A new website or web app from scratch",
  "A mobile app feature that needs building properly",
  "A product idea that needs shaping before it gets too big",
  "A booking flow, admin tool, or automation that saves time",
  "AI-generated code that needs a human pass before launch",
];

const BACKGROUND_NOTES = [
  "Mum, builder, and list-maker",
  "Belgian-Australian, based in Spain",
  "Fluent in Dutch, English, and French",
  "Learning Spanish, slowly but steadily",
];

const GITHUB_URL = "https://github.com/huntingforelise";
const LINKEDIN_URL = "https://www.linkedin.com/in/eliseverhoeye/";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About elisebuilds",
  description: page.description,
  url: `${SITE_URL}${page.slug}`,
  mainEntity: {
    "@type": "ProfessionalService",
    name: "elisebuilds",
    url: SITE_URL,
    founder: {
      "@type": "Person",
      name: "Elise Verhoeye",
    },
  },
};

const Eyebrow = ({ children }: { children: string }): JSX.Element => {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
      {children}
    </p>
  );
};

const WorkLinksSection = (): JSX.Element => {
  const socialLinkClass =
    "border-2 border-border bg-surface px-7 py-3.5 text-sm font-bold tracking-[0.02em] text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <section className="border-t border-border/50 bg-surface-strong">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <ScrollReveal className="border border-border/50 bg-surface p-8 text-center shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
            A small note
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">
            Despite my love for automation, I am not a robot.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/92">
            You can find my work here.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href={LINKEDIN_URL} className={socialLinkClass}>
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              className={socialLinkClass}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const AboutPage = (): JSX.Element => {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />

      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute left-0 top-10 hidden h-8 w-2/5 -rotate-2 bg-accent/18 md:block" />
        <div className="absolute bottom-12 right-0 hidden h-10 w-1/3 rotate-2 bg-surface-blue md:block" />

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <ScrollReveal className="relative z-10 max-w-3xl" y={18}>
            <Eyebrow>About the builder</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              I&apos;m Elise, lovely to meet you.
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/92">
              elisebuilds is my small software studio. I work with people who
              need a new site, an app feature, a better product flow, or a
              technical person to help bring an idea down to earth.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/80">
              I do the building myself. Sometimes that means starting from a
              blank page. Sometimes it means joining halfway through and making
              sense of what is already there. Either way, I like making things
              that are clear, usable, and not a pain to keep working on.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <GoogleAppointmentButton />
              <Link href="/portfolio" className="cta-secondary">
                See the work
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="relative z-10 mx-auto w-full max-w-[320px] lg:max-w-[320px]"
            delay={0.12}
            y={22}
          >
            <div className="relative">
              <div className="absolute -left-4 top-8 h-full w-full rotate-[-3deg] bg-surface-strong" />
              <div className="relative rotate-[1.5deg] border border-border/50 bg-surface p-4 shadow-[0_22px_55px_rgba(53,63,68,0.1)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-blue">
                  <Image
                    src="/elise.png"
                    alt="Elise, the software engineer behind elisebuilds"
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 340px, calc(100vw - 64px)"
                    className="object-cover"
                    preload
                    unoptimized
                  />
                </div>
                <div className="grid gap-3 border-t border-border/50 bg-surface px-2 py-4 sm:grid-cols-3">
                  {SNAPSHOTS.map((item) => (
                    <div key={item.label}>
                      <p className="font-mono text-lg font-bold text-accent">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-5 text-foreground/72">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-border/50 bg-foreground text-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <ScrollReveal>
            <Eyebrow>What I am good for</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Helpful when you know what you want, and when you really do not
              yet.
            </h2>
          </ScrollReveal>

          <div className="grid gap-3">
            {WORK_MODES.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.04} y={12}>
                <div className="flex items-center gap-4 border border-surface/14 bg-surface/8 px-4 py-4">
                  <span className="font-mono text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold leading-6 text-surface/90">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-blue">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <ScrollReveal>
            <Eyebrow>Working style</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Clear, thoughtful, and stress-free.
            </h2>
            <p className="mt-6 text-base leading-8 text-foreground/84">
              I care about whether people can understand what you offer, use
              what you have built, and know what to do next. The design matters
              too, but it should support the work instead of getting in the way.
            </p>
            <p className="mt-5 text-base leading-8 text-foreground/84">
              I am also a mum, Belgian-Australian, and based in Spain. That mix
              has made me realistic about time, communication, and building
              things outside of a perfect project plan.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} y={18}>
            <div className="grid gap-3">
              {BACKGROUND_NOTES.map((note) => (
                <div
                  key={note}
                  className="border-l-4 border-accent bg-surface px-5 py-4 text-sm font-semibold leading-7 text-foreground shadow-[0_14px_30px_rgba(53,63,68,0.06)]"
                >
                  {note}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WorkLinksSection />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 border border-border/50 bg-surface p-8 shadow-[0_20px_45px_rgba(53,63,68,0.08)] lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Eyebrow>Next step</Eyebrow>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  Got something you want to make easier?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/82">
                  Send me the site, app, workflow, or idea you are looking at.
                  I can help you work out what is worth improving, building, or
                  leaving alone for now.
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

export default AboutPage;
