import type { JSX } from "react";
import type { Metadata } from "next";
import type { Icon } from "@phosphor-icons/react/lib";
import {
  ChatsCircleIcon,
  CheckCircleIcon,
  CodeIcon,
  EggCrackIcon,
  FlagIcon,
  GlobeHemisphereWestIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  NotebookIcon,
  SparkleIcon,
  TranslateIcon,
} from "@phosphor-icons/react/ssr";
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
    label: "languages spoken professionally",
    detail: "Dutch, English, and French",
    icon: "language",
  },
  {
    value: "4",
    label: "years building",
    detail: "Websites, apps, and product flows",
    icon: "code",
  },
  {
    value: "4",
    label: "client nationalities",
    detail: "Australia, Germany, Spain, Norway",
    icon: "globe",
  },
] as const;

const WORK_MODES = [
  "A new website or web app from scratch",
  "A mobile app feature that needs building properly",
  "A product idea that needs shaping before it gets too big",
  "A booking flow, admin tool, or automation that saves time",
  "AI-generated code that needs a human pass before launch",
];

const WORK_VALUES = [
  {
    title: "Calm",
    detail: "Steady communication, even when the project has moving parts.",
    icon: "spark",
  },
  {
    title: "Thoughtful",
    detail: "I think before I build, so the work starts in the right place.",
    icon: "search",
  },
  {
    title: "Thorough",
    detail: "I care about the small details that make things easier later.",
    icon: "check",
  },
  {
    title: "Quick to learn",
    detail: "New tools, teams, and constraints do not throw me for long.",
    icon: "note",
  },
  {
    title: "Polite",
    detail: "Clear, respectful collaboration matters as much as the code.",
    icon: "message",
  },
] as const;

const PROFILE_DETAILS = [
  {
    title: "Belgium born",
    detail: "Raised with Dutch, French, and English around me.",
    icon: "egg",
  },
  {
    title: "Australian citizen",
    detail: "Part of the Belgian-Australian mix I bring to the work.",
    icon: "flag",
  },
  {
    title: "Based in Spain",
    detail: "Working internationally from here.",
    icon: "pin",
  },
] as const;

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
  return <p className="eyebrow text-accent">{children}</p>;
};

type DetailIconName =
  | "check"
  | "code"
  | "egg"
  | "flag"
  | "globe"
  | "language"
  | "message"
  | "note"
  | "pin"
  | "search"
  | "spark";

const DETAIL_ICONS: Record<DetailIconName, Icon> = {
  check: CheckCircleIcon,
  code: CodeIcon,
  egg: EggCrackIcon,
  flag: FlagIcon,
  globe: GlobeHemisphereWestIcon,
  language: TranslateIcon,
  message: ChatsCircleIcon,
  note: NotebookIcon,
  pin: MapPinIcon,
  search: MagnifyingGlassIcon,
  spark: SparkleIcon,
};

const DetailIcon = ({ name }: { name: DetailIconName }): JSX.Element => {
  const IconComponent = DETAIL_ICONS[name];

  return (
    <IconComponent aria-hidden="true" className="h-5 w-5" weight="duotone" />
  );
};

const WorkLinksSection = (): JSX.Element => {
  const socialLinkClass =
    "rounded-full border-2 border-border bg-surface px-7 py-3.5 text-sm font-bold tracking-[0.02em] text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <section className="border-t border-border/50 bg-surface-strong">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <ScrollReveal className="border border-border/50 bg-surface p-8 text-center shadow-[0_20px_50px_rgba(5,5,7,0.08)]">
          <p className="eyebrow text-accent">A small note</p>
          <h2 className="mt-4 text-3xl text-foreground">
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

      <section className="relative isolate overflow-hidden border-b border-border/50">
        <div className="grid-overlay-light pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <ScrollReveal className="relative z-10 max-w-3xl" y={18}>
            <Eyebrow>About the builder</Eyebrow>
            <h1 className="poster-heading mt-4 text-4xl leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              I&apos;m Elise, lovely to meet you.
            </h1>
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-8 text-foreground/84">
              <p>
                elisebuilds is my small software studio. I work with people who
                need a new site, an app feature, a better product flow, or a
                technical person to help bring an idea down to earth.
              </p>
              <p>
                I do the building myself. Sometimes that means starting from a
                blank page. Sometimes it means joining halfway through and
                making sense of what is already there. Either way, I like making
                things that are clear, usable, and not a pain to keep working
                on.
              </p>
            </div>
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
              <div className="relative border border-border/50 bg-surface p-4 shadow-[0_22px_55px_rgba(18,26,42,0.1)]">
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
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-surface-strong">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <Eyebrow>A few details</Eyebrow>
              <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl">
                A small mix of places, languages, and practical experience.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} y={18}>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SNAPSHOTS.map((item) => (
                <div
                  key={item.label}
                  className="h-32 border border-border/50 bg-surface p-5 shadow-[0_14px_30px_rgba(5,5,7,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center text-accent">
                      <DetailIcon name={item.icon} />
                    </span>
                    <div>
                      <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-5 text-foreground">
                        <span className="font-mono text-2xl leading-none text-accent">
                          {item.value}
                        </span>
                        <span>{item.label}</span>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-foreground/72">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {PROFILE_DETAILS.map((item) => (
                <div
                  key={item.title}
                  className="h-32 border border-border/50 bg-surface p-5 shadow-[0_14px_30px_rgba(5,5,7,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center text-accent">
                      <DetailIcon name={item.icon} />
                    </span>
                    <div>
                      <h3 className="text-sm leading-5 text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-foreground/72">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-surface-blue">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <ScrollReveal>
            <Eyebrow>Working style</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl">
              Calm, careful, and kind.
            </h2>
            <p className="mt-6 text-base leading-8 text-foreground/84">
              I care about making the work feel steady. That means thinking
              before doing, asking useful questions, and keeping the process
              clear enough that you always know where things stand.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} y={18}>
            <div className="grid gap-3">
              {WORK_VALUES.map((item) => (
                <div
                  key={item.title}
                  className="border border-border/50 bg-surface p-5 shadow-[0_14px_30px_rgba(5,5,7,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent-soft text-accent">
                      <DetailIcon name={item.icon} />
                    </span>
                    <div>
                      <h3 className="text-sm leading-5 text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-foreground/72">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-border/50 bg-accent-ink text-surface">
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-55" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <ScrollReveal>
            <Eyebrow>What I am good for</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
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

      <WorkLinksSection />

      <section className="relative isolate overflow-hidden bg-background">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 border border-border/50 bg-surface p-8 shadow-[0_20px_45px_rgba(5,5,7,0.08)] lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <Eyebrow>Next step</Eyebrow>
                <h2 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl">
                  Got something you want to make easier?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/82">
                  Send me the site, app, workflow, or idea you are looking at. I
                  can help you work out what is worth improving, building, or
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
