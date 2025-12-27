"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Clock, Sun, Crown, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Giờ Vàng",
    nameEn: "Peak Hours",
    icon: Sun,
    price: "200,000",
    unit: "VNĐ/giờ",
    description: "Khung giờ cao điểm với không khí sôi động nhất",
    timeSlot: "17:00 - 21:00",
    features: [
      "Sân chuẩn thi đấu",
      "Điều hòa mát lạnh",
      "Ánh sáng chuyên nghiệp",
      "Wifi miễn phí",
    ],
    popular: false,
    ctaText: "Đặt Ngay",
    accent: "cyan",
  },
  {
    name: "Thẻ Hội Viên",
    nameEn: "Membership",
    icon: Crown,
    price: "2,500,000",
    unit: "VNĐ/tháng",
    description: "Trải nghiệm VIP không giới hạn",
    timeSlot: "Không giới hạn",
    features: [
      "Chơi không giới hạn",
      "Ưu tiên đặt sân",
      "Giảm 20% F&B",
      "Tham gia giải đấu miễn phí",
      "Cho mượn vợt premium",
      "Locker riêng",
    ],
    popular: true,
    ctaText: "Đăng Ký VIP",
    accent: "neon",
  },
  {
    name: "Giờ Thường",
    nameEn: "Off-Peak Hours",
    icon: Clock,
    price: "120,000",
    unit: "VNĐ/giờ",
    description: "Khung giờ linh hoạt, giá tốt nhất",
    timeSlot: "06:00 - 17:00",
    features: [
      "Sân chuẩn thi đấu",
      "Điều hòa mát lạnh",
      "Ánh sáng chuyên nghiệp",
      "Wifi miễn phí",
    ],
    popular: false,
    ctaText: "Đặt Ngay",
    accent: "cyan",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/5 rounded-full blur-[200px]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-neon/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-cyan/10 rounded-full" />
      
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

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
            Bảng Giá
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Lựa Chọn{" "}
            <span className="bg-gradient-to-r from-neon to-cyan bg-clip-text text-transparent">
              Phù Hợp
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Đa dạng gói dịch vụ, giá cả minh bạch. Chọn gói phù hợp với nhu cầu của bạn.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="px-4 py-1.5 bg-gradient-to-r from-neon to-cyan text-black font-bold border-0 shadow-lg shadow-neon/30">
                    <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                    Best Value
                  </Badge>
                </div>
              )}

              <Card className={`relative h-full overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? "bg-gradient-to-b from-neon/10 to-dark-card border-neon/50 shadow-xl shadow-neon/20" 
                  : "bg-dark-card/50 border-white/10 hover:border-cyan/30"
              }`}>
                {/* Glow effect for popular */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-neon/5 via-transparent to-transparent" />
                )}

                <CardHeader className="relative pb-0 pt-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${
                    plan.popular 
                      ? "bg-neon/20" 
                      : "bg-cyan/10"
                  }`}>
                    <plan.icon className={`w-7 h-7 ${
                      plan.popular ? "text-neon" : "text-cyan"
                    }`} />
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className={`text-sm font-medium ${
                    plan.popular ? "text-neon" : "text-cyan"
                  }`}>
                    {plan.nameEn}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="relative pt-6">
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl md:text-5xl font-black ${
                        plan.popular ? "text-neon" : "text-white"
                      }`}>
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">{plan.unit}</span>
                  </div>

                  {/* Time slot */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 ${
                    plan.popular 
                      ? "bg-neon/10 text-neon" 
                      : "bg-white/5 text-muted-foreground"
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{plan.timeSlot}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular 
                            ? "bg-neon/20" 
                            : "bg-cyan/10"
                        }`}>
                          <Check className={`w-3 h-3 ${
                            plan.popular ? "text-neon" : "text-cyan"
                          }`} />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 font-bold text-base rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? "bg-neon hover:bg-neon/90 text-black shadow-lg shadow-neon/30 hover:shadow-neon/50"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-cyan/50"
                    }`}
                  >
                    {plan.popular && <Sparkles className="w-4 h-4 mr-2" />}
                    {plan.ctaText}
                  </Button>
                </CardContent>

                {/* Corner decoration */}
                {plan.popular && (
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-neon/10 to-transparent rounded-tl-full" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm">
            * Giá có thể thay đổi vào các ngày lễ, Tết. Liên hệ hotline để biết thêm chi tiết.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
