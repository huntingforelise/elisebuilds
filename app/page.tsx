import type { JSX } from "react";
import { HammerIcon, LaptopIcon, MapPinIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { CountUpNumber } from "./components/CountUpNumber";
import { GoogleAppointmentButton } from "./components/GoogleAppointmentButton";
import { ScrollReveal } from "./components/ScrollReveal";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { caseStudies } from "./seo-content";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

type Props = Record<string, never>;

const GITHUB_URL = "https://github.com/huntingforelise";
const LINKEDIN_URL = "https://www.linkedin.com/in/eliseverhoeye/";
const SITE_URL = "https://www.elisebuilds.com";
const YEARS_BUILDING = 4;

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

const HERO_HELP_ITEMS = [
  "A clearer website or web app",
  "A mobile app feature or improvement",
  "A small internal tool or automation",
  "A review or rescue for AI-generated code",
];

const PROCESS_STEPS = [
  {
    title: "Tell me what you need",
    text: "Send a quick message or book a free 30-minute call. No polished brief needed, just tell me the problem you are trying to solve.",
  },
  {
    title: "We shape the scope together",
    text: "I map out what needs to be built, flag risks early, and give you a clear quote before anything starts.",
  },
  {
    title: "I build, you stay in the loop",
    text: "You get regular updates, visible progress, and space to give feedback while the work is moving.",
  },
];

const ABOUT_FACTS = [
  {
    label: "Based in",
    value: "Spain",
    icon: (
      <MapPinIcon aria-hidden="true" className="h-5 w-5" weight="duotone" />
    ),
  },
  {
    label: "Work style",
    value: "Remote-first",
    icon: (
      <LaptopIcon aria-hidden="true" className="h-5 w-5" weight="duotone" />
    ),
  },
  {
    label: "Years building",
    value: (
      <>
        <CountUpNumber value={YEARS_BUILDING} duration={900} />
        <span aria-hidden="true">+</span>
      </>
    ),
    icon: (
      <HammerIcon aria-hidden="true" className="h-5 w-5" weight="duotone" />
    ),
  },
];

const TESTIMONIAL_PREVIEWS = [
  {
    client: "Casa Film & Music",
    quote:
      "Elise brought immediate clarity to my ideas and translated them into a well-structured, strategic website that truly makes sense.",
  },
  {
    client: "Orca",
    quote:
      "She didn’t just implement, she delivered. She thought through edge cases carefully, tested thoroughly, and didn’t ship until it was right.",
  },
].map((preview) => {
  const caseStudy = caseStudies.find((item) => item.client === preview.client);

  if (!caseStudy) {
    throw new Error(`Missing testimonial preview for ${preview.client}`);
  }

  return {
    ...preview,
    name: caseStudy.testimonial.name,
    role: caseStudy.testimonial.role,
  };
});

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
    <section className="relative overflow-hidden border-b border-border/50 bg-background">
      <div className="absolute left-0 top-8 hidden h-8 w-2/5 -rotate-2 bg-accent/18 md:block" />
      <div className="absolute bottom-8 right-0 hidden h-10 w-1/3 rotate-2 bg-surface-blue md:block" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <ScrollReveal className="relative z-10 max-w-3xl" y={18}>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.26em] text-accent">
            Websites, apps & automations
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            I build digital solutions that make businesses run smoother.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/92">
            That might mean a new website, a better booking flow, a mobile app,
            an internal tool, or thoughtful help with a project that already
            exists. I’m especially useful for founders and small teams who need
            a practical builder with startup experience.
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
              className="border border-border/50 bg-surface p-5 shadow-[0_16px_35px_rgba(53,63,68,0.06)] transition hover:-translate-y-1 hover:border-accent/45 sm:p-6"
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

const ProcessPreview = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface-blue">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="How it works"
            title="Simple to get started."
            className="max-w-xl"
          />
          <p className="mt-5 max-w-md text-base leading-8 text-foreground/82">
            You do not need to arrive with a finished spec. A loose idea, a
            messy workflow, or a link to what already exists is enough to begin.
          </p>
          <Link href="/contact" className="cta-secondary mt-8 inline-flex">
            Start a conversation
          </Link>
        </ScrollReveal>

        <div className="grid gap-0 border-y border-border/50">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.06} y={16}>
              <div className="grid gap-3 border-b border-border/50 bg-surface px-0 py-6 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:px-5">
                <p className="font-mono text-sm font-bold leading-7 text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/84">
                    {step.text}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface-warm">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[1fr_240px] lg:items-center lg:px-8 lg:py-16">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About me"
            title="A tiny studio, one practical builder."
            className="max-w-3xl"
          />
          <p className="mt-5 max-w-3xl text-base leading-8 text-foreground/88">
            I’m Elise, the freelance software engineer behind elisebuilds. I
            build useful systems across web, mobile, and automation, with a
            focus on real problems, thoughtful user journeys, and digital tools
            that make work easier to manage. I like seeing ideas come to life,
            especially when the end result makes someone’s day easier.
          </p>
          <div className="mt-7 grid max-w-2xl gap-2.5 sm:grid-cols-3">
            {ABOUT_FACTS.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[68px] items-center gap-2.5 border border-border/50 bg-surface/78 px-3 py-2.5 shadow-[0_8px_18px_rgba(53,63,68,0.04)]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent [&>svg]:h-4 [&>svg]:w-4">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[0.62rem] font-bold uppercase leading-4 tracking-[0.14em] text-foreground/58">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold leading-5 text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/about" className="cta-secondary mt-8 inline-flex">
            Read more about me
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.08} y={18}>
          <div className="relative mr-auto w-full max-w-[220px] border border-border/50 bg-surface p-3 shadow-[0_18px_40px_rgba(53,63,68,0.1)] lg:mx-auto">
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
    <section className="border-t border-border/50 bg-surface-strong">
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

const TestimonialsPreview = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Kind words"
              title="People I’ve built with."
              className="max-w-xl"
            />
            <p className="mt-5 max-w-md text-base leading-8 text-foreground/82">
              A little social proof, because useful software is also about
              clarity, ownership, and being easy to work with.
            </p>
            <Link href="/portfolio" className="cta-secondary mt-8 inline-flex">
              Read case studies
            </Link>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            {TESTIMONIAL_PREVIEWS.map((item, index) => (
              <ScrollReveal
                key={item.client}
                className="border border-border/50 bg-surface p-6 shadow-[0_16px_36px_rgba(53,63,68,0.07)]"
                delay={index * 0.08}
                y={18}
              >
                <figure>
                  <p className="font-mono text-sm font-bold text-accent">
                    {String(index + 1).padStart(2, "0")} / {item.client}
                  </p>
                  <blockquote className="mt-5 text-base font-semibold leading-8 text-foreground">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border/50 pt-5">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="mt-1 text-sm leading-6 text-foreground/72">
                      {item.role}
                    </p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface-blue" id="contact">
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
        <AboutPreview />
        <ServicesPreview />
        <ProcessPreview />
        <WorkPreview />
        <TestimonialsPreview />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default FreelancePositioningSite;
