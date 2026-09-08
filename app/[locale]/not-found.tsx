'use client'
import { SitePageHeader } from '@/components/page-layout/SitePageHeader'
import { useI18n } from '@/lib/i18n/client'
import { languageUi } from '@/lib/i18n/language-ui'
import Link from '@/lib/i18n/link'

export default function NotFound() {
  const { locale } = useI18n()
  const ui = languageUi(locale)
  return <div className="min-h-screen bg-stone-950 text-stone-100"><SitePageHeader /><main className="mx-auto max-w-3xl px-6 py-24">
    <p className="mb-4 text-amber-500">404</p>
    <h1 className="mb-6 text-4xl">{ui.notFound}</h1>
    <p className="mb-8 leading-relaxed text-stone-400">{ui.notFoundDescription}</p>
    <Link href="/" className="falcon-btn-primary">{ui.home}</Link>
  </main></div>
}
