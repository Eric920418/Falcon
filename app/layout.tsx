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
    '桃園網站設計',
    '台北數位行銷',
    '新北SEO公司',
    '企業網站建置',
    'AI行銷公司',
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
  // 營業時間
  openingHours: [
    'Mo-Fr 09:00-18:00',
  ],
  // 聯絡資訊
  email: 'contact@falconinformation.com',
  // 成立年份
  foundingDate: '2024',
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
    languages: {
      'zh-TW': siteConfig.url,
      'zh-Hant': siteConfig.url,
      'x-default': siteConfig.url,
    },
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
    // 額外的 GEO meta tags
    'DC.title': siteConfig.name,
    'DC.creator': siteConfig.name,
    'DC.subject': '數位行銷, SEO, GEO, 網站建置',
    'DC.description': siteConfig.description,
    'DC.publisher': siteConfig.name,
    'DC.language': 'zh-TW',
    'DC.coverage': '台灣',
    // 本地商家識別
    'business:contact_data:locality': '桃園市桃園區',
    'business:contact_data:country_name': '台灣',
    'business:contact_data:postal_code': '330',
    'business:contact_data:street_address': siteConfig.address.streetAddress,
    // 內容分類
    'classification': '數位行銷服務',
    'category': 'Business Services',
    'coverage': 'Taiwan',
    'target': 'all',
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

// LocalBusiness Schema（GEO 優化核心）- 增強版
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService', 'MarketingAgency'],
  '@id': `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  alternateName: ['Falcon Information', '隼訊行銷', 'Falcon Digital Marketing'],
  description: siteConfig.description,
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/logo.png`,
    width: 512,
    height: 512,
  },
  image: [
    `${siteConfig.url}/og-image.png`,
    `${siteConfig.url}/logo.png`,
  ],
  email: siteConfig.email,
  priceRange: '$$-$$$',
  currenciesAccepted: 'TWD',
  paymentAccepted: '銀行轉帳, 信用卡, 現金',
  foundingDate: siteConfig.foundingDate,
  founder: {
    '@type': 'Person',
    name: '隼訊團隊',
  },
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: '台灣',
      '@id': 'https://www.wikidata.org/wiki/Q865',
    },
    {
      '@type': 'AdministrativeArea',
      name: '桃園市',
      containedInPlace: { '@type': 'Country', name: '台灣' },
    },
    {
      '@type': 'AdministrativeArea',
      name: '台北市',
      containedInPlace: { '@type': 'Country', name: '台灣' },
    },
    {
      '@type': 'AdministrativeArea',
      name: '新北市',
      containedInPlace: { '@type': 'Country', name: '台灣' },
    },
    {
      '@type': 'AdministrativeArea',
      name: '新竹市',
      containedInPlace: { '@type': 'Country', name: '台灣' },
    },
    {
      '@type': 'AdministrativeArea',
      name: '台中市',
      containedInPlace: { '@type': 'Country', name: '台灣' },
    },
  ],
  sameAs: siteConfig.socialLinks,
  slogan: '讓每個品牌都能被聽見',
  knowsAbout: [
    'SEO', 'GEO', 'AEO', '數位行銷', '網站開發', 'AI 工具', '社群經營',
  ],
  knowsLanguage: ['zh-TW', 'en'],
  // 服務項目 - 完整版
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '數位行銷服務',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${siteConfig.url}/#service-seo`,
          name: 'SEO 搜尋引擎優化',
          description: '提升網站在 Google 搜尋結果中的排名，增加自然流量與品牌曝光',
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'Country', name: '台灣' },
          serviceType: '搜尋引擎優化',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
          price: '30000',
          minPrice: '30000',
          unitText: '月',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${siteConfig.url}/#service-geo`,
          name: 'GEO 生成式引擎優化',
          description: '讓 ChatGPT、Gemini、Claude 等 AI 優先引用您的品牌，搶占 AI 搜尋時代先機',
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'Country', name: '台灣' },
          serviceType: '生成式引擎優化',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
          price: '50000',
          minPrice: '50000',
          unitText: '月',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${siteConfig.url}/#service-aeo`,
          name: 'AEO 答案引擎優化',
          description: '成為 Perplexity、Google AI Overview 的首選答案來源，提升品牌權威性',
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'Country', name: '台灣' },
          serviceType: '答案引擎優化',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
          price: '40000',
          minPrice: '40000',
          unitText: '月',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${siteConfig.url}/#service-web`,
          name: '網站建置與軟體開發',
          description: '客製化企業官網、電商平台、APP、CMS/ERP 系統開發',
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'Country', name: '台灣' },
          serviceType: '網站開發',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
          price: '80000',
          minPrice: '50000',
          unitText: '專案',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${siteConfig.url}/#service-ads`,
          name: '數位廣告投放',
          description: 'Google Ads、Meta 廣告、LINE LAP 精準投放，最大化廣告效益',
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'Country', name: '台灣' },
          serviceType: '數位廣告',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
          price: '20000',
          minPrice: '15000',
          unitText: '月',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${siteConfig.url}/#service-social`,
          name: '社群經營',
          description: 'Instagram、Facebook、LINE 官方帳號經營，建立品牌社群影響力',
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'Country', name: '台灣' },
          serviceType: '社群行銷',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
          price: '25000',
          minPrice: '15000',
          unitText: '月',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${siteConfig.url}/#service-video`,
          name: '短影音與形象影片製作',
          description: 'TikTok、Reels 短影音、企業形象影片、產品宣傳影片製作',
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'Country', name: '台灣' },
          serviceType: '影片製作',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
          price: '30000',
          minPrice: '15000',
          unitText: '支',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${siteConfig.url}/#service-ai`,
          name: 'AI 工具開發',
          description: '客製化 AI 聊天機器人、智能客服系統、AI 自動化工具開發',
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'Country', name: '台灣' },
          serviceType: 'AI 開發',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'TWD',
          price: '100000',
          minPrice: '50000',
          unitText: '專案',
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

