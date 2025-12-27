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
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Đặt Sân", href: "#pricing" },
  { label: "Bảng Giá", href: "#pricing" },
  { label: "Liên Hệ", href: "#contact" },
];

const policyLinks = [
  { label: "Chính Sách Đặt Sân", href: "/policy/booking" },
  { label: "Điều Khoản Sử Dụng", href: "/policy/terms" },
  { label: "Chính Sách Bảo Mật", href: "/policy/privacy" },
  { label: "Quy Định Sân Chơi", href: "/policy/rules" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/smashzone", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/smashzone", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/smashzone", label: "Youtube" },
  { icon: MessageCircle, href: "https://zalo.me/smashzone", label: "Zalo" },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh",
  },
  {
    icon: Phone,
    label: "Hotline",
    value: "1900 xxxx xx",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@smashzone.vn",
  },
  {
    icon: Clock,
    label: "Giờ mở cửa",
    value: "06:00 - 22:00 (Hàng ngày)",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-gray overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />
      
      {/* Background effects */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal/10 rounded-full blur-[120px]" />

      <div className="relative z-10">
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
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-neon hover:border-neon/50 hover:bg-neon/10 transition-all duration-300"
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
              <h4 className="text-lg font-bold text-white mb-6">Liên Hệ</h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <info.icon className="w-4 h-4 text-neon" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                      <p className="text-sm text-white">{info.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden bg-dark border border-white/10">
              {/* Map placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-neon/40 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">Google Map Placeholder</p>
                  <p className="text-xs text-muted-foreground mt-1">123 Đường ABC, Quận XYZ, TP.HCM</p>
                </div>
              </div>
              
              {/* Grid overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(118, 215, 19, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(118, 215, 19, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>
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
    </footer>
  );
}
