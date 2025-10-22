import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AdditionalServices } from "@/components/AdditionalServices";
import { DazaSwapSection } from "@/components/DazaSwapSection";
import { PartnersSection } from "@/components/PartnersSection";
import { PerformanceModsSection } from "@/components/PerformanceModsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TeamSection } from "@/components/TeamSection";
import { FabricationSection } from "@/components/FabricationSection";
import { ContactSection } from "@/components/ContactSection";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Component as BackgroundSnippets } from "@/components/background-snippets";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Background for all sections from Additional Services to Footer */}
      <div className="relative">
        {/* New Background Component */}
        <BackgroundSnippets />
        
        {/* All sections with transparent backgrounds */}
        <AdditionalServices />
        <DazaSwapSection />
        <PartnersSection />
        <PerformanceModsSection />
        <TestimonialsSection />
        <TeamSection />
        <FabricationSection />
        <ContactSection />
        <InstagramSection />
      </div>
      
      {/* Footer without sticky background */}
      <Footer />
      
      <ScrollToTop />
    </div>
  );
}
