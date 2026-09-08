import type { Metadata } from 'next'
import SiteRoot, { baseMetadata } from '@/components/SiteRoot'
import { I18nProvider } from '@/lib/i18n/client'
import { initLocale } from '@/lib/i18n/server'
import { locales } from '@/lib/i18n/config'
import common from '@/lib/i18n/messages/zh-tw/common.json'
import { LanguageSuggestion } from '@/components/LanguageSwitcher'

export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await initLocale((await params).locale)
  return {
    metadataBase: baseMetadata.metadataBase,
    icons: baseMetadata.icons,
    manifest: baseMetadata.manifest,
    title: { default: 'Falcon Information', template: locale === 'zh-tw' ? '%s | 隼訊數位行銷' : '%s | Falcon Information' },
  }
}
export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale, messages, t } = await initLocale((await params).locale)
  const clientMessages = Object.fromEntries(Object.keys(common).map(key => [key, locale === 'zh-tw' ? key : t(key)]))
  return <SiteRoot locale={locale}><I18nProvider locale={locale} messages={clientMessages}><LanguageSuggestion />{children}</I18nProvider></SiteRoot>
}
