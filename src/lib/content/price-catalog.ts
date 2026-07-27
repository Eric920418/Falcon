import type { PriceDefinition } from './types'

export const priceCatalog: Record<string, PriceDefinition> = {
  'web-development': {
    serviceSlug: 'web-development',
    pricingSlug: 'web-development',
    name: '網站與系統開發',
    from: 20000,
    currency: 'TWD',
    unit: '專案',
    scope: '企業形象官網起價；電商與客製系統依功能、資料與整合複雜度報價。',
    factors: ['頁面與流程數量', '後台與權限需求', '金流／物流／第三方 API', '資料移轉與維運範圍'],
    tiers: [
      {
        name: '形象官網',
        price: '20,000',
        unit: '專案起',
        includes: ['5–10 頁客製化設計', '響應式介面', 'CMS 後台', 'SEO 基礎部署', '聯絡表單'],
        bestFor: '企業官網、專業服務與個人品牌',
      },
      {
        name: '電商平台',
        price: '45,000',
        unit: '專案起',
        includes: ['商品與購物車', '會員與訂單後台', '金流串接', '物流串接', 'SEO 基礎部署'],
        bestFor: '品牌電商與 D2C',
      },
      {
        name: '客製化系統',
        price: '75,000',
        unit: '專案起',
        includes: ['需求與資料建模', '客製流程', 'API 與第三方整合', '測試與部署', '原始碼交付'],
        bestFor: '企業內部系統、SaaS 與複雜流程',
      },
    ],
  },
  'ai-tools': {
    serviceSlug: 'ai-tools',
    pricingSlug: 'ai-development',
    name: 'AI 工具開發',
    from: 30000,
    currency: 'TWD',
    unit: '專案',
    scope: 'AI 客服 MVP 起價；模型費、資料整理與企業系統整合另依實際需求估算。',
    factors: ['知識庫品質與數量', '模型與資料隱私要求', '外部系統整合', '人工接手與維運流程'],
    tiers: [
      {
        name: 'AI 客服 MVP',
        price: '30,000',
        unit: '專案起',
        includes: ['基礎對話介面', '小型知識庫', '網站或 LINE 單一入口', '測試與原始碼交付'],
        bestFor: '先驗證流程與使用情境',
      },
      {
        name: '客製化 AI 助理',
        price: '75,000',
        unit: '專案起',
        includes: ['客製流程', '企業系統整合', '權限與稽核', '人工接手機制', '維運交接'],
        bestFor: '有明確流程與資料整合需求的企業',
      },
    ],
  },
  seo: {
    serviceSlug: 'seo',
    pricingSlug: 'seo',
    name: 'SEO 搜尋成長',
    from: 7500,
    currency: 'TWD',
    unit: '月',
    scope: '基礎技術與內容優化起價；內容產量、網站規模與產業競爭度會影響報價。',
    factors: ['網站規模與技術債', '內容與案例素材', '產業競爭度', '報表與協作頻率'],
    tiers: [
      {
        name: 'SEO 基礎',
        price: '7,500',
        unit: '月起',
        includes: ['技術健檢', '索引與內鏈修正', '內容優先序', 'GSC／GA4 量測', '月度檢視'],
        bestFor: '已有網站、需要先修基礎問題的企業',
      },
      {
        name: 'SEO 成長',
        price: '15,000',
        unit: '月起',
        includes: ['基礎方案', '主題集群', '案例與專家內容', '競品差距分析', '雙週檢視'],
        bestFor: '需要持續內容與非品牌詢盤成長的企業',
      },
    ],
  },
  geo: {
    serviceSlug: 'geo',
    pricingSlug: 'geo',
    name: 'SEO／GEO 搜尋成長',
    from: 12500,
    currency: 'TWD',
    unit: '月',
    scope: '以 SEO 基礎、實名專業內容、案例證據與 AI 搜尋量測為主，不販售保證引用。',
    factors: ['既有索引與品牌基礎', '可公開的一手案例', '目標平台與查詢集', '外部實體訊號'],
    tiers: [
      {
        name: 'GEO 基礎',
        price: '12,500',
        unit: '月起',
        includes: ['技術 SEO 與爬蟲檢查', '實體與作者資料', '內容證據化', 'AI 引薦與查詢基準'],
        bestFor: '已有網站與真實專業素材的企業',
      },
      {
        name: '搜尋成長整合',
        price: '25,000',
        unit: '月起',
        includes: ['SEO／GEO 基礎', '案例與原創內容製作', '數位 PR 建議', 'GSC／GA4／AI 平台追蹤'],
        bestFor: '要同時經營傳統搜尋與 AI 搜尋的企業',
      },
    ],
  },
}

export const primaryPriceDefinitions = [
  priceCatalog['web-development'],
  priceCatalog['ai-tools'],
  priceCatalog.seo,
  priceCatalog.geo,
]

export function getPriceDefinition(serviceSlug: string): PriceDefinition | null {
  return priceCatalog[serviceSlug] ?? null
}
