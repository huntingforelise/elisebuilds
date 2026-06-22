export const SITE_URL = "https://www.elisebuilds.com";

export type ServicePageContent = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  image: {
    src: string;
    alt: string;
  };
  outcomes: string[];
  deliverables: string[];
  process: string[];
  related: string[];
};

export type CaseStudyContent = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  client: string;
  projectType: string;
  image: {
    src: string;
    alt: string;
  };
  summary: string;
  focus: string[];
  results: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
};

export type InfoPageContent = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  image: {
    src: string;
    alt: string;
  };
  sections: Array<{
    title: string;
    text: string;
    points: string[];
  }>;
};

export const services: ServicePageContent[] = [
  {
    slug: "/websites",
    title: "Websites and Web Apps",
    shortTitle: "Websites & web apps",
    eyebrow: "Websites & platforms",
    description:
      "Custom website and web app development for service businesses, founders, and teams that need a clearer online presence, product flow, SEO, GEO, AEO, or improvement to an existing site.",
    intro:
      "I design, build, and improve modern websites and web apps that do more than look polished. The goal is to help people, search engines, and answer engines understand what you offer, use what you have built, and take the next useful step without friction.",
    image: {
      src: "/casa-film-website-screenshot.png",
      alt: "Casa Film and Music website shown on a desktop screen",
    },
    outcomes: [
      "A clearer structure for your services, offers, and calls to action",
      "Pages that are easier for search engines, AI answer tools, and real people to understand",
      "A calmer enquiry flow that reduces avoidable back-and-forth",
      "A maintainable technical base that can grow or improve with the business",
    ],
    deliverables: [
      "Next.js website development",
      "Web app and dashboard interfaces",
      "Responsive page layouts",
      "SEO metadata and sitemap setup",
      "GEO and AEO-ready content structure",
      "Schema markup and structured data",
      "Contact or booking flow implementation",
      "Existing website improvements",
      "Analytics-ready deployment",
    ],
    process: [
      "Map the business goals, audience, and highest-value conversion paths",
      "Shape the page structure and content around what visitors need to decide",
      "Build the site with performance, accessibility, and maintainability in mind",
      "Launch with the technical SEO basics already in place",
    ],
    related: ["/booking-systems", "/workflow-automation"],
  },
  {
    slug: "/mobile-apps",
    title: "Mobile and Desktop App Development",
    shortTitle: "Mobile & desktop apps",
    eyebrow: "Apps & product flows",
    description:
      "Mobile and desktop app development for startups and businesses that need focused product flows, reliable features, and practical delivery.",
    intro:
      "I help turn product ideas, existing web apps, and operational workflows into app experiences that feel usable in real life. My focus is on clear flows, thoughtful edge cases, and features that support the product instead of adding noise.",
    image: {
      src: "/orca-app-screenshot-v2.png",
      alt: "Orca mobile navigation app screen",
    },
    outcomes: [
      "App flows designed around actual user behaviour",
      "Features that connect cleanly with existing APIs, data, and services",
      "Careful handling of states, edge cases, and platform expectations",
      "A product experience that can keep improving after launch",
    ],
    deliverables: [
      "React Native feature development",
      "Mobile app UI implementation",
      "Desktop app planning and implementation support",
      "Existing app improvements",
      "Push notification flows",
      "API and backend integration",
      "Testing support before release",
    ],
    process: [
      "Clarify the mobile user journey and what needs to work first",
      "Break the product into practical, shippable feature slices",
      "Build and test flows across realistic device states",
      "Support release readiness and follow-up improvements",
    ],
    related: ["/websites", "/workflow-automation"],
  },
  {
    slug: "/workflow-automation",
    title: "Workflow Automation for Growing Businesses",
    shortTitle: "Workflow automation",
    eyebrow: "Automation & operations",
    description:
      "Workflow automation for businesses that want to reduce manual work, connect tools, and make everyday operations easier to manage.",
    intro:
      "Automation works best when it starts with the real workflow, not the tool. I help identify the repeated steps, decisions, handovers, and admin tasks that can become simpler, then build practical systems around them.",
    image: {
      src: "/website-placeholder.svg",
      alt: "Workflow automation interface illustration",
    },
    outcomes: [
      "Less repeated admin and fewer manual handovers",
      "Clearer intake, follow-up, and internal process steps",
      "Connected tools that support how the business already works",
      "More time for the work that actually needs human judgement",
    ],
    deliverables: [
      "Workflow mapping",
      "Make automation setup",
      "Form and intake flows",
      "Email and notification automations",
      "Internal tool improvements",
    ],
    process: [
      "Understand the current process and where time is being lost",
      "Choose the simplest automation points with the clearest payoff",
      "Build, test, and document the workflow so it is usable day to day",
      "Review the system after launch and tune the details",
    ],
    related: ["/booking-systems", "/websites"],
  },
  {
    slug: "/booking-systems",
    title: "Booking Systems and Enquiry Flows",
    shortTitle: "Booking systems",
    eyebrow: "Bookings & enquiries",
    description:
      "Custom booking systems and enquiry flows for service businesses that need clearer client intake and less back-and-forth.",
    intro:
      "A good booking flow helps clients understand what to choose and helps the business collect the details it needs. I build structured enquiry and booking systems that make the next step clearer for both sides.",
    image: {
      src: "/casa-film-website-screenshot.png",
      alt: "Website booking flow project screenshot",
    },
    outcomes: [
      "More complete enquiries from potential clients",
      "Less manual clarification before a booking can move forward",
      "Clearer packages, add-ons, and service options",
      "A smoother handoff from website visitor to booked client",
    ],
    deliverables: [
      "Custom enquiry forms",
      "Booking page development",
      "Package and add-on selection flows",
      "Automated email notifications",
      "CRM or spreadsheet handoff support",
    ],
    process: [
      "Map what a client needs to know before they enquire",
      "Define the information the business needs to quote or book confidently",
      "Build a structured flow that feels simple to complete",
      "Connect the submission to the right follow-up process",
    ],
    related: ["/websites", "/workflow-automation"],
  },
];

