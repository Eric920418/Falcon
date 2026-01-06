'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: '首頁', id: 'hero' },
    { label: '關於我們', id: 'about' },
    { label: '作品案例', id: 'portfolio' },
    { label: '技術開發', id: 'tech-services' },
    { label: '數位行銷', id: 'marketing-services' },
    { label: '內容創作', id: 'content-services' },
    { label: '核心理念', id: 'philosophy' },
    { label: '聯絡我們', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1E2A2E]/95 backdrop-blur-md border-b border-[#344349]/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src="/logo.png"
            alt="隼訊數位行銷"
            width={44}
            height={44}
            className="rounded"
          />
          <span
            className="text-xl text-[#E0E5E8] group-hover:text-[#A8B6BC] transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            隼訊數位行銷
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative px-4 py-2 text-sm text-[#A8B6BC] hover:text-[#E0E5E8] transition-colors group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.label}
              {/* 底線動畫 */}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-[#5F808B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.button>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <motion.button
          className="hidden lg:flex falcon-btn-primary text-sm py-2 px-5"
          onClick={() => scrollToSection('contact')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          立即諮詢
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-[#C5CED2] hover:text-[#A8B6BC] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? '關閉選單' : '開啟選單'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[72px] bg-[#1E2A2E]/98 backdrop-blur-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-4 py-4 text-left text-lg text-[#C5CED2] hover:text-[#A8B6BC] transition-colors border-b border-[#344349]/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="w-6 text-[#5F808B] text-sm">0{index + 1}</span>
                  <span style={{ fontFamily: 'var(--font-display)' }}>{item.label}</span>
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <motion.button
                className="falcon-btn-primary mt-6 w-full text-center"
                onClick={() => scrollToSection('contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                立即諮詢
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
