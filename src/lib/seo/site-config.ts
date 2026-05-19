export const siteConfig = {
  name: '隼訊數位行銷',
  alternateNames: ['Falcon Information', '隼訊行銷', 'Falcon Digital Marketing'],
  url: 'https://www.falconinformation.com',
  slogan: '讓每個品牌都能被聽見',
  description:
    '專業數位行銷服務平台，提供網站建置、軟體開發、CMS/ERP系統、AI工具、APP開發、SEO優化、GEO生成式引擎優化、AEO答案引擎優化、數位廣告、社群經營、口碑行銷、短影音製作、活動企劃及互動體驗設計等全方位數位解決方案。',
  keywords: [
    '整合行銷', '網站建置', '軟體開發', 'CMS系統', 'ERP系統', 'AI工具', 'APP開發',
    'SEO優化', '搜尋引擎優化', 'GEO', '生成式引擎優化', 'Generative Engine Optimization',
    'AEO', '答案引擎優化', 'Answer Engine Optimization', 'AI搜尋優化',
    '數位廣告', '社群經營', '口碑行銷', '輿情管理', '短影音製作', '形象影片',
    '活動企劃', '互動體驗設計', '台灣', '桃園', '數位行銷公司', '行銷公司推薦',
    '桃園網站設計', '台北數位行銷', '新北SEO公司', '企業網站建置', 'AI行銷公司',
  ],
  address: {
    streetAddress: '民權路6號5樓之4',
    addressLocality: '桃園區',
    addressRegion: '桃園市',
    postalCode: '330',
    addressCountry: 'TW',
  },
  geo: {
    latitude: 24.9936,
    longitude: 121.3010,
  },
  telephone: '+886958801559',
  email: 'contact@falconinformation.com',
  foundingDate: '2024',
  openingHours: ['Mo-Fr 09:00-18:00'],
  socialLinks: [
    'https://www.instagram.com/falcon.information',
    'https://www.threads.net/@falcon.information',
  ],
  lineUrl: 'https://lin.ee/7IjIYw2',
  priceRange: '$$-$$$',
  knowsAbout: [
    '網站建置', '軟體開發', 'CMS系統', 'ERP系統', 'AI工具開發', 'APP開發',
    'SEO搜尋引擎優化', 'GEO生成式引擎優化', 'AEO答案引擎優化', 'AI搜尋優化',
    '數位廣告投放', '社群經營', '口碑行銷', '輿情管理', '短影音製作',
    '形象影片', '活動企劃', '互動體驗設計',
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
export const localBusinessId = `${siteConfig.url}/#localbusiness`
export const websiteId = `${siteConfig.url}/#website`
