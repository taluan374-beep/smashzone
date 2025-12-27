"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { Check, Star, Zap, Crown } from "lucide-react";

const pricingPlans = [
  {
    name: "Giờ Vàng",
    description: "Khung giờ cao điểm (17:00 - 21:00)",
    price: "200,000",
    unit: "VNĐ/giờ",
    icon: Zap,
    features: [
      "Sân tiêu chuẩn thi đấu",
      "Ánh sáng & điều hòa",
      "Nước uống miễn phí",
      "Wifi tốc độ cao",
    ],
    popular: false,
    accent: "cyan",
  },
  {
    name: "Thẻ Hội Viên",
    description: "Ưu đãi đặc biệt cho member",
    price: "2,500,000",
    unit: "VNĐ/tháng",
    icon: Crown,
    features: [
      "Giảm 30% giá sân",
      "Ưu tiên đặt sân trước",
      "Tham gia giải đấu miễn phí",
      "Thuê vợt & bóng miễn phí",
      "Phòng thay đồ VIP",
      "Huấn luyện cá nhân 2 buổi/tháng",
    ],
    popular: true,
    accent: "lime",
  },
  {
    name: "Giờ Thường",
    description: "Khung giờ bình thường (6:00 - 17:00)",
    price: "120,000",
    unit: "VNĐ/giờ",
    icon: Star,
    features: [
      "Sân tiêu chuẩn thi đấu",
      "Ánh sáng & điều hòa",
      "Nước uống miễn phí",
      "Wifi tốc độ cao",
    ],
    popular: false,
    accent: "teal",
  },
];

export function PricingSection() {
  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[150px]" />
      
      {/* Angular lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <defs>
            <linearGradient id="pricingLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#76D713" stopOpacity="0" />
              <stop offset="50%" stopColor="#76D713" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#76D713" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="100" x2="1440" y2="200" stroke="url(#pricingLine)" strokeWidth="1" />
          <line x1="0" y1="700" x2="1440" y2="600" stroke="url(#pricingLine)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-lime/10 border border-lime/30 text-lime text-sm font-medium mb-4">
            Bảng Giá Minh Bạch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Chọn Gói Phù Hợp <span className="text-gradient-lime">Với Bạn</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Giá cả hợp lý, không phụ phí ẩn. Thành viên được hưởng nhiều ưu đãi đặc biệt.
          </p>
        </FadeInUp>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className={`h-full relative overflow-hidden transition-all duration-300
                  ${plan.popular 
                    ? 'bg-gradient-to-b from-lime/10 to-dark-card border-lime/50 glow-lime' 
                    : 'bg-dark-card/50 border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute top-4 right-4 bg-lime text-dark font-bold">
                      Best Value
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
                      ${plan.accent === 'lime' ? 'bg-lime/20' : plan.accent === 'cyan' ? 'bg-cyan/20' : 'bg-teal/20'}`}
                    >
                      <plan.icon className={`w-6 h-6 
                        ${plan.accent === 'lime' ? 'text-lime' : plan.accent === 'cyan' ? 'text-cyan' : 'text-teal-light'}`} 
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <span className={`text-4xl font-extrabold 
                        ${plan.popular ? 'text-lime' : 'text-white'}`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">{plan.unit}</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                            ${plan.popular ? 'bg-lime/20' : 'bg-white/10'}`}
                          >
                            <Check className={`w-3 h-3 ${plan.popular ? 'text-lime' : 'text-white'}`} />
                          </div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full font-semibold transition-all duration-300
                        ${plan.popular 
                          ? 'bg-lime hover:bg-lime-dark text-dark glow-lime hover:scale-105' 
                          : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      size="lg"
                    >
                      {plan.popular ? 'Đăng Ký Ngay' : 'Đặt Sân'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional info */}
        <FadeInUp delay={0.3} className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            * Giá trên chưa bao gồm VAT. Liên hệ hotline{" "}
            <span className="text-lime font-semibold">1900 xxxx</span>
            {" "}để được tư vấn chi tiết.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
