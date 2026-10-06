
import { getI18n } from '@/lib/i18n/server'
import { languageUi } from '@/lib/i18n/language-ui'
import Link from '@/lib/i18n/link'
import { TrackedContactLink } from '@/components/TrackedContactLink'

export function SitePageFooter() {
  const { t, locale } = getI18n()
  const ui = languageUi(locale)

  return (
    <footer className="relative border-t border-[var(--site-border)]/50 py-12 px-6 bg-[var(--site-soft)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-[var(--site-text)] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("網站與 AI 開發")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/web-development" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("網站與系統開發")}</Link></li>
              <li><Link href="/services/ai-tools" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("AI 工具開發")}</Link></li>
              <li><Link href="/services/ai-voice-agent" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("企業 AI 語音客服")}</Link></li>
              <li><Link href="/services" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("所有服務項目")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[var(--site-text)] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("SEO／GEO")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/seo" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("SEO 搜尋成長")}</Link></li>
              <li><Link href="/services/geo" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("GEO AI 搜尋")}</Link></li>
              <li><Link href="/blog" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("實作文章")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[var(--site-text)] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("證據與公司")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/case-studies" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("公開案例")}</Link></li>
              <li><Link href="/about" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("實名負責人")}</Link></li>
              <li><Link href="/pricing" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("公開起價")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[var(--site-text)] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("服務地區")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/local/taoyuan-seo" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("桃園 SEO")}</Link></li>
              <li><Link href="/local/taoyuan-web-design" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("桃園網頁設計")}</Link></li>
              <li><Link href="/local/taipei-seo" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("台北 SEO")}</Link></li>
              <li><Link href="/local/taipei-digital-marketing" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("台北數位行銷")}</Link></li>
              <li><Link href="/local/xinbei-seo" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("新北 SEO")}</Link></li>
              <li><Link href="/local/hsinchu-web-design" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("新竹網頁設計")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[var(--site-text)] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("聯絡")}</h3>
            <ul className="space-y-2 text-sm">
              <li><TrackedContactLink channel="phone" placement="footer" href="tel:+886958801559" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{locale === 'zh-tw' ? '0958-801-559' : '+886 958 801 559'}</TrackedContactLink></li>
              <li><TrackedContactLink channel="email" placement="footer" href="mailto:contact@falconinformation.com" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("contact@falconinformation.com")}</TrackedContactLink></li>
              <li><TrackedContactLink channel="line" placement="footer" href="https://lin.ee/7IjIYw2" target="_blank" rel="noopener noreferrer" className="text-[var(--site-muted)] hover:text-[var(--site-accent)]">{t("LINE 官方帳號")}</TrackedContactLink></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[var(--site-border)]/30">
          <div className="text-center md:text-left">
            <p className="text-[var(--site-muted)] text-sm">{t("&copy; 2026 隼訊數位行銷")}</p>
            <p className="text-[var(--site-muted)] text-xs mt-1">{t("網站與 AI 開發、SEO／GEO 搜尋成長｜服務台灣企業")}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm md:justify-start">
              <Link href="/privacy" className="text-[var(--site-muted)] hover:text-[var(--site-accent)] underline underline-offset-4">{ui.privacy}</Link>
              <Link href="/terms" className="text-[var(--site-muted)] hover:text-[var(--site-accent)] underline underline-offset-4">{ui.terms}</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/falcon.information" target="_blank" rel="noopener noreferrer" className="text-[var(--site-muted)] hover:text-[var(--site-accent)] transition-colors text-sm">{t("Instagram")}</a>
            <a href="https://www.threads.net/@falcon.information" target="_blank" rel="noopener noreferrer" className="text-[var(--site-muted)] hover:text-[var(--site-accent)] transition-colors text-sm">{t("Threads")}</a>
            <a href="https://github.com/Eric920418" target="_blank" rel="noopener noreferrer" className="text-[var(--site-muted)] hover:text-[var(--site-accent)] transition-colors text-sm">{t("GitHub")}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
