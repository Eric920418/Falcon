import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/page-layout/PageShell'
import { getAllBlogPosts } from '@/lib/content/blog'
import {
  createMetadata,
  createBreadcrumbSchema,
  createWebPageSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

const contentTracks = [
  {
    label: '企業 AI 電話',
    description: '先理解架構，再比較成本與 IVR／真人客服，最後進入 PBX、CRM 與派單整合。',
    links: [
      ['AI 語音客服導入指南', '/blog/ai-voice-customer-service-guide'],
      ['AI 語音客服費用', '/blog/ai-voice-customer-service-cost'],
      ['AI、IVR 與真人比較', '/blog/ai-voice-vs-ivr-human-agent'],
      ['PBX、CRM 與派單串接', '/blog/ai-phone-pbx-crm-integration'],
    ],
  },
  {
    label: 'SEO／GEO 搜尋成長',
    description: '從技術收錄、內容品質與 Schema 開始，再理解 Google 與 Perplexity 的 AI 搜尋差異。',
    links: [
      ['GEO 生成式引擎優化指南', '/blog/geo-complete-guide-2026'],
      ['Google AI Overview 與 SEO', '/blog/google-ai-overview-basics'],
      ['Perplexity 爬蟲與引用量測', '/blog/perplexity-aeo-overview'],
      ['Schema.org 部署實作', '/blog/schema-org-tutorial'],
    ],
  },
  {
    label: '網站與 AI 系統決策',
    description: '比較網站建置與 AI 客服的成本結構，搭配實際案例判斷自建、整合與維護範圍。',
    links: [
      ['網站建置費用與成本', '/blog/website-pricing-2026'],
      ['AI 客服自建與 SaaS', '/blog/ai-customer-service-cost'],
      ['公開案例與可驗證證據', '/case-studies'],
      ['透明定價與報價因素', '/pricing'],
    ],
  },
] as const

export function generateMetadata(): Metadata {
  return createMetadata({
    title: '部落格｜網站、SEO／GEO 與 AI 系統實作',
    description:
      '隼訊實作文章：網站與 AI 系統開發、SEO／GEO 搜尋成長、結構化資料與量測，清楚區分官方規範、觀察與限制。',
    path: '/blog',
    keywords: ['行銷部落格', 'SEO 教學', 'GEO 教學', 'AI 行銷', '網站建置', '數位行銷'],
  })
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts().sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )

  const url = `${siteConfig.url}/blog`
  const schemas = [
    createWebPageSchema({
      name: '隼訊數位行銷部落格',
      description: '網站、AI 系統與 SEO／GEO 搜尋成長實作',
      url,
    }),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '部落格', path: '/blog' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${url}#blog`,
      name: '隼訊數位行銷部落格',
      url,
      publisher: { '@id': `${siteConfig.url}/#organization` },
      blogPost: posts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: `${siteConfig.url}/blog/${p.slug}`,
        datePublished: p.datePublished,
        description: p.description,
      })),
    },
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <div className="bg-stone-950">
        <section className="py-16 px-6 bg-gradient-to-b from-[#1E2A2E] to-stone-950">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-5xl text-[#E0E5E8] mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              部落格
            </h1>
            <p className="text-lg text-[#A8B6BC] max-w-2xl">
              網站、AI 系統與 SEO／GEO 搜尋成長實作。區分官方規範、觀察與限制，不販售捷徑。
            </p>
          </div>
        </section>

        <section className="px-6 py-12 border-b border-[#344349]">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-8">
              <p className="text-xs uppercase tracking-[0.16em] text-amber-500">Start here</p>
              <h2 className="mt-3 text-2xl md:text-3xl text-[#E0E5E8]" style={{ fontFamily: 'var(--font-display)' }}>
                依你現在的決策問題開始閱讀
              </h2>
              <p className="mt-3 text-[#A8B6BC] leading-relaxed">
                這裡不是依發布時間堆文章。每條路徑先回答原理，再進入成本、比較、整合或案例；如果只需要確認服務與報價，可直接前往對應頁面。
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {contentTracks.map((track) => (
                <article key={track.label} className="border border-[#344349] bg-stone-900/35 p-6">
                  <h3 className="text-xl text-[#E0E5E8]">{track.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A8B6BC]">{track.description}</p>
                  <ul className="mt-5 space-y-3">
                    {track.links.map(([label, href]) => (
                      <li key={href}>
                        <Link href={href} className="inline-flex items-center gap-2 text-sm text-amber-500 hover:underline">
                          {label} <ArrowRight size={13} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-2xl text-[#E0E5E8]" style={{ fontFamily: 'var(--font-display)' }}>全部實作文章</h2>
            <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-6 border border-[#344349] rounded-lg bg-stone-900/30 hover:border-amber-500 transition-colors group"
              >
                <h2
                  className="text-xl text-[#E0E5E8] mb-3 group-hover:text-amber-500 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {post.title}
                </h2>
                <p className="text-[#A8B6BC] text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-[#7A8A91]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> {post.datePublished}
                  </span>
                  <span className="inline-flex items-center gap-1 text-amber-500">
                    閱讀全文 <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