// FAQPage Schema（常見問題 - 幫助出現在搜尋結果的 FAQ 區塊）
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteConfig.url}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: '什麼是 GEO（生成式引擎優化）？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GEO（Generative Engine Optimization）是針對 AI 搜尋引擎的優化策略，讓 ChatGPT、Gemini、Claude 等 AI 在回答用戶問題時優先引用您的品牌內容。與傳統 SEO 不同，GEO 更注重內容的權威性、結構化數據和 AI 可讀性。',
      },
    },
    {
      '@type': 'Question',
      name: '什麼是 AEO（答案引擎優化）？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AEO（Answer Engine Optimization）專注於讓您的品牌成為搜尋引擎「精選摘要」和 AI 答案的首選來源。透過優化內容結構、Schema 標記和權威性建立，讓 Perplexity、Google AI Overview 等答案引擎優先引用您的內容。',
      },
    },
    {
      '@type': 'Question',
      name: 'SEO、GEO、AEO 三者有什麼差異？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO 針對傳統搜尋引擎（Google、Bing）的關鍵字排名；GEO 針對生成式 AI（ChatGPT、Gemini）的品牌引用；AEO 針對答案引擎（Perplexity、Google AI）的精選答案。三者互補，完整覆蓋現代搜尋生態系統。',
      },
    },
    {
      '@type': 'Question',
      name: '網站建置需要多少預算？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '網站建置預算依需求而定：企業形象官網約 5-15 萬；電商平台約 15-50 萬；客製化系統（CMS/ERP）約 30-100 萬以上。我們提供免費諮詢，根據您的需求提供最適合的方案。',
      },
    },
    {
      '@type': 'Question',
      name: '隼訊數位行銷的服務範圍涵蓋哪些地區？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '我們總部位於桃園市，服務範圍涵蓋全台灣，包括台北、新北、桃園、新竹、台中等主要城市。數位行銷服務不受地理限制，可透過線上會議進行諮詢與合作。',
      },
    },
    {
      '@type': 'Question',
      name: '數位廣告投放的最低預算是多少？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '數位廣告投放建議最低預算：Google Ads 每月 1-3 萬起；Meta 廣告（Facebook/Instagram）每月 1-2 萬起。我們提供廣告代操服務，協助您最大化廣告效益。',
      },
    },
    {
      '@type': 'Question',
      name: '你們提供售後服務嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的，我們提供永久售後服務保證。網站上線後持續提供技術支援、問題修復和諮詢服務，確保您的數位資產持續穩定運作。',
      },
    },
  ],
}

// AggregateRating Schema（評價數據）
const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}/#rating`,
  name: siteConfig.name,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '47',
    reviewCount: '38',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: '翊珍香電商',
      },
      datePublished: '2024-08-15',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: '隼訊團隊非常專業，從網站規劃到上線只花了一個月，電商功能完整且穩定運作。',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'R.OC 室內設計',
      },
      datePublished: '2024-09-20',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: '設計美感很棒，完全理解我們品牌的東方美學風格，網站視覺效果超出預期。',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: '佑羲人力',
      },
      datePublished: '2024-10-05',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: '響應速度快，售後服務很到位，有問題都能即時處理。推薦給需要網站的企業。',
    },
  ],
}

// ProfessionalService Schema（專業服務補充）
const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.url}/#professionalservice`,
  name: siteConfig.name,
  description: '專業數位行銷與網站開發服務',
  url: siteConfig.url,
  priceRange: '$$-$$$',
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
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Google Partner',
      name: 'Google 合作夥伴認證',
    },
  ],
  knowsAbout: [
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'GEO' },
    { '@type': 'Thing', name: 'AEO' },
    { '@type': 'Thing', name: '網站開發' },
    { '@type': 'Thing', name: 'AI 工具' },
    { '@type': 'Thing', name: '數位廣告' },
  ],
}

// 合併所有 Schema
const jsonLdScripts = [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  aggregateRatingSchema,
  professionalServiceSchema,
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        {/* DNS Prefetch - 加速外部資源載入 */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preconnect - 建立早期連接 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* 預加載關鍵字體 - Core Web Vitals LCP 優化 */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* 預加載關鍵圖片 - LCP 優化 */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />

        {/* 額外的 SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="msapplication-TileColor" content="#D97706" />
        <meta name="theme-color" content="#0c0a09" />

        {/* 語言和地區標記 */}
        <meta httpEquiv="content-language" content="zh-TW" />
        <meta name="language" content="Traditional Chinese" />

        {/* 安全相關 */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="origin-when-cross-origin" />

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
