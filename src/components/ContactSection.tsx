"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="contact" className="relative py-6 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-0"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Map Section - Left Third - Fixed */}
            <motion.div 
              className="relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden"
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.59519400066!2d-111.043622!3d45.679193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDQwJzQ1LjEiTiAxMTHCsDAyJzM3LjAiVw!5e0!3m2!1sen!2sus!4v1704567890123!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Clickable Overlay */}
              <motion.a
                href="https://maps.app.goo.gl/wx6KKraeJDS2t1ZY9"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer hover:bg-black/5 transition-colors"
                aria-label="Open in Google Maps"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </motion.div>

            {/* Contact Info Section - Right Two Thirds */}
            <motion.div 
              className="lg:col-span-2 bg-black/80 p-4 md:p-6 lg:p-8 flex flex-col justify-center"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              {/* Mobile: 2x2 Grid, Desktop: 2x1 Grid */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                {/* Visit Us */}
                <motion.div 
                  className="text-center lg:text-left pr-0 md:pr-6 border-r-0 md:border-r border-white/20"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.1, delay: 0.5 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <motion.h2 
                    className="font-condensed font-black italic text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-3 tracking-tight leading-tight flex items-center justify-center lg:justify-start gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Image 
                        src="/icons/location.svg" 
                        alt="Location" 
                        width={40}
                        height={40}
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" 
                      />
                    </motion.div>
                    <motion.span 
                      className="text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.1, delay: 0.6 }}
                    >
                      VISIT US
                    </motion.span>
                  </motion.h2>
                  <motion.div
                    className="font-condensed font-bold text-sm md:text-lg lg:text-xl text-white uppercase tracking-tight leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.1, delay: 0.7 }}
                  >
                    444 W MAIN ST<br />
                    BOZEMAN, MT 59715
                  </motion.div>
                </motion.div>

                {/* Hours */}
                <motion.div 
                  className="text-center lg:text-left pl-0 md:pl-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.1, delay: 0.8 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <motion.h3 
                    className="font-condensed font-black italic text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-3 tracking-tight leading-tight flex items-center justify-center lg:justify-start gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Image 
                        src="/icons/hours.svg" 
                        alt="Hours" 
                        width={40}
                        height={40}
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" 
                      />
                    </motion.div>
                    <motion.span 
                      className="text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.1, delay: 0.9 }}
                    >
                      HOURS
                    </motion.span>
                  </motion.h3>
                  <motion.div
                    className="font-condensed font-bold text-sm md:text-lg lg:text-xl text-white uppercase tracking-tight space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.1, delay: 1.0 }}
                  >
                    <motion.div
                      className="flex items-center justify-center lg:justify-start gap-2"
                      whileHover={{ scale: 1.02, x: 2 }}
                      transition={{ duration: 0.1 }}
                    >
                      <span className="text-primary font-black">MON–FRI</span>
                      <span className="text-white/60">:</span>
                      <span className="text-white">8h – 18h</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center justify-center lg:justify-start gap-2"
                      whileHover={{ scale: 1.02, x: 2 }}
                      transition={{ duration: 0.1 }}
                    >
                      <span className="text-primary font-black">SAT</span>
                      <span className="text-white/60">:</span>
                      <span className="text-white">9h – 14h</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center justify-center lg:justify-start gap-2"
                      whileHover={{ scale: 1.02, x: 2 }}
                      transition={{ duration: 0.1 }}
                    >
                      <span className="text-primary font-black">SUN</span>
                      <span className="text-white/60">:</span>
                      <span className="text-white/60">CLOSED</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Call Us */}
                <motion.div 
                  className="text-center lg:text-left pr-0 md:pr-6 border-r-0 md:border-r border-white/20"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.1, delay: 1.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.h3 
                    className="font-condensed font-black italic text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-3 tracking-tight leading-tight flex items-center justify-center lg:justify-start gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Image 
                        src="/icons/phone.svg" 
                        alt="Phone" 
                        width={40}
                        height={40}
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" 
                      />
                    </motion.div>
                    <motion.span 
                      className="text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.1, delay: 1.3 }}
                    >
                      CALL US!
                    </motion.span>
                  </motion.h3>
                  <motion.div 
                    className="flex flex-col items-center lg:items-start"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.a
                      href="tel:12345678910"
                      className="font-condensed font-bold text-sm md:text-lg lg:text-xl text-white hover:text-primary transition-colors tracking-tight leading-tight"
                      whileHover={{ scale: 1.05 }}
                    >
                      1-234-567-8910
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Email Us */}
                <motion.div 
                  className="text-center lg:text-left pl-0 md:pl-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.1, delay: 1.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.h3 
                    className="font-condensed font-black italic text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-3 tracking-tight leading-tight flex items-center justify-center lg:justify-start gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Image 
                        src="/icons/email.svg" 
                        alt="Email" 
                        width={40}
                        height={40}
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" 
                      />
                    </motion.div>
                    <motion.span 
                      className="text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.1, delay: 1.4 }}
                    >
                      EMAIL US!
                    </motion.span>
                  </motion.h3>
                  <motion.div 
                    className="flex flex-col items-center lg:items-start"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.a
                      href="mailto:kamalaassab2002@gmail.com"
                      className="font-condensed font-bold text-sm md:text-lg lg:text-xl text-white hover:text-primary transition-colors tracking-tight leading-tight"
                      whileHover={{ scale: 1.05 }}
                    >
                      KAMALAASSAB2002@GMAIL.COM
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
