import type { FAQItem, HowToInput } from '@/lib/seo'

export interface ContentSection {
  heading: string
  body: string
  items?: string[]
}

export interface PricingTier {
  name: string
  price: string
  unit: string
  includes: string[]
  notIncludes?: string[]
  bestFor?: string
}

export interface ServiceContent {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational'
  lastModified: string
  intro: string
  sections: ContentSection[]
  howTo?: HowToInput
  faq: FAQItem[]
  pricing?: PricingTier[]
  cta: string
  serviceType: string
  priceMin: string
  priceUnit: string
}

export interface LocalContent {
  slug: string
  city: string
  serviceFocus: string
  title: string
  h1: string
  description: string
  keywords: string[]
  lastModified: string
  intro: string
  sections: ContentSection[]
  faq: FAQItem[]
  cta: string
}

export interface BlogContent {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  datePublished: string
  dateModified?: string
  author: string
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational'
  intro: string
  toc?: string[]
  sections: ContentSection[]
  howTo?: HowToInput
  faq?: FAQItem[]
  relatedServices?: string[]
  cta: string
}

export interface PricingPageContent {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  lastModified: string
  intro: string
  tiers: PricingTier[]
  marketComparison?: ContentSection
  faq: FAQItem[]
  cta: string
}

export interface ComparePageContent {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  lastModified: string
  intro: string
  comparisonTable: {
    feature: string
    values: string[]
  }[]
  comparisonHeaders: string[]
  sections: ContentSection[]
  faq: FAQItem[]
  cta: string
}
