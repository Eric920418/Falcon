export const locales = ['zh-tw', 'en', 'ja', 'ko', 'zh-hans', 'es', 'fr', 'de', 'pt'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'zh-tw'
export const languageInfo: Record<Locale, { name: string; lang: string; og: string }> = {
  'zh-tw': { name: '繁體中文', lang: 'zh-TW', og: 'zh_TW' },
  en: { name: 'English', lang: 'en', og: 'en_US' },
  ja: { name: '日本語', lang: 'ja', og: 'ja_JP' },
  ko: { name: '한국어', lang: 'ko', og: 'ko_KR' },
  'zh-hans': { name: '简体中文', lang: 'zh-Hans', og: 'zh_CN' },
  es: { name: 'Español', lang: 'es', og: 'es_ES' },
  fr: { name: 'Français', lang: 'fr', og: 'fr_FR' },
  de: { name: 'Deutsch', lang: 'de', og: 'de_DE' },
  pt: { name: 'Português', lang: 'pt', og: 'pt_BR' },
}
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}
export function localeFromPath(path: string): Locale {
  const first = path.split(/[/?#]/)[1]
  return isLocale(first) ? first : defaultLocale
}
export function unlocalizedPath(path: string): string {
  const locale = path.split(/[/?#]/)[1]
  if (!isLocale(locale)) return path
  const rest = path.slice(locale.length + 1)
  return rest.startsWith('/') ? rest : '/' + rest
}
export function localizedPath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  const plain = unlocalizedPath(path)
  if (/^\/(?:api|_next|card|resume)(?:\/|[?#]|$)/.test(plain)) return plain
  const pathname = plain.split(/[?#]/)[0]
  if (/\.[^/]+$/.test(pathname) && !/^\/llms(?:-full)?\.txt$/.test(pathname)) return plain
  if (/^\/(?:opengraph-image|ai-voice-og|brand-og)(?:\/|[?#]|$)/.test(plain)) return plain
  return locale === defaultLocale ? plain : `/${locale}${plain === '/' ? '' : plain.startsWith('/?') || plain.startsWith('/#') ? plain.slice(1) : plain}`
}
export function suggestedLocale(languages: readonly string[]): Locale | undefined {
  for (const raw of languages) {
    const tag = raw.toLowerCase()
    if (/^zh(?:-|$)/.test(tag)) return tag.split('-').includes('hant') ? 'zh-tw' : /hans|cn|sg/.test(tag) ? 'zh-hans' : 'zh-tw'
    const base = tag.split('-')[0]
    if (isLocale(base)) return base
  }
}
