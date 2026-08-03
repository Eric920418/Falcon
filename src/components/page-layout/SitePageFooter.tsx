import Link from 'next/link'
import { TrackedContactLink } from '@/components/TrackedContactLink'

export function SitePageFooter() {
  return (
    <footer className="relative border-t border-[#344349]/50 py-12 px-6 bg-[#1E2A2E]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              網站與 AI 開發
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/web-development" className="text-[#A8B6BC] hover:text-amber-500">網站與系統開發</Link></li>
              <li><Link href="/services/ai-tools" className="text-[#A8B6BC] hover:text-amber-500">AI 工具開發</Link></li>
              <li><Link href="/services/ai-voice-agent" className="text-[#A8B6BC] hover:text-amber-500">企業 AI 語音客服</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              SEO／GEO
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/seo" className="text-[#A8B6BC] hover:text-amber-500">SEO 搜尋成長</Link></li>
              <li><Link href="/services/geo" className="text-[#A8B6BC] hover:text-amber-500">GEO AI 搜尋</Link></li>
              <li><Link href="/blog" className="text-[#A8B6BC] hover:text-amber-500">實作文章</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              證據與公司
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/case-studies" className="text-[#A8B6BC] hover:text-amber-500">公開案例</Link></li>
              <li><Link href="/about" className="text-[#A8B6BC] hover:text-amber-500">實名負責人</Link></li>
              <li><Link href="/pricing" className="text-[#A8B6BC] hover:text-amber-500">公開起價</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              聯絡
            </h3>
            <ul className="space-y-2 text-sm">
              <li><TrackedContactLink channel="phone" placement="footer" href="tel:+886958801559" className="text-[#A8B6BC] hover:text-amber-500">0958-801-559</TrackedContactLink></li>
              <li><TrackedContactLink channel="email" placement="footer" href="mailto:contact@falconinformation.com" className="text-[#A8B6BC] hover:text-amber-500">contact@falconinformation.com</TrackedContactLink></li>
              <li><TrackedContactLink channel="line" placement="footer" href="https://lin.ee/7IjIYw2" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500">LINE 官方帳號</TrackedContactLink></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#344349]/30">
          <div className="text-center md:text-left">
            <p className="text-[#A8B6BC] text-sm">&copy; 2026 隼訊數位行銷</p>
            <p className="text-[#7A8A91] text-xs mt-1">網站與 AI 開發、SEO／GEO 搜尋成長｜服務台灣企業</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/falcon.information" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500 transition-colors text-sm">Instagram</a>
            <a href="https://www.threads.net/@falcon.information" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500 transition-colors text-sm">Threads</a>
            <a href="https://github.com/Eric920418" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500 transition-colors text-sm">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
