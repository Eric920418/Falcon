import type { ServiceContent } from '../types'

export const aeoService: ServiceContent = {
  slug: 'aeo',
  title: 'AEO 答案引擎優化｜成為 Perplexity、Google AI Overview 的引用來源',
  h1: 'AEO 答案引擎優化',
  description:
    'AEO（Answer Engine Optimization）讓你的網站成為 Perplexity、Google AI Overview、Bing Copilot 等答案引擎的引用來源。本頁說明服務內容、定價與 GEO 的差異。',
  keywords: ['AEO', '答案引擎優化', 'Answer Engine Optimization', 'Perplexity 排名', 'Google AI Overview'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  qualityTier: 'draft',
  intro:
    '當 Google 用 AI Overview 直接回答問題、Perplexity 列出 3 個來源網站，「進入前 10 名」已經不夠 — 必須成為被引用的那 3 個來源。AEO 是讓內容進入這個位置的策略。',
  sections: [
    {
      heading: 'AEO 與 GEO 的差異',
      body:
        'AEO 針對「答案引擎」（直接給答案 + 列出來源網站，如 Perplexity、Google AI Overview）；GEO 針對「生成式 AI」（純對話式回答，如 ChatGPT、Claude）。AEO 更注重內容的「可引用片段」設計，例如直接回答問題的明確段落、條列式結構、可驗證的數據。',
    },
    {
      heading: '隼訊 AEO 服務內容',
      body: '',
      items: [
        '答案引擎可引用性稽核',
        'FAQPage / HowTo / QAPage / Speakable schema 部署',
        '精選摘要（Featured Snippet）優化',
        'Knowledge Panel 申請（若品牌條件符合）',
        '月度引用率監測（Perplexity、Google AI Overview）',
      ],
    },
  ],
  faq: [
    {
      question: 'AEO 大概多久看到效果？',
      answer:
        '比 SEO 快。FAQ schema 部署後通常 2-4 週內 Google Search Console 會出現對應的 rich result 數據。Perplexity 抓取速度更快，1-2 週可見變化。',
    },
    {
      question: '我網站已經有 FAQ 區，還需要做 AEO 嗎？',
      answer:
        '需要檢視兩件事：(1) FAQ 是否有 schema 標記（Google 才看得到）；(2) 問題本身是否對應真實搜尋查詢。多數網站的 FAQ 是「展示用」而非「優化用」。',
    },
    {
      question: 'AEO 跟 GEO 要分開做嗎？',
      answer:
        '訊號重疊約 60%，分開做會重複投資。我們的做法是同份內容同時優化兩種引擎。',
    },
  ],
  pricing: [
    {
      name: '基礎方案',
      price: '40,000',
      unit: '月',
      includes: ['全站 FAQ schema 部署', '每月 20 題答案優化', '月度引用率報告'],
      bestFor: '中小企業、想快速進入答案引擎',
    },
    {
      name: '進階方案',
      price: '80,000',
      unit: '月',
      includes: ['深度 HowTo 內容（10 篇 / 月）', 'Knowledge Panel 申請', '即時引用監測'],
      bestFor: '專業服務業、需建立權威',
    },
  ],
  serviceType: '答案引擎優化',
  priceMin: '40000',
  priceUnit: '月',
}
