"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Angular decorative lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#76D713" stopOpacity="0" />
                <stop offset="50%" stopColor="#76D713" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#76D713" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="200" x2="1440" y2="300" stroke="url(#lineGradient)" strokeWidth="1" />
            <line x1="0" y1="600" x2="1440" y2="500" stroke="url(#lineGradient)" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(118, 215, 19, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(118, 215, 19, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/10 border border-lime/30 text-lime text-sm font-medium">
            <Zap className="w-4 h-4" />
            Premium Indoor Pickleball
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          <span className="block">SmashZone</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Sân Chơi Pickleball Trong Nhà{" "}
            <span className="text-gradient-lime">Đẳng Cấp</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          Thỏa mãn đam mê bất kể nắng mưa. Sân chuẩn thi đấu, cộng đồng sôi động.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-lg font-bold bg-lime hover:bg-lime-dark text-dark transition-all duration-300 glow-lime hover:scale-105"
          >
            Đặt Sân Ngay
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Tìm Hiểu Thêm
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-lime">6+</div>
            <div className="text-sm sm:text-base text-muted-foreground mt-1">Sân Thi Đấu</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-lime">500+</div>
            <div className="text-sm sm:text-base text-muted-foreground mt-1">Thành Viên</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-lime">24/7</div>
            <div className="text-sm sm:text-base text-muted-foreground mt-1">Hỗ Trợ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-lime">5★</div>
            <div className="text-sm sm:text-base text-muted-foreground mt-1">Đánh Giá</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer hover:text-lime transition-colors"
        >
          <span className="text-sm font-medium hidden sm:block">Khám phá thêm</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Shield shape decorator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 80">
          <path
            d="M0 80V40L720 0L1440 40V80H0Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>
    </section>
  );
}
