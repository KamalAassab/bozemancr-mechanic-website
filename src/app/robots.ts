import { MetadataRoute } from "next";
import { siteConfig, getDomain } from "../../config/site";

/**
 * Robots.txt Generation
 * 
 * Controls search engine crawling behavior.
 * Sets sitemap location and crawling rules.
 */

export default function robots(): MetadataRoute.Robots {
  const domain = getDomain();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}

