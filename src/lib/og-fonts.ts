import { readFile } from 'node:fs/promises'
import path from 'node:path'

/**
 * 載入 Noto Sans TC 字體給 next/og (satori)。
 *
 * 重點：satori 支援 ttf / otf / woff，但「不支援 woff2」。
 * @fontsource/noto-sans-tc 同時提供 .woff，故取 .woff。
 * 繁中字符在 chinese-traditional 子集、英數在 latin 子集，
 * satori 會逐字符跨字體 fallback，兩者都載入才不會缺字。
 *
 * 需在 Node.js runtime 執行（fs 讀取），不可用 edge runtime。
 */
const FONT_DIR = path.join(
  process.cwd(),
  'node_modules/@fontsource/noto-sans-tc/files',
)

async function load(file: string): Promise<ArrayBuffer> {
  const buf = await readFile(path.join(FONT_DIR, file))
  // 轉成 ArrayBuffer 供 ImageResponse 使用
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer
}

export type OgFont = {
  name: string
  data: ArrayBuffer
  weight: 400 | 700
  style: 'normal'
}

export async function getCardFonts(): Promise<OgFont[]> {
  const [cjk400, cjk700, latin400, latin700] = await Promise.all([
    load('noto-sans-tc-chinese-traditional-400-normal.woff'),
    load('noto-sans-tc-chinese-traditional-700-normal.woff'),
    load('noto-sans-tc-latin-400-normal.woff'),
    load('noto-sans-tc-latin-700-normal.woff'),
  ])

  // CJK 在前作為主字體，latin 在後作為 fallback（涵蓋英數標點）
  return [
    { name: 'Noto Sans TC', data: cjk400, weight: 400, style: 'normal' },
    { name: 'Noto Sans TC', data: latin400, weight: 400, style: 'normal' },
    { name: 'Noto Sans TC', data: cjk700, weight: 700, style: 'normal' },
    { name: 'Noto Sans TC', data: latin700, weight: 700, style: 'normal' },
  ]
}
