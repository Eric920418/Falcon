import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageShell } from '@/components/page-layout/PageShell'
import { PricingPageTemplate } from '@/components/page-templates/PricingPageTemplate'
import { pricingPages, pricingSlugs, getPricingPage } from '@/lib/content/pricing'
import {
  createMetadata,
  createFAQSchema,
  createBreadcrumbSchema,
  createWebPageSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

interface PricingDetailProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return pricingSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PricingDetailProps): Promise<Metadata> {
  const { slug } = await params
  const page = getPricingPage(slug)
  if (!page) return {}
  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/pricing/${slug}`,
    keywords: page.keywords,
    noIndex: page.qualityTier !== 'production',
  })
}

export default async function PricingDetailPage({ params }: PricingDetailProps) {
  const { slug } = await params
  const page = getPricingPage(slug)
  if (!page) notFound()

  const url = `${siteConfig.url}/pricing/${slug}`
  const schemas = [
    createWebPageSchema({
      name: page.title,
      description: page.description,
      url,
      speakableSelectors: ['#pricing-hero', '#pricing-tiers'],
    }),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '透明定價', path: '/pricing' },
      { name: page.h1, path: `/pricing/${slug}` },
    ]),
    createFAQSchema(page.faq, `pricing-${slug}-faq`),
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      '@id': `${url}#catalog`,
      name: page.h1,
      url,
      itemListElement: page.tiers.map((tier, i) => ({
        '@type': 'Offer',
        position: i + 1,
        name: tier.name,
        url,
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
          price: tier.price.replace(/,/g, ''),
          unitText: tier.unit,
        },
        itemOffered: {
          '@type': 'Service',
          name: tier.name,
          description: tier.includes.join('；'),
        },
      })),
    },
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <PricingPageTemplate page={page} />
    </PageShell>
  )
}
