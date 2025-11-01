import { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "../../../../config/site";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return siteConfig.PRIMARY_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.PRIMARY_SERVICES.find(
    (s) => s.slug === slug
  );

  if (!service) {
    return {};
  }

  return buildMetadata("service", {
    serviceTitle: service.title,
    description: service.description,
    includeLocation: true,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = siteConfig.PRIMARY_SERVICES.find(
    (s) => s.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/services"
            className="inline-block mb-8 text-primary hover:text-white transition-colors"
          >
            ← Back to Services
          </Link>

          <h1 className="font-condensed font-black italic text-4xl md:text-6xl mb-4 text-primary">
            {service.title}
          </h1>

          <p className="text-white/80 mb-12 text-lg">
            {service.description}
          </p>

          {/* TODO: SERVICE DETAILS: Add specific service content here */}
          
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
            >
              SCHEDULE SERVICE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

