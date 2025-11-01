/**
 * SEO Feature Tiers
 * 
 * Configurable SEO feature flags based on tier level.
 * Set SEO_TIER environment variable to 'basic' or 'advanced'
 */

export type SEOTier = "basic" | "advanced";

const currentTier: SEOTier = 
  (process.env.SEO_TIER as SEOTier) || "advanced";

/**
 * Basic tier features: Core SEO essentials
 */
const basicFeatures = {
  titles: true,
  meta: true,
  sitemap: true,
  robots: true,
  localBusinessJsonLd: true,
  serviceJsonLd: false,
  internalLinkPass: false,
  mediaAltAudit: false,
  prefetchHints: false,
  performanceChecks: false,
} as const;

/**
 * Advanced tier features: All features enabled
 */
const advancedFeatures = {
  titles: true,
  meta: true,
  sitemap: true,
  robots: true,
  localBusinessJsonLd: true,
  serviceJsonLd: true,
  internalLinkPass: true,
  mediaAltAudit: true,
  prefetchHints: true,
  performanceChecks: true,
} as const;

/**
 * Get feature flags for current tier
 */
export function getSEOFeatures() {
  return currentTier === "advanced" ? advancedFeatures : basicFeatures;
}

/**
 * Check if a feature is enabled
 */
export function isFeatureEnabled(feature: keyof typeof basicFeatures): boolean {
  const features = getSEOFeatures();
  return features[feature];
}

/**
 * Get current tier
 */
export function getCurrentTier(): SEOTier {
  return currentTier;
}

