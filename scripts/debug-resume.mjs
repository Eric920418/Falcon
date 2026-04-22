import puppeteer from 'puppeteer-core'
import { mkdirSync } from 'node:fs'

mkdirSync('/tmp/resume-test', { recursive: true })

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-gpu'],
})

const page = await browser.newPage()

const client = await page.target().createCDPSession()
await client.send('Page.setDownloadBehavior', {
  behavior: 'allow',
  downloadPath: '/tmp/resume-test',
})

const logs = []
page.on('console', (msg) => logs.push(`[${msg.type()}] ${msg.text()}`))
page.on('pageerror', (err) => logs.push(`[pageerror] ${err.message}`))
page.on('requestfailed', (req) => logs.push(`[requestfailed] ${req.url().slice(0, 100)} — ${req.failure()?.errorText}`))

console.log('Step 1: load page...')
const start = Date.now()
await page.goto('http://localhost:3000/resume', { waitUntil: 'domcontentloaded', timeout: 30000 })
console.log(`Page loaded in ${Date.now() - start}ms`)

await new Promise(r => setTimeout(r, 1000))

console.log('\nStep 2: check page is responsive (not frozen)...')
const beforeClickState = await page.evaluate(() => ({
  buttons: Array.from(document.querySelectorAll('button')).map(b => b.innerText.slice(0, 60)),
}))
console.log('Initial buttons:', JSON.stringify(beforeClickState.buttons))

console.log('\nStep 3: click download button...')
const clicked = await page.evaluate(() => {
  const btns = Array.from(document.querySelectorAll('button'))
  const dl = btns.find(b => b.innerText.includes('下載') && b.innerText.includes('_Resume_'))
  if (!dl) return 'download button not found: ' + JSON.stringify(btns.map(b => b.innerText.slice(0, 40)))
  dl.click()
  return 'clicked'
})
console.log('Click:', clicked)

console.log('\nStep 4: wait for PDF generation...')
for (let i = 0; i < 15; i++) {
  await new Promise(r => setTimeout(r, 2000))
  const state = await page.evaluate(() => ({
    buttons: Array.from(document.querySelectorAll('button')).map(b => b.innerText.slice(0, 60)),
    error: document.querySelector('pre')?.innerText?.slice(0, 1000) || null,
  }))
  console.log(`[+${(i+1)*2}s]`, JSON.stringify(state.buttons))
  if (state.error) {
    console.log('  ERROR:', state.error)
    break
  }
  if (!state.buttons.some(b => b.includes('產生 PDF 中'))) {
    console.log('  => generation done')
    break
  }
}

console.log('\nStep 5: check download directory...')
const { readdirSync, statSync } = await import('node:fs')
const files = readdirSync('/tmp/resume-test')
for (const f of files) {
  const s = statSync(`/tmp/resume-test/${f}`)
  console.log(`  ${f} — ${s.size} bytes`)
}

console.log('\n=== CONSOLE ===')
for (const l of logs) console.log(l)

await browser.close()
