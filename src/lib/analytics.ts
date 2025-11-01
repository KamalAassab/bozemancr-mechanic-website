/**
 * Analytics Tracking
 * 
 * Stub analytics functions for conversion tracking.
 * All tracking is gated behind environment variable ENABLE_ANALYTICS.
 * 
 * INSTRUCTIONS:
 * - Set ENABLE_ANALYTICS=true in your environment variables
 * - Replace GTM_CONTAINER_ID and GA_MEASUREMENT_ID with actual IDs when ready
 * - Implement actual tracking logic for your analytics platform
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Configuration
const config = {
  enabled: process.env.NODE_ENV === "production" && process.env.ENABLE_ANALYTICS === "true",
  gtmContainerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || "",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
};

/**
 * Initialize analytics (Google Tag Manager / GA4)
 * Call this once in the root layout
 */
export function initAnalytics(): void {
  if (!config.enabled) {
    return;
  }

  // Initialize Google Tag Manager
  if (config.gtmContainerId) {
    initGTM(config.gtmContainerId);
  }

  // Initialize Google Analytics 4
  if (config.gaMeasurementId) {
    initGA4(config.gaMeasurementId);
  }
}

/**
 * Initialize Google Tag Manager
 */
function initGTM(containerId: string): void {
  if (typeof window === "undefined") return;

  // Create dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  // Load GTM script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  document.head.appendChild(script);

  // Add noscript iframe
  const noscript = document.createElement("noscript");
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  document.body.insertBefore(noscript, document.body.firstChild);
}

/**
 * Initialize Google Analytics 4
 */
function initGA4(measurementId: string): void {
  if (typeof window === "undefined") return;

  // Load gtag.js
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_path: window.location.pathname,
  });
}

/**
 * Track custom event
 * @param eventName - Event name
 * @param eventData - Additional event data
 */
export function trackEvent(eventName: string, eventData?: Record<string, unknown>): void {
  if (!config.enabled) return;
  if (typeof window === "undefined") return;

  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", eventName, eventData);
  }
}

/**
 * Track page view
 * @param path - Page path
 */
export function trackPageView(path: string): void {
  if (!config.enabled) return;
  if (typeof window === "undefined") return;

  // Google Tag Manager
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "page_view",
      page_path: path,
    });
  }

  // Google Analytics 4
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: path,
    });
  }
}

/**
 * Track contact form submission
 */
export function trackContactSubmit(): void {
  trackEvent("contact_submit", {
    event_category: "engagement",
    event_label: "contact_form",
  });
}

/**
 * Track phone call click
 */
export function trackPhoneClick(): void {
  trackEvent("tel_click", {
    event_category: "engagement",
    event_label: "phone_call",
  });
}

/**
 * Track directions click
 */
export function trackDirectionsClick(): void {
  trackEvent("directions_click", {
    event_category: "engagement",
    event_label: "get_directions",
  });
}

/**
 * Track email click
 */
export function trackEmailClick(): void {
  trackEvent("email_click", {
    event_category: "engagement",
    event_label: "email_contact",
  });
}

/**
 * Track service CTA click
 * @param serviceName - Service name
 */
export function trackServiceClick(serviceName: string): void {
  trackEvent("service_click", {
    event_category: "engagement",
    event_label: serviceName,
  });
}

