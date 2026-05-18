import { siteConfig, orgId } from '../site-config'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId,
  name: siteConfig.name,
  alternateName: siteConfig.alternateNames as unknown as string[],
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/logo.png`,
    width: 512,
    height: 512,
  },
  description: siteConfig.description,
  sameAs: siteConfig.socialLinks as unknown as string[],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    availableLanguage: ['Chinese', 'English'],
    areaServed: 'TW',
  },
  knowsAbout: siteConfig.knowsAbout as unknown as string[],
  foundingDate: siteConfig.foundingDate,
}
