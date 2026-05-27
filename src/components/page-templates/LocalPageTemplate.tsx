import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, MapPin, ExternalLink } from 'lucide-react'
import type { LocalContent, CaseStudy } from '@/lib/content/types'

interface LocalPageTemplateProps {
  page: LocalContent
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  // 根據 consentToPublish 等級條件式渲染
  const showMetrics = study.consentToPublish === 'full' || study.consentToPublish === 'metrics-only'
  const hasDates = study.engagementStart || study.engagementEnd
  const hasResults = study.result && study.result.length > 0
  const hasBaseline = study.baseline && study.baseline.length > 0

  return (
    <div className="p-5 border border-[#344349] rounded-lg bg-stone-900/30">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg text-[#E0E5E8]" style={{ fontFamily: 'var(--font-display)' }}>
          {study.clientName}
        </h3>
        {study.industry && (
          <span className="text-xs text-[#7A8A91] px-2 py-1 bg-[#344349]/30 rounded">
            {study.industry}
          </span>
        )}
      </div>
      <p className="text-sm text-[#A8B6BC] mb-3">{study.oneLineSummary}</p>

      {showMetrics && hasDates && (
        <div className="text-xs text-[#7A8A91] mb-2">
          {study.engagementStart && <span>接手：{study.engagementStart}</span>}
          {study.engagementEnd && <span> ｜ 結案：{study.engagementEnd}</span>}
        </div>
      )}

      {showMetrics && hasBaseline && study.baseline && (
        <div className="mt-3 text-xs text-[#A8B6BC]">
          <div className="text-[#7A8A91] mb-1">起點：</div>
          {study.baseline.map((b, i) => (
            <div key={i}>· {b.metric}：{b.value}</div>
          ))}
        </div>
      )}

      {showMetrics && hasResults && study.result && (
        <div className="mt-3 text-xs text-[#A8B6BC]">
          <div className="text-[#7A8A91] mb-1">成果：</div>
          {study.result.map((r, i) => (
            <div key={i}>
              · {r.metric}：{r.value}
              {r.delta && <span className="text-amber-500 ml-1">（{r.delta}）</span>}
            </div>
          ))}
        </div>
      )}

      {study.url && (
        <a
          href={study.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-amber-500 hover:underline"
        >
          查看網站 <ExternalLink size={12} />
        </a>
      )}
    </div>
  )
}

export function LocalPageTemplate({ page }: LocalPageTemplateProps) {
  return (
    <div className="bg-stone-950">
      <section id="local-hero" className="relative py-20 px-6 bg-gradient-to-b from-[#1E2A2E] to-stone-950">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-[#7A8A91] mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-amber-500">首頁</Link>
            <ChevronRight size={14} />
            <span className="text-[#A8B6BC]">本地服務</span>
            <ChevronRight size={14} />
            <span className="text-[#A8B6BC]">{page.h1}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm mb-4">
            <MapPin size={14} />
            <span>{page.city} · {page.serviceFocus}</span>
          </div>

          <h1
            className="text-4xl md:text-5xl text-[#E0E5E8] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {page.h1}
          </h1>
          <p className="text-lg text-[#A8B6BC] leading-relaxed max-w-3xl">{page.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact" className="falcon-btn-primary">
              立即聯絡 <ArrowRight size={18} className="ml-2 inline" />
            </Link>
            <Link href="/pricing" className="px-6 py-3 border border-[#5F808B] text-[#C5CED2] hover:bg-[#344349]/30 transition-colors rounded">
              查看定價
            </Link>
          </div>
        </div>
      </section>

      <section id="local-content" className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {page.sections.map((section, idx) => (
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

          {page.caseStudies && page.caseStudies.length > 0 && (
            <div>
              <h2
                className="text-2xl md:text-3xl text-[#E0E5E8] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                合作客戶
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {page.caseStudies.map((cs, i) => (
                  <CaseStudyCard key={i} study={cs} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq" className="py-16 px-6 bg-[#1E2A2E]/50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#E0E5E8] mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            常見問題（{page.city}）
          </h2>
          <div className="space-y-4">
            {page.faq.map((item, i) => (
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

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl text-[#E0E5E8] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            想了解 {page.city} 在地服務細節？
          </h2>
          <Link href="/#contact" className="falcon-btn-primary inline-flex items-center">
            立即聯絡 <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
