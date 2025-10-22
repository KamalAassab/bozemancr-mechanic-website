"use client";

import { Instagram } from "lucide-react";

export function InstagramSection() {
  const images = [
    "https://ext.same-assets.com/1338652880/922916860.png",
    "https://ext.same-assets.com/1338652880/942520042.jpeg",
    "https://ext.same-assets.com/1338652880/1019375327.jpeg",
    "https://ext.same-assets.com/1338652880/2058622387.jpeg",
    "https://ext.same-assets.com/1338652880/155915610.jpeg",
    "https://ext.same-assets.com/1338652880/1799689058.jpeg",
    "https://ext.same-assets.com/1338652880/1053914263.jpeg",
    "https://ext.same-assets.com/1338652880/1123075811.jpeg",
  ];

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-black border-2 border-white/10 px-8 py-6 mb-6">
            <h2 className="font-condensed font-black text-5xl md:text-6xl">
              <span className="text-primary italic">#bozemancr</span>
              <span className="text-white/50 italic">motorsports</span>
            </h2>
          </div>
          <p className="text-white/70 italic text-lg max-w-3xl mx-auto">
            Follow us on Instagram and add our hashtag to your BozemanCR projects to see them here!
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden bg-zinc-900 cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/bozemancr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-condensed font-bold italic text-lg px-8 py-4 transition-all duration-200 transform hover:scale-105"
          >
            <Instagram className="w-6 h-6" />
            Follow @bozemancr
          </a>
        </div>
      </div>
    </section>
  );
}
