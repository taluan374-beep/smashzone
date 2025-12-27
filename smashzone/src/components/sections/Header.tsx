"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Giới Thiệu", href: "#about" },
  { label: "Bảng Giá", href: "#pricing" },
  { label: "Liên Hệ", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark/95 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon to-cyan flex items-center justify-center group-hover:shadow-lg group-hover:shadow-neon/30 transition-shadow duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="8" cy="9" r="1.5" fill="currentColor" />
                  <circle cx="16" cy="9" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="15" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-black text-white hidden sm:block">
                SmashZone
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-neon transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:1900xxxxxx"
                className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-cyan transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>1900 xxxx xx</span>
              </a>
              <Button
                size="sm"
                className="bg-neon hover:bg-neon/90 text-black font-bold px-6 rounded-lg glow-neon-sm hover:glow-neon transition-all duration-300"
              >
                Đặt Sân
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-dark-gray border-l border-white/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-6 pt-20">
                {/* Nav links */}
                <nav className="space-y-4 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-lg font-semibold text-white hover:text-neon transition-colors py-2 border-b border-white/10"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact info */}
                <div className="space-y-4 mb-8">
                  <a
                    href="tel:1900xxxxxx"
                    className="flex items-center gap-3 text-white/80 hover:text-cyan transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Hotline</p>
                      <p className="font-semibold">1900 xxxx xx</p>
                    </div>
                  </a>
                </div>

                {/* CTA */}
                <Button className="w-full bg-neon hover:bg-neon/90 text-black font-bold py-6 rounded-xl glow-neon-sm">
                  Đặt Sân Ngay
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
