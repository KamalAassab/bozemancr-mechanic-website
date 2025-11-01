/**
 * Site Configuration
 * 
 * Central configuration file for all site metadata and business information.
 * This file drives SEO metadata, structured data, contact links, and more.
 * 
 * INSTRUCTIONS:
 * Replace all placeholder values with actual business data before deploying.
 * All values are used programmatically across the site via imports.
 */

export const siteConfig = {
  // Business Identity
  BUSINESS_NAME: "BozemanCR",
  TAGLINE: "Premier Auto Repair", // Optional brand tagline
  
  // Location
  CITY: "Bozeman",
  STATE: "MT",
  POSTAL_CODE: "59715",
  COUNTRY: "US",
  FULL_ADDRESS: "444 W Main St, Bozeman, MT 59715",
  STREET_ADDRESS: "444 W Main St",
  
  // Contact Information
  PHONE_E164: "+12345678910", // E.164 format for tel: links
  PHONE_DISPLAY: "1-234-567-8910", // Human-readable format
  EMAIL: "kamalaassab2002@gmail.com",
  
  // Operating Hours
  HOURS: {
    MONDAY: "8:00-18:00",
    TUESDAY: "8:00-18:00",
    WEDNESDAY: "8:00-18:00",
    THURSDAY: "8:00-18:00",
    FRIDAY: "8:00-18:00",
    SATURDAY: "9:00-14:00",
    SUNDAY: "CLOSED",
  },
  
  // Geo Location (for Google Maps and structured data)
  LATITUDE: "45.679193",
  LONGITUDE: "-111.043622",
  
  // Site URLs
  PRIMARY_DOMAIN: "https://bozemancr-mechanic-website.vercel.app", // Production URL
  LOCAL_DOMAIN: "http://localhost:3000", // Development URL
  
  // Social Media Links (sameAs for LocalBusiness JSON-LD)
  SOCIAL_LINKS: [
    "https://www.facebook.com/bozemancr",
    "https://www.instagram.com/bozemancr",
    // Add more social media URLs here
  ],
  
  // Instagram Configuration
  INSTAGRAM_USERNAME: "bozemancr", // e.g., "bozemancr" (without @)
  
  // Primary Services (for sitemap and service pages)
  PRIMARY_SERVICES: [
    {
      slug: "brake-repair",
      title: "Brake Repair",
      description: "Expert brake inspection and repair services",
    },
    {
      slug: "oil-change",
      title: "Oil Change",
      description: "Premium oil change services for all vehicles",
    },
    {
      slug: "computer-diagnostics",
      title: "Computer Diagnostics",
      description: "Complete diagnostic services using advanced technology",
    },
    {
      slug: "performance-tuning",
      title: "Performance Tuning",
      description: "Professional performance upgrades and tuning",
    },
    {
      slug: "suspension-alignment",
      title: "Suspension & Alignment",
      description: "Steering and suspension services",
    },
    {
      slug: "carbon-cleaning",
      title: "Carbon Cleaning",
      description: "Advanced carbon deposit removal",
    },
  ],
  
  // SEO Keywords (primary keyword for title generation)
  PRIMARY_KEYWORD: "Auto Repair",
  SECONDARY_KEYWORDS: ["Auto Repair", "Car Maintenance", "Performance Tuning"],
  
  // Default Meta Description Template
  DEFAULT_DESCRIPTION: "Montana's premier automotive specialist in Bozeman. Performance tuning, diagnostics, and expert repairs for all makes and models.",
  
  // Google Maps Link
  GOOGLE_MAPS_URL: "https://maps.app.goo.gl/wx6KKraeJDS2t1ZY9",

  // Booking System Configuration
  BOOKING: {
    // Method: "mailto" | "calendly" | "acuity" | "iframe"
    // - mailto: Opens email client (FREE, works everywhere)
    // - calendly: Embed Calendly widget (FREE tier available)
    // - acuity: Embed Acuity widget (FREE tier available)
    // - iframe: Embed any custom booking page
    method: "mailto" as const,
    
    // For mailto method, email is already set above
    
    // For Calendly (get from: calendly.com/settings/event_types)
    calendlyUrl: "", // e.g., "https://calendly.com/your-username"
    
    // For Acuity
    acuityUrl: "", // e.g., "https://appointments.acuityscheduling.com/schedule.php?owner=XXXXXX"
    
    // For custom iframe
    iframeUrl: "", // Any booking page URL
  },
} as const;

/**
 * Helper function to format hours for schema.org
 * @returns Compact hours string for LocalBusiness openingHours
 */
export function formatOpeningHours(): string {
  const hours = siteConfig.HOURS;
  return [
    `Mo-Fr ${hours.MONDAY.split("-")[0]}-${hours.MONDAY.split("-")[1]}`,
    `Sa ${hours.SATURDAY.split("-")[0]}-${hours.SATURDAY.split("-")[1]}`,
    hours.SUNDAY,
  ].join(", ");
}

/**
 * Get the current environment domain
 * @returns The appropriate domain based on environment
 */
export function getDomain(): string {
  if (process.env.NODE_ENV === "production") {
    return siteConfig.PRIMARY_DOMAIN;
  }
  return siteConfig.LOCAL_DOMAIN;
}

/**
 * Build full business address for structured data
 */
export function getFullAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: siteConfig.STREET_ADDRESS,
    addressLocality: siteConfig.CITY,
    addressRegion: siteConfig.STATE,
    postalCode: siteConfig.POSTAL_CODE,
    addressCountry: siteConfig.COUNTRY,
  };
}

