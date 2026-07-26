import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/page-layout/PageShell'
import { getAllCaseStudies } from '@/lib/content/case-studies'
import {
  createBreadcrumbSchema,
  createMetadata,
  createWebPageSchema,
  JsonLd,
  siteConfig,
} from '@/lib/seo'

export function generateMetadata(): Metadata {
  return createMetadata({
    title: '網站、AI 與系統開發案例｜證據與限制完整揭露',
    description:
      '查看隼訊網站效能、AI 派單與 LINE 預約案例；每個案例區分技術量測、產品能力與商業成果，不用無來源數字包裝。',
    path: '/case-studies',
  })
}

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies()
  const url = `${siteConfig.url}/case-studies`

  return (
    <PageShell>
      <JsonLd
        data={[
          createWebPageSchema({
            name: '隼訊公開案例',
            description: '網站、AI 與系統開發的公開技術案例與證據揭露。',
            url,
          }),
          createBreadcrumbSchema([
            { name: '首頁', path: '/' },
            { name: '案例', path: '/case-studies' },
          ]),
        ]}
      />
      <div className="bg-stone-950">
        <header className="px-6 py-20 bg-gradient-to-b from-[#1E2A2E] to-stone-950">
          <div className="max-w-5xl mx-auto">
            <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">Evidence-based work</p>
            <h1 className="text-4xl md:text-6xl text-[#E0E5E8] mb-6">公開案例與可驗證證據</h1>
            <p className="text-lg text-[#A8B6BC] max-w-3xl leading-relaxed">
              每個案例都標明資料來源與限制。技術功能不是營收成果，實驗室效能也不等於所有使用者的真實體驗。
            </p>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-6">
          {studies.map((study) => (
            <article key={study.slug} className="border border-[#344349] rounded-xl overflow-hidden bg-stone-900/40">
              <div className="relative aspect-[16/10] bg-[#1E2A2E]">
                <Image
                  src={study.image}
                  alt={`${study.clientName}公開案例畫面`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-amber-500 text-xs mb-2">{study.location}</p>
                <h2 className="text-xl text-[#E0E5E8] mb-3">{study.title}</h2>
                <p className="text-sm text-[#A8B6BC] leading-relaxed mb-5">{study.summary}</p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 text-amber-500 hover:underline"
                >
                  查看證據與限制 <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </PageShell>
  )
}
