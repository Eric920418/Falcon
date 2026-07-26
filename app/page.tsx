import type { Metadata } from 'next'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'
import { HomeHero } from '@/components/HomeHero'
import { HomeHubs } from '@/components/HomeHubs'
import { HomeCases } from '@/components/HomeCases'
import { SitePageFooter } from '@/components/page-layout/SitePageFooter'
import { createMetadata, createWebPageSchema, JsonLd, siteConfig } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: '台灣企業網站與 AI 系統開發｜SEO／GEO 搜尋成長',
  description:
    '隼訊提供台灣企業網站、AI 系統開發與 SEO／GEO 搜尋成長服務，以公開案例、實名責任與合格詢盤衡量成果。',
  path: '/',
})

export default function HomePage() {
  const url = siteConfig.url

  return (
    <div className="bg-stone-950 text-stone-100 overflow-x-hidden">
      <JsonLd
        data={createWebPageSchema({
          name: '台灣企業網站與 AI 系統開發｜SEO／GEO 搜尋成長',
          description:
            '隼訊提供台灣企業網站、AI 系統開發與 SEO／GEO 搜尋成長服務。',
          url,
        })}
      />
      <Navigation />
      <main>
        <HomeHero />
        <HomeHubs />
        <HomeCases />
        <Contact />
      </main>
      <SitePageFooter />
    </div>
  )
}
