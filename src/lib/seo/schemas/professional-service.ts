import { siteConfig } from '../site-config'

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.url}/#professionalservice`,
  name: siteConfig.name,
  description: '專業數位行銷與網站開發服務',
  url: siteConfig.url,
  priceRange: siteConfig.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  knowsAbout: [
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'GEO' },
    { '@type': 'Thing', name: 'AEO' },
    { '@type': 'Thing', name: '網站開發' },
    { '@type': 'Thing', name: 'AI 工具' },
    { '@type': 'Thing', name: '數位廣告' },
  ],
}
