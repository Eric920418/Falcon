import assert from 'node:assert/strict'
import { existsSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import puppeteer from 'puppeteer-core'

const base = new URL(process.argv[2] || 'http://127.0.0.1:3000')
assert(['localhost', '127.0.0.1', '[::1]'].includes(base.hostname), '僅允許本機測試，禁止對正式站送表單')
const executablePath = [process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
].find((path) => path && existsSync(path))
assert(executablePath, '找不到 Chrome；請設定 CHROME_PATH 指向已安裝瀏覽器，不需要安裝套件')
const screenshots = mkdtempSync(join(tmpdir(), 'falcon-conversion-'))
const browser = await puppeteer.launch({ executablePath, headless: true })
const page = await browser.newPage()
page.setDefaultTimeout(15000)
let mock = { status: 500, body: '{"code":"SMTP_SEND_FAILED","error":"測試攔截：不寄信"}' }
let requestCount = 0
const pageErrors = []
page.on('pageerror', (error) => pageErrors.push(error.message))
await page.setRequestInterception(true)
page.on('request', (request) => {
  const url = new URL(request.url())
  if (url.pathname === '/api/contact') {
    requestCount++
    if (mock.abort) return void request.abort('failed')
    return void request.respond({ contentType: 'application/json', ...mock })
  }
  // 測試只允許本機資產；表單與第三方分析流量都不會送到正式服務。
  if (url.origin !== base.origin && ['http:', 'https:'].includes(url.protocol)) return void request.abort()
  void request.continue()
})

const go = (path) => page.goto(new URL(path, base).href, { waitUntil: 'networkidle0' })
const events = () => page.evaluate(() => (window.dataLayer || []).filter((item) =>
  ['generate_lead', 'contact_click', 'service_cta_click', 'form_error'].includes(item.event)))
const resetEvents = () => page.evaluate(() => { window.dataLayer = [] })
const cta = (placement) => `[data-cta-placement="${placement}"]`
const click = (selector) => page.locator(selector).click()
const selected = () => page.$eval('#serviceInterest', (element) => element.value)
const waitService = (service) => page.waitForFunction((value) => document.querySelector('#serviceInterest')?.value === value, {}, service)
const privateValues = ['TEST_PRIVATE_NAME', 'test-private@example.invalid', 'TEST_PRIVATE_COMPANY', 'TEST_PRIVATE_MESSAGE', 'TEST_PRIVATE_CODE']
const fill = async () => {
  for (const [index, name] of ['name', 'email', 'company', 'message'].entries()) {
    await page.type(`#${name}`, privateValues[index])
  }
}
const assertPreserved = async () => {
  for (const [index, name] of ['name', 'email', 'company', 'message'].entries()) {
    assert.equal(await page.$eval(`#${name}`, (element) => element.value), privateValues[index], `${name} 必須保留`)
  }
}
const assertSafeEvents = async () => {
  const recorded = await events()
  const keys = {
    service_cta_click: ['event', 'service', 'action', 'placement'],
    contact_click: ['event', 'channel', 'placement', 'service'],
    generate_lead: ['event', 'method', 'service'],
    form_error: ['event', 'form_name', 'error_code', 'service'],
  }
  for (const item of recorded) {
    assert(Object.keys(item).every((key) => keys[item.event].includes(key)), '事件含非預期欄位')
    for (const value of privateValues) assert(!JSON.stringify(item).includes(value), '分析事件洩漏測試個資')
    if ('service' in item) assert(['ai_voice', 'ai_tools', 'web_development', 'seo_geo', 'unspecified'].includes(item.service))
  }
}

try {
  await page.setViewport({ width: 1440, height: 1000 })
  await go('/?service=invalid#contact')
  assert.equal(await selected(), '', '未知網址服務不得預選')
  await fill()
  await page.evaluate(() => { window.__conversionMarker = 'same-document' })
  for (let attempt = 0; attempt < 2; attempt++) {
    await page.select('#serviceInterest', 'seo_geo')
    await resetEvents()
    await click(cta('home_ai_voice'))
    await waitService('ai_voice')
    await assertPreserved()
    assert.equal(await page.evaluate(() => window.__conversionMarker), 'same-document', '同頁 CTA 不可重新載入')
    assert.deepEqual(await events(), [{ event: 'service_cta_click', service: 'ai_voice', action: 'request_demo', placement: 'home_ai_voice' }])
  }
  await page.select('#serviceInterest', 'ai_tools')
  await page.evaluate(() => window.dispatchEvent(new CustomEvent('falcon:service-interest', { detail: 'INVALID_PRIVATE_SERVICE' })))
  assert.equal(await selected(), 'ai_tools', '非白名單事件不得覆寫手動選擇')
  await click(cta('home_ai_voice'))
  await waitService('ai_voice')
  assert(await page.$('#ai-voice-form-help'))
  await page.screenshot({ path: join(screenshots, 'desktop-contact.png') })

  // 用取消導覽保留測試頁；不啟動電話、郵件或 LINE。
  await page.evaluate(() => document.addEventListener('click', (event) => {
    if (event.target.closest('a[href^="tel:"], a[href^="mailto:"], a[href^="https://lin.ee/"]')) event.preventDefault()
  }))
  await resetEvents()
  for (const href of ['tel:', 'mailto:', 'https://lin.ee/']) {
    await click(`#contact a[href^="${href}"]`)
  }
  assert.deepEqual((await events()).map(({ channel, service }) => ({ channel, service })),
    ['phone', 'email', 'line'].map((channel) => ({ channel, service: 'ai_voice' })))
  await click('footer a[href^="tel:"]')
  assert(!('service' in (await events()).at(-1)), 'Footer 不可假設 AI 電話來源')
  await assertSafeEvents()

  const failures = [
    { status: 400, body: '{"code":"REQUIRED_FIELDS_MISSING","error":"必填測試"}', code: 'REQUIRED_FIELDS_MISSING', detail: '必填測試' },
    { status: 400, body: '{"code":"INVALID_SERVICE_INTEREST","error":"服務測試"}', code: 'INVALID_SERVICE_INTEREST' },
    { status: 500, body: '{"code":"SMTP_NOT_CONFIGURED","error":"設定測試"}', code: 'SMTP_NOT_CONFIGURED' },
    { status: 500, body: '{"code":"SMTP_SEND_FAILED","error":"TEST_PRIVATE_MESSAGE"}', code: 'SMTP_SEND_FAILED', detail: 'TEST_PRIVATE_MESSAGE' },
    { status: 500, body: '{"code":"TEST_PRIVATE_CODE","error":"完整錯誤保留"}', code: 'CONTACT_FORM_FAILED', detail: 'TEST_PRIVATE_CODE' },
    { status: 503, body: '{}', code: 'HTTP_ERROR' },
    ...['', '<html>服務異常</html>', '{broken', '{}', 'null', '[]', 'true', '{"code":"OTHER"}'].map((body) => ({ status: 200, body, code: 'INVALID_RESPONSE' })),
    { abort: true, code: 'CONTACT_FORM_FAILED' },
  ]
  for (const failure of failures) {
    mock = failure.abort ? { abort: true } : { status: failure.status, body: failure.body }
    await resetEvents()
    const before = requestCount
    await click('#contact button[type="submit"]')
    await page.waitForFunction(() => document.querySelector('#contact [role="alert"]') && !document.querySelector('#contact fieldset').disabled)
    assert.equal(requestCount, before + 1)
    await assertPreserved()
    assert.deepEqual(await events(), [{ event: 'form_error', form_name: 'contact', error_code: failure.code, service: 'ai_voice' }])
    if (failure.detail) assert((await page.$eval('#contact [role="alert"]', (element) => element.textContent)).includes(failure.detail))
    await assertSafeEvents()
  }
  await page.screenshot({ path: join(screenshots, 'desktop-form-error.png') })
  mock = { status: 200, body: '{"message":"訊息已成功送出！","code":"CONTACT_SENT"}' }
  await resetEvents()
  const beforeSuccess = requestCount
  // 同一輪兩次 submit 也只能觸發一次請求。
  await page.evaluate(() => {
    const form = document.querySelector('#contact form')
    form.requestSubmit()
    form.requestSubmit()
  })
  await page.waitForFunction(() => document.querySelector('#contact [role="status"]')?.textContent.includes('需求已送出'))
  assert.equal(requestCount, beforeSuccess + 1)
  assert.deepEqual(await events(), [{ event: 'generate_lead', method: 'contact_form', service: 'ai_voice' }])
  for (const name of ['name', 'email', 'company', 'message', 'serviceInterest']) assert.equal(await page.$eval(`#${name}`, (element) => element.value), '')
  await assertSafeEvents()
  await page.screenshot({ path: join(screenshots, 'desktop-form-success.png') })

  await go('/services/ai-voice-agent')
  const articles = await page.$$eval('main a[href^="/blog/"]', (links) => [...new Set(links.map((link) => link.getAttribute('href')))])
  assert.equal(articles.length, 8)
  await click(cta('ai_voice_hero_demo'))
  await waitService('ai_voice')
  assert(new URL(page.url()).pathname === '/')
  for (const article of articles) {
    const response = await go(article)
    assert.equal(response.status(), 200)
    const slug = article.split('/').at(-1)
    assert.equal(await page.$eval(`#post-contact ${cta(`blog_${slug}_service`)}`, (link) => link.getAttribute('href')), '/services/ai-voice-agent')
    assert.equal(await page.$eval(`#post-contact ${cta(`blog_${slug}_demo`)}`, (link) => link.getAttribute('href')), '/?service=ai_voice#contact')
    assert(await page.$('a[href="/case-studies/gogocha-ai-dispatch"]'), '案例證據不可遺失')
    await resetEvents()
    await page.evaluate((selector) => document.querySelector(selector).addEventListener('click', (event) => event.preventDefault(), { once: true }), cta(`blog_${slug}_service`))
    await click(cta(`blog_${slug}_service`))
    assert.deepEqual(await events(), [{ event: 'service_cta_click', service: 'ai_voice', action: 'view_service', placement: `blog_${slug}_service` }])
  }
  await go('/blog/common-seo-mistakes')
  assert.equal(await page.$eval('#post-contact a', (link) => link.getAttribute('href')), '/#contact')
  assert(!(await page.$('#post-contact [data-cta-action]')), '一般文章 CTA 不應改成 AI 電話')

  for (const width of [1440, 390]) {
    await page.setViewport({ width, height: 900 })
    for (const path of ['/', '/services/ai-voice-agent', '/case-studies/gogocha-ai-dispatch']) {
      await go(path)
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px ${path} 溢出`)
      await page.screenshot({ path: join(screenshots, `${width}-${path.split('/').at(-1) || 'home'}.png`) })
    }
    await resetEvents()
    await click(cta('case_gogocha_ai_dispatch'))
    await waitService('ai_voice')
    assert.equal((await events()).filter((event) => event.event === 'service_cta_click').length, 1)
    // 鍵盤可依序由姓名到 Email；原生欄位與提示具可存取關聯。
    await page.focus('#name')
    await page.keyboard.press('Tab')
    assert.equal(await page.evaluate(() => document.activeElement.id), 'email')
    assert.equal(await page.$eval('#message', (element) => element.getAttribute('aria-describedby')), 'ai-voice-form-help')
    await page.screenshot({ path: join(screenshots, `${width}-contact.png`) })
    await page.$eval('#contact button[type="submit"]', (element) => element.scrollIntoView({ block: 'end' }))
    await page.screenshot({ path: join(screenshots, `${width}-contact-help.png`) })
  }
  assert.deepEqual(pageErrors, [], '瀏覽器不可有未處理錯誤')
  console.log(`PASS：8 篇文章、同頁／跨頁 CTA、${failures.length} 種失敗、成功防重複、事件隱私、桌面／手機與鍵盤。`)
  console.log(`截圖：${screenshots}；所有聯絡請求均已攔截，未寄信／送出第三方分析。`)
} finally {
  await browser.close()
}
