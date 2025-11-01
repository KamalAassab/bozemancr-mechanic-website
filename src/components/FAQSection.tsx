"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of vehicles do you work on?",
      answer: "We specialize in European automotive makes and models, including but not limited to: Audi, BMW, Mercedes-Benz, Volkswagen, Porsche, Mini, Volvo, and Jaguar. We also work on performance-oriented Japanese vehicles. Our expertise covers both standard maintenance and high-performance modifications."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes! All our services come with comprehensive warranties. Parts and labor warranties typically range from 12 to 36 months depending on the service type. We stand behind our work and will make any corrections at no additional charge if issues arise within the warranty period. Specific warranty details are provided with each service estimate."
    },
    {
      question: "How long does a typical diagnostic take?",
      answer: "Most basic diagnostics can be completed within 1-2 hours. More complex issues may require 4-6 hours. We use state-of-the-art diagnostic equipment including VCDS (VAG-COM) and other specialized European diagnostic tools to ensure accurate and efficient problem identification. We'll always provide a time estimate before starting any diagnostic work."
    },
    {
      question: "Do you provide performance tuning services?",
      answer: "Absolutely! Performance tuning is one of our specialties. We offer ECU and TCU tunes from both Off-The-Shelf (OTS) and custom calibration options. Our experienced technicians can optimize your vehicle's performance for street, track, or comfort driving while maintaining reliability. We work with industry-leading tuning software and can handle everything from Stage 1 to Stage 3+ builds."
    },
    {
      question: "Can you install aftermarket parts I purchase?",
      answer: "Yes, we can install customer-provided parts. However, we always recommend sourcing parts through us to ensure quality, compatibility, and proper warranty coverage. When bringing your own parts, we'll inspect them first and advise if there are any concerns. Installation warranty terms may vary for customer-supplied parts."
    },
    {
      question: "What is your turnaround time for repairs?",
      answer: "Turnaround times vary based on the complexity of the job and parts availability. Routine maintenance typically takes 1-3 days. Standard repairs usually complete within 3-5 days. Complex modifications or major engine work may take 1-3 weeks. We always communicate expected timelines upfront and keep you updated throughout the process. We also offer expedited service for urgent repairs when possible."
    },
    {
      question: "Do you offer emergency or after-hours service?",
      answer: "While our standard hours are Monday-Friday 8:00-18:00 and Saturday 9:00-14:00, we understand that emergencies happen. Contact us to discuss your specific situation. We maintain relationships with several after-hours providers and can coordinate emergency services when necessary. For true emergencies, we recommend towing services or roadside assistance programs."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "Scheduling is easy! You can call us directly at 1-234-567-8910, email us at kamalaassab2002@gmail.com, or visit our location at 444 W Main St, Bozeman, MT 59715. We recommend scheduling in advance, especially for performance modifications or major service, as we book up quickly. Same-day or next-day service may be available for routine maintenance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and certified checks. Payment is due upon completion of service. For larger projects, we can discuss payment arrangements. We also offer financing options through third-party providers for qualifying customers."
    },
    {
      question: "Do you provide rental cars or loaner vehicles?",
      answer: "While we don't have a formal loaner fleet, we work with several local rental agencies and can help arrange transportation during service. Many insurance policies cover rental reimbursement. We're happy to coordinate and provide documentation for your insurance claim. Please discuss transportation needs when scheduling your appointment."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="relative py-8 sm:py-16 md:py-20 z-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-6 sm:mb-10 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p 
            className="text-white text-sm sm:text-lg md:text-2xl lg:text-3xl uppercase tracking-tighter mb-2 font-black italic"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.15, delay: 0.1 }}
          >
            — FREQUENTLY ASKED QUESTIONS —
          </motion.p>
          <motion.h2 
            className="font-condensed font-black italic text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-3 md:mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              HAVE QUESTIONS?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white/80 text-xs sm:text-sm md:text-base max-w-3xl mx-auto font-condensed font-bold italic uppercase text-center px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.1, delay: 0.5 }}
          >
            FIND ANSWERS TO COMMON QUESTIONS ABOUT OUR SERVICES AND EXPERTISE
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.15, delay: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.1, delay: 0.7 + (index * 0.1) }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:border-primary/40 transition-all duration-150 text-left overflow-hidden relative group"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                
                <div className="relative z-10 flex items-start justify-between gap-2 sm:gap-4">
                  <motion.h3 
                    className="font-condensed font-black italic text-xs sm:text-sm md:text-lg lg:text-xl text-white pr-6 sm:pr-8 flex-1 group-hover:text-primary transition-colors duration-150 leading-tight"
                  >
                    {faq.question}
                  </motion.h3>
                  
                  <motion.div
                    className="flex-shrink-0 text-primary"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </motion.div>
                </div>

                {/* Hover Effect Line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-150"
                />
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="bg-black/60 backdrop-blur-sm border border-white/10 border-t-0 rounded-b-lg sm:rounded-b-xl p-3 sm:p-4 md:p-6 mt-1">
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                        className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed font-roboto"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-8 sm:mt-10 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.1, delay: 1.8 }}
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
          >
            <motion.a
              href="tel:12345678910"
              className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-white font-condensed font-black italic text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 transition-all duration-150 transform hover:scale-105 shadow-2xl shadow-primary/50 border-2 border-primary/30 hover:border-primary/60 tracking-tight rounded-xl sm:rounded-2xl overflow-hidden"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-100" />
              
              {/* Button Content */}
              <motion.div className="relative z-10 flex items-center gap-1 sm:gap-2">
                <motion.div 
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-center">STILL HAVE QUESTIONS? CALL US NOW</span>
                <motion.div 
                  className="w-0 h-0 border-l-3 border-l-transparent border-r-3 border-r-transparent border-t-3 border-t-white group-hover:rotate-12 transition-transform duration-150"
                />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

