import { ImageResponse } from 'next/og'
import { CardOgImage, CARD_SIZES, type CardVariant } from '@/lib/card-og'
import { getCardFonts } from '@/lib/og-fonts'
import { cardProfile } from '@/lib/card-data'

// nodejs runtime：需以 fs 讀取 Noto TC 字體
export const runtime = 'nodejs'

const VALID: CardVariant[] = ['portrait', 'landscape', 'print']

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ format: string }> },
) {
  const { format } = await params

  if (!VALID.includes(format as CardVariant)) {
    // 錯誤完整顯示，不靜默
    return new Response(
      `無效的名片圖格式 "${format}"。可用值：${VALID.join('、')}`,
      { status: 400, headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
    )
  }

  const variant = format as CardVariant
  const fonts = await getCardFonts()
  const filename = `${cardProfile.nameEn.replace(/\s+/g, '_')}_card_${variant}.png`

  return new ImageResponse(<CardOgImage variant={variant} />, {
    ...CARD_SIZES[variant],
    fonts,
    headers: {
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
