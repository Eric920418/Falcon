import { ImageResponse } from 'next/og'
import { CardOgImage, CARD_SIZES } from '@/lib/card-og'
import { getCardFonts } from '@/lib/og-fonts'
import { cardProfile } from '@/lib/card-data'

// nodejs runtime：需以 fs 讀取 Noto TC 字體，edge 無法讀檔
export const runtime = 'nodejs'
export const alt = `${cardProfile.nameZh} (${cardProfile.nameEn}) 電子名片 | ${cardProfile.org}`
export const size = CARD_SIZES.landscape
export const contentType = 'image/png'

export default async function Image() {
  const fonts = await getCardFonts()
  return new ImageResponse(<CardOgImage variant="landscape" />, {
    ...size,
    fonts,
  })
}
