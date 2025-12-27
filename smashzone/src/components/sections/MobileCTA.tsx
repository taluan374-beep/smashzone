"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the CTA after scrolling past the hero section
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="bg-dark/95 backdrop-blur-md border-t border-neon/20 p-4">
            <div className="flex items-center gap-3">
              {/* Call button */}
              <a
                href="tel:1900xxxxxx"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold transition-colors hover:bg-white/20"
              >
                <Phone className="w-5 h-5" />
                Gọi Ngay
              </a>

              {/* Book button */}
              <Button className="flex-1 py-6 bg-neon hover:bg-neon/90 text-black font-bold rounded-xl glow-neon-sm">
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
