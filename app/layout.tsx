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
    '桃園',
    '數位行銷公司',
    '行銷公司推薦',
  ],
  // 公司地址資訊（GEO 優化）
  address: {
    streetAddress: '民權路6號5樓之4',
    addressLocality: '桃園區',
    addressRegion: '桃園市',
    postalCode: '330',
    addressCountry: 'TW',
  },
  // 地理座標（桃園市桃園區民權路6號）
  geo: {
    latitude: 24.9936,
    longitude: 121.3010,
  },
  // 社群媒體連結
  socialLinks: [
    'https://www.instagram.com/falcon.information',
    'https://www.threads.net/@falcon.information',
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
  // GEO 相關 meta
  other: {
    'geo.region': 'TW-TAO',
    'geo.placename': '桃園市桃園區',
    'geo.position': `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    'ICBM': `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    'distribution': 'Taiwan',
    'rating': 'general',
    'revisit-after': '7 days',
  },
}

// Organization Schema（品牌層級）
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/logo.png`,
    width: 512,
    height: 512,
  },
  description: siteConfig.description,
  sameAs: siteConfig.socialLinks,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Chinese', 'English'],
    areaServed: 'TW',
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

// LocalBusiness Schema（GEO 優化核心）
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}/og-image.png`,
  telephone: '', // 如有電話可加入
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: '台灣',
    },
    {
      '@type': 'City',
      name: '桃園市',
    },
    {
      '@type': 'City',
      name: '台北市',
    },
    {
      '@type': 'City',
      name: '新北市',
    },
  ],
  sameAs: siteConfig.socialLinks,
  // 服務項目
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '數位行銷服務',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO 搜尋引擎優化',
          description: '提升網站在 Google 搜尋結果中的排名',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'GEO 生成式引擎優化',
          description: '讓 ChatGPT、Gemini 等 AI 優先引用您的品牌',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AEO 答案引擎優化',
          description: '成為 Perplexity、Google AI 的首選答案來源',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '網站建置與軟體開發',
          description: '客製化網站、APP、系統開發',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '數位廣告投放',
          description: 'Google Ads、Meta 廣告精準投放',
        },
      },
    ],
  },
}

// WebSite Schema（搜尋框優化）
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
  inLanguage: 'zh-TW',
}

// BreadcrumbList Schema（導航結構）
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首頁',
      item: siteConfig.url,
    },
  ],
}

// 合併所有 Schema
const jsonLdScripts = [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  breadcrumbSchema,
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        {/* JSON-LD 結構化數據 */}
        {jsonLdScripts.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}
