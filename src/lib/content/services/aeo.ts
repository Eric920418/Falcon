import type { ServiceContent } from '../types'

export const aeoService: ServiceContent = {
  slug: 'aeo',
  title: 'AEO 答案引擎優化｜成為 Perplexity、Google AI Overview 首選來源',
  h1: 'AEO 答案引擎優化 — 不只被搜尋到，更要成為「答案」',
  description:
    'AEO（Answer Engine Optimization）讓你的品牌成為 Perplexity、Google AI Overview、Bing Copilot 等答案引擎的首選引用來源。隼訊提供完整 AEO 服務，建立品牌權威性與精選摘要優勢。',
  keywords: ['AEO', '答案引擎優化', 'Answer Engine Optimization', 'Perplexity 排名', 'Google AI Overview', '精選摘要'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  intro:
    '當 Google 用 AI Overview 直接回答用戶問題、Perplexity 列出 3 個來源網站、Bing Copilot 給出整合答案 — 排第 11 名跟排第 100 名沒差別，能不能被「引用」才是關鍵。AEO 就是讓你的品牌進入這個「黃金引用位」的策略。',
  sections: [
    {
      heading: 'AEO vs SEO vs GEO 的差別',
      body:
        '三者的目標不同：SEO 是「進入前 10 名」，GEO 是「被 ChatGPT/Claude 等對話式 AI 引用」，AEO 是「成為答案引擎的直接引用來源（通常是 3 個來源之一）」。AEO 更關注內容的「可引用性」：明確的答案、結構化的格式、可驗證的數據。',
    },
    {
      heading: 'AEO 的核心優化點',
      body: '答案引擎喜歡引用具有以下特徵的內容：',
      items: [
        '直接回答問題的明確段落（不要繞圈、不要鋪陳）',
        '結構化的 FAQPage、HowTo schema',
        '具體數據與來源引用（增加可信度）',
        '簡潔有力的句子（適合摘錄）',
        '主題權威性訊號（同主題大量深度內容）',
        '快速載入（答案引擎優先選 LCP < 2.5s 的站）',
      ],
    },
    {
      heading: '隼訊 AEO 服務內容',
      body: '我們不只做 schema 標記，更從內容結構面重新打造你的網站：',
      items: [
        '答案優化稽核（盤點你的網站哪些頁面有機會成為「答案」）',
        'FAQ schema 完整部署（每頁針對 5-10 個高頻問題）',
        'HowTo schema（步驟化內容，答案引擎最愛）',
        '精選摘要優化（位置 0 / Featured Snippet）',
        'Speakable schema（語音搜尋優化）',
        'Knowledge Panel 申請（建立品牌實體）',
      ],
    },
    {
      heading: 'AEO 適合的產業',
      body: '所有需要回答「客戶常見問題」的產業都適合 AEO：',
      items: [
        '專業服務（法律、會計、醫療、顧問）— 客戶決策前大量提問',
        '產品教學（軟體、3C、設備）— 大量 how-to 搜尋',
        'B2B（企業客戶查資料前必先問 AI）',
        '高客單價產品 / 服務（買前研究行為密集）',
      ],
    },
  ],
  howTo: {
    name: 'AEO 優化的 5 個步驟',
    description: '讓你的內容被答案引擎優先引用',
    steps: [
      { name: '問題盤點', text: '用 Ahrefs、AlsoAsked 找出產業前 100 個高搜尋量問題' },
      { name: '內容重構', text: '為每個問題寫 50-100 字的精準答案 + 1500 字延伸說明' },
      { name: 'Schema 部署', text: 'FAQPage、HowTo、QAPage、Speakable schema 完整加入' },
      { name: '權威建立', text: '取得專家背書、引用權威來源、加入作者 Person schema' },
      { name: '監測引用', text: '每週測試 Perplexity / Google AI 是否引用你的內容' },
    ],
    totalTime: 'P60D',
    estimatedCost: { value: '120000', currency: 'TWD' },
  },
  faq: [
    {
      question: 'AEO 跟 GEO 差在哪？要兩個都做嗎？',
      answer: 'AEO 針對「答案引擎」（直接給答案 + 列來源，如 Perplexity、Google AI Overview），GEO 針對「生成式 AI」（對話式回答，如 ChatGPT、Claude）。兩者重疊約 60%，建議整合執行，隼訊提供 SEO + GEO + AEO 三合一方案。',
    },
    {
      question: 'AEO 多久看到效果？',
      answer: '比 SEO 快。FAQ schema 加上後通常 2-4 週內 Google Search Console 會出現 FAQ rich result 數據。Perplexity 引用速度更快，1-2 週可見效果。完整 AEO 戰略 2-3 個月可看到顯著改變。',
    },
    {
      question: 'AEO 一個月多少錢？',
      answer: '隼訊 AEO 起價 4 萬/月。包含 schema 完整部署、FAQ 內容優化（每月 30-50 題）、月度引用報告。整合 SEO + GEO + AEO 三合一方案約 8-10 萬/月。',
    },
    {
      question: '我網站已經有 FAQ 區，還需要做 AEO 嗎？',
      answer: '需要。多數網站的 FAQ 沒有 schema 標記（Google 看不到）、問題沒對應真實搜尋查詢、答案太行銷化（答案引擎不愛引用）。AEO 是把 FAQ 從「裝飾」變成「流量來源」。',
    },
  ],
  pricing: [
    {
      name: '基礎 AEO 方案',
      price: '40,000',
      unit: '月',
      includes: ['全站 FAQ schema 部署', '每月 20 題答案優化', '基礎權威訊號建立', '月度引用報告'],
      bestFor: '中小企業、想快速進入答案引擎',
    },
    {
      name: '進階 AEO 方案',
      price: '80,000',
      unit: '月',
      includes: ['深度 HowTo 內容（10 篇 / 月）', 'Knowledge Panel 申請', '專家背書建立', '即時引用監測'],
      bestFor: '專業服務業、權威品牌建立',
    },
  ],
  cta: '想看看你的內容能不能成為 AI 的「答案」？預約 AEO 健診',
  serviceType: '答案引擎優化',
  priceMin: '40000',
  priceUnit: '月',
}