export const caseStudies: CaseStudyContent[] = [
  {
    slug: "/work/casa-film",
    title: "Casa Film & Music Website and Booking System",
    eyebrow: "Case study",
    description:
      "A custom website and structured booking system for Casa Film & Music, designed to clarify services and reduce manual enquiry work.",
    client: "Casa Film & Music",
    projectType: "Website and booking system",
    image: {
      src: "/casa-film-website-screenshot.png",
      alt: "Casa Film and Music website screenshot",
    },
    summary:
      "Casa Film & Music needed a website that could explain creative services clearly while making enquiries easier to handle. The work focused on structure, service clarity, and a booking flow that captures better information before the first conversation.",
    focus: [
      "Turn website visitors into structured enquiries",
      "Reduce back-and-forth before a client books",
      "Make services, packages, and add-ons easier to buy",
      "Save admin time with clearer lead capture and email flow",
      "Create a scalable base for future revenue-driving features",
    ],
    results: [
      "A clearer website journey for photography, videography, and music services",
      "A more structured booking flow for potential clients",
      "Less manual clarification before quoting and follow-up",
      "A polished base for future service and revenue improvements",
    ],
    testimonial: {
      quote:
        "Working with Elise was a standout experience. She brought immediate clarity to my ideas and translated them into a well-structured, strategic website that truly makes sense, both visually and from a user journey perspective. She didn’t just build, she actively shaped the project. The booking flow has significantly reduced manual work on my side and made the whole process much more efficient. The final result aligns perfectly with what I envisioned, just more refined, more structured, and overall elevated.",
      name: "Nathalie Kraft",
      role: "Business owner",
    },
  },
  {
    slug: "/work/orca",
    title: "Orca Mobile App Feature Development",
    eyebrow: "Case study",
    description:
      "React Native mobile feature development for Orca, a marine navigation app used by sailors and cruisers in real boating conditions.",
    client: "Orca",
    projectType: "Marine navigation mobile app",
    image: {
      src: "/orca-app-screenshot-v2.png",
      alt: "Orca mobile navigation app screenshot",
    },
    summary:
      "At Orca, I worked on mobile product features for a navigation app used in real boating environments and available through the App Store and Google Play. The work involved turning route, map, and weather data into clearer in-app decisions and supporting the product experience beyond the mobile app.",
    focus: [
      "Build mobile features in React Native",
      "Support route, map, and weather-related product flows",
      "Think through edge cases before release",
      "Improve product pages and supporting website experiences",
    ],
    results: [
      "Mobile features shipped for a real-world navigation product",
      "Clearer in-app decisions around route and weather context",
      "Product support across both app and web touchpoints",
      "Careful implementation with testing and edge-case handling",
    ],
    testimonial: {
      quote:
        "I worked with Elise at Orca, where we built mobile features in React Native for the Orca Navigation App... She didn’t just implement, she delivered. She thought through edge cases carefully, tested thoroughly, and didn’t ship until it was right. She is proactive, speaks up in discussions, and contributes well beyond her scope... clear, direct, and easy to work with. She works independently, and that confidence in owning her work is something that’s hard to find. I’d recommend her without hesitation.",
      name: "Judith Sirera i Pulido",
      role: "Senior Engineer",
    },
  },
];

