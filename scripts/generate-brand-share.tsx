import { readFile, writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { ImageResponse } from 'next/og'
import sharp from 'sharp'
import { getCardFonts } from '../src/lib/og-fonts'

async function main() {
  const fonts = await getCardFonts()
  const art = `data:image/png;base64,${(await sharp('public/models/falcon-hero.webp').png().toBuffer()).toString('base64')}`
  const logo = `data:image/png;base64,${(await readFile('public/logo.png')).toString('base64')}`
  for (const locale of ['zh-tw', 'en']) {
    const zh = locale === 'zh-tw'
    const response = new ImageResponse(
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#f0f1f6', color: '#14171e', fontFamily: 'Noto Sans TC', position: 'relative', overflow: 'hidden' }}>
        <img src={art} width={1008} height={630} style={{ position: 'absolute', left: 420, top: 36 }} />
        <div style={{ display: 'flex', position: 'absolute', top: 42, left: 52, alignItems: 'center', gap: 14 }}>
          <img src={logo} width={48} height={48} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 24, fontWeight: 700 }}>{zh ? '隼訊數位行銷' : 'FALCON'}</span>
            <span style={{ fontSize: 11, letterSpacing: 2.5 }}>{zh ? 'FALCON INFORMATION' : 'INFORMATION'}</span>
          </div>
        </div>
        <div style={{ position: 'absolute', left: 56, top: 186, display: 'flex', flexDirection: 'column', fontSize: zh ? 90 : 88, fontWeight: 700, lineHeight: 1.17, letterSpacing: -4 }}>
          <span>{zh ? '讓想像' : 'Ideas take'}</span>
          <span style={{ color: '#2543df' }}>{zh ? '成形。' : 'flight.'}</span>
        </div>
        <div style={{ position: 'absolute', left: 58, top: 432, display: 'flex', fontSize: 22, color: '#485266' }}>{zh ? '網站與 AI 開發 · SEO / GEO' : 'Web & AI · Search Growth'}</div>
        <div style={{ position: 'absolute', left: 56, right: 56, bottom: 36, borderTop: '1px solid #bfc7d7', paddingTop: 17, display: 'flex', justifyContent: 'space-between', fontSize: 16, color: '#485266' }}>
          <span>falconinformation.com</span><svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 19L19 5M5 5h14v14" fill="none" stroke="#2543df" strokeWidth="2" /></svg>
        </div>
      </div>, { width: 1200, height: 630, fonts },
    )
    const png = await sharp(Buffer.from(await response.arrayBuffer())).png({ compressionLevel: 9 }).toBuffer()
    const dimensions = await sharp(png).metadata()
    assert.equal(dimensions.width, 1200); assert.equal(dimensions.height, 630)
    assert(png.length < 1000000, 'Share image must stay below 1 MB')
    const output = `public/brand-share-${locale}-v3.png`
    await writeFile(output, png)
    console.log(`${output}: ${png.length} bytes`)
  }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
