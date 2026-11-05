import { ImageWithFallback as Image } from '@/components/figma/ImageWithFallback'
import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

export function HomeHero() {
  const { t } = getI18n()
  return (
    <section id="hero" className="fh-hero">
      <div className="fh-hero-heading">
        <h1>{t('以設計與技術，讓想像成形。')}</h1>
        <div className="fh-hero-description">
          <p className="fh-hero-specialty">{t('台灣企業網站與 AI 系統開發')}<br />{t('SEO／GEO 搜尋成長')}</p>
          <p>{t('從可維護的網站與企業系統，到可索引、可量測的搜尋成長。 以公開案例、實名責任與合格詢盤檢驗成果，不販售保證排名或 AI 引用。')}</p>
          <Link href="/#cases" className="fh-text-link">{t('探索作品')}<ArrowUpRight size={20} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="fh-hero-stage" data-home-stage="hero">
        <picture><source media="(max-width: 767px)" srcSet="/models/falcon-hero-mobile.webp?v=brand-sculptures2" /><Image src="/models/falcon-hero.webp?v=brand-sculptures2" alt={t('銀白金屬羽片構成的原創隼翼雕塑')} fill unoptimized preload sizes="100vw" className="fh-poster fh-hero-poster" /></picture>
      </div>
      <div className="fh-hero-bottom">
        <span className="fh-stage-signature">FALCON<small>{t('Web, AI & Search Growth')}</small></span>
        <div className="fh-hero-shortcuts"><a href="#services">{t('所有服務項目')}</a><a href="#pricing">{t('公開起價')}</a><a href="#insights">{t('實作文章')}</a></div>
        <a href="#manifesto">{t('向下探索')}<ArrowDown size={17} aria-hidden="true" /></a>
      </div>
      <ul className="fh-hero-proof">{['原始碼與帳號歸屬先確認', '技術量測與商業結果分開揭露', '錯誤與限制不隱藏'].map(item => <li key={item}>{t(item)}</li>)}</ul>
    </section>
  )
}
