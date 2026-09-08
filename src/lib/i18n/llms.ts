import { formatMoney } from './format'
import { loadMessages, translateData } from './server'
import { isLocale, languageInfo, localizedPath, type Locale } from './config'
import { makeTranslator, type Translator } from './translate'
import { siteConfig } from '@/lib/seo/site-config'
import { getIndexableServices } from '@/lib/content/services'
import { getAllBlogPosts } from '@/lib/content/blog'
import { getAllCaseStudies } from '@/lib/content/case-studies'
import { getAllLocalPages, isIndexableLocalPage } from '@/lib/content/local'
import { pricingPages, comparePages } from '@/lib/content/pricing'
import { primaryPriceDefinitions } from '@/lib/content/price-catalog'

export async function llmsResponse(value: string, full: boolean) {
  if (!isLocale(value)) return new Response('Not found', { status: 404 })
  const locale: Locale = value
  const messages = locale === 'zh-tw' ? {} : await loadMessages(locale)
  const t = makeTranslator(locale, messages)
  const url = (path: string) => siteConfig.url + localizedPath(path, locale)
  const groups = [
    { title: '主要服務', prefix: '/services', pages: getIndexableServices().filter(page => page.qualityTier === 'production') },
    { title: '公開案例', prefix: '/case-studies', pages: getAllCaseStudies() },
    { title: '價格頁', prefix: '/pricing', pages: Object.values(pricingPages).filter(page => page.qualityTier === 'production') },
    { title: '比較頁', prefix: '/compare', pages: Object.values(comparePages).filter(page => page.qualityTier === 'production') },
    { title: '內容文章', prefix: '/blog', pages: getAllBlogPosts().filter(page => page.qualityTier === 'production') },
    { title: '服務地區', prefix: '/local', pages: getAllLocalPages().filter(isIndexableLocalPage) },
  ]
  const body = [
    `# ${locale === 'zh-tw' ? siteConfig.name : 'Falcon Information'}`,
    `Language: ${languageInfo[locale].lang}\n> ${t(siteConfig.description)}`,
    ...groups.map(group => `## ${t(group.title)}\n${group.pages.map(original => {
      const page = translateData(original, locale, messages) as unknown as Record<string, unknown>
      const title = String(page.title ?? page.h1)
      const description = String(page.description ?? page.summary ?? '')
      const link = url(`${group.prefix}/${page.slug}`)
      if (!full) return `- [${title}](${link}): ${description}`
      return `### ${title}\nURL: ${link}\n${description}\n${renderFields(page, t)}`
    }).join('\n\n')}`),
    `## ${t('公開起價')}\n${primaryPriceDefinitions.map(price => `- ${t(price.name)}: ${t('{0}／{1}起', { 0: formatMoney(price.from, locale), 1: t(price.unit) })} — ${t(price.scope)}`).join('\n')}`,
    `## ${t('聯絡')}\nEmail: ${siteConfig.email}\nTel: ${siteConfig.telephone}\n${url('/#contact')}`,
    t('本檔案是網站內容摘要，不是排名或 AI 引用保證；完整證據與限制以各 HTML 頁面為準。'),
  ].join('\n\n')
  return new Response(body + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Content-Language': languageInfo[locale].lang, 'Cache-Control': 'public, max-age=3600, s-maxage=86400' } })
}
// Render content fields only: machine identifiers and indexing flags are not prose.
function renderFields(page: Record<string, unknown>, t: Translator): string {
  const fields = ['intro', 'sections', 'faq', 'tiers', 'comparisonHeaders', 'comparisonTable', 'challenge', 'approach', 'metrics', 'disclosure', 'responsibilities', 'workflow', 'fallbacks', 'verification', 'references']
  function text(value: unknown, key = ''): string {
    if (typeof value === 'string') return key === 'unit' ? t(value) : value
    if (typeof value === 'number') return String(value)
    if (Array.isArray(value)) return value.map(item => text(item, key)).filter(Boolean).map(line => `- ${line}`).join('\n')
    if (value && typeof value === 'object') return Object.entries(value).filter(([key]) => !['id', 'slug'].includes(key)).map(([key, item]) => text(item, key)).filter(Boolean).join('\n')
    return ''
  }
  return fields.map(key => text(page[key])).filter(Boolean).join('\n\n')
}
