'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const serviceLinks = [
  { label: 'SEO 搜尋引擎優化', href: '/services/seo' },
  { label: 'GEO 生成式引擎優化', href: '/services/geo' },
  { label: 'AEO 答案引擎優化', href: '/services/aeo' },
  { label: '網站建置與軟體開發', href: '/services/web-development' },
  { label: 'AI 工具開發', href: '/services/ai-tools' },
  { label: '數位廣告投放', href: '/services/digital-ads' },
  { label: '社群經營', href: '/services/social-media' },
  { label: '短影音與影片製作', href: '/services/video' },
  { label: '量化交易系統開發', href: '/services/quant-trading' },
]

type NavItem =
  | { label: string; kind: 'scroll'; id: string }
  | { label: string; kind: 'link'; href: string }
  | { label: string; kind: 'dropdown'; items: { label: string; href: string }[] }

const navItems: NavItem[] = [
  { label: '首頁', kind: 'scroll', id: 'hero' },
  { label: '服務', kind: 'dropdown', items: serviceLinks },
  { label: '定價', kind: 'link', href: '/pricing' },
  { label: '部落格', kind: 'link', href: '/blog' },
  { label: '作品案例', kind: 'scroll', id: 'portfolio' },
  { label: '關於我們', kind: 'scroll', id: 'about' },
  { label: '聯絡我們', kind: 'scroll', id: 'contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        // 使用 requestAnimationFrame 节流，限制在 ~60fps
        requestAnimationFrame(() => {
          setIsScrolled(lastScrollY.current > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobile();
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#1E2A2E] border-b border-[#344349]/50'
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
          {navItems.map((item) => {
            if (item.kind === 'dropdown') {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-[#A8B6BC] hover:text-[#E0E5E8] transition-colors">
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="absolute left-0 top-full w-64 pt-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="rounded-lg border border-[#344349]/60 bg-[#1E2A2E] py-2 shadow-xl">
                          {item.items.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="block px-4 py-2 text-sm text-[#A8B6BC] hover:text-amber-500 hover:bg-[#2D3B40]/50 transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (item.kind === 'link') {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-[#A8B6BC] hover:text-[#E0E5E8] transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-[#5F808B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm text-[#A8B6BC] hover:text-[#E0E5E8] transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#5F808B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            );
          })}
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
            className="lg:hidden fixed inset-0 top-[72px] bg-[#1E2A2E] overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 flex flex-col gap-1 pb-24">
              {navItems.map((item) => {
                if (item.kind === 'dropdown') {
                  return (
                    <div key={item.label} className="border-b border-[#344349]/50">
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="w-full flex items-center justify-between py-4 text-left text-lg text-[#C5CED2] hover:text-[#A8B6BC] transition-colors"
                      >
                        <span style={{ fontFamily: 'var(--font-display)' }}>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="pb-3 pl-3 flex flex-col">
                          {item.items.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={closeMobile}
                              className="py-2.5 text-[#A8B6BC] hover:text-amber-500 transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.kind === 'link') {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMobile}
                      className="py-4 text-lg text-[#C5CED2] hover:text-[#A8B6BC] transition-colors border-b border-[#344349]/50"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="py-4 text-left text-lg text-[#C5CED2] hover:text-[#A8B6BC] transition-colors border-b border-[#344349]/50"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.label}
                  </button>
                );
              })}

              {/* Mobile CTA */}
              <button
                className="falcon-btn-primary mt-6 w-full text-center"
                onClick={() => scrollToSection('contact')}
              >
                立即諮詢
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
