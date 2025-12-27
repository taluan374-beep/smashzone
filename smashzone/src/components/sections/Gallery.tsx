"use client";

import { motion } from "framer-motion";
import { Camera, Users, Trophy, Zap } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Không khí sôi động",
    category: "Community",
    aspectRatio: "tall",
    placeholder: "Players high-fiving after a great match",
  },
  {
    id: 2,
    title: "Sân chuẩn thi đấu",
    category: "Facility",
    aspectRatio: "wide",
    placeholder: "Professional indoor pickleball court",
  },
  {
    id: 3,
    title: "Khoảnh khắc chiến thắng",
    category: "Action",
    aspectRatio: "square",
    placeholder: "Player celebrating a winning shot",
  },
  {
    id: 4,
    title: "Giải đấu hấp dẫn",
    category: "Tournament",
    aspectRatio: "square",
    placeholder: "Tournament match in progress",
  },
  {
    id: 5,
    title: "Kết nối bạn bè",
    category: "Community",
    aspectRatio: "tall",
    placeholder: "Group of friends playing together",
  },
  {
    id: 6,
    title: "Trang thiết bị hiện đại",
    category: "Facility",
    aspectRatio: "wide",
    placeholder: "Modern equipment and facilities",
  },
];

const categoryIcons: Record<string, typeof Camera> = {
  Community: Users,
  Facility: Camera,
  Action: Zap,
  Tournament: Trophy,
};

export function Gallery() {
  return (
    <section className="relative py-20 md:py-32 bg-dark-gray overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-[150px]" />

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
            Vibe Check
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Năng Lượng{" "}
            <span className="bg-gradient-to-r from-neon to-cyan bg-clip-text text-transparent">
              SmashZone
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Khám phá không khí sôi động và những khoảnh khắc đáng nhớ tại SmashZone
          </p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => {
            const Icon = categoryIcons[image.category] || Camera;
            const gridClass = 
              image.aspectRatio === "tall" 
                ? "row-span-2" 
                : image.aspectRatio === "wide" 
                  ? "col-span-2" 
                  : "";
            
            return (
              <motion.div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl ${gridClass}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Placeholder Image Container */}
                <div className={`relative w-full ${
                  image.aspectRatio === "tall" 
                    ? "aspect-[3/4]" 
                    : image.aspectRatio === "wide" 
                      ? "aspect-[16/9]" 
                      : "aspect-square"
                } bg-gradient-to-br from-dark to-teal/30`}>
                  
                  {/* Placeholder Pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <Icon className="w-12 h-12 text-neon/40 mx-auto mb-3" />
                      <p className="text-white/30 text-sm">{image.placeholder}</p>
                    </div>
                  </div>

                  {/* Grid overlay pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(118, 215, 19, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(118, 215, 19, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-neon/20 rounded-full text-neon text-xs font-medium mb-2">
                      <Icon className="w-3 h-3" />
                      {image.category}
                    </span>
                    <h3 className="text-white font-bold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neon/50 transition-colors duration-500" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-neon/0 border-l-[40px] border-l-transparent group-hover:border-t-neon/30 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* View more CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-neon/50 text-white hover:text-neon rounded-xl transition-all duration-300 group">
            <Camera className="w-5 h-5" />
            Xem Thêm Hình Ảnh
            <span className="w-1.5 h-1.5 rounded-full bg-neon group-hover:animate-pulse" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
