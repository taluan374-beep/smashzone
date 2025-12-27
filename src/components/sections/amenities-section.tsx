"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { 
  Shirt, 
  ShowerHead, 
  Car, 
  Coffee, 
  ShoppingBag, 
  Wifi,
  Dumbbell,
  Sparkles
} from "lucide-react";

const amenities = [
  {
    icon: Shirt,
    title: "Cho Thuê Vợt & Giày",
    description: "Vợt chất lượng cao và giày chuyên dụng đủ size",
    highlight: true,
  },
  {
    icon: ShowerHead,
    title: "Phòng Tắm Nóng Lạnh",
    description: "Phòng tắm sạch sẽ với đầy đủ tiện nghi",
    highlight: false,
  },
  {
    icon: Car,
    title: "Bãi Đậu Xe Rộng Rãi",
    description: "Đỗ xe miễn phí, an ninh 24/7",
    highlight: false,
  },
  {
    icon: Coffee,
    title: "Khu Vực Nghỉ Ngơi & Cafe",
    description: "Không gian thư giãn, đồ uống đa dạng",
    highlight: false,
  },
  {
    icon: ShoppingBag,
    title: "Shop Phụ Kiện",
    description: "Vợt, bóng, quần áo từ các thương hiệu uy tín",
    highlight: false,
  },
  {
    icon: Wifi,
    title: "Wifi Tốc Độ Cao",
    description: "Kết nối nhanh, livestream không giật lag",
    highlight: false,
  },
];

export function AmenitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-dark-gray relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-lime/5 rounded-full blur-[120px]" />

      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(118, 215, 19, 1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(118, 215, 19, 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Tiện Ích Cao Cấp
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Tiện Ích Đẳng Cấp <span className="text-gradient-lime">5 Sao</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mọi thứ bạn cần đều có tại SmashZone. Chỉ việc đến và tận hưởng!
          </p>
        </FadeInUp>

        <StaggerContainer 
          staggerDelay={0.08}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {amenities.map((amenity, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 group h-full
                  ${amenity.highlight 
                    ? 'bg-gradient-to-br from-lime/15 to-lime/5 border-lime/40 hover:border-lime/60' 
                    : 'bg-dark-card/50 border-white/10 hover:border-lime/30'
                  }`}
              >
                {amenity.highlight && (
                  <div className="absolute -top-2 -right-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-md bg-lime text-dark text-xs font-bold">
                      HOT
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300
                  ${amenity.highlight 
                    ? 'bg-lime/20 group-hover:bg-lime/30' 
                    : 'bg-white/5 group-hover:bg-lime/10'
                  }`}
                >
                  <amenity.icon className={`w-7 h-7 transition-colors duration-300
                    ${amenity.highlight ? 'text-lime' : 'text-muted-foreground group-hover:text-lime'}`} 
                  />
                </div>

                <h3 className={`font-bold mb-2 transition-colors duration-300
                  ${amenity.highlight ? 'text-lime' : 'text-white group-hover:text-lime'}`}
                >
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional perks */}
        <FadeInUp delay={0.4} className="mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            {["Khăn tắm miễn phí", "Tủ khóa cá nhân", "Nước uống free", "Máy lạnh mát rượi"].map((perk, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm"
              >
                <Dumbbell className="w-4 h-4 text-lime" />
                {perk}
              </motion.span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
