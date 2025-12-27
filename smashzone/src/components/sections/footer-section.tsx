"use client";

import { FadeInUp } from "@/components/shared/motion-wrapper";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Trang Chủ", href: "/" },
  { name: "Đặt Sân", href: "#booking" },
  { name: "Bảng Giá", href: "#pricing" },
  { name: "Giải Đấu", href: "#tournaments" },
  { name: "Tin Tức", href: "#news" },
];

const policies = [
  { name: "Điều Khoản Sử Dụng", href: "/terms" },
  { name: "Chính Sách Bảo Mật", href: "/privacy" },
  { name: "Chính Sách Hoàn Tiền", href: "/refund" },
  { name: "FAQs", href: "/faqs" },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/smashzone" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/smashzone" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com/smashzone" },
];

export function FooterSection() {
  return (
    <footer className="bg-dark-gray relative overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <FadeInUp className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo placeholder */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-lime/20 border border-lime/30 flex items-center justify-center">
                  <span className="text-lime font-extrabold text-xl">SZ</span>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">SmashZone</h3>
                  <span className="text-xs text-lime font-medium">PICKLEBALL COURT</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sân chơi Pickleball trong nhà đẳng cấp, nơi kết nối đam mê và cộng đồng thể thao.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-lime/20 hover:border-lime/30 hover:text-lime transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </FadeInUp>

          {/* Quick Links */}
          <FadeInUp delay={0.1}>
            <h4 className="text-white font-bold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-lime transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Policies */}
          <FadeInUp delay={0.2}>
            <h4 className="text-white font-bold mb-4">Chính Sách</h4>
            <ul className="space-y-3">
              {policies.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-lime transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Contact Info */}
          <FadeInUp delay={0.3}>
            <h4 className="text-white font-bold mb-4">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Đường ABC, Quận XYZ<br />
                  TP. Hồ Chí Minh, Việt Nam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lime flex-shrink-0" />
                <a href="tel:1900xxxx" className="text-muted-foreground text-sm hover:text-lime transition-colors">
                  1900 xxxx
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lime flex-shrink-0" />
                <a href="mailto:info@smashzone.vn" className="text-muted-foreground text-sm hover:text-lime transition-colors">
                  info@smashzone.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Thứ 2 - Chủ Nhật<br />
                  6:00 - 22:00
                </span>
              </li>
            </ul>
          </FadeInUp>
        </div>

        {/* Map placeholder */}
        <FadeInUp delay={0.4} className="mt-12">
          <div className="w-full h-48 md:h-64 rounded-xl bg-dark-card border border-white/10 overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-lime/50 mx-auto mb-2" />
                <span className="text-muted-foreground text-sm">Bản đồ sẽ hiển thị tại đây</span>
              </div>
            </div>
            {/* Placeholder pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="mapPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="10" x2="10" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-lime" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#mapPattern)" />
              </svg>
            </div>
          </div>
        </FadeInUp>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 SmashZone. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with <span className="text-lime">♥</span> in Vietnam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
