import type { MetadataRoute } from "next";

const SITE_URL = "https://www.elisebuilds.com";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/elise.jpeg`,
        `${SITE_URL}/casa-film-website-screenshot.png`,
        `${SITE_URL}/orca-app-screenshot-v2.png`,
      ],
    },
  ];
};

export default sitemap;
