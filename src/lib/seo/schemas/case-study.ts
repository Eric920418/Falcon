import type { CaseEvidence } from '@/lib/content/types'
import { siteConfig, orgId } from '../site-config'

export function createCaseStudySchema(caseStudy: CaseEvidence) {
  const url = `${siteConfig.url}/case-studies/${caseStudy.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#case-study`,
    name: caseStudy.title,
    description: caseStudy.summary,
    url,
    dateModified: caseStudy.updatedAt,
    inLanguage: 'zh-TW',
    image: `${siteConfig.url}${caseStudy.image}`,
    creator: { '@id': orgId },
    about: {
      '@type': 'Thing',
      name: caseStudy.clientName,
    },
    spatialCoverage: caseStudy.location,
    text: caseStudy.disclosure,
  }
}
