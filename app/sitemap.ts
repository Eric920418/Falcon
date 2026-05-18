import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'
import { getAllServices } from '@/lib/content/services'
import { getAllLocalPages } from '@/lib/content/local'
import { getAllBlogPosts } from '@/lib/content/blog'
import { pricingPages, comparePages } from '@/lib/content/pricing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const now = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: s.lastModified,
    changeFrequency: 'monthly',
    priority: 0.95,
  }))

  const localRoutes: MetadataRoute.Sitemap = getAllLocalPages().map((p) => ({
    url: `${baseUrl}/local/${p.slug}`,
    lastModified: p.lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: p.dateModified ?? p.datePublished,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const pricingRoutes: MetadataRoute.Sitemap = Object.values(pricingPages).map((p) => ({
    url: `${baseUrl}/pricing/${p.slug}`,
    lastModified: p.lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const compareRoutes: MetadataRoute.Sitemap = Object.values(comparePages).map((p) => ({
    url: `${baseUrl}/compare/${p.slug}`,
    lastModified: p.lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...localRoutes,
    ...blogRoutes,
    ...pricingRoutes,
    ...compareRoutes,
  ]
}
