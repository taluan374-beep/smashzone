"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { GraduationCap, Shirt, Users, Heart, ArrowRight, Sparkles } from "lucide-react";

export function NewbieSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-teal/20 via-lime/10 to-cyan/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 400">
          <defs>
            <pattern id="newbiePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#76D713" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="1440" height="400" fill="url(#newbiePattern)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-lime/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left side - Icon illustration */}
            <FadeInUp className="flex-shrink-0">
              <div className="relative">
                {/* Main icon container */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-lime/20 to-cyan/20 border border-lime/30 flex items-center justify-center relative"
                >
                  <GraduationCap className="w-16 h-16 md:w-20 md:h-20 text-lime" />
                  
                  {/* Floating badges */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-cyan/20 border border-cyan/40 flex items-center justify-center"
                  >
                    <Shirt className="w-5 h-5 text-cyan" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-lime/20 border border-lime/40 flex items-center justify-center"
                  >
                    <Heart className="w-5 h-5 text-lime" />
                  </motion.div>
                </motion.div>

                {/* Sparkle decorations */}
                <Sparkles className="absolute -top-4 left-0 w-6 h-6 text-lime/50" />
                <Sparkles className="absolute -bottom-4 right-0 w-4 h-4 text-cyan/50" />
              </div>
            </FadeInUp>

            {/* Right side - Content */}
            <FadeInUp delay={0.2} className="text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 border border-lime/30 text-lime text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                Dành Cho Người Mới
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Chưa Biết Chơi? <span className="text-gradient-lime">Đừng Lo!</span>
              </h2>
              
              <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-xl">
                SmashZone có <span className="text-lime font-semibold">vợt cho thuê</span> và{" "}
                <span className="text-cyan font-semibold">Huấn luyện viên</span> hướng dẫn cơ bản 
                cho người mới bắt đầu. Bạn chỉ cần đến, chúng tôi lo phần còn lại!
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-muted-foreground">
                  <Shirt className="w-4 h-4 text-lime" />
                  Thuê vợt chỉ 30k
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 text-cyan" />
                  1 buổi học thử FREE
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-lime hover:bg-lime-dark text-dark font-bold transition-all duration-300 hover:scale-105 glow-lime"
                >
                  Đăng Ký Học Thử
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cyan/30 text-cyan hover:bg-cyan/10 hover:border-cyan/50 font-semibold"
                >
                  <Shirt className="w-4 h-4 mr-2" />
                  Thuê Vợt
                </Button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
