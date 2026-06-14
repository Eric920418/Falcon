import Link from 'next/link'
import Image from 'next/image'

export function SitePageFooter() {
  return (
    <footer className="relative border-t border-[#344349]/50 py-12 px-6 bg-[#1E2A2E]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              搜尋優化
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/seo" className="text-[#A8B6BC] hover:text-amber-500">SEO 搜尋引擎優化</Link></li>
              <li><Link href="/services/geo" className="text-[#A8B6BC] hover:text-amber-500">GEO 生成式引擎優化</Link></li>
              <li><Link href="/services/aeo" className="text-[#A8B6BC] hover:text-amber-500">AEO 答案引擎優化</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              技術開發
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/web-development" className="text-[#A8B6BC] hover:text-amber-500">網站建置</Link></li>
              <li><Link href="/services/ai-tools" className="text-[#A8B6BC] hover:text-amber-500">AI 工具開發</Link></li>
              <li><Link href="/services/quant-trading" className="text-[#A8B6BC] hover:text-amber-500">量化交易系統開發</Link></li>
              <li><Link href="/pricing" className="text-[#A8B6BC] hover:text-amber-500">透明定價</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              行銷服務
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/digital-ads" className="text-[#A8B6BC] hover:text-amber-500">數位廣告</Link></li>
              <li><Link href="/services/social-media" className="text-[#A8B6BC] hover:text-amber-500">社群經營</Link></li>
              <li><Link href="/services/video" className="text-[#A8B6BC] hover:text-amber-500">短影音製作</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#E0E5E8] mb-3 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              本地服務
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/local/taoyuan-seo" className="text-[#A8B6BC] hover:text-amber-500">桃園 SEO 公司</Link></li>
              <li><Link href="/local/taipei-digital-marketing" className="text-[#A8B6BC] hover:text-amber-500">台北數位行銷</Link></li>
              <li><Link href="/blog" className="text-[#A8B6BC] hover:text-amber-500">部落格</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#344349]/30">
          <div className="text-center md:text-left">
            <p className="text-[#A8B6BC] text-sm">&copy; 2026 隼訊數位行銷</p>
            <p className="text-[#7A8A91] text-xs mt-1">讓每個品牌都能被聽見</p>
            <p className="text-[#7A8A91] text-xs mt-1">桃園市桃園區民權路6號5樓之4 ｜ 0958-801-559</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/falcon.information" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500 transition-colors text-sm">Instagram</a>
            <a href="https://www.threads.net/@falcon.information" target="_blank" rel="noopener noreferrer" className="text-[#A8B6BC] hover:text-amber-500 transition-colors text-sm">Threads</a>
            <a href="https://lin.ee/7IjIYw2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#A8B6BC] hover:text-amber-500 transition-colors text-sm">
              <Image
                src="https://qr-official.line.me/gs/M_154wjvkx_GW.png?oat_content=qr"
                alt="隼訊數位行銷 LINE 官方帳號 QR Code"
                width={40}
                height={40}
                className="rounded"
              />
              <span>LINE</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
