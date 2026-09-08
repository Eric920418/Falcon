import nodemailer from 'nodemailer'
import { NextRequest } from 'next/server'
import { POST } from '../app/api/contact/route'
import { languageUi } from '../src/lib/i18n/language-ui'
import { contactMessages } from '../src/lib/i18n/contact-messages'
import { localizeSchema, absoluteLocaleUrl } from '../src/lib/i18n/seo'
import { siteConfig, orgId } from '../src/lib/seo/site-config'
import { formatMoney } from '../src/lib/i18n/format'
import ts from 'typescript'
import { getAllServices } from '../src/lib/content/services'
import { getAllBlogPosts } from '../src/lib/content/blog'
import { getAllCaseStudies } from '../src/lib/content/case-studies'
import { getAllLocalPages } from '../src/lib/content/local'
import { pricingPages, comparePages } from '../src/lib/content/pricing'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { locales, localizedPath, unlocalizedPath, suggestedLocale, languageInfo } from '../src/lib/i18n/config'
import { makeTranslator } from '../src/lib/i18n/translate'
const root = 'src/lib/i18n/messages'
const groups = readdirSync(`${root}/zh-tw`).filter(file => file.endsWith('.json'))
let checked = 0
const problems: string[] = []
for (const locale of locales) {
  for (const file of groups) {
    const source = JSON.parse(readFileSync(`${root}/zh-tw/${file}`, 'utf8')) as Record<string,string>
    let target: Record<string,string>
    try { target = JSON.parse(readFileSync(`${root}/${locale}/${file}`, 'utf8')) } catch (error) { problems.push(`${locale}/${file}: ${String(error)}`); continue }
    for (const key of Object.keys(source)) {
      const value = target[key]
      if (typeof value !== 'string' || !value.trim()) { problems.push(`${locale}/${file}: missing ${key}`); continue }
      const tokens = (s: string) => [...s.matchAll(/\{\d+\}/g)].map(m => m[0]).sort()
      if (JSON.stringify(tokens(key)) !== JSON.stringify(tokens(value))) problems.push(`${locale}/${file}: interpolation changed: ${key}`)
      if (/(?:ZXQ|XZQ)\s*\d+\s*XZ/.test(value)) problems.push(`${locale}/${file}: unrestored protected token: ${key}`)
      for (const term of new Set(key.match(/\b(?:GEO|AEO|GA4|B2B|B2C|D2C|PBX|SIP|SLA)\b/g) ?? [])) {
        if (!new RegExp(`\\b${term}s?\\b`, 'i').test(value)) problems.push(`${locale}/${file}: technical term lost ${term}: ${key}`)
      }
      if (locale !== 'zh-tw' && /NT\$|\d[\d.,]*\s*[萬元]/.test(key) && !/美元|歐元|日圓|USD|EUR|JPY/.test(key)) {
        if (/€|\b(?:EUR|JPY|KRW)\b|R\$|\d[\d.,\s]*(?:円|원)/.test(value)) problems.push(`${locale}/${file}: incorrect currency: ${key}`)
      }

      const numericTokens = (text: string) => [...text.normalize('NFKC').replace(/(?<=\d)[ ,.\u00a0\u202f](?=\d{3}(?:\D|$))/g, '')
        .replace(/(\d+(?:[,.]\d+)*)\s*([-–—~～至])\s*(\d+(?:[,.]\d+)*)\s*([萬万億亿])/g, (_, a: string, separator: string, b: string, unit: string) => {
          const scale = '萬万'.includes(unit) ? 10000 : 100000000
          return `${Number(a.replace(/,/g, '')) * scale}${separator}${Number(b.replace(/,/g, '')) * scale}`
        })
        .replace(/(\d+(?:[,.]\d+)*)\s*([萬万億亿])/g, (_, amount: string, unit: string) => String(Number(amount.replace(/,/g, '')) * ('萬万'.includes(unit) ? 10000 : 100000000)))
        .matchAll(/\d+(?:[,.]\d+)*(?:[%+])?/g)].map(match => match[0].replace(/,/g, '.').replace(/^0+(?=\d)/, ''))
      const remaining = numericTokens(value)
      for (const number of numericTokens(key)) {
        const index = remaining.indexOf(number)
        if (index < 0) problems.push(`${locale}/${file}: numeric token lost ${number}: ${key}`)
        else remaining.splice(index, 1)
      }
      const unsupportedScript = /[\u0370-\u03ff\u0400-\u04ff\u0600-\u06ff\u0900-\u097f]/
      if (unsupportedScript.test(value) && !unsupportedScript.test(key)) problems.push(`${locale}/${file}: unexpected language script: ${key}`)
      if (value.includes('**') && !key.includes('*')) problems.push(`${locale}/${file}: unexpected Markdown markup: ${key}`)
      checked++
    }
    for (const key of Object.keys(target)) if (!(key in source)) problems.push(`${locale}/${file}: unknown key ${key}`)
  }
  const path = localizedPath('/blog/example?service=ai_voice#contact', locale)
  assert.equal(unlocalizedPath(path), '/blog/example?service=ai_voice#contact')
  assert.equal(localizedPath(path, locale), path)
  for (const untouched of ['/api/contact','/card','/resume','/logo.png','/opengraph-image','/ai-voice-og','https://example.com/x','//example.com/x','mailto:test@example.com','#section']) assert.equal(localizedPath(untouched, locale), untouched)
  assert.equal(localizedPath('/?service=ai_voice#contact', locale), locale === 'zh-tw' ? '/?service=ai_voice#contact' : `/${locale}?service=ai_voice#contact`)
  assert(languageInfo[locale].name)
  assert(Object.values(languageUi(locale)).every(value => typeof value === 'string' && value.trim()))
  assert(Object.values(contactMessages(locale)).every(value => typeof value === 'string' && value.trim()))
  const schema = localizeSchema({ '@id': siteConfig.url + '#webpage', url: siteConfig.url, about: { '@id': orgId }, inLanguage: 'zh-TW' }, locale, {})
  assert.equal(schema['@id'], absoluteLocaleUrl('/', locale) + '#webpage')
  assert.equal(schema.url, absoluteLocaleUrl('/', locale))
  assert.equal(schema.about['@id'], orgId)
  assert.equal(schema.inLanguage, languageInfo[locale].lang)
}
const sourceKeys = new Set(groups.flatMap(file => Object.keys(JSON.parse(readFileSync(`${root}/zh-tw/${file}`, 'utf8')))))
function checkRenderedKeys(directory: string) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = `${directory}/${entry.name}`
    if (entry.isDirectory()) { checkRenderedKeys(file); continue }
    if (!file.endsWith('.tsx')) continue
    const source = readFileSync(file, 'utf8')
    if (!source.includes('/i18n/') || file === 'src/components/SiteRoot.tsx') continue // SiteRoot 的繁中 baseMetadata 僅供不改版的工具頁使用。
    const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
    function visit(node: ts.Node) {
      if (ts.isStringLiteral(node) && !node.text.startsWith('%s |') && /[\u3400-\u9fff]/.test(node.text) && !/^(?:https?:|\/)/.test(node.text)) {
        const key = node.text.replace(/\s+/g, ' ').trim()
        if (!sourceKeys.has(key)) problems.push(`${file}: component data missing from source catalog: ${key}`)
      }
      if (ts.isJsxText(node) && /[\u3400-\u9fff]/.test(node.text)) problems.push(`${file}: untranslated JSX text: ${node.text.trim()}`)
      if (ts.isJsxAttribute(node) && ['alt', 'title', 'aria-label', 'placeholder'].includes(node.name.getText(tree)) && node.initializer && ts.isStringLiteral(node.initializer) && /[\u3400-\u9fff]/.test(node.initializer.text)) problems.push(`${file}: untranslated JSX attribute: ${node.initializer.text}`)
      if (ts.isCallExpression(node) && node.expression.getText(tree) === 't' && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) {
        const key = node.arguments[0].text.replace(/\s+/g, ' ').trim()
        if (/\p{L}/u.test(key) && !sourceKeys.has(key)) problems.push(`${file}: UI text missing from source catalog: ${key}`)
      }
      ts.forEachChild(node, visit)
    }
    visit(tree)
  }
}
checkRenderedKeys('app/[locale]')
checkRenderedKeys('src/components')
function checkContent(value: unknown) {
  if (typeof value === 'string' && /[\u3400-\u9fff]/.test(value) && !/^(?:https?:|\/)/.test(value)) {
    const key = value.replace(/\s+/g, ' ').trim()
    if (!sourceKeys.has(key)) problems.push(`Content missing from source catalog: ${key}`)
  } else if (Array.isArray(value)) value.forEach(checkContent)
  else if (value && typeof value === 'object') Object.values(value).forEach(checkContent)
}
checkContent([getAllServices(), getAllBlogPosts(), getAllCaseStudies(), getAllLocalPages(), pricingPages, comparePages])
assert(formatMoney('30,000', 'de').includes('30.000'))
assert(formatMoney(30000, 'en').includes('TWD'))
assert.equal(formatMoney('另行報價', 'en'), '另行報價')
assert.equal(suggestedLocale(['fr-CA','en']), 'fr')
assert.equal(suggestedLocale(['zh-CN']), 'zh-hans')
assert.equal(suggestedLocale(['zh-Hant-HK']), 'zh-tw')
assert.equal(suggestedLocale(['zh-Hant-CN']), 'zh-tw')
assert.equal(suggestedLocale(['ar','ko-KR']), 'ko')
assert.equal(suggestedLocale(['ar']), undefined)
assert.throws(() => makeTranslator('en', {})('缺少翻譯'), /Missing translation/)
assert.equal(makeTranslator('zh-tw', {})('NT$ 30,000'), 'TWD 30,000')
const japaneseMoney = makeTranslator('ja', { '每月 NT$ 7,500 起': '月額 NT$ 7,500 から' })
assert.equal(japaneseMoney(japaneseMoney('每月 NT$ 7,500 起')), '月額 TWD 7,500 から')
assert.equal(makeTranslator('en', {'共 {0} 項': '{0} items'})('共 {0} 項', {0:3}), '3 items')
if (problems.length) {
  console.error(problems.join('\n'))
  process.exitCode = 1
} else console.log(`PASS: ${checked} translations; locale paths, protected placeholders and browser matching`)

