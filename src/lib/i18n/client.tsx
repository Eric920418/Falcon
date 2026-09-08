'use client'
import { createContext, useContext } from 'react'
import { defaultLocale, type Locale } from './config'
import { makeTranslator, type Messages } from './translate'
const I18nContext = createContext<{ locale: Locale; messages: Messages }>({ locale: defaultLocale, messages: {} })
export function I18nProvider({ locale, messages, children }: { locale: Locale; messages: Messages; children: React.ReactNode }) {
  return <I18nContext.Provider value={{ locale, messages }}>{children}</I18nContext.Provider>
}
export function useI18n() {
  const value = useContext(I18nContext)
  return { ...value, t: makeTranslator(value.locale, value.messages) }
}
