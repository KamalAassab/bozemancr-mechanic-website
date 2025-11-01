# SEO Implementation Guide

This guide provides comprehensive instructions for completing the SEO implementation for BozemanCR.

## Overview

The SEO implementation follows a **placeholder-driven** approach. All business data is stored in `config/site.ts`, and the SEO layer automatically generates metadata, structured data, sitemaps, and more based on these values.

## Quick Start

### 1. Configure Site Data

Edit `config/site.ts` and replace ALL placeholder values with your actual business information:

```typescript
// Example: Replace placeholder values
BUSINESS_NAME: "BozemanCR",
CITY: "Bozeman",
STATE: "MT",
PHONE_E164: "+12345678910",
EMAIL: "your@email.com",
// ... etc
```

### 2. Verify Domain

Update `PRIMARY_DOMAIN` in `config/site.ts` to your production URL:
- Development: `http://localhost:3000` (auto-detected)
- Production: `https://yourdomain.com` (your actual domain)

### 3. Add Services

Update `PRIMARY_SERVICES` array with your actual services:

```typescript
PRIMARY_SERVICES: [
  {
    slug: "brake-repair",
    title: "Brake Repair",
    description: "Expert brake inspection and repair services",
  },
  // Add more services...
]
```

### 4. Configure SEO Tier

Set `SEO_TIER` environment variable in `.env.local`:

```bash
# Basic tier - Core SEO features only
SEO_TIER=basic

# Advanced tier - All features (recommended)
SEO_TIER=advanced
```

## Configuration Checklist

Complete these items in `config/site.ts`:

### Required Information

- [ ] Business name
- [ ] City, State, ZIP code, Country
- [ ] Street address
- [ ] Phone number (E.164 format)
- [ ] Email address
- [ ] Operating hours (Monday-Sunday)
- [ ] GPS coordinates (latitude, longitude)
- [ ] Production domain URL

### Optional Information

- [ ] Social media links (Facebook, Instagram, etc.)
- [ ] Instagram username
- [ ] Primary keyword for SEO
- [ ] Default meta description
- [ ] Service list with descriptions
- [ ] Google Maps embed URL

## File Structure

```
config/
├── site.ts           # All business data and configuration
└── seo-tiers.ts      # SEO feature flags

src/
├── lib/
│   ├── seo.ts        # Metadata builders
│   └── analytics.ts  # Tracking functions
├── components/
│   ├── JsonLd.tsx                    # Generic JSON-LD injector
│   └── LocalBusinessJsonLd.tsx      # LocalBusiness structured data
└── app/
    ├── sitemap.ts    # Automatic sitemap generation
    ├── robots.ts     # Robots.txt generation
    ├── layout.tsx    # Root metadata
    ├── page.tsx      # Home page with JSON-LD
    ├── services/     # Service pages
    ├── about/        # About page
    └── contact/      # Contact page
```

## How It Works

### 1. Metadata Generation

All page metadata is automatically generated using helpers from `lib/seo.ts`:

```typescript
// Example usage
export const metadata = buildMetadata("home", {
  description: "Your custom description",
  includeLocation: true,
});
```

**Supported page types:**
- `home` - Homepage with location in title
- `service` - Service landing pages
- `about` - About page
- `contact` - Contact page
- `faq` - FAQ page
- `custom` - Custom pages

### 2. Structured Data (JSON-LD)

Structured data is injected via components:

- **LocalBusinessJsonLd** - AutoRepair schema for home page
- **Service JSON-LD** - Service schema (can be added to service pages)

JSON-LD is safely injected and validated for compliance.

### 3. Sitemap & Robots

- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots.txt**: Available at `/robots.txt`

Both include all pages from `PRIMARY_SERVICES` and core routes.

### 4. Tracking

Analytics tracking functions in `lib/analytics.ts`:

```typescript
// Track events
trackContactSubmit();
trackPhoneClick();
trackDirectionsClick();
```

**Enable tracking:**
1. Set `ENABLE_ANALYTICS=true` in environment variables
2. Add GTM container ID or GA4 measurement ID

## Testing SEO Implementation

### 1. Validate Metadata

- Open browser dev tools → Network tab
- Load page
- Check `<head>` for proper meta tags
- Verify title ≤ 60 chars, description 140-160 chars

### 2. Test Structured Data

Use Google's Rich Results Test:
1. Visit: https://search.google.com/test/rich-results
2. Enter your production URL
3. Validate LocalBusiness JSON-LD
4. Check for errors/warnings

### 3. Check Sitemap

- Visit: `http://localhost:3000/sitemap.xml`
- Verify all pages are listed
- Check URLs are canonical

### 4. Test Robots.txt

- Visit: `http://localhost:3000/robots.txt`
- Verify Sitemap line is correct
- Check Allow/Disallow rules

### 5. Lighthouse Audit

Run Lighthouse in Chrome DevTools:
- Target: Performance ≥ 90, SEO ≥ 90, Accessibility ≥ 90
- Fix any issues reported

## Performance Optimizations

Already implemented:

- ✅ Font loading with `display: swap`
- ✅ Code splitting by route
- ✅ Lazy loading for images
- ✅ Optimized font weights (only used weights included)
- ✅ Preconnect to external resources

## Accessibility Features

Already implemented:

- ✅ Logical heading hierarchy (h1 → h2 → h3)
- ✅ Semantic HTML elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators

## Common Issues & Solutions

### Issue: "Cannot find module '@/config/site'"

**Solution:** The config directory is at project root. Use relative imports:
```typescript
import { siteConfig } from "../../config/site";
```

### Issue: "Title too long" or "Description invalid"

**Solution:** The SEO helpers automatically truncate. Check `lib/seo.ts` limits:
- Titles: ≤ 60 chars
- Descriptions: 140-160 chars

### Issue: JSON-LD validation errors

**Solution:** Check Google Rich Results Test. Common fixes:
- Ensure all required fields are filled in `config/site.ts`
- Verify phone number is E.164 format
- Check opening hours format

### Issue: Sitemap not updating

**Solution:** 
- Clear `.next` cache
- Restart development server
- Regenerate build: `npm run build`

## Next Steps

1. **Fill in config/site.ts** with your actual business data
2. **Test locally** using the checklist above
3. **Deploy** to production
4. **Submit sitemap** to Google Search Console
5. **Monitor** search performance in Search Console

## Environment Variables

Create `.env.local`:

```bash
# SEO Configuration
SEO_TIER=advanced

# Analytics (optional)
ENABLE_ANALYTICS=false
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXX
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Resources

- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Schema.org AutoRepair](https://schema.org/AutoRepair)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)

## Support

For issues or questions:
1. Check this guide first
2. Review `config/site.ts` comments
3. Inspect generated HTML in browser dev tools
4. Test structured data in Rich Results Test

---

**Last Updated:** January 2025
**Version:** 1.0

