import { Header } from "@/components/shared/header";
import { MobileStickyButton, DesktopFloatingButton } from "@/components/shared/mobile-sticky-button";
import { HeroSection } from "@/components/sections/hero-section";
import { USPSection } from "@/components/sections/usp-section";
import { WhyIndoorSection } from "@/components/sections/why-indoor-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { NewbieSection } from "@/components/sections/newbie-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero - First impression & main CTA */}
        <HeroSection />
        
        {/* USP - Quick value propositions */}
        <USPSection />
        
        {/* Why Indoor - Pain point solver (key conversion driver) */}
        <WhyIndoorSection />
        
        {/* How It Works - Reduce friction, show easy booking */}
        <HowItWorksSection />
        
        {/* Amenities - Detailed facilities */}
        <AmenitiesSection />
        
        {/* Newbie Section - Capture beginners (expand audience) */}
        <NewbieSection />
        
        {/* Gallery - Visual social proof */}
        <GallerySection />
        
        {/* Testimonials - Trust & credibility */}
        <TestimonialsSection />
        
        {/* Pricing - Final decision point */}
        <PricingSection />
      </main>
      <FooterSection />
      
      {/* Sticky CTAs for conversion */}
      <MobileStickyButton />
      <DesktopFloatingButton />
    </>
  );
}
