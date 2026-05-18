import { siteConfig, orgId } from '../site-config'

export interface ArticleSchemaInput {
  slug: string
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  authorName?: string
  image?: string
  keywords?: string[]
}

export function createArticleSchema(input: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${input.url}#article`,
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: 'zh-TW',
    image: input.image ?? `${siteConfig.url}/logo.png`,
    author: {
      '@type': 'Person',
      name: input.authorName ?? '隼訊團隊',
      url: `${siteConfig.url}/about`,
    },
    publisher: {
      '@id': orgId,
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': input.url,
    },
    ...(input.keywords ? { keywords: input.keywords.join(', ') } : {}),
  }
}
