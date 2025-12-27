"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-gray to-teal/30" />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(118, 215, 19, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(118, 215, 19, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Radial glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[100px]" />
        
        {/* Corner accent glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon/10 rounded-full blur-[120px]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-20 bg-gradient-to-b from-neon to-transparent rounded-full opacity-60" />
      <div className="absolute top-40 right-20 w-2 h-32 bg-gradient-to-b from-cyan to-transparent rounded-full opacity-40" />
      <div className="absolute bottom-40 left-20 w-20 h-2 bg-gradient-to-r from-neon to-transparent rounded-full opacity-40" />
      
      {/* Floating pickleball decoration */}
      <motion.div
        className="absolute top-1/4 right-10 md:right-20 w-16 h-16 md:w-24 md:h-24 opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#76D713" strokeWidth="2" />
          <circle cx="30" cy="35" r="6" fill="#76D713" />
          <circle cx="50" cy="25" r="6" fill="#76D713" />
          <circle cx="70" cy="35" r="6" fill="#76D713" />
          <circle cx="35" cy="55" r="6" fill="#76D713" />
          <circle cx="65" cy="55" r="6" fill="#76D713" />
          <circle cx="50" cy="75" r="6" fill="#76D713" />
        </svg>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Logo badge */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 border border-neon/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-sm font-medium text-neon">Premium Indoor Court</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            <span className="block">SmashZone</span>
            <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-neon via-cyan to-neon bg-clip-text text-transparent">
              Sân Chơi Pickleball Trong Nhà Đẳng Cấp
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Thỏa mãn đam mê bất kể nắng mưa. 
            <span className="text-white font-medium"> Sân chuẩn thi đấu</span>, 
            <span className="text-cyan"> cộng đồng sôi động</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg font-bold bg-neon hover:bg-neon/90 text-black rounded-xl glow-neon-sm hover:glow-neon transition-all duration-300 transform hover:scale-105"
            >
              Đặt Sân Ngay
              <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-2 border-white/30 hover:border-white bg-transparent text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Tìm Hiểu Thêm
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: "4+", label: "Sân Tiêu Chuẩn" },
              { value: "500+", label: "Người Chơi" },
              { value: "24/7", label: "Mát Lạnh" },
              { value: "100%", label: "Hài Lòng" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon/30 transition-colors duration-300"
              >
                <div className="text-2xl md:text-3xl font-black text-neon">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-neon rounded-full" />
        </div>
      </motion.div>

      {/* Angular bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark-gray to-transparent" />
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-16 text-dark-gray"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 L1440,64 L1440,0 L720,32 L0,0 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
