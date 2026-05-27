import Link from 'next/link'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import type { ServiceContent } from '@/lib/content/types'

interface ServicePageTemplateProps {
  service: ServiceContent
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <div className="bg-stone-950">
      {/* Hero */}
      <section id="service-hero" className="relative py-20 px-6 bg-gradient-to-b from-[#1E2A2E] to-stone-950">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-[#7A8A91] mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-amber-500">首頁</Link>
            <ChevronRight size={14} />
            <Link href="/services/seo" className="hover:text-amber-500">服務項目</Link>
            <ChevronRight size={14} />
            <span className="text-[#A8B6BC]">{service.h1}</span>
          </nav>

          <h1
            className="text-4xl md:text-5xl text-[#E0E5E8] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {service.h1}
          </h1>
          <p className="text-lg text-[#A8B6BC] leading-relaxed max-w-3xl">{service.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#contact" className="falcon-btn-primary">
              立即諮詢 <ArrowRight size={18} className="ml-2 inline" />
            </Link>
            <Link href="/pricing" className="px-6 py-3 border border-[#5F808B] text-[#C5CED2] hover:bg-[#344349]/30 transition-colors rounded">
              查看完整定價
            </Link>
          </div>
        </div>
      </section>

      {/* Body sections */}
      <section id="service-content" className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {service.sections.map((section, idx) => (
            <article key={idx}>
              <h2
                className="text-2xl md:text-3xl text-[#E0E5E8] mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {section.heading}
              </h2>
              <p className="text-[#A8B6BC] leading-relaxed mb-4">{section.body}</p>
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

      {/* HowTo */}
      {service.howTo && (
        <section className="py-16 px-6 bg-[#1E2A2E]/50">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl text-[#E0E5E8] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {service.howTo.name}
            </h2>
            <p className="text-[#A8B6BC] mb-8">{service.howTo.description}</p>

            <ol className="space-y-6">
              {service.howTo.steps.map((step, i) => (
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

      {/* Pricing */}
      {service.pricing && service.pricing.length > 0 && (
        <section id="pricing" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-2xl md:text-3xl text-[#E0E5E8] mb-2 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {service.h1} — 透明定價
            </h2>
            <p className="text-[#A8B6BC] text-center mb-12">所有方案均含完整服務內容，無隱藏費用</p>

            <div className="grid md:grid-cols-3 gap-6">
              {service.pricing.map((tier, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-lg border ${
                    i === 1 ? 'border-amber-500 bg-amber-500/5' : 'border-[#344349] bg-stone-900/50'
                  }`}
                >
                  <h3 className="text-xl text-[#E0E5E8] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl text-amber-500">NT$ {tier.price}</span>
                    <span className="text-sm text-[#7A8A91]"> / {tier.unit}</span>
                  </div>
                  {tier.bestFor && (
                    <p className="text-sm text-[#7A8A91] italic mb-4">適合：{tier.bestFor}</p>
                  )}
                  <ul className="space-y-2">
                    {tier.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#A8B6BC]">
                        <Check size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
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
      <section id="faq" className="py-16 px-6 bg-[#1E2A2E]/50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#E0E5E8] mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            常見問題
          </h2>
          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <details
                key={i}
                className="group border border-[#344349] rounded-lg overflow-hidden bg-stone-900/30"
              >
                <summary className="px-6 py-4 cursor-pointer text-[#E0E5E8] hover:bg-[#344349]/30 flex justify-between items-center">
                  <span className="font-medium">{item.question}</span>
                  <ChevronRight
                    size={20}
                    className="text-[#7A8A91] group-open:rotate-90 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-4 text-[#A8B6BC] leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl text-[#E0E5E8] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            想了解這項服務適不適合你？
          </h2>
          <Link href="/#contact" className="falcon-btn-primary inline-flex items-center">
            立即聯絡我們 <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
