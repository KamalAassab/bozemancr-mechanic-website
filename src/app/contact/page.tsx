import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "../../../config/site";

export const metadata: Metadata = buildMetadata("contact", {
  description: `Contact ${siteConfig.BUSINESS_NAME} in ${siteConfig.CITY}, ${siteConfig.STATE}. Call us at ${siteConfig.PHONE_DISPLAY} or visit us at ${siteConfig.FULL_ADDRESS}.`,
  includeLocation: false,
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-condensed font-black italic text-4xl md:text-6xl mb-4 text-primary">
            CONTACT US
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-condensed font-bold text-2xl mb-6 text-primary">
                GET IN TOUCH
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2 text-white">Address</h3>
                  <p className="text-white/60">
                    {siteConfig.FULL_ADDRESS}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-white">Phone</h3>
                  <a
                    href={`tel:${siteConfig.PHONE_E164}`}
                    className="text-primary hover:text-white transition-colors"
                  >
                    {siteConfig.PHONE_DISPLAY}
                  </a>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-white">Email</h3>
                  <a
                    href={`mailto:${siteConfig.EMAIL}`}
                    className="text-primary hover:text-white transition-colors"
                  >
                    {siteConfig.EMAIL}
                  </a>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-white">Hours</h3>
                  <div className="text-white/60 space-y-1">
                    <p>Mon-Fri: {siteConfig.HOURS.MONDAY}</p>
                    <p>Sat: {siteConfig.HOURS.SATURDAY}</p>
                    <p>Sun: {siteConfig.HOURS.SUNDAY}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.59519400066!2d-111.043622!3d45.679193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQwJzQ1LjEiTiAxMTHCsDAyJzM3LjAiVw!5e0!3m2!1sen!2sus!4v1704567890123!5m2!1sen!2sus"
                className="w-full h-full border border-primary/20"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* TODO: CONTACT FORM: Add contact form here if needed */}
        </div>
      </div>
    </div>
  );
}

