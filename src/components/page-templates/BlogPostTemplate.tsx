import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, Calendar, Users, ShieldCheck } from 'lucide-react'
import type { BlogContent } from '@/lib/content/types'
import { siteConfig } from '@/lib/seo'

interface BlogPostTemplateProps {
  post: BlogContent
}

const serviceNames: Record<string, string> = {
  seo: 'SEO 搜尋引擎優化',
  geo: 'GEO 生成式引擎優化',
  aeo: 'AEO 答案引擎優化',
  'web-development': '網站建置',
  'ai-tools': 'AI 工具開發',
  'digital-ads': '數位廣告',
  'social-media': '社群經營',
  video: '短影音製作',
}

export function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  return (
    <div className="bg-stone-950">
      <section id="post-hero" className="relative py-16 px-6 bg-gradient-to-b from-[#1E2A2E] to-stone-950">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-[#7A8A91] mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-amber-500">首頁</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-amber-500">部落格</Link>
            <ChevronRight size={14} />
            <span className="text-[#A8B6BC] truncate">{post.title}</span>
          </nav>

          <h1
            className="text-3xl md:text-4xl text-[#E0E5E8] mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {post.h1}
          </h1>
          <p className="text-lg text-[#A8B6BC] leading-relaxed">{post.intro}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#7A8A91]">
            <span className="inline-flex items-center gap-1">
              <Users size={14} /> {siteConfig.editorial.teamName}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} /> 發布 {post.datePublished}
            </span>
            {post.dateModified && post.dateModified !== post.datePublished && (
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} /> 最後更新 {post.dateModified}
              </span>
            )}
            {post.reviewedByRole && (
              <span className="inline-flex items-center gap-1">
                <ShieldCheck size={14} /> 審稿：{post.reviewedByRole}
              </span>
            )}
          </div>
        </div>
      </section>

      {post.toc && post.toc.length > 0 && (
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto p-6 border border-[#344349] rounded-lg bg-stone-900/30">
            <h2 className="text-sm text-[#7A8A91] mb-3 uppercase tracking-wider">本文章節</h2>
            <ul className="space-y-2 text-[#A8B6BC]">
              {post.toc.map((item, i) => (
                <li key={i}>· {item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="post-content" className="py-8 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {post.sections.map((section, idx) => (
            <article key={idx}>
              <h2
                className="text-2xl md:text-3xl text-[#E0E5E8] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {section.heading}
              </h2>
              {section.body && <p className="text-[#A8B6BC] leading-relaxed mb-4">{section.body}</p>}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#A8B6BC]">
                      <Check size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {post.howTo && (
        <section className="py-12 px-6 bg-[#1E2A2E]/50">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl text-[#E0E5E8] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {post.howTo.name}
            </h2>
            <p className="text-[#A8B6BC] mb-6">{post.howTo.description}</p>
            <ol className="space-y-4">
              {post.howTo.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[#E0E5E8] mb-1">{step.name}</h3>
                    <p className="text-[#A8B6BC]">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {post.faq && post.faq.length > 0 && (
        <section id="post-faq" className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-[#E0E5E8] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              常見問題
            </h2>
            <div className="space-y-4">
              {post.faq.map((item, i) => (
                <details key={i} className="group border border-[#344349] rounded-lg overflow-hidden bg-stone-900/30">
                  <summary className="px-6 py-4 cursor-pointer text-[#E0E5E8] hover:bg-[#344349]/30 flex justify-between items-center">
                    <span className="font-medium">{item.question}</span>
                    <ChevronRight size={20} className="text-[#7A8A91] group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-4 text-[#A8B6BC] leading-relaxed">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {post.relatedServices && post.relatedServices.length > 0 && (
        <section className="py-12 px-6 bg-[#1E2A2E]/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl text-[#E0E5E8] mb-4">相關服務</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {post.relatedServices.map((slug) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="block p-4 border border-[#344349] rounded-lg hover:border-amber-500 transition-colors text-[#A8B6BC] hover:text-[#E0E5E8]"
                >
                  <span className="text-sm">{serviceNames[slug] ?? slug}</span>
                  <ArrowRight size={16} className="inline ml-2" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            有相關需求？
          </h2>
          <Link href="/#contact" className="falcon-btn-primary inline-flex items-center">
            聯絡我們 <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
