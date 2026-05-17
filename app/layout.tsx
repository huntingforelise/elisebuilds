import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "elisebuilds.com | Elise Verhoeye",
  description:
    "Freelance software engineer building websites, mobile apps, and workflow automation for businesses that want to run more smoothly.",
  keywords: [
    "Elise Verhoeye",
    "freelance software engineer",
    "Next.js developer",
    "React developer",
    "React Native developer",
    "TypeScript developer",
    "Supabase",
    "Sanity CMS",
    "Resend",
    "Codex",
    "OpenAI",
    "Claude",
    "Make automation",
    "workflow automation",
  ],
};

export const viewport: Viewport = {
  themeColor: "#fff7ef",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        {children}
      <Analytics/>
      </body>
    </html>
  );
};

export default RootLayout;
