import { overrides } from './overrides'
import { cache } from 'react'
import { notFound } from 'next/navigation'
import { defaultLocale, isLocale, type Locale } from './config'
import { makeTranslator, type Messages } from './translate'
const groups = ['common', 'home', 'pages', 'services', 'pricing', 'articles', 'cases', 'portfolio', 'local'] as const
export const loadMessages = cache(async (locale: Locale): Promise<Messages> => {
  const parts = await Promise.all(groups.map(async group => (await import(`./messages/${locale}/${group}.json`)).default))
  return Object.assign({}, ...parts, overrides[locale])
})
const state = cache(() => ({ locale: defaultLocale as Locale, messages: {} as Messages }))
export async function initLocale(value: unknown) {
  if (!isLocale(value)) notFound()
  const messages = value === defaultLocale ? {} : await loadMessages(value)
  Object.assign(state(), { locale: value, messages })
  return getI18n()
}
export function getI18n() {
  const { locale, messages } = state()
  return { locale, messages, t: makeTranslator(locale, messages) }
}
export function translateData<T>(data: T, locale = getI18n().locale, messages = getI18n().messages): T {
  // Catalogs are loaded by initLocale before rendering; no global mutable locale.
  if (locale === defaultLocale) return data
  const t = makeTranslator(locale, messages)
  function visit(value: unknown, key = ''): unknown {
    if (typeof value === 'string') {
      if (['slug', 'id', 'url', 'href', 'image', 'src', 'projectUrl', 'sourceUrl', 'qualityTier', 'unit'].includes(key)) return value
      return t(value)
    }
    if (Array.isArray(value)) return value.map(item => visit(item, key))
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k,v]) => [k, visit(v,k)]))
    return value
  }
  return visit(data) as T
}
