import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { USP } from "@/components/sections/USP";
import { WhyIndoor } from "@/components/sections/WhyIndoor";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Amenities } from "@/components/sections/Amenities";
import { NewbieFriendly } from "@/components/sections/NewbieFriendly";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Footer } from "@/components/sections/Footer";
import { MobileCTA } from "@/components/sections/MobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <Header />
      
      {/* Hero Section - Above the fold */}
      <Hero />
      
      {/* Why Choose Us - USP cards */}
      <USP />
      
      {/* Why Indoor - Pain point solver */}
      <WhyIndoor />
      
      {/* How It Works - Booking process */}
      <HowItWorks />
      
      {/* 5-Star Amenities */}
      <section id="amenities">
        <Amenities />
      </section>
      
      {/* Newbie Friendly - Beginner CTA */}
      <NewbieFriendly />
      
      {/* Gallery - Vibe Check */}
      <Gallery />
      
      {/* Testimonials - Social Proof */}
      <Testimonials />
      
      {/* Pricing */}
      <Pricing />
      
      {/* Footer with Map */}
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <MobileCTA />
    </main>
  );
}
