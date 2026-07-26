/**
 * 全站 SEO 驗收：以 production HTML 驗證 sitemap、索引狀態、metadata、
 * canonical、H1、JSON-LD @graph、內鏈與 AEO 301。
 *
 * 用法：
 *   pnpm check:seo
 *   pnpm check:seo http://localhost:3000
 */
import { siteConfig } from '../src/lib/seo/site-config'
import {
  getAllServices,
  isIndexableService,
} from '../src/lib/content/services'
import {
  getAllLocalPages,
  hasIndexableLocalEvidence,
} from '../src/lib/content/local'
import { getAllBlogPosts } from '../src/lib/content/blog'
import { pricingPages, comparePages } from '../src/lib/content/pricing'
import { getAllCaseStudies } from '../src/lib/content/case-studies'

const baseUrl = (process.argv[2] ?? siteConfig.url).replace(/\/$/, '')

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
}

const tick = `${colors.green}✓${colors.reset}`
const cross = `${colors.red}✗${colors.reset}`

interface RouteSpec {
  path: string
  indexable: boolean
  source: string
}

interface FetchResult {
  status: number
  text: string
  headers: Headers
}

interface PageAudit {
  route: RouteSpec
  result: FetchResult | null
  title: string | null
  description: string | null
  canonical: string | null
  robots: string | null
  h1Count: number
  internalLinks: Set<string>
  problems: string[]
}

function collectExpectedRoutes(): RouteSpec[] {
  const routes: RouteSpec[] = [
    { path: '/', indexable: true, source: 'static' },
    { path: '/about', indexable: true, source: 'static' },
    { path: '/case-studies', indexable: true, source: 'static' },
    { path: '/pricing', indexable: true, source: 'static' },
    { path: '/blog', indexable: true, source: 'static' },
  ]

  for (const service of getAllServices()) {
    routes.push({
      path: `/services/${service.slug}`,
      indexable:
        service.qualityTier === 'production' &&
        isIndexableService(service.slug),
      source: 'services',
    })
  }

  for (const page of getAllLocalPages()) {
    routes.push({
      path: `/local/${page.slug}`,
      indexable:
        page.qualityTier === 'production' &&
        hasIndexableLocalEvidence(page),
      source: 'local',
    })
  }

  for (const post of getAllBlogPosts()) {
    routes.push({
      path: `/blog/${post.slug}`,
      indexable: post.qualityTier === 'production',
      source: 'blog',
    })
  }

  for (const page of Object.values(pricingPages)) {
    routes.push({
      path: `/pricing/${page.slug}`,
      indexable: page.qualityTier === 'production',
      source: 'pricing',
    })
  }

  for (const page of Object.values(comparePages)) {
    routes.push({
      path: `/compare/${page.slug}`,
      indexable: page.qualityTier === 'production',
      source: 'compare',
    })
  }

  for (const study of getAllCaseStudies()) {
    routes.push({
      path: `/case-studies/${study.slug}`,
      indexable: true,
      source: 'case-studies',
    })
  }

  return routes
}

async function fetchText(
  url: string,
  redirect: RequestRedirect = 'follow',
): Promise<FetchResult | null> {
  try {
    const response = await fetch(url, {
      redirect,
      headers: { 'User-Agent': 'Falcon-SEO-Acceptance/2.0' },
    })
    return {
      status: response.status,
      text: await response.text(),
      headers: response.headers,
    }
  } catch {
    return null
  }
}

function getAttribute(tag: string, name: string): string | null {
  const match = tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, 'i'))
  return match?.[1] ?? null
}

function getMeta(html: string, key: 'name' | 'property', value: string): string | null {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = match[0]
    if (getAttribute(tag, key)?.toLowerCase() === value.toLowerCase()) {
      return getAttribute(tag, 'content')
    }
  }
  return null
}

function getCanonical(html: string): string | null {
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = match[0]
    if (getAttribute(tag, 'rel')?.toLowerCase() === 'canonical') {
      return getAttribute(tag, 'href')
    }
  }
  return null
}

function getTitle(html: string): string | null {
  return html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? null
}

function getJsonLdBlocks(html: string): string[] {
  return Array.from(html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))
    .filter((match) => getAttribute(match[0], 'type') === 'application/ld+json')
    .map((match) => match[1])
}

function normalizePath(value: string): string | null {
  try {
    const parsed = new URL(value, baseUrl)
    const allowedHosts = new Set([
      new URL(baseUrl).host,
      new URL(siteConfig.url).host,
    ])
    if (!allowedHosts.has(parsed.host)) return null
    return parsed.pathname === '/' ? '/' : parsed.pathname.replace(/\/$/, '')
  } catch {
    return null
  }
}

