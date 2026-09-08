import { formatMoney } from '@/lib/i18n/format'

import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ArrowRight } from 'lucide-react'
import { primaryPriceDefinitions } from '@/lib/content/price-catalog'

export function HomeProofPricing() {
  const { t, locale } = getI18n()

  return (
    <section className="px-6 py-24 bg-stone-950 border-y border-[#344349]/40">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
        <div>
          <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">{t("Proof & pricing")}</p>
          <h2 className="text-3xl md:text-5xl text-[#E0E5E8] leading-tight mb-6">
            {t("案例有廣度，價格不藏")}</h2>
          <p className="text-[#A8B6BC] leading-relaxed mb-8">
            {t("完整作品集收錄 33 項網站、系統與 App，其中三項提供獨立證據與限制頁；四個核心服務公開目前起價與報價因素，先確認預算是否對得上。")}</p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              ['33', '完整作品'],
              ['3', '證據詳頁'],
              ['4', '公開起價'],
            ].map(([value, label]) => (
              <div key={label} className="border border-[#344349] rounded-lg p-4 bg-[#1E2A2E]/50">
                <p className="text-2xl md:text-3xl text-amber-500">{t(value)}</p>
                <p className="text-xs text-[#A8B6BC] mt-1">{t(label)}</p>
              </div>
            ))}
          </div>

          <Link href="/case-studies" className="inline-flex items-center gap-2 text-amber-500 hover:underline">
            {t("查看完整案例")}<ArrowRight size={16} />
          </Link>
        </div>

        <div>
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-[#7A8A91] mb-2">{t("公開起價")}</p>
              <h3 className="text-2xl text-[#E0E5E8]">{t("先確認預算是否對得上")}</h3>
            </div>
            <Link href="/pricing" className="hidden sm:inline-flex items-center gap-2 text-sm text-amber-500 hover:underline">
              {t("完整價格")}<ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {primaryPriceDefinitions.map((price) => (
              <Link
                key={price.serviceSlug}
                href={`/pricing/${price.pricingSlug}`}
                className="border border-[#344349] rounded-xl p-5 bg-[#1E2A2E]/55 hover:border-amber-500 transition-colors"
              >
                <p className="text-sm text-[#A8B6BC]">{t(price.name)}</p>
                <p className="text-2xl text-[#E0E5E8] mt-3">
                  {t("{0}／{1}起", { 0: formatMoney(price.from, locale), 1: t(price.unit) })}
                </p>
              </Link>
            ))}
          </div>

          <Link href="/pricing" className="sm:hidden inline-flex items-center gap-2 text-sm text-amber-500 hover:underline mt-6">
            {t("查看完整價格")}<ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
