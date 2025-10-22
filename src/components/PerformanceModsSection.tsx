"use client";

import { useState } from "react";
import { FaTools } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Component as RotatingButton } from "@/components/ui/button-rotate";

export function PerformanceModsSection() {
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("ENGINE");

  const services = [
    {
      id: "ENGINE",
      title: "ENGINE",
      icon: "/svg/performance-hero.svg",
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
      icon: "/svg/steering.svg",
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
      icon: "/svg/exaust.svg",
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
      icon: "/svg/alignments.svg",
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
    <section id="performance" className="relative h-[700px] bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/motor1.png)',
          filter: 'blur(2px) brightness(0.3)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full flex justify-between items-center">
          {/* Text Content */}
          <div className="text-left pl-20 flex-1">
            <div className="space-y-6">
              {/* Main Headlines */}
              <div>
                <h1 className="text-8xl md:text-9xl font-black text-yellow-400 font-condensed italic uppercase -mb-4 tracking-tighter">
                  PERFORMANCE
                </h1>
                <h1 className="text-8xl md:text-9xl font-black text-yellow-400 font-condensed italic uppercase -mb-4 tracking-tighter">
                  MODS
                </h1>
                <h2 className="text-6xl md:text-7xl font-black text-white font-condensed italic uppercase tracking-tight -mb-2">
                  MAKE 'EM SELL IT
          </h2>
        </div>

              {/* Description */}
              <p className="text-white text-sm md:text-base font-black italic uppercase max-w-2xl leading-tight">
                WE CAN BRING YOUR CAR FROM SLOW TO "WHOA!" WITH ANY COMBO OF BOLT-ONS AND TUNES WE CAN HELP SOURCE AND INSTALL.
              </p>
            </div>
          </div>

          {/* Start Here Button - Right Side */}
          <div className="flex justify-end pr-20">
            <div onClick={() => setIsButtonOpen(true)} className="cursor-pointer">
              <RotatingButton />
            </div>
          </div>

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
            transition={{ duration: 0.3, ease: "easeOut" }}
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
              transition={{ delay: 0.2, duration: 0.4 }}
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
                    transition={{ delay: 0.4, duration: 0.3 }}
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
                        transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
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
                transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
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
                          transition={{ delay: 0.6, duration: 0.3 }}
                        >
                          <h2 className="font-condensed font-black italic text-4xl text-black uppercase tracking-tight mr-4">
                            {currentService.title}
                          </h2>
                          <motion.div 
                            className="w-8 h-8 flex items-center justify-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
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
                                transition={{ delay: 0.7 + (index * 0.05), duration: 0.3 }}
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
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    {(() => {
                      const currentService = services.find(s => s.id === selectedService);
                      return currentService ? (
                        <motion.p 
                          className="text-black text-base leading-relaxed font-bold tracking-tight uppercase"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.9, duration: 0.3 }}
                        >
                          {currentService.content.description}
                        </motion.p>
                      ) : null;
                    })()}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.a 
                    href="tel:12033454647"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-condensed font-black italic text-lg uppercase py-4 px-4 text-center"
                    initial={{ y: 30, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.4, ease: "easeOut" }}
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
