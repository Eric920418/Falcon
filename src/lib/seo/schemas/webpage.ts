import { siteConfig, orgId, websiteId } from '../site-config'

export interface WebPageSchemaInput {
  name: string
  description: string
  url: string
  speakableSelectors?: string[]
}

export function createWebPageSchema(input: WebPageSchemaInput) {
  const schema: Record<string, unknown> = {
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
  if (input.speakableSelectors && input.speakableSelectors.length > 0) {
    schema.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: input.speakableSelectors,
    }
  }
  return schema
}
