import { siteConfig } from '../site-config'

export interface BreadcrumbItem {
  name: string
  path: string
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${siteConfig.url}${item.path}`,
    })),
  }
}
