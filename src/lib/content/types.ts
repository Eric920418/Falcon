export type QualityTier = 'production' | 'draft' | 'placeholder'

export interface FAQItem {
  question: string
  answer: string
}

export interface ContentReference {
  name: string
  url: string
  publisher: string
  updatedAt?: string
}

export interface ContentTable {
  caption?: string
  headers: string[]
  rows: string[][]
}

export interface HowToStep {
  name: string
  text: string
  url?: string
}

export interface HowToInput {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string
  estimatedCost?: { value: string; currency?: string }
}

export interface ContentSection {
  heading: string
  body: string
  items?: string[]
  table?: ContentTable
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

export interface AuthorProfile {
  id: string
  name: string
  nameEn: string
  jobTitle: string
  description: string
  url: string
  sameAs: string[]
}

export interface EvidenceMetric {
  label: string
  value: string
  context: string
  sourceUrl?: string
}

export interface CaseEvidence {
  slug: string
  title: string
  clientName: string
  location: string
  period: string
  summary: string
  challenge: string
  approach: string[]
  metrics: EvidenceMetric[]
  technologies: string[]
  image: string
  projectUrl?: string
  updatedAt: string
  disclosure: string
  evidenceStatus: 'public-project' | 'client-approved' | 'anonymized'
  responsibilities?: string[]
  workflow?: string[]
  workflowTitle?: string
  fallbacks?: string[]
  verification?: string[]
  gallery?: {
    src: string
    alt: string
    caption: string
  }[]
}

export type AiVoiceCapabilityStatus = 'demonstrated' | 'custom'

export interface AiVoiceCapability {
  title: string
  description: string
  status: AiVoiceCapabilityStatus
  evidenceHref?: string
}

export interface PriceDefinition {
  serviceSlug: string
  pricingSlug: string
  name: string
  from: number
  currency: 'TWD'
  unit: '月' | '專案'
  scope: string
  factors: string[]
  tiers: PricingTier[]
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
  /** 誠實的服務方式聲明：無門市、線上為主、預約前往；索引閘門要求非空。 */
  coverageDisclosure: string
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
  qualityTier: QualityTier
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational'
  intro: string
  toc?: string[]
  sections: ContentSection[]
  howTo?: HowToInput
  faq?: FAQItem[]
  relatedLinks?: RelatedLink[]
  relatedServices?: string[]
  relatedCaseStudies?: string[]
  references?: ContentReference[]
}

export interface RelatedLink {
  label: string
  href: string
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
  sections: ContentSection[]
  faq: FAQItem[]
  relatedLinks?: RelatedLink[]
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
  references?: ContentReference[]
}
