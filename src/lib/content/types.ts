import type { FAQItem, HowToInput } from '@/lib/seo'

export type QualityTier = 'production' | 'draft' | 'placeholder'

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

export interface SourcedNumber {
  value: string
  label: string
  source?: {
    name: string
    url?: string
    date?: string
  }
}

export interface CaseStudy {
  clientName: string
  industry?: string
  url?: string
  engagementStart?: string
  engagementEnd?: string
  baseline?: { metric: string; value: string }[]
  result?: { metric: string; value: string; delta?: string }[]
  oneLineSummary: string
  consentToPublish: 'full' | 'metrics-only' | 'name-only'
}

export interface ServiceContent {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational'
  lastModified: string
  qualityTier: QualityTier
  intro: string
  sections: ContentSection[]
  howTo?: HowToInput
  faq: FAQItem[]
  pricing?: PricingTier[]
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
  qualityTier: QualityTier
  intro: string
  sections: ContentSection[]
  caseStudies?: CaseStudy[]
  faq: FAQItem[]
}

export interface BlogContent {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  datePublished: string
  dateModified?: string
  reviewedByRole?: string
  qualityTier: QualityTier
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational'
  intro: string
  toc?: string[]
  sections: ContentSection[]
  howTo?: HowToInput
  faq?: FAQItem[]
  relatedServices?: string[]
}

export interface PricingPageContent {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  lastModified: string
  qualityTier: QualityTier
  intro: string
  tiers: PricingTier[]
  faq: FAQItem[]
}

export interface ComparePageContent {
  slug: string
  title: string
  h1: string
  description: string
  keywords: string[]
  lastModified: string
  qualityTier: QualityTier
  intro: string
  comparisonTable: {
    feature: string
    values: string[]
  }[]
  comparisonHeaders: string[]
  sections: ContentSection[]
  faq: FAQItem[]
}
