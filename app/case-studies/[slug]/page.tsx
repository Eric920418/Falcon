import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/page-layout/PageShell'
import { ServiceCtaLink } from '@/components/ServiceCtaLink'
import {
  caseStudySlugs,
  getCaseStudy,
} from '@/lib/content/case-studies'
import {
  createBreadcrumbSchema,
  createCaseStudySchema,
  createMetadata,
  createWebPageSchema,
  JsonLd,
  siteConfig,
} from '@/lib/seo'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)
  if (!caseStudy) return {}

  return createMetadata({
    title: caseStudy.title,
    description: caseStudy.summary,
    path: `/case-studies/${slug}`,
    ogImage: `${siteConfig.url}${caseStudy.image}`,
  })
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)
  if (!caseStudy) notFound()

  const url = `${siteConfig.url}/case-studies/${slug}`
  const schemas = [
    createWebPageSchema({
      name: caseStudy.title,
      description: caseStudy.summary,
      url,
    }),
    createCaseStudySchema(caseStudy),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '案例', path: '/case-studies' },
      { name: caseStudy.title, path: `/case-studies/${slug}` },
    ]),
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <article className="bg-stone-950">
        <header className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-amber-500 mb-4">公開案例與可驗證證據</p>
          <p className="text-amber-500 text-sm mb-3">{caseStudy.location}｜{caseStudy.period}</p>
          <h1 className="text-4xl md:text-6xl text-[#E0E5E8] mb-6">{caseStudy.title}</h1>
          <p className="text-xl text-[#A8B6BC] max-w-3xl leading-relaxed">{caseStudy.summary}</p>
        </header>

        <div className="max-w-5xl mx-auto px-6 pb-20">
          {caseStudy.gallery ? (
            <div className="grid gap-4 md:grid-cols-2">
              {caseStudy.gallery.map((item, index) => (
                <figure key={item.src} className={`rounded-xl overflow-hidden border border-[#344349] bg-[#1E2A2E] ${index === 0 ? 'md:translate-y-6' : ''}`}>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? undefined : 'lazy'}
                      sizes="(min-width: 1024px) 500px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 text-xs leading-relaxed text-[#A8B6BC]">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#344349] bg-[#1E2A2E]">
              <Image
                src={caseStudy.image}
                alt={`${caseStudy.clientName}案例介面`}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 mt-14">
            <div className="space-y-12">
              <section>
                <h2 className="text-3xl text-[#E0E5E8] mb-4">問題背景</h2>
                <p className="text-[#A8B6BC] leading-relaxed">{caseStudy.challenge}</p>
              </section>
              <section>
                <h2 className="text-3xl text-[#E0E5E8] mb-4">實作方式</h2>
                <ul className="space-y-3 text-[#A8B6BC]">
                  {caseStudy.approach.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-amber-500">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              {caseStudy.responsibilities && (
                <section>
                  <h2 className="text-3xl text-[#E0E5E8] mb-4">隼訊實際負責範圍</h2>
                  <ul className="grid gap-3 text-[#A8B6BC] sm:grid-cols-2">
                    {caseStudy.responsibilities.map((item) => (
                      <li key={item} className="border border-[#344349] bg-stone-900/40 p-4 text-sm leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </section>
              )}
              {caseStudy.workflow && (
                <section>
                  <h2 className="text-3xl text-[#E0E5E8] mb-4">AI 接聽至派單的資料流</h2>
                  <ol className="space-y-3">
                    {caseStudy.workflow.map((item, index) => (
                      <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-[#344349] pb-3 text-sm leading-relaxed text-[#A8B6BC]">
                        <span className="font-mono text-amber-500">0{index + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
              {caseStudy.fallbacks && (
                <section>
                  <h2 className="text-3xl text-[#E0E5E8] mb-4">失敗降級與人工接手</h2>
                  <ul className="space-y-3 text-[#A8B6BC]">
                    {caseStudy.fallbacks.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed">
                        <span className="text-amber-500">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              <section>
                <h2 className="text-3xl text-[#E0E5E8] mb-5">可公開的量測與能力</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {caseStudy.metrics.map((metric) => (
                    <div key={metric.label} className="border border-[#344349] rounded-xl p-5 bg-stone-900/40">
                      <p className="text-sm text-[#7A8A91]">{metric.label}</p>
                      <p className="text-2xl text-amber-500 my-2">{metric.value}</p>
                      <p className="text-xs text-[#A8B6BC] leading-relaxed">{metric.context}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="border border-amber-700/40 bg-amber-950/10 rounded-xl p-6">
                <h2 className="text-xl text-[#E0E5E8] mb-3">揭露與限制</h2>
                <p className="text-[#A8B6BC] leading-relaxed">{caseStudy.disclosure}</p>
              </section>
            </div>

            <aside className="space-y-8">
              <div>
                <h2 className="text-lg text-[#E0E5E8] mb-3">技術範圍</h2>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-[#1E2A2E] text-xs text-[#A8B6BC]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {caseStudy.projectUrl && (
                <a
                  href={caseStudy.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="falcon-btn-outline inline-flex items-center gap-2"
                >
                  查看上線畫面證據 <ExternalLink size={16} />
                </a>
              )}
              {caseStudy.slug === 'gogocha-ai-dispatch' && (
                <Link href="/services/ai-voice-agent" className="inline-flex items-center gap-2 text-amber-500 hover:underline">
                  了解企業 AI 電話方案 <ArrowRight size={16} />
                </Link>
              )}
              {caseStudy.slug === 'gogocha-ai-dispatch' ? (
                <ServiceCtaLink
                  href="/?service=ai_voice#contact"
                  placement="case_gogocha_ai_dispatch"
                  className="falcon-btn-primary inline-flex"
                >
                  討論類似需求
                </ServiceCtaLink>
              ) : (
                <Link href="/#contact" className="falcon-btn-primary inline-flex">
                  討論類似需求
                </Link>
              )}
            </aside>
          </div>
        </div>
      </article>
    </PageShell>
  )
}
