"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { Calendar, MapPin, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Đặt Lịch Online",
    description: "Chọn ngày, giờ và sân phù hợp trên hệ thống đặt sân thông minh của chúng tôi.",
    accent: "lime",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Check-in Đúng Giờ",
    description: "Đến sân đúng giờ, xuất trình mã đặt sân và nhận dụng cụ (nếu cần).",
    accent: "cyan",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Ra Sân Thi Đấu",
    description: "Tận hưởng trận đấu sôi động trên sân chuẩn quốc tế cùng bạn bè!",
    accent: "lime",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Angular background decorations */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 700">
          <defs>
            <linearGradient id="stepLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#76D713" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#76D713" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 L200 150 L400 80 L600 160 L800 100 L1000 180 L1200 120 L1440 200"
            fill="none"
            stroke="url(#stepLineGradient)"
            strokeWidth="1"
            className="opacity-30"
          />
          <path
            d="M0 600 L200 550 L400 620 L600 540 L800 600 L1000 520 L1200 580 L1440 500"
            fill="none"
            stroke="url(#stepLineGradient)"
            strokeWidth="1"
            className="opacity-30"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-lime/10 border border-lime/30 text-lime text-sm font-medium mb-4">
            Quy Trình Đơn Giản
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Đặt Sân Chỉ Với <span className="text-gradient-lime">3 Bước</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trải nghiệm quy trình đặt sân nhanh chóng, tiện lợi và hoàn toàn tự động
          </p>
        </FadeInUp>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-lime/20 via-cyan/20 to-lime/20 -translate-y-1/2" />
          
          <StaggerContainer staggerDelay={0.2} className="grid grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <StaggerItem key={index} className="relative">
                <motion.div 
                  className="flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step number with icon */}
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center
                      ${step.accent === 'lime' ? 'bg-lime/10 border border-lime/30' : 'bg-cyan/10 border border-cyan/30'}
                      transition-all duration-300 hover:scale-110 group`}
                    >
                      <step.icon className={`w-10 h-10 ${step.accent === 'lime' ? 'text-lime' : 'text-cyan'}`} />
                    </div>
                    <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-lg flex items-center justify-center font-extrabold text-sm
                      ${step.accent === 'lime' ? 'bg-lime text-dark' : 'bg-cyan text-dark'}`}
                    >
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground max-w-xs">
                    {step.description}
                  </p>

                  {/* Arrow to next step */}
                  {index < steps.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-lime/50" />
                    </div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime/20 via-cyan/20 to-lime/20" />
          
          <StaggerContainer staggerDelay={0.15} className="space-y-12">
            {steps.map((step, index) => (
              <StaggerItem key={index} className="relative pl-20">
                {/* Step icon */}
                <div className={`absolute left-0 w-16 h-16 rounded-xl flex items-center justify-center
                  ${step.accent === 'lime' ? 'bg-lime/10 border border-lime/30' : 'bg-cyan/10 border border-cyan/30'}`}
                >
                  <step.icon className={`w-7 h-7 ${step.accent === 'lime' ? 'text-lime' : 'text-cyan'}`} />
                  <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-md flex items-center justify-center font-bold text-xs
                    ${step.accent === 'lime' ? 'bg-lime text-dark' : 'bg-cyan text-dark'}`}
                  >
                    {step.number}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
