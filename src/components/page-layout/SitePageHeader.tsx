'use client'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useI18n } from '@/lib/i18n/client'


import Link from '@/lib/i18n/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ChevronDown } from 'lucide-react'

type NavItem =
  | { label: string; href: string }
  | { label: string; items: { label: string; href: string }[] }

const navItems: NavItem[] = [
  {
    label: '網站與 AI 開發',
    items: [
      { label: '網站建置與軟體開發', href: '/services/web-development' },
      { label: 'AI 工具開發', href: '/services/ai-tools' },
      { label: '企業 AI 語音客服', href: '/services/ai-voice-agent' },
      { label: '所有服務項目', href: '/services' },
    ],
  },
  {
    label: 'SEO／GEO',
    items: [
      { label: 'SEO 搜尋成長', href: '/services/seo' },
      { label: 'GEO AI 搜尋', href: '/services/geo' },
      { label: '所有服務項目', href: '/services' },
    ],
  },
  { label: '案例', href: '/case-studies' },
  { label: '價格', href: '/pricing' },
  { label: '關於', href: '/about' },
  { label: '聯絡', href: '/#contact' },
]

export function SitePageHeader() {
  const { t, locale } = useI18n()

  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)

  return (
    <motion.header
      className="sticky top-0 left-0 right-0 z-40 bg-[#1E2A2E] border-b border-[#344349]/50"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt={t("隼訊數位行銷 — 回首頁")} width={44} height={44} className="rounded" />
          <span
            className="hidden sm:inline text-xl text-[#E0E5E8] group-hover:text-[#A8B6BC] transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t("隼訊數位行銷")}</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            if ('items' in item) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null) }}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') {
                      setOpenDropdown(null)
                      event.currentTarget.querySelector('button')?.focus()
                    }
                  }}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm text-[#A8B6BC] hover:text-[#E0E5E8]"
                    aria-expanded={openDropdown === item.label}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  >
                    {t(item.label)}<ChevronDown size={14} className={openDropdown === item.label ? 'rotate-180' : ''} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full w-64 pt-2">
                      <div className="rounded-lg border border-[#344349] bg-[#1E2A2E] py-2 shadow-xl">
                        {item.items.map((child) => (
                          <Link key={child.href} href={child.href} className="block px-4 py-2 text-sm text-[#A8B6BC] hover:bg-[#2D3B40] hover:text-amber-500">
                            {t(child.label)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm text-[#A8B6BC] hover:text-[#E0E5E8] transition-colors group"
              >
                {t(item.label)}
                <span className="absolute bottom-1 left-3 right-3 h-px bg-[#5F808B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            )
          })}
        </nav>

        <LanguageSwitcher />

        <Link href="/#contact" className="hidden xl:flex falcon-btn-primary text-sm py-2 px-5">
          {t("立即諮詢")}</Link>

        <button
          className="xl:hidden w-10 h-10 flex items-center justify-center text-[#C5CED2]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          id="page-menu-toggle"
          aria-expanded={isMobileOpen}
          aria-controls="page-mobile-menu"
          aria-label={t(isMobileOpen ? '關閉選單' : '開啟選單')}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="page-mobile-menu"
            onKeyDown={(event) => { if (event.key === 'Escape') { setIsMobileOpen(false); document.getElementById('page-menu-toggle')?.focus() } }}
            className="xl:hidden fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] overflow-y-auto bg-[#1E2A2E] z-30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((item, index) => {
                if ('items' in item) {
                  const isOpen = mobileDropdown === item.label
                  return (
                    <div key={item.label} className="border-b border-[#344349]/50">
                      <button
                        onClick={() => setMobileDropdown(isOpen ? null : item.label)}
                        className="flex w-full items-center gap-4 py-4 text-left text-lg text-[#C5CED2]"
                        aria-expanded={isOpen}
                      >
                        <span className="w-6 text-[#5F808B] text-sm">{t("0")}{index + 1}</span>
                        <span className="flex-1" style={{ fontFamily: 'var(--font-display)' }}>{t(item.label)}</span>
                        <ChevronDown size={18} className={isOpen ? 'rotate-180' : ''} />
                      </button>
                      {isOpen && (
                        <div className="mb-3 ml-10 flex flex-col">
                          {item.items.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="py-2.5 text-[#A8B6BC] hover:text-amber-500"
                            >
                              {t(child.label)}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-4 py-4 text-left text-lg text-[#C5CED2] border-b border-[#344349]/50"
                  >
                    <span className="w-6 text-[#5F808B] text-sm">{t("0")}{index + 1}</span>
                    <span style={{ fontFamily: 'var(--font-display)' }}>{t(item.label)}</span>
                  </Link>
                )
              })}
              <Link
                href="/#contact"
                onClick={() => setIsMobileOpen(false)}
                className="falcon-btn-primary mt-6 w-full text-center"
              >
                {t("立即諮詢")}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
