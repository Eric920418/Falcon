import { primaryAuthor } from '@/lib/content/authors'
import { siteConfig, orgId } from '../site-config'

export function createProfilePageSchema() {
  const url = `${siteConfig.url}/about`
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${url}#profile`,
    name: `${primaryAuthor.name}｜${primaryAuthor.jobTitle}`,
    url,
    inLanguage: 'zh-TW',
    mainEntity: {
      '@type': 'Person',
      '@id': `${url}#${primaryAuthor.id}`,
      name: primaryAuthor.name,
      alternateName: primaryAuthor.nameEn,
      jobTitle: primaryAuthor.jobTitle,
      description: primaryAuthor.description,
      url,
      sameAs: primaryAuthor.sameAs,
      worksFor: { '@id': orgId },
    },
  }
}
