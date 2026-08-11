import type { PricingPageContent, ComparePageContent } from './types'
import { primaryPriceDefinitions } from './price-catalog'

const lastModified = '2026-08-11'

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
      sections: [
        {
          heading: `${definition.name}正式報價怎麼形成？`,
          body:
            '起價用來說明最小可交付範圍，正式報價則從目標、現況、必要整合與驗收方式往回拆解。隼訊會把一次性建置、持續性費用及第三方用量分開，讓企業能比較總持有成本，而不是只看第一期付款。',
          items: [
            '先確認商業目標、主要使用者與這次必須解決的問題',
            '盤點既有網站、帳號、資料、追蹤工具與外部系統',
            '把交付項目、修改輪次、驗收條件與不包含範圍寫入報價',
            '涉及主機、模型、廣告或其他第三方費用時，獨立列出計價單位',
          ],
        },
        {
          heading: '哪些條件會改變價格？',
          body:
            '相同服務名稱可能對應完全不同的工程與內容範圍。以下因素會在需求盤點後逐項確認，不會用一個最低價格涵蓋所有情境。',
          items: definition.factors,
        },
        {
          heading: '比較報價時不要只看總價',
          body:
            `請確認各方案是否包含${definition.scope.replace(/[。；]$/, '')}、後續維護、資料移交及成效量測。若一份報價只列成果名稱，另一份已列出執行範圍、限制和驗收，兩者不能只用總價直接比較。`,
        },
      ],
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
    lastModified: '2026-08-11',
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
        heading: '三個名稱分別解決什麼問題？',
        body:
          'SEO 是讓網站能被搜尋引擎理解、索引並在相關查詢中競爭；GEO 是業界用來描述品牌與內容在生成式搜尋回答中的可見度；AEO 則偏向把內容整理成能直接回答問題的寫作與資訊設計方法。Google 沒有另外提供 GEO 或 AEO 的收錄通道，因此三者不能被包裝成互不相干的三套技術。',
      },
      {
        heading: '使用情境與量測方式',
        body:
          '同一份內容可能同時出現在一般搜尋結果、AI Overview、AI Mode 或其他 AI 搜尋平台，但每個平台的呈現與可取得資料不同。先定義使用者要完成的決策，再選擇觀察指標。',
        table: {
          caption: '依使用者情境選擇主要工作與領先指標',
          headers: ['情境', '優先工作', '主要觀察'],
          rows: [
            ['使用者搜尋服務或比較廠商', '技術 SEO、服務頁、案例、價格與轉換路徑', '非品牌曝光、點擊、合格詢盤'],
            ['使用者向 AI 詢問方案與推薦', '可索引內容、一手證據、清楚來源與品牌實體', 'AI 引薦、案例瀏覽、詢盤來源'],
            ['使用者詢問明確問題', '答案先行、步驟、限制、表格與相關內鏈', '長尾查詢、引用頁面、後續行動'],
          ],
        },
      },
      {
        heading: '怎麼決定優先順序',
        body: '我們對客戶的建議：',
        items: [
          '先修索引、速度、網站架構與量測，這些同時影響傳統與 AI 搜尋。',
          '再投入真實案例、作者、原創資料與外部品牌實體訊號。',
          '最後分平台觀察曝光與詢盤，不用保證引用的話術判斷成效。',
        ],
      },
      {
        heading: '採購時要避開哪些說法？',
        body:
          '把 llms.txt、FAQPage、HowTo 或所謂「AI 專用 Schema」說成取得引用資格，是不符合 Google 官方文件的包裝。結構化資料仍有助於描述頁面實體及支援特定搜尋功能，但必須與畫面內容一致，也不能保證 rich result、排名或 AI 引用。',
        items: [
          '保證幾週內被 AI 引用或固定排名',
          '沒有說明資料來源就宣稱 AI 曝光成長',
          '把爬蟲可存取等同一定收錄或一定引用',
          '將同一份 SEO 基礎工作重複包裝成三份費用',
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
    references: [
      {
        name: 'AI features and your website',
        url: 'https://developers.google.com/search/docs/appearance/ai-features',
        publisher: 'Google Search Central',
        updatedAt: '2025-12-10',
      },
      {
        name: 'Creating helpful, reliable, people-first content',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        publisher: 'Google Search Central',
      },
      {
        name: 'How are you performing on Google?',
        url: 'https://support.google.com/webmasters/answer/10268906',
        publisher: 'Google Search Console Help',
      },
    ],
  },
}

export const compareSlugs = Object.keys(comparePages)

export function getComparePage(slug: string): ComparePageContent | null {
  return comparePages[slug] ?? null
}
