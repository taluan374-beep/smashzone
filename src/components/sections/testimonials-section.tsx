"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { Star, Quote, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Nguyễn Minh Tuấn",
    role: "Doanh nhân",
    avatar: "NMT",
    rating: 5,
    content: "Sân đẹp, máy lạnh mát rượi, nhân viên nhiệt tình. Chơi xong còn được tắm nước nóng, quá đã! Giờ tuần nào tôi cũng book sân ở đây.",
    highlight: "Máy lạnh mát rượi",
  },
  {
    name: "Trần Thị Hương",
    role: "Giáo viên",
    avatar: "TTH",
    rating: 5,
    content: "Mới tập chơi Pickleball nhưng được nhân viên hướng dẫn rất nhiệt tình. Sàn chống trượt nên chơi an toàn, không lo té ngã.",
    highlight: "Hướng dẫn nhiệt tình",
  },
  {
    name: "Lê Văn Hùng",
    role: "Kỹ sư IT",
    avatar: "LVH",
    rating: 5,
    content: "Đặt sân online rất tiện, xác nhận ngay lập tức. Wifi mạnh nên còn livestream được cho mấy anh em ở xa xem luôn!",
    highlight: "Đặt sân siêu tiện",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[200px]" />
      
      {/* Floating quotes decoration */}
      <div className="absolute top-20 left-10 opacity-10">
        <Quote className="w-20 h-20 text-lime" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Quote className="w-16 h-16 text-cyan" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/10 border border-lime/30 text-lime text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            Đánh Giá Từ Khách Hàng
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Cộng Đồng SmashZone <span className="text-gradient-lime">Nói Gì?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hơn 500+ người chơi đã tin tưởng và yêu thích SmashZone
          </p>
        </FadeInUp>

        <StaggerContainer 
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                {/* Glassmorphism Card */}
                <div className="h-full p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-lime/30 transition-all duration-300 relative overflow-hidden group">
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Quote className="w-8 h-8 text-lime" />
                  </div>

                  <div className="relative z-10">
                    {/* Rating stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Highlight tag */}
                    <span className="inline-block px-3 py-1 rounded-full bg-lime/10 text-lime text-xs font-medium mb-4">
                      {testimonial.highlight}
                    </span>

                    {/* Content */}
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime/30 to-cyan/30 flex items-center justify-center text-white font-bold text-sm border border-lime/30">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust indicators */}
        <FadeInUp delay={0.4} className="mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["NV", "TH", "MK", "LQ"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-lime/30 to-teal/30 flex items-center justify-center text-white text-xs font-bold border-2 border-dark"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white font-bold">500+</div>
                <div className="text-muted-foreground text-sm">Thành viên</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <div className="text-white font-bold">4.9/5</div>
                <div className="text-muted-foreground text-sm">Đánh giá trung bình</div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <div className="text-white font-bold">98%</div>
              <div className="text-muted-foreground text-sm">Khách hàng quay lại</div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
