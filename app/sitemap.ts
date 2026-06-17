import type { MetadataRoute } from "next";
import { allIndexablePages, SITE_URL } from "./seo-content";

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date();

  return allIndexablePages.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
    images:
      path === "/"
        ? [
            `${SITE_URL}/elise.png`,
            `${SITE_URL}/casa-film-website-screenshot.png`,
            `${SITE_URL}/orca-app-screenshot-v2.png`,
          ]
        : undefined,
  }));
};

export default sitemap;
