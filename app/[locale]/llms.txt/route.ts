import { llmsResponse } from '@/lib/i18n/llms'
import { locales } from '@/lib/i18n/config'
export const dynamic = 'force-static'
export function generateStaticParams() { return locales.map(locale => ({ locale })) }
export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  return llmsResponse((await params).locale, false)
}
