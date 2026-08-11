import Link from 'next/link'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import type { ComparePageContent } from '@/lib/content/types'

interface ComparePageTemplateProps {
  page: ComparePageContent
}

export function ComparePageTemplate({ page }: ComparePageTemplateProps) {
  return (
    <div className="bg-stone-950">
      <section id="compare-hero" className="relative py-16 px-6 bg-gradient-to-b from-[#1E2A2E] to-stone-950">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-[#7A8A91] mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-amber-500">首頁</Link>
            <ChevronRight size={14} />
            <span className="text-[#A8B6BC]">比較</span>
            <ChevronRight size={14} />
            <span className="text-[#A8B6BC]">{page.h1}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {page.h1}
          </h1>
          <p className="text-lg text-[#A8B6BC] leading-relaxed">{page.intro}</p>
        </div>
      </section>

      <section id="compare-table" className="py-12 px-6">
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-amber-500">
                {page.comparisonHeaders.map((header, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left text-[#E0E5E8]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {page.comparisonTable.map((row, i) => (
                <tr key={i} className="border-b border-[#344349]/50 hover:bg-stone-900/30 transition-colors">
                  <td className="px-4 py-3 text-[#A8B6BC] font-medium">{row.feature}</td>
                  {row.values.map((value, j) => (
                    <td key={j} className="px-4 py-3 text-[#A8B6BC]">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          {page.sections.map((section, i) => (
            <article key={i}>
              <h2 className="text-2xl md:text-3xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {section.heading}
              </h2>
              {section.body && <p className="text-[#A8B6BC] leading-relaxed mb-4">{section.body}</p>}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#A8B6BC]">
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
                          <th key={header} scope="col" className="px-4 py-3 font-medium text-[#E0E5E8]">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rowIndex) => (
                        <tr key={`${section.heading}-${rowIndex}`} className="border-t border-[#344349] align-top">
                          {row.map((cell, cellIndex) => (
                            <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-3 leading-relaxed text-[#A8B6BC]">{cell}</td>
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

      {page.references && page.references.length > 0 && (
        <section id="references" className="px-6 py-12">
          <div className="max-w-4xl mx-auto border-t border-[#344349] pt-8">
            <h2 className="text-2xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>參考資料</h2>
            <ul className="space-y-3">
              {page.references.map((reference) => (
                <li key={reference.url} className="text-sm leading-relaxed text-[#A8B6BC]">
                  <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">
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

      <section id="faq" className="py-12 px-6 bg-[#1E2A2E]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-[#E0E5E8] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            常見問題
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

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            想針對你的情境諮詢？
          </h2>
          <Link href="/#contact" className="falcon-btn-primary inline-flex items-center">
            預約諮詢 <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
