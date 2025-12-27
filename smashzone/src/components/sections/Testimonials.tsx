"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anh Minh Tuấn",
    role: "Doanh nhân",
    avatar: "MT",
    rating: 5,
    content: "Sân đẹp, máy lạnh mát rượi, không còn lo nắng nóng như chơi sân outdoor. Nhân viên nhiệt tình, đặt sân online rất tiện. Chắc chắn sẽ quay lại!",
    highlight: "Máy lạnh mát rượi",
  },
  {
    id: 2,
    name: "Chị Thu Hằng",
    role: "Giáo viên",
    avatar: "TH",
    rating: 5,
    content: "Mình mới tập chơi Pickleball, được nhân viên hướng dẫn rất tận tình. Sàn êm, không sợ té ngã. Có cho thuê vợt nên rất tiện cho người mới như mình.",
    highlight: "Hướng dẫn tận tình",
  },
  {
    id: 3,
    name: "Anh Hoàng Long",
    role: "Kỹ sư IT",
    avatar: "HL",
    rating: 5,
    content: "Cộng đồng ở đây rất vui vẻ, dễ tìm đối thủ giao lưu. Giá cả hợp lý, đặc biệt giờ thường rất rẻ. Bãi xe rộng, có quán cafe nghỉ ngơi sau khi chơi.",
    highlight: "Cộng đồng vui vẻ",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 bg-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan/5 rounded-full blur-[120px]" />
      
      {/* Decorative quote */}
      <div className="absolute top-20 left-10 text-neon/5">
        <Quote className="w-32 h-32" />
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/30 text-neon text-sm font-semibold mb-4">
            <MessageCircle className="w-4 h-4" />
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Cộng Đồng SmashZone{" "}
            <span className="bg-gradient-to-r from-neon to-cyan bg-clip-text text-transparent">
              Nói Gì?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hàng trăm người chơi đã tin tưởng và yêu thích SmashZone
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Glassmorphism card */}
              <div className="relative h-full p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-neon/30 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 via-transparent to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote icon */}
                <div className="relative mb-6">
                  <Quote className="w-10 h-10 text-neon/30" />
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Highlight badge */}
                  <span className="inline-block px-3 py-1 bg-neon/10 text-neon text-xs font-semibold rounded-full mb-4">
                    {testimonial.highlight}
                  </span>

                  {/* Review text */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon to-cyan flex items-center justify-center text-black font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-neon/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl font-black text-neon">500+</div>
            <div className="text-sm text-muted-foreground">Người Chơi</div>
          </div>
          <div className="w-px h-10 bg-white/20 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-black text-cyan">4.9</div>
            <div className="text-sm text-muted-foreground">Đánh Giá</div>
          </div>
          <div className="w-px h-10 bg-white/20 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-black text-neon">98%</div>
            <div className="text-sm text-muted-foreground">Hài Lòng</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
