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
    title: "Websites, web apps & discoverability",
    text: "New builds, improvements, redesigns, booking flows, dashboards, product pages, and SEO/GEO/AEO foundations.",
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
    label: "Portfolio (mobile)",
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
    title: "Casa la Sorpresa",
    label: "Portfolio (web)",
    text: "A multilingual holiday rental website and direct booking flow, built to present the property clearly and support direct bookings.",
    image: {
      src: "/casa-la-sorpresa-website-screenshot.png",
      alt: "Casa la Sorpresa website screenshot",
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

  if (!caseStudy?.testimonial) {
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
        "SEO",
        "GEO",
        "AEO",
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
      image: `${SITE_URL}/elisebuilds.png`,
      email: "mailto:elise@elisebuilds.com",
      founder: {
        "@id": `${SITE_URL}/#person`,
      },
      areaServed: ["Mallorca", "Europe", "International"],
      priceRange: "$$",
      serviceType: [
        "Website development",
        "SEO, GEO and AEO improvements",
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
    <div className={`min-w-0 ${className}`}>
      <p className="eyebrow text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-full whitespace-normal break-words text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

const Hero = (): JSX.Element => {
  return (
    <section className="relative isolate overflow-hidden border-b border-surface/10 bg-accent-ink text-surface">
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-11 px-6 py-11 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-14">
        <ScrollReveal className="relative z-10 max-w-4xl" y={18}>
          <p className="mb-4 eyebrow text-brand-sun">
            Websites, apps & automations
          </p>

          <h1 className="poster-heading max-w-5xl text-5xl leading-[0.88] text-surface sm:text-7xl lg:text-[5.35rem] 2xl:text-8xl">
            <span className="block">I build digital</span>
            <span className="block text-brand-sun">solutions</span>
            <span className="block">with a bit more spark.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-surface/78">
            That might mean a new website, a better booking flow, a mobile app,
            an internal tool, or thoughtful help with a project that already
            exists. I’m especially useful for founders and small teams who need
            a practical builder with startup experience.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="cta-primary cta-primary-on-dark">
              Start a project
            </Link>
            <Link
              href="/services"
              className="cta-sun"
            >
              Explore services
            </Link>
          </div>

        </ScrollReveal>

        <ScrollReveal
          className="relative z-10 w-full max-w-[470px] justify-self-center"
          delay={0.12}
          y={22}
        >
          <div className="relative">
            <div className="brand-shadow relative border border-surface/16 bg-surface/10 p-5 text-surface backdrop-blur-sm">
              <p className="eyebrow text-brand-sun">
                What I can help with
              </p>
              <div className="mt-5 grid gap-3">
                {HERO_HELP_ITEMS.map((item, index) => (
                  <div
                    key={item}
                    className="group grid grid-cols-[1.35rem_1fr] items-start gap-3.5 border border-surface/14 bg-accent-ink/72 px-5 py-4 text-base font-medium leading-7 text-surface/88 transition hover:-translate-x-1 hover:-translate-y-1 hover:border-accent/70 hover:bg-accent-ink"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 block h-3 w-3 shrink-0 transition group-hover:scale-125 ${
                        index % 2 === 0
                          ? "bg-accent"
                          : "border border-brand-sun bg-transparent"
                      }`}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative z-10 border-y border-surface/10 bg-surface/6 py-3">
        <div className="work-reel gap-8">
          {[...HERO_HELP_ITEMS, ...HERO_HELP_ITEMS].map((item, index) => (
            <span className="kinetic-word" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPreview = (): JSX.Element => {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 bg-surface">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
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
              className="agency-card relative grid grid-cols-[2rem_1fr] gap-3 overflow-hidden p-5 transition hover:-translate-y-1 hover:border-foreground sm:p-6 md:block"
              delay={index * 0.08}
              y={22}
            >
              <p className="relative font-mono text-sm font-bold leading-7 text-accent md:mb-5">
                0{index + 1}
              </p>
              <div>
                <h3 className="relative text-lg text-foreground sm:text-xl">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-7 text-foreground/92 sm:mt-3">
                  {item.text}
                </p>
              </div>
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
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.72fr_1.28fr] lg:px-8 lg:py-20">
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

        <div className="grid gap-3">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 0.06} y={16}>
              <div className="grid grid-cols-[3rem_1fr] gap-5 border border-border/60 bg-surface px-5 py-6 shadow-[0_14px_32px_rgba(36,27,58,0.07)] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0.45rem_0.45rem_0_var(--accent)]">
                <p className="flex h-10 w-10 items-center justify-center bg-accent-ink font-mono text-sm font-bold leading-7 text-surface">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg leading-7 text-foreground">
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
    <section className="relative isolate overflow-hidden border-t border-border/50 bg-surface-warm">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_360px] lg:items-center lg:px-8 lg:py-20">
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
                className="flex min-h-[68px] items-center gap-2.5 border border-border/50 bg-surface/86 px-3 py-2.5 shadow-[0_8px_18px_rgba(36,27,58,0.05)] transition hover:-translate-y-1"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-accent-soft text-accent [&>svg]:h-4 [&>svg]:w-4">
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
          <div className="relative mr-auto w-full max-w-[340px] border border-border/60 bg-surface p-3 shadow-[0_18px_40px_rgba(36,27,58,0.12)] lg:mx-auto">
            <div className="relative z-10 aspect-[4/5] overflow-hidden bg-surface-blue">
              <Image
                src="/elise.png"
                alt="Elise Verhoeye photo"
                fill
                sizes="(min-width: 1024px) 340px, calc(100vw - 48px)"
                className="object-cover object-center grayscale"
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
    <section className="relative isolate overflow-hidden border-t border-border/50 bg-accent-ink text-surface">
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative z-10 mx-auto grid max-w-[88rem] gap-8 px-6 py-16 max-lg:overflow-hidden lg:grid-cols-[0.34fr_0.66fr] lg:px-8 lg:py-20">
        <ScrollReveal className="min-w-0 max-w-full lg:max-w-xl">
          <SectionHeading
            eyebrow="Work experience"
            title="A few things I’ve been building."
            className="[&>h2]:text-surface [&>p]:text-brand-sun"
          />
          <Link
            href="/portfolio"
            className="cta-sun mt-8"
          >
            View portfolio
          </Link>
        </ScrollReveal>

        <ScrollReveal className="min-w-0 max-w-full overflow-hidden lg:-mr-24 lg:overflow-visible xl:-mr-40 2xl:-mr-56" delay={0.08} y={18}>
          <div className="border border-surface/12 bg-surface/6 p-4 lg:w-[calc(100%+6rem)] lg:p-5 xl:w-[calc(100%+10rem)] 2xl:w-[calc(100%+14rem)]">
            <div className="overflow-hidden">
              <div className="work-reel gap-4 pr-4">
                {[...WORK_PREVIEWS, ...WORK_PREVIEWS].map((item, index) => (
                  <article
                    key={`${item.title}-${index}`}
                    className="work-reel-card overflow-hidden border border-surface/16 bg-surface text-foreground shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                  >
                    <div className="relative aspect-[16/9] bg-surface-strong">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(min-width: 1024px) 368px, 74vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="grid min-h-[14rem] content-between p-5">
                      <div>
                        <p className="eyebrow text-accent">
                          {item.label}
                        </p>
                        <h3 className="poster-heading mt-3 text-3xl leading-none text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-foreground/78">
                          {item.text}
                        </p>
                      </div>
                      <p className="mt-6 font-mono text-xs font-black uppercase tracking-[0.18em] text-foreground/50">
                        {String((index % WORK_PREVIEWS.length) + 1).padStart(
                          2,
                          "0",
                        )}{" "}
                        / {WORK_PREVIEWS.length.toString().padStart(2, "0")}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative z-10 border-t border-surface/10 py-4">
        <div className="work-reel gap-10">
          {[...WORK_PREVIEWS, ...WORK_PREVIEWS].map((item, index) => (
            <span className="kinetic-word" key={`${item.label}-${index}`}>
              {item.label} / {item.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsPreview = (): JSX.Element => {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/50 bg-background">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
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
                className="border border-border/50 bg-surface p-6 shadow-[0_16px_36px_rgba(36,27,58,0.08)]"
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
          <div className="brand-shadow grid gap-8 border border-foreground/15 bg-surface p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-accent">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl">
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
