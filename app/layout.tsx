import type { Metadata } from 'next'
import Script from 'next/script'
import localFont from 'next/font/local'
import {
  siteConfig,
} from '@/lib/seo'
import './globals.css'

const notoSansTc = localFont({
  src: [
    { path: '../public/fonts/NotoSansTC-Regular-subset.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/NotoSansTC-Bold-subset.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-noto-sans-tc',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}｜網站與 AI 開發、SEO／GEO 搜尋成長`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'zh-TW': siteConfig.url,
      'zh-Hant': siteConfig.url,
      'x-default': siteConfig.url,
    },
  },
  other: {
    'distribution': 'Taiwan',
    'rating': 'general',
    'classification': '網站開發與搜尋成長服務',
    'category': 'Business Services',
    'coverage': 'Taiwan',
  },
}

// NEXT_PUBLIC_GTM_ID 在 build 時被字串替換進 inline <script>。
// 若值挾帶換行/引號等雜訊（例如貼進 Vercel env 時多了結尾換行），
// 會讓 JS 字串字面值斷行 → Uncaught SyntaxError，導致全站 GTM/GA 失效，
// 同時也是 script injection 破口。故先 trim 再用 GTM-XXXX 格式驗證，
// 任何不符格式的值一律不注入。
const rawGtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim()
const gtmId = rawGtmId && /^GTM-[A-Z0-9]+$/i.test(rawGtmId) ? rawGtmId : undefined

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning className={notoSansTc.variable}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* 低成本內容摘要；Google 官方文件明確說明不採用 llms.txt 作為排名訊號。 */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs Full Content Summary" />

        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="msapplication-TileColor" content="#D97706" />
        <meta name="theme-color" content="#0c0a09" />

        <meta httpEquiv="content-language" content="zh-TW" />
        <meta name="language" content="Traditional Chinese" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="origin-when-cross-origin" />

        {gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
      </head>
      <body>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
