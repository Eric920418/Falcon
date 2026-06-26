import type { Metadata } from 'next'
import Script from 'next/script'
import {
  siteConfig,
  JsonLd,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  professionalServiceSchema,
} from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | 整合行銷服務平台`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords as unknown as string[],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: siteConfig.description,
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
    'geo.region': 'TW-TAO',
    'geo.placename': '桃園市桃園區',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    'ICBM': `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    'distribution': 'Taiwan',
    'rating': 'general',
    'revisit-after': '7 days',
    'DC.title': siteConfig.name,
    'DC.creator': siteConfig.name,
    'DC.subject': '數位行銷, SEO, GEO, 網站建置',
    'DC.description': siteConfig.description,
    'DC.publisher': siteConfig.name,
    'DC.language': 'zh-TW',
    'DC.coverage': '台灣',
    'business:contact_data:locality': '桃園市桃園區',
    'business:contact_data:country_name': '台灣',
    'business:contact_data:postal_code': '330',
    'business:contact_data:street_address': siteConfig.address.streetAddress,
    'classification': '數位行銷服務',
    'category': 'Business Services',
    'coverage': 'Taiwan',
    'target': 'all',
  },
}

const globalSchemas = [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  professionalServiceSchema,
]

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
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="preload" href="/logo.png" as="image" type="image/png" />

        {/* AI 搜尋引擎發現 */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="LLMs Full Documentation" />

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

        {/* 全站級 JSON-LD：Organization / LocalBusiness / WebSite / ProfessionalService */}
        <JsonLd data={globalSchemas} />

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
