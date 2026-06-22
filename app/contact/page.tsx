import type { Metadata } from "next";
import type { JSX } from "react";
import Link from "next/link";
import { GoogleAppointmentButton } from "../components/GoogleAppointmentButton";
import { PageShell } from "../components/SeoPageTemplates";
import { ScrollReveal } from "../components/ScrollReveal";
import { getInfoPageBySlug, SITE_URL } from "../seo-content";

const page = getInfoPageBySlug("/contact");
const EMAIL = "elise@elisebuilds.com";
const EMAIL_HREF = `mailto:${EMAIL}`;

const WHAT_TO_SEND = [
  "What you want to build or improve",
  "What is frustrating, manual, or unclear right now",
  "Any deadline, budget range, or must-have detail you already know",
];

const NEXT_STEPS = [
  "I read your message properly.",
  "I reply with questions, suggestions, or a clear first move.",
  "If it feels like a fit, we agree on scope before building.",
];

export const metadata: Metadata = {
  title: "Contact elisebuilds",
  description: page.description,
  alternates: {
    canonical: page.slug,
  },
  openGraph: {
    title: "Contact elisebuilds",
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

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact elisebuilds",
  description: page.description,
  url: `${SITE_URL}${page.slug}`,
  mainEntity: {
    "@type": "ProfessionalService",
    name: "elisebuilds",
    email: EMAIL,
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

const ContactPage = (): JSX.Element => {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />

      <section className="relative isolate overflow-hidden border-b border-border/50 bg-surface">
        <div className="pointer-events-none absolute -left-8 top-14 z-0 hidden h-16 w-16 rounded-full bg-accent/18 md:block" />
        <div className="pointer-events-none absolute right-[7%] top-20 z-0 hidden h-20 w-36 rounded-[999px] border border-foreground/12 lg:block" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <ScrollReveal y={18}>
            <Eyebrow>Contact Me</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s start building together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/92">
              You do not need a polished brief. Send the idea, the current link,
              the workflow, or the stuck point, and I will help identify what
              needs to happen next.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={EMAIL_HREF} className="cta-primary">
                Email me
              </a>
              <GoogleAppointmentButton variant="secondary" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} y={22}>
            <div className="relative overflow-hidden border border-border/50 bg-background p-6 shadow-[0_18px_42px_rgba(5,5,7,0.08)] sm:p-8">
              <div className="funky-grid pointer-events-none absolute inset-x-6 top-5 z-0 h-16 opacity-45" />
              <p className="relative z-10 font-mono text-sm font-bold text-accent">
                Simple starting point
              </p>
              <h2 className="relative z-10 mt-4 text-2xl font-semibold leading-tight text-foreground">
                A useful first message can be very short.
              </h2>
              <div className="relative z-10 mt-6 border-l-4 border-accent bg-surface px-5 py-4 font-mono text-sm leading-8 text-foreground/88">
                Hi Elise, I need help with [website/app/workflow]. The main
                problem is [what feels stuck]. I am hoping to [outcome]. Can we
                talk?
              </div>
              <p className="relative z-10 mt-5 text-sm leading-7 text-foreground/76">
                That is enough. I can ask the useful questions after that.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-border/50 bg-surface-blue">
        <div className="pointer-events-none absolute left-[5%] top-14 z-0 hidden h-12 w-12 rounded-full border border-accent/28 lg:block" />
        <div className="pointer-events-none absolute right-[7%] bottom-12 z-0 hidden h-14 w-28 rounded-full bg-brand-sun/16 lg:block" />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8 lg:px-8">
          <ScrollReveal>
            <Eyebrow>What to include</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground lg:min-h-[5.5rem]">
              A few details that will help me draft a more helpful response.
            </h2>
            <ul className="mt-7 grid gap-4">
              {WHAT_TO_SEND.map((item) => (
                <li
                  key={item}
                  className="flex min-h-[5.5rem] items-center border-l-4 border-accent bg-surface px-5 py-4 text-sm font-semibold leading-7 text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <div
            aria-hidden="true"
            className="h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent lg:mx-2 lg:h-auto lg:w-px lg:self-stretch lg:bg-gradient-to-b"
          />

          <ScrollReveal delay={0.1} y={18}>
            <Eyebrow>What happens after</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground lg:min-h-[5.5rem]">
              No pressure, no sales techniques.
            </h2>
            <ol className="mt-7 grid gap-4">
              {NEXT_STEPS.map((item, index) => (
                <li
                  key={item}
                  className="grid min-h-[5.5rem] grid-cols-[2rem_1fr] items-center gap-3 border border-border/50 bg-surface px-5 py-4"
                >
                  <span className="font-mono text-sm font-bold leading-7 text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold leading-7 text-foreground/88">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-surface-strong">
        <div className="pointer-events-none absolute left-[9%] top-10 z-0 hidden h-16 w-16 rounded-full border border-accent/28 lg:block" />
        <div className="pointer-events-none absolute right-[10%] bottom-10 z-0 hidden h-12 w-12 rotate-12 bg-brand-sun/18 lg:block" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <ScrollReveal className="grid gap-8 border border-border/50 bg-surface p-8 shadow-[0_20px_50px_rgba(5,5,7,0.08)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <Eyebrow>Ready when you are</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Let&apos;s start a conversation.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/82">
                Email is best for details. Booking a call is best if talking it
                through would be faster.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a href={EMAIL_HREF} className="cta-primary">
                Email me
              </a>
              <Link href="/portfolio" className="cta-secondary">
                See work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
};

export default ContactPage;
