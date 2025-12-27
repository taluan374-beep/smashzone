"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Shirt, 
  HeartHandshake,
  Sparkles
} from "lucide-react";

export function NewbieFriendly() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal/20 via-dark-gray to-neon/10" />
      
      {/* Animated pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2376D713' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Main card */}
          <div className="relative p-6 md:p-10 rounded-3xl bg-dark-card/80 backdrop-blur-sm border border-neon/30 overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-neon/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan/20 rounded-full blur-[80px]" />
            
            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              {/* Left content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 border border-neon/30 mb-6">
                  <Sparkles className="w-4 h-4 text-neon" />
                  <span className="text-sm font-semibold text-neon">Dành cho người mới</span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4">
                  Chưa Biết Chơi?{" "}
                  <span className="bg-gradient-to-r from-neon to-cyan bg-clip-text text-transparent">
                    Đừng Lo!
                  </span>
                </h2>

                {/* Description */}
                <p className="text-muted-foreground text-lg mb-6 max-w-xl">
                  SmashZone có vợt cho thuê và Huấn luyện viên hướng dẫn cơ bản 
                  cho người mới bắt đầu. Chỉ cần đến, chúng tôi lo phần còn lại!
                </p>

                {/* Features list */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <Shirt className="w-4 h-4 text-cyan" />
                    <span className="text-sm text-white">Thuê vợt & giày</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <GraduationCap className="w-4 h-4 text-neon" />
                    <span className="text-sm text-white">HLV hướng dẫn</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <HeartHandshake className="w-4 h-4 text-cyan" />
                    <span className="text-sm text-white">Cộng đồng thân thiện</span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-8 py-6 bg-neon hover:bg-neon/90 text-black font-bold rounded-xl glow-neon-sm hover:glow-neon transition-all duration-300"
                  >
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Đăng Ký Học Thử
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto px-8 py-6 border-2 border-cyan/50 hover:border-cyan bg-transparent text-cyan hover:bg-cyan/10 font-semibold rounded-xl transition-all duration-300"
                  >
                    <Shirt className="w-5 h-5 mr-2" />
                    Thuê Vợt
                  </Button>
                </div>
              </div>

              {/* Right illustration/decoration */}
              <div className="hidden lg:flex items-center justify-center w-64 h-64 flex-shrink-0">
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Pickleball paddle illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Paddle head */}
                      <div className="w-32 h-40 rounded-full bg-gradient-to-br from-neon to-teal border-4 border-neon/50 flex items-center justify-center">
                        {/* Holes pattern */}
                        <div className="grid grid-cols-4 gap-2">
                          {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-3 h-3 rounded-full bg-dark/50" />
                          ))}
                        </div>
                      </div>
                      {/* Handle */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-white/20 to-white/10 rounded-b-lg" />
                      
                      {/* Ball */}
                      <motion.div
                        className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-neon to-cyan shadow-lg shadow-neon/30"
                        animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                          <div className="grid grid-cols-2 gap-1">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="w-2 h-2 rounded-full bg-dark/30" />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full text-neon/10">
                <path d="M100 0 L100 100 L0 0 Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
