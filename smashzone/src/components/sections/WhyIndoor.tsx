"use client";

import { motion } from "framer-motion";
import { 
  Sun, 
  CloudRain, 
  AlertTriangle,
  Thermometer,
  Shield,
  Lightbulb,
  X,
  Check
} from "lucide-react";

const outdoorProblems = [
  {
    icon: Sun,
    title: "Nắng nóng khó chịu",
    description: "Nhiệt độ 35-40°C, dễ say nắng và kiệt sức",
  },
  {
    icon: CloudRain,
    title: "Mưa bất chợt",
    description: "Trận đấu bị gián đoạn, hủy lịch liên tục",
  },
  {
    icon: AlertTriangle,
    title: "Sàn trơn trượt",
    description: "Nguy cơ chấn thương cao khi sàn ướt",
  },
];

const indoorBenefits = [
  {
    icon: Thermometer,
    title: "Mát lạnh 24/7",
    description: "Điều hòa 22-24°C, thoải mái quanh năm",
  },
  {
    icon: Shield,
    title: "Sàn chống trượt",
    description: "Mặt sàn chuyên dụng, an toàn tối đa",
  },
  {
    icon: Lightbulb,
    title: "Ánh sáng chuẩn",
    description: "Hệ thống đèn LED chuyên nghiệp, không chói",
  },
];

export function WhyIndoor() {
  return (
    <section className="relative py-20 md:py-32 bg-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-[150px]" />
      
      {/* Decorative dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm font-semibold mb-4">
            Tại Sao Chọn Sân Trong Nhà?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Bất Chấp Thời Tiết -{" "}
            <span className="bg-gradient-to-r from-neon to-cyan bg-clip-text text-transparent">
              Cháy Hết Đam Mê
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Không còn lo lắng về nắng mưa. SmashZone mang đến trải nghiệm chơi hoàn hảo trong mọi điều kiện.
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {/* Outdoor - Problems */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-950/30 to-dark-card border border-red-500/20 h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400">Sân Ngoài Trời</h3>
                  <p className="text-sm text-muted-foreground">Những vấn đề thường gặp</p>
                </div>
              </div>

              {/* Problems list */}
              <div className="space-y-5">
                {outdoorProblems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Crossed out overlay effect */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-5">
                  <line x1="0" y1="0" x2="100%" y2="100%" stroke="#ef4444" strokeWidth="2" />
                  <line x1="100%" y1="0" x2="0" y2="100%" stroke="#ef4444" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Indoor - Benefits */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neon/10 to-dark-card border border-neon/30 h-full overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon/20 rounded-full blur-[60px]" />
              
              {/* Header */}
              <div className="relative flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-neon/20 flex items-center justify-center glow-neon-sm">
                  <Check className="w-6 h-6 text-neon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neon">SmashZone Indoor</h3>
                  <p className="text-sm text-muted-foreground">Giải pháp hoàn hảo</p>
                </div>
              </div>

              {/* Benefits list */}
              <div className="relative space-y-5">
                {indoorBenefits.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-neon/5 border border-neon/20 hover:border-neon/40 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-neon/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-neon" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Best choice badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-neon text-black text-xs font-bold rounded-full">
                  BEST CHOICE
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">
            Trải nghiệm sự khác biệt ngay hôm nay
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neon/10 border border-neon/30 text-neon font-semibold rounded-xl hover:bg-neon/20 transition-all duration-300"
          >
            Xem Bảng Giá
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
