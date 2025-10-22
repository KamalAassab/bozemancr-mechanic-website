"use client";

import React from "react";
import CardStack from "./ui/card-stack";

export function DazaSwapSection() {
  return (
    <section id="instagram-gallery" className="relative py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <h2 className="font-condensed font-black italic text-6xl md:text-7xl -mb-2">
            <span className="text-primary">OUR GALLERY</span>
          </h2>
          <p className="text-white text-2xl md:text-3xl font-black italic uppercase">
            EXPLORE OUR AUTOMOTIVE WORK AND QUALITY CRAFTSMANSHIP!
          </p>
        </div>

        {/* Gallery Section */}
        <div className="relative w-full">
          <CardStack />
        </div>
      </div>
    </section>
  );
}

