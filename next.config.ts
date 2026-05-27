import type { NextConfig } from 'next'

// Vercel Live toolbar (Comments / Feedback) 只在 preview / development 注入；
// production 不放行，保持最嚴 CSP。
// VERCEL_ENV 由 Vercel 自動注入：'production' | 'preview' | 'development'
const isProd = process.env.VERCEL_ENV === 'production'
const live = {
  script: isProd ? '' : ' https://vercel.live',
  style: isProd ? '' : ' https://vercel.live',
  img: isProd ? '' : ' https://vercel.live https://vercel.com',
  font: isProd ? '' : ' https://vercel.live https://assets.vercel.com',
  // Vercel Live 用 Pusher 做 real-time websocket
  connect: isProd ? '' : ' https://vercel.live wss://ws-us3.pusher.com',
  frame: isProd ? '' : ' https://vercel.live',
}

// /resume 需要放寬 CSP 給 @react-pdf/renderer：
// - yoga-layout WASM 透過 data: URL 載入 (connect-src data:)
// - 需要 wasm-unsafe-eval 執行 WASM
// - 圖片處理用 Web Worker 從 blob: URL 載入 (worker-src blob:)
function buildCsp({ resume = false }: { resume?: boolean } = {}): string {
  const scriptExtra = resume ? " 'wasm-unsafe-eval'" : ''
  const connectExtra = resume ? ' data: blob:' : ''
  const workerExtra = resume ? "; worker-src 'self' blob:" : ''
  const directives = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' 'unsafe-eval'${scriptExtra} https://www.googletagmanager.com https://www.google-analytics.com${live.script}`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com${live.style}`,
    `img-src 'self' data: blob: https://qr-official.line.me https://www.google-analytics.com https://www.googletagmanager.com${live.img}`,
    `font-src 'self' https://fonts.gstatic.com${live.font}`,
    `connect-src 'self'${connectExtra} https://www.google-analytics.com https://www.googletagmanager.com${live.connect}`,
    `frame-src 'self'${live.frame}`,
    "base-uri 'self'",
    "form-action 'self'",
  ]
  return directives.join('; ') + workerExtra
}

const baseSecurityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
]

const securityHeaders = [
  ...baseSecurityHeaders,
  { key: 'Content-Security-Policy', value: buildCsp() },
]

const resumeHeaders = [
  ...baseSecurityHeaders,
  { key: 'Content-Security-Policy', value: buildCsp({ resume: true }) },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qr-official.line.me',
        pathname: '/gs/**',
      },
    ],
  },
  async headers() {
    // 順序重要：後面的規則同 key 會覆蓋前面的，所以 /resume 要放最後
    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/resume', headers: resumeHeaders },
    ]
  },
}

export default nextConfig
