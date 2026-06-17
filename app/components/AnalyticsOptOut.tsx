"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

const ANALYTICS_OPT_OUT_KEY = "elisebuilds.analyticsOptOut";

const isAnalyticsOptedOut = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const analyticsPreference = searchParams.get("analytics");

  if (analyticsPreference === "off") {
    window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "true");
    return true;
  }

  if (analyticsPreference === "on") {
    window.localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
    return false;
  }

  return window.localStorage.getItem(ANALYTICS_OPT_OUT_KEY) === "true";
};

const beforeSend = (event: BeforeSendEvent) => {
  if (isAnalyticsOptedOut()) {
    return null;
  }

  return event;
};

export const AnalyticsOptOut = () => {
  return <Analytics beforeSend={beforeSend} />;
};
