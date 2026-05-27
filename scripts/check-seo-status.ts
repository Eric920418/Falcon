/**
 * SEO 狀態驗證腳本：比對「本地 qualityTier 設定」與「production 實際 SEO 狀態」。
 *
 * 用法：
 *   pnpm check:seo                    # 預設檢查 https://www.falconinformation.com
 *   pnpm check:seo http://localhost:3000  # 自訂 base URL
 *
 * 不需 GSC API 憑證，純 HTTP probing。每次 deploy 後跑一次驗證部署狀態正確。
 */
import { siteConfig } from '../src/lib/seo/site-config'
import { getAllServices } from '../src/lib/content/services'
import { getAllLocalPages } from '../src/lib/content/local'
import { getAllBlogPosts } from '../src/lib/content/blog'
import { pricingPages, comparePages } from '../src/lib/content/pricing'

const baseUrl = process.argv[2] ?? siteConfig.url

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
}

const tick = `${colors.green}✓${colors.reset}`
const cross = `${colors.red}✗${colors.reset}`
const warn = `${colors.yellow}⚠${colors.reset}`

interface RouteSpec {
  path: string
  qualityTier: 'production' | 'draft' | 'placeholder'
  source: string
}

function collectExpectedRoutes(): RouteSpec[] {
  const routes: RouteSpec[] = [
    { path: '/', qualityTier: 'production', source: 'static' },
    { path: '/pricing', qualityTier: 'production', source: 'static' },
    { path: '/blog', qualityTier: 'production', source: 'static' },
  ]

  for (const s of getAllServices()) {
    routes.push({ path: `/services/${s.slug}`, qualityTier: s.qualityTier, source: 'services' })
  }
  for (const p of getAllLocalPages()) {
    routes.push({ path: `/local/${p.slug}`, qualityTier: p.qualityTier, source: 'local' })
  }
  for (const p of getAllBlogPosts()) {
    routes.push({ path: `/blog/${p.slug}`, qualityTier: p.qualityTier, source: 'blog' })
  }
  for (const p of Object.values(pricingPages)) {
    routes.push({ path: `/pricing/${p.slug}`, qualityTier: p.qualityTier, source: 'pricing' })
  }
  for (const p of Object.values(comparePages)) {
    routes.push({ path: `/compare/${p.slug}`, qualityTier: p.qualityTier, source: 'compare' })
  }

  return routes
}

async function fetchText(url: string): Promise<{ status: number; text: string } | null> {
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: { 'User-Agent': 'SEO-Status-Checker/1.0' },
    })
    const text = await res.text()
    return { status: res.status, text }
  } catch {
    return null
  }
}

function extractSitemapLocs(xml: string): string[] {
  const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g)
  return Array.from(matches, (m) => m[1])
}

function extractRobotsMeta(html: string): string | null {
  const m = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i)
  return m ? m[1] : null
}

async function checkSitemap(): Promise<{ urls: string[]; status: number }> {
  const sitemapUrl = `${baseUrl}/sitemap.xml`
  const res = await fetchText(sitemapUrl)
  if (!res) return { urls: [], status: 0 }
  return { urls: extractSitemapLocs(res.text), status: res.status }
}

async function checkRobotsTxt(): Promise<{ ok: boolean; sitemapDeclared: boolean }> {
  const res = await fetchText(`${baseUrl}/robots.txt`)
  if (!res || res.status !== 200) return { ok: false, sitemapDeclared: false }
  const declaresSitemap = /sitemap:\s*https?:\/\/[^\s]+sitemap\.xml/i.test(res.text)
  return { ok: true, sitemapDeclared: declaresSitemap }
}

