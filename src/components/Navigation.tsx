"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "ABOUT", icon: null },
                    { href: "mailto:kamalaassab2002@gmail.com", label: "EMAIL US", icon: Mail },
    { href: "#location", label: "LOCATION", icon: MapPin },
  ];

  const servicesItems = [
    { href: "#performance", label: "Performance Mods", icon: "/icons/performance-hero.svg" },
    { href: "#additional-services", label: "Maintenance", icon: "/icons/oil.svg" },
    { href: "#additional-services", label: "Repairs", icon: "/icons/repair.svg" },
    { href: "#additional-services", label: "More", icon: "/icons/more.svg", isMore: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10"
          : "bg-black/20 backdrop-blur-sm lg:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Professional Logo */}
          <button 
            onClick={() => {
              document.getElementById('hero')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="flex items-center group cursor-pointer"
          >
            {/* Mobile Logo */}
            <Image
              src="/assets/bozemancr-logo-mobile.png"
              alt="BozemanCR Logo"
              width={150}
              height={48}
              className="transition-all duration-300 group-hover:scale-105 md:hidden -ml-2"
            />
            {/* Desktop Logo */}
            <Image
              src="/assets/bozemancr-logo.png"
              alt="BozemanCR Logo"
              width={180}
              height={58}
              className="transition-all duration-300 group-hover:scale-105 hidden md:block"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-2 text-white/80 hover:text-primary font-condensed font-bold italic text-lg transition-colors duration-200 hover:scale-105 transform"
              >
                SERVICES
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-72 bg-black backdrop-blur-xl border-2 border-primary/50 rounded-lg shadow-2xl shadow-primary/30 z-50 overflow-hidden"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    {servicesItems.map((item, index) => {
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={(e) => {
                            if (item.isMore) {
                              e.preventDefault();
                              document.getElementById('service-icons')?.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'center'
                              });
                            }
                          }}
                          className="flex items-center px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-primary/30 hover:via-primary/20 hover:to-transparent font-condensed font-black italic text-base transition-all duration-300 group border-l-4 border-transparent hover:border-primary relative overflow-hidden"
                          style={{ animationDelay: `${index * 40}ms` }}
                        >
                          {/* Aggressive background effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Icon - Clean */}
                          <div className="relative w-10 h-10 flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300">
                            <Image 
                              src={item.icon} 
                              alt={item.label}
                              width={24}
                              height={24}
                              className="transition-all duration-300"
                            />
                          </div>
                          
                          {/* Text with aggressive styling */}
                          <div className="relative z-10 flex-1">
                            <span className="group-hover:tracking-wider transition-all duration-300">{item.label}</span>
                            {/* Underline effect */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                          </div>
                          
                          {/* Arrow indicator */}
                          <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-transparent group-hover:border-t-primary transition-colors duration-300 ml-2"></div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Items */}
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-white/80 hover:text-primary font-condensed font-bold italic text-lg transition-colors duration-200 hover:scale-105 transform"
                >
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                  {item.label}
                </a>
              );
            })}
            <a
              href="tel:12345678910"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-condensed font-bold italic text-lg px-6 py-3 transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              CALL NOW
            </a>
          </div>

          {/* Mobile Contact Icons & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Contact Icons */}
            <a
              href="tel:12345678910"
              className="text-white hover:text-primary transition-colors duration-200 p-2"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:kamalaassab2002@gmail.com"
              className="text-white hover:text-primary transition-colors duration-200 p-2"
              aria-label="Email Us"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#location"
              className="text-white hover:text-primary transition-colors duration-200 p-2"
              aria-label="Location"
            >
              <MapPin className="w-5 h-5" />
            </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors p-2"
          >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 bg-black border-b border-primary/30 shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div 
                className="container mx-auto px-4 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <motion.div 
                  className="flex flex-col space-y-1 bg-black"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: 0.2 }}
                >
                {/* Services Section */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <motion.button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="group flex items-center justify-between w-full p-2 bg-gradient-to-r from-white/5 via-white/3 to-transparent rounded-md hover:from-primary/10 hover:via-primary/5 hover:to-primary/2 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center gap-2 w-full">
                      <motion.div 
                        className="w-6 h-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Wrench className="w-4 h-4 text-primary" />
                      </motion.div>
                      <motion.span 
                        className="text-white font-condensed font-black italic text-lg tracking-wide text-center group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        SERVICES
                      </motion.span>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div 
                        className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2 }}
                      ></motion.div>
                      <motion.div
                        animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <ChevronDown className="w-4 h-4 text-primary transition-all duration-300 group-hover:scale-110" />
                      </motion.div>
                    </div>
                  </motion.button>
                  
                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div 
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <motion.div 
                          className="bg-black/80 border border-white/10 rounded-md p-1 space-y-0.5 mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.15, delay: 0.1 }}
                        >
                          {servicesItems.map((item, index) => (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                if (item.isMore) {
                                  e.preventDefault();
                                  document.getElementById('service-icons')?.scrollIntoView({ 
                                    behavior: 'smooth',
                                    block: 'center'
                                  });
                                }
                                setIsOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className="group flex items-center gap-2 p-1.5 rounded-md hover:bg-gradient-to-r hover:from-primary/20 hover:via-primary/10 hover:to-transparent transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:shadow-primary/10"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.15, delay: 0.2 + (index * 0.05) }}
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <motion.div 
                                className="w-5 h-5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                                whileHover={{ rotate: 5, scale: 1.1 }}
                              >
                            <Image 
                              src={item.icon} 
                              alt={item.label}
                                  width={16}
                                  height={16}
                              className="transition-all duration-300"
                            />
                              </motion.div>
                              <div className="flex-1 text-left">
                                <motion.span 
                                  className="text-white font-condensed font-bold italic text-base group-hover:text-primary transition-colors duration-300"
                                  whileHover={{ scale: 1.05 }}
                                >
                          {item.label}
                                </motion.span>
                  </div>
                              <motion.div 
                                className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                whileHover={{ scale: 1.2 }}
                              ></motion.div>
                            </motion.a>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* About Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <motion.a
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-2 p-2 bg-gradient-to-r from-white/5 via-white/3 to-transparent border border-white/10 rounded-md hover:from-primary/10 hover:via-primary/5 hover:to-primary/2 hover:border-primary/30 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/10"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center gap-2 w-full">
                      <motion.div 
                        className="w-6 h-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Image 
                          src="/icons/about.svg" 
                          alt="About" 
                          width={16} 
                          height={16} 
                          className="group-hover:scale-110 transition-all duration-300"
                        />
                      </motion.div>
                      <motion.span 
                        className="text-white font-condensed font-black italic text-lg tracking-wide text-center group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        ABOUT US
                      </motion.span>
              </div>
                    <motion.div 
                      className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                  </motion.a>
                </motion.div>

              </motion.div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
}