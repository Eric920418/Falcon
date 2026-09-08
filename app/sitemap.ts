import { locales, localizedPath } from '@/lib/i18n/config'
import { languageAlternates } from '@/lib/i18n/seo'
import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'
import { getIndexableServices } from '@/lib/content/services'
import { getAllLocalPages, isIndexableLocalPage } from '@/lib/content/local'
import { getAllBlogPosts } from '@/lib/content/blog'
import { pricingPages, comparePages } from '@/lib/content/pricing'
import { getAllCaseStudies } from '@/lib/content/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: '2026-09-07' },
    { url: `${baseUrl}/services`, lastModified: '2026-08-26' },
    { url: `${baseUrl}/about`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/case-studies`, lastModified: '2026-09-07' },
    { url: `${baseUrl}/pricing`, lastModified: '2026-08-11' },
    { url: `${baseUrl}/blog`, lastModified: '2026-08-30' },
    { url: `${baseUrl}/privacy`, lastModified: '2026-09-08' },
    { url: `${baseUrl}/terms`, lastModified: '2026-09-08' },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = getIndexableServices()
    .filter((s) => s.qualityTier === 'production')
    .map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: s.lastModified,
    }))

  const localRoutes: MetadataRoute.Sitemap = getAllLocalPages()
    .filter((p) => isIndexableLocalPage(p))
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

  const routes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...localRoutes,
    ...blogRoutes,
    ...pricingRoutes,
    ...compareRoutes,
    ...caseStudyRoutes,
  ]
  return routes.flatMap(route => {
    const path = route.url.slice(baseUrl.length) || '/'
    if (['/privacy', '/terms'].includes(path)) return [{ ...route, alternates: { languages: languageAlternates(path) } }]
    return locales.map(locale => ({
      ...route,
      url: localizedPath(path, locale) === '/' ? baseUrl : baseUrl + localizedPath(path, locale),
      alternates: { languages: languageAlternates(path) },
    }))
  })
}
