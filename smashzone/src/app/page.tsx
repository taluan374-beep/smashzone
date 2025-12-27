import { Header } from "@/components/shared/header";
import { MobileStickyButton } from "@/components/shared/mobile-sticky-button";
import { HeroSection } from "@/components/sections/hero-section";
import { USPSection } from "@/components/sections/usp-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <USPSection />
        <HowItWorksSection />
        <GallerySection />
        <PricingSection />
      </main>
      <FooterSection />
      <MobileStickyButton />
    </>
  );
}
