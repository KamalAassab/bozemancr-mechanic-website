import type { Metadata } from "next";
import { siteConfig, getDomain, formatOpeningHours } from "../../config/site";

/**
 * Build SEO title with character limit enforcement
 * @param page - Page identifier
 * @param opts - Optional parameters
 * @returns Formatted title (≤ 60 chars)
 */
export function buildTitle(
  page: "home" | "service" | "about" | "contact" | "faq" | "custom",
  opts?: {
    serviceTitle?: string;
    customTitle?: string;
  }
): string {
  let title = "";

  switch (page) {
    case "home":
      title = `${siteConfig.BUSINESS_NAME} | ${siteConfig.PRIMARY_KEYWORD} in ${siteConfig.CITY}, ${siteConfig.STATE}`;
      break;
    case "service":
      if (!opts?.serviceTitle) {
        title = `Services in ${siteConfig.CITY}, ${siteConfig.STATE} | ${siteConfig.BUSINESS_NAME}`;
      } else {
        title = `${opts.serviceTitle} in ${siteConfig.CITY}, ${siteConfig.STATE} | ${siteConfig.BUSINESS_NAME}`;
      }
      break;
    case "about":
      title = `About Us | ${siteConfig.BUSINESS_NAME}`;
      break;
    case "contact":
      title = `Contact Us | ${siteConfig.BUSINESS_NAME}`;
      break;
    case "faq":
      title = `FAQ | ${siteConfig.BUSINESS_NAME}`;
      break;
    case "custom":
      title = opts?.customTitle || siteConfig.BUSINESS_NAME;
      break;
    default:
      title = siteConfig.BUSINESS_NAME;
  }

  // Enforce 60-character limit by truncating safely
  return truncateTitle(title, 60);
}

/**
 * Build SEO meta description with character limit enforcement
 * @param opts - Description options
 * @returns Formatted description (140-160 chars)
 */
export function buildDescription(opts?: {
  description?: string;
  includeLocation?: boolean;
  customText?: string;
}): string {
  let description = opts?.customText || opts?.description || siteConfig.DEFAULT_DESCRIPTION;

  // Optionally append location
  if (opts?.includeLocation && !description.includes(siteConfig.CITY)) {
    description += ` Located in ${siteConfig.CITY}, ${siteConfig.STATE}.`;
  }

  // Enforce 140-160 character range
  if (description.length > 160) {
    description = truncateToWordBoundary(description, 160);
  }
  
  // Ensure minimum length
  if (description.length < 140 && !opts?.customText) {
    description = padDescription(description, 140);
  }

  return description;
}

/**
 * Build canonical URL
 * @param path - Page path (e.g., "/services/oil-change")
 * @returns Full canonical URL
 */
export function buildCanonical(path: string): string {
  const domain = getDomain();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(cleanPath, domain).toString();
}

/**
 * Build Open Graph and Twitter metadata
 * @param meta - Page metadata
 * @returns OG/Twitter metadata object
 */
export function buildOg(meta: {
  title: string;
  description: string;
  images?: string[];
  url?: string;
}): { openGraph: Metadata["openGraph"]; twitter: Metadata["twitter"] } {
  const domain = getDomain();
  const defaultImage = `${domain}/og-image.jpg`;

  return {
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url || domain,
      siteName: siteConfig.BUSINESS_NAME,
      images: meta.images || [defaultImage],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: meta.images || [defaultImage],
    },
  };
}

/**
 * Truncate title while preserving word boundaries
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
function truncateTitle(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Try truncating at word boundary
  const truncated = text.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(" ");
  
  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace).trim() + "...";
  }
  
  return truncated.trim() + "...";
}

/**
 * Truncate text to word boundary
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
function truncateToWordBoundary(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  
  if (lastSpace > maxLength * 0.7) {
    return truncated.substring(0, lastSpace).trim();
  }
  
  return truncated.trim();
}

/**
 * Pad description to meet minimum length requirement
 * @param text - Text to pad
 * @param minLength - Minimum length
 * @returns Padded text
 */
function padDescription(text: string, minLength: number): string {
  if (text.length >= minLength) {
    return text;
  }

  const padding = " " + siteConfig.TAGLINE;
  return (text + padding).substring(0, minLength);
}

/**
 * Build complete metadata object for a page
 * @param page - Page identifier
 * @param opts - Page-specific options
 * @returns Complete Metadata object
 */
export function buildMetadata(
  page: "home" | "service" | "about" | "contact" | "faq" | "custom",
  opts?: {
    serviceTitle?: string;
    customTitle?: string;
    description?: string;
    customDescription?: string;
    includeLocation?: boolean;
    path?: string;
    images?: string[];
  }
): Metadata {
  const title = buildTitle(page, {
    serviceTitle: opts?.serviceTitle,
    customTitle: opts?.customTitle,
  });

  const description = buildDescription({
    description: opts?.description,
    includeLocation: opts?.includeLocation,
    customText: opts?.customDescription,
  });

  const canonical = buildCanonical(opts?.path || "/");

  const { openGraph, twitter } = buildOg({
    title,
    description,
    url: canonical,
    images: opts?.images,
  });

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph,
    twitter,
    metadataBase: new URL(getDomain()),
    keywords: siteConfig.SECONDARY_KEYWORDS.join(", "),
  };
}

/**
 * Type guard for page identifiers
 */
export type PageType = "home" | "service" | "about" | "contact" | "faq" | "custom";

