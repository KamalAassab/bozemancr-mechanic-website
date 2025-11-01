"use client";

import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const storyCards = [
    {
      year: "2015",
      title: "THE BEGINNING",
      description: "Founded with a passion for precision and performance, Bozeman CR started as a small garage with big dreams.",
      icon: "/icons/certified.svg",
      highlight: "Founded"
    },
    {
      year: "2018",
      title: "EXPANSION",
      description: "Moved to our current state-of-the-art facility, equipped with the latest diagnostic tools and equipment.",
      icon: "/icons/expansion.svg",
      highlight: "Growth"
    },
    {
      year: "2020",
      title: "RECOGNITION",
      description: "Became Montana's premier automotive specialist, trusted by enthusiasts and professionals alike.",
      icon: "/icons/recognition.svg",
      highlight: "Excellence"
    },
    {
      year: "2024",
      title: "INNOVATION",
      description: "Leading the industry with cutting-edge technology and unmatched expertise in automotive performance.",
      icon: "/icons/innovation.svg",
      highlight: "Innovation"
    }
  ];

  return (
    <section ref={ref} id="about" className="relative z-20">
      {/* About Us Header */}
      <div className="relative pt-0 pb-8 md:pb-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.p 
              className="text-white text-lg sm:text-2xl md:text-3xl uppercase tracking-tighter mb-2 font-black italic"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.15, delay: 0.1 }}
            >
              — ABOUT US —
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Shop Story Section */}
      <div className="relative pt-0 pb-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h2 
              className="font-condensed font-black italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15, delay: 0.2 }}
            >
              <motion.span 
                className="text-white"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.15, delay: 0.3 }}
              >
                SHOP
              </motion.span>
              <motion.span 
                className="text-primary ml-2 sm:ml-4"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.15, delay: 0.4 }}
              >
                STORY
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-white/80 text-sm sm:text-base md:text-lg max-w-4xl mx-auto font-condensed font-black italic uppercase text-center leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.15, delay: 0.5 }}
            >
              FROM HUMBLE BEGINNINGS TO INDUSTRY LEADERSHIP, DISCOVER THE JOURNEY THAT MADE US MONTANA'S PREMIER AUTOMOTIVE SPECIALIST.
            </motion.p>
          </motion.div>

          {/* Timeline Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.1, delay: 0.6 }}
          >
            {storyCards.map((card, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 rounded-xl p-6 hover:border-primary/40 transition-all duration-150 hover:shadow-2xl hover:shadow-primary/20"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.15, delay: 0.7 + (index * 0.2) }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.15 }
                }}
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                
                {/* Year Badge */}
                <motion.div 
                  className="absolute -top-3 -right-3 bg-primary text-white font-condensed font-black italic text-sm px-3 py-1 rounded-full border-2 border-white/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.1 }}
                >
                  {card.year}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title in one line */}
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Image 
                        src={card.icon} 
                        alt={card.title}
                        width={28}
                        height={28}
                        className="text-primary"
                      />
                    </motion.div>
                    <motion.h3 
                      className="font-condensed font-black italic text-lg sm:text-xl text-white group-hover:text-primary transition-colors duration-150"
                      whileHover={{ scale: 1.05 }}
                    >
                      {card.title}
                    </motion.h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-white/70 text-sm leading-relaxed font-roboto group-hover:text-white/90 transition-colors duration-150"
                    whileHover={{ scale: 1.02 }}
                  >
                    {card.description}
                  </motion.p>

                  {/* Highlight Badge */}
                  <motion.div 
                    className="mt-4 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 0, 54, 0.2)" }}
                    transition={{ duration: 0.1 }}
                  >
                    <span className="text-primary text-xs font-bold italic uppercase tracking-wide">
                      {card.highlight}
                    </span>
                  </motion.div>
                </div>

                {/* Hover Effect Line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-150"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div 
            className="mt-8 md:mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.15, delay: 1.0 }}
          >
            <motion.div 
              className="max-w-6xl mx-auto overflow-hidden group"
            >
              {/* Content Layout */}
              <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
                {/* Title and Button Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <motion.h3 
                    className="font-condensed font-black italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white tracking-tight text-center break-words sm:whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-primary">READY</span>
                    <span className="text-white ml-2">TO BE PART OF</span>
                    <span className="text-white ml-2">OUR</span>
                    <span className="text-primary ml-2">STORY?</span>
                  </motion.h3>

                  {/* CTA Button */}
                  <motion.div 
                    className="flex-shrink-0 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1 }}
                  >
                    <motion.a
                      href="tel:12345678910"
                      className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-white font-condensed font-black italic text-xs sm:text-sm md:text-base px-4 sm:px-6 py-3 sm:py-4 transition-all duration-150 transform hover:scale-105 shadow-2xl shadow-primary/50 border-2 border-primary/30 hover:border-primary/60 tracking-tight rounded-2xl overflow-hidden w-full sm:w-auto min-w-[160px] sm:min-w-[180px] justify-center"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Button Background Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-100" />
                      
                      {/* Button Content */}
                      <motion.div 
                        className="relative z-10 flex items-center gap-2"
                      >
                        <motion.div 
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-center">START YOUR JOURNEY TODAY</span>
                        <motion.div 
                          className="w-0 h-0 border-l-3 border-l-transparent border-r-3 border-r-transparent border-t-3 border-t-white group-hover:rotate-12 transition-transform duration-150"
                        />
                      </motion.div>
                    </motion.a>
                  </motion.div>
                </div>
                
                {/* Description */}
                <motion.p 
                  className="text-white/80 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base font-condensed font-bold italic uppercase tracking-wide leading-tight text-center break-words sm:whitespace-nowrap max-w-4xl"
                  whileHover={{ scale: 1.01 }}
                >
                  JOIN THOUSANDS OF SATISFIED CUSTOMERS WHO TRUST US WITH THEIR MOST PRIZED POSSESSIONS
                </motion.p>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>

      <TestimonialsCarousel />
    </section>
  );
}

