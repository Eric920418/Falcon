import { siteConfig, orgId } from '../site-config'
import { primaryAuthor } from '@/lib/content/authors'

export interface ArticleSchemaInput {
  slug: string
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  image?: string
  keywords?: string[]
}

export function createArticleSchema(input: ArticleSchemaInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${input.url}#article`,
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: 'zh-TW',
    image: input.image ?? `${siteConfig.url}/opengraph-image`,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/about#${primaryAuthor.id}`,
      name: primaryAuthor.name,
      url: `${siteConfig.url}${primaryAuthor.url}`,
      jobTitle: primaryAuthor.jobTitle,
      sameAs: primaryAuthor.sameAs,
    },
    publisher: {
      '@id': orgId,
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/icon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': input.url,
    },
  }

  if (input.keywords) {
    schema.keywords = input.keywords.join(', ')
  }

  return schema
}
