import { ImageResponse } from 'next/og'
import { getCardFonts } from '@/lib/og-fonts'

export const runtime = 'nodejs'

export async function GET() {
  const fonts = await getCardFonts()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#0d1315',
          color: '#E0E5E8',
          fontFamily: 'Noto Sans TC',
          padding: '66px 72px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage:
              'linear-gradient(rgba(168,182,188,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168,182,188,.08) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
          }}
        />
        <div style={{ position: 'relative', display: 'flex', width: '100%', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#F59E0B', fontSize: 20, letterSpacing: 3 }}>
            <div style={{ display: 'flex', width: 52, height: 3, background: '#F59E0B' }} />
            FALCON ENTERPRISE VOICE WORKFLOW
          </div>
          <div style={{ display: 'flex', marginTop: 44, fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
            企業 AI 語音客服
            <br />
            與電話自動化系統
          </div>
          <div style={{ display: 'flex', marginTop: 26, fontSize: 26, color: '#A8B6BC' }}>
            電話接聽 → AI 理解 → 派單／工單／CRM → 人工接手
          </div>
          <div style={{ display: 'flex', marginTop: 'auto', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              {['GoGoCha 公開實作', '企業客製', 'POC 驗收'].map((label) => (
                <div key={label} style={{ display: 'flex', border: '1px solid #5F808B', padding: '9px 16px', fontSize: 17, color: '#C5CED2' }}>
                  {label}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', fontSize: 20, color: '#F59E0B' }}>隼訊數位行銷</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts },
  )
}
