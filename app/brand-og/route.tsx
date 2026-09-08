import { ImageResponse } from 'next/og'
export const dynamic = 'force-static'
export function GET() {
  return new ImageResponse(<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', background: '#1E2A2E', color: '#F59E0B', borderTop: '8px solid #D97706' }}>
    <div style={{ fontSize: 90, letterSpacing: 8, fontWeight: 700 }}>FALCON</div>
    <div style={{ marginTop: 20, fontSize: 30, letterSpacing: 4, color: '#E0E5E8' }}>INFORMATION</div>
    <div style={{ marginTop: 70, fontSize: 22, color: '#A8B6BC' }}>falconinformation.com</div>
  </div>, { width: 1200, height: 630 })
}
