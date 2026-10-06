import { PageVisual } from '@/components/PageVisual'
import { formatMoney } from '@/lib/i18n/format'

import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import type { ServiceContent } from '@/lib/content/types'
import { getPriceDefinition } from '@/lib/content/price-catalog'

interface ServicePageTemplateProps {
  service: ServiceContent
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const { t, locale } = getI18n()

  const pricing = getPriceDefinition(service.slug)?.tiers ?? []

  return (
    <div className="bg-[var(--site-bg)] ">
      {/* Hero */}
      <section id="service-hero" className="relative py-20 px-6 bg-gradient-to-b from-[var(--site-soft)] to-[var(--site-bg)] ">
        <div className="visual-hero">
          <div>
          <nav className="text-sm text-[var(--site-muted)] mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-[var(--site-accent)]">{t("首頁")}</Link>
            <ChevronRight size={14} />
            <Link href="/services" className="hover:text-[var(--site-accent)]">{t("服務項目")}</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--site-muted)]">{t(service.h1)}</span>
          </nav>

          <h1
            className="text-4xl md:text-5xl text-[var(--site-text)] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t(service.h1)}
          </h1>
          <p className="text-lg text-[var(--site-muted)] leading-relaxed max-w-3xl">{t(service.intro)}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact" className="falcon-btn-primary">
              {t("立即諮詢")}<ArrowRight size={18} className="ml-2 inline" />
            </Link>
            <Link href="/pricing" className="px-6 py-3 border border-[var(--site-accent)] text-[var(--site-text)] hover:bg-[var(--site-tint)] transition-colors rounded">
              {t("查看完整定價")}</Link>
          </div>
          {service.slug === 'ai-tools' && (
            <Link
              href="/services/ai-voice-agent"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--site-accent)] hover:underline"
            >
              {t("需要電話接聽、派單或 CRM 串接？查看企業 AI 語音客服")}<ArrowRight size={16} />
            </Link>
          )}
          </div>
          <PageVisual path={`/services/${service.slug}`} priority />
        </div>
      </section>

      {/* Body sections */}
      <section id="service-content" className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {service.sections.map((section, idx) => (
            <article key={idx}>
              <h2
                className="text-2xl md:text-3xl text-[var(--site-text)] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t(section.heading)}
              </h2>
              <p className="text-[var(--site-muted)] leading-relaxed mb-4">{t(section.body)}</p>
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
        </div>
      </section>

      {/* HowTo */}
      {service.howTo && (
        <section className="py-16 px-6 bg-[var(--site-soft)]">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl text-[var(--site-text)] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t(service.howTo.name)}
            </h2>
            <p className="text-[var(--site-muted)] mb-8">{t(service.howTo.description)}</p>

            <ol className="space-y-6">
              {service.howTo.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--site-accent)]/20 text-[var(--site-accent)] flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-[var(--site-text)] mb-1">{t(step.name)}</h3>
                    <p className="text-[var(--site-muted)]">{t(step.text)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Pricing */}
      {pricing.length > 0 && (
        <section id="pricing" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl text-[var(--site-text)] mb-2 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t(service.h1)} {t("— 透明定價")}</h2>
            <p className="text-[var(--site-muted)] text-center mb-12">{t("所有方案均含完整服務內容，無隱藏費用")}</p>

            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((tier, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-lg border ${
                    i === 1 ? 'border-[var(--site-accent)] bg-[var(--site-accent)]/5' : 'border-[var(--site-border)] bg-[var(--site-card)] '
                  }`}
                >
                  <h3 className="text-xl text-[var(--site-text)] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {t(tier.name)}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl text-[var(--site-accent)]">{t(formatMoney(tier.price, locale))}</span>
                    <span className="text-sm text-[var(--site-muted)]"> {t("/")}{t(tier.unit)}</span>
                  </div>
                  {tier.bestFor && (
                    <p className="text-sm text-[var(--site-muted)] italic mb-4">{t("適合：")}{t(tier.bestFor)}</p>
                  )}
                  <ul className="space-y-2">
                    {tier.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--site-muted)]">
                        <Check size={16} className="text-[var(--site-accent)] flex-shrink-0 mt-0.5" />
                        <span>{t(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-[var(--site-soft)]">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[var(--site-text)] mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t("常見問題")}</h2>
          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <details
                key={i}
                className="group border border-[var(--site-border)] rounded-lg overflow-hidden bg-[var(--site-card)] "
              >
                <summary className="px-6 py-4 cursor-pointer text-[var(--site-text)] hover:bg-[var(--site-tint)] flex justify-between items-center">
                  <span className="font-medium">{t(item.question)}</span>
                  <ChevronRight
                    size={20}
                    className="text-[var(--site-muted)] group-open:rotate-90 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-4 text-[var(--site-muted)] leading-relaxed">{t(item.answer)}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl text-[var(--site-text)] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t("想了解這項服務適不適合你？")}</h2>
          <Link href="/#contact" className="falcon-btn-primary inline-flex items-center">
            {t("立即聯絡我們")}<ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
