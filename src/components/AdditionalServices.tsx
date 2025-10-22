"use client";

import { useState } from "react";
import { WrenchIcon, Activity as ActivityIcon } from "lucide-react";
import { ServiceModal } from "./ServiceModal";

export function AdditionalServices() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    subtitle: string;
    description: string;
    image: string;
    ctaText: string;
  } | null>(null);

  const services = {
    maintenance: {
      title: "PURE PERFORMANCE...",
      subtitle: "Precision maintenance for peak efficiency.",
      description: "Ready to optimize?",
      image: "/car-maintenance.jpg",
      ctaText: "MAINTENANCE NOW!",
      ctaAction: "tel:12033454647"
    },
    repairs: {
      title: "DIAGNOSTIC MASTERY...",
      subtitle: "Expert diagnostics & precision repairs.",
      description: "Ready to fix it?",
      image: "/car-repair.jpg",
      ctaText: "FIX IT NOW!",
      ctaAction: "tel:12033454647"
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
    <section id="additional-services" className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-condensed font-black italic text-6xl md:text-7xl -mb-2">
            <span className="text-primary">ADDITIONAL SERVICES</span>
          </h2>
          <p className="text-white text-2xl md:text-3xl font-black italic uppercase">
            OUR CERTIFIED MECHANICS ARE HERE TO HELP!
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto mb-16">
          {/* Maintenance Card */}
          <div 
            data-service="maintenance"
            className="group relative bg-black border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden transform hover:scale-105 hover:rotate-1 hover:skew-x-1 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:shadow-3xl cursor-pointer"
            onClick={() => handleCardClick('maintenance')}
          >
            <div className="flex h-64">
              {/* Left Half - Image */}
              <div className="w-1/2 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale"
              style={{
                    backgroundImage: 'url(/car-maintenance.jpg)',
                    filter: 'grayscale(100%) brightness(0.6) contrast(1.2)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                
                {/* Aggressive Racing Stripes */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
                
              </div>
              
              {/* Right Half - Content */}
              <div className="w-1/2 bg-gradient-to-br from-black via-black/95 to-black/90 p-6 flex flex-col justify-center relative">
                {/* Aggressive Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-4 mb-2">
                    <ActivityIcon className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-2xl" />
                    <h3 className="font-condensed font-black text-3xl text-white uppercase tracking-wider group-hover:tracking-widest group-hover:text-primary transition-all duration-500 drop-shadow-2xl group-hover:drop-shadow-primary/50">
                      MAINTENANCE
                    </h3>
                  </div>
                  
                  <p className="text-white text-base mb-2 italic font-black uppercase tracking-wide group-hover:text-primary group-hover:scale-105 group-hover:skew-x-2 transition-all duration-500">
                    10 CC's of fluids STAT!
                  </p>
                  
                  <p className="text-white/90 text-xs leading-tight font-medium group-hover:text-white group-hover:scale-102 transition-all duration-500">
                    We can perform any and every type of oil and fluid service to keep your car running right.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Repairs Card */}
          <div 
            data-service="repairs"
            className="group relative bg-black border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-rotate-1 hover:-skew-x-1 shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:shadow-3xl cursor-pointer"
            onClick={() => handleCardClick('repairs')}
          >
            <div className="flex h-64">
              {/* Left Half - Image */}
              <div className="w-1/2 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale"
              style={{
                    backgroundImage: 'url(/car-repair.jpg)',
                    filter: 'grayscale(100%) brightness(0.6) contrast(1.2)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                
                {/* Aggressive Racing Stripes */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
                
              </div>
              
              {/* Right Half - Content */}
              <div className="w-1/2 bg-gradient-to-br from-black via-black/95 to-black/90 p-6 flex flex-col justify-center relative">
                {/* Aggressive Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Title with Icon */}
                  <div className="flex items-center gap-4 mb-2">
                    <WrenchIcon className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-2xl" />
                    <h3 className="font-condensed font-black text-3xl text-white uppercase tracking-wider group-hover:tracking-widest group-hover:text-primary transition-all duration-500 drop-shadow-2xl group-hover:drop-shadow-primary/50">
                      REPAIRS
                    </h3>
                  </div>
                  
                  <p className="text-white text-base mb-2 italic font-black uppercase tracking-wide group-hover:text-primary group-hover:scale-105 group-hover:-skew-x-2 transition-all duration-500">
                    Prognosis Positive!
                  </p>
                  
                  <p className="text-white/90 text-xs leading-tight font-medium group-hover:text-white group-hover:scale-102 transition-all duration-500">
                    Our staff of certified mechanics can diagnose any issue, walk you through the issue and provide a quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          <ServiceIcon 
            icon={<img src="/svg/diagnostic.svg" alt="Computer Diagnostics" className="w-16 h-16" />} 
            label="Complete Computer Diagnostics" 
          />
          <ServiceIcon 
            icon={<img src="/svg/safety.svg" alt="Safety Analysis" className="w-16 h-16" />} 
            label="Complete Safety Analysis" 
          />
          <ServiceIcon 
            icon={<img src="/svg/problems.svg" alt="Drivability Problems" className="w-16 h-16" />} 
            label="Drivability Problems" 
          />
          <ServiceIcon 
            icon={<img src="/svg/performance.svg" alt="Performance Tunes" className="w-16 h-16" />} 
            label="Performance Tunes" 
          />
          <ServiceIcon 
            icon={<img src="/svg/carbon.svg" alt="Carbon Cleaning" className="w-16 h-16" />} 
            label="Carbon Cleaning" 
          />
          <ServiceIcon 
            icon={<img src="/svg/oil.svg" alt="Oil Changes" className="w-16 h-16" />} 
            label="Oil Changes" 
          />
          <ServiceIcon 
            icon={<img src="/svg/tire.svg" alt="Tire Services" className="w-16 h-16" />} 
            label="Tire Mounting & Rotation" 
          />
          <ServiceIcon 
            icon={<img src="/svg/brake.svg" alt="Brake Services" className="w-16 h-16" />} 
            label="Brake Pads and Rotors" 
          />
          <ServiceIcon 
            icon={<img src="/svg/steering.svg" alt="Steering Services" className="w-16 h-16" />} 
            label="Steering and Suspensions" 
          />
          <ServiceIcon 
            icon={<img src="/svg/alignments.svg" alt="Alignments" className="w-16 h-16" />} 
            label="Alignments" 
          />
          <ServiceIcon 
            icon={<img src="/svg/exaust.svg" alt="Exhaust Services" className="w-16 h-16" />} 
            label="Mufflers and Exhaust Systems" 
          />
          <ServiceIcon 
            icon={<img src="/svg/more.svg" alt="More Services" className="w-16 h-16" />} 
            label="And Much More!" 
          />
        </div>
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
    <div className="flex flex-col items-center text-center group">
      <div className="w-20 h-20 flex items-center justify-center mb-3 transition-all duration-200 group-hover:scale-110">
        <div className="text-primary">{icon}</div>
      </div>
      <p className="text-white/70 text-sm italic font-bold leading-tight">{label}</p>
    </div>
  );
}
