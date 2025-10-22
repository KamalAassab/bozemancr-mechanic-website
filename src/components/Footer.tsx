"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Newsletter */}
          <div>
            <h3 className="font-condensed font-bold italic text-2xl mb-4">
              <span className="text-primary">Sign up</span>
              <br />
              <span className="text-primary">for our</span>
              <br />
              <span className="text-primary">newsletter</span>
            </h3>
            <p className="text-white/60 text-sm mb-6">
              We occasionally send out emails about events and sales.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-condensed font-bold italic px-6 py-3 transition-colors"
              >
                Submit
              </button>
            </form>
            <div className="flex items-center gap-2 mt-4 text-white/60 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span>We promise not to Spam!</span>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-condensed font-bold text-xl mb-6 text-primary uppercase">
              Policies
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-condensed font-bold text-xl mb-6 text-primary uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#performance" className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Performance & Upgrades
                </Link>
              </li>
              <li>
                <Link href="#fabrication" className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Custom Fabrication
                </Link>
              </li>
              <li>
                <Link href="#maintenance" className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="#repairs" className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Repairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-condensed font-bold text-xl mb-6 text-primary uppercase">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:12033454647"
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  1 - 203 - 345 - 4647
                </a>
              </li>
              <li>
                <a
                  href="mailto:danny@imsperformance.com"
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  danny@imsperformance.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/916+B+Bridgeport+Ave,+Milford,+CT+06460"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors text-sm flex items-start gap-3"
                >
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    916 B Bridgeport Ave Milford,
                    <br />
                    CT 06460
                  </span>
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.facebook.com/BozemanCRPerformance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-primary flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-white/60 group-hover:text-primary" />
              </a>
              <a
                href="https://www.instagram.com/bozemancr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-primary flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white/60 group-hover:text-primary" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCEtcccjBKacUX11-kig2_qQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-primary flex items-center justify-center transition-colors group"
              >
                <Youtube className="w-5 h-5 text-white/60 group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-primary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-black">
              © 2023 - BozemanCR.
            </p>
            <p className="text-black/80">
              Site Design By{" "}
              <a href="#" className="hover:text-white transition-colors font-bold">
                Same
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
