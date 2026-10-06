import assert from 'node:assert/strict'
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import puppeteer from 'puppeteer-core'
import sharp from 'sharp'
import { createHash } from 'node:crypto'
import { visualAssets } from '../src/lib/content/visual-assets'
import { locales, localizedPath } from '../src/lib/i18n/config'

async function main() {
const base = new URL(process.argv[2] || 'http://127.0.0.1:3000')
assert(['localhost', '127.0.0.1', '[::1]'].includes(base.hostname), 'Visual checks require a local server')
const baselineMode = process.argv.includes('--baseline')
if (!baselineMode) {
  assert.equal(Object.keys(visualAssets).length, 47, '47 registered illustrations')
  assert.equal(readdirSync('public/visuals').filter(file => file.endsWith('.webp')).length, 47, 'Only final 47 illustrations are served')
  const hashes = new Set<string>()
  for (const asset of Object.values(visualAssets)) {
    const data = readFileSync(`public${asset.src}`)
    const metadata = await sharp(data).metadata()
    assert.equal(metadata.format, 'webp', asset.src)
    assert(metadata.hasAlpha, `${asset.src}: transparent cutout`)
    const { data: pixels, info } = await sharp(data).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
    let transparent = 0
    for (let i = info.channels - 1; i < pixels.length; i += info.channels) if (pixels[i] === 0) transparent++
    assert(transparent > info.width * info.height * 0.15, `${asset.src}: meaningful transparent area`)
    assert.equal(metadata.width, asset.width, asset.src)
    assert.equal(metadata.height, asset.height, asset.src)
    assert(data.length <= (asset.src === '/visuals/home-hero-cutout.webp' ? 400 : 300) * 1024, `${asset.src}: size budget`)
    assert(asset.source && asset.prompt && asset.title, `${asset.src}: provenance and alt subject`)
    hashes.add(createHash('sha256').update(data).digest('hex'))
  }
  assert.equal(hashes.size, 47, '47 distinct image files')
}
const folder = 'tmp/visual-refresh-20261006'
mkdirSync(folder, { recursive: true })
const baselineFile = `${folder}/baseline.json`
const routes = [...Object.keys(visualAssets).filter(path => !path.includes('#')), '/case-studies', '/case-studies/yizhenxiang-commerce-performance', '/case-studies/gogocha-ai-dispatch', '/case-studies/clinic-line-booking']
const executablePath = [process.env.CHROME_PATH, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium'].find(path => path && existsSync(path))
assert(executablePath, 'Chrome executable not found')
const browser = await puppeteer.launch({ executablePath, headless: true })
const page = await browser.newPage()
const errors: string[] = []
let imageFailure = false
page.on('pageerror', error => errors.push(String(error)))
await page.setRequestInterception(true)
page.on('request', request => {
  const url = new URL(request.url())
  if (url.origin !== base.origin && ['http:', 'https:'].includes(url.protocol)) return void request.abort()
  if (imageFailure && request.url().includes('home-hero-cutout.webp')) return void request.respond({ status: 503, contentType: 'text/plain', body: 'VISUAL_TEST_FAILURE: image temporarily unavailable' })
  if (url.pathname === '/api/contact') return void request.abort()
  void request.continue()
})
await page.evaluateOnNewDocument(() => {
  (window as any).__visualMetrics = { lcp: 0, cls: 0 }
  new PerformanceObserver(list => { for (const entry of list.getEntries()) (window as any).__visualMetrics.lcp = entry.startTime }).observe({ type: 'largest-contentful-paint', buffered: true })
  new PerformanceObserver(list => { for (const entry of list.getEntries() as any) if (!entry.hadRecentInput) (window as any).__visualMetrics.cls += entry.value }).observe({ type: 'layout-shift', buffered: true })
})
const go = async (path: string) => {
  const response = await page.goto(new URL(path, base).href, { waitUntil: 'networkidle0' })
  assert.equal(response?.status(), 200, `${path}: HTTP`)
}
const snapshot = () => page.evaluate(() => {
  const main = document.querySelector('main')!
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT)
  const texts: string[] = []
  while (walker.nextNode()) {
    const node = walker.currentNode
    if (node.parentElement?.closest('script,style,[data-visual-asset],figcaption')) continue
    const text = node.textContent?.replace(/\s+/g, ' ').trim()
    if (text) texts.push(text)
  }
  return { texts, links: [...main.querySelectorAll('a')].map(a => a.getAttribute('href')).filter(Boolean), h1: main.querySelectorAll('h1').length }
})
function assertPreserved(before: any[], after: any[], label: string) {
  const remaining = [...after]
  for (const value of before) {
    const index = remaining.indexOf(value)
    assert(index >= 0, `${label}: original content missing: ${value}`)
    remaining.splice(index, 1)
  }
}
try {
  const before = !baselineMode && existsSync(baselineFile) ? JSON.parse(readFileSync(baselineFile, 'utf8')) : null
  assert(baselineMode || before, 'Capture the pre-change baseline first')
  const captured: Record<string, any> = {}
  await page.setViewport({ width: 1440, height: 1000 })
  for (const path of routes) {
    await go(path)
    const current = await snapshot()
    assert.equal(current.h1, 1, `${path}: one H1`)
    if (before) {
      assertPreserved(before.pages[path].texts, current.texts, path)
      assertPreserved(before.pages[path].links, current.links, `${path} links`)
      if (visualAssets[path]) assert(await page.$(`[data-visual-src="${visualAssets[path].src}"]`), `${path}: dedicated illustration`)
    }
    captured[path] = current
  }
  const metrics: any[] = []
  for (let run = 0; run < 3; run++) {
    await page.setCacheEnabled(false)
    await go('/')
    metrics.push(await page.evaluate(() => (window as any).__visualMetrics))
  }
  if (baselineMode) {
    writeFileSync(baselineFile, JSON.stringify({ pages: captured, metrics }, null, 2))
    console.log(`BASELINE: ${routes.length} routes; ${JSON.stringify(metrics)}`)
  } else {
    await go('/')
    const palette = await page.$eval('.falcon-site', node => {
      const style = getComputedStyle(node)
      return Object.fromEntries(['bg', 'card', 'soft', 'tint', 'text', 'muted', 'accent'].map(name => [name, style.getPropertyValue(`--site-${name}`).trim()]))
    })
    const luminance = (hex: string) => {
      const digits = hex.replace('#', '')
      const channels = (digits.length === 3 ? [...digits].map(digit => digit + digit).join('') : digits).match(/../g)!.map(channel => parseInt(channel, 16) / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
      return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
    }
    const contrast = (a: string, b: string) => (Math.max(luminance(a), luminance(b)) + 0.05) / (Math.min(luminance(a), luminance(b)) + 0.05)
    for (const text of ['text', 'muted', 'accent']) for (const background of ['bg', 'card', 'soft', 'tint']) assert(contrast(palette[text], palette[background]) >= 4.5, `${text}/${background}: text contrast`)
    assert(contrast('#ffffff', palette.accent) >= 4.5, 'Primary button contrast')
    for (const width of [1440, 768, 390]) {
      await page.setViewport({ width, height: 1000 })
      for (const path of ['/', '/services/web-development', '/services/ai-voice-agent', '/pricing', '/about', '/case-studies', '/blog', '/blog/ai-voice-agent-poc-acceptance-checklist', '/local/taoyuan-seo', '/compare/seo-vs-geo-vs-aeo']) {
        await go(path)
        await page.evaluate(async () => {
          for (let top = 0; top < document.documentElement.scrollHeight; top += 800) { scrollTo(0, top); await new Promise(r => setTimeout(r, 30)) }
          scrollTo(0, 0)
        })
        await page.waitForFunction(() => [...document.querySelectorAll<HTMLImageElement>('main img')].every(img => img.complete && img.naturalWidth > 0))
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px ${path}: overflow`)
        assert.deepEqual(await page.$$eval('main [data-image-error]', nodes => nodes.map(node => node.textContent)), [], `${width}px ${path}: image errors`)
        await page.screenshot({ path: `${folder}/${width}-${path.replace(/\W/g, '_') || 'home'}.png`, fullPage: true })
      }
    }
    for (const locale of locales) {
      for (const path of ['/', '/services/seo', '/blog/ai-call-recording-privacy-security']) {
        await go(localizedPath(path, locale))
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${locale} ${path}: overflow`)
        assert(await page.$('[data-visual-asset] img[alt]'))
      }
    }
    await go('/')
    await page.type('#name', '保留輸入測試')
    imageFailure = true
    await page.evaluate(() => {
      const img = document.querySelector<HTMLImageElement>('[data-visual-src="/visuals/home-hero-cutout.webp"] img')!
      img.srcset = ''
      img.src = '/visuals/home-hero-cutout.webp?failure-test=1'
    })
    await page.waitForFunction(() => document.querySelector('[data-image-error]')?.textContent?.includes('HTTP 503'))
    const failure = await page.$eval('[data-image-error]', node => node.textContent || '')
    assert(failure.includes('/visuals/home-hero-cutout.webp') && failure.includes('VISUAL_TEST_FAILURE'), 'Image diagnostics show source, status, and complete response')
    assert.equal(await page.$eval('#name', node => (node as HTMLInputElement).value), '保留輸入測試', 'Image failure preserves form input')
    assertPreserved(before.pages['/'].texts, (await snapshot()).texts, 'Image failure preserves homepage text')
    imageFailure = false
    assert.deepEqual(errors, [], 'Unhandled browser errors')
    const median = (values: number[]) => values.sort((a,b) => a-b)[1]
    const report = { before: before.metrics, after: metrics, lcpBefore: median(before.metrics.map((m: any) => m.lcp)), lcpAfter: median(metrics.map(m => m.lcp)), clsAfter: Math.max(...metrics.map(m => m.cls)) }
    writeFileSync(`${folder}/performance.json`, JSON.stringify(report, null, 2))
    assert(report.clsAfter <= 0.1, `CLS ${report.clsAfter}`)
    console.log(`PASS: preserved text/links on ${routes.length} routes, 47 illustrations, 3 widths, 9 locales. ${JSON.stringify(report)}`)
  }
} finally { await browser.close() }

}
main().catch(error => { console.error(error); process.exitCode = 1 })
