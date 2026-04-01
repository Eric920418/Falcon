import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '隼訊數位行銷 | 整合行銷服務平台 - SEO、GEO、AEO、網站建置'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0c0a09 0%, #1c1917 40%, #292524 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 裝飾光暈 */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(180, 83, 9, 0.1) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* 大型背景漢字裝飾 */}
        <div
          style={{
            position: 'absolute',
            right: '60px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '320px',
            fontWeight: 700,
            color: 'rgba(217, 119, 6, 0.06)',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          隼
        </div>

        {/* 頂部裝飾線 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #D97706, #B45309, transparent)',
            display: 'flex',
          }}
        />

        {/* 主內容 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            zIndex: 10,
          }}
        >
          {/* 公司名稱 */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #D97706, #F59E0B, #D97706)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '8px',
              display: 'flex',
            }}
          >
            隼訊數位行銷
          </div>

          {/* Slogan */}
          <div
            style={{
              fontSize: '28px',
              color: '#a8a29e',
              letterSpacing: '4px',
              display: 'flex',
            }}
          >
            讓每個品牌都能被聽見
          </div>

          {/* 服務標籤 */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '16px',
            }}
          >
            {['SEO', 'GEO', 'AEO', '網站建置', 'AI 工具'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 20px',
                  border: '1px solid rgba(217, 119, 6, 0.4)',
                  borderRadius: '6px',
                  color: '#D97706',
                  fontSize: '18px',
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* 底部資訊 */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#78716c',
            fontSize: '16px',
          }}
        >
          <span>falconinformation.com</span>
          <span>·</span>
          <span>桃園市桃園區</span>
          <span>·</span>
          <span>0958-801-559</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
