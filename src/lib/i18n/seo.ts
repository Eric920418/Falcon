import { siteConfig, orgId } from '@/lib/seo/site-config'
import { locales, languageInfo, localizedPath, type Locale } from './config'
import { makeTranslator, type Messages } from './translate'
export function absoluteLocaleUrl(path: string, locale: Locale): string {
  const localized = localizedPath(path, locale)
  return localized === '/' ? siteConfig.url : siteConfig.url + localized
}
export function languageAlternates(path: string): Record<string, string> {
  if (['/privacy', '/terms'].includes(path)) return { 'zh-TW': siteConfig.url + path, 'x-default': siteConfig.url + path }
  return Object.fromEntries([
    ...locales.map(locale => [languageInfo[locale].lang, absoluteLocaleUrl(path, locale)]),
    ['x-default', absoluteLocaleUrl(path, 'zh-tw')],
  ])
}
export function localizeSchema<T>(data: T, locale: Locale, messages: Messages): T {
  const t = makeTranslator(locale, messages)
  function visit(value: unknown, key = ''): unknown {
    if (typeof value === 'string') {
      if (key === 'inLanguage') return languageInfo[locale].lang
      if (value === orgId || key === 'sameAs' || key === 'alternateName' || key === 'availableLanguage') return value
      if (value === siteConfig.url) return absoluteLocaleUrl('/', locale)
      if (value.startsWith(siteConfig.url + '#')) return absoluteLocaleUrl('/', locale) + value.slice(siteConfig.url.length)
      if (value.startsWith(siteConfig.url + '/')) return absoluteLocaleUrl(value.slice(siteConfig.url.length), locale)
      if (key.startsWith('@') || /^(?:https?:|tel:|mailto:)/.test(value)) return value
      return t(value)
    }
    if (Array.isArray(value)) return value.map(item => visit(item, key))
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k,v]) => [k, visit(v,k)]))
    return value
  }
  return visit(data) as T
}