async function checkContactValidation() {
  const request = (body: unknown) => new NextRequest('http://localhost/api/contact', { method: 'POST', body: JSON.stringify(body) })
  // Every input fails before SMTP setup; these checks can never send a message.
  for (const locale of locales) {
    const response = await POST(request({ locale, name: 'test', email: 'test@example.invalid', message: 'Validation only', serviceInterest: 'INVALID' }))
    assert.equal(response.status, 400)
    assert.deepEqual(await response.json(), { error: contactMessages(locale).service, code: 'INVALID_SERVICE_INTEREST' })
  }
  for (const locale of ['ar', null, 42, {}]) {
    const response = await POST(request({ locale }))
    assert.equal(response.status, 400)
    assert.equal((await response.json()).code, 'INVALID_LOCALE')
  }
  for (const serviceInterest of [0, false, null]) {
    const response = await POST(request({ name: 'test', email: 'test@example.invalid', message: 'Validation only', serviceInterest }))
    assert.equal(response.status, 400)
    assert.equal((await response.json()).code, 'INVALID_SERVICE_INTEREST')
  }
  const legacy = await POST(request({}))
  assert.equal((await legacy.json()).error, contactMessages('zh-tw').required)
  const originalTransport = nodemailer.createTransport
  const originalConsoleError = console.error
  const keys = ['SMTP_USER', 'SMTP_PASSWORD', 'SMTP_HOST', 'CONTACT_RECIPIENT'] as const
  const previous = Object.fromEntries(keys.map(key => [key, process.env[key]]))
  const sent: Array<{ html: string; subject: string; replyTo: string }> = []
  try {
    for (const key of keys) process.env[key] = `TEST_SECRET_${key}`
    nodemailer.createTransport = (() => ({ sendMail: async (mail: typeof sent[number]) => { sent.push(mail) } })) as unknown as typeof nodemailer.createTransport
    for (const locale of locales) {
      const response = await POST(request({ locale, name: 'Test <name>', email: 'test@example.invalid', message: '<原始訊息> 日本語 한국어', serviceInterest: 'ai_voice' }))
      assert.equal(response.status, 200)
      assert.equal((await response.json()).code, 'CONTACT_SENT')
      assert(sent.at(-1)!.html.includes(`(${locale})`))
      assert(sent.at(-1)!.html.includes('&lt;原始訊息&gt; 日本語 한국어'))
      assert(sent.at(-1)!.subject.startsWith('[網站聯絡表單]'))
    }
    nodemailer.createTransport = (() => ({ sendMail: async () => { throw new Error(keys.map(key => process.env[key]).join(' ') + ' authorization: Bearer TEST_SECRET_TOKEN diagnostic retained') } })) as unknown as typeof nodemailer.createTransport
    console.error = () => {} // Expected synthetic SMTP failures; no real transport exists.
    for (const locale of locales) {
      const response = await POST(request({ locale, name: 'Test', email: 'test@example.invalid', message: 'Test failure' }))
      const result = await response.json()
      assert.equal(response.status, 500)
      assert.equal(result.code, 'SMTP_SEND_FAILED')
      assert.equal(result.error, contactMessages(locale).failed)
      assert(result.detail.includes('diagnostic retained'))
      assert(!result.detail.includes('TEST_SECRET_'), '公開錯誤不得洩漏 SMTP 設定')
    }
    assert.equal(sent.length, 9)
  } finally {
    nodemailer.createTransport = originalTransport
    console.error = originalConsoleError
    for (const key of keys) {
      if (previous[key] === undefined) delete process.env[key]
      else process.env[key] = previous[key]
    }
  }
  console.log('PASS: 17 validation and 18 localized contact success/failure checks; SMTP fully mocked')
}
checkContactValidation().catch(error => { console.error(error); process.exitCode = 1 })
