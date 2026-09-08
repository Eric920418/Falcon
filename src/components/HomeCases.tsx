
import { getI18n } from '@/lib/i18n/server'
import Image from 'next/image'
import Link from '@/lib/i18n/link'
import { ArrowRight } from 'lucide-react'
import { getAllCaseStudies } from '@/lib/content/case-studies'

export function HomeCases() {
  const { t, locale } = getI18n()

  const studies = getAllCaseStudies()

  return (
    <section id="cases" className="py-24 px-6 bg-[#1E2A2E]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
          <div>
            <p className="text-amber-500 text-sm tracking-widest uppercase mb-3">{t("Evidence")}</p>
            <h2 className="text-3xl md:text-5xl text-[#E0E5E8]">{t("案例先講證據，再講限制")}</h2>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-amber-500 hover:underline">
            {t("查看完整 33 項作品")}<ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {studies.map((study) => (
            <article key={study.slug} className="rounded-xl overflow-hidden border border-[#344349] bg-stone-950/45">
              <div className="relative aspect-[16/10]">
                <Image
                  src={study.image}
                  alt={t("{0}案例畫面", { 0: study.clientName })}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-amber-500">{t(study.location)}</p>
                <h3 className="text-xl text-[#E0E5E8] my-3">{t(study.title)}</h3>
                <p className="text-sm text-[#A8B6BC] leading-relaxed">{t(study.summary)}</p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 text-amber-500 mt-5 hover:underline"
                >
                  {t("查看證據")}<ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
