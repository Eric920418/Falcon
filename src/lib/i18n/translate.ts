import type { Locale } from './config'
export type Messages = Record<string, string>
export type Translator = <T extends string | number | boolean | null | undefined>(source: T, values?: Record<string, string | number>) => T
export function normalizeMessage(source: string): string {
  return source.replace(/\s+/g, ' ').trim()
}
export function makeTranslator(locale: Locale, messages: Messages): Translator {
  const translatedValues = new Set(Object.values(messages).flatMap(value => [value, value.replace(/&copy;/g, '©').replace(/NT\$\s*/g, 'TWD ')]))
  return ((source, values) => {
    if (typeof source !== 'string') return source
    const key = normalizeMessage(source)
    let value = locale === 'zh-tw' ? source : messages[key]
    if (value === undefined && translatedValues.has(source)) value = source
    if (value === undefined) {
      if (/[\u3400-\u9fff]/.test(key) && !/^(?:https?:|\/)/.test(key)) {
        throw new Error(`Missing translation [${locale}]: ${key}`)
      }
      value = source
    }
    value = value.replace(/&copy;/g, '©').replace(/NT\$\s*/g, 'TWD ')
    return values ? value.replace(/\{(\d+)\}/g, (match, key) => String(values[key] ?? match)) : value
  }) as Translator
}
