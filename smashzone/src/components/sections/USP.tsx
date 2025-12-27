"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Snowflake, 
  Layers, 
  Users, 
  Car,
  Shield,
  Clock
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const features = [
  {
    icon: Snowflake,
    title: "Mát Lạnh 24/7",
    description: "Hệ thống điều hòa hiện đại, nhiệt độ thoải mái quanh năm bất kể thời tiết.",
    accent: "cyan",
  },
  {
    icon: Layers,
    title: "Sàn Chuẩn Thi Đấu",
    description: "Mặt sàn chất lượng cao, đạt tiêu chuẩn quốc tế, giảm chấn thương hiệu quả.",
    accent: "neon",
  },
  {
    icon: Users,
    title: "Cộng Đồng Sôi Động",
    description: "Kết nối với hàng trăm người chơi, giao lưu và tham gia các giải đấu hấp dẫn.",
    accent: "cyan",
  },
  {
    icon: Car,
    title: "Đỗ Xe Tiện Lợi",
    description: "Bãi đỗ xe rộng rãi, miễn phí cho khách đặt sân, an ninh 24/7.",
    accent: "neon",
  },
  {
    icon: Shield,
    title: "An Toàn & Chuyên Nghiệp",
    description: "Trang thiết bị hiện đại, đội ngũ hỗ trợ chuyên nghiệp, không gian sạch sẽ.",
    accent: "cyan",
  },
  {
    icon: Clock,
    title: "Linh Hoạt Giờ Chơi",
    description: "Mở cửa từ sáng đến tối muộn, đặt sân dễ dàng qua app hoặc hotline.",
    accent: "neon",
  },
];

export function USP() {
  return (
    <section className="relative py-20 md:py-32 bg-dark-gray overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-neon/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-[120px]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(118, 215, 19, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(118, 215, 19, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-neon/10 border border-neon/30 text-neon text-sm font-semibold mb-4">
            Tại Sao Chọn SmashZone?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Trải Nghiệm{" "}
            <span className="bg-gradient-to-r from-neon to-cyan bg-clip-text text-transparent">
              Đẳng Cấp
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            SmashZone mang đến không gian chơi Pickleball tốt nhất với đầy đủ tiện nghi hiện đại,
            đội ngũ chuyên nghiệp và cộng đồng năng động.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative h-full bg-dark-card/50 border-white/10 hover:border-neon/50 transition-all duration-500 overflow-hidden">
                {/* Hover glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                  feature.accent === "neon" 
                    ? "from-neon/10 via-transparent to-transparent" 
                    : "from-cyan/10 via-transparent to-transparent"
                }`} />
                
                <CardContent className="relative p-6 md:p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 ${
                    feature.accent === "neon"
                      ? "bg-neon/10 group-hover:bg-neon/20 group-hover:shadow-[0_0_30px_rgba(118,215,19,0.3)]"
                      : "bg-cyan/10 group-hover:bg-cyan/20 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                  }`}>
                    <feature.icon className={`w-7 h-7 ${
                      feature.accent === "neon" ? "text-neon" : "text-cyan"
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Corner decoration */}
                  <div className={`absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    feature.accent === "neon" ? "text-neon/20" : "text-cyan/20"
                  }`}>
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M100 100 L100 50 L50 100 Z" fill="currentColor" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
