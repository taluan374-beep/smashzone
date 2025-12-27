"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Sparkles } from "lucide-react";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the CTA after scrolling past the hero section (approx 400px)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[100] md:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Gradient border top */}
          <div className="h-px bg-gradient-to-r from-neon/50 via-cyan/50 to-neon/50" />
          
          <div className="bg-dark/98 backdrop-blur-lg px-4 py-3 safe-area-pb">
            <div className="flex items-center gap-3">
              {/* Price teaser - Left side */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-neon flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Chỉ từ</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-black text-neon">120k</span>
                  <span className="text-xs text-muted-foreground">/giờ</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-10 bg-white/10" />

              {/* Call button */}
              <a
                href="tel:1900xxxxxx"
                className="flex items-center justify-center w-12 h-12 bg-white/10 border border-white/20 rounded-xl text-white transition-colors hover:bg-white/20 flex-shrink-0"
                aria-label="Gọi điện"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Book button - Right side (prominent) */}
              <Button 
                className="flex-shrink-0 px-5 py-6 bg-neon hover:bg-neon/90 text-black font-bold rounded-xl shadow-lg shadow-neon/30 hover:shadow-neon/50 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Đặt Sân
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
