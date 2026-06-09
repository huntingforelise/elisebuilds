import type { JSX } from "react";
import Image from "next/image";
import { GoogleAppointmentButton } from "./components/GoogleAppointmentButton";
import { ScrollReveal } from "./components/ScrollReveal";

type Service = {
  title: string;
  text: string;
};

type TechGroup = {
  title: string;
  items: string[];
};

type Step = string;

type Props = Record<string, never>;

type BestFitItem = string;

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  className?: string;
};

type HeroProps = {
  bestFit: BestFitItem[];
};

type AboutSectionProps = Record<string, never>;

type ServicesSectionProps = {
  services: Service[];
};

type TechExperienceSectionProps = {
  techGroups: TechGroup[];
};

type CurrentWorkSectionProps = {
  projectFocus: string[];
};

type PreviousWorkSectionProps = {
  highlights: string[];
};

type ClientTestimonial = {
  quote: string;
  name: string;
  role: string;
};

type HowIWorkSectionProps = {
  steps: Step[];
};

const GITHUB_URL = "https://github.com/huntingforelise";
const LINKEDIN_URL = "https://www.linkedin.com/in/eliseverhoeye/";
const SITE_URL = "https://www.elisebuilds.com";
const ORCA_WEBSITE_URL = "https://getorca.com/";
const CASA_WEBSITE_URL = "https://casa-film.com";
const ORCA_DOWNLOAD_URL =
  "https://help.getorca.com/en/articles/8260060-how-do-i-download-the-orca-app";
const CASA_WEBSITE_SCREENSHOT_SRC = "/casa-film-website-screenshot.png";
const ORCA_APP_SCREENSHOT_SRC = "/orca-app-screenshot-v2.png";
const CURRENT_WORK_APP_PLACEHOLDER_SRC = "/app-placeholder.svg";

const BEST_FIT: BestFitItem[] = [
  "Service-based businesses",
  "Startups & founders",
  "Teams with inefficient workflows",
  "Businesses looking to automate",
];

const SERVICES: Service[] = [
  {
    title: "Websites & platforms",
    text: "Modern websites and web apps designed to support growth, conversion, and a smooth user experience.",
  },
  {
    title: "Mobile apps",
    text: "Custom mobile applications that extend your product or streamline how your users interact with your business.",
  },
  {
    title: "Automation & workflows",
    text: "Booking systems, internal tools, and automations that reduce manual work and improve how your business runs day-to-day.",
  },
];

