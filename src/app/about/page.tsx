import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "../../../config/site";

export const metadata: Metadata = buildMetadata("about", {
  description: `Learn about ${siteConfig.BUSINESS_NAME} - your trusted partner for auto repair in ${siteConfig.CITY}, ${siteConfig.STATE}.`,
  includeLocation: true,
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-condensed font-black italic text-4xl md:text-6xl mb-4 text-primary">
            ABOUT US
          </h1>

          {/* TODO: ABOUT CONTENT: Add company history, mission, team info here */}
          <p className="text-white/80 mb-12 text-lg">
            Welcome to {siteConfig.BUSINESS_NAME}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="font-condensed font-bold text-2xl mb-4 text-primary">
                OUR MISSION
              </h2>
              <p className="text-white/60">
                {/* Add mission statement here */}
              </p>
            </div>
            
            <div>
              <h2 className="font-condensed font-bold text-2xl mb-4 text-primary">
                OUR VALUES
              </h2>
              <p className="text-white/60">
                {/* Add values here */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

