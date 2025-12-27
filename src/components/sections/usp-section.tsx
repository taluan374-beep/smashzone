"use client";

import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/shared/motion-wrapper";
import { Snowflake, Shield, Users, Car, Wifi, Clock } from "lucide-react";

const features = [
  {
    icon: Snowflake,
    title: "Mát Lạnh 24/7",
    description: "Hệ thống điều hòa công nghiệp, đảm bảo nhiệt độ lý tưởng cho mọi trận đấu.",
  },
  {
    icon: Shield,
    title: "Sân Chuẩn Thi Đấu",
    description: "Sàn chuyên dụng chống trượt, kích thước chuẩn quốc tế, ánh sáng tối ưu.",
  },
  {
    icon: Users,
    title: "Cộng Đồng Sôi Động",
    description: "Kết nối với hàng trăm người chơi, tham gia giải đấu và sự kiện thường xuyên.",
  },
  {
    icon: Car,
    title: "Đỗ Xe Tiện Lợi",
    description: "Bãi đỗ xe rộng rãi, an toàn, miễn phí cho khách đặt sân.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Tốc Độ Cao",
    description: "Kết nối internet nhanh chóng, livestream trận đấu không gián đoạn.",
  },
  {
    icon: Clock,
    title: "Đặt Sân Dễ Dàng",
    description: "Hệ thống đặt sân online 24/7, xác nhận tức thì, thanh toán linh hoạt.",
  },
];

export function USPSection() {
  return (
    <section className="py-20 md:py-28 bg-dark-gray relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-lime/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal/20 border border-teal/30 text-cyan text-sm font-medium mb-4">
            Tại Sao Chọn Chúng Tôi?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Trải Nghiệm <span className="text-gradient-lime">Đẳng Cấp</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SmashZone mang đến không gian chơi Pickleball hoàn hảo với cơ sở vật chất hiện đại
          </p>
        </FadeInUp>

        <StaggerContainer 
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <Card className="bg-dark-card/50 border-white/5 hover:border-lime/30 transition-all duration-300 group h-full backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-lime/10 flex items-center justify-center mb-4 group-hover:bg-lime/20 group-hover:glow-lime transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-lime" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
