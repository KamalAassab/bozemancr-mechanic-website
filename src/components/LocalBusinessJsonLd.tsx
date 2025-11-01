"use client";

import { JsonLd } from "./JsonLd";
import { siteConfig, formatOpeningHours, getDomain } from "../../config/site";

/**
 * LocalBusiness JSON-LD Component
 * 
 * Renders AutoRepair structured data for the home page.
 * Enhances local SEO and enables rich snippets in search results.
 */

export function LocalBusinessJsonLd() {
  const openingHours = formatOpeningHours();
  const domain = getDomain();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.BUSINESS_NAME,
    description: siteConfig.DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.STREET_ADDRESS,
      addressLocality: siteConfig.CITY,
      addressRegion: siteConfig.STATE,
      postalCode: siteConfig.POSTAL_CODE,
      addressCountry: siteConfig.COUNTRY,
    },
    telephone: siteConfig.PHONE_E164,
    email: siteConfig.EMAIL,
    openingHours: openingHours,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.LATITUDE,
      longitude: siteConfig.LONGITUDE,
    },
    url: domain,
    sameAs: siteConfig.SOCIAL_LINKS,
    priceRange: "$$",
    image: `${domain}/og-image.jpg`,
  };

  return <JsonLd data={jsonLd} id="local-business-jsonld" />;
}

