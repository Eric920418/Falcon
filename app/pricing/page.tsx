import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { PageShell } from '@/components/page-layout/PageShell'
import { pricingPages } from '@/lib/content/pricing'
import { primaryPriceDefinitions } from '@/lib/content/price-catalog'
import {
  createMetadata,
  createBreadcrumbSchema,
  createWebPageSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

export function generateMetadata(): Metadata {
  return createMetadata({
    title: '透明定價｜網站、AI、SEO／GEO 公開起價與 AI 電話客製報價',
    description: '隼訊公開網站、AI 工具、SEO／GEO 起價與報價因素；企業 AI 語音客服因電話、併發、系統整合與人工席位採客製報價。',
    path: '/pricing',
    keywords: ['網站建置費用', 'SEO 多少錢', 'GEO 報價', 'AI 開發費用', '行銷公司報價', '透明定價'],
  })
}

export default function PricingIndexPage() {
  const url = `${siteConfig.url}/pricing`
  const schemas = [
    createWebPageSchema({
      name: '透明定價',
      description: '隼訊所有服務透明定價公開',
      url,
    }),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '透明定價', path: '/pricing' },
    ]),
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <div className="bg-stone-950">
        <section className="py-16 px-6 bg-gradient-to-b from-[#1E2A2E] to-stone-950">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              透明定價
            </h1>
            <p className="text-lg text-[#A8B6BC] max-w-2xl">
              公開起價、基礎範圍與報價因素。正式報價仍會依需求逐項列出，不用模糊數字先吸引詢問。
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl text-[#E0E5E8] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              詳細報價頁
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {Object.values(pricingPages).map((p) => (
                <Link
                  key={p.slug}
                  href={`/pricing/${p.slug}`}
                  className="block p-6 border border-[#344349] rounded-lg hover:border-amber-500 transition-colors group bg-stone-900/30"
                >
                  <h3 className="text-lg text-[#E0E5E8] mb-2 group-hover:text-amber-500" style={{ fontFamily: 'var(--font-display)' }}>
                    {p.h1}
                  </h3>
                  <p className="text-sm text-[#A8B6BC] line-clamp-2">{p.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-amber-500">
                    查看詳細定價 <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href="/services/ai-voice-agent"
              className="mb-12 grid gap-5 border border-amber-600/40 bg-amber-950/10 p-6 hover:border-amber-500 md:grid-cols-[0.75fr_1.25fr] md:items-center"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-amber-500">Custom quotation</p>
                <h2 className="mt-3 text-2xl text-[#E0E5E8]">企業 AI 語音客服</h2>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-[#A8B6BC]">
                  採客製報價，不沿用一般聊天機器人的起價。依通話方向、尖峰併發、PBX／SIP、企業 API、錄音、人工席位、部署與 SLA 估算。
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-amber-500">查看報價因素 <ArrowRight size={14} /></span>
              </div>
            </Link>

            <section className="mb-12 grid gap-6 md:grid-cols-2">
              <div className="border border-[#344349] bg-stone-900/30 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-amber-500">How we quote</p>
                <h2 className="mt-3 text-2xl text-[#E0E5E8]">正式報價的形成方式</h2>
                <ol className="mt-5 space-y-3 text-sm leading-relaxed text-[#A8B6BC]">
                  <li><span className="mr-2 font-mono text-amber-500">01</span>確認目標、使用者、現況與必要整合。</li>
                  <li><span className="mr-2 font-mono text-amber-500">02</span>拆出第一階段範圍、風險與驗收方式。</li>
                  <li><span className="mr-2 font-mono text-amber-500">03</span>分列建置、持續費用與第三方實際用量。</li>
                  <li><span className="mr-2 font-mono text-amber-500">04</span>在合作前寫清楚不包含項目、移交與維護責任。</li>
                </ol>
              </div>
              <div className="border border-[#344349] bg-stone-900/30 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-amber-500">Comparison rule</p>
                <h2 className="mt-3 text-2xl text-[#E0E5E8]">比較報價要使用相同範圍</h2>
                <p className="mt-5 text-sm leading-relaxed text-[#A8B6BC]">
                  一份只列頁面或關鍵字數量的報價，不能直接和包含研究、設計、整合、測試、內容、部署及維護的報價比較。請逐項核對帳號與原始碼歸屬、第三方費用、修改輪次、資料提供責任、驗收與終止後移交。
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#A8B6BC]">
                  若預算不足，應縮小第一階段或改做盤點／POC；把完整需求塞進最低起價，通常只會把必要工作延後成追加費用。
                </p>
              </div>
            </section>

            <h2 className="text-2xl text-[#E0E5E8] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              兩大獲客 Hub 起價速覽
            </h2>
            <div className="border border-[#344349] rounded-lg overflow-x-auto bg-stone-900/30">
              <table className="min-w-[680px] w-full text-sm">
                <thead className="bg-[#1E2A2E]">
                  <tr>
                    <th className="px-6 py-3 text-left text-[#E0E5E8]">服務</th>
                    <th className="px-6 py-3 text-left text-[#E0E5E8]">起價</th>
                    <th className="px-6 py-3 text-left text-[#E0E5E8]">單位</th>
                    <th className="px-6 py-3 text-left text-[#E0E5E8]"></th>
                  </tr>
                </thead>
                <tbody>
                  {primaryPriceDefinitions.map((price) => (
                    <tr key={price.serviceSlug} className="border-t border-[#344349]/50">
                      <td className="px-6 py-4 text-[#A8B6BC]">{price.name}</td>
                      <td className="px-6 py-4 text-amber-500">NT$ {price.from.toLocaleString()}</td>
                      <td className="px-6 py-4 text-[#7A8A91]">/ {price.unit}</td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/services/${price.serviceSlug}`} className="text-sm text-amber-500 hover:underline inline-flex items-center gap-1">
                          詳情 <ChevronRight size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm text-[#A8B6BC]">
              不確定名詞差別？
              <Link
                href="/compare/seo-vs-geo-vs-aeo"
                className="ml-2 text-amber-500 hover:underline"
              >
                查看 SEO、GEO、AEO 的共同基礎與量測差異
              </Link>
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/#contact" className="falcon-btn-primary inline-flex items-center">
              預約免費諮詢 <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
