"use client";

import { useState, useRef } from "react";
import { FaTools } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Component as RotatingButton } from "@/components/ui/button-rotate";

export function PerformanceModsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("ENGINE");

  const services = [
    {
      id: "ENGINE",
      title: "ENGINE",
      icon: "/icons/performance-hero.svg",
      content: {
        title: "Engine Performance",
      description: "We can handle everything from tune-ups to full engine builds that can handle plenty of boost and produce serious power. Let us know what your goals are!",
        features: [
        "ECU Tunes (OTS + Custom)",
        "Pistons & Bearings",
        "Rods",
        "Sleeved Blocks",
        "Ported Heads",
        "Valves & Springs",
          "Fueling: Pumps + Injectors",
        "Coil Packs",
        "Spark Plugs",
          "Batteries: OEM + Light-Weight",
        "VCDS Coding",
          "And MOAR!"
        ]
      }
    },
    {
      id: "TRANSMISSION",
      title: "TRANSMISSION", 
      icon: "/icons/steering.svg",
      content: {
        title: "Transmission Performance",
        description: "A key component to putting all that power to the ground is your transmission. We can upgrade your clutches to handle the brutal power your throwing at it and make sure your not leaving anything on the table.",
        features: [
        "TCU Tunes (OTS + Custom)",
        "Manual Clutch Upgrades",
        "DCT / DSG Clutch Packs",
        "Flywheels",
        "Short Shifters",
        "Haldex Controllers and Tunes",
          "DCT / DSG Re-learn Procedures"
        ]
      }
    },
    {
      id: "AIR FLOW",
      title: "AIR FLOW",
      icon: "/icons/exaust.svg",
      content: {
        title: "Air Flow Systems",
      description: "Breathe new life into your motor by upgrading its airflow. We can fabricate or install any kind of intake and exhaust to keep your motor and turbo humming along with minimal effort.",
        features: [
        "Turbos & Superchargers",
        "Intake Manifolds",
        "Air Intakes (OTS & Custom)",
        "Intercoolers (OTS & Custom)",
        "Intercooler Charge Piping (OTS & Custom)",
        "Downpipes (OTS & Custom)",
        "Cat-back Exhausts (OTS & Custom)",
        "Resonators",
          "Catalytic Converters"
        ]
      }
    },
    {
      id: "SUSPENSION",
      title: "SUSPENSION",
      icon: "/icons/alignments.svg",
      content: {
        title: "Suspension & Handling",
      description: "We can get your car dialed in for street, track, or comfort with a wide array of suspension mods and the right alignment to keep your car handling great!",
        features: [
        "Shocks & Struts",
        "Springs",
        "Coilovers",
        "Front & Rear Sway bars & End Links",
        "Camber Plates",
        "Control Arms",
        "Roll Center/Camber Ball Joints",
        "Dead Set Subframe Bolt Kits",
        "Dogbone Inserts",
          "Pedulum Mounts",
        "Engine Mounts",
        "Trans Mounts",
        "Tire Mounting + Balancing",
          "Bushing Replacements"
        ]
      }
    }
  ];

  return (
    <section ref={ref} id="performance" className="relative min-h-[400px] sm:h-[500px] md:h-[600px] bg-transparent overflow-hidden z-20">

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-8">
          {/* Text Content */}
          <motion.div 
            className="text-left lg:pl-20 flex-1 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-4 sm:space-y-6">
              {/* Main Headlines */}
              <motion.div 
                className="pt-4 md:pt-0"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.15, delay: 0.1 }}
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-yellow-400 font-condensed italic uppercase -mb-2 sm:-mb-4 tracking-tighter whitespace-nowrap sm:whitespace-normal mt-8 sm:mt-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.15, delay: 0.2 }}
                >
                  <span>PERFORMANCE</span>
                  <span className="sm:block lg:block"> MODS</span>
                </motion.h1>
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-condensed italic uppercase tracking-tight -mb-2"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.15, delay: 0.4 }}
                >
                  MAKE 'EM SELL IT
                </motion.h2>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-white text-xs sm:text-sm md:text-base font-black italic uppercase max-w-2xl leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.15, delay: 0.5 }}
              >
                WE CAN BRING YOUR CAR FROM SLOW TO "WHOA!" WITH ANY COMBO OF BOLT-ONS AND TUNES WE CAN HELP SOURCE AND INSTALL.
              </motion.p>
            </div>
          </motion.div>

          {/* Performance Cards - Mobile Only */}
          <motion.div 
            className="flex flex-col space-y-4 md:hidden w-full -mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-black/90 border-2 border-primary/40 rounded-lg p-4 group"
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
                transition={{ duration: 0.15, delay: 0.7 + (index * 0.2) }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.15 }
                }}
              >
                {/* Card Header */}
                <motion.div 
                  className="flex items-center justify-between mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 1.6 + (index * 0.2) }}
                >
                  <motion.h3 
                    className="text-white font-condensed font-black italic text-xl uppercase tracking-tight"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.div 
                    className="w-8 h-8 flex items-center justify-center bg-primary/20 rounded-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Image 
                      src={service.icon} 
                      alt={service.title}
                      width={24}
                      height={24}
                      className="text-primary"
                    />
                  </motion.div>
                </motion.div>
                
                {/* Card Body - All Features List */}
                <motion.div 
                  className="grid grid-cols-2 gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 1.8 + (index * 0.2) }}
                >
                  {service.content.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-center py-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.15, delay: 2.0 + (index * 0.2) + (featureIndex * 0.05) }}
                    >
                      <motion.div 
                        className="w-3 h-3 bg-primary rounded-full mr-2 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <span className="text-black font-bold text-xs">✓</span>
                      </motion.div>
                      <motion.span 
                        className="text-white/80 text-xs font-bold italic leading-tight"
                        whileHover={{ scale: 1.02, color: "rgb(255 0 54)" }}
                      >
                        {feature}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Start Here Button - Desktop Only */}
          <motion.div 
            className="hidden md:flex justify-center lg:justify-end lg:pr-20 m-0 md:m-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.15, delay: 0.6 }}
          >
            <motion.div 
              onClick={() => setIsButtonOpen(true)} 
              className="cursor-pointer scale-75 sm:scale-90 lg:scale-100 m-0"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotatingButton />
            </motion.div>
          </motion.div>

        </div>
            </div>

      {/* Performance Services Modal */}
      <AnimatePresence>
        {isButtonOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onClick={() => setIsButtonOpen(false)}
          >
            <motion.div 
              className="relative w-full max-w-4xl mx-4 bg-white overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            <motion.button
              onClick={() => setIsButtonOpen(false)}
              className="absolute top-6 right-6 z-10 w-16 h-16 flex items-center justify-center text-black"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <FaTools className="w-10 h-10" />
            </motion.button>

            <motion.div 
              className="flex flex-col lg:flex-row h-auto lg:h-[80vh] max-h-[600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {/* Left Column - Navigation */}
              <motion.div 
                className="w-full lg:w-1/3 relative bg-black border-8 border-white"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
              >
                <div className="p-6 h-full flex flex-col">
                  <motion.h3 
                    className="font-condensed font-black italic text-2xl text-yellow-400 uppercase tracking-tight mb-6 leading-tight text-center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.15 }}
                  >
                    We can source and install a large selection of mods for your car
                  </motion.h3>
                  <div className="space-y-1">
                    {services.map((service, index) => (
                      <motion.button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`w-full text-left p-4 transition-all duration-300 font-bold text-lg border-l-4 ${
                          selectedService === service.id
                            ? "bg-yellow-400 text-black border-l-yellow-400"
                            : "text-white border-l-transparent hover:border-l-yellow-400 hover:bg-yellow-400/10"
                        }`}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + (index * 0.1), duration: 0.15 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {service.title}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Middle Column - Service Details */}
              <motion.div 
                className="w-full lg:w-1/3 bg-white border-8 border-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              >
                <div className="p-8 h-full flex flex-col">
                  {(() => {
                    const currentService = services.find(s => s.id === selectedService);
                    return currentService ? (
                      <>
                        {/* Service Title with Icon */}
                        <motion.div 
                          className="flex items-center mb-6"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.15 }}
                        >
                          <h2 className="font-condensed font-black italic text-4xl text-black uppercase tracking-tight mr-4">
                            {currentService.title}
                          </h2>
                          <motion.div 
                            className="w-8 h-8 flex items-center justify-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.15 }}
                          >
                            <Image 
                              src={currentService.icon} 
                              alt={currentService.title}
                              width={32}
                              height={32}
                            />
                          </motion.div>
                        </motion.div>

                        {/* Features List */}
                        <div className="flex-1">
                          <div className="grid grid-cols-1 gap-0.5">
                            {currentService.content.features.map((feature, index) => (
                              <motion.div 
                                key={index} 
                                className="flex items-center py-0.5"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7 + (index * 0.05), duration: 0.15 }}
                                whileHover={{ x: 5, scale: 1.02 }}
                              >
                                <motion.div 
                                  className="w-4 h-4 bg-yellow-400 rounded-full mr-3 flex items-center justify-center"
                                  whileHover={{ scale: 1.2, rotate: 180 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <span className="text-black font-bold text-xs">✓</span>
                                </motion.div>
                                <span className="text-black text-sm font-bold italic">{feature}</span>
                              </motion.div>
                            ))}
            </div>
          </div>
                      </>
                    ) : null;
                  })()}
        </div>
              </motion.div>

              {/* Right Column - Description & CTA */}
              <motion.div 
                className="w-full lg:w-1/3 bg-gray-100 border-8 border-white relative"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  {/* Description */}
                  <motion.div 
                    className="flex-1 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    {(() => {
                      const currentService = services.find(s => s.id === selectedService);
                      return currentService ? (
                        <motion.p 
                          className="text-black text-base leading-relaxed font-bold tracking-tight uppercase"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.9, duration: 0.15 }}
                        >
                          {currentService.content.description}
                        </motion.p>
                      ) : null;
                    })()}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.a 
                    href="tel:12345678910"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-condensed font-black italic text-lg uppercase py-4 px-4 text-center"
                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Free Quotes! Call Now
                  </motion.a>
      </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
