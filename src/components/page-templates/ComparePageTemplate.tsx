import { PageVisual } from '@/components/PageVisual'

import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import type { ComparePageContent } from '@/lib/content/types'

interface ComparePageTemplateProps {
  page: ComparePageContent
}

export function ComparePageTemplate({ page }: ComparePageTemplateProps) {
  const { t, locale } = getI18n()

  return (
    <div className="bg-[var(--site-bg)] ">
      <section id="compare-hero" className="relative py-16 px-6 bg-gradient-to-b from-[var(--site-soft)] to-[var(--site-bg)] ">
        <div className="visual-hero">
          <div>
          <nav className="text-sm text-[var(--site-muted)] mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[var(--site-accent)]">{t("首頁")}</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--site-muted)]">{t("比較")}</span>
            <ChevronRight size={14} />
            <span className="text-[var(--site-muted)]">{t(page.h1)}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl text-[var(--site-text)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {t(page.h1)}
          </h1>
          <p className="text-lg text-[var(--site-muted)] leading-relaxed">{t(page.intro)}</p>
          </div>
          <PageVisual path={`/compare/${page.slug}`} priority />
        </div>
      </section>

      <section id="compare-table" className="py-12 px-6">
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="min-w-[680px] w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--site-accent)]">
                {page.comparisonHeaders.map((header, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left text-[var(--site-text)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {page.comparisonTable.map((row, i) => (
                <tr key={i} className="border-b border-[var(--site-border)]/50 hover:bg-[var(--site-card)]  transition-colors">
                  <td className="px-4 py-3 text-[var(--site-muted)] font-medium">{t(row.feature)}</td>
                  {row.values.map((value, j) => (
                    <td key={j} className="px-4 py-3 text-[var(--site-muted)]">{t(value)}</td>
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
              <h2 className="text-2xl md:text-3xl text-[var(--site-text)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {t(section.heading)}
              </h2>
              {section.body && <p className="text-[var(--site-muted)] leading-relaxed mb-4">{t(section.body)}</p>}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[var(--site-muted)]">
                      <Check size={20} className="text-[var(--site-accent)] flex-shrink-0 mt-1" />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="mt-6 overflow-x-auto rounded-lg border border-[var(--site-border)]">
                  <table className="min-w-[680px] w-full border-collapse text-left text-sm">
                    {section.table.caption && (
                      <caption className="bg-[var(--site-card)]  px-4 py-3 text-left text-sm text-[var(--site-muted)]">
                        {t(section.table.caption)}
                      </caption>
                    )}
                    <thead className="bg-[var(--site-soft)]">
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header} scope="col" className="px-4 py-3 font-medium text-[var(--site-text)]">{t(header)}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rowIndex) => (
                        <tr key={`${section.heading}-${rowIndex}`} className="border-t border-[var(--site-border)] align-top">
                          {row.map((cell, cellIndex) => (
                            <td key={`${rowIndex}-${cellIndex}`} className="px-4 py-3 leading-relaxed text-[var(--site-muted)]">{t(cell)}</td>
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
          <div className="max-w-4xl mx-auto border-t border-[var(--site-border)] pt-8">
            <h2 className="text-2xl text-[var(--site-text)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>{t("參考資料")}</h2>
            <ul className="space-y-3">
              {page.references.map((reference) => (
                <li key={reference.url} className="text-sm leading-relaxed text-[var(--site-muted)]">
                  <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-[var(--site-accent)] hover:underline">
                    {t(reference.name)}
                  </a>
                  <span>{t("｜")}{t(reference.publisher)}</span>
                  {reference.updatedAt && <span>{t("｜")}{t(reference.updatedAt)}</span>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="faq" className="py-12 px-6 bg-[var(--site-soft)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-[var(--site-text)] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            {t("常見問題")}</h2>
          <div className="space-y-4">
            {page.faq.map((item, i) => (
              <details key={i} className="group border border-[var(--site-border)] rounded-lg overflow-hidden bg-[var(--site-card)] ">
                <summary className="px-6 py-4 cursor-pointer text-[var(--site-text)] hover:bg-[var(--site-tint)] flex justify-between items-center">
                  <span className="font-medium">{t(item.question)}</span>
                  <ChevronRight size={20} className="text-[var(--site-muted)] group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-[var(--site-muted)] leading-relaxed">{t(item.answer)}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-[var(--site-text)] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {t("想針對你的情境諮詢？")}</h2>
          <Link href="/#contact" className="falcon-btn-primary inline-flex items-center">
            {t("預約諮詢")}<ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
