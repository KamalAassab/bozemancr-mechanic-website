"use client";

import { useState, useEffect } from "react";
import { FaTools } from "react-icons/fa";
import { FaCar, FaWrench, FaCog, FaPhone } from "react-icons/fa";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    ctaText: string;
    ctaAction: string;
  };
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative w-full max-w-4xl mx-4 bg-white overflow-hidden shadow-2xl transform transition-all duration-300 ${
          isClosing ? 'scale-90 opacity-0' : 'scale-95 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 w-16 h-16 flex items-center justify-center text-black transition-all duration-300 hover:scale-110"
        >
          <FaTools className="w-10 h-10" />
        </button>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[400px]">
          {/* Left Half - Image */}
          <div className="w-full lg:w-2/5 relative h-48 sm:h-64 lg:h-full border-4 sm:border-8 border-white">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
          </div>

          {/* Right Half - Content */}
          <div className="w-full lg:w-3/5 p-4 sm:p-6 lg:p-12 flex flex-col justify-center relative">

            {/* Headline */}
            <h2 className="font-condensed font-black italic text-2xl sm:text-3xl lg:text-5xl text-black uppercase leading-[0.9] mb-2 sm:mb-3 tracking-tight">
              {service.title}
            </h2>

            {/* Subheadline */}
            <p className="font-condensed font-black italic text-sm sm:text-lg lg:text-2xl text-gray-600 uppercase leading-relaxed mb-2 sm:mb-4 tracking-tight">
              {service.subtitle}
            </p>

            {/* Body Text */}
            <p className="font-condensed font-black italic text-xs sm:text-sm lg:text-xl text-gray-700 uppercase mb-4 sm:mb-6 tracking-tight">
              {service.description}
            </p>

            {/* CTA Button - Single Button with Icon */}
            <a 
              href={service.ctaAction}
              className="flex w-full max-w-lg bg-black hover:bg-red-600 text-red-600 hover:text-black px-4 sm:px-6 py-3 sm:py-4 font-condensed font-black italic text-lg sm:text-2xl lg:text-3xl uppercase flex items-center justify-center gap-2 sm:gap-4 border-2 border-red-600 hover:border-black transition-all duration-300 hover:scale-105"
            >
              <span>{service.ctaText}</span>
              <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
