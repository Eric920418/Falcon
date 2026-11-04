import { initLocale } from '@/lib/i18n/server'
import type { Metadata } from 'next'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'
import { HomeExperience } from '@/components/HomeExperience'
import { HomeShowcase } from '@/components/HomeShowcase'
import { HomeJourney } from '@/components/HomeJourney'
import './home.css'
import { HomeHero } from '@/components/HomeHero'
import { HomeCases } from '@/components/HomeCases'
import { HomeHubs } from '@/components/HomeHubs'
import { HomeDeliverables } from '@/components/HomeDeliverables'
import { HomeProcess } from '@/components/HomeProcess'
import { HomeProofPricing } from '@/components/HomeProofPricing'
import { HomeAuthorityInsights } from '@/components/HomeAuthorityInsights'
import { SitePageFooter } from '@/components/page-layout/SitePageFooter'
import { createMetadata, createWebPageSchema, JsonLd, siteConfig } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  await initLocale((await params).locale)
  return createMetadata({
  title: '台灣企業網站、AI 系統開發與 SEO／GEO 搜尋成長服務',
  description:
    '隼訊提供台灣企業網站、AI 系統開發與 SEO／GEO 搜尋成長服務，以公開案例、實名責任與合格詢盤衡量成果。',
  path: '/',
})
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  await initLocale((await params).locale)
  const url = siteConfig.url

  return (
    <HomeExperience>
      <JsonLd
        data={createWebPageSchema({
          name: '台灣企業網站、AI 系統開發與 SEO／GEO 搜尋成長服務',
          description:
            '隼訊提供台灣企業網站、AI 系統開發與 SEO／GEO 搜尋成長服務。',
          url,
        })}
      />
      <Navigation />
      <main>
        <div className="fh-opening">
          <HomeHero />
          <HomeShowcase><HomeHubs /><HomeDeliverables /></HomeShowcase>
        </div>
        <HomeCases />
        <HomeJourney />
        <HomeProcess />
        <HomeProofPricing />
        <HomeAuthorityInsights />
        <Contact />
      </main>
      <SitePageFooter />
    </HomeExperience>
  )
}
