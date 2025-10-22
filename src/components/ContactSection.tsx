"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-primary/30 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map */}
              <div className="relative h-[400px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.0822458276!2d-73.0775616!3d41.2144619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80dae0298e711%3A0xd4157e364b6ee48c!2sInnovative%20Motorsports%20LLC!5e0!3m2!1sen!2sus!4v1234567890"
                  className="absolute inset-0 w-full h-full grayscale brightness-90"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <MapPin className="w-12 h-12 text-primary drop-shadow-lg" />
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-8 lg:p-12">
                <h2 className="font-condensed font-black italic text-5xl mb-8">
                  <span className="text-primary">VISIT US</span>
                </h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="font-condensed font-bold text-2xl text-white mb-2">
                      916 B - BRIDGEPORT AVE
                    </h3>
                    <p className="font-condensed font-bold text-xl text-white/80">
                      MILFORD, CT 06460
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Call Us */}
                  <div>
                    <h4 className="text-white/60 uppercase tracking-wider text-sm mb-3">
                      CALL US!
                    </h4>
                    <a
                      href="tel:12033454647"
                      className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <span className="font-condensed text-xl">1 - 203 - 345 - 4647</span>
                    </a>
                  </div>

                  {/* Email Us */}
                  <div>
                    <h4 className="text-white/60 uppercase tracking-wider text-sm mb-3">
                      EMAIL US!
                    </h4>
                    <a
                      href="mailto:info@imsperformance.com"
                      className="flex items-center gap-4 text-white hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                      </div>
                      <span className="font-condensed text-xl">INFO@IMSPERFORMANCE.COM</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
