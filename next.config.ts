import type { NextConfig } from 'next'

const securityHeaders = [
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
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://qr-official.line.me https://www.google-analytics.com https://www.googletagmanager.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
      "frame-src 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
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
    // /resume 需要放寬 CSP 給 @react-pdf/renderer：
    // - yoga-layout WASM 透過 data: URL 載入 (connect-src data:)
    // - 需要 wasm-unsafe-eval 執行 WASM
    // - 圖片處理用 Web Worker 從 blob: URL 載入 (worker-src blob:)
    const resumeHeaders = securityHeaders.map((h) => {
      if (h.key !== 'Content-Security-Policy') return h
      return {
        key: 'Content-Security-Policy',
        value: h.value
          .replace(
            "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
            "connect-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
          )
          .replace(
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
          ) + "; worker-src 'self' blob:",
      }
    })
    // 順序重要：後面的規則同 key 會覆蓋前面的，所以 /resume 要放最後
    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/resume', headers: resumeHeaders },
    ]
  },
}

export default nextConfig
