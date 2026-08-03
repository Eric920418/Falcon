export const siteConfig = {
  name: '隼訊數位行銷',
  alternateNames: ['Falcon Information', '隼訊'],
  url: 'https://www.falconinformation.com',
  slogan: '網站與 AI 開發、SEO／GEO 搜尋成長',
  description:
    '隼訊提供台灣企業網站、AI 系統開發與 SEO／GEO 搜尋成長服務，以可驗證案例、技術品質與合格詢盤為成效核心。',
  keywords: [
    '網站建置', '軟體開發', 'AI 工具開發', '企業網站', '客製化系統',
    'SEO', '搜尋引擎優化', 'GEO', '生成式引擎優化', 'AI 搜尋',
    'AI 語音客服', 'AI 電話客服', 'AI 電話系統', 'VoiceBot',
    '台灣網站開發', '台灣 SEO 顧問',
  ],
  telephone: '+886958801559',
  email: 'contact@falconinformation.com',
  foundingDate: '2024',
  socialLinks: [
    'https://github.com/Eric920418',
    'https://www.instagram.com/falcon.information',
    'https://www.threads.net/@falcon.information',
  ],
  lineUrl: 'https://lin.ee/7IjIYw2',
  priceRange: '$-$$',
  knowsAbout: [
    '網站建置', '軟體開發', 'CMS 系統', '企業系統', 'AI 工具開發', 'APP 開發',
    'AI 語音客服系統', '企業 AI 電話', '即時派單系統', 'PBX 與 CRM 串接',
    'SEO 搜尋引擎優化', 'GEO 生成式引擎優化', 'AI 搜尋量測',
  ],
  areasServed: [
    { name: '桃園市', slug: 'taoyuan' },
    { name: '台北市', slug: 'taipei' },
    { name: '新北市', slug: 'xinbei' },
    { name: '新竹市', slug: 'hsinchu' },
    { name: '台中市', slug: 'taichung' },
    { name: '基隆市', slug: 'keelung' },
  ],
} as const

export type SiteConfig = typeof siteConfig

export const orgId = `${siteConfig.url}/#organization`
export const websiteId = `${siteConfig.url}/#website`
