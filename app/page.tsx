import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoogleAppointmentButton } from "./components/GoogleAppointmentButton";
import { ScrollReveal } from "./components/ScrollReveal";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

type Props = Record<string, never>;

const GITHUB_URL = "https://github.com/huntingforelise";
const LINKEDIN_URL = "https://www.linkedin.com/in/eliseverhoeye/";
const SITE_URL = "https://www.elisebuilds.com";

const SERVICES = [
  {
    title: "Websites & web apps",
    text: "New builds, improvements, redesigns, booking flows, dashboards, and product pages.",
  },
  {
    title: "Mobile apps & product work",
    text: "Mobile-first app features, desktop tools, product flows, and improvements to existing apps.",
  },
  {
    title: "Workflow automation",
    text: "Enquiry flows, internal tools, email handoffs, admin automation, and connected systems.",
  },
];

const WORK_PREVIEWS = [
  {
    title: "Real estate mobile app",
    label: "Current work",
    text: "Converting an existing real estate web app into a more private mobile experience for buyers and sellers on iOS and Android.",
    image: {
      src: "/app-placeholder.svg",
      alt: "Real estate mobile app placeholder",
    },
  },
  {
    title: "Casa Film & Music",
    label: "Portfolio (web)",
    text: "A custom website and booking flow for a creative studio, built to clarify services, reduce enquiry admin and increase qualified leads.",
    image: {
      src: "/casa-film-website-screenshot.png",
      alt: "Casa Film and Music website screenshot",
    },
  },
  {
    title: "Orca",
    label: "Portfolio (mobile)",
    text: "Diverse React Native feature work for a complex marine navigation app used in real boating conditions.",
    image: {
      src: "/orca-app-screenshot-v2.png",
      alt: "Orca mobile app screenshot",
    },
  },
];

const TECH_GROUPS = [
  {
    title: "Web & apps",
    text: "Fast, maintainable interfaces for service websites, dashboards, internal tools, and product flows.",
    items: ["Next.js", "React", "React Native", "TypeScript", "iOS", "Android"],
  },
  {
    title: "Backend & data",
    text: "Practical backends and editable content systems that teams can keep using.",
    items: ["Supabase", "Firebase", "Sanity", "Contentful"],
  },
  {
    title: "Auth & delivery",
    text: "Authentication, email, deployment, and product delivery support.",
    items: ["Clerk", "Vercel", "Resend", "Expo"],
  },
  {
    title: "Automation & AI",
    text: "Email flows, workflow automation, AI-assisted development, and practical project cleanup where it helps.",
    items: ["Make", "Codex", "Claude"],
  },
];

const HERO_HELP_ITEMS = [
  "A clearer website or web app",
  "A mobile app feature or improvement",
  "A small internal tool or automation",
  "A review or rescue for AI-generated code",
];

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "elisebuilds",
      url: SITE_URL,
      description:
        "Freelance software engineering services for websites, apps, workflow automation, and improvements to existing digital projects.",
      inLanguage: "en",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Elise Verhoeye",
      url: SITE_URL,
      image: `${SITE_URL}/elise.png`,
      jobTitle: "Freelance Software Engineer",
      email: "mailto:elise@elisebuilds.com",
      sameAs: [LINKEDIN_URL, GITHUB_URL],
      knowsAbout: [
        "Next.js",
        "React",
        "React Native",
        "TypeScript",
        "Supabase",
        "Sanity CMS",
        "Workflow automation",
        "Booking systems",
        "Mobile app development",
        "Desktop app development",
        "Web app development",
        "Code review",
        "AI-generated code cleanup",
        "Existing product improvements",
      ],
      worksFor: {
        "@id": `${SITE_URL}/#business`,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "elisebuilds",
      url: SITE_URL,
      image: `${SITE_URL}/elisebuilds.svg`,
      email: "mailto:elise@elisebuilds.com",
      founder: {
        "@id": `${SITE_URL}/#person`,
      },
      areaServed: ["Mallorca", "Europe", "International"],
      priceRange: "$$",
      serviceType: [
        "Website development",
        "Mobile app development",
        "Desktop app development",
        "Workflow automation",
        "Booking systems",
        "Internal tools",
        "Code review",
        "AI-generated code cleanup",
        "Existing product improvements",
      ],
      slogan: "Websites, apps, and smarter workflows.",
    },
  ],
};

