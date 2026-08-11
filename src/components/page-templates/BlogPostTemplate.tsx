import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, Calendar, User } from 'lucide-react'
import type { BlogContent } from '@/lib/content/types'
import { primaryAuthor } from '@/lib/content/authors'

interface BlogPostTemplateProps {
  post: BlogContent
}

const serviceNames: Record<string, string> = {
  seo: 'SEO 搜尋引擎優化',
  geo: 'GEO 生成式引擎優化',
  'web-development': '網站建置',
  'ai-tools': 'AI 工具開發',
  'ai-voice-agent': '企業 AI 語音客服與電話自動化',
  'digital-ads': '數位廣告',
  'social-media': '社群經營',
  video: '短影音製作',
}

const caseStudyNames: Record<string, string> = {
  'gogocha-ai-dispatch': 'GoGoCha AI 電話與即時派單技術案例',
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
              <User size={14} />
              <Link href={primaryAuthor.url} className="hover:text-amber-500">
                {primaryAuthor.name}｜{primaryAuthor.jobTitle}
              </Link>
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} /> 發布 {post.datePublished}
            </span>
            {post.dateModified && post.dateModified !== post.datePublished && (
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} /> 最後更新 {post.dateModified}
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
              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-lg border border-[#344349]">
                  <table className="min-w-[680px] w-full border-collapse text-left text-sm">
                    {section.table.caption && (
                      <caption className="bg-stone-900/70 px-4 py-3 text-left text-sm text-[#A8B6BC]">
                        {section.table.caption}
                      </caption>
                    )}
                    <thead className="bg-[#1E2A2E]">
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header} scope="col" className="px-4 py-3 font-medium text-[#E0E5E8]">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rowIndex) => (
                        <tr key={`${section.heading}-${rowIndex}`} className="border-t border-[#344349] align-top">
                          {row.map((cell, cellIndex) => (
                            <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-3 leading-relaxed text-[#A8B6BC]">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {post.references && post.references.length > 0 && (
        <section id="references" className="px-6 py-12">
          <div className="max-w-3xl mx-auto border-t border-[#344349] pt-8">
            <h2 className="text-2xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              參考資料
            </h2>
            <ul className="space-y-3">
              {post.references.map((reference) => (
                <li key={reference.url} className="text-sm leading-relaxed text-[#A8B6BC]">
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:underline"
                  >
                    {reference.name}
                  </a>
                  <span>｜{reference.publisher}</span>
                  {reference.updatedAt && <span>｜{reference.updatedAt}</span>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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

      {post.relatedCaseStudies && post.relatedCaseStudies.length > 0 && (
        <section className="px-6 py-10">
          <div className="max-w-3xl mx-auto border border-emerald-800/50 bg-emerald-950/10 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-emerald-400">公開案例與可驗證證據</p>
            {post.relatedCaseStudies.map((slug) => (
              <Link
                key={slug}
                href={`/case-studies/${slug}`}
                className="mt-4 flex items-center justify-between gap-4 text-[#E0E5E8] hover:text-amber-500"
              >
                <span>{caseStudyNames[slug] ?? slug}</span>
                <ArrowRight size={17} />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            有相關需求？
          </h2>
          <Link
            href={post.relatedServices?.includes('ai-voice-agent') ? '/?service=ai_voice#contact' : '/#contact'}
            className="falcon-btn-primary inline-flex items-center"
          >
            聯絡我們 <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
