"use client";

import { motion } from "framer-motion";
import { 
  Shirt,
  ShowerHead,
  Car,
  Coffee,
  ShoppingBag,
  Wifi,
  Star
} from "lucide-react";

const amenities = [
  {
    icon: Shirt,
    title: "Cho Thuê Vợt & Giày",
    description: "Vợt chất lượng cao và giày chuyên dụng sẵn sàng cho bạn",
    highlight: true,
  },
  {
    icon: ShowerHead,
    title: "Phòng Tắm Nóng Lạnh",
    description: "Locker riêng, phòng tắm sạch sẽ với nước nóng 24/7",
    highlight: false,
  },
  {
    icon: Car,
    title: "Bãi Đậu Xe Rộng Rãi",
    description: "Miễn phí cho khách đặt sân, bảo vệ 24/7",
    highlight: false,
  },
  {
    icon: Coffee,
    title: "Khu Vực Nghỉ Ngơi & Cafe",
    description: "Lounge thoải mái, đồ uống mát lạnh sau trận đấu",
    highlight: true,
  },
  {
    icon: ShoppingBag,
    title: "Shop Phụ Kiện Pro",
    description: "Vợt, bóng, quần áo và phụ kiện chính hãng",
    highlight: false,
  },
  {
    icon: Wifi,
    title: "Wifi Tốc Độ Cao",
    description: "Kết nối miễn phí, livestream trận đấu dễ dàng",
    highlight: false,
  },
];

export function Amenities() {
  return (
    <section className="relative py-20 md:py-32 bg-dark-gray overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[150px]" />
      
      {/* Decorative stars */}
      <div className="absolute top-20 right-20 text-neon/20">
        <Star className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-20 left-20 text-cyan/20">
        <Star className="w-6 h-6 fill-current" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* 5-star badge */}
          <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ))}
            <span className="ml-2 text-sm font-semibold text-yellow-500">5-Star</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Tiện Ích{" "}
            <span className="bg-gradient-to-r from-neon to-cyan bg-clip-text text-transparent">
              Đẳng Cấp 5 Sao
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mọi thứ bạn cần cho một trải nghiệm Pickleball hoàn hảo đều có tại SmashZone
          </p>
        </motion.div>

        {/* Amenities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className={`group relative p-6 rounded-2xl transition-all duration-500 ${
                amenity.highlight
                  ? "bg-gradient-to-br from-neon/10 to-transparent border border-neon/30 hover:border-neon/50"
                  : "bg-dark-card/50 border border-white/10 hover:border-cyan/30"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-all duration-300 ${
                amenity.highlight
                  ? "bg-neon/20 group-hover:bg-neon/30 group-hover:shadow-[0_0_30px_rgba(118,215,19,0.3)]"
                  : "bg-cyan/10 group-hover:bg-cyan/20 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]"
              }`}>
                <amenity.icon className={`w-7 h-7 ${
                  amenity.highlight ? "text-neon" : "text-cyan"
                }`} />
              </div>

              {/* Content */}
              <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                amenity.highlight 
                  ? "text-white group-hover:text-neon" 
                  : "text-white group-hover:text-cyan"
              }`}>
                {amenity.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>

              {/* Highlight badge */}
              {amenity.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-neon/20 text-neon text-xs font-semibold rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                amenity.highlight
                  ? "bg-gradient-to-br from-neon/5 via-transparent to-transparent"
                  : "bg-gradient-to-br from-cyan/5 via-transparent to-transparent"
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
