import { siteConfig, orgId, websiteId } from '../site-config'

export interface WebPageSchemaInput {
  name: string
  description: string
  url: string
}

export function createWebPageSchema(input: WebPageSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${input.url}#webpage`,
    name: input.name,
    description: input.description,
    url: input.url,
    inLanguage: 'zh-TW',
    isPartOf: { '@id': websiteId },
    about: { '@id': orgId },
  }
}
