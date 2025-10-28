import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AdditionalServices } from "@/components/AdditionalServices";
import { GallerySection } from "@/components/GallerySection";
import { PartnersSection } from "@/components/PartnersSection";
import { PerformanceModsSection } from "@/components/PerformanceModsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalBackground } from "@/components/GlobalBackground";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Global Fixed Background */}
      <GlobalBackground />
      
      <Navigation />
      <HeroSection />
      
      {/* All sections with global background */}
      <AdditionalServices />
      <GallerySection />
      <PartnersSection />
      <PerformanceModsSection />
      <AboutSection />
      <ContactSection />
      <InstagramSection />
      
      {/* Footer with global background */}
      <Footer />
      
      <ScrollToTop />
    </div>
  );
}
