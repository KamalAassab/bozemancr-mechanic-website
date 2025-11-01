import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AdditionalServices } from "@/components/AdditionalServices";
import { GallerySection } from "@/components/GallerySection";
import { PartnersSection } from "@/components/PartnersSection";
import { PerformanceModsSection } from "@/components/PerformanceModsSection";
import { AboutSection } from "@/components/AboutSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GlobalBackground } from "@/components/GlobalBackground";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <LocalBusinessJsonLd />
      
      {/* Global Fixed Background */}
      <GlobalBackground />
      
      <Navigation />
      <HeroSection />
      
      {/* All sections with global background - Professional Flow */}
      {/* Services come first - what you offer */}
      <AdditionalServices />
      <PerformanceModsSection />
      
      {/* Trust & Credibility - why choose you */}
      <AboutSection />
      
      {/* Social Proof - build confidence */}
      <GallerySection />
      <PartnersSection />
      <InstagramSection />
      
      {/* Decision Support - address concerns */}
      <FAQSection />
      
      {/* Conversion - make it easy to contact */}
      <ContactSection />
      
      {/* Footer with global background */}
      <Footer />
      
      <ScrollToTop />
    </div>
  );
}
