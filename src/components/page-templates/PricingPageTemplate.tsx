import Link from 'next/link'
import { ArrowRight, Check, X, ChevronRight } from 'lucide-react'
import type { PricingPageContent } from '@/lib/content/types'

interface PricingPageTemplateProps {
  page: PricingPageContent
}

export function PricingPageTemplate({ page }: PricingPageTemplateProps) {
  return (
    <div className="bg-stone-950">
      <section id="pricing-hero" className="relative py-16 px-6 bg-gradient-to-b from-[#1E2A2E] to-stone-950">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-[#7A8A91] mb-6 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-amber-500">首頁</Link>
            <ChevronRight size={14} />
            <Link href="/pricing" className="hover:text-amber-500">透明定價</Link>
            <ChevronRight size={14} />
            <span className="text-[#A8B6BC]">{page.h1}</span>
          </nav>
          <h1
            className="text-4xl md:text-5xl text-[#E0E5E8] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {page.h1}
          </h1>
          <p className="text-lg text-[#A8B6BC] leading-relaxed">{page.intro}</p>
        </div>
      </section>

      <section id="pricing-tiers" className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {page.tiers.map((tier, i) => (
            <div
              key={i}
              className={`p-6 rounded-lg border ${
                i === 1 ? 'border-amber-500 bg-amber-500/5' : 'border-[#344349] bg-stone-900/50'
              }`}
            >
              <h2 className="text-xl text-[#E0E5E8] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {tier.name}
              </h2>
              <div className="mb-4">
                <span className="text-3xl text-amber-500">NT$ {tier.price}</span>
                <span className="text-sm text-[#7A8A91]"> / {tier.unit}</span>
              </div>
              {tier.bestFor && <p className="text-sm text-[#7A8A91] italic mb-4">適合：{tier.bestFor}</p>}
              <div className="mb-3">
                <h3 className="text-xs text-[#A8B6BC] uppercase tracking-wider mb-2">包含內容</h3>
                <ul className="space-y-2">
                  {tier.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#A8B6BC]">
                      <Check size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {tier.notIncludes && tier.notIncludes.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#344349]/50">
                  <h3 className="text-xs text-[#7A8A91] uppercase tracking-wider mb-2">不包含</h3>
                  <ul className="space-y-1">
                    {tier.notIncludes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#7A8A91]">
                        <X size={14} className="flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {page.marketComparison && (
        <section className="py-12 px-6 bg-[#1E2A2E]/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {page.marketComparison.heading}
            </h2>
            {page.marketComparison.body && (
              <p className="text-[#A8B6BC] mb-4">{page.marketComparison.body}</p>
            )}
            {page.marketComparison.items && (
              <ul className="space-y-2">
                {page.marketComparison.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#A8B6BC]">
                    <Check size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      <section id="faq" className="py-12 px-6">
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

      <section className="py-12 px-6 bg-[#1E2A2E]/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-[#E0E5E8] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {page.cta}
          </h2>
          <Link href="/#contact" className="falcon-btn-primary inline-flex items-center">
            立即聯絡 <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
