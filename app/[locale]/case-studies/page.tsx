import { ImageWithFallback as Image } from '@/components/figma/ImageWithFallback'
import { projects, projectCount } from '@/lib/content/projects'
import { getAllCaseStudies } from '@/lib/content/case-studies'
import { I18nProvider } from '@/lib/i18n/client'
import portfolioSource from '@/lib/i18n/messages/zh-tw/portfolio.json'
import commonSource from '@/lib/i18n/messages/zh-tw/common.json'

import { getI18n, initLocale } from '@/lib/i18n/server'
import type { Metadata } from 'next'
import { PageShell } from '@/components/page-layout/PageShell'
import { Portfolio } from '@/components/Portfolio'
import {
  createBreadcrumbSchema,
  createItemListSchema,
  createMetadata,
  createWebPageSchema,
  JsonLd,
  siteConfig,
} from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  await initLocale((await params).locale)
  return createMetadata({
    title: '網站、AI 與系統開發案例｜證據與限制完整揭露',
    description:
      '查看隼訊 {0} 項作品的獨立介紹，探索網站、App、AI 與客製系統的功能、實作方式及技術案例。',
    values: { 0: projectCount },
    path: '/case-studies',
  })
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale((await params).locale)
  const { t, locale, messages } = getI18n()
  const clientMessages = Object.fromEntries([...Object.keys(commonSource), ...Object.keys(portfolioSource)].map(key => [key, locale === 'zh-tw' ? key : t(key)]))

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
          createItemListSchema({
            id: `${url}#projects`, name: '完整作品紀錄', description: '作品獨立介紹與開發案例', itemType: 'CreativeWork',
            items: projects.map(project => ({ name: project.title, description: project.description, url: `${url}/${project.slug}` })),
          }),
          createBreadcrumbSchema([
            { name: '首頁', path: '/' },
            { name: '案例', path: '/case-studies' },
          ]),
        ]}
      />
      <div className="bg-[var(--site-bg)] ">
        <header className="px-6 py-20 bg-gradient-to-b from-[var(--site-soft)] to-[var(--site-bg)] ">
          <div className="visual-hero">
            <div>
            <p className="text-[var(--site-accent)] text-sm tracking-widest uppercase mb-4">{t("Evidence-based work")}</p>
            <h1 className="text-4xl md:text-6xl text-[var(--site-text)] mb-6">{t("公開案例與可驗證證據")}</h1>
            <p className="text-lg text-[var(--site-muted)] max-w-3xl leading-relaxed">
              {t("{0} 項作品皆有獨立介紹。依類型探索功能、實作方式與相關服務。", { 0: projectCount })}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {getAllCaseStudies().slice(0, 2).map((study, index) => (
                <div key={study.slug} className={`visual-frame ${index ? 'sm:translate-y-8' : ''}`}>
                  <Image src={study.image} alt={t("{0}案例畫面", { 0: study.clientName })} width={640} height={400} sizes="(min-width: 1024px) 23vw, 100vw" className="h-full w-full object-cover object-top" />
                </div>
              ))}
            </div>
          </div>
        </header>

        <I18nProvider locale={locale} messages={clientMessages}><Portfolio showHeader={false} projects={projects.map(({ id, slug, title, description, image, imageContain, url, category, hasEvidence }) => ({ id, slug, title, description, image, ...(imageContain ? { imageContain } : {}), ...(url ? { url } : {}), category, ...(hasEvidence ? { hasEvidence } : {}) }))} /></I18nProvider>
      </div>
    </PageShell>
  )
}
