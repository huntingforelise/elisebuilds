import type { Metadata } from "next";
import Link from "next/link";
import { GoogleAppointmentButton } from "../components/GoogleAppointmentButton";
import { PageShell } from "../components/SeoPageTemplates";
import { ScrollReveal } from "../components/ScrollReveal";
import { SITE_URL } from "../seo-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website, app, and workflow automation services by elisebuilds, including new builds and improvements to existing digital projects.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | elisebuilds",
    description:
      "Website, app, and workflow automation services by elisebuilds, including new builds and improvements to existing digital projects.",
    url: `${SITE_URL}/services`,
    images: [
      {
        url: "/casa-film-website-screenshot.png",
        alt: "Website and booking system project by elisebuilds",
      },
    ],
  },
};

const SERVICE_AREAS = [
  {
    title: "Websites and web apps",
    text: "A website, product page, booking flow, dashboard, or small web app that helps visitors understand what to do.",
  },
  {
    title: "App and product work",
    text: "Mobile app features, desktop tools, and product flows that feel steady, intuitive, and ready for everyday use.",
  },
  {
    title: "Workflow automation",
    text: "Small systems that reduce repeated admin, connect tools, send the right emails, or tidy up an internal process.",
  },
  {
    title: "Code cleanup and rescue",
    text: "A second pair of eyes on AI-generated code, product details, or a project that needs a careful pass before launch.",
  },
];

const HOW_IT_WORKS = [
  "We talk through what you want to build, who it is for, and what would make the biggest difference.",
  "I turn that into a focused scope with the screens, flows, integrations, or automations that matter first.",
  "You get something you can use, hand over, improve, or keep building on.",
];

const ServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services",
    description:
      "Freelance software engineering services across websites, apps, workflow automation, booking systems, and improvements to existing digital projects.",
    url: `${SITE_URL}/services`,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="border-b border-border/50 bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <ScrollReveal className="max-w-3xl" y={18}>
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-accent">
              Services I offer
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              Software for businesses who want to get things done.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/92">
              Websites, app features, booking flows, internal tools, and small
              automations. I help turn the idea, plan, or half-built thing into
              something people can actually use.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="cta-primary">
                Start a project
              </Link>
              <Link href="/portfolio" className="cta-secondary">
                View work
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:mt-8" delay={0.1} y={18}>
            <div className="border border-border/50 bg-background p-6 shadow-[0_18px_40px_rgba(53,63,68,0.07)]">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
                Good fit for
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  "A website that needs to say what you mean",
                  "An app feature that needs a careful builder",
                  "A booking or enquiry flow for your customers",
                  "A small tool or automation for your team",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-l-4 border-accent bg-surface px-4 py-3 text-sm font-bold leading-7 text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-border/50 bg-foreground text-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-16">
          <ScrollReveal>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
              What I do
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Practical software work for small teams and service businesses.
            </h2>
            <p className="mt-5 text-base leading-8 text-surface/78">
              Most projects are a mix of design thinking, building, and common
              sense. What matters most is that you and your customers can get
              where you need to go.
            </p>
          </ScrollReveal>

          <div className="grid gap-3">
            {SERVICE_AREAS.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.04} y={12}>
                <div className="grid gap-3 border border-surface/14 bg-surface/8 px-4 py-5 sm:grid-cols-[2rem_1fr] sm:gap-4">
                  <span className="font-mono text-sm font-bold leading-7 text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-lg font-semibold leading-7 text-surface">
                      {service.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-surface/76">
                      {service.text}
                    </span>
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-blue">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <ScrollReveal className="max-w-xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
              How it usually starts
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Start with the business problem.
            </h2>
            <p className="mt-6 text-base leading-8 text-foreground/84">
              The first step is usually mapping what is happening now, who needs
              to use it, and where time, trust, or clarity is being lost. From
              there, I can shape a build that fits the real job.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} y={18}>
            <div className="grid gap-3">
              {HOW_IT_WORKS.map((step, index) => (
                <div
                  key={step}
                  className="grid gap-3 border-l-4 border-accent bg-surface px-5 py-4 shadow-[0_14px_30px_rgba(53,63,68,0.06)] sm:grid-cols-[2rem_1fr] sm:gap-4"
                >
                  <p className="font-mono text-sm font-bold leading-7 text-accent">
                    0{index + 1}
                  </p>
                  <p className="text-sm font-semibold leading-7 text-foreground/88">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
          <ScrollReveal>
            <div className="grid gap-8 border border-border/50 bg-surface p-8 shadow-[0_20px_45px_rgba(53,63,68,0.08)] lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
                  Next step
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  Tell me what&apos;s on your mind.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/82">
                  A live site, a half-built app, a manual process, or a new idea
                  is enough context to start deciding what should be built
                  first.
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

export default ServicesPage;
