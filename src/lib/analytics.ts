declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export type ContactChannel = 'phone' | 'email' | 'line'

export function trackEvent(event: string, parameters: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...parameters })
}

export function trackContactClick(channel: ContactChannel, placement: string) {
  trackEvent('contact_click', { channel, placement })
}
