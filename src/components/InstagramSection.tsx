"use client";

import { Instagram } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function InstagramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const images = [
    "/images/gallery/pic1.jpg",
    "/images/gallery/pic2.jpg",
    "/images/gallery/pic3.jpg",
    "/images/gallery/pic4.jpg",
    "/images/gallery/pic5.jpg",
    "/images/gallery/pic6.jpg",
    "/images/gallery/pic7.jpg",
    "/images/gallery/pic8.jpg",
  ];

  return (
    <section ref={ref} className="relative py-20">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.1, delay: 0.2 }}
        >
          <motion.div 
            className="inline-block bg-black border-2 border-white/10 px-4 sm:px-6 md:px-8 py-4 sm:py-6 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.1, delay: 0.4 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.h2 
              className="font-condensed font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.1, delay: 0.6 }}
            >
              <motion.span 
                className="text-primary italic"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.1, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                #Bozeman
              </motion.span>
              <motion.span 
                className="text-white italic"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.1, delay: 1.0 }}
                whileHover={{ scale: 1.1 }}
              >
                CarRepair
              </motion.span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-white/70 italic text-base sm:text-lg max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.1, delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
          >
            Follow us on Instagram and add our hashtag to your BozemanCR projects to see them here!
          </motion.p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.15, delay: 1.4 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative aspect-square overflow-hidden bg-zinc-900 cursor-pointer rounded-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
              transition={{ 
                duration: 0.1, 
                delay: 1.6 + (index * 0.1),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                y: -5,
                transition: { duration: 0.1 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image}
                alt={`Instagram Gallery ${index + 1}`}
                fill
                quality={75}
                loading="lazy"
                className="object-cover transition-transform duration-150 group-hover:scale-110"
              />
              <motion.div 
                className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-150"
                whileHover={{ backgroundColor: "rgba(255, 0, 54, 0.1)" }}
              />
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.1 }}
                >
                <Instagram className="w-12 h-12 text-white drop-shadow-lg" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.1, delay: 2.4 }}
        >
          <motion.a
            href="https://www.instagram.com/bozemancr/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-condensed font-bold italic text-xl px-6 py-3 transition-all duration-150 transform hover:scale-105 rounded-full border-2 border-white/20 hover:border-white/40 shadow-2xl hover:shadow-purple-500/25 tracking-tight"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              transition: { duration: 0.1 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 3s ease infinite'
            }}
          >
            {/* Animated background overlay */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              whileHover={{ scale: 1.1 }}
            />
            
            {/* Instagram icon with enhanced styling */}
            <motion.div
              className="relative z-10 flex items-center justify-center w-7 h-7 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-150"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.1 }}
            >
              <Instagram className="w-4 h-4 text-white" />
            </motion.div>
            
            {/* Button text with enhanced styling */}
            <span className="relative z-10 tracking-wide">
            Follow @bozemancr
            </span>
            
            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              style={{
                background: 'linear-gradient(135deg, #A855F7, #EC4899, #F59E0B)',
                WebkitBackgroundClip: 'padding-box',
                backgroundClip: 'padding-box'
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.1 }
              }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
