import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageShell } from '@/components/page-layout/PageShell'
import { LocalPageTemplate } from '@/components/page-templates/LocalPageTemplate'
import { localSlugs, getLocalPage, hasIndexableLocalEvidence } from '@/lib/content/local'
import {
  createMetadata,
  createBreadcrumbSchema,
  createWebPageSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

interface LocalPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return localSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: LocalPageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getLocalPage(slug)
  if (!page) return {}
  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/local/${slug}`,
    keywords: page.keywords,
    noIndex: page.qualityTier !== 'production' || !hasIndexableLocalEvidence(page),
  })
}

export default async function LocalLandingPage({ params }: LocalPageProps) {
  const { slug } = await params
  const page = getLocalPage(slug)
  if (!page) notFound()

  const url = `${siteConfig.url}/local/${slug}`

  const schemas = [
    createWebPageSchema({
      name: page.title,
      description: page.description,
      url,
    }),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '本地服務', path: `/local/${slug}` },
      { name: page.h1, path: `/local/${slug}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#local-service`,
      name: page.h1,
      description: page.description,
      provider: { '@id': `${siteConfig.url}/#organization` },
      serviceType: page.serviceFocus,
      areaServed: {
        '@type': 'City',
        name: page.city,
        containedInPlace: { '@type': 'Country', name: '台灣' },
      },
      url,
    },
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <LocalPageTemplate page={page} />
    </PageShell>
  )
}
