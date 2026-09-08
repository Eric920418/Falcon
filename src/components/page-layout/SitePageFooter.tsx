
import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { TrackedContactLink } from '@/components/TrackedContactLink'

export function SitePageFooter() {
  const { t, locale } = getI18n()

  return (
    <footer className="relative border-t border-[#344349]/50 py-12 px-6 bg-[#1E2A2E]">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("網站與 AI 開發")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/web-development" className="text-[#A8B6BC] hover:text-amber-500">{t("網站與系統開發")}</Link></li>
              <li><Link href="/services/ai-tools" className="text-[#A8B6BC] hover:text-amber-500">{t("AI 工具開發")}</Link></li>
              <li><Link href="/services/ai-voice-agent" className="text-[#A8B6BC] hover:text-amber-500">{t("企業 AI 語音客服")}</Link></li>
              <li><Link href="/services" className="text-[#A8B6BC] hover:text-amber-500">{t("所有服務項目")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("SEO／GEO")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/seo" className="text-[#A8B6BC] hover:text-amber-500">{t("SEO 搜尋成長")}</Link></li>
              <li><Link href="/services/geo" className="text-[#A8B6BC] hover:text-amber-500">{t("GEO AI 搜尋")}</Link></li>
              <li><Link href="/blog" className="text-[#A8B6BC] hover:text-amber-500">{t("實作文章")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("證據與公司")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/case-studies" className="text-[#A8B6BC] hover:text-amber-500">{t("公開案例")}</Link></li>
              <li><Link href="/about" className="text-[#A8B6BC] hover:text-amber-500">{t("實名負責人")}</Link></li>
              <li><Link href="/pricing" className="text-[#A8B6BC] hover:text-amber-500">{t("公開起價")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("服務地區")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/local/taoyuan-seo" className="text-[#A8B6BC] hover:text-amber-500">{t("桃園 SEO")}</Link></li>
              <li><Link href="/local/taoyuan-web-design" className="text-[#A8B6BC] hover:text-amber-500">{t("桃園網頁設計")}</Link></li>
              <li><Link href="/local/taipei-seo" className="text-[#A8B6BC] hover:text-amber-500">{t("台北 SEO")}</Link></li>
              <li><Link href="/local/taipei-digital-marketing" className="text-[#A8B6BC] hover:text-amber-500">{t("台北數位行銷")}</Link></li>
              <li><Link href="/local/xinbei-seo" className="text-[#A8B6BC] hover:text-amber-500">{t("新北 SEO")}</Link></li>
              <li><Link href="/local/hsinchu-web-design" className="text-[#A8B6BC] hover:text-amber-500">{t("新竹網頁設計")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {t("聯絡")}</h3>
            <ul className="space-y-2 text-sm">
              <li><TrackedContactLink channel="phone" placement="footer" href="tel:+886958801559" className="text-[#A8B6BC] hover:text-amber-500">{locale === 'zh-tw' ? '0958-801-559' : '+886 958 801 559'}</TrackedContactLink></li>
              <li><TrackedContactLink channel="email" placement="footer" href="mailto:contact@falconinformation.com" className="text-[#A8B6BC] hover:text-amber-500">{t("contact@falconinformation.com")}</TrackedContactLink></li>
              <li><TrackedContactLink channel="line" placement="footer" href="https://lin.ee/7IjIYw2" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500">{t("LINE 官方帳號")}</TrackedContactLink></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#344349]/30">
          <div className="text-center md:text-left">
            <p className="text-[#A8B6BC] text-sm">{t("&copy; 2026 隼訊數位行銷")}</p>
            <p className="text-[#7A8A91] text-xs mt-1">{t("網站與 AI 開發、SEO／GEO 搜尋成長｜服務台灣企業")}</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/falcon.information" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500 transition-colors text-sm">{t("Instagram")}</a>
            <a href="https://www.threads.net/@falcon.information" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500 transition-colors text-sm">{t("Threads")}</a>
            <a href="https://github.com/Eric920418" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500 transition-colors text-sm">{t("GitHub")}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
