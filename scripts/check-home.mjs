import assert from 'node:assert/strict'
import { mkdtemp, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import puppeteer from 'puppeteer-core'
import sharp from 'sharp'

const base = new URL(process.argv[2] || 'http://127.0.0.1:3100')
assert(['localhost', '127.0.0.1', '[::1]'].includes(base.hostname), 'Local server only')
const output = await mkdtemp(join(tmpdir(), 'falcon-3d-check-'))
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true })
const page = await browser.newPage()
await page.setCacheEnabled(false)
page.setDefaultTimeout(30000)
let expectedFailure = false, glbFailure = false, modelRequests = 0
const errors = [], shots = [], metrics = []
page.on('pageerror', error => errors.push(error.message))
page.on('console', message => { if (message.type() === 'error' && !expectedFailure) errors.push(message.text()) })
await page.setRequestInterception(true)
page.on('request', request => {
  const url = new URL(request.url())
  if (url.origin !== base.origin && ['http:', 'https:'].includes(url.protocol)) return void request.abort()
  if (url.pathname === '/api/contact') return void request.respond({ status: 500, contentType: 'application/json', body: '{"code":"SMTP_SEND_FAILED","error":"HOME_TEST_ONLY"}' })
  if (url.pathname.endsWith('.glb')) {
    modelRequests++
    if (glbFailure) return void request.respond({ status: 503, contentType: 'text/plain', body: 'MODEL_TEST_FAILURE: complete diagnostic response' })
  }
  void request.continue()
})
await page.evaluateOnNewDocument(() => {
  window.__homeMetrics = { lcp: 0, cls: 0 }
  new PerformanceObserver(list => { for (const e of list.getEntries()) window.__homeMetrics.lcp = e.startTime }).observe({ type: 'largest-contentful-paint', buffered: true })
  new PerformanceObserver(list => { for (const e of list.getEntries()) if (!e.hadRecentInput) window.__homeMetrics.cls += e.value }).observe({ type: 'layout-shift', buffered: true })
})
const go = path => page.goto(new URL(path, base).href, { waitUntil: 'networkidle0' })
const ready = () => page.waitForSelector('.falcon-home[data-motion="ready"]')
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
async function capture(name) {
  const file = join(output, `${name}.png`)
  await page.screenshot({ path: file }); shots.push(file)
}
async function checkStageAttachment(mode) {
  const state = await page.evaluate(() => {
    const host = document.querySelector('.fh-canvas-host'), target = host.parentElement
    const hero = document.querySelector('[data-home-stage="hero"]'), manifesto = document.querySelector('[data-home-stage="manifesto"]')
    const canvasRect = host.getBoundingClientRect(), stageRect = target.classList.contains('fh-opening')
      ? { top: hero.getBoundingClientRect().top, bottom: manifesto.getBoundingClientRect().bottom, left: hero.getBoundingClientRect().left, right: hero.getBoundingClientRect().right }
      : target.getBoundingClientRect()
    return { mode: host.querySelector('canvas').dataset.scene, position: getComputedStyle(host).position,
      edgeError: Math.max(...['top', 'right', 'bottom', 'left'].map(edge => Math.abs(canvasRect[edge] - stageRect[edge]))),
      heroRendered: hero.dataset.rendered, manifestoRendered: manifesto.dataset.rendered,
      poster: getComputedStyle(document.querySelector('.fh-hero-poster')).visibility, journeyPoster: getComputedStyle(document.querySelector('.fh-chapter-poster')).display }
  })
  assert.equal(state.mode, mode)
  assert.equal(state.position, 'absolute', 'Canvas must scroll with its stage, without a frame-delayed fixed overlay')
  assert(state.edgeError < 1, 'Canvas and stage edges must match')
  if (mode === 'opening') {
    assert.equal(state.heroRendered, 'true'); assert.equal(state.manifestoRendered, 'true')
    assert.equal(state.poster, 'hidden', 'Visible hero must keep its live pose while the ribbon enters')
  }
  else assert.equal(state.journeyPoster, 'none', 'Active journey canvas must replace its posters')
}
async function seek(progress) {
  await page.evaluate(p => {
    const element = document.querySelector('.fh-journey')
    const start = element.getBoundingClientRect().top + scrollY
    scrollTo({ top: start + (element.offsetHeight - innerHeight) * p, behavior: 'instant' })
  }, progress)
  await page.waitForFunction(p => Math.abs(Number(document.querySelector('canvas[data-progress]')?.dataset.progress) - p) < 0.004, {}, progress)
  await wait(180)
}
async function checkRibbon() {
  for (const progress of [.2, .65, .2]) {
    await page.evaluate(p => {
      const rect = document.querySelector('.fh-ribbon').getBoundingClientRect()
      scrollTo({ top: scrollY + rect.top - innerHeight * .9 + (rect.height + innerHeight * .5) * p, behavior: 'instant' })
    }, progress)
    await wait(900)
    const state = await page.evaluate(() => {
      const path = [...document.querySelectorAll('.fh-ribbon path')].find(p => getComputedStyle(p).display !== 'none')
      const style = getComputedStyle(path), length = path.getTotalLength(), matrix = path.getScreenCTM()
      let previous = path.getPointAtLength(0).matrixTransform(matrix), reference = 0
      for (let i = 1; i <= 4096; i++) {
        const point = path.getPointAtLength(length * i / 4096).matrixTransform(matrix)
        reference += Math.hypot(point.x - previous.x, point.y - previous.y); previous = point
      }
      return { progress: 1 - parseFloat(style.strokeDashoffset) / parseFloat(style.strokeDasharray), error: Math.abs(reference - parseFloat(style.strokeDasharray)), visibility: style.visibility }
    })
    assert(Math.abs(state.progress - progress) < .005, 'Ribbon must follow scroll and return to the same point on reverse')
    assert(state.error < 1, 'Ribbon dash length must use screen arc length, including mobile stretching')
    assert.equal(state.visibility, 'visible', 'The live canvas must not hide the flowing ribbon')
  }
}
try {
  for (const width of [1440, 768, 390]) {
    console.log(`Checking ${width}px complete journey`)
    await page.setViewport({ width, height: 900 })
    assert.equal((await go('/')).status(), 200)
    await ready()
    assert.equal(await page.$$eval('main h1', nodes => nodes.length), 1)
    assert.equal(await page.$$eval('[data-project]', nodes => nodes.length), 8)
    assert.equal(await page.$$eval('.fh-canvas-host canvas', nodes => nodes.length), 1)
    assert.equal(await page.$eval('.fh-journey', e => Math.round(e.offsetHeight / innerHeight)), width < 768 ? 8 : 12)
    await capture(`${width}-hero`)
    await checkStageAttachment('opening')
    for (const direction of [1, -1, 1, -1]) {
      await page.mouse.wheel({ deltaY: direction * 180 })
      await checkStageAttachment('opening')
    }
    for (const offset of [8, -8, 8, -8]) {
      await page.evaluate(offset => {
        const hero = document.querySelector('[data-home-stage="hero"]').getBoundingClientRect()
        scrollTo({ top: scrollY + hero.bottom - innerHeight * .25 - offset, behavior: 'instant' })
      }, offset)
      await wait(180)
      await checkStageAttachment('opening')
    }
    metrics.push({ width, ...await page.evaluate(() => window.__homeMetrics) })
    await checkRibbon()
    for (const id of ['manifesto', 'cases']) {
      await page.$eval(`#${id}`, e => e.scrollIntoView({ behavior: 'instant' }))
      await wait(900); await capture(`${width}-${id}`)
    }
    for (const p of [0, .1, .199, .2, .315, .429, .43, .535, .639, .64, .73, .819, .82, .91, 1]) {
      await seek(p)
      await checkStageAttachment('journey')
      assert.equal(await page.$eval('.falcon-home', e => e.dataset.motion), 'ready')
      assert.equal(await page.$$eval('.fh-chapter', nodes => nodes.filter(e => getComputedStyle(e).visibility === 'visible').length), 1)
      await capture(`${width}-journey-${p}`)
    }
    for (const p of [0.38, 0.94, 0.08, 0.62]) await seek(p)
    const bottom = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight)
    for (let y = 0, frame = 0; y < bottom + 720; y += 720, frame++) {
      await page.evaluate(top => scrollTo({ top, behavior: 'instant' }), Math.min(y, bottom))
      await wait(700); await capture(`${width}-full-${String(frame).padStart(2, '0')}`)
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}: overflow while scrolling`)
    }
    await seek(0.62)
    await page.click('.fh-skip')
    await page.waitForFunction(() => document.querySelector('#contact').getBoundingClientRect().top < innerHeight)
    await wait(800)
    await capture(`${width}-contact`)
    await page.type('#name', 'PRESERVE_HOME_INPUT')
    await page.select('#serviceInterest', 'seo_geo')
    await page.click('[data-cta-placement="home_ai_voice"]')
    await page.waitForFunction(() => document.querySelector('#serviceInterest').value === 'ai_voice')
    await page.waitForFunction(() => { const rect = document.querySelector('#contact').getBoundingClientRect(); return rect.top >= 0 && rect.top < innerHeight / 2 })
    assert.equal(await page.$eval('#name', e => e.value), 'PRESERVE_HOME_INPUT')
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}: overflow`)
    await page.focus('#home-menu-toggle'); await page.keyboard.press('Enter')
    await page.waitForSelector('#home-menu-panel'); await page.keyboard.press('Escape')
    await page.waitForSelector('#home-menu-panel', { hidden: true })
    await page.waitForFunction(() => document.activeElement?.id === 'home-menu-toggle')
  }
  // The same document must rebuild its scene when crossing the phone breakpoint.
  await page.setViewport({ width: 1440, height: 900 }); await go('/'); await ready()
  await page.setViewport({ width: 390, height: 900 }); await ready()
  await page.waitForFunction(() => document.querySelector('canvas').dataset.quality === 'mobile')
  assert.equal(await page.$$eval('.fh-canvas-host canvas', nodes => nodes.length), 1)
  await page.click('[data-project] a')
  await page.waitForSelector('.fh-canvas-host', { hidden: true })
  await page.goBack({ waitUntil: 'networkidle0' }); await ready()

  for (const width of [1440, 390]) {
    await page.setViewport({ width, height: 900 }); await go('/'); await ready()
    await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' })); await wait(800)
    const fps = await page.evaluate(() => new Promise(resolve => {
      const gl = document.querySelector('canvas').getContext('webgl2'), clear = gl.clear, stamps = []
      gl.clear = function (...args) { stamps.push(performance.now()); return clear.apply(this, args) }
      setTimeout(() => { gl.clear = clear; resolve(stamps.length > 1 ? (stamps.length - 1) * 1000 / (stamps.at(-1) - stamps[0]) : 0) }, 3000)
    }))
    metrics.push({ width, renderedFps: fps, note: 'Actual WebGL frames in headless Chrome on this host; not a physical phone measurement' })
    assert(fps > 0, 'Visible scene must render')
  }
  await page.type('#name', 'CONTEXT_LOSS_INPUT')
  expectedFailure = true
  await page.evaluate(() => document.querySelector('canvas').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext())
  await page.waitForSelector('.fh-render-error')
  assert.equal(await page.$eval('.fh-hero-poster', e => getComputedStyle(e).visibility), 'visible')
  assert.equal(await page.$$eval('.fh-canvas-host', nodes => nodes.length), 0)
  assert((await page.$eval('.fh-render-error', e => e.textContent)).includes('WEBGL_CONTEXT_LOST'))
  assert.equal(await page.$eval('#name', e => e.value), 'CONTEXT_LOSS_INPUT')
  assert(await page.$eval('.fh-journey', e => e.offsetHeight < innerHeight * 6))
  await capture('context-loss')

  glbFailure = true; await go('/')
  await page.waitForSelector('.fh-render-error')
  const message = await page.$eval('.fh-render-error', e => e.textContent)
  assert(message.includes('HTTP 503') && message.includes('MODEL_TEST_FAILURE') && message.includes('.glb'))
  assert.equal(await page.$$eval('[data-project]', nodes => nodes.length), 8)
  glbFailure = false; expectedFailure = false

  expectedFailure = true
  const unsupported = await page.evaluateOnNewDocument(() => {
    const original = HTMLCanvasElement.prototype.getContext
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      if (type === 'webgl' || type === 'webgl2' || type === 'experimental-webgl') return null
      return original.call(this, type, ...args)
    }
  })
  await go('/'); await page.waitForSelector('.fh-render-error')
  assert((await page.$eval('.fh-render-error', e => e.textContent)).includes('WebGL'))
  assert.equal(await page.$$eval('[data-project] a', nodes => nodes.length), 8)
  await page.removeScriptToEvaluateOnNewDocument(unsupported.identifier)
  expectedFailure = false
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
  const before = modelRequests; await go('/')
  assert.equal(modelRequests, before, 'Reduced motion does not load models')
  assert(await page.$eval('.fh-journey', e => e.offsetHeight < innerHeight * 6))
  await capture('reduced-motion')
  await page.emulateMediaFeatures([])
  await page.setJavaScriptEnabled(false); await go('/')
  assert.equal(await page.$$eval('[data-project] a[href]', nodes => nodes.length), 8)
  assert.equal(await page.$$eval('main h1', nodes => nodes.length), 1)
  assert(await page.$eval('.fh-journey', e => e.offsetHeight < innerHeight * 6))
  await capture('no-javascript')
  await page.setJavaScriptEnabled(true)

  for (const locale of ['', 'en', 'ja', 'ko', 'zh-hans', 'es', 'fr', 'de', 'pt']) {
    console.log(`Checking locale ${locale || 'zh-tw'}`)
    await go(`/${locale}`); await ready()
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${locale}: overflow`)
    assert.equal(await page.$$eval('main h1', nodes => nodes.length), 1)
    assert.equal(await page.$$eval('[data-project]', nodes => nodes.length), 8)
    await capture(`locale-${locale || 'zh-tw'}`)
  }
  assert.deepEqual(errors, [], 'No uncaught errors or hydration warnings')
  for (let i = 0; i < shots.length; i += 12) {
    const group = shots.slice(i, i + 12), parts = []
    for (let j = 0; j < group.length; j++) {
      const label = group[j].split('/').at(-1).replace('.png', '')
      const overlay = Buffer.from(`<svg width="360" height="28"><rect width="100%" height="100%" fill="white"/><text x="8" y="19" font-size="14">${label}</text></svg>`)
      const input = await sharp(group[j]).resize(360, 300, { fit: 'contain', background: '#fff' }).extend({ top: 28, bottom: 0, left: 0, right: 0, background: '#fff' }).composite([{ input: overlay, top: 0, left: 0 }]).png().toBuffer()
      parts.push({ input, left: j % 3 * 360, top: Math.floor(j / 3) * 328 })
    }
    const file = join(output, `sheet-${i / 12}.jpg`)
    await sharp({ create: { width: 1080, height: Math.ceil(group.length / 3) * 328, channels: 3, background: '#fff' } }).composite(parts).jpeg({ quality: 88 }).toFile(file)
    console.log(file)
  }
  await writeFile(join(output, 'metrics.json'), JSON.stringify(metrics, null, 2))
  console.log(`PASS: 3 widths, all chapters, reverse/seek, skip, preserved form input, keyboard menu, responsive rebuild, route cleanup, context loss, HTTP 503, reduced motion, no JavaScript, 9 locales. ${JSON.stringify(metrics)}`)
  console.log(`ARTIFACTS: ${output}`)
} catch (error) {
  await page.screenshot({ path: join(output, 'failure.png') })
  console.error(await page.evaluate(() => ({ url: location.href, motion: document.querySelector('.falcon-home')?.getAttribute('data-motion'), error: document.querySelector('.fh-render-error')?.textContent, text: document.body.innerText.slice(0,300) })))
  console.error({ errors, output })
  throw error
} finally { await browser.close() }
