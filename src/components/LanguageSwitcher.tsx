'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useI18n } from '@/lib/i18n/client'
import { languageInfo, locales, localizedPath, suggestedLocale, type Locale } from '@/lib/i18n/config'
import { languageUi } from '@/lib/i18n/language-ui'
const preferenceKey = 'falcon-language-choice'
function remember(value: string) {
  try { localStorage.setItem(preferenceKey, value) } catch { /* Storage may be disabled. */ }
}
function changeLanguage(locale: Locale, warning: string) {
  if (document.querySelector('form[data-contact-dirty="true"]') && !window.confirm(warning)) return
  remember(locale)
  window.location.assign(localizedPath(window.location.pathname + window.location.search + window.location.hash, locale))
}
export function LanguageSwitcher() {
  const { locale } = useI18n()
  const ui = languageUi(locale)
  const path = usePathname()
  if (/^\/(?:card|resume|privacy|terms)(?:\/|$)/.test(path)) return null
  return <label className="ml-auto xl:ml-0 inline-flex shrink-0 items-center gap-2 text-sm text-stone-200">
    <span className="sr-only">{ui.label}</span>
    <select aria-label={ui.label} value={locale} onChange={event => changeLanguage(event.target.value as Locale, ui.unsent)} className="max-w-36 rounded border border-stone-600 bg-stone-900 px-2 py-2 text-sm focus-visible:outline-amber-500">
      {locales.map(value => <option key={value} value={value} lang={languageInfo[value].lang}>{languageInfo[value].name}</option>)}
    </select>
  </label>
}
export function LanguageSuggestion() {
  const { locale } = useI18n()
  const path = usePathname()
  const [suggestion, setSuggestion] = useState<Locale>()
  useEffect(() => {
    setSuggestion(undefined)
    try { if (localStorage.getItem(preferenceKey)) return } catch { /* Still offer manual language selection. */ }
    const next = suggestedLocale(navigator.languages)
    if (next && next !== locale) setSuggestion(next)
  }, [locale, path])
  if (!suggestion) return null
  const ui = languageUi(suggestion)
  return <aside aria-label={ui.suggestion} lang={languageInfo[suggestion].lang} className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-xl flex-wrap items-center justify-between gap-3 rounded-lg border border-amber-700 bg-stone-900 p-4 text-sm text-stone-100 shadow-xl">
    <span>{ui.suggestion}: {languageInfo[suggestion].name}</span>
    <button type="button" className="rounded border border-amber-500 px-3 py-2 text-amber-400" onClick={() => changeLanguage(suggestion, languageUi(locale).unsent)}>{ui.change}</button>
    <button type="button" className="rounded p-2" aria-label={ui.dismiss} onClick={() => { remember('dismissed'); setSuggestion(undefined) }}>×</button>
  </aside>
}
