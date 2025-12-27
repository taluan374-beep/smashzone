"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function MobileStickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          {/* Gradient fade background */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/95 to-transparent pointer-events-none" 
               style={{ height: '120%', top: '-20%' }} />
          
          <div className="relative container mx-auto px-4 pb-4 pt-2">
            <Button
              className="w-full bg-lime hover:bg-lime-dark text-dark font-bold py-6 text-lg glow-lime transition-all duration-300 active:scale-[0.98]"
              size="lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Đặt Sân Ngay
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
