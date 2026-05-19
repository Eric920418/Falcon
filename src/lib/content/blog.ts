import type { BlogContent } from './types'

const author = '隼訊團隊'
const datePublished = '2026-05-18'

export const blogPosts: Record<string, BlogContent> = {
  'geo-complete-guide-2026': {
    slug: 'geo-complete-guide-2026',
    title: '2026 GEO 完整指南：讓 ChatGPT、Claude 主動引用你品牌的 7 個方法',
    h1: '2026 GEO 完整指南 — 讓 AI 主動引用你品牌的 7 個方法',
    description:
      '生成式引擎優化 (GEO) 是 2026 年最被低估的成長槓桿。本文拆解 7 個讓 ChatGPT、Claude、Gemini 優先引用你品牌的具體做法。',
    keywords: ['GEO', 'GEO 怎麼做', 'GEO 完整指南', 'ChatGPT 行銷', 'AI SEO', '生成式引擎優化'],
    datePublished,
    author,
    intent: 'informational',
    intro:
      '當 13 億用戶用 ChatGPT 取代搜尋引擎查資訊，「被 AI 引用」變成新時代的「排在第一名」。但 90% 的企業還不知道 GEO 是什麼。本文用最具體的方法告訴你怎麼做。',
    toc: ['什麼是 GEO？', '為什麼 GEO 比 SEO 更重要？', '7 個讓 AI 引用你的方法', '怎麼測量 GEO 成效', '常見陷阱'],
    sections: [
      {
        heading: '什麼是 GEO？跟 SEO 差在哪？',
        body:
          'GEO（Generative Engine Optimization，生成式引擎優化）是針對 ChatGPT、Claude、Gemini、Perplexity 等生成式 AI 搜尋的優化策略。傳統 SEO 競爭的是「排名」，GEO 競爭的是「被引用」。當用戶問 ChatGPT 一個問題，AI 會直接給答案 — 你的品牌要嘛被講出來，要嘛完全不存在。',
      },
      {
        heading: '為什麼 2026 年企業必須做 GEO？',
        body: '',
        items: [
          'AI 搜尋使用率年增 240%，2025 年台灣突破 600 萬月活',
          'AI 給的答案具「絕對信任感」 — 用戶不會質疑、不會多看其他結果',
          '台灣中小企業做 GEO 的比例 < 5%，先進入者享有藍海優勢',
          'AI 搜尋轉換率比傳統 SEO 高 3-5 倍（用戶意圖明確）',
        ],
      },
      {
        heading: '方法 1：部署 llms.txt 與 llms-full.txt',
        body:
          'llms.txt 是 AI 爬蟲的「快速導覽圖」。在網站根目錄放一份 llms.txt，內容包含品牌簡介、核心服務、聯絡方式。AI 爬蟲讀到後能快速理解你品牌定位。llms-full.txt 提供更完整的可引用內容。隼訊的 llms.txt 可作為範例：https://www.falconinformation.com/llms.txt',
      },
      {
        heading: '方法 2：完整部署 Schema.org 結構化資料',
        body:
          'AI 引擎依賴 schema 理解你的網站。必備：Organization、LocalBusiness、FAQPage、HowTo、Article、Speakable。每加一個 schema，AI 引用率約提升 15-25%。',
      },
      {
        heading: '方法 3：寫「可被引用」的內容',
        body:
          'AI 喜歡引用「明確、簡潔、可驗證」的句子。把「我們提供優質的 SEO 服務」改成「隼訊 SEO 起價 30,000 元/月，包含月度健檢、4 篇深度內容、技術修正」— 後者具體、可引用、可驗證。',
      },
      {
        heading: '方法 4：建立主題集群（Topic Cluster）',
        body:
          '單一頁面難以建立 AI 權威。針對 1 個核心主題寫 10+ 篇深度文章，互相連結，AI 會把你認定為該領域權威。例如「GEO」主題下，可以寫 GEO 入門、GEO 工具、GEO 案例、GEO 報價、GEO vs SEO 等。',
      },
      {
        heading: '方法 5：取得權威來源引用',
        body:
          'AI 訓練資料來自網路上的「被引用次數」。被知名媒體報導、被產業 wiki 收錄、被學術論文引用 — 這些訊號讓 AI 把你列入信任名單。具體做法：發新聞稿、申請 Wikipedia 條目、投稿產業媒體。',
      },
      {
        heading: '方法 6：優化 AI 可讀性',
        body: '',
        items: [
          '使用清晰的 H1 / H2 / H3 階層',
          '段落短（< 4 句）',
          '使用條列式內容（AI 易於擷取）',
          '加入 FAQ 區塊（針對高頻搜尋問題）',
          '避免過多 JavaScript 渲染（AI 爬蟲可能讀不到）',
        ],
      },
      {
        heading: '方法 7：監測與迭代',
        body:
          '每週測試 ChatGPT、Claude、Perplexity 對你品牌相關問題的回答，記錄引用率變化。發現哪些頁面被引用、哪些沒被，針對未被引用的內容做優化。',
      },
    ],
    howTo: {
      name: 'GEO 優化 30 天執行清單',
      description: '30 天內讓你網站 GEO 就緒',
      steps: [
        { name: 'Day 1-3', text: '建立 llms.txt 與 llms-full.txt，部署到網站根目錄' },
        { name: 'Day 4-7', text: '盤點現有頁面，加入完整 Schema.org 標記' },
        { name: 'Day 8-14', text: '改寫首頁與核心服務頁，提高 AI 可讀性' },
        { name: 'Day 15-21', text: '建立 5-10 篇主題集群文章' },
        { name: 'Day 22-28', text: '發新聞稿、申請 Wikidata 條目' },
        { name: 'Day 29-30', text: '在 ChatGPT/Claude/Perplexity 測試引用率，記錄基準' },
      ],
    },
    faq: [
      { question: 'GEO 多久看到效果？', answer: '部署完整 GEO 戰略後，通常 2-3 個月可在 ChatGPT、Claude 等 AI 引用中看到品牌出現。已有 SEO 基礎的網站約 1 個月即可。' },
      { question: '我自己能做 GEO 嗎？', answer: '部分可以。llms.txt、基礎 schema 可自行部署。但主題集群內容生產、權威建立、Wikipedia 條目這些需要團隊長期投入。' },
      { question: 'GEO 跟 SEO 衝突嗎？', answer: '不衝突。優化 GEO 同時會強化 SEO（schema、內容深度都共用）。我們建議三合一：SEO + GEO + AEO。' },
    ],
    relatedServices: ['geo', 'aeo', 'seo'],
    cta: '想知道你的網站目前在 AI 搜尋中的能見度？預約免費 GEO 健診',
  },
  'seo-vs-geo-vs-aeo': {
    slug: 'seo-vs-geo-vs-aeo',
    title: 'SEO vs GEO vs AEO 完整比較：差異、應用場景、優先順序',
    h1: 'SEO、GEO、AEO 三者差別與優先順序',
    description: '搞混 SEO、GEO、AEO？本文用最簡單方式解釋三者差別、各自適合場景、預算有限時該先做哪一個。',
    keywords: ['SEO GEO AEO', 'SEO vs GEO', 'AEO 是什麼', 'GEO 是什麼', '搜尋優化差異'],
    datePublished,
    author,
    intent: 'informational',
    intro: '行銷圈最近的新縮寫太多，光是搜尋優化就有 SEO、GEO、AEO 三種。它們不是同義詞、不能互相取代。本文一次講清楚。',
    sections: [
      {
        heading: '三者的核心差異',
        body: '',
        items: [
          'SEO (Search Engine Optimization)：競爭 Google、Bing 等「傳統搜尋引擎」的關鍵字排名',
          'GEO (Generative Engine Optimization)：競爭 ChatGPT、Claude、Gemini 等「生成式 AI」的品牌引用',
          'AEO (Answer Engine Optimization)：競爭 Perplexity、Google AI Overview 等「答案引擎」的精選答案',
        ],
      },
      {
        heading: '視覺化對比',
        body: '把這三者想像成三種搜尋場景：用戶在 Google 看到 10 條結果（SEO）；用戶問 ChatGPT 拿到對話式回答（GEO）；用戶用 Perplexity 拿到 3 條來源摘要（AEO）。',
      },
      {
        heading: '預算有限時的優先順序',
        body: '隼訊建議的優先順序：',
        items: [
          '預算 3 萬/月以下：先做 SEO（最成熟、最可預測）',
          '預算 5 萬/月：SEO 70% + GEO 30%（為 AI 時代鋪路）',
          '預算 10 萬/月以上：SEO + GEO + AEO 三合一（享有複合效益）',
        ],
      },
      {
        heading: '哪些產業該優先做哪一個？',
        body: '',
        items: [
          '本地服務（餐飲、診所）：SEO + Google My Business 優先',
          '專業服務（顧問、律師）：GEO + AEO 優先（客戶會問 AI）',
          '高客單價 B2B：三合一全做（決策週期長、研究行為密集）',
          '電商：SEO + AEO（商品搜尋意圖明確）',
        ],
      },
    ],
    faq: [
      { question: 'GEO 跟 AEO 重疊很多嗎？', answer: '約 60% 重疊。兩者都需要結構化資料、權威性、可引用內容。差別在 GEO 偏向「對話式 AI 引用」，AEO 偏向「答案引擎的精選來源」。整合執行最有效率。' },
      { question: '只做 SEO，不做 GEO/AEO 行嗎？', answer: '短期可以，2-3 年內會被淘汰。Google 自己已推出 AI Overview，傳統 SEO 點擊率 2024 年已下降 30%。' },
    ],
    relatedServices: ['seo', 'geo', 'aeo'],
    cta: '想知道你公司該優先做哪一個？預約 30 分鐘策略諮詢',
  },
  'chatgpt-marketing-techniques': {
    slug: 'chatgpt-marketing-techniques',
    title: 'ChatGPT 行銷實戰：10 個讓 AI 推薦你品牌的內容技巧',
    h1: 'ChatGPT 行銷：10 個讓 AI 主動推薦你品牌的技巧',
    description: 'ChatGPT 已是月活 13 億的搜尋入口。本文教你 10 個讓 ChatGPT 主動推薦你品牌的具體技巧。',
    keywords: ['ChatGPT 行銷', 'ChatGPT 推薦', 'AI 行銷', 'ChatGPT 品牌曝光', 'AI 搜尋優化'],
    datePublished,
    author,
    intent: 'informational',
    intro: '當潛在客戶問 ChatGPT 「桃園哪間網頁設計公司比較推薦？」，你希望 AI 講出你的名字。本文是達成這個目標的具體手冊。',
    sections: [
      {
        heading: '為什麼 ChatGPT 會「推薦」品牌？',
        body: 'ChatGPT 的推薦不是隨機的，背後有 3 個訊號：(1) 訓練資料中的品牌提及頻率、(2) 網站上的結構化資料、(3) 即時搜尋（GPT-4 Search）讀取的最新網頁內容。優化這三個訊號 = 提高被推薦機率。',
      },
      {
        heading: '10 個具體技巧',
        body: '',
        items: [
          '技巧 1：寫包含「最佳」「推薦」「比較」等關鍵字的長文（AI 抓 ranking 內容）',
          '技巧 2：在文章中明確列出品牌名（提高品牌提及訊號）',
          '技巧 3：建立 Wikipedia / Wikidata 條目（GPT 訓練資料來源）',
          '技巧 4：上 G2 / Capterra 等評論平台（B2B 必備）',
          '技巧 5：取得權威媒體報導（被引用次數累積）',
          '技巧 6：發產業白皮書 PDF（GPT 會抓 PDF 內容）',
          '技巧 7：在 Reddit、Quora 上有真實討論（GPT 重視社群訊號）',
          '技巧 8：建立 YouTube 頻道並有字幕（YouTube 內容被 GPT 大量抓取）',
          '技巧 9：發英文版內容（即使主要客戶在台灣，英文內容增加全球可見性）',
          '技巧 10：監測 ChatGPT 中的品牌提及，發現缺漏立即補內容',
        ],
      },
    ],
    faq: [
      { question: '這些技巧多久看到效果？', answer: '1-3 個月內 ChatGPT 即時搜尋會抓到新內容；2-6 個月後新訓練模型釋出時，會反映到 GPT 預設知識中。' },
      { question: '小公司也能做嗎？', answer: '可以，但需要時間。優先做技巧 1、2、5、7。技巧 3（Wikipedia）難度較高，需符合「值得收錄」標準。' },
    ],
    relatedServices: ['geo', 'seo'],
    cta: '想要系統化執行 ChatGPT 行銷？預約 GEO 諮詢',
  },
  'ai-search-2026-guide': {
    slug: 'ai-search-2026-guide',
    title: 'AI 搜尋優化是什麼？2026 年中小企業必懂的搜尋新生態',
    h1: 'AI 搜尋時代：2026 年中小企業的搜尋新生態',
    description: 'ChatGPT、Perplexity、Google AI Overview 正在改寫搜尋規則。本文解釋這場變革對中小企業的衝擊與機會。',
    keywords: ['AI 搜尋', 'AI 搜尋優化', 'AI 搜尋是什麼', 'Perplexity', 'Google AI Overview'],
    datePublished,
    author,
    intent: 'informational',
    intro: '搜尋這件事 25 年來第一次大改版。Google 不再是唯一入口，ChatGPT、Perplexity、Claude 都成為新搜尋引擎。',
    sections: [
      {
        heading: 'AI 搜尋的三種型態',
        body: '',
        items: [
          '生成式 AI（ChatGPT、Claude）：對話式回答，可能引用品牌',
          '答案引擎（Perplexity、Google AI Overview）：直接給答案 + 列來源',
          'AI 增強搜尋（Bing Copilot）：傳統搜尋結果旁附 AI 摘要',
        ],
      },
      {
        heading: '對中小企業的衝擊',
        body: '',
        items: [
          '傳統 SEO 流量下降：用戶在 AI 答案頁就滿意，不再點進你網站',
          '品牌能見度兩極化：被 AI 引用的品牌曝光暴增，沒被引用的徹底消失',
          '長尾關鍵字流量轉移到 AI（用戶寧願問 ChatGPT 也不打 Google）',
          '本地搜尋（local search）受影響較小（仍依賴 Google Maps）',
        ],
      },
    ],
    faq: [
      { question: '我該完全放棄 SEO 嗎？', answer: '絕對不要。Google 仍是 80% 流量來源。但要逐步加入 GEO + AEO，避免在 AI 浪潮中被淘汰。' },
    ],
    relatedServices: ['geo', 'aeo', 'seo'],
    cta: '想了解 AI 搜尋時代你公司該如何布局？預約 1 小時策略諮詢',
  },
  'schema-org-tutorial': {
    slug: 'schema-org-tutorial',
    title: 'Schema 結構化資料完整教學：從 LocalBusiness 到 Speakable',
    h1: 'Schema.org 結構化資料完整教學',
    description: '結構化資料 (Schema.org) 是 SEO 與 GEO 的共同基石。本文用最具體方式教你部署 8 種必備 schema。',
    keywords: ['Schema.org', '結構化資料', 'JSON-LD', 'LocalBusiness schema', 'FAQ schema', 'HowTo schema'],
    datePublished,
    author,
    intent: 'informational',
    intro: 'Schema 不是「加分項」，是「基本門票」。沒有 schema 的網站在 AI 時代等於隱形。',
    sections: [
      {
        heading: '8 種必備 Schema',
        body: '',
        items: [
          'Organization：品牌身份（必備）',
          'LocalBusiness：本地商家（有實體地址必加）',
          'WebSite：搜尋框 + sitelinks',
          'FAQPage：FAQ 區塊（觸發 Google rich snippet）',
          'HowTo：步驟化內容（AI 最愛）',
          'Article：文章內容',
          'BreadcrumbList：麵包屑導航',
          'Speakable：語音搜尋優化',
        ],
      },
      {
        heading: '怎麼部署？',
        body: '在 HTML <head> 內加入 <script type="application/ld+json"> 包 JSON 物件。Next.js 用 metadata API + 動態 script tag。WordPress 用 Yoast SEO 或 Rank Math 自動產生。',
      },
    ],
    faq: [
      { question: '加錯 Schema 會被懲罰嗎？', answer: '會。Google 對「不準確的 schema」（如假評分、不存在的內容）會直接拒絕 rich results 並可能降權。本網站之前的 AggregateRating 就是錯誤示範。' },
    ],
    relatedServices: ['seo', 'geo', 'aeo'],
    cta: '想要快速部署完整 Schema？我們提供「Schema 健檢 + 部署」服務',
  },
  'perplexity-aeo-deep-dive': {
    slug: 'perplexity-aeo-deep-dive',
    title: 'Perplexity AI 怎麼讓你的品牌出現？AEO 實戰拆解',
    h1: 'Perplexity 排名策略：AEO 實戰拆解',
    description: 'Perplexity 月活破 1500 萬，是答案引擎優化 (AEO) 的指標平台。本文拆解進入 Perplexity 引用名單的具體方法。',
    keywords: ['Perplexity', 'Perplexity 排名', 'AEO 實戰', '答案引擎優化', 'Perplexity 引用'],
    datePublished,
    author,
    intent: 'informational',
    intro: 'Perplexity 不只回答問題，還會列出 3-5 個「來源」。被列為來源 = 流量 + 品牌權威。',
    sections: [
      {
        heading: 'Perplexity 引用邏輯',
        body: 'Perplexity 使用即時搜尋 + 內容摘要技術。它優先選擇：(1) 主題相關性高、(2) 內容權威（外鏈多、HTTPS、有作者）、(3) 內容結構清晰（H1/H2/FAQ）、(4) 載入快速（LCP < 2.5s）的頁面。',
      },
      {
        heading: '進入 Perplexity 引用名單的 5 個策略',
        body: '',
        items: [
          '策略 1：撰寫直接回答問題的段落（前 100 字就給答案）',
          '策略 2：FAQ schema 完整部署',
          '策略 3：建立網站權威（DA > 30 是基準）',
          '策略 4：明確的作者標記（Person schema）',
          '策略 5：定期更新內容（Perplexity 偏好新鮮內容）',
        ],
      },
    ],
    faq: [
      { question: 'Perplexity 跟 ChatGPT 差別？', answer: 'Perplexity 強調「引用來源」，每個答案都列 3-5 個來源網站。ChatGPT 是純對話式，較少引用具體網站。' },
    ],
    relatedServices: ['aeo', 'geo'],
    cta: '想讓你的品牌出現在 Perplexity 來源？預約 AEO 諮詢',
  },
  'google-ai-overview-strategy': {
    slug: 'google-ai-overview-strategy',
    title: 'Google AI Overview 排名策略：3 種內容會被優先引用',
    h1: 'Google AI Overview 排名策略：3 種會被引用的內容',
    description: 'Google AI Overview 已覆蓋 70% 搜尋查詢。被它引用 = 不用排第一名也能拿到流量。',
    keywords: ['Google AI Overview', 'AI Overview 優化', 'SGE', 'Search Generative Experience'],
    datePublished,
    author,
    intent: 'informational',
    intro: 'AI Overview 改變了 SEO 規則：你不再競爭「第一名」，而是競爭「被 AI Overview 摘錄」。',
    sections: [
      {
        heading: '會被 AI Overview 引用的 3 種內容',
        body: '',
        items: [
          '1. 直接回答型內容（用戶問什麼、文章前 100 字直接答）',
          '2. 步驟化內容（HowTo schema + 清楚編號）',
          '3. 比較表格 / 清單型內容（AI 喜歡擷取結構化資訊）',
        ],
      },
      {
        heading: '不會被引用的內容',
        body: '',
        items: [
          '行銷話術為主的內容（「我們最棒」「業界首選」）',
          '埋藏資訊的長文（重點要滑到底才出現）',
          '純圖文混排沒有純文字版本（AI 讀不到）',
          'JavaScript 渲染後才出現的內容（多數 AI 爬蟲讀不到 JS）',
        ],
      },
    ],
    faq: [
      { question: 'AI Overview 會搶走我流量嗎？', answer: '會但有解。若內容被列為來源，仍能拿到點擊。重點是「成為來源」，而不是抗拒 AI Overview。' },
    ],
    relatedServices: ['aeo', 'seo'],
    cta: '想優化 Google AI Overview 引用？預約 AEO 健診',
  },
  'website-pricing-2026': {
    slug: 'website-pricing-2026',
    title: '網站建置費用一次看懂：2026 台灣行情、隱藏成本、避雷指南',
    h1: '2026 網站建置費用完整指南',
    description: '台灣網站建置費用差距 10 倍以上。本文揭露各區間實際內容、隱藏成本、選錯廠商會發生的災難。',
    keywords: ['網站建置費用', '網頁設計費用', '網站架設多少錢', '台灣網站建置行情', '網站報價'],
    datePublished,
    author,
    intent: 'transactional',
    intro: '網站建置費用從 3 萬到 300 萬都有，差別不是「品質好不好」這麼簡單。本文揭露你該知道的所有事實。',
    sections: [
      {
        heading: '台灣網站建置費用四大區間',
        body: '',
        items: [
          'NT$ 3,000-30,000：模板網站（Wix / Strikingly）— 適合個人 / 微型企業',
          'NT$ 30,000-100,000：WordPress 套版 — 適合預算有限的中小企業',
          'NT$ 100,000-500,000：客製化開發 — 適合品牌 / 電商',
          'NT$ 500,000+：複雜系統 / 大型電商 — 適合上市櫃 / 中大型企業',
        ],
      },
      {
        heading: '隱藏成本（廠商不會告訴你的）',
        body: '',
        items: [
          '主機 / 網域年費（1,000-30,000 / 年）',
          '套件 / Plugin 授權費（特別是 WordPress 商業套件）',
          'SSL 憑證（多數含但要確認）',
          '後續維護費（通常另計，月費 3,000-30,000）',
          '修改費用（小改是否含？大改怎麼算？）',
          '搬家 / 移交費（換廠商時的「贖身費」）',
        ],
      },
      {
        heading: '怎麼避免被坑',
        body: '',
        items: [
          '原始碼歸誰所有？（合約必寫，否則綁定一輩子）',
          '主機帳號控制權？（要在你名下，不是廠商代管）',
          'CMS 後台你能不能改？（套件式網站常常你動不了）',
          'SEO 內建嗎？（Lighthouse SEO 分數應 > 90）',
          '響應式設計嗎？（手機 / 平板測試是否正常）',
          '售後保固範圍？（多久、哪些算保固、哪些另計）',
        ],
      },
    ],
    faq: [
      { question: '5 萬可以做出像樣的網站嗎？', answer: '可以，但有限制：5-8 頁靜態網站、用既有設計風格、不含複雜功能。如果想要客製化視覺、會員系統、電商、後台管理，預算建議 15 萬以上。' },
      { question: 'WordPress 真的便宜嗎？', answer: '初期便宜（套版 5-10 萬），但 5 年總成本可能比 Next.js 客製化貴。原因：plugin 月費、安全性維護、效能優化都要錢。' },
    ],
    relatedServices: ['web-development'],
    cta: '想知道你需求的精準預算？預約免費諮詢含初步報價單',
  },
  'common-seo-mistakes': {
    slug: 'common-seo-mistakes',
    title: '為什麼你的網站 SEO 沒效？10 個技術 SEO 常見錯誤',
    h1: '10 個讓你 SEO 沒效的技術錯誤',
    description: '網站 SEO 做了半年沒進展？問題可能不是內容，是技術。本文盤點 10 個最常見的技術 SEO 錯誤。',
    keywords: ['SEO 沒效果', 'SEO 錯誤', '技術 SEO', 'SEO 問題', 'SEO 排名下滑'],
    datePublished,
    author,
    intent: 'informational',
    intro: '我們接手過 30+ 家「SEO 做不出來」的客戶，9 成問題都出在技術面。',
    sections: [
      {
        heading: '10 個必檢查的技術 SEO 錯誤',
        body: '',
        items: [
          '1. 站速太慢（LCP > 4s，Google 直接降權）',
          '2. 沒有手機版（Mobile-First Indexing 時代必死）',
          '3. Robots.txt 把重要頁面擋掉（很常見的低級錯誤）',
          '4. Sitemap 沒提交或不完整',
          '5. Canonical 設錯（導致內容被視為重複）',
          '6. HTTPS 沒設或設錯',
          '7. Schema.org 沒部署',
          '8. 圖片沒 alt text（accessibility + SEO 雙重損失）',
          '9. JS 渲染導致爬蟲讀不到內容',
          '10. Internal linking 結構崩壞（孤兒頁面）',
        ],
      },
    ],
    faq: [
      { question: '我怎麼知道我中了幾項？', answer: '用 Lighthouse、Screaming Frog、Google Search Console 三項工具掃描即可知道。或預約我們的「SEO 健檢」（免費）。' },
    ],
    relatedServices: ['seo'],
    cta: '想要完整 SEO 健檢報告？預約免費健檢（48 小時內交付）',
  },
  'ai-customer-service-cost': {
    slug: 'ai-customer-service-cost',
    title: 'AI 客服系統開發成本完整解析：自建 vs SaaS 比較',
    h1: 'AI 客服系統：自建 vs SaaS 成本完整解析',
    description: 'AI 客服該自建還是用 Intercom AI、Zendesk AI？本文用具體數字比較 3 年總成本。',
    keywords: ['AI 客服', 'AI 客服費用', '聊天機器人', 'Intercom AI', 'Zendesk AI', 'AI 客服自建'],
    datePublished,
    author,
    intent: 'commercial',
    intro: 'AI 客服已從「可選」變「必備」。但選 SaaS 還是自建，3 年下來總成本差距可能達 200%。',
    sections: [
      {
        heading: 'SaaS AI 客服費用（國際品牌）',
        body: '',
        items: [
          'Intercom AI：USD 99-499/月/座位（約 NT$ 3,000-15,000/座位/月）',
          'Zendesk AI Agent：USD 50-200/月/座位',
          'Drift：USD 2,500-5,000/月（基本方案）',
          'Salesforce Einstein：USD 75/月/座位起',
        ],
      },
      {
        heading: '自建 AI 客服費用（隼訊報價）',
        body: '',
        items: [
          'MVP 開發：NT$ 120,000 一次性費用',
          'API 費用：NT$ 5,000-30,000/月（依使用量）',
          '維護費：NT$ 10,000-30,000/月（可選）',
          '3 年總成本：NT$ 60-150 萬',
        ],
      },
      {
        heading: '3 年總成本比較（10 座位）',
        body: '',
        items: [
          'Intercom AI：USD 240,000（約 NT$ 720 萬）',
          'Zendesk AI：USD 90,000（約 NT$ 270 萬）',
          '自建（隼訊）：NT$ 80-150 萬',
        ],
      },
      {
        heading: '什麼情況該選 SaaS？',
        body: '',
        items: [
          '需要立即上線（SaaS 1 週內、自建 3-4 週）',
          '團隊沒有技術維護能力',
          '客服流程很標準（不需太多客製化）',
        ],
      },
    ],
    faq: [
      { question: '自建 AI 客服真的能比 Intercom 好嗎？', answer: '功能上 80% 可以，特定客製化甚至超越。差距在現成的整合（Slack、Salesforce 等），這些自建需另外開發。' },
    ],
    relatedServices: ['ai-tools'],
    cta: '想評估你公司該自建還是用 SaaS？預約免費 AI 客服需求諮詢',
  },
}

export const blogSlugs = Object.keys(blogPosts)

export function getBlogPost(slug: string): BlogContent | null {
  return blogPosts[slug] ?? null
}

export function getAllBlogPosts(): BlogContent[] {
  return Object.values(blogPosts)
}
