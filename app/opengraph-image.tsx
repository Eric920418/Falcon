import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const alt = '隼訊數位行銷｜以設計與技術，讓想像成形'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new Response(new Uint8Array(await readFile(path.join(process.cwd(), 'public/brand-share-zh-tw-v3.png'))), {
    headers: { 'Content-Type': contentType },
  })
}