function getInternalLinks(html: string): Set<string> {
  const links = new Set<string>()
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"'#?]+)[^"']*["'][^>]*>/gi)) {
    const path = normalizePath(match[1])
    if (path) links.add(path)
  }
  return links
}

function expectedCanonical(path: string): string {
  return path === '/' ? siteConfig.url : `${siteConfig.url}${path}`
}

function extractSitemapPaths(xml: string): Set<string> {
  const paths = new Set<string>()
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = normalizePath(match[1])
    if (path) paths.add(path)
  }
  return paths
}

async function auditPage(route: RouteSpec): Promise<PageAudit> {
  const result = await fetchText(`${baseUrl}${route.path}`)
  const problems: string[] = []

  if (!result) {
    return {
      route,
      result: null,
      title: null,
      description: null,
      canonical: null,
      robots: null,
      h1Count: 0,
      internalLinks: new Set(),
      problems: ['無法連線'],
    }
  }

  const html = result.text
  const title = getTitle(html)
  const description = getMeta(html, 'name', 'description')
  const canonical = getCanonical(html)
  const robots = getMeta(html, 'name', 'robots')
  const h1Count = Array.from(html.matchAll(/<h1(?:\s|>)/gi)).length
  const hasNoindex = robots?.toLowerCase().includes('noindex') ?? false

  if (result.status !== 200) problems.push(`HTTP ${result.status}，預期 200`)
  if (hasNoindex === route.indexable) {
    problems.push(route.indexable ? '可索引頁出現 noindex' : 'noindex 頁缺少 noindex')
  }

  if (route.indexable) {
    if (!title) problems.push('缺少 title')
    if (!description) problems.push('缺少 meta description')
    if (canonical !== expectedCanonical(route.path)) {
      problems.push(`canonical 錯誤：${canonical ?? '缺少'}`)
    }
    if (h1Count !== 1) problems.push(`H1 數量 ${h1Count}，預期 1`)
    if (!getMeta(html, 'property', 'og:title')) problems.push('缺少 og:title')
    if (!getMeta(html, 'property', 'og:description')) problems.push('缺少 og:description')
    if (!getMeta(html, 'property', 'og:image')) problems.push('缺少 og:image')
    if (!getMeta(html, 'name', 'twitter:card')) problems.push('缺少 twitter:card')
    if (!getMeta(html, 'name', 'twitter:image')) problems.push('缺少 twitter:image')
    const jsonLdBlocks = getJsonLdBlocks(html)
    if (jsonLdBlocks.length !== 1) {
      problems.push(`JSON-LD script 數量 ${jsonLdBlocks.length}，預期 1`)
    } else {
      try {
        const jsonLd = JSON.parse(jsonLdBlocks[0]) as {
          '@graph'?: Array<Record<string, unknown>>
        }
        if (!Array.isArray(jsonLd['@graph'])) {
          problems.push('JSON-LD 未使用單一 @graph')
        } else {
          const organizations = jsonLd['@graph'].filter(
            (node) => node['@type'] === 'Organization',
          )
          const websites = jsonLd['@graph'].filter(
            (node) => node['@type'] === 'WebSite',
          )
          if (organizations.length !== 1) {
            problems.push(`Organization 節點 ${organizations.length}，預期 1`)
          }
          if (websites.length !== 1) {
            problems.push(`WebSite 節點 ${websites.length}，預期 1`)
          }
        }
      } catch {
        problems.push('JSON-LD 無法解析')
      }
    }
  }

  return {
    route,
    result,
    title,
    description,
    canonical,
    robots,
    h1Count,
    internalLinks: getInternalLinks(html),
    problems,
  }
}

function findDuplicates(
  audits: PageAudit[],
  field: 'title' | 'description' | 'canonical',
): string[] {
  const values = new Map<string, string[]>()
  for (const audit of audits) {
    const value = audit[field]
    if (!value) continue
    values.set(value, [...(values.get(value) ?? []), audit.route.path])
  }
  return Array.from(values.entries())
    .filter(([, paths]) => paths.length > 1)
    .map(([value, paths]) => `${field} 重複於 ${paths.join(', ')}：${value}`)
}

