"use client";

import { Wrench, Zap } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero1.png)',
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mb-20">
          {/* Professional Logo */}
          <div className="mb-2 ml-12">
            <h1 className="font-condensed font-black italic text-6xl md:text-7xl lg:text-8xl leading-none mb-1">
              <span className="text-primary drop-shadow-2xl">BOZEMAN</span><span className="text-white drop-shadow-2xl">CR</span>
            </h1>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent"></div>
              <div className="h-1 w-8 bg-primary"></div>
              <div className="h-1 w-4 bg-primary/60"></div>
            </div>
          </div>
          
          {/* Professional Tagline */}
          <p className="text-white text-xl md:text-2xl mb-4 font-black italic tracking-wider ml-12">
            PREMIERE USA AUTOMOTIVE SPECIALIST
          </p>
          
          {/* Professional CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center ml-20">
            <a
              href="tel:12033454647"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-white font-condensed font-black italic text-xl px-6 py-3 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-primary/40 border-2 border-primary/20 hover:border-primary/40"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Free Quotes! Call Now</span>
              <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white group-hover:rotate-12 transition-transform duration-300"></div>
            </a>
            
            <div className="flex items-center gap-2 text-white/70 text-sm font-condensed italic">
              <div className="w-1 h-1 bg-primary rounded-full"></div>
              <span>Connecticut's #1 Performance Shop</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards - Full Width */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          {/* Performance Mods */}
          <a
            href="#performance"
            className="group bg-transparent backdrop-blur-lg hover:bg-transparent transition-all duration-500 p-4 relative overflow-hidden cursor-pointer h-48 flex flex-col justify-center items-start text-left hover:shadow-2xl hover:shadow-primary/40"
          >
            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/90 via-primary/50 to-primary/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
              <div className="flex items-center justify-start mb-1 pl-4">
                <div className="mr-1">
                  <Image 
                    src="/svg/performance-hero.svg" 
                    alt="Performance" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <h3 className="font-condensed font-bold text-4xl group-hover:text-primary transition-colors duration-300">
                  <span className="text-primary italic group-hover:text-white transition-colors duration-300">PERFORMANCE</span>
                  <span className="text-white italic"> MODS</span>
                </h3>
              </div>
              <p className="text-white/80 text-lg group-hover:text-white/90 transition-colors duration-300 leading-tight text-left pl-4">
                We install a wide range of performance upgrades!
              </p>
            </div>
          </a>

          {/* Repairs */}
          <a
            href="#repairs"
            className="group bg-transparent backdrop-blur-lg hover:bg-transparent transition-all duration-500 p-4 relative overflow-hidden cursor-pointer h-48 flex flex-col justify-center items-start text-left hover:shadow-2xl hover:shadow-primary/40"
          >
            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/90 via-primary/50 to-primary/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
              <div className="flex items-center justify-start mb-1 pl-4">
                <div className="mr-1">
                  <Image 
                    src="/svg/repair.svg" 
                    alt="Repair" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <h3 className="font-condensed font-bold text-4xl group-hover:text-primary transition-colors duration-300">
                  <span className="text-primary italic group-hover:text-white transition-colors duration-300">REPAIRS</span>
                </h3>
              </div>
              <p className="text-white/80 text-lg group-hover:text-white/90 transition-colors duration-300 leading-tight text-left pl-4">
                Professional automotive repairs and diagnostics for all models.
              </p>
            </div>
          </a>

          {/* Custom Fabrication */}
          <a
            href="#fabrication"
            className="group bg-transparent backdrop-blur-lg hover:bg-transparent transition-all duration-500 p-4 relative overflow-hidden cursor-pointer h-48 flex flex-col justify-center items-start text-left hover:shadow-2xl hover:shadow-primary/40"
          >
            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
              <div className="flex items-center justify-start mb-1 pl-4">
                <div className="mr-1">
                  <Image 
                    src="/svg/custom-fab.svg" 
                    alt="Custom Fabrication" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <h3 className="font-condensed font-bold text-4xl group-hover:text-primary transition-colors duration-300">
                  <span className="text-primary italic group-hover:text-white transition-colors duration-300">CUSTOM</span>
                  <span className="text-white italic"> FABRICATION</span>
                </h3>
              </div>
              <p className="text-white/80 text-lg group-hover:text-white/90 transition-colors duration-300 leading-tight text-left pl-4">
                We are masters of custom fabrication. You dream it, we make it.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
