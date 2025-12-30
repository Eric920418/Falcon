import type { Metadata } from 'next'
import './globals.css'

const siteConfig = {
  name: '隼訊數位行銷',
  url: 'https://falconinformation.com',
  description: '專業數位行銷服務平台，提供網站建置、軟體開發、CMS/ERP系統、AI工具、APP開發、SEO優化、GEO生成式引擎優化、AEO答案引擎優化、數位廣告、社群經營、口碑行銷、短影音製作、活動企劃及互動體驗設計等全方位數位解決方案。',
  keywords: [
    '整合行銷',
    '網站建置',
    '軟體開發',
    'CMS系統',
    'ERP系統',
    'AI工具',
    'APP開發',
    'SEO優化',
    '搜尋引擎優化',
    'GEO',
    '生成式引擎優化',
    'Generative Engine Optimization',
    'AEO',
    '答案引擎優化',
    'Answer Engine Optimization',
    'AI搜尋優化',
    '數位廣告',
    '社群經營',
    '口碑行銷',
    '輿情管理',
    '短影音製作',
    '形象影片',
    '活動企劃',
    '互動體驗設計',
    '台灣',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | 整合行銷服務平台`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
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
    title: `${siteConfig.name} | 讓每個品牌都能被聽見`,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | 讓每個品牌都能被聽見`,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    // 之後添加 Google Search Console 驗證碼
    // google: 'your-google-verification-code',
  },
}

// JSON-LD 結構化數據
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TW',
  },
  sameAs: [
    // 之後添加社群媒體連結
    // 'https://www.facebook.com/yourpage',
    // 'https://www.instagram.com/yourpage',
    // 'https://www.linkedin.com/company/yourcompany',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Chinese', 'English'],
  },
  areaServed: {
    '@type': 'Country',
    name: 'Taiwan',
  },
  knowsAbout: [
    '網站建置',
    '軟體開發',
    'CMS系統',
    'ERP系統',
    'AI工具開發',
    'APP開發',
    'SEO搜尋引擎優化',
    'GEO生成式引擎優化',
    'AEO答案引擎優化',
    'AI搜尋優化',
    '數位廣告投放',
    '社群經營',
    '口碑行銷',
    '輿情管理',
    '短影音製作',
    '形象影片',
    '活動企劃',
    '互動體驗設計',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
