"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Clock, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Đặt Lịch Online",
    titleEn: "Book Online",
    description: "Chọn ngày, giờ và sân phù hợp qua website hoặc app. Thanh toán nhanh chóng, tiện lợi.",
  },
  {
    number: "02",
    icon: Clock,
    title: "Đến Đúng Giờ",
    titleEn: "Arrive on Time",
    description: "Check-in tại quầy lễ tân, nhận dụng cụ (nếu cần) và sẵn sàng cho trận đấu.",
  },
  {
    number: "03",
    icon: Trophy,
    title: "Ra Sân Thi Đấu",
    titleEn: "Play & Smash!",
    description: "Tận hưởng trận đấu hết mình trên sân chuẩn quốc tế. Kết nối, vui vẻ và chiến thắng!",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-20 md:py-32 bg-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[150px]" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm font-semibold mb-4">
            Quy Trình Đặt Sân
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Chỉ{" "}
            <span className="bg-gradient-to-r from-cyan to-neon bg-clip-text text-transparent">
              3 Bước
            </span>{" "}
            Đơn Giản
          </h2>
          <p className="text-lg text-muted-foreground">
            Đặt sân nhanh chóng, không cần chờ đợi. Trải nghiệm liền mạch từ online đến offline.
          </p>
        </motion.div>

        {/* Steps - Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon via-cyan to-neon transform -translate-y-1/2" />
            
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step card */}
                  <div className="relative bg-dark-gray/80 border border-white/10 rounded-2xl p-8 hover:border-neon/50 transition-all duration-500 group">
                    {/* Step number badge */}
                    <div className="absolute -top-4 left-8 px-4 py-1 bg-neon text-black font-black text-sm rounded-full">
                      Bước {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon/20 to-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-neon" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-cyan text-sm font-medium mb-4">
                      {step.titleEn}
                    </p>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Arrow indicator (not on last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-8 rounded-full bg-dark-gray border border-neon/50 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-neon" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-neon glow-neon-sm" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps - Mobile Vertical Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon via-cyan to-neon" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-8 transform -translate-x-1/2">
                    <div className="w-5 h-5 rounded-full bg-neon glow-neon-sm flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-black" />
                    </div>
                  </div>

                  {/* Step card */}
                  <div className="bg-dark-gray/80 border border-white/10 rounded-xl p-6">
                    {/* Step badge */}
                    <span className="inline-block px-3 py-1 bg-neon/20 text-neon text-xs font-bold rounded-full mb-4">
                      Bước {step.number}
                    </span>

                    {/* Icon and content */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon/20 to-cyan/20 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-neon" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="text-cyan text-xs font-medium mb-2">
                          {step.titleEn}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon to-cyan text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(118,215,19,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            Đặt Sân Ngay
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
