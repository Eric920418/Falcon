import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const dynamic = 'force-static'
export async function GET() {
  return new Response(new Uint8Array(await readFile(path.join(process.cwd(), 'public/brand-share-en-v3.png'))), {
    headers: { 'Content-Type': 'image/png' },
  })
}
