import type { PricingPageContent, ComparePageContent } from './types'
import { primaryPriceDefinitions } from './price-catalog'

const lastModified = '2026-07-26'

const pricingKeywords: Record<string, string[]> = {
  'web-development': ['網站建置費用', '網頁設計費用', '網站報價'],
  'ai-tools': ['AI 開發報價', 'AI 客服費用', 'AI 工具費用'],
  seo: ['SEO 費用', 'SEO 報價', 'SEO 顧問價格'],
  geo: ['GEO 費用', 'AI 搜尋優化報價', 'SEO GEO 顧問'],
}

export const pricingPages: Record<string, PricingPageContent> = Object.fromEntries(
  primaryPriceDefinitions.map((definition) => [
    definition.pricingSlug,
    {
      slug: definition.pricingSlug,
      title: `${definition.name}費用｜公開起價與報價因素`,
      h1: `${definition.name}費用`,
      description: `${definition.name} NT$ ${definition.from.toLocaleString('en-US')} ${definition.unit}起，公開服務範圍、方案內容與影響報價的條件。`,
      keywords: pricingKeywords[definition.serviceSlug] ?? [],
      lastModified,
      qualityTier: 'production',
      intro: `${definition.scope}以下金額是起價，不是保證所有需求都能以同一價格完成；正式報價會逐項列出範圍與不包含內容。`,
      tiers: definition.tiers,
      faq: [
        {
          question: '起價與正式報價有什麼不同？',
          answer: `起價對應頁面列出的基礎範圍；正式報價會依${definition.factors.join('、')}調整，並在合作前列出交付與不包含項目。`,
        },
        {
          question: '是否保證搜尋排名、AI 引用或商業成果？',
          answer:
            '不保證。網站與搜尋服務會定義可量測指標並揭露執行範圍，但排名、AI 引用與營收還會受到市場、品牌、內容與平台演算法影響。',
        },
      ],
    } satisfies PricingPageContent,
  ]),
)

export const pricingSlugs = Object.keys(pricingPages)

export function getPricingPage(slug: string): PricingPageContent | null {
  return pricingPages[slug] ?? null
}

export const comparePages: Record<string, ComparePageContent> = {
  'seo-vs-geo-vs-aeo': {
    slug: 'seo-vs-geo-vs-aeo',
    title: 'SEO、GEO、AEO 差別｜先做共同基礎再談平台',
    h1: 'SEO、GEO、AEO 的共同基礎與差別',
    description:
      'Google 將 GEO、AEO 視為搜尋體驗優化的一部分。本頁比較常用名稱、平台與量測方式，不販售無官方依據的特殊 AI Schema。',
    keywords: ['SEO vs GEO', 'SEO GEO AEO 比較', 'SEO GEO AEO 比較表', '搜尋優化比較', '三者差異比較'],
    lastModified: '2026-07-26',
    qualityTier: 'production',
    intro:
      '業界會用不同名稱描述 AI 搜尋工作，但共同前提仍是可抓取、可索引、可信且有一手價值的內容。名稱不是三份獨立預算。',
    comparisonHeaders: ['面向', 'SEO', 'GEO', 'AEO'],
    comparisonTable: [
      { feature: '完整名稱', values: ['Search Engine Optimization', 'Generative Engine Optimization', 'Answer Engine Optimization'] },
      { feature: '目標平台', values: ['Google、Bing 等傳統搜尋', 'ChatGPT、Claude、Gemini', 'Perplexity、Google AI Overview'] },
      { feature: '共同基礎', values: ['可抓取與可索引', 'SEO 基礎＋一手證據', '清楚回答＋可信來源'] },
      { feature: '主要量測', values: ['GSC 非品牌點擊與詢盤', 'AI 功能／引薦與詢盤', '答案曝光、引薦與詢盤'] },
      { feature: '特殊 AI Schema', values: ['沒有', '沒有', '沒有'] },
      { feature: '隼訊起價', values: ['NT$ 7,500 / 月', 'NT$ 12,500 / 月', '併入 GEO，不另售'] },
    ],
    sections: [
      {
        heading: '怎麼決定優先順序',
        body: '我們對客戶的建議：',
        items: [
          '先修索引、速度、網站架構與量測，這些同時影響傳統與 AI 搜尋。',
          '再投入真實案例、作者、原創資料與外部品牌實體訊號。',
          '最後分平台觀察曝光與詢盤，不用保證引用的話術判斷成效。',
        ],
      },
    ],
    faq: [
      {
        question: '只做 SEO 不做 GEO 會怎樣？',
        answer:
          'Google 的 AI 搜尋功能仍依賴搜尋索引與核心排名系統；先做好技術 SEO、內容品質與量測，就是 GEO 的共同基礎。',
      },
      {
        question: 'GEO 跟 AEO 重疊很多嗎？',
        answer:
          '高度重疊。隼訊把 AEO 視為 GEO 內容策略中的回答設計，不另售一套 FAQ 或 HowTo Schema 服務。',
      },
    ],
  },
}

export const compareSlugs = Object.keys(comparePages)

export function getComparePage(slug: string): ComparePageContent | null {
  return comparePages[slug] ?? null
}