export const infoPages: InfoPageContent[] = [
  {
    slug: "/about",
    title: "About elisebuilds",
    shortTitle: "About",
    eyebrow: "About",
    description:
      "Learn more about elisebuilds, a tiny software studio for websites, apps, workflow automation, and improvements to existing digital projects.",
    intro:
      "I’m Elise, a freelance software engineer focused on practical digital systems: websites that make services easier to understand, app features that support real product use, improvements to existing tools, and automations that reduce everyday admin.",
    image: {
      src: "/elise.png",
      alt: "Elise, the software engineer behind elisebuilds",
    },
    sections: [
      {
        title: "How I think about the work",
        text: "Good software should fit the business around it. I like understanding the workflow first, then shaping the technical solution around what actually needs to happen.",
        points: [
          "Start with the real business problem, not the tool",
          "Make user journeys and internal handovers easier to follow",
          "Build systems that can keep improving after launch",
        ],
      },
      {
        title: "What I bring",
        text: "My experience spans web, mobile, backend services, content tools, and automation. I care about details, edge cases, and making the finished system feel calm to use.",
        points: [
          "Next.js, React, React Native, and TypeScript development",
          "Practical experience with Supabase, Sanity CMS, Resend, and Make",
          "Improvements and cleanup for existing or inherited projects",
          "Clear communication and independent ownership of implementation",
        ],
      },
      {
        title: "Background and languages",
        text: "I was born in Belgium, lived in Australia for six years, and now live in Spain. That mix makes me comfortable working across countries, cultures, and different ways of communicating.",
        points: [
          "Belgian-Australian, based in Spain",
          "Fluent in Dutch, English, and French",
          "Some Spanish, and always learning more",
          "Experience working with Spanish, Norwegian, German, and Australian clients",
        ],
      },
    ],
  },
  {
    slug: "/contact",
    title: "Let's have a chat.",
    shortTitle: "Contact",
    eyebrow: "Contact me",
    description:
      "Contact Elise Verhoeye to talk about a website, app, booking system, workflow automation, or improvement to an existing digital project.",
    intro:
      "If you need a better website, app, booking flow, internal tool, automation, or improvement to an existing project, you can start with a short message or book a time to talk through what you need.",
    image: {
      src: "/elisebuilds.png",
      alt: "elisebuilds logo",
    },
    sections: [
      {
        title: "What to include",
        text: "A useful first message gives me the current situation, the goal, and any constraints that already matter.",
        points: [
          "What you want to build or improve",
          "Whether this is a new build, an existing project, or a mix",
          "What currently feels manual, unclear, or inefficient",
          "Any timeline, launch date, or business context that matters",
        ],
      },
      {
        title: "Ways to reach me",
        text: "Send an email or book a time. I’ll come back with questions, options, and a realistic sense of what the project might need.",
        points: [
          "Email: elise@elisebuilds.com",
          "Book an appointment from the button on this page",
          "Connect through LinkedIn if you prefer to start there",
        ],
      },
      {
        title: "What happens next",
        text: "I’ll help clarify the project shape before jumping into implementation, so the work stays focused on useful outcomes.",
        points: [
          "Understand the workflow, audience, and goals",
          "Identify the highest-value version to build first",
          "Agree on scope before moving into design and development",
        ],
      },
    ],
  },
];

export const allIndexablePages = [
  "/",
  ...infoPages.map((page) => page.slug),
  "/services",
  "/portfolio",
];

export const getServiceBySlug = (slug: string): ServicePageContent => {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Missing service content for ${slug}`);
  }

  return service;
};

export const getCaseStudyBySlug = (slug: string): CaseStudyContent => {
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    throw new Error(`Missing case study content for ${slug}`);
  }

  return caseStudy;
};

export const getInfoPageBySlug = (slug: string): InfoPageContent => {
  const page = infoPages.find((item) => item.slug === slug);

  if (!page) {
    throw new Error(`Missing info page content for ${slug}`);
  }

  return page;
};
