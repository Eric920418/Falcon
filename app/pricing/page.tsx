import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { PageShell } from '@/components/page-layout/PageShell'
import { pricingPages } from '@/lib/content/pricing'
import { getAllServices } from '@/lib/content/services'
import {
  createMetadata,
  createBreadcrumbSchema,
  createWebPageSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

export function generateMetadata(): Metadata {
  return createMetadata({
    title: '透明定價｜隼訊數位行銷所有服務報價公開',
    description: '隼訊所有服務透明定價：網站建置 8 萬起、SEO 3 萬/月、GEO 5 萬/月、AI 開發 12 萬起。比業界平均低 25-30%。',
    path: '/pricing',
    keywords: ['網站建置費用', 'SEO 多少錢', 'GEO 報價', 'AI 開發費用', '行銷公司報價', '透明定價'],
  })
}

export default function PricingIndexPage() {
  const url = `${siteConfig.url}/pricing`
  const services = getAllServices()

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
              90% 的廠商會問你「預算多少」再殺到底。我們先公開定價，讓你看完再決定。
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

            <h2 className="text-2xl text-[#E0E5E8] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              所有服務起價速覽
            </h2>
            <div className="border border-[#344349] rounded-lg overflow-hidden bg-stone-900/30">
              <table className="w-full text-sm">
                <thead className="bg-[#1E2A2E]">
                  <tr>
                    <th className="px-6 py-3 text-left text-[#E0E5E8]">服務</th>
                    <th className="px-6 py-3 text-left text-[#E0E5E8]">起價</th>
                    <th className="px-6 py-3 text-left text-[#E0E5E8]">單位</th>
                    <th className="px-6 py-3 text-left text-[#E0E5E8]"></th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s) => (
                    <tr key={s.slug} className="border-t border-[#344349]/50">
                      <td className="px-6 py-4 text-[#A8B6BC]">{s.h1}</td>
                      <td className="px-6 py-4 text-amber-500">NT$ {Number(s.priceMin).toLocaleString()}</td>
                      <td className="px-6 py-4 text-[#7A8A91]">/ {s.priceUnit}</td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/services/${s.slug}`} className="text-sm text-amber-500 hover:underline inline-flex items-center gap-1">
                          詳情 <ChevronRight size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
