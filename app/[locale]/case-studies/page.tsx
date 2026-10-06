import { ImageWithFallback as Image } from '@/components/figma/ImageWithFallback'
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
      '查看隼訊 33 項完整作品紀錄，以及網站效能、AI 派單與 LINE 預約的證據化案例；清楚區分作品功能、技術量測與商業成果。',
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
              {t("Git 原始作品集的 33 項案例全部集中在同一區。有獨立量測或技術證據的案例會直接標示「查看證據」；其餘呈現實際交付功能，不把功能描述包裝成營收成果。")}</p>
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

        <I18nProvider locale={locale} messages={clientMessages}><Portfolio showHeader={false} /></I18nProvider>
      </div>
    </PageShell>
  )
}
