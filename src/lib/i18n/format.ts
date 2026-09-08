import { languageInfo, type Locale } from './config'
export function formatMoney(value: number | string, locale: Locale): string {
  const number = typeof value === 'number' ? value : /^\d[\d,]*(?:\.\d+)?$/.test(value) ? Number(value.replace(/,/g, '')) : NaN
  if (!Number.isFinite(number)) return String(value)
  return new Intl.NumberFormat(languageInfo[locale].lang, { style: 'currency', currency: 'TWD', currencyDisplay: 'code', maximumFractionDigits: 0, minimumFractionDigits: 0 }).format(number)
}
