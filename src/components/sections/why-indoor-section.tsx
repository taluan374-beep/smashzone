"use client";

import { motion } from "framer-motion";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/shared/motion-wrapper";
import { 
  Sun, 
  CloudRain, 
  AlertTriangle, 
  Thermometer, 
  Wind, 
  Lightbulb,
  X,
  Check,
  Droplets,
  Footprints
} from "lucide-react";

const outdoorProblems = [
  {
    icon: Sun,
    title: "Nắng Gắt",
    description: "Mệt mỏi, mất nước, ảnh hưởng sức khỏe",
  },
  {
    icon: CloudRain,
    title: "Mưa Bất Chợt",
    description: "Hủy lịch, lãng phí thời gian chuẩn bị",
  },
  {
    icon: Droplets,
    title: "Sàn Trơn Ướt",
    description: "Nguy hiểm, dễ té ngã chấn thương",
  },
  {
    icon: AlertTriangle,
    title: "Ánh Sáng Kém",
    description: "Khó quan sát bóng khi chiều tối",
  },
];

const indoorBenefits = [
  {
    icon: Thermometer,
    title: "Mát Lạnh 24/7",
    description: "Điều hòa công nghiệp, nhiệt độ 22-24°C",
  },
  {
    icon: Wind,
    title: "Không Phụ Thuộc Thời Tiết",
    description: "Chơi bất cứ lúc nào, mưa hay nắng",
  },
  {
    icon: Footprints,
    title: "Sàn Chống Trượt",
    description: "Sàn chuyên dụng, an toàn tối đa",
  },
  {
    icon: Lightbulb,
    title: "Ánh Sáng Chuẩn",
    description: "Hệ thống đèn LED không chói, không bóng mờ",
  },
];

export function WhyIndoorSection() {
  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lime/10 rounded-full blur-[150px]" />
      </div>

      {/* Diagonal divider line */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-lime/10 border border-lime/30 text-lime text-sm font-medium mb-4">
            Tại Sao Chọn Sân Trong Nhà?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Bất Chấp Thời Tiết - <span className="text-gradient-lime">Cháy Hết Đam Mê</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nói không với những phiền toái của sân ngoài trời. SmashZone mang đến trải nghiệm hoàn hảo.
          </p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Outdoor Problems - Left Side */}
          <SlideInLeft>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-2xl border border-red-500/20 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <X className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Sân Ngoài Trời</h3>
                    <p className="text-red-400 text-sm font-medium">Những nỗi lo thường gặp</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {outdoorProblems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-dark/50 border border-red-500/10 group hover:border-red-500/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                        <problem.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 flex items-center gap-2">
                          {problem.title}
                          <X className="w-4 h-4 text-red-400" />
                        </h4>
                        <p className="text-muted-foreground text-sm">{problem.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SlideInLeft>

          {/* Indoor Benefits - Right Side */}
          <SlideInRight>
            <div className="relative">
              <div className="bg-gradient-to-br from-lime/10 to-cyan/5 rounded-2xl border border-lime/30 p-6 md:p-8 glow-lime">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-lime/20 flex items-center justify-center">
                    <Check className="w-6 h-6 text-lime" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">SmashZone Indoor</h3>
                    <p className="text-lime text-sm font-medium">Trải nghiệm hoàn hảo</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {indoorBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-dark/50 border border-lime/10 group hover:border-lime/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lime/20 transition-colors">
                        <benefit.icon className="w-5 h-5 text-lime" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 flex items-center gap-2">
                          {benefit.title}
                          <Check className="w-4 h-4 text-lime" />
                        </h4>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>

        {/* Bottom CTA */}
        <FadeInUp delay={0.3} className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Đừng để thời tiết quyết định lịch chơi của bạn
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-lime hover:bg-lime-dark text-dark font-bold transition-all duration-300 glow-lime"
          >
            Trải Nghiệm SmashZone Ngay
          </motion.button>
        </FadeInUp>
      </div>
    </section>
  );
}
