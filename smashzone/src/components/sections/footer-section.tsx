"use client";

import { FadeInUp } from "@/components/shared/motion-wrapper";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube,
  MessageCircle,
  ExternalLink,
  Navigation
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/smashzone", color: "hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-blue-400" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/smashzone", color: "hover:bg-pink-500/20 hover:border-pink-500/30 hover:text-pink-400" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com/smashzone", color: "hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400" },
  { name: "Zalo", icon: MessageCircle, href: "https://zalo.me/smashzone", color: "hover:bg-blue-400/20 hover:border-blue-400/30 hover:text-blue-300" },
];

export function FooterSection() {
  return (
    <footer id="contact" className="bg-dark-gray relative overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        {/* Map Section */}
        <FadeInUp className="mb-12">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Map placeholder */}
            <div className="w-full h-64 md:h-80 rounded-2xl bg-dark-card border border-white/10 overflow-hidden relative group">
              {/* Simulated map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-dark-card">
                {/* Grid pattern simulating map */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(118, 215, 19, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(118, 215, 19, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
                
                {/* Simulated roads */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
                  <path d="M0 150 L400 150" stroke="#76D713" strokeWidth="3" />
                  <path d="M200 0 L200 300" stroke="#76D713" strokeWidth="3" />
                  <path d="M50 50 L350 250" stroke="#00E5FF" strokeWidth="2" opacity="0.5" />
                </svg>
              </div>

              {/* Location marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Pulse animation */}
                  <div className="absolute inset-0 animate-ping bg-lime/30 rounded-full" style={{ animationDuration: '2s' }} />
                  <div className="relative w-16 h-16 rounded-full bg-lime/20 border-2 border-lime flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-lime" />
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button className="bg-lime hover:bg-lime-dark text-dark font-semibold">
                  <Navigation className="w-4 h-4 mr-2" />
                  Xem trên Google Maps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Address overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark to-transparent">
                <p className="text-white font-semibold text-sm">SmashZone Pickleball</p>
                <p className="text-muted-foreground text-xs">123 Đường ABC, Quận XYZ, TP.HCM</p>
              </div>
            </div>

            {/* Contact card */}
            <div className="bg-dark-card/50 rounded-2xl border border-white/10 p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-lime" />
                Liên Hệ Nhanh
              </h3>

              {/* Hotline - Prominent */}
              <div className="mb-6 p-4 rounded-xl bg-lime/10 border border-lime/30">
                <p className="text-muted-foreground text-sm mb-1">Hotline (8:00 - 22:00)</p>
                <a href="tel:19001234" className="text-2xl md:text-3xl font-extrabold text-lime hover:text-lime-dark transition-colors">
                  1900 1234
                </a>
              </div>

              {/* Zalo contact */}
              <a 
                href="https://zalo.me/smashzone" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-4 hover:bg-blue-500/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Chat qua Zalo</p>
                  <p className="text-muted-foreground text-sm">Phản hồi trong 5 phút</p>
                </div>
                <ExternalLink className="w-4 h-4 text-blue-400 ml-auto" />
              </a>

              {/* Email */}
              <a 
                href="mailto:datsan@smashzone.vn"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-lime/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-muted-foreground text-sm">datsan@smashzone.vn</p>
                </div>
              </a>
            </div>
          </div>
        </FadeInUp>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-white/10">
          {/* Brand Column */}
          <FadeInUp className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo */}
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
                  className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                  title={social.name}
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

          {/* Operating Hours */}
          <FadeInUp delay={0.3}>
            <h4 className="text-white font-bold mb-4">Giờ Hoạt Động</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Thứ 2 - Thứ 6</p>
                  <p className="text-muted-foreground text-sm">6:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Thứ 7 - Chủ Nhật</p>
                  <p className="text-muted-foreground text-sm">6:00 - 23:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Đường ABC, Quận XYZ<br />
                  TP. Hồ Chí Minh
                </span>
              </li>
            </ul>
          </FadeInUp>
        </div>
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
