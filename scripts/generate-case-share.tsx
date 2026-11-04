import { writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { ImageResponse } from 'next/og'
import sharp from 'sharp'
import { getCardFonts } from '../src/lib/og-fonts'
import { projects } from '../src/lib/content/projects'

async function main() {
  const fonts = await getCardFonts()
  const covers = await Promise.all(['nova-startup-operating-platform', 'climatix-ghg-inventory'].map(async slug => {
    const project = projects.find(project => project.slug === slug)
    assert(project, `Missing share cover: ${slug}`)
    const buffer = await sharp(`public${project.image}`).resize(650, 366, { fit: 'cover' }).png().toBuffer()
    return `data:image/png;base64,${buffer.toString('base64')}`
  }))
  const logo = `data:image/png;base64,${(await sharp('public/logo.png').resize(88, 88).png().toBuffer()).toString('base64')}`
  for (const locale of ['zh-tw', 'en']) {
    const response = new ImageResponse(
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#f1f2f7', color: '#151820', fontFamily: 'Noto Sans TC', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 52, top: 42, display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src={logo} width={46} height={46} />
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 19, letterSpacing: 2 }}><span>FALCON</span><span style={{ fontSize: 10, letterSpacing: 3 }}>INFORMATION</span></div>
        </div>
        <div style={{ display: 'flex', position: 'absolute', left: 56, top: 173, flexDirection: 'column' }}>
          <span style={{ color: '#2044da', fontSize: 16, letterSpacing: 3 }}>SELECTED WORK</span>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20, fontSize: locale === 'zh-tw' ? 78 : 76, fontWeight: 700, lineHeight: 1.15, letterSpacing: -3 }}>
            <span>{locale === 'zh-tw' ? '作品，' : 'Ideas.'}</span><span>{locale === 'zh-tw' ? '會說話。' : 'Built real.'}</span>
          </div>
          <span style={{ fontSize: 22, marginTop: 28, color: '#596273' }}>Web / AI / Systems</span>
        </div>
        <div style={{ display: 'flex', position: 'absolute', left: 555, top: 65, width: 570, height: 323, transform: 'rotate(7deg)', boxShadow: '0 20px 45px #18265325', border: '5px solid white', borderRadius: 12, overflow: 'hidden' }}><img src={covers[1]} width={570} height={323} style={{ objectFit: 'cover' }} /></div>
        <div style={{ display: 'flex', position: 'absolute', left: 505, top: 286, width: 650, height: 366, transform: 'rotate(-7deg)', boxShadow: '0 24px 55px #18265335', border: '5px solid white', borderRadius: 12, overflow: 'hidden' }}><img src={covers[0]} width={650} height={366} style={{ objectFit: 'cover' }} /></div>
        <div style={{ display: 'flex', position: 'absolute', left: 56, bottom: 40, fontSize: 17, color: '#2044da' }}>falconinformation.com</div>
      </div>, { width: 1200, height: 630, fonts },
    )
    const png = await sharp(Buffer.from(await response.arrayBuffer())).png({ compressionLevel: 9 }).toBuffer()
    const size = await sharp(png).metadata()
    assert.equal(size.width, 1200); assert.equal(size.height, 630)
    const output = `public/case-studies-share-${locale}-v2.png`
    await writeFile(output, png)
    console.log(`${output}: ${png.length} bytes`)
  }
}
main().catch(error => { console.error(error); process.exitCode = 1 })
