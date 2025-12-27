"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { Camera, Play } from "lucide-react";

// Placeholder images with different aspect ratios
const galleryItems = [
  {
    id: 1,
    title: "Trận Đấu Căng Thẳng",
    category: "Match",
    aspectRatio: "aspect-[4/3]",
    gradient: "from-lime/30 to-teal/30",
  },
  {
    id: 2,
    title: "High Five Victory",
    category: "Community",
    aspectRatio: "aspect-[3/4]",
    gradient: "from-cyan/30 to-lime/30",
  },
  {
    id: 3,
    title: "Sân Chuẩn Quốc Tế",
    category: "Facility",
    aspectRatio: "aspect-square",
    gradient: "from-teal/30 to-cyan/30",
  },
  {
    id: 4,
    title: "Giải Đấu Hàng Tháng",
    category: "Tournament",
    aspectRatio: "aspect-[4/3]",
    gradient: "from-lime/20 to-teal/40",
  },
  {
    id: 5,
    title: "Lớp Học Cho Người Mới",
    category: "Training",
    aspectRatio: "aspect-[3/4]",
    gradient: "from-cyan/20 to-lime/40",
  },
  {
    id: 6,
    title: "Khoảnh Khắc Vui Vẻ",
    category: "Community",
    aspectRatio: "aspect-square",
    gradient: "from-lime/30 to-cyan/20",
  },
];

export function GallerySection() {
  return (
    <section className="py-20 md:py-28 bg-dark-gray relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/10 border border-lime/30 text-lime text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Vibe Check
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Khám Phá <span className="text-gradient-lime">SmashZone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Những khoảnh khắc đáng nhớ từ cộng đồng Pickleball sôi động của chúng tôi
          </p>
        </FadeInUp>

        {/* Masonry Grid */}
        <StaggerContainer staggerDelay={0.1} className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <StaggerItem key={item.id} className="break-inside-avoid">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative ${item.aspectRatio} rounded-xl overflow-hidden cursor-pointer group`}
              >
                {/* Placeholder gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} bg-dark-card`}>
                  {/* Placeholder pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <pattern id={`pattern-${item.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#pattern-${item.id})`} className="text-lime" />
                    </svg>
                  </div>
                  
                  {/* Centered icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-dark/50 flex items-center justify-center group-hover:bg-lime/20 transition-all duration-300">
                      <Play className="w-8 h-8 text-white/80 group-hover:text-lime transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Green border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime/50 rounded-xl transition-all duration-300" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 rounded-md bg-lime/20 text-lime text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View all button */}
        <FadeInUp delay={0.4} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-lime/30 text-lime font-medium hover:bg-lime/10 transition-all duration-300"
          >
            <Camera className="w-5 h-5" />
            Xem Thêm Hình Ảnh
          </motion.button>
        </FadeInUp>
      </div>
    </section>
  );
}
