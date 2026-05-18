import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/page-layout/PageShell'
import { getAllBlogPosts } from '@/lib/content/blog'
import {
  createMetadata,
  createBreadcrumbSchema,
  createWebPageSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

export function generateMetadata(): Metadata {
  return createMetadata({
    title: '部落格｜SEO、GEO、AEO、AI 行銷實戰知識庫',
    description:
      '隼訊數位行銷部落格：SEO、GEO、AEO 搜尋優化教學、AI 行銷實戰、網站開發與 AI 工具導入指南。為台灣中小企業而寫。',
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
      description: 'SEO、GEO、AEO、AI 行銷實戰知識庫',
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
              SEO、GEO、AEO 搜尋優化教學、AI 行銷實戰、網站開發指南。為台灣中小企業而寫。
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
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
        </section>
      </div>
    </PageShell>
  )
}