const SectionHeading = ({
  eyebrow,
  title,
  className = "",
}: SectionHeadingProps): JSX.Element => {
  return (
    <div className={className}>
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

const Hero = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="absolute left-0 top-8 hidden h-8 w-2/5 -rotate-2 bg-accent/18 md:block" />
      <div className="absolute bottom-8 right-0 hidden h-10 w-1/3 rotate-2 bg-surface-blue md:block" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <ScrollReveal className="relative z-10 max-w-3xl" y={18}>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-accent">
            Websites, apps & smarter workflows
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            I build digital solutions that make businesses run smoother.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/92">
            Focused digital work for websites, mobile apps, desktop tools,
            booking flows, internal systems, automations, and existing projects
            that need a thoughtful technical eye.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="cta-primary">
              Start a project
            </Link>
            <Link href="/services" className="cta-secondary">
              Explore services
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal className="relative z-10 lg:mt-8" delay={0.12} y={22}>
          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-full w-full bg-surface-strong lg:block lg:rotate-[-3deg]" />
            <div className="relative border border-border/60 bg-surface p-8 shadow-[0_22px_55px_rgba(53,63,68,0.1)] lg:rotate-[1.5deg]">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
                What I can help with
              </p>

              <div className="mt-8 space-y-3">
                {HERO_HELP_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="border-l-4 border-accent bg-background px-4 py-3 text-sm font-bold leading-7 text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ServicesPreview = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What I specialise in"
            title="Practical systems, not just code."
            className="max-w-2xl"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((item, index) => (
            <ScrollReveal
              key={item.title}
              className="border border-border/50 bg-background p-5 shadow-[0_16px_35px_rgba(53,63,68,0.06)] transition hover:-translate-y-1 hover:border-accent/45 sm:p-6"
              delay={index * 0.08}
              y={22}
            >
              <p className="mb-5 font-mono text-sm font-bold text-accent">
                0{index + 1}
              </p>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-foreground/92 sm:mt-3">
                {item.text}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <Link href="/services" className="cta-secondary mt-8 inline-flex">
          View all services
        </Link>
      </div>
    </section>
  );
};

const AboutPreview = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface-strong">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[1fr_240px] lg:items-center lg:px-8 lg:py-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About me"
            title="A tiny studio, one practical builder."
            className="max-w-3xl"
          />
          <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/88">
            I’m Elise, a freelance software engineer focused on building useful
            systems across web, mobile, and automation. I like solving real
            problems and seeing ideas come to life, especially when the end
            result makes someone’s day easier. I care about simple, enjoyable
            user journeys and making the digital part feel clearer, calmer, and
            easier to manage.
          </p>
          <Link href="/about" className="cta-secondary mt-8 inline-flex">
            Read more about me
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.08} y={18}>
          <div className="relative mr-auto w-full max-w-[220px] border border-border/50 bg-surface p-3 shadow-[0_18px_40px_rgba(53,63,68,0.1)] lg:mx-auto lg:rotate-[2deg]">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-blue">
              <Image
                src="/elise.png"
                alt="Elise Verhoeye photo"
                fill
                sizes="220px"
                className="object-cover object-center"
                unoptimized
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const WorkPreview = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface-blue">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Work experience"
            title="A few things I’ve been building."
            className="max-w-2xl"
          />
        </ScrollReveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {WORK_PREVIEWS.map((item, index) => (
            <ScrollReveal
              key={item.title}
              className="overflow-hidden border border-border/50 bg-surface shadow-[0_14px_32px_rgba(53,63,68,0.08)] transition hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_20px_46px_rgba(53,63,68,0.12)]"
              delay={index * 0.08}
              y={20}
            >
              <div className="relative aspect-[16/10] bg-surface-strong">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, calc(100vw - 48px)"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/88">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <Link href="/portfolio" className="cta-secondary mt-8 inline-flex">
          View portfolio
        </Link>
      </div>
    </section>
  );
};

const TechSnapshot = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[0.58fr_1.42fr] lg:items-start lg:px-8 lg:py-16">
        <ScrollReveal>
          <div className="max-w-sm">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
              Tech stack
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              Tools I use often.
            </h2>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-foreground/85">
            The stack changes by project. These are the tools I reach for most.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08} y={18}>
          <div className="grid gap-3 sm:grid-cols-2">
            {TECH_GROUPS.map((group) => (
              <div
                key={group.title}
                className="border-l-4 border-accent bg-surface p-4 shadow-[0_10px_24px_rgba(53,63,68,0.05)]"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={`${group.title}-${item}`}
                      className="border border-border/60 bg-surface-blue px-3 py-1 text-sm font-semibold text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ContactSection = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-background" id="contact">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-8 border border-border/50 bg-surface p-8 shadow-[0_20px_45px_rgba(53,63,68,0.08)] lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Let’s build something together.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/82">
                Whether you need a website, app, workflow, or practical second
                pair of eyes, send a note or book a time to talk it through.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <GoogleAppointmentButton />
              <Link href="/contact" className="cta-secondary">
                Contact details
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FreelancePositioningSite = (_props: Props): JSX.Element => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <main>
        <Hero />
        <ServicesPreview />
        <AboutPreview />
        <WorkPreview />
        <TechSnapshot />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default FreelancePositioningSite;
