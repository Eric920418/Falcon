import { siteConfig, orgId } from '../site-config'

export interface ArticleSchemaInput {
  slug: string
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  reviewedByRole?: string
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
    image: input.image ?? `${siteConfig.url}/logo.png`,
    author: {
      '@type': 'Organization',
      '@id': orgId,
      name: siteConfig.editorial.teamName,
      url: siteConfig.url,
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
  }

  if (input.reviewedByRole) {
    schema.reviewedBy = {
      '@type': 'Role',
      roleName: input.reviewedByRole,
      author: {
        '@type': 'Organization',
        '@id': orgId,
      },
    }
  }

  if (input.keywords) {
    schema.keywords = input.keywords.join(', ')
  }

  return schema
}
