import { seoService } from './seo'
import { geoService } from './geo'
import { aeoService } from './aeo'
import { webDevelopmentService } from './web-development'
import { aiToolsService } from './ai-tools'
import { digitalAdsService } from './digital-ads'
import { socialMediaService } from './social-media'
import { videoService } from './video'
import { quantTradingService } from './quant-trading'
import type { ServiceContent } from '../types'

export const services: Record<string, ServiceContent> = {
  seo: seoService,
  geo: geoService,
  aeo: aeoService,
  'web-development': webDevelopmentService,
  'ai-tools': aiToolsService,
  'digital-ads': digitalAdsService,
  'social-media': socialMediaService,
  video: videoService,
  'quant-trading': quantTradingService,
}

export const serviceSlugs = Object.keys(services) as Array<keyof typeof services>

export function getService(slug: string): ServiceContent | null {
  return services[slug] ?? null
}

export function getAllServices(): ServiceContent[] {
  return Object.values(services)
}

export { seoService, geoService, aeoService, webDevelopmentService, aiToolsService, digitalAdsService, socialMediaService, videoService, quantTradingService }
