import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { PageShell } from '@/components/page-layout/PageShell'
import { getIndexableServices } from '@/lib/content/services'
import type { ServiceContent } from '@/lib/content/types'
import {
  createMetadata,
  createBreadcrumbSchema,
  createWebPageSchema,
  createItemListSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

const pageTitle = '企業網站、AI 系統開發與 SEO／GEO 搜尋成長服務'
const pageHeading = '企業網站、AI 開發與搜尋成長服務'
const pageDescription =
  '隼訊數位行銷的完整服務清單：網站與系統開發、AI 工具開發、企業 AI 語音客服、SEO 搜尋成長與 GEO AI 搜尋優化。每項服務都公開起價與交付內容。'

export const metadata: Metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/services',
  keywords: ['隼訊數位行銷 服務項目', '隼訊 服務', '數位行銷公司 服務內容'],
})

const devSlugs = ['web-development', 'ai-tools', 'ai-voice-agent']

function formatPrice(service: ServiceContent): string {
  if (!/^\d+$/.test(service.priceMin)) return service.priceMin
  return `NT$ ${Number(service.priceMin).toLocaleString('en-US')} / ${service.priceUnit}起`
}

function ServiceCard({ service }: { service: ServiceContent }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-lg border border-[#344349] bg-[#1E2A2E]/60 p-6 transition-colors hover:border-amber-500/60"
    >
      <h3
        className="mb-3 text-xl text-[#E0E5E8] group-hover:text-amber-500"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {service.h1}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-[#A8B6BC]">{service.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-amber-500">{formatPrice(service)}</span>
        <ArrowRight size={18} className="text-[#5F808B] transition-transform group-hover:translate-x-1 group-hover:text-amber-500" />
      </div>
    </Link>
  )
}

export default function ServicesPage() {
  const services = getIndexableServices()
  const devServices = services.filter((s) => devSlugs.includes(s.slug))
  const searchServices = services.filter((s) => !devSlugs.includes(s.slug))
  const url = `${siteConfig.url}/services`

  const schemas = [
    createWebPageSchema({
      name: pageTitle,
      description: pageDescription,
      url,
    }),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '服務項目', path: '/services' },
    ]),
    createItemListSchema({
      id: `${url}#service-list`,
      name: '隼訊數位行銷服務項目',
      description: pageDescription,
      itemType: 'Service',
      items: services.map((s) => ({
        name: s.h1,
        description: s.description,
        url: `${siteConfig.url}/services/${s.slug}`,
      })),
    }),
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <div className="bg-stone-950">
        <section className="relative bg-gradient-to-b from-[#1E2A2E] to-stone-950 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#7A8A91]" aria-label="麵包屑">
              <Link href="/" className="hover:text-amber-500">首頁</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-[#A8B6BC]">服務項目</span>
            </nav>
            <h1
              className="mb-6 text-4xl leading-tight text-[#E0E5E8] md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {pageHeading}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[#A8B6BC]">
              我們的工作分成兩條主軸：一條是「把東西做出來」——網站、系統、AI 工具與語音客服的開發建置；
              另一條是「讓對的人找到你」——傳統搜尋（SEO）與 AI 搜尋（GEO）的長期成長。
              兩條軸可以單獨委託，也常常互相銜接：先把網站體質做好，再開始經營搜尋。
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl space-y-14">
            <div>
              <h2
                className="mb-2 text-2xl text-[#E0E5E8] md:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                網站與 AI 開發
              </h2>
              <p className="mb-8 max-w-3xl text-[#A8B6BC]">
                從企業官網、電商到客製系統與 AI 工具，交付內容都包含原始碼與後台，帳號與資料歸屬客戶。
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {devServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>

            <div>
              <h2
                className="mb-2 text-2xl text-[#E0E5E8] md:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SEO／GEO 搜尋成長
              </h2>
              <p className="mb-8 max-w-3xl text-[#A8B6BC]">
                以技術修正、實名內容與案例證據累積搜尋能見度；GEO 方案另外量測 ChatGPT、Perplexity 等 AI 平台的引用狀況。我們不販售保證排名或保證引用。
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {searchServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#344349]/50 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2
              className="mb-4 text-2xl text-[#E0E5E8] md:text-3xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              合作怎麼開始
            </h2>
            <p className="mb-8 max-w-3xl leading-relaxed text-[#A8B6BC]">
              不論哪項服務，第一步都是需求訪談：你先說現況與目標，我們評估做不做得到、值不值得做。
              評估後會給白紙黑字的報價與範圍——開發案寫清楚頁面、功能與驗收條件；
              月費服務寫清楚每月交付項目與退場方式。如果評估後認為你現階段不需要這項服務，我們會直接說。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" className="falcon-btn-primary">
                查看完整定價 <ArrowRight size={18} className="ml-2 inline" />
              </Link>
              <Link
                href="/case-studies"
                className="rounded border border-[#5F808B] px-6 py-3 text-[#C5CED2] transition-colors hover:bg-[#344349]/30"
              >
                看公開案例
              </Link>
              <Link
                href="/compare/seo-vs-geo-vs-aeo"
                className="rounded border border-[#5F808B] px-6 py-3 text-[#C5CED2] transition-colors hover:bg-[#344349]/30"
              >
                SEO 與 GEO 差在哪？
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
