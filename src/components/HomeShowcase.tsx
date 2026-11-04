import type { ReactNode } from 'react'
import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ImageWithFallback as Image } from '@/components/figma/ImageWithFallback'
import { ServiceCtaLink } from '@/components/ServiceCtaLink'
import { ribbonPaths } from '@/lib/home3d/ribbon'
import { ArrowUpRight } from 'lucide-react'

export function HomeShowcase({ children }: { children: ReactNode }) {
  const { t } = getI18n()
  return <section id="manifesto" className="fh-manifesto fh-section">
    <svg className="fh-ribbon" viewBox="0 0 1400 1000" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="flight-ribbon" x1="0" y1="0" x2="1000" y2="900" gradientUnits="userSpaceOnUse"><stop stopColor="#2445ee"/><stop offset=".52" stopColor="#5672f4"/><stop offset="1" stopColor="#2140d7"/></linearGradient></defs>
      <path className="fh-ribbon-desktop" d={ribbonPaths.desktop} fill="none" stroke="url(#flight-ribbon)" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <path className="fh-ribbon-mobile" d={ribbonPaths.mobile} fill="none" stroke="url(#flight-ribbon)" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
    <div className="fh-manifesto-visual" data-home-stage="manifesto" aria-hidden="true">
    <div className="fh-floating-feather" aria-hidden="true"><Image src="/models/falcon-rotor.webp?v=flow4" alt="" fill unoptimized sizes="(max-width: 767px) 140px, 280px" className="object-contain" /></div>
    </div>
    <h2 className="fh-display" data-reveal>{t('想得更遠。')}<br />{t('做得更深。')}</h2>
    <div className="fh-manifesto-detail">
      <span className="fh-wordmark-small" aria-hidden="true">Ideas take flight.</span>
      <div>
        <p className="fh-statement">{t('我們把設計、程式與 AI 放在同一張工作桌上，讓品牌的想法成為可以使用、持續成長的數位產品。')}</p>
        <Link href="/about" className="fh-round-link">{t('認識隼訊')}<ArrowUpRight size={20} aria-hidden="true" /></Link>
      </div>
    </div>
    <div className="fh-montage" aria-label={t('真實專案畫面選輯')}>
      <div className="fh-montage-image fh-montage-left"><Image src="/climatix-cover.webp" alt={t('CLIMATIX 溫室氣體盤查系統')} fill sizes="50vw" className="object-cover" /></div>
      <div className="fh-montage-image fh-montage-right"><Image src="/RollOn.png" alt={t('ROLL ON. 外商顧問企業官網')} fill sizes="50vw" className="object-cover" /></div>
      <div className="fh-montage-image fh-montage-main"><Image src="/nova-product-cover.webp" alt={t('NOVA AI 創業營運平台')} fill sizes="(min-width: 768px) 70vw, 90vw" className="object-cover" /></div>
      <span className="fh-montage-word" aria-hidden="true">Made real.</span>
    </div>
    <div className="fh-capabilities">
      <Link id="build" href="/services/web-development">{t('網站與系統開發')}<ArrowUpRight size={18} aria-hidden="true" /></Link>
      <Link href="/services/ai-tools">{t('AI 工具開發')}<ArrowUpRight size={18} aria-hidden="true" /></Link>
      <Link id="grow" href="/services/geo">{t('SEO／GEO 搜尋成長')}<ArrowUpRight size={18} aria-hidden="true" /></Link>
      <ServiceCtaLink href="/?service=ai_voice#contact" placement="home_ai_voice">{t('提出流程 Demo 需求')}<ArrowUpRight size={18} aria-hidden="true" /></ServiceCtaLink>
    </div>
    <div className="fh-editorial">{children}</div>
  </section>
}
