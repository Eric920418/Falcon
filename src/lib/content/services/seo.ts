import type { ServiceContent } from '../types'

export const seoService: ServiceContent = {
  slug: 'seo',
  title: 'SEO 搜尋引擎優化｜技術健檢、內容策略、反向連結',
  h1: 'SEO 搜尋引擎優化',
  description:
    '隼訊提供 SEO 全站健檢、關鍵字研究、內容企劃、反向連結建立、Google Search Console 監測。本頁列出實際服務內容與三種方案定價。',
  keywords: ['SEO', '搜尋引擎優化', 'SEO 公司', 'SEO 服務', 'SEO 多少錢', 'Google 排名'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  qualityTier: 'draft',
  intro:
    'SEO 是除了付費廣告之外，能長期帶來自然流量的渠道。一篇排名穩定的文章，可能連續數年每月帶來訪客。但 SEO 沒有捷徑 — 廠商承諾「一個月衝第一」幾乎都用會被 Google 懲罰的手法。',
  sections: [
    {
      heading: 'SEO 三個層面：技術、內容、權威',
      body:
        '技術 SEO 解決爬蟲能否讀取網站（站速、行動裝置、結構化資料）；內容 SEO 解決頁面是否回應使用者搜尋意圖；權威 SEO 解決外部信任度（反向連結、品牌提及）。三者缺一不可，但起手順序通常是「技術 → 內容 → 權威」。',
    },
    {
      heading: '隼訊 SEO 服務內容',
      body: '',
      items: [
        '初次健檢（Core Web Vitals、Schema、Mobile-First、爬蟲可達性）',
        '關鍵字研究與搜尋意圖分類',
        '月度內容產出（依方案 4-15 篇）',
        '反向連結建立（白帽手法、不買垃圾連結）',
        'GSC + GA4 監測與月度報告',
      ],
    },
  ],
  faq: [
    {
      question: 'SEO 大概多久看到效果？',
      answer:
        '已有基礎的網站約 2-3 個月可見排名變化；新網站 4-6 個月。任何承諾「一個月衝第一名」幾乎都使用會被 Google 懲罰的手法，請避開。',
    },
    {
      question: '為什麼有些 SEO 廠商更便宜？',
      answer:
        '便宜的常見手法：用 AI 大量生成低品質內容、買垃圾外鏈、把舊文章換標題重發。短期可能看到變化，但 6-12 個月內會被 Google 演算法懲罰。我們不採用這些做法，所以無法做到極低價。',
    },
    {
      question: 'SEO 跟 Google Ads 該怎麼分配？',
      answer:
        '我們常給的建議：用 Ads 快速測試哪些關鍵字真的能帶來成交，再把這些關鍵字交給 SEO 長期經營。Ads 停了流量歸零，SEO 排名穩定後可維持數年。',
    },
    {
      question: 'AI 搜尋會取代 Google 嗎？SEO 還有意義嗎？',
      answer:
        'Google 仍是主要流量來源，但 AI 搜尋使用率上升中。我們的做法是同一份內容同時優化 SEO 與 GEO，避免重複投資。',
    },
  ],
  pricing: [
    {
      name: '基礎 SEO',
      price: '30,000',
      unit: '月',
      includes: ['月度健檢報告', '4 篇 SEO 內容（每篇 1500+ 字）', '技術 SEO 修正', 'GSC 監測'],
      bestFor: '中小企業、單一服務領域',
    },
    {
      name: '進階 SEO',
      price: '60,000',
      unit: '月',
      includes: ['8 篇深度內容', '反向連結建立（每月 5 個）', '競品分析', '雙週優化會議'],
      bestFor: '中大型企業、競爭較激烈的產業',
    },
    {
      name: '企業 SEO',
      price: '120,000',
      unit: '月',
      includes: ['15+ 篇內容', 'PR + 媒體外鏈（每月 2-3 篇）', '專屬 SEO 顧問', '即時報告儀表板'],
      bestFor: '上市櫃公司、競爭極激烈的產業',
    },
  ],
  serviceType: '搜尋引擎優化',
  priceMin: '30000',
  priceUnit: '月',
}
