"use client";

import { useRef } from "react";
import CardStack from "./ui/card-stack";
import { motion, useInView } from "framer-motion";

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="gallery" className="relative py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Gallery Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2 
            className="font-condensed font-black italic text-6xl md:text-7xl -mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              OUR GALLERY
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white text-2xl md:text-3xl font-black italic uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            EXPLORE OUR AUTOMOTIVE WORK AND QUALITY CRAFTSMANSHIP!
          </motion.p>
        </motion.div>

        {/* Gallery Section */}
        <motion.div 
          className="relative w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <CardStack />
        </motion.div>
      </div>
    </section>
  );
}
