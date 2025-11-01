import { MetadataRoute } from "next";
import { siteConfig, getDomain } from "../../config/site";

/**
 * Sitemap Generation
 * 
 * Automatically generates sitemap.xml for search engines.
 * Includes all canonical URLs from config/site.ts
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = getDomain();
  const now = new Date();
  
  // Core pages
  const routes = [
    {
      url: `${domain}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${domain}/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${domain}/contact`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.9,
    },
  ];

  // Service pages
  if (siteConfig.PRIMARY_SERVICES.length > 0) {
    siteConfig.PRIMARY_SERVICES.forEach((service) => {
      routes.push({
        url: `${domain}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    });
  }

  // Optional: Services index page
  if (siteConfig.PRIMARY_SERVICES.length > 0) {
    routes.push({
      url: `${domain}/services`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    });
  }

  return routes;
}

