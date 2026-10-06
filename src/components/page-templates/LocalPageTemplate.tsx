import { PageVisual } from '@/components/PageVisual'

import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ArrowRight, Check, ChevronRight, MapPin, ExternalLink } from 'lucide-react'
import type { LocalContent, CaseStudy } from '@/lib/content/types'

interface LocalPageTemplateProps {
  page: LocalContent
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const { t, locale } = getI18n()

  // 根據 consentToPublish 等級條件式渲染
  const showMetrics = study.consentToPublish === 'full' || study.consentToPublish === 'metrics-only'
  const hasDates = study.engagementStart || study.engagementEnd
  const hasResults = study.result && study.result.length > 0
  const hasBaseline = study.baseline && study.baseline.length > 0

  return (
    <div className="p-5 border border-[var(--site-border)] rounded-lg bg-[var(--site-card)] ">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg text-[var(--site-text)]" style={{ fontFamily: 'var(--font-display)' }}>
          {t(study.clientName)}
        </h3>
        {study.industry && (
          <span className="text-xs text-[var(--site-muted)] px-2 py-1 bg-[var(--site-tint)] rounded">
            {t(study.industry)}
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--site-muted)] mb-3">{t(study.oneLineSummary)}</p>

      {showMetrics && hasDates && (
        <div className="text-xs text-[var(--site-muted)] mb-2">
          {study.engagementStart && <span>{t("接手：")}{t(study.engagementStart)}</span>}
          {study.engagementEnd && <span> {t("｜ 結案：")}{t(study.engagementEnd)}</span>}
        </div>
      )}

      {showMetrics && hasBaseline && study.baseline && (
        <div className="mt-3 text-xs text-[var(--site-muted)]">
          <div className="text-[var(--site-muted)] mb-1">{t("起點：")}</div>
          {study.baseline.map((b, i) => (
            <div key={i}>{t("·")}{t(b.metric)}{t("：")}{t(b.value)}</div>
          ))}
        </div>
      )}

      {showMetrics && hasResults && study.result && (
        <div className="mt-3 text-xs text-[var(--site-muted)]">
          <div className="text-[var(--site-muted)] mb-1">{t("成果：")}</div>
          {study.result.map((r, i) => (
            <div key={i}>
              {t("·")}{t(r.metric)}{t("：")}{t(r.value)}
              {r.delta && <span className="text-[var(--site-accent)] ml-1">{t("（")}{t(r.delta)}{t("）")}</span>}
            </div>
          ))}
        </div>
      )}

      {study.url && (
        <a
          href={study.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-[var(--site-accent)] hover:underline"
        >
          {t("查看網站")}<ExternalLink size={12} />
        </a>
      )}
    </div>
  )
}

export function LocalPageTemplate({ page }: LocalPageTemplateProps) {
  const { t, locale } = getI18n()

  return (
    <div className="bg-[var(--site-bg)] ">
      <section id="local-hero" className="relative py-20 px-6 bg-gradient-to-b from-[var(--site-soft)] to-[var(--site-bg)] ">
        <div className="visual-hero">
          <div>
          <nav className="text-sm text-[var(--site-muted)] mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[var(--site-accent)]">{t("首頁")}</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--site-muted)]">{t("本地服務")}</span>
            <ChevronRight size={14} />
            <span className="text-[var(--site-muted)]">{t(page.h1)}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--site-accent)]/10 text-[var(--site-accent)] rounded-full text-sm mb-4">
            <MapPin size={14} />
            <span>{t(page.city)} {t("·")}{t(page.serviceFocus)}</span>
          </div>

          <h1
            className="text-4xl md:text-5xl text-[var(--site-text)] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t(page.h1)}
          </h1>
          <p className="text-lg text-[var(--site-muted)] leading-relaxed max-w-3xl">{t(page.intro)}</p>

          <p className="mt-5 max-w-3xl border-l-2 border-[var(--site-accent)]/50 bg-[var(--site-card)]  px-4 py-3 text-sm leading-relaxed text-[var(--site-muted)]">
            {t(page.coverageDisclosure)}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact" className="falcon-btn-primary">
              {t("立即聯絡")}<ArrowRight size={18} className="ml-2 inline" />
            </Link>
            <Link href="/pricing" className="px-6 py-3 border border-[var(--site-accent)] text-[var(--site-text)] hover:bg-[var(--site-tint)] transition-colors rounded">
              {t("查看定價")}</Link>
          </div>
          </div>
          <PageVisual path={`/local/${page.slug}`} priority />
        </div>
      </section>

      <section id="local-content" className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {page.sections.map((section, idx) => (
            <article key={idx}>
              <h2
                className="text-2xl md:text-3xl text-[var(--site-text)] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t(section.heading)}
              </h2>
              {section.body && <p className="text-[var(--site-muted)] leading-relaxed mb-4">{t(section.body)}</p>}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--site-muted)]">
                      <Check size={20} className="text-[var(--site-accent)] flex-shrink-0 mt-1" />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          {page.caseStudies && page.caseStudies.length > 0 && (
            <div>
              <h2
                className="text-2xl md:text-3xl text-[var(--site-text)] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t("合作客戶")}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {page.caseStudies.map((cs, i) => (
                  <CaseStudyCard key={i} study={cs} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq" className="py-16 px-6 bg-[var(--site-soft)]">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[var(--site-text)] mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t("常見問題（{0}）", { 0: t(page.city) })}</h2>
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

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl text-[var(--site-text)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t("想了解 {0} 在地服務細節？", { 0: t(page.city) })}</h2>
          <Link href="/#contact" className="falcon-btn-primary inline-flex items-center">
            {t("立即聯絡")}<ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
