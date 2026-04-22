import sharp from 'sharp'
import { mkdirSync, readdirSync, statSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const srcDir = resolve(root, 'public')
const outDir = resolve(root, 'public/resume-images')

mkdirSync(outDir, { recursive: true })

// 用到的所有圖片（從 resume-data.ts 擷取）
const images = [
  'TellCraft.png',
  '滷味.png',
  '展望國際人力.png',
  'AI智能客服系統網頁首頁.png',
  'CosmosWork.png',
  'TISCLLB.png',
  'RollOn.png',
  '遊戲.png',
  '神經元.png',
  '截圖 2026-04-01 中午12.05.04.png',
  '欣百漢.png',
  '茶客棧.png',
  '財神賣鞋.png',
  'ROC.png',
  '書.png',
  '燒烤.png',
  '投稿.png',
  'ictu.png',
  '元智管院.png',
  '活動官網.png',
  '餐飲POS系統網頁首頁.png',
  '寫code工具.png',
]

let totalOrig = 0
let totalOut = 0

for (const name of images) {
  const inPath = resolve(srcDir, name)
  const outName = name.replace(/\.png$/i, '.jpg')
  const outPath = resolve(outDir, outName)

  try {
    const origSize = statSync(inPath).size
    totalOrig += origSize

    await sharp(inPath)
      .resize({ width: 700, height: 440, fit: 'cover', position: 'top' })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(outPath)

    const newSize = statSync(outPath).size
    totalOut += newSize
    console.log(
      `${name.padEnd(40)} ${(origSize / 1024).toFixed(0).padStart(5)}KB → ${outName.padEnd(40)} ${(newSize / 1024).toFixed(0).padStart(5)}KB`,
    )
  } catch (e) {
    console.error(`FAIL ${name}: ${e.message}`)
  }
}

console.log('---')
console.log(`Total: ${(totalOrig / 1024 / 1024).toFixed(2)}MB → ${(totalOut / 1024 / 1024).toFixed(2)}MB`)
console.log(`Reduction: ${((1 - totalOut / totalOrig) * 100).toFixed(1)}%`)
