import { MetadataRoute } from "next";

const BASE_URL = "https://upliftedmethod.com";

/**
 * Optimized for crawling: allow all crawlers, reference sitemap.
 * /forms/* is excluded from sitemap (not listed); forms pages can set noindex via metadata.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
