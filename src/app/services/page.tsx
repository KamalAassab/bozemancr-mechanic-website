import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "../../../config/site";
import Link from "next/link";

export const metadata: Metadata = buildMetadata("service", {
  description: "Browse our comprehensive range of automotive services. From routine maintenance to performance upgrades, we've got you covered.",
  includeLocation: true,
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-condensed font-black italic text-4xl md:text-6xl mb-4 text-primary">
            OUR SERVICES
          </h1>
          
          <p className="text-white/80 mb-12 text-lg">
            Explore our comprehensive range of automotive services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.PRIMARY_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="p-6 border border-primary/20 hover:border-primary/60 transition-colors group"
              >
                <h2 className="font-condensed font-bold text-2xl mb-2 text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-white/60 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

