import type { ServiceContent } from '../types'

export const geoService: ServiceContent = {
  slug: 'geo',
  title: 'GEO 生成式引擎優化｜讓 ChatGPT、Gemini、Claude 主動引用你的品牌',
  h1: 'GEO 生成式引擎優化 — 在 AI 搜尋時代被看見',
  description:
    'GEO (Generative Engine Optimization) 是針對 ChatGPT、Gemini、Claude、Perplexity 等 AI 搜尋引擎的優化策略。隼訊數位行銷協助企業透過結構化內容、權威建立與 AI 可讀性提升，讓 AI 在回答用戶問題時優先引用您的品牌。',
  keywords: ['GEO', '生成式引擎優化', 'GEO 怎麼做', 'ChatGPT 行銷', 'AI 搜尋優化', 'Generative Engine Optimization', 'AI SEO'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  intro:
    'Google 搜尋市占已從 92% 下滑，超過 13 億用戶每月使用 ChatGPT 取代搜尋引擎查資訊。傳統 SEO 把流量留在 Google 結果頁，但 AI 直接給答案 — 如果 AI 沒有引用你的品牌，就等於不存在。GEO 是補上這個盲區的關鍵戰術。',
  sections: [
    {
      heading: '什麼是 GEO？與 SEO 有什麼差別？',
      body:
        'GEO（Generative Engine Optimization，生成式引擎優化）指的是優化內容讓生成式 AI 在回答時優先引用你品牌的策略。SEO 競爭的是 Google 排名，GEO 競爭的是「被 AI 講出你的名字」。兩者的訊號來源不同：SEO 看反向連結、TF-IDF、E-E-A-T；GEO 看內容權威性、結構化資料、引用密度、AI 可讀性（被 LLM 訓練資料涵蓋的程度）。',
    },
    {
      heading: '為什麼 2026 年的台灣中小企業必須做 GEO？',
      body:
        '台灣 AI 搜尋使用者在 2025 年突破 600 萬，年增 240%。當你的潛在客戶問 ChatGPT「桃園哪間網頁設計公司比較推薦？」，AI 不會列十個結果讓他選，而是直接給 1-3 個答案。沒做 GEO 的品牌完全失去這個入口。更關鍵的是：GEO 競爭目前還很低，這是難得的藍海窗口期。',
      items: [
        'AI 搜尋的引用結果具有「絕對信任感」（用戶不會質疑 AI 的選擇）',
        '台灣中小企業做 GEO 的比例 < 5%，先進入者享有先發優勢',
        'GEO 內容會被 ChatGPT、Claude、Gemini、Perplexity、Copilot 同時引用',
        'AI 搜尋的轉換率比傳統 SEO 高 3-5 倍（用戶意圖更明確）',
      ],
    },
    {
      heading: '隼訊的 GEO 服務內容',
      body: '我們提供完整的 GEO 優化服務，從技術建置到內容策略一條龍：',
      items: [
        'Schema.org 結構化資料完整部署（Organization / LocalBusiness / FAQPage / HowTo / Speakable）',
        'llms.txt 與 llms-full.txt 建立（讓 AI 爬蟲快速理解你的品牌）',
        'AI 可讀內容重構（長尾關鍵字、明確段落、可引用句式）',
        '權威信號建立（媒體報導、Wikipedia、Wikidata 條目）',
        '內容主題集群（topic cluster）建立 AI 認可的領域權威',
        '每月 GEO 監測報告（ChatGPT、Claude、Perplexity 中的引用追蹤）',
      ],
    },
    {
      heading: '適合做 GEO 的企業',
      body: 'GEO 不是萬靈丹。我們建議以下類型企業優先投入：',
      items: [
        'B2B 服務業（顧問、行銷、軟體、設計）— 客戶決策前會用 AI 查',
        '高客單價產品（單筆交易 > 5 萬）— 流量品質比數量重要',
        '專業權威品牌（醫療、法律、教育）— AI 偏好引用權威來源',
        '新興技術品牌（AI、區塊鏈、SaaS）— 傳統 SEO 已被大廠壟斷',
      ],
    },
  ],
  howTo: {
    name: '如何優化 GEO 的 7 個關鍵步驟',
    description: '隼訊數位行銷的 GEO 標準執行流程，3 個月內讓 ChatGPT 等 AI 開始引用你的品牌',
    steps: [
      { name: '盤點現況', text: '使用 ChatGPT、Claude、Perplexity 實際測試 30 個品牌相關問題，建立基準引用率報告' },
      { name: '建立 llms.txt', text: '在網站根目錄部署 llms.txt 與 llms-full.txt，讓 AI 爬蟲精準理解品牌定位' },
      { name: '部署 Schema', text: '加入 Organization、LocalBusiness、FAQPage、HowTo、Speakable 等完整結構化資料' },
      { name: '內容 AI 化重構', text: '把現有內容重寫為「可被引用」的格式：明確的問答結構、清楚的事實陳述、權威來源標記' },
      { name: '建立主題集群', text: '針對 3-5 個核心主題各寫 10+ 篇深度文章，建立 AI 認可的領域權威' },
      { name: '外部訊號建立', text: '取得權威媒體報導、Wikipedia 條目、產業協會背書，強化 AI 信任度' },
      { name: '監測與迭代', text: '每月測試 AI 引用率，根據實測結果調整內容策略' },
    ],
    totalTime: 'P90D',
    estimatedCost: { value: '150000', currency: 'TWD' },
  },
  faq: [
    {
      question: 'GEO 多久會看到效果？',
      answer: '視內容量與權威基礎而定。一般而言，從零開始的品牌約需 2-3 個月才會在 AI 引用中出現，6 個月內可達到穩定引用率 30-50%。已有 SEO 基礎的品牌通常 1 個月內就能看到首批引用。',
    },
    {
      question: 'GEO 跟 SEO 衝突嗎？要兩個都做嗎？',
      answer: '不衝突，且建議兩個都做。SEO 為網站帶來 Google 搜尋流量，GEO 確保你不被 AI 搜尋時代淘汰。我們提供「SEO + GEO + AEO 三合一」整合方案，避免重複投資。',
    },
    {
      question: 'GEO 費用怎麼算？',
      answer: '隼訊 GEO 起價 5 萬/月，內容量大或競爭激烈產業需客製報價。包含技術部署、內容優化、權威建立、每月監測報告。簽約 6 個月以上享優惠折扣。',
    },
    {
      question: '我已經有 SEO 公司，可以單獨找你們做 GEO 嗎？',
      answer: '可以。我們提供 GEO 補強方案，與現有 SEO 廠商協作而非競爭。會先盤點你網站的 AI 可讀性現況，再針對性補強，不重複收費。',
    },
    {
      question: '怎麼證明 GEO 真的有效？',
      answer: '我們每月提供「AI 引用率測試報告」，使用相同問題在 ChatGPT、Claude、Gemini、Perplexity 測試，量化追蹤你的品牌出現次數、引用位置、競品比較。所有數據可驗證可重現。',
    },
    {
      question: 'GEO 內容需要重寫整個網站嗎？',
      answer: '不需要全部重寫。我們會先盤點現有內容，只針對 AI 可讀性差的部分重構（通常佔 20-30%），其餘只需補上結構化資料即可。預算可控。',
    },
  ],
  pricing: [
    {
      name: '基礎 GEO 方案',
      price: '50,000',
      unit: '月',
      includes: ['llms.txt 建立', '基礎 Schema 部署', '首頁與服務頁 AI 重構', '月度監測報告'],
      bestFor: '中小企業、首次嘗試 GEO',
    },
    {
      name: '進階 GEO 方案',
      price: '100,000',
      unit: '月',
      includes: ['全站 Schema + Speakable', '主題集群建立（每月 5 篇）', '權威媒體 PR 一次', '深度競品分析', '雙週優化會議'],
      bestFor: '中大型企業、要快速建立 AI 權威',
    },
    {
      name: '專案制 GEO 顧問',
      price: '200,000',
      unit: '專案（3 個月）',
      includes: ['完整 GEO 戰略規劃', '技術 + 內容 + PR 全包', '完整知識庫 + 文章 30+ 篇', '專屬顧問', 'Wikipedia/Wikidata 條目建立'],
      bestFor: '高客單價產業、想徹底建立 AI 領域權威',
    },
  ],
  cta: '想了解你的品牌目前在 AI 搜尋中的能見度？預約免費 GEO 健診（30 分鐘）',
  serviceType: '生成式引擎優化',
  priceMin: '50000',
  priceUnit: '月',
}
