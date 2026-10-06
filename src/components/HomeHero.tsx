import { PageVisual } from '@/components/PageVisual'
import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'

export function HomeHero() {
  const { t } = getI18n()

  return (
    <section id="hero" className="home-hero">
      <div className="home-hero-inner">
        <div className="home-hero-composition">
          <div className="home-hero-copy">
            <p className="home-hero-eyebrow">
              <span aria-hidden="true" />
              {t('Web, AI & Search Growth')}
            </p>
            <h1 className="home-hero-heading">
              <span className="home-hero-title">{t('台灣企業網站與 AI 系統開發')}</span>
              <span className="home-hero-growth">{t('SEO／GEO 搜尋成長')}</span>
            </h1>
            <p className="home-hero-description">
              {t('從可維護的網站與企業系統，到可索引、可量測的搜尋成長。 以公開案例、實名責任與合格詢盤檢驗成果，不販售保證排名或 AI 引用。')}
            </p>
            <div className="home-hero-actions">
              <Link href="/#contact" className="home-hero-primary">
                <span>{t('討論專案需求')}</span>
                <span className="home-hero-action-icon" aria-hidden="true"><ArrowUpRight size={20} /></span>
              </Link>
              <Link href="/case-studies" className="home-hero-secondary">
                {t('查看公開案例')}<ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="home-hero-stage">
            <div className="home-hero-field" aria-hidden="true" />
            <PageVisual path="/" priority className="home-hero-art" sizes="(min-width: 1280px) 840px, (min-width: 1024px) 68vw, (min-width: 768px) 80vw, 100vw" />
          </div>
        </div>
        <div className="home-hero-proof">
          {[
            '原始碼與帳號歸屬先確認',
            '技術量測與商業結果分開揭露',
            '錯誤與限制不隱藏',
          ].map(item => (
            <div key={item}>
              <Check size={17} aria-hidden="true" />
              <span>{t(item)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
