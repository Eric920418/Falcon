import { localeFromPath } from './i18n/config'
import { isServiceInterest, type ServiceInterest } from './contact-service'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export type ContactChannel = 'phone' | 'email' | 'line'

export function trackEvent(event: string, parameters: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...parameters, locale: localeFromPath(window.location.pathname) })
}

export function trackContactClick(channel: ContactChannel, placement: string, service?: ServiceInterest) {
  trackEvent('contact_click', { channel, placement, ...(isServiceInterest(service) ? { service } : {}) })
}