async function main() {
  const issues: string[] = []
  const routes = collectExpectedRoutes()
  const indexableRoutes = routes.filter((route) => route.indexable)
  const noindexRoutes = routes.filter((route) => !route.indexable)

  console.log(`${colors.cyan}Falcon SEO／GEO 全站驗收${colors.reset} — ${baseUrl}`)
  console.log(`索引頁 ${indexableRoutes.length}；noindex 頁 ${noindexRoutes.length}\n`)

  const [sitemap, robots, ...audits] = await Promise.all([
    fetchText(`${baseUrl}/sitemap.xml`),
    fetchText(`${baseUrl}/robots.txt`),
    ...routes.map(auditPage),
  ])

  console.log(`${colors.cyan}[1/5] Sitemap 與 robots.txt${colors.reset}`)
  const sitemapPaths = sitemap?.status === 200
    ? extractSitemapPaths(sitemap.text)
    : new Set<string>()
  const expectedSitemapPaths = new Set(indexableRoutes.map((route) => route.path))

  if (sitemap?.status !== 200) {
    issues.push(`sitemap.xml HTTP ${sitemap?.status ?? 0}`)
  }

  for (const path of expectedSitemapPaths) {
    if (!sitemapPaths.has(path)) issues.push(`sitemap 缺少 ${path}`)
  }
  for (const path of sitemapPaths) {
    if (!expectedSitemapPaths.has(path)) issues.push(`sitemap 多出 ${path}`)
  }

  if (robots?.status !== 200) {
    issues.push(`robots.txt HTTP ${robots?.status ?? 0}`)
  } else {
    if (!/user-agent:\s*OAI-SearchBot/i.test(robots.text)) {
      issues.push('robots.txt 缺少 OAI-SearchBot')
    }
    if (!/user-agent:\s*PerplexityBot/i.test(robots.text)) {
      issues.push('robots.txt 缺少 PerplexityBot')
    }
    if (!/sitemap:\s*https?:\/\/[^\s]+\/sitemap\.xml/i.test(robots.text)) {
      issues.push('robots.txt 缺少 sitemap 宣告')
    }
  }
  console.log(`  ${sitemap?.status === 200 ? tick : cross} sitemap：${sitemapPaths.size} 個 URL`)
  console.log(`  ${robots?.status === 200 ? tick : cross} robots.txt 可讀`)

  console.log(`\n${colors.cyan}[2/5] HTTP、index/noindex 與 metadata${colors.reset}`)
  for (const audit of audits) {
    if (audit.problems.length) {
      for (const problem of audit.problems) {
        issues.push(`${audit.route.path}：${problem}`)
      }
      console.log(`  ${cross} ${audit.route.path} — ${audit.problems.join('；')}`)
    } else {
      console.log(`  ${tick} ${audit.route.path} [${audit.route.indexable ? 'index' : 'noindex'}]`)
    }
  }

  console.log(`\n${colors.cyan}[3/5] 唯一 metadata 與 canonical${colors.reset}`)
  const indexAudits = audits.filter((audit) => audit.route.indexable)
  const duplicates = [
    ...findDuplicates(indexAudits, 'title'),
    ...findDuplicates(indexAudits, 'description'),
    ...findDuplicates(indexAudits, 'canonical'),
  ]
  issues.push(...duplicates)
  console.log(`  ${duplicates.length ? cross : tick} ${duplicates.length ? `${duplicates.length} 個重複問題` : 'title、description、canonical 皆唯一'}`)

  console.log(`\n${colors.cyan}[4/5] 可抓取內鏈與孤兒頁${colors.reset}`)
  const linkedPaths = new Set(indexAudits.flatMap((audit) => Array.from(audit.internalLinks)))
  const orphanPaths = indexableRoutes
    .map((route) => route.path)
    .filter((path) => path !== '/' && !linkedPaths.has(path))
  for (const path of orphanPaths) issues.push(`孤兒頁：${path}`)
  console.log(`  ${orphanPaths.length ? cross : tick} ${orphanPaths.length ? orphanPaths.join(', ') : '所有索引頁都有可抓取內鏈'}`)

  console.log(`\n${colors.cyan}[5/5] AEO 單次 301${colors.reset}`)
  const aeo = await fetchText(`${baseUrl}/services/aeo`, 'manual')
  const aeoLocation = aeo?.headers.get('location') ?? ''
  const aeoTarget = normalizePath(aeoLocation)
  if (aeo?.status !== 301 || aeoTarget !== '/services/geo') {
    issues.push(`AEO 轉址錯誤：HTTP ${aeo?.status ?? 0} → ${aeoLocation || '無 Location'}`)
    console.log(`  ${cross} HTTP ${aeo?.status ?? 0} → ${aeoLocation || '無 Location'}`)
  } else {
    console.log(`  ${tick} /services/aeo 301 → /services/geo`)
  }

  console.log('')
  if (issues.length) {
    console.log(`${cross} 驗收失敗，共 ${issues.length} 個問題：`)
    for (const issue of issues) console.log(`  - ${issue}`)
    process.exit(1)
  }

  console.log(`${tick} 所有 SEO／GEO 自動化驗收通過`)
  console.log(`${colors.gray}外部 Rich Results、GSC、GA4、Bing、GBP 與 CrUX 仍需在部署後驗證。${colors.reset}`)
}

main().catch((error) => {
  console.error('檢查失敗：', error)
  process.exit(1)
})
