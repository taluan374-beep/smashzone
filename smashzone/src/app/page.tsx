import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { USP } from "@/components/sections/USP";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Gallery } from "@/components/sections/Gallery";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";
import { MobileCTA } from "@/components/sections/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Why Choose Us */}
      <USP />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Gallery */}
      <Gallery />
      
      {/* Pricing */}
      <Pricing />
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <MobileCTA />
    </main>
  );
}
