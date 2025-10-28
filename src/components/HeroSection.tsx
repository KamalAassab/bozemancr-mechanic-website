"use client";

import { Wrench, Zap } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="hero" className="relative h-[60vh] flex items-center pt-20 z-20 md:min-h-screen">
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden z-0"
        style={{
          backgroundImage: 'url(/images/hero/hero3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'scroll',
          height: '60vh',
          width: '100%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Background Image - Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block z-0"
        style={{
          backgroundImage: 'url(/images/hero/hero1.png)',
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mb-20">
          {/* Professional Logo */}
          <motion.div 
            className="mb-2 ml-4 sm:ml-8 md:ml-12"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1 
            }}
          >
            <h1 className="font-condensed font-black italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none mb-1 tracking-tight">
              <motion.span 
                className="text-primary drop-shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.15, delay: 0.2 }}
              >
                BOZEMAN
              </motion.span>
              <motion.span 
                className="text-white drop-shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.15, delay: 0.3 }}
              >
                CR
              </motion.span>
            </h1>
            <motion.div 
              className="flex items-center gap-2 sm:gap-4 mb-2"
              initial={{ opacity: 0, width: 0 }}
              animate={isInView ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="h-1 w-8 sm:w-12 md:w-16 bg-gradient-to-r from-primary to-transparent"></div>
              <div className="h-1 w-4 sm:w-6 md:w-8 bg-primary"></div>
              <div className="h-1 w-2 sm:w-3 md:w-4 bg-primary/60"></div>
            </motion.div>
          </motion.div>
          
          {/* Professional Tagline */}
          <motion.p 
            className="text-white text-lg sm:text-xl md:text-2xl mb-4 font-black italic tracking-wider ml-4 sm:ml-8 md:ml-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.15, delay: 0.5 }}
          >
            PREMIERE USA AUTOMOTIVE SPECIALIST
          </motion.p>
          
          {/* Professional CTA Button */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center ml-4 sm:ml-8 md:ml-12 lg:ml-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.15, delay: 0.6 }}
          >
            <motion.a
              href="tel:12345678910"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-white font-condensed font-black italic text-lg sm:text-xl px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-primary/40 border-2 border-primary/20 hover:border-primary/40 tracking-tight"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>Free Quotes! Call Now</span>
              <motion.div 
                className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white"
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.15 }}
              />
            </motion.a>
            
            <motion.div 
              className="flex items-center gap-2 text-white/70 text-sm font-condensed italic"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.15, delay: 0.7 }}
            >
              <motion.div 
                className="w-1 h-1 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <span>Connecticut's #1 Performance Shop</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Service Cards - Full Width */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-10 px-2 pb-2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <div className="flex flex-row w-full gap-1">
          {/* Performance Mods */}
          <motion.a
            href="#performance"
            className="group bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-sm hover:from-primary/20 hover:via-primary/10 hover:to-primary/5 transition-all duration-500 p-2 relative overflow-hidden cursor-pointer h-20 sm:h-28 flex flex-col justify-center items-center text-center hover:shadow-2xl hover:shadow-primary/40 flex-1 rounded-lg border border-white/10 hover:border-primary/30"
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.8 }}
            transition={{ duration: 0.15, delay: 0.9 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <motion.div 
              className="relative z-10 transform group-hover:scale-105 transition-transform duration-500 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center gap-1 mb-1 sm:flex-row sm:gap-3 sm:mb-2">
                <motion.div 
                  className="w-10 h-10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 sm:hidden"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Image 
                    src="/icons/performance-hero.svg" 
                    alt="Performance" 
                    width={28} 
                    height={28} 
                    className="transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 hidden sm:flex"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Image 
                    src="/icons/performance-hero.svg" 
                    alt="Performance" 
                    width={32} 
                    height={32} 
                    className="transition-all duration-300"
                  />
                </motion.div>
                <motion.h3 
                  className="font-condensed font-black text-sm sm:text-xl group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-primary italic group-hover:text-white transition-colors duration-300">PERFORMANCE</span>
                  <span className="text-white italic group-hover:text-primary hidden sm:inline"> MODS</span>
                </motion.h3>
              </div>
              <motion.p 
                className="text-white/70 text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300 leading-tight text-center hidden sm:block"
                whileHover={{ scale: 1.02 }}
              >
                Performance upgrades!
              </motion.p>
            </motion.div>
          </motion.a>

          {/* Repairs */}
          <motion.a
            href="#additional-services"
            onClick={(e) => {
              e.preventDefault();
              // Scroll to additional services section
              const element = document.getElementById('additional-services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Wait for scroll to complete, then trigger repair popup
                setTimeout(() => {
                  const repairButton = document.querySelector('[data-service="repairs"]');
                  if (repairButton) {
                    (repairButton as HTMLElement).click();
                  }
                }, 800);
              }
            }}
            className="group bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-sm hover:from-primary/20 hover:via-primary/10 hover:to-primary/5 transition-all duration-500 p-2 relative overflow-hidden cursor-pointer h-20 sm:h-28 flex flex-col justify-center items-center text-center hover:shadow-2xl hover:shadow-primary/40 flex-1 rounded-lg border border-white/10 hover:border-primary/30"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.15, delay: 1.0 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <motion.div 
              className="relative z-10 transform group-hover:scale-105 transition-transform duration-500 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center gap-1 mb-1 sm:flex-row sm:gap-3 sm:mb-2">
                <motion.div 
                  className="w-10 h-10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 sm:hidden"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Image 
                    src="/icons/repair.svg" 
                    alt="Repair" 
                    width={28} 
                    height={28} 
                    className="transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 hidden sm:flex"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Image 
                    src="/icons/repair.svg" 
                    alt="Repair" 
                    width={32} 
                    height={32} 
                    className="transition-all duration-300"
                  />
                </motion.div>
                <motion.h3 
                  className="font-condensed font-black text-sm sm:text-xl group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-primary italic group-hover:text-white transition-colors duration-300">REPAIRS</span>
                  <span className="text-white italic group-hover:text-primary hidden sm:inline"> & DIAGNOSTICS</span>
                </motion.h3>
              </div>
              <motion.p 
                className="text-white/70 text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300 leading-tight text-center hidden sm:block"
                whileHover={{ scale: 1.02 }}
              >
                Professional repairs & diagnostics.
              </motion.p>
            </motion.div>
          </motion.a>

          {/* Maintenance */}
          <motion.a
            href="#additional-services"
            onClick={(e) => {
              e.preventDefault();
              // Scroll to additional services section
              const element = document.getElementById('additional-services');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                // Wait for scroll to complete, then trigger maintenance popup
                setTimeout(() => {
                  const maintenanceButton = document.querySelector('[data-service="maintenance"]');
                  if (maintenanceButton) {
                    (maintenanceButton as HTMLElement).click();
                  }
                }, 800);
              }
            }}
            className="group bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-sm hover:from-primary/20 hover:via-primary/10 hover:to-primary/5 transition-all duration-500 p-2 relative overflow-hidden cursor-pointer h-20 sm:h-28 flex flex-col justify-center items-center text-center hover:shadow-2xl hover:shadow-primary/40 flex-1 rounded-lg border border-white/10 hover:border-primary/30"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.8 }}
            transition={{ duration: 0.15, delay: 1.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <motion.div 
              className="relative z-10 transform group-hover:scale-105 transition-transform duration-500 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center gap-1 mb-1 sm:flex-row sm:gap-3 sm:mb-2">
                <motion.div 
                  className="w-10 h-10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 sm:hidden"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Image 
                    src="/icons/oil.svg" 
                    alt="Maintenance" 
                    width={28} 
                    height={28} 
                    className="transition-all duration-300"
                  />
                </motion.div>
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 hidden sm:flex"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Image 
                    src="/icons/oil.svg" 
                    alt="Maintenance" 
                    width={32} 
                    height={32} 
                    className="transition-all duration-300"
                  />
                </motion.div>
                <motion.h3 
                  className="font-condensed font-black text-sm sm:text-xl group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-primary italic group-hover:text-white transition-colors duration-300">MAINTENANCE</span>
                  <span className="text-white italic group-hover:text-primary hidden sm:inline"> & SERVICE</span>
                </motion.h3>
              </div>
              <motion.p 
                className="text-white/70 text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300 leading-tight text-center hidden sm:block"
                whileHover={{ scale: 1.02 }}
              >
                Comprehensive maintenance services.
              </motion.p>
            </motion.div>
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}
