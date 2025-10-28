"use client";

import { useState, useRef } from "react";
import { WrenchIcon, Activity as ActivityIcon } from "lucide-react";
import { ServiceModal } from "./ServiceModal";
import { motion, useInView } from "framer-motion";

export function AdditionalServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [selectedService, setSelectedService] = useState<{
    title: string;
    subtitle: string;
    description: string;
    image: string;
    ctaText: string;
    ctaAction: string;
  } | null>(null);

  const services = {
    maintenance: {
      title: "PURE PERFORMANCE...",
      subtitle: "Precision maintenance for peak efficiency.",
      description: "Ready to optimize?",
      image: "/images/vehicles/car-maintenance.jpg",
      ctaText: "MAINTENANCE NOW!",
      ctaAction: "tel:12345678910"
    },
    repairs: {
      title: "DIAGNOSTIC MASTERY...",
      subtitle: "Expert diagnostics & precision repairs.",
      description: "Ready to fix it?",
      image: "/images/vehicles/car-repair.jpg",
      ctaText: "FIX IT NOW!",
      ctaAction: "tel:12345678910"
    }
  };

  const handleCardClick = (serviceType: 'maintenance' | 'repairs') => {
    // Professional card click animation
    const card = document.querySelector(`[data-service="${serviceType}"]`);
    if (card) {
      // Add professional click effects
      card.classList.add('animate-pulse', 'scale-95', 'rotate-2', 'skew-x-2');
      
      // Add professional glow effect
      const glowEffect = document.createElement('div');
      glowEffect.className = 'absolute inset-0 bg-primary/30 rounded-lg opacity-0 animate-ping';
      glowEffect.style.animation = 'ping 0.6s cubic-bezier(0, 0, 0.2, 1)';
      card.appendChild(glowEffect);
      
      // Professional delay before opening modal
      setTimeout(() => {
        card.classList.remove('animate-pulse', 'scale-95', 'rotate-2', 'skew-x-2');
        if (glowEffect.parentNode) {
          glowEffect.parentNode.removeChild(glowEffect);
        }
        setSelectedService(services[serviceType]);
      }, 400);
    } else {
      setSelectedService(services[serviceType]);
    }
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section ref={ref} id="additional-services" className="relative py-8 sm:py-20 z-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2 
            className="font-condensed font-black italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl -mb-2 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, delay: 0.2 }}
          >
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.15, delay: 0.4 }}
            >
              ADDITIONAL SERVICES
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-white text-sm sm:text-lg md:text-2xl lg:text-3xl font-black italic uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.15, delay: 0.6 }}
          >
            OUR CERTIFIED MECHANICS ARE HERE TO HELP!
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Maintenance Card */}
          <motion.div 
            data-service="maintenance"
            className="group relative bg-black border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden transform hover:scale-105 hover:rotate-1 hover:skew-x-1 cursor-pointer card-no-glow"
            onClick={() => handleCardClick('maintenance')}
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.15, delay: 1.0 }}
            whileHover={{ 
              scale: 1.05, 
              rotate: 1,
              y: -5,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex h-36 sm:h-48">
              {/* Left Half - Image */}
              <div className="w-2/5 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale"
              style={{
                    backgroundImage: 'url(/images/vehicles/car-maintenance.jpg)',
                    filter: 'grayscale(100%) brightness(0.6) contrast(1.2)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                
                {/* Aggressive Racing Stripes */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
                
              </div>
              
              {/* Right Half - Content */}
              <div className="w-3/5 bg-gradient-to-br from-black via-black/95 to-black/90 p-3 sm:p-6 flex flex-col justify-center relative">
                {/* Aggressive Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-2 sm:gap-4 mb-1 sm:mb-2">
                    <ActivityIcon className="w-5 h-5 sm:w-8 sm:h-8 text-primary group-hover:text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                    <h3 className="font-condensed font-black text-lg sm:text-3xl text-white uppercase tracking-tight group-hover:text-primary transition-all duration-500">
                      MAINTENANCE
                    </h3>
                  </div>
                  
                  <p className="text-white text-xs sm:text-base mb-1 sm:mb-2 italic font-black uppercase tracking-wide group-hover:text-primary group-hover:scale-105 group-hover:skew-x-2 transition-all duration-500">
                    10 CC's of fluids STAT!
                  </p>
                  
                  <p className="text-white/90 text-xs leading-tight font-medium group-hover:text-white group-hover:scale-102 transition-all duration-500">
                    We can perform any and every type of oil and fluid service to keep your car running right.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Repairs Card */}
          <motion.div 
            data-service="repairs"
            className="group relative bg-black border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-rotate-1 hover:-skew-x-1 cursor-pointer card-no-glow"
            onClick={() => handleCardClick('repairs')}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.15, delay: 1.2 }}
            whileHover={{ 
              scale: 1.05, 
              rotate: -1,
              y: -5,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex h-36 sm:h-48">
              {/* Left Half - Image */}
              <div className="w-2/5 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale"
              style={{
                    backgroundImage: 'url(/images/vehicles/car-repair.jpg)',
                    filter: 'grayscale(100%) brightness(0.6) contrast(1.2)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                
                {/* Aggressive Racing Stripes */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
                
              </div>
              
              {/* Right Half - Content */}
              <div className="w-3/5 bg-gradient-to-br from-black via-black/95 to-black/90 p-3 sm:p-6 flex flex-col justify-center relative">
                {/* Aggressive Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-2 sm:gap-4 mb-1 sm:mb-2">
                    <WrenchIcon className="w-5 h-5 sm:w-8 sm:h-8 text-primary group-hover:text-white group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500" />
                    <h3 className="font-condensed font-black text-lg sm:text-3xl text-white uppercase tracking-tight group-hover:text-primary transition-all duration-500">
                      REPAIRS
                    </h3>
                  </div>
                  
                  <p className="text-white text-xs sm:text-base mb-1 sm:mb-2 italic font-black uppercase tracking-wide group-hover:text-primary group-hover:scale-105 group-hover:-skew-x-2 transition-all duration-500">
                    Prognosis Positive!
                  </p>
                  
                  <p className="text-white/90 text-xs leading-tight font-medium group-hover:text-white group-hover:scale-102 transition-all duration-500">
                    Our staff of certified mechanics can diagnose any issue, walk you through the issue and provide a quote.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Service Icons Grid */}
        <motion.div 
          id="service-icons"
          className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <ServiceIcon 
            icon={<img src="/icons/diagnostic.svg" alt="Computer Diagnostics" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Complete Computer Diagnostics" 
          />
          <ServiceIcon 
            icon={<img src="/icons/safety.svg" alt="Safety Analysis" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Complete Safety Analysis" 
          />
          <ServiceIcon 
            icon={<img src="/icons/problems.svg" alt="Drivability Problems" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Drivability Problems" 
          />
          <ServiceIcon 
            icon={<img src="/icons/performance.svg" alt="Performance Tunes" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Performance Tunes" 
          />
          <ServiceIcon 
            icon={<img src="/icons/carbon.svg" alt="Carbon Cleaning" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Carbon Cleaning" 
          />
          <ServiceIcon 
            icon={<img src="/icons/oil.svg" alt="Oil Changes" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Oil Changes" 
          />
          <ServiceIcon 
            icon={<img src="/icons/tire.svg" alt="Tire Services" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Tire Mounting & Rotation" 
          />
          <ServiceIcon 
            icon={<img src="/icons/brake.svg" alt="Brake Services" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Brake Pads and Rotors" 
          />
          <ServiceIcon 
            icon={<img src="/icons/steering.svg" alt="Steering Services" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Steering and Suspensions" 
          />
          <ServiceIcon 
            icon={<img src="/icons/alignments.svg" alt="Alignments" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Alignments" 
          />
          <ServiceIcon 
            icon={<img src="/icons/exaust.svg" alt="Exhaust Services" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="Mufflers and Exhaust Systems" 
          />
          <ServiceIcon 
            icon={<img src="/icons/more.svg" alt="More Services" className="w-12 h-12 sm:w-16 sm:h-16" />} 
            label="And Much More!" 
          />
        </motion.div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
    </section>
  );
}

function ServiceIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ 
        scale: 1.1, 
        y: -5,
        transition: { duration: 0.15 }
      }}
    >
      <motion.div 
        className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center mb-2 sm:mb-3 transition-all duration-200 group-hover:scale-110"
        whileHover={{ 
          rotate: 5, 
          scale: 1.2,
          transition: { duration: 0.15 }
        }}
      >
        <div className="text-primary">{icon}</div>
      </motion.div>
      <motion.p 
        className="text-white/70 text-xs sm:text-sm italic font-bold leading-tight"
        whileHover={{ 
          scale: 1.05,
          color: "rgb(255 0 54)",
          transition: { duration: 0.15 }
        }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}
