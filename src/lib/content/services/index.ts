import { seoService } from './seo'
import { geoService } from './geo'
import { webDevelopmentService } from './web-development'
import { aiToolsService } from './ai-tools'
import { aiVoiceService } from './ai-voice-agent'
import { digitalAdsService } from './digital-ads'
import { socialMediaService } from './social-media'
import { videoService } from './video'
import { quantTradingService } from './quant-trading'
import type { ServiceContent } from '../types'

export const indexableServiceSlugs = ['web-development', 'ai-tools', 'ai-voice-agent', 'seo', 'geo'] as const
export const noindexServiceSlugs = ['digital-ads', 'social-media', 'video', 'quant-trading'] as const
export const redirectedServiceSlugs = ['aeo'] as const

export const services: Record<string, ServiceContent> = {
  seo: seoService,
  geo: geoService,
  'web-development': webDevelopmentService,
  'ai-tools': aiToolsService,
  'ai-voice-agent': aiVoiceService,
  'digital-ads': digitalAdsService,
  'social-media': socialMediaService,
  video: videoService,
  'quant-trading': quantTradingService,
}

export const serviceSlugs = [
  ...Object.keys(services),
  ...redirectedServiceSlugs,
]

export function getService(slug: string): ServiceContent | null {
  return services[slug] ?? null
}

export function getAllServices(): ServiceContent[] {
  return Object.values(services)
}

export function isIndexableService(slug: string): boolean {
  return (indexableServiceSlugs as readonly string[]).includes(slug)
}

export function getIndexableServices(): ServiceContent[] {
  return indexableServiceSlugs.map((slug) => services[slug])
}

export { seoService, geoService, webDevelopmentService, aiToolsService, aiVoiceService, digitalAdsService, socialMediaService, videoService, quantTradingService }
