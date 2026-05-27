import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageShell } from '@/components/page-layout/PageShell'
import { ServicePageTemplate } from '@/components/page-templates/ServicePageTemplate'
import { services, serviceSlugs, getService } from '@/lib/content/services'
import {
  createMetadata,
  createServiceSchema,
  createFAQSchema,
  createHowToSchema,
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
  const service = getService(slug)
  if (!service) return {}
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    keywords: service.keywords,
    noIndex: service.qualityTier !== 'production',
  })
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const url = `${siteConfig.url}/services/${slug}`

  const schemas = [
    createWebPageSchema({
      name: service.title,
      description: service.description,
      url,
      speakableSelectors: ['#service-hero', '#service-content'],
    }),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '服務項目', path: '/services/seo' },
      { name: service.h1, path: `/services/${slug}` },
    ]),
    createServiceSchema({
      slug: service.slug,
      name: service.h1,
      description: service.description,
      serviceType: service.serviceType,
      url,
      price: { min: service.priceMin, unitText: service.priceUnit },
    }),
    createFAQSchema(service.faq, `faq-${slug}`),
    ...(service.howTo ? [createHowToSchema(service.howTo)] : []),
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <ServicePageTemplate service={service} />
    </PageShell>
  )
}
