'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: '服務', href: '/services/seo' },
  { label: 'GEO', href: '/services/geo' },
  { label: '報價', href: '/pricing' },
  { label: '部落格', href: '/blog' },
  { label: '本地服務', href: '/local/taoyuan-seo' },
  { label: '關於', href: '/#about' },
  { label: '聯絡', href: '/#contact' },
]

export function SitePageHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 left-0 right-0 z-40 bg-[#1E2A2E] border-b border-[#344349]/50"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="隼訊數位行銷 — 回首頁" width={44} height={44} className="rounded" />
          <span
            className="text-xl text-[#E0E5E8] group-hover:text-[#A8B6BC] transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            隼訊數位行銷
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-sm text-[#A8B6BC] hover:text-[#E0E5E8] transition-colors group"
            >
              {item.label}
              <span className="absolute bottom-1 left-3 right-3 h-px bg-[#5F808B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className="hidden lg:flex falcon-btn-primary text-sm py-2 px-5">
          立即諮詢
        </Link>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-[#C5CED2]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? '關閉選單' : '開啟選單'}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[72px] bg-[#1E2A2E] z-30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-4 py-4 text-left text-lg text-[#C5CED2] border-b border-[#344349]/50"
                >
                  <span className="w-6 text-[#5F808B] text-sm">0{index + 1}</span>
                  <span style={{ fontFamily: 'var(--font-display)' }}>{item.label}</span>
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMobileOpen(false)}
                className="falcon-btn-primary mt-6 w-full text-center"
              >
                立即諮詢
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
