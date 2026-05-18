import { siteConfig } from '../site-config'

export interface FAQItem {
  question: string
  answer: string
}

export function createFAQSchema(items: FAQItem[], idSuffix = 'faq') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#${idSuffix}`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
