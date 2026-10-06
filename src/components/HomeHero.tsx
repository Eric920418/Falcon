import { PageVisual } from '@/components/PageVisual'

import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function HomeHero() {
  const { t, locale } = getI18n()

  return (
    <section id="hero" className="relative min-h-[760px] flex items-center overflow-hidden bg-[var(--site-soft)] pt-24">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--site-soft)]/95 via-[var(--site-soft)]/95 to-[var(--site-bg)]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-16">
        <div className="visual-hero">
          <div>
          <div className="flex items-center gap-4 mb-7">
            <div className="brand-line" />
            <span className="text-[var(--site-muted)] text-sm tracking-[0.18em] uppercase">
              {t("Web, AI & Search Growth")}</span>
          </div>

          <h1 className="text-4xl lg:text-5xl text-[var(--site-text)] leading-[1.2] tracking-tight text-balance">
            {t("台灣企業網站與 AI 系統開發")}<span className="block text-falcon-gradient mt-3">{t("SEO／GEO 搜尋成長")}</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--site-muted)] mt-8 max-w-3xl leading-relaxed">
            {t("從可維護的網站與企業系統，到可索引、可量測的搜尋成長。 以公開案例、實名責任與合格詢盤檢驗成果，不販售保證排名或 AI 引用。")}</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/#contact" className="falcon-btn-primary inline-flex items-center justify-center gap-2">
              {t("討論專案需求")}<ArrowRight size={18} />
            </Link>
            <Link href="/case-studies" className="falcon-btn-outline inline-flex items-center justify-center">
              {t("查看公開案例")}</Link>
          </div>


          </div>
          <PageVisual path="/" priority />
        </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-14 pt-8 border-t border-[var(--site-border)]">
            {[
              '原始碼與帳號歸屬先確認',
              '技術量測與商業結果分開揭露',
              '錯誤與限制不隱藏',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[var(--site-muted)]">
                <CheckCircle2 size={17} className="text-[var(--site-accent)] shrink-0 mt-0.5" />
                <span>{t(item)}</span>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
