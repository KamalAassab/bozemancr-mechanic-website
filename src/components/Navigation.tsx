"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "ABOUT", icon: null },
    { href: "mailto:info@bozemancr.com", label: "EMAIL US", icon: Mail },
    { href: "#location", label: "LOCATION", icon: MapPin },
  ];

  const servicesItems = [
    { href: "#performance", label: "Performance Mods", icon: "/svg/performance-hero.svg" },
    { href: "#fabrication", label: "Custom Fab", icon: "/svg/custom-fab.svg" },
    { href: "#maintenance", label: "Maintenance", icon: "/svg/oil.svg" },
    { href: "#repairs", label: "Repairs", icon: "/svg/repair.svg" },
    { href: "#more", label: "More", icon: "/svg/more.svg" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Professional Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-5xl font-black font-condensed transition-all duration-300 group-hover:scale-105">
              <span className="text-primary italic drop-shadow-lg">BOZEMAN</span>
              <span className="text-white italic group-hover:text-primary transition-colors duration-300">CR</span>
            </div>
            <div className="ml-3 w-1.5 h-8 bg-gradient-to-b from-primary via-primary/60 to-transparent group-hover:from-primary/80 group-hover:via-primary/40 group-hover:to-transparent transition-all duration-300"></div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-3 text-white/80 hover:text-primary font-condensed font-bold italic text-2xl transition-colors duration-200 hover:scale-105 transform"
              >
                SERVICES
                <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
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
                          className="flex items-center px-6 py-4 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-primary/30 hover:via-primary/20 hover:to-transparent font-condensed font-black italic text-lg transition-all duration-300 group border-l-4 border-transparent hover:border-primary relative overflow-hidden"
                          style={{ animationDelay: `${index * 40}ms` }}
                        >
                          {/* Aggressive background effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Icon - Clean */}
                          <div className="relative w-12 h-12 flex items-center justify-center mr-5 group-hover:scale-110 transition-all duration-300">
                            <Image 
                              src={item.icon} 
                              alt={item.label}
                              width={32}
                              height={32}
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
                  className="flex items-center gap-3 text-white/80 hover:text-primary font-condensed font-bold italic text-2xl transition-colors duration-200 hover:scale-105 transform"
                >
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                  {item.label}
                </a>
              );
            })}
            <a
              href="tel:12033454647"
              className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-condensed font-bold italic text-2xl px-8 py-4 transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              CALL NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {/* Services Section */}
                <div>
                  <div className="text-white/80 font-condensed font-bold italic text-3xl mb-4">SERVICES</div>
                  <div className="ml-4 space-y-2">
                    {servicesItems.map((item) => {
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-4 text-white/70 hover:text-primary font-condensed font-bold italic text-2xl transition-colors duration-200 group"
                        >
                          <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                            <Image 
                              src={item.icon} 
                              alt={item.label}
                              width={28}
                              height={28}
                              className="transition-all duration-300"
                            />
                          </div>
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Other Navigation Items */}
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 text-white/80 hover:text-primary font-condensed font-bold italic text-2xl transition-colors duration-200"
                    >
                      {IconComponent && <IconComponent className="w-8 h-8" />}
                      {item.label}
                    </a>
                  );
                })}
                <a
                  href="tel:12033454647"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-condensed font-bold italic text-2xl px-8 py-5 transition-all duration-200 transform hover:scale-105 mt-4"
                >
                  <Phone className="w-8 h-8" />
                  CALL NOW
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}