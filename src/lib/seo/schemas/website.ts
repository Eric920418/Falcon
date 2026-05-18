import { siteConfig, orgId, websiteId } from '../site-config'

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: { '@id': orgId },
  inLanguage: 'zh-TW',
}
