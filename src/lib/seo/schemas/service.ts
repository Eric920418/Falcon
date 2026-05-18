import { siteConfig, orgId } from '../site-config'

export interface ServiceSchemaInput {
  slug: string
  name: string
  description: string
  serviceType: string
  url: string
  price?: { min: string; currency?: string; unitText?: string }
  areaServed?: string
}

export function createServiceSchema(input: ServiceSchemaInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/#service-${input.slug}`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: input.url,
    provider: { '@id': orgId },
    areaServed: {
      '@type': 'Country',
      name: input.areaServed ?? '台灣',
    },
  }
  if (input.price) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: input.price.currency ?? 'TWD',
      price: input.price.min,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: input.price.currency ?? 'TWD',
        minPrice: input.price.min,
        unitText: input.price.unitText ?? '月',
      },
    }
  }
  return schema
}
