import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'
import { getIndexableServices } from '@/lib/content/services'
import { getAllLocalPages, hasIndexableLocalEvidence } from '@/lib/content/local'
import { getAllBlogPosts } from '@/lib/content/blog'
import { pricingPages, comparePages } from '@/lib/content/pricing'
import { getAllCaseStudies } from '@/lib/content/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: '2026-07-26' },
    { url: `${baseUrl}/about`, lastModified: '2026-07-26' },
    { url: `${baseUrl}/case-studies`, lastModified: '2026-07-26' },
    { url: `${baseUrl}/pricing`, lastModified: '2026-07-26' },
    { url: `${baseUrl}/blog`, lastModified: '2026-07-26' },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = getIndexableServices()
    .filter((s) => s.qualityTier === 'production')
    .map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: s.lastModified,
    }))

  const localRoutes: MetadataRoute.Sitemap = getAllLocalPages()
    .filter(
      (p) =>
        p.qualityTier === 'production' &&
        hasIndexableLocalEvidence(p),
    )
    .map((p) => ({
      url: `${baseUrl}/local/${p.slug}`,
      lastModified: p.lastModified,
    }))

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts()
    .filter((p) => p.qualityTier === 'production')
    .map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: p.dateModified ?? p.datePublished,
    }))

  const pricingRoutes: MetadataRoute.Sitemap = Object.values(pricingPages)
    .filter((p) => p.qualityTier === 'production')
    .map((p) => ({
      url: `${baseUrl}/pricing/${p.slug}`,
      lastModified: p.lastModified,
    }))

  const compareRoutes: MetadataRoute.Sitemap = Object.values(comparePages)
    .filter((p) => p.qualityTier === 'production')
    .map((p) => ({
      url: `${baseUrl}/compare/${p.slug}`,
      lastModified: p.lastModified,
    }))

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudies().map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified: caseStudy.updatedAt,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...localRoutes,
    ...blogRoutes,
    ...pricingRoutes,
    ...compareRoutes,
    ...caseStudyRoutes,
  ]
}
