import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnalyticsOptOut } from "./components/AnalyticsOptOut";
import { ScrollToTop } from "./components/ScrollToTop";

const SITE_URL = "https://www.elisebuilds.com";
const SITE_NAME = "elisebuilds";
const SITE_DESCRIPTION =
  "Freelance software engineer building and improving websites, apps, SEO, GEO, AEO, booking systems, and workflow automation for practical digital systems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Freelance Software Engineer | Elise Verhoeye | elisebuilds",
    template: "%s | elisebuilds",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Elise Verhoeye",
    "elisebuilds",
    "freelance software engineer",
    "freelance website developer",
    "SEO developer",
    "technical SEO",
    "GEO",
    "generative engine optimization",
    "AEO",
    "answer engine optimization",
    "Next.js developer",
    "React developer",
    "React Native developer",
    "TypeScript developer",
    "mobile app developer",
    "desktop app developer",
    "booking system developer",
    "product improvement",
    "Supabase",
    "Firebase",
    "Clerk",
    "Vercel",
    "Sanity CMS",
    "Resend",
    "Codex",
    "OpenAI",
    "Claude",
    "Make automation",
    "workflow automation",
  ],
  authors: [{ name: "Elise Verhoeye", url: SITE_URL }],
  creator: "Elise Verhoeye",
  publisher: "elisebuilds",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Freelance Software Engineer | Elise Verhoeye | elisebuilds",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/casa-film-website-screenshot.png",
        width: 2916,
        height: 1602,
        alt: "Website and booking system project by Elise Verhoeye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Software Engineer | Elise Verhoeye | elisebuilds",
    description: SITE_DESCRIPTION,
    images: ["/casa-film-website-screenshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#fff8e6",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <ScrollToTop />
        {children}
        <AnalyticsOptOut />
      </body>
    </html>
  );
};

export default RootLayout;
