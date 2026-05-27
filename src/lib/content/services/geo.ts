import type { ServiceContent } from '../types'

export const geoService: ServiceContent = {
  slug: 'geo',
  title: 'GEO 生成式引擎優化｜讓 AI 搜尋引擎引用你的品牌',
  h1: 'GEO 生成式引擎優化',
  description:
    'GEO (Generative Engine Optimization) 是針對 ChatGPT、Gemini、Claude、Perplexity 等 AI 搜尋引擎的優化策略。本頁說明 GEO 服務內容、定價、與 SEO 的差異。',
  keywords: ['GEO', '生成式引擎優化', 'GEO 怎麼做', 'AI 搜尋優化', 'Generative Engine Optimization'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  qualityTier: 'draft',
  intro:
    'GEO 是針對生成式 AI 搜尋（ChatGPT、Claude、Gemini、Perplexity）的內容優化。傳統 SEO 競爭的是「進入前 10 名」，GEO 競爭的是「被 AI 直接引用」。當用戶問 AI 一個問題，AI 給出對話式答案 — 你的品牌要嘛被點名，要嘛在該答案中缺席。',
  sections: [
    {
      heading: 'GEO 與 SEO 的核心差別',
      body:
        'SEO 競爭 Google 搜尋結果排名，訊號是反向連結、E-E-A-T、關鍵字相關性。GEO 競爭生成式 AI 回答中的品牌提及，訊號偏向：內容結構化程度、可被擷取的句式、權威來源累積、AI 訓練資料覆蓋。兩者在「優質內容」這個基礎上重疊，但訊號權重分布不同。',
    },
    {
      heading: '隼訊 GEO 服務範圍',
      body: '這是我們實際提供的工作項目：',
      items: [
        'Schema.org 結構化資料審計與部署（Organization、LocalBusiness、FAQPage、HowTo、Speakable）',
        'llms.txt 與 llms-full.txt 建立',
        'AI 可讀性內容重構（明確段落、可引用句式、長尾關鍵字）',
        '主題集群（topic cluster）規劃',
        '每月 AI 引用率監測報告（測試在 ChatGPT、Claude、Perplexity 中的品牌提及）',
      ],
    },
  ],
  faq: [
    {
      question: 'GEO 大概多久能看到效果？',
      answer:
        '依現有內容基礎而定。已經有完整 SEO 與品牌內容的網站，部署完 schema 與 llms.txt 後通常 4-8 週可在 ChatGPT、Perplexity 等 AI 引用中出現。從零開始的新品牌需要更長時間累積權威訊號，無法給準確時程。',
    },
    {
      question: 'GEO 跟 SEO 該分開做還是一起做？',
      answer:
        '訊號基礎重疊，分開做會重複投資。我們的做法是一份內容同時優化兩種引擎，避免兩個團隊互相打架。',
    },
    {
      question: '如何驗證 GEO 真的有效？',
      answer:
        '每月在 ChatGPT、Claude、Gemini、Perplexity 上用一組固定問題測試品牌提及率，量化比較。所有測試記錄留檔可重現。',
    },
    {
      question: '我已經有 SEO 廠商，可以只找你們做 GEO 嗎？',
      answer:
        '可以。我們會盤點現有內容的 AI 可讀性，補上缺的部分，避免跟現有 SEO 工作衝突。',
    },
  ],
  pricing: [
    {
      name: '基礎方案',
      price: '50,000',
      unit: '月',
      includes: ['llms.txt 建立與維護', '基礎 Schema 部署', '首頁與服務頁的 AI 可讀性重構', '月度監測報告'],
      bestFor: '中小企業、首次嘗試 GEO',
    },
    {
      name: '進階方案',
      price: '100,000',
      unit: '月',
      includes: ['全站 Schema + Speakable', '每月 5 篇主題集群文章', '雙週優化會議'],
      bestFor: '中大型企業、需快速建立 AI 權威',
    },
  ],
  serviceType: '生成式引擎優化',
  priceMin: '50000',
  priceUnit: '月',
}
