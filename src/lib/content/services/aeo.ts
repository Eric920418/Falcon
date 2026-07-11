import type { ServiceContent } from '../types'

export const aeoService: ServiceContent = {
  slug: 'aeo',
  title: 'AEO 答案引擎優化｜成為 Perplexity、Google AI Overview 的引用來源',
  h1: 'AEO 答案引擎優化',
  description:
    'AEO（Answer Engine Optimization）讓你的網站成為 Perplexity、Google AI Overview、Bing Copilot 等答案引擎的引用來源。本頁說明我們的工作流程、定價，以及與 GEO、SEO 的差異與搭配。',
  keywords: ['AEO', '答案引擎優化', 'Answer Engine Optimization', 'AEO 優化', 'AEO 服務', 'Featured Snippet'],
  intent: 'commercial',
  lastModified: '2026-06-29',
  qualityTier: 'production',
  intro:
    '當 Google 用 AI Overview 直接回答問題、Perplexity 在答案下方列出 3 個來源網站，「進入前 10 名」已經不夠——你必須是被引用的那幾個來源之一。AEO 就是讓內容進入這個位置的策略。我們的看法是：AEO 是三者裡 CP 值最高的起點，因為它大多是把你「已經寫好的內容」加上正確的結構化標記，工時最省、見效也最快。',
  sections: [
    {
      heading: 'AEO 與 GEO 的差異',
      body:
        'AEO 針對「答案引擎」（直接給答案並列出來源網站，如 Perplexity、Google AI Overview）；GEO 針對「生成式 AI」（純對話式回答，如 ChatGPT、Claude）。兩者訊號大部分重疊，但 AEO 更注重「可引用片段」的設計：直接回答問題的明確段落、條列式結構、可驗證的數據與來源。簡單說，AEO 讓你成為被列出的來源，GEO 讓你在對話裡被點名。',
    },
    {
      heading: '隼訊 AEO 服務內容',
      body: '這是我們實際提供的工作項目：',
      items: [
        '答案引擎可引用性稽核（哪些問題對應真實搜尋、哪些段落能被直接擷取）',
        'FAQPage / HowTo / QAPage / Speakable schema 部署',
        '精選摘要（Featured Snippet）優化',
        'Knowledge Panel 申請（若品牌條件符合）',
        '月度引用率監測（Perplexity、Google AI Overview 的出現狀況）',
      ],
    },
    {
      heading: '答案膠囊：把結論放在段落開頭，答案引擎才抓得到',
      body:
        'AEO 有個很具體、卻常被忽略的寫法叫「答案前置」。答案引擎擷取內容時，偏好那種「一句話就把問題回答完」的段落——所以我們會把每個關鍵問題的答案，濃縮成開頭兩三句（大約四十到六十字）先給結論，再往下展開細節、條件與例外。標題盡量寫成使用者真正會問的自然問句（「AEO 要多久見效？」而不是「見效時程說明」），因為越來越多人是用整句話、甚至用講的在搜尋。這種「先答再解釋」的結構，同一份內容同時吃 Google 精選摘要、AI Overview 與 Perplexity 的引用，不必為每個平台重寫。',
    },
    {
      heading: '我們的觀點：有 FAQ 區 ≠ 做了 AEO',
      body:
        '我們最常遇到的狀況，是客戶說「我網站早就有 FAQ 了」。但展示用的 FAQ 和優化用的 FAQ 是兩回事：要被答案引擎看見，得檢查兩件事——(1) 這些問答有沒有 FAQPage schema 標記（沒有的話 Google 與 Perplexity 根本不知道那是問答）；(2) 問題本身是不是對應使用者真的會搜的查詢，而不是行銷自問自答。多數網站的 FAQ 兩項都沒過，等於白做。',
    },
    {
      heading: '我們自己就是 AEO 的實作範例',
      body:
        '你正在看的這個網站，每一個服務頁、部落格、在地頁都帶 FAQPage 與 HowTo 結構化資料，並用 Speakable 標記出可被語音助理朗讀的段落——這些正是答案引擎用來判斷「可引用」的訊號。我們把交付給客戶的標準，先套用在自己的官網上，你可以直接檢視頁面原始碼驗證。',
    },
  ],
  howTo: {
    name: '隼訊 AEO 導入流程',
    description: '我們讓一個網站成為答案引擎引用來源的實際步驟。',
    steps: [
      {
        name: '可引用性稽核',
        text: '盤點網站既有內容，找出哪些問題對應真實搜尋查詢、哪些段落結構不利於被擷取。',
      },
      {
        name: '結構化資料部署',
        text: '為問答與教學內容加上 FAQPage、HowTo、QAPage、Speakable schema，讓答案引擎能辨識並引用。',
      },
      {
        name: '答案段落重寫',
        text: '把關鍵段落改寫成「能被直接擷取」的形式：開頭一句先給答案，再展開細節，附上可驗證的事實與來源。',
      },
      {
        name: '監測與調整',
        text: '用 Search Console 追蹤 rich result 數據、定期檢查 Perplexity 與 AI Overview 的引用狀況，依結果補強內容。',
      },
    ],
    totalTime: 'P30D',
  },
  faq: [
    {
      question: 'AEO 大概多久看到效果？',
      answer:
        '比 SEO 快。FAQ schema 部署後通常 2–4 週內 Google Search Console 會出現對應的 rich result 數據；Perplexity 抓取速度更快，1–2 週可見變化。',
    },
    {
      question: '我網站已經有 FAQ 區，還需要做 AEO 嗎？',
      answer:
        '需要檢視兩件事：(1) FAQ 是否有 schema 標記（Google 才看得到）；(2) 問題本身是否對應真實搜尋查詢。多數網站的 FAQ 是「展示用」而非「優化用」，兩項通常都沒過。',
    },
    {
      question: 'AEO 跟 GEO 要分開做嗎？',
      answer:
        '訊號大部分重疊，分開做會重複投資。我們的做法是同一份內容同時優化兩種引擎；若預算有限，通常建議先從 AEO 起手，因為它多半是替既有內容加標記，成本最低。',
    },
    {
      question: 'AEO、GEO、SEO 我該先做哪一個？',
      answer:
        '若已有內容基礎，我們通常建議：先補 SEO 的技術與內容，再用 AEO 把既有內容加上 schema（低成本見效快），品牌權威累積後再長期經營 GEO。三者用同一份內容延伸，不必重複付費。',
    },
    {
      question: '什麼是 Query Fan-Out？跟 AEO 有關嗎？',
      answer:
        'Query Fan-Out 是 Google AI Overview 的運作方式之一：你問一個問題，系統會自動把它拆成好幾個相關子查詢分頭去找答案，再合成一段摘要。這代表內容只回答「主問題」還不夠，最好連相關子題（怎麼做、多少錢、有什麼風險、跟什麼比較）也一起覆蓋，被納入合成答案的機會才高。這也是我們主張用主題集群、而非單篇孤文經營 AEO 的原因。',
    },
    {
      question: '不同 AI 平台的引用偏好一樣嗎？',
      answer:
        '不完全一樣。概略觀察：ChatGPT 較常參考維基百科這類權威來源，Perplexity 很吃論壇與即時討論，Google AI Overview 則明顯看重 E-E-A-T 與既有搜尋排名。這些是目前的觀察、會隨演算法調整，所以我們不會用單一手法打天下，而是依你的目標平台調整佈局重點。',
    },
  ],
  pricing: [
    {
      name: '基礎方案',
      price: '20,000',
      unit: '月',
      includes: ['全站 FAQ schema 部署', '每月 20 題答案優化', '月度引用率報告'],
      bestFor: '中小企業、想快速進入答案引擎',
    },
    {
      name: '進階方案',
      price: '40,000',
      unit: '月',
      includes: ['深度 HowTo 內容（10 篇 / 月）', 'Knowledge Panel 申請', '即時引用監測'],
      bestFor: '專業服務業、需建立權威',
    },
  ],
  serviceType: '答案引擎優化',
  priceMin: '20000',
  priceUnit: '月',
}
