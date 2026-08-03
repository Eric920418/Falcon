import { notFound, permanentRedirect } from 'next/navigation'
import type { Metadata } from 'next'
import { PageShell } from '@/components/page-layout/PageShell'
import { ServicePageTemplate } from '@/components/page-templates/ServicePageTemplate'
import { AiVoiceServicePage } from '@/components/page-templates/AiVoiceServicePage'
import { serviceSlugs, getService, isIndexableService } from '@/lib/content/services'
import { getPriceDefinition } from '@/lib/content/price-catalog'
import {
  createMetadata,
  createServiceSchema,
  createBreadcrumbSchema,
  createWebPageSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  if (slug === 'aeo') {
    return createMetadata({
      title: 'AEO 已整合至 GEO',
      description: 'AEO 內容已整合至 SEO／GEO 搜尋成長服務。',
      path: '/services/geo',
      noIndex: true,
    })
  }
  const service = getService(slug)
  if (!service) return {}
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    keywords: service.keywords,
    ...(slug === 'ai-voice-agent' ? { ogImage: `${siteConfig.url}/ai-voice-og` } : {}),
    noIndex: service.qualityTier !== 'production' || !isIndexableService(slug),
  })
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  if (slug === 'aeo') permanentRedirect('/services/geo')
  const service = getService(slug)
  if (!service) notFound()

  const url = `${siteConfig.url}/services/${slug}`
  const price = getPriceDefinition(slug)

  const schemas = [
    createWebPageSchema({
      name: service.title,
      description: service.description,
      url,
    }),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      slug === 'ai-voice-agent'
        ? { name: 'AI 工具開發', path: '/services/ai-tools' }
        : { name: '服務項目', path: '/services/seo' },
      { name: service.h1, path: `/services/${slug}` },
    ]),
    createServiceSchema({
      slug: service.slug,
      name: service.h1,
      description: service.description,
      serviceType: service.serviceType,
      url,
      ...(price ? { price: { min: String(price.from), unitText: price.unit } } : {}),
    }),
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      {slug === 'ai-voice-agent' ? (
        <AiVoiceServicePage service={service} />
      ) : (
        <ServicePageTemplate service={service} />
      )}
    </PageShell>
  )
}
