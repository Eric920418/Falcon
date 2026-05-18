import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageShell } from '@/components/page-layout/PageShell'
import { ComparePageTemplate } from '@/components/page-templates/ComparePageTemplate'
import { comparePages, compareSlugs, getComparePage } from '@/lib/content/pricing'
import {
  createMetadata,
  createFAQSchema,
  createBreadcrumbSchema,
  createWebPageSchema,
  siteConfig,
  JsonLd,
} from '@/lib/seo'

interface CompareProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return compareSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CompareProps): Promise<Metadata> {
  const { slug } = await params
  const page = getComparePage(slug)
  if (!page) return {}
  return createMetadata({
    title: page.title,
    description: page.description,
    path: `/compare/${slug}`,
    keywords: page.keywords,
  })
}

export default async function ComparePage({ params }: CompareProps) {
  const { slug } = await params
  const page = getComparePage(slug)
  if (!page) notFound()

  const url = `${siteConfig.url}/compare/${slug}`
  const schemas = [
    createWebPageSchema({
      name: page.title,
      description: page.description,
      url,
      speakableSelectors: ['#compare-hero', '#compare-table'],
    }),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '比較', path: `/compare/${slug}` },
      { name: page.h1, path: `/compare/${slug}` },
    ]),
    createFAQSchema(page.faq, `compare-${slug}-faq`),
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <ComparePageTemplate page={page} />
    </PageShell>
  )
}
