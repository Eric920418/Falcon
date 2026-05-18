import { siteConfig, orgId } from '../site-config'

export interface ItemListEntry {
  name: string
  description: string
  url?: string
}

export function createPortfolioItemListSchema(items: ItemListEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteConfig.url}/#portfolio-list`,
    name: '隼訊數位行銷作品案例',
    description: '精選客戶案例，涵蓋電商平台、企業官網、AI 應用、學術系統等多元專案',
    numberOfItems: items.length,
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'CreativeWork',
        name: item.name,
        description: item.description,
        ...(item.url ? { url: item.url } : {}),
        creator: { '@id': orgId },
      },
    })),
  }
}

export const defaultPortfolioItems: ItemListEntry[] = [
  { name: '翊珍香電商平台', description: '手工麵線電商平台，完整購物車與金流系統' },
  { name: 'R collectives 室內設計官網', description: '東方美學室內設計工作室品牌網站' },
  { name: '佑羲人力管理平台', description: '人力資源招募與管理系統', url: 'https://yoshi3166.com' },
  { name: '破浪三國遊戲官網', description: '三國題材手遊官方網站', url: 'https://www.kingdoms.blog/' },
  { name: 'CosmosWork 接案媒合平台', description: 'AI 智能自由接案媒合平台', url: 'https://falcontaskbridge.com/' },
  { name: 'ICTE 2025 國際學術研討會', description: '國際學術研討會官方網站與論文投稿系統', url: 'https://icte2025.ntue.edu.tw/' },
  { name: '茶客棧飲料店官網', description: '茶飲品牌官網，東方墨韻視覺設計與 CMS 後台管理' },
]
