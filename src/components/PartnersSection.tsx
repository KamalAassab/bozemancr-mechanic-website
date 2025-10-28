"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section ref={ref} className="relative overflow-hidden z-20">
      {/* Custom Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #ff0036 0%, #cc0029 25%, #99001f 50%, #660014 75%, #33000a 100%)'
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-800/30"></div>
      </motion.div>
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-0 md:mb-16 pt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.h2 
            className="font-condensed font-black italic text-3xl sm:text-4xl md:text-7xl -mb-2 md:-mb-2 text-white tracking-tight mb-4 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            PUTTING THE "PART" IN PARTNER...
          </motion.h2>
          <motion.p 
            className="text-black text-xs sm:text-sm md:text-base font-black italic uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            We squad-up with some of the best suppliers in the industry to be able to offer you the most competitive pricing possible on parts for your VAG vehicle.
          </motion.p>
        </motion.div>

        {/* Mobile Layout - One Image Per Line */}
        <motion.div 
          className="flex flex-col space-y-0 md:hidden -mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          {/* Audi - Mobile */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 1.0 }}
          >
            <motion.div 
              className="w-[600px] h-[200px] group cursor-pointer"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src="/images/vehicles/audi.jpg"
                alt="Audi"
                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl group-hover:drop-shadow-red-500/50"
              />
            </motion.div>
          </motion.div>

          {/* Porsche - Mobile */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            <motion.div 
              className="w-[650px] h-[250px] group cursor-pointer"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src="/images/vehicles/porsche.jpg"
                alt="Porsche"
                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl group-hover:drop-shadow-red-500/50"
              />
            </motion.div>
          </motion.div>

          {/* Golf - Mobile */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 1.4 }}
          >
            <motion.div 
              className="w-[600px] h-[200px] group cursor-pointer"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src="/images/vehicles/golf.jpg"
                alt="Golf"
                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl group-hover:drop-shadow-red-500/50"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Desktop Layout - Porsche Centered */}
        <div className="hidden md:block relative h-[400px] flex items-center justify-center">
          {/* Audi - Left (Behind) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[550px] h-[300px] transform -rotate-12 z-10 group cursor-pointer">
            <img 
              src="/images/vehicles/audi.jpg"
              alt="Audi"
              className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl group-hover:drop-shadow-red-500/50"
            />
          </div>

          {/* Golf - Right (Behind) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[300px] transform rotate-12 z-10 group cursor-pointer">
            <img 
              src="/images/vehicles/golf.jpg"
              alt="Golf"
              className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl group-hover:drop-shadow-red-500/50"
            />
          </div>

          {/* Porsche - Center (Front) - Centered and on top */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[700px] h-[450px] transform rotate-1 group cursor-pointer">
            <img 
              src="/images/vehicles/porsche.jpg"
              alt="Porsche"
              className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl group-hover:drop-shadow-red-500/50"
            />
          </div>
        </div>

      </div>
    </section>
  );
}