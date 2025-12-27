"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Zap } from "lucide-react";

export function MobileStickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past the hero section
      setIsVisible(window.scrollY > 400);
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
          {/* Gradient fade background for smooth transition */}
          <div 
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark via-dark/95 to-transparent pointer-events-none"
            style={{ bottom: '100%', height: '40px' }}
          />
          
          {/* Main sticky bar */}
          <div className="bg-dark-gray/95 backdrop-blur-lg border-t border-lime/20 shadow-[0_-4px_30px_rgba(118,215,19,0.15)]">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                {/* Left side - Price teaser */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-lime" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-muted-foreground text-xs">Chỉ từ</span>
                      <span className="text-lime font-extrabold text-lg">120k</span>
                      <span className="text-muted-foreground text-xs">/giờ</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="w-3 h-3" />
                      <span>Còn sân hôm nay</span>
                    </div>
                  </div>
                </div>

                {/* Right side - CTA Button */}
                <Button
                  className="bg-lime hover:bg-lime-dark text-dark font-bold px-6 py-5 text-sm transition-all duration-300 active:scale-[0.98] shadow-[0_0_20px_rgba(118,215,19,0.4)]"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Đặt Sân
                </Button>
              </div>
            </div>
          </div>

          {/* Safe area spacer for devices with home indicator */}
          <div className="bg-dark-gray/95 h-[env(safe-area-inset-bottom)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Desktop version - appears on larger screens as a floating button
export function DesktopFloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50 hidden lg:block"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-4 rounded-full bg-lime hover:bg-lime-dark text-dark font-bold transition-all duration-300 shadow-[0_0_30px_rgba(118,215,19,0.5)]"
          >
            <Calendar className="w-5 h-5" />
            <span>Đặt Sân Ngay</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
