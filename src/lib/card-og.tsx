import { cardProfile } from './card-data'

export type CardVariant = 'landscape' | 'portrait' | 'print'

export const CARD_SIZES: Record<CardVariant, { width: number; height: number }> = {
  landscape: { width: 1200, height: 630 }, // 社群預覽 OG
  portrait: { width: 1080, height: 1350 }, // IG / LINE 分享直式
  print: { width: 1063, height: 638 }, // 90×54mm @300DPI 名片印刷
}

/**
 * 名片圖共用版面（next/og satori）。
 * 正式、不花俏：鋼藍灰底、細飾線、清楚字級層次。
 * satori 規則：含多個子元素的容器都需明確 display:flex。
 */
export function CardOgImage({ variant }: { variant: CardVariant }) {
  const { width, height } = CARD_SIZES[variant]
  const portrait = variant === 'portrait'
  const s = width / 1200 // 縮放基準

  const nameSize = portrait ? 132 : 96
  const enSize = portrait ? 40 : 30
  const titleSize = portrait ? 36 : 28
  const orgSize = portrait ? 30 : 24
  const contactSize = portrait ? 30 : 24
  const pad = portrait ? 96 : 72

  const contacts: { label: string; value: string }[] = [
    { label: '手機', value: cardProfile.phone },
    { label: '信箱', value: cardProfile.personalEmail },
    { label: '網站', value: cardProfile.website.replace(/^https?:\/\//, '') },
    { label: '地點', value: cardProfile.location },
  ]

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #1E2A2E 0%, #2D3B40 60%, #344349 100%)',
        fontFamily: 'Noto Sans TC',
        color: '#E0E5E8',
        padding: pad,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 頂部鋼藍灰飾線 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          display: 'flex',
          background: 'linear-gradient(90deg, #5F808B, #6D8F96, #A8B6BC)',
        }}
      />

      {/* 背景大字「隼」浮水印 */}
      <div
        style={{
          position: 'absolute',
          right: -40 * s,
          bottom: -120 * s,
          fontSize: 520 * s,
          fontWeight: 700,
          color: 'rgba(168, 182, 188, 0.05)',
          lineHeight: 1,
          display: 'flex',
        }}
      >
        隼
      </div>

      {/* 公司標 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            width: orgSize,
            height: orgSize,
            display: 'flex',
            background: 'linear-gradient(135deg, #5F808B, #2D3B40)',
            borderRadius: 4,
          }}
        />
        <div style={{ display: 'flex', fontSize: orgSize, color: '#A8B6BC', letterSpacing: 4 }}>
          {cardProfile.org}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: orgSize * 0.7,
            color: '#6D8F96',
            letterSpacing: 3,
          }}
        >
          FALCON INFORMATION
        </div>
      </div>

      {/* 姓名 / 職稱 */}
      <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
          <div style={{ display: 'flex', fontSize: nameSize, fontWeight: 700, color: '#FFFFFF', letterSpacing: 6 }}>
            {cardProfile.nameZh}
          </div>
          <div style={{ display: 'flex', fontSize: enSize, color: '#A8B6BC', letterSpacing: 2 }}>
            {cardProfile.nameEn}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: titleSize, color: '#C5CED2', marginTop: 18 }}>
          {cardProfile.title}
        </div>
      </div>

      {/* 飾線 + 聯絡資訊 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: portrait ? 28 : 18, zIndex: 10 }}>
        <div
          style={{
            width: 96,
            height: 3,
            display: 'flex',
            background: 'linear-gradient(90deg, #5F808B, #6D8F96)',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: portrait ? 18 : 12 }}>
          {contacts.map((c) => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: contactSize * 0.8,
                  color: '#6D8F96',
                  width: portrait ? 80 : 64,
                  letterSpacing: 4,
                }}
              >
                {c.label}
              </div>
              <div style={{ display: 'flex', fontSize: contactSize, color: '#E0E5E8' }}>
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