async function checkPage(path: string): Promise<{
  status: number
  robotsMeta: string | null
  hasJsonLd: boolean
  canonical: string | null
} | null> {
  const res = await fetchText(`${baseUrl}${path}`)
  if (!res) return null
  const canonical = res.text.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
  return {
    status: res.status,
    robotsMeta: extractRobotsMeta(res.text),
    hasJsonLd: /type=["']application\/ld\+json["']/i.test(res.text),
    canonical: canonical ? canonical[1] : null,
  }
}

async function main() {
  console.log(`${colors.cyan}SEO 狀態驗證${colors.reset} — ${baseUrl}\n`)

  console.log(`${colors.cyan}[1/4] Sitemap 與 robots.txt${colors.reset}`)
  const sitemap = await checkSitemap()
  const robots = await checkRobotsTxt()

  if (sitemap.status === 200) {
    console.log(`  ${tick} sitemap.xml 200 OK，包含 ${sitemap.urls.length} 個 URL`)
  } else {
    console.log(`  ${cross} sitemap.xml HTTP ${sitemap.status}`)
  }
  if (robots.ok) {
    console.log(`  ${tick} robots.txt 200 OK`)
    if (robots.sitemapDeclared) {
      console.log(`  ${tick} robots.txt 內已宣告 sitemap`)
    } else {
      console.log(`  ${warn} robots.txt 內缺少 sitemap 宣告`)
    }
  } else {
    console.log(`  ${cross} robots.txt 無法存取`)
  }

  console.log(`\n${colors.cyan}[2/4] 本地 qualityTier vs production 狀態${colors.reset}`)
  const expected = collectExpectedRoutes()
  const productionRoutes = expected.filter((r) => r.qualityTier === 'production')
  const draftRoutes = expected.filter((r) => r.qualityTier === 'draft')
  const placeholderRoutes = expected.filter((r) => r.qualityTier === 'placeholder')

  console.log(`  本地統計：production ${productionRoutes.length}、draft ${draftRoutes.length}、placeholder ${placeholderRoutes.length}`)

  const sitemapPaths = new Set(
    sitemap.urls.map((u) => new URL(u).pathname).map((p) => (p === '/' ? '/' : p.replace(/\/$/, '')))
  )

  // 應在 sitemap 但缺失的
  const missing: RouteSpec[] = []
  for (const r of productionRoutes) {
    const normalized = r.path === '/' ? '/' : r.path.replace(/\/$/, '')
    if (!sitemapPaths.has(normalized)) missing.push(r)
  }

  // 不該在 sitemap 但出現的
  const expectedPaths = new Set(
    productionRoutes.map((r) => (r.path === '/' ? '/' : r.path.replace(/\/$/, '')))
  )
  const unexpected: string[] = []
  for (const p of sitemapPaths) {
    if (!expectedPaths.has(p)) unexpected.push(p)
  }

  if (missing.length === 0) {
    console.log(`  ${tick} 所有 production 頁面都在 sitemap 中`)
  } else {
    console.log(`  ${cross} ${missing.length} 個 production 頁面未出現在 sitemap：`)
    for (const r of missing) console.log(`      - ${r.path} (source: ${r.source})`)
  }
  if (unexpected.length === 0) {
    console.log(`  ${tick} sitemap 沒有多餘 URL`)
  } else {
    console.log(`  ${warn} sitemap 中有 ${unexpected.length} 個未在本地 production 名單的 URL：`)
    for (const p of unexpected) console.log(`      - ${p}`)
  }

  console.log(`\n${colors.cyan}[3/4] 動態路由 noindex 抽查${colors.reset}`)
  // 抽 3 個 draft + 3 個 production，比對 robots meta
  const sample: RouteSpec[] = [
    ...draftRoutes.slice(0, 3),
    ...productionRoutes.filter((r) => r.path !== '/').slice(0, 3),
  ]

  let mismatches = 0
  for (const route of sample) {
    const result = await checkPage(route.path)
    if (!result) {
      console.log(`  ${cross} ${route.path}：無法連線`)
      mismatches++
      continue
    }
    const hasNoindex = result.robotsMeta?.includes('noindex') ?? false
    const shouldNoindex = route.qualityTier !== 'production'
    const ok = hasNoindex === shouldNoindex
    const tag = ok ? tick : cross
    const expected = shouldNoindex ? 'noindex' : 'index'
    const actual = hasNoindex ? 'noindex' : (result.robotsMeta ?? 'index (default)')
    console.log(`  ${tag} ${route.path} [${route.qualityTier}]：預期 ${expected}, 實際 ${actual}`)
    if (!ok) mismatches++
  }

  console.log(`\n${colors.cyan}[4/4] GSC 待辦建議${colors.reset}`)
  if (productionRoutes.length <= 5) {
    console.log(`  目前 production 頁面僅 ${productionRoutes.length} 個。提交 GSC 後：`)
    console.log(`  ${colors.gray}1.${colors.reset} 進 Search Console > Sitemaps，重新提交 sitemap.xml`)
    console.log(`  ${colors.gray}2.${colors.reset} 對下列頁面個別「要求建立索引」（GSC 上方 URL Inspection）：`)
    for (const r of productionRoutes) {
      console.log(`     - ${baseUrl}${r.path}`)
    }
    console.log(`  ${colors.gray}3.${colors.reset} 等 1-2 週讓 Google 重抓 sitemap、處理 noindex 標記`)
  } else {
    console.log(`  目前 production 頁面 ${productionRoutes.length} 個。對核心頁面（首頁、/pricing、/blog）使用 URL Inspection 加速 indexation`)
  }

  console.log('')
  const issues = (sitemap.status !== 200 ? 1 : 0) + (!robots.ok ? 1 : 0) + missing.length + mismatches
  if (issues === 0) {
    console.log(`${tick} 所有檢查通過`)
    process.exit(0)
  } else {
    console.log(`${cross} 發現 ${issues} 個問題，請依上述指示修正`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error('檢查失敗：', err)
  process.exit(1)
})