const TECH_GROUPS: TechGroup[] = [
  {
    title: "Web & mobile",
    items: ["Next.js", "React", "React Native"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    title: "Tools & services",
    items: ["Supabase", "Sanity CMS", "Resend", "Redux"],
  },
  {
    title: "AI & automation",
    items: ["Codex (OpenAI)", "Claude", "Make"],
  },
];

const PROJECT_FOCUS: string[] = [
  "Converting an existing web app into a mobile app",
  "Private buyer and seller features",
  "Product flows designed around trust",
  "Push notifications for timely updates",
];

const ORCA_HIGHLIGHTS: string[] = [
  "Built mobile features for a navigation app used in real boating conditions",
  "Turned route, map, and weather data into clearer in-app decisions",
  "Supported the product beyond the app with targeted website improvements",
];

const CASA_FOCUS_AREAS: string[] = [
  "Turn website visitors into structured enquiries",
  "Reduce back-and-forth before a client books",
  "Make services, packages, and add-ons easier to buy",
  "Save admin time with clearer lead capture and email flow",
  "Create a scalable base for future revenue-driving features",
];

const ORCA_TESTIMONIAL: ClientTestimonial = {
  quote:
    "I worked with Elise at Orca, where we built mobile features in React Native for the Orca Navigation App... She didn’t just implement, she delivered. She thought through edge cases carefully, tested thoroughly, and didn’t ship until it was right. She is proactive, speaks up in discussions, and contributes well beyond her scope... clear, direct, and easy to work with. She works independently, and that confidence in owning her work is something that’s hard to find. I’d recommend her without hesitation.",
  name: "Judith Sirera i Pulido",
  role: "Senior Engineer",
};

const CASA_FILM_TESTIMONIAL: ClientTestimonial = {
  quote:
    "Working with Elise was a standout experience. She brought immediate clarity to my ideas and translated them into a well-structured, strategic website that truly makes sense, both visually and from a user journey perspective. She didn’t just build, she actively shaped the project. The booking flow has significantly reduced manual work on my side and made the whole process much more efficient. The final result aligns perfectly with what I envisioned, just more refined, more structured, and overall elevated.",
  name: "Nathalie Kraft",
  role: "Business owner",
};

const STEPS: Step[] = [
  "Understand your workflow and identify inefficiencies.",
  "Design simple, practical systems that solve real problems.",
  "Build scalable solutions across web, mobile, and automation.",
  "Deliver something clearer, faster, and easier to manage.",
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
        "Freelance software engineering services for websites, mobile apps, booking systems, internal tools, and workflow automation.",
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
      image: `${SITE_URL}/elise.jpeg`,
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
        "Workflow automation",
        "Booking systems",
        "Internal tools",
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
      <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

const Hero = ({ bestFit }: HeroProps): JSX.Element => {
  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
      <ScrollReveal className="max-w-3xl" y={18}>
        <p className="mb-4 text-sm uppercase tracking-[0.26em] text-accent font-bold">
          Websites, apps & smarter workflows
        </p>

        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
          I build websites, apps, and systems that make businesses run smoother.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/92">
          As a freelance software engineer, I design and build solutions from
          websites and mobile apps to booking flows and internal tools that
          reduce manual work, give people time back, improve client experience,
          and bring structure to how your business operates.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="cta-primary">
            Start a project
          </a>
          <a href="#work" className="cta-secondary">
            View current work
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal className="relative" delay={0.12} y={22}>
        <div className="relative rounded-[2rem] border border-border/60 bg-surface-strong p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
            Best fit
          </p>

          <div className="mt-8 space-y-3">
            {bestFit.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border/60 bg-surface px-4 py-3 text-sm text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AboutSection = (_props: AboutSectionProps): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface-strong">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About me"
            title="Nice to meet you."
            className="max-w-2xl"
          />
        </ScrollReveal>

        <ScrollReveal
          className="mt-10 grid gap-10 rounded-[2rem] border border-border/50 bg-surface p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)] lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-12"
          delay={0.08}
        >
          <div className="max-w-none">
            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-accent font-bold">
              Mum, developer, curious human.
            </p>
            <p className="text-base leading-8 text-foreground/90">
              I&apos;m Elise, a freelance software engineer focused on building
              websites, mobile apps, and automation that make everyday business
              operations feel simpler. As a mum, I know how quickly busy days
              fill up, so I care deeply about building practical digital
              solutions that save time, reduce manual work, and make things
              easier to use, manage, and grow.
            </p>
            <p className="mt-4 text-base leading-8 text-foreground/90">
              I like working closely with clients to understand what actually
              needs to happen, then shaping the technical solution around that
              so the final result fits the workflow, not the other way around.
              I&apos;m also naturally curious and always learning, upskilling,
              and exploring better ways to build so each solution is thoughtful,
              current, and made to last.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[240px] overflow-hidden rounded-[1.75rem] border border-border/50 bg-surface-blue p-4 shadow-[0_18px_40px_rgba(53,63,68,0.08)] lg:max-w-[280px] lg:mx-0 lg:justify-self-end lg:ml-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-border/40 bg-surface">
              <Image
                src="/elise.jpeg"
                alt="Elise Verhoeye photo"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ServicesSection = ({ services }: ServicesSectionProps): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What I help with"
            title="Practical systems, not just code."
            className="max-w-2xl"
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((item, index) => (
            <ScrollReveal
              key={item.title}
              className="rounded-2xl border border-border/50 bg-surface-strong p-6 transition hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_12px_28px_rgba(53,63,68,0.08)]"
              delay={index * 0.08}
              y={22}
            >
              <div className="mb-4 h-10 w-10 rounded-lg bg-surface-blue ring-1 ring-inset ring-border/50" />
              <h3 className="text-lg font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground/92">
                {item.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechExperienceSection = ({
  techGroups,
}: TechExperienceSectionProps): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Tools & tech"
            title="Technologies I’ve used in client environments."
            className="max-w-3xl"
          />
        </ScrollReveal>

        <ScrollReveal className="mt-8 max-w-3xl" delay={0.06}>
          <p className="text-base leading-8 text-foreground/90">
            I work with a broad set of tools across web, mobile, content,
            backend services, AI, and automation. This is a focused snapshot of
            the commercial stack I use most often, rather than the full list.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              className="rounded-2xl border border-border/50 bg-surface p-6 shadow-[0_14px_30px_rgba(53,63,68,0.06)]"
              delay={index * 0.06}
              y={18}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/60 bg-surface-blue px-3 py-1.5 text-sm font-semibold text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const CurrentWorkSection = ({
  projectFocus,
}: CurrentWorkSectionProps): JSX.Element => {
  return (
    <section id="work" className="border-t border-border/50 bg-surface-blue">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Current work"
            title="What I’m secretly working on right now..."
            className="max-w-2xl"
          />
        </ScrollReveal>

        <ScrollReveal
          className="mt-10 rounded-[2rem] border border-border/50 bg-surface-strong p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)]"
          delay={0.08}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px] xl:items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
                In progress
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                Real estate mobile app
              </h3>
              <p className="mt-5 text-base leading-8 text-foreground/90">
                I’m currently converting an existing real estate web app into a
                mobile app for a more private way to buy and sell property.
              </p>
              <p className="mt-4 text-base leading-8 text-foreground/90">
                The app will include buyer and seller features, with an emphasis
                on privacy, trust, and timely updates through push
                notifications. More will be shared soon.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-border/50 bg-surface p-5 shadow-[0_14px_32px_rgba(53,63,68,0.08)]">
              <div className="grid gap-5 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-center lg:grid-cols-1 xl:grid-cols-[160px_minmax(0,1fr)]">
                <div className="mx-auto w-full max-w-[150px] xl:max-w-[160px]">
                  <div className="rounded-[1.85rem] bg-foreground p-2 shadow-[0_18px_38px_rgba(40,50,59,0.18)] ring-1 ring-foreground/10">
                    <div className="mx-auto mb-1.5 h-1.5 w-11 rounded-full bg-surface/25" />
                    <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.3rem] bg-surface">
                      <Image
                        src={CURRENT_WORK_APP_PLACEHOLDER_SRC}
                        alt="Real estate mobile app placeholder"
                        fill
                        sizes="(min-width: 1280px) 160px, 150px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
                    Project focus
                  </p>
                  <ul className="mt-4 space-y-3">
                    {projectFocus.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent ring-2 ring-accent-soft" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const PreviousWorkSectionCompact = ({
  highlights,
}: PreviousWorkSectionProps): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface-strong">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Previous work"
            title="Projects I’ve helped bring to life."
            className="max-w-2xl"
          />
        </ScrollReveal>

        <ScrollReveal
          className="mt-10 rounded-[2rem] border border-border/50 bg-surface p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)]"
          delay={0.08}
        >
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] xl:items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
                Casa Film &amp; Music
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                Website &amp; booking system
              </h3>
              <p className="mt-5 text-base leading-8 text-foreground/90">
                I designed and built a custom website and structured booking
                system for a creative studio offering photography, videography,
                and music services.
              </p>
              <p className="mt-4 text-base leading-8 text-foreground/90">
                The work focused on reducing back-and-forth communication,
                standardising how enquiries are captured, and making the quoting
                process faster, clearer, and more consistent.
              </p>
              <a
                href={CASA_WEBSITE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center justify-center gap-2 rounded-full border border-accent/35 px-4 py-3 text-sm font-semibold leading-5 text-accent transition hover:border-foreground/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View the Casa Film & Music website
                <span aria-hidden="true" className="shrink-0">
                  →
                </span>
              </a>
            </div>

            <div className="mx-auto w-full max-w-md xl:mr-0">
              <div className="rounded-[1.45rem] bg-foreground p-2 shadow-[0_24px_55px_rgba(40,50,59,0.16)] ring-1 ring-foreground/10">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[0.95rem] bg-surface">
                  <Image
                    src={CASA_WEBSITE_SCREENSHOT_SRC}
                    alt="Casa Film & Music website screenshot"
                    fill
                    sizes="(min-width: 1280px) 400px, (min-width: 640px) 448px, calc(100vw - 80px)"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mx-auto h-4 w-[34%] rounded-b-2xl bg-foreground/85 shadow-[0_14px_20px_rgba(40,50,59,0.12)]" />
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-border/45 bg-surface-warm/45 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
              Focus areas
            </p>
            <ul className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {CASA_FOCUS_AREAS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-border/35 pt-4 text-sm leading-6 text-foreground"
                >
                  <span className="mt-2 h-1.5 w-6 shrink-0 rounded-full bg-accent/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="mt-8 rounded-[1.5rem] border border-border/50 bg-surface-warm p-6 shadow-[0_12px_28px_rgba(53,63,68,0.06)] lg:p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
              What Nathalie said
            </p>
            <blockquote className="mt-4 text-base leading-8 italic text-foreground/92">
              {CASA_FILM_TESTIMONIAL.quote}
            </blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border/50 pt-5">
              <p className="font-semibold text-foreground">
                {CASA_FILM_TESTIMONIAL.name}
              </p>
              <span className="text-foreground/55">•</span>
              <p className="text-sm text-foreground/75">
                {CASA_FILM_TESTIMONIAL.role}
              </p>
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal
          className="mt-8 rounded-[2rem] border border-border/50 bg-surface p-8 shadow-[0_20px_50px_rgba(53,63,68,0.08)]"
          delay={0.12}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px] xl:items-center">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
                Orca
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                Marine navigation mobile app
              </h3>
              <p className="mt-5 text-base leading-8 text-foreground/90">
                I worked with Orca, a startup building modern navigation tools
                for sailors and cruisers. My focus was mainly on mobile app
                development, helping ship features that made the product more
                useful and easier to use.
              </p>
              <p className="mt-4 text-base leading-8 text-foreground/90">
                That included new product pages, the route-weather feature for
                boaters, and a smaller amount of website work to support the
                wider product experience.
              </p>
              <div className="mt-5 grid max-w-sm gap-3">
                <a
                  href={ORCA_WEBSITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-accent/35 px-4 py-3 text-center text-sm font-semibold leading-5 text-accent transition hover:border-foreground/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  View the Orca website
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={ORCA_DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-0 items-center justify-center gap-2 rounded-full border border-border/70 px-4 py-3 text-center text-sm font-semibold leading-5 text-foreground transition hover:border-accent/45 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Download the Orca app
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-border/50 bg-surface-blue/70 p-5 shadow-[0_14px_32px_rgba(53,63,68,0.08)]">
              <div className="grid gap-5 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-center lg:grid-cols-1 xl:grid-cols-[160px_minmax(0,1fr)]">
                <div className="mx-auto w-full max-w-[150px] xl:max-w-[160px]">
                  <div className="rounded-[1.85rem] bg-foreground p-2 shadow-[0_18px_38px_rgba(40,50,59,0.18)] ring-1 ring-foreground/10">
                    <div className="mx-auto mb-1.5 h-1.5 w-11 rounded-full bg-surface/25" />
                    <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.3rem] bg-surface">
                      <Image
                        src={ORCA_APP_SCREENSHOT_SRC}
                        alt="Orca mobile app screenshot"
                        fill
                        sizes="(min-width: 1280px) 160px, 150px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
                    Highlights
                  </p>
                  <ul className="mt-4 space-y-3">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent ring-2 ring-accent-soft" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <figure className="mt-8 rounded-[1.5rem] border border-border/50 bg-surface-blue p-6 shadow-[0_12px_28px_rgba(53,63,68,0.06)] lg:p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
              What Judith said
            </p>
            <blockquote className="mt-4 text-base leading-8 italic text-foreground/92">
              {ORCA_TESTIMONIAL.quote}
            </blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border/50 pt-5">
              <p className="font-semibold text-foreground">
                {ORCA_TESTIMONIAL.name}
              </p>
              <span className="text-foreground/55">•</span>
              <p className="text-sm text-foreground/75">
                {ORCA_TESTIMONIAL.role}
              </p>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
};

const HowIWorkSection = ({ steps }: HowIWorkSectionProps): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="How I work"
            title="Focused on outcomes, not just features."
            className="max-w-2xl"
          />
        </ScrollReveal>

        <div className="mt-10 space-y-5">
          {steps.map((step, index) => (
            <ScrollReveal
              key={step}
              className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-surface-strong p-5 transition hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_10px_24px_rgba(53,63,68,0.08)] focus-within:border-accent/45"
              delay={index * 0.06}
              y={18}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-surface text-sm text-accent transition group-hover:bg-surface-blue">
                {index + 1}
              </div>
              <p className="text-sm leading-7 text-foreground/92">{step}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface-blue" id="contact">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <ScrollReveal className="rounded-[2rem] border border-border/50 bg-surface-strong p-10 text-center shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">
            Need a better system, product, or workflow?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/92">
            I’m currently available for freelance projects across web, mobile,
            and automation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <GoogleAppointmentButton />
            <a href="mailto:elise@elisebuilds.com" className="cta-secondary">
              Send me an email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const WorkLinksSection = (): JSX.Element => {
  return (
    <section className="border-t border-border/50 bg-surface-strong">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <ScrollReveal className="rounded-[2rem] border border-border/50 bg-surface p-8 text-center shadow-[0_20px_50px_rgba(53,63,68,0.08)]">
          <p className="text-sm uppercase tracking-[0.24em] text-accent font-bold">
            A small note
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">
            Despite my love for automation, I am not a robot.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/92">
            You can find my work here.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href={LINKEDIN_URL} className="cta-secondary">
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              className="cta-secondary"
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

const Footer = (): JSX.Element => {
  const footerLinks = [
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border/50 bg-foreground text-surface">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Image
              src="/elisebuilds.svg"
              alt="Elise Verhoeye logo"
              width={196}
              height={72}
              className="h-auto w-44 brightness-0 invert"
            />
            <p className="mt-5 text-sm leading-7 text-surface/78">
              Websites, apps, and workflow automation for businesses that want
              cleaner systems and calmer operations.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-surface/20 px-4 py-2 text-sm font-semibold text-surface/86 transition hover:border-accent hover:bg-accent hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-surface/15 pt-6 text-sm text-surface/62 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Elise Verhoeye. All rights reserved.</p>
          <p>Based in Mallorca, working internationally.</p>
        </div>
      </div>
    </footer>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FreelancePositioningSite = (_props: Props): JSX.Element => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(STRUCTURED_DATA),
        }}
      />
      <header className="sticky top-0 z-50 border-b border-border/50 bg-surface shadow-[0_1px_0_rgba(40,50,59,0.05),0_12px_30px_rgba(40,50,59,0.04)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-40 shrink-0 md:w-48 lg:w-64">
              <Image
                src="/elisebuilds.svg"
                alt="Elise Verhoeye logo"
                width={112}
                height={112}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <a
            href="#contact"
            className="ml-auto shrink-0 rounded-full border-2 border-border bg-surface px-4 py-2 text-sm font-bold text-foreground transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <Hero bestFit={BEST_FIT} />
        <AboutSection />
        <ServicesSection services={SERVICES} />
        <CurrentWorkSection projectFocus={PROJECT_FOCUS} />
        <PreviousWorkSectionCompact highlights={ORCA_HIGHLIGHTS} />
        <TechExperienceSection techGroups={TECH_GROUPS} />
        <HowIWorkSection steps={STEPS} />
        <ContactSection />
        <WorkLinksSection />
      </main>
      <Footer />
    </div>
  );
};

export default FreelancePositioningSite;
