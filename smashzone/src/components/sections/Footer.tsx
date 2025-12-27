"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ChevronRight,
  Navigation,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Đặt Sân", href: "#pricing" },
  { label: "Bảng Giá", href: "#pricing" },
  { label: "Tiện Ích", href: "#amenities" },
];

const policyLinks = [
  { label: "Chính Sách Đặt Sân", href: "/policy/booking" },
  { label: "Điều Khoản Sử Dụng", href: "/policy/terms" },
  { label: "Chính Sách Bảo Mật", href: "/policy/privacy" },
  { label: "Quy Định Sân Chơi", href: "/policy/rules" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/smashzone", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Instagram, href: "https://instagram.com/smashzone", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Youtube, href: "https://youtube.com/smashzone", label: "Youtube", color: "hover:text-red-500" },
  { icon: MessageCircle, href: "https://zalo.me/0901234567", label: "Zalo", color: "hover:text-blue-400" },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh",
    action: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Hotline",
    value: "1900 xxxx xx",
    action: "tel:1900xxxxxx",
  },
  {
    icon: MessageCircle,
    label: "Zalo",
    value: "0901 234 567",
    action: "https://zalo.me/0901234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@smashzone.vn",
    action: "mailto:contact@smashzone.vn",
  },
  {
    icon: Clock,
    label: "Giờ mở cửa",
    value: "06:00 - 22:00 (Hàng ngày)",
    action: null,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-dark-gray overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal/10 rounded-full blur-[120px]" />

      <div className="relative z-10">
        {/* Map section - Enhanced */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Tìm Đường Đến SmashZone</h3>
              <p className="text-muted-foreground">Dễ dàng di chuyển, bãi đỗ xe miễn phí</p>
            </motion.div>

            <motion.div
              className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Map placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-dark to-neon/10">
                {/* Grid pattern */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(118, 215, 19, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(118, 215, 19, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Animated pin */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-neon/20 flex items-center justify-center">
                        <MapPin className="w-8 h-8 text-neon" />
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-full bg-neon/20 animate-ping" />
                    </div>
                  </motion.div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-white font-semibold mb-1">SmashZone Pickleball</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      123 Đường Nguyễn Văn Linh, Quận 7
                    </p>
                    <a
                      href="https://maps.google.com/?q=SmashZone+Pickleball"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon text-black font-semibold rounded-lg hover:bg-neon/90 transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Mở Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
            </motion.div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon to-cyan flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="8" cy="9" r="1.5" fill="currentColor" />
                      <circle cx="16" cy="9" r="1.5" fill="currentColor" />
                      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">SmashZone</h3>
                    <p className="text-xs text-cyan font-medium">PICKLEBALL COURT</p>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Sân Pickleball trong nhà đẳng cấp, mang đến trải nghiệm chơi bóng tuyệt vời 
                trong không gian mát lạnh, chuyên nghiệp.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground ${social.color} hover:border-current transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Liên Kết Nhanh</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 text-neon/50 group-hover:text-neon transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Policy links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Chính Sách</h4>
              <ul className="space-y-3">
                {policyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 text-neon/50 group-hover:text-neon transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-white mb-6">Liên Hệ Ngay</h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    {info.action ? (
                      <a
                        href={info.action}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-3 group hover:bg-white/5 p-2 -m-2 rounded-lg transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-neon/10 group-hover:bg-neon/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                          <info.icon className="w-4 h-4 text-neon" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                          <p className="text-sm text-white group-hover:text-neon transition-colors">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 p-2 -m-2">
                        <div className="w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <info.icon className="w-4 h-4 text-neon" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                          <p className="text-sm text-white">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Quick contact CTA */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="https://zalo.me/0901234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat Zalo Ngay
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {currentYear} SmashZone. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Made with <span className="text-neon">♥</span> for Pickleball lovers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding for mobile CTA */}
      <div className="h-20 md:h-0" />
    </footer>
  );
}
