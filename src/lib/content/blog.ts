import type { BlogContent } from './types'

const datePublished = '2026-05-18'
const reviewedByRole = '資深 SEO 顧問'

export const blogPosts: Record<string, BlogContent> = {
  'geo-complete-guide-2026': {
    slug: 'geo-complete-guide-2026',
    title: 'GEO 生成式引擎優化指南：技術與內容怎麼準備',
    h1: 'GEO 生成式引擎優化指南',
    description:
      '生成式引擎優化（GEO）讓 ChatGPT、Claude、Gemini 等 AI 在回答用戶問題時能引用你的品牌。本文整理隼訊實際在做的技術與內容工作。',
    keywords: ['GEO', 'GEO 怎麼做', 'GEO 完整指南', 'AI 搜尋優化', '生成式引擎優化'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'informational',
    intro:
      'GEO（Generative Engine Optimization）是針對 ChatGPT、Claude、Gemini、Perplexity 等生成式 AI 搜尋的內容優化。傳統 SEO 競爭的是 Google 排名，GEO 競爭的是「用戶問 AI 時，AI 是否會講出你的品牌」。本文是我們實際在做的工作筆記，不討論未經驗證的假設。',
    sections: [
      {
        heading: 'GEO 與 SEO 的差別',
        body:
          'SEO 訊號來自反向連結、TF-IDF、E-E-A-T 與站速等；GEO 訊號偏向結構化資料、可被擷取的句式、權威來源的引用密度、AI 訓練資料涵蓋度。兩者基礎重疊（一份好內容對兩邊都加分），但訊號權重不同。',
      },
      {
        heading: '我們執行 GEO 的工作項目',
        body: '這是隼訊接案實際在做的事，依重要性排序：',
        items: [
          '部署 llms.txt 與 llms-full.txt — AI 爬蟲的「快速簡介」',
          '加入完整 Schema.org 結構化資料（Organization、LocalBusiness、FAQPage、HowTo、Speakable）',
          '改寫內容為「可引用」格式 — 明確段落、直接陳述、不過度行銷化',
          '建立主題集群 — 同一主題寫多篇深度文章，建立 AI 認可的領域權威',
          '監測 AI 引用率 — 定期在 ChatGPT、Claude、Perplexity 測試品牌相關問題',
        ],
      },
      {
        heading: '常見誤解',
        body:
          '「加個 llms.txt 就有 GEO 了」— 不對。llms.txt 只是發現機制，AI 是否會引用你還取決於整體內容權威與可讀性。「GEO 多久看到效果」— 視內容基礎而定，已有 SEO 基礎的網站約 4-8 週，從零開始的新品牌時間更長且難以預估。',
      },
    ],
    faq: [
      {
        question: 'GEO 跟 SEO 衝突嗎？',
        answer: '不衝突。優化 GEO 的工作（schema、內容結構化、權威累積）多數會同時強化 SEO。',
      },
      {
        question: '我自己可以做嗎？',
        answer:
          '部分可以。llms.txt、基礎 schema 自己部署即可。但主題集群內容生產、權威來源累積這類工作通常需要團隊長期投入。',
      },
    ],
    relatedServices: ['geo', 'aeo', 'seo'],
  },
  'seo-vs-geo-vs-aeo': {
    slug: 'seo-vs-geo-vs-aeo',
    title: 'SEO、GEO、AEO 差別與優先順序',
    h1: 'SEO、GEO、AEO 三者差異與優先順序',
    description:
      'SEO、GEO、AEO 是三種不同搜尋優化策略，分別針對傳統搜尋引擎、生成式 AI、答案引擎。本文釐清三者差異、適用場景、預算分配建議。',
    keywords: ['SEO GEO AEO', 'SEO vs GEO', 'AEO 是什麼', 'GEO 是什麼', '搜尋優化差異'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'informational',
    intro:
      '這三個縮寫常被混用，但目標、訊號、評量標準都不同。本文用最簡單方式釐清，並提供「預算有限時該優先做哪一個」的判斷依據。',
    sections: [
      {
        heading: '三者各自的定義',
        body: '',
        items: [
          'SEO (Search Engine Optimization)：競爭 Google、Bing 等傳統搜尋引擎的排名',
          'GEO (Generative Engine Optimization)：競爭 ChatGPT、Claude、Gemini 等生成式 AI 的品牌引用',
          'AEO (Answer Engine Optimization)：競爭 Perplexity、Google AI Overview 等答案引擎的精選來源',
        ],
      },
      {
        heading: '搜尋場景對比',
        body:
          '想像三種搜尋情境：(1) 用戶在 Google 看到 10 條結果並點擊 → SEO 戰場；(2) 用戶問 ChatGPT「桃園哪間 SEO 公司」並拿到對話式回答 → GEO 戰場；(3) 用戶用 Perplexity 拿到一段答案 + 3 個來源 → AEO 戰場。',
      },
      {
        heading: '預算有限時的優先順序',
        body: '這是我們對中小企業客戶常給的建議：',
        items: [
          '預算 3 萬 / 月以下：先做 SEO（手法最成熟、效果最可預測）',
          '預算 5 萬 / 月：SEO 為主，加部分 GEO 工作（為 AI 搜尋時代鋪路）',
          '預算 10 萬 / 月以上：可以三者整合進行',
        ],
      },
    ],
    faq: [
      {
        question: 'GEO 跟 AEO 重疊很多嗎？',
        answer: '工作項目約 60% 重疊（兩者都需要 schema、內容結構化、權威性建立）。建議整合執行避免重複投資。',
      },
    ],
    relatedServices: ['seo', 'geo', 'aeo'],
  },
  'schema-org-tutorial': {
    slug: 'schema-org-tutorial',
    title: 'Schema.org 結構化資料部署實作',
    h1: 'Schema.org 結構化資料部署實作',
    description:
      'Schema.org 結構化資料是 SEO 與 GEO 的共同基礎。本文整理 8 種必備 schema 的用途與部署方式，附 JSON-LD 範例。',
    keywords: ['Schema.org', '結構化資料', 'JSON-LD', 'LocalBusiness schema', 'FAQ schema'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'informational',
    intro:
      'Schema.org 結構化資料是搜尋引擎理解網站內容的工具。沒部署 schema 不等於完全沒 SEO，但會錯失多數 Rich Results、AI 引用機會、Knowledge Graph 條目。',
    sections: [
      {
        heading: '常用的 8 種 Schema',
        body: '',
        items: [
          'Organization：品牌身份識別（多數網站必備）',
          'LocalBusiness：本地商家（有實體地址時加）',
          'WebSite：搜尋框 + sitelinks',
          'FAQPage：FAQ 區塊（可觸發 Google rich snippet）',
          'HowTo：步驟化內容（AI 引擎偏好擷取）',
          'Article：文章內容（含作者、發布日期）',
          'BreadcrumbList：麵包屑導航',
          'Speakable：語音搜尋優化',
        ],
      },
      {
        heading: '部署位置與方式',
        body:
          '在 HTML <head> 內加入 <script type="application/ld+json">{JSON 物件}</script>。Next.js 可用 metadata API 配合動態 script 標籤。WordPress 可用 Yoast SEO 或 Rank Math 等外掛產生。',
      },
      {
        heading: '常見錯誤',
        body: '',
        items: [
          '加入不真實的 AggregateRating（如自填 4.9 星 / 50 評論）— 違反 Google Rich Results 政策',
          '只在 client-side 渲染 schema — 部分爬蟲讀不到',
          'schema 內容與頁面實際內容不一致 — Google 會直接拒絕 rich results',
        ],
      },
    ],
    faq: [
      {
        question: 'schema 加錯會被懲罰嗎？',
        answer:
          '會。「Spammy structured data」是 Google 明文列出的人工懲罰項目。最常見的觸發：自填 AggregateRating、宣稱頁面有實際上沒有的內容。',
      },
    ],
    relatedServices: ['seo', 'geo', 'aeo'],
  },
  'perplexity-aeo-overview': {
    slug: 'perplexity-aeo-overview',
    title: 'Perplexity AI 的引用邏輯與 AEO 實作',
    h1: 'Perplexity 引用邏輯與 AEO 實作',
    description:
      'Perplexity 在回答時會列出 3-5 個來源網站。本文整理 Perplexity 偏好引用的內容特徵，以及對應的 AEO 實作方向。',
    keywords: ['Perplexity', 'Perplexity 排名', 'AEO 實作', '答案引擎優化'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'informational',
    intro:
      'Perplexity 不只回答問題，還會列出引用來源。被列為來源 = 流量 + 品牌權威訊號。本文整理我們觀察到 Perplexity 偏好的內容特徵。',
    sections: [
      {
        heading: 'Perplexity 引用偏好的內容特徵',
        body: '依我們監測的觀察：',
        items: [
          '主題相關性高（不是泛論文章）',
          '內容具權威訊號（多反向連結、HTTPS、清楚作者）',
          '結構清晰（明顯 H1 / H2 階層 + FAQ 區塊）',
          '載入快速（LCP < 2.5s）',
          '內容更新頻率穩定',
        ],
      },
      {
        heading: '提高被 Perplexity 引用的工作',
        body: '',
        items: [
          '前 100 字直接回答主題問題（不要長篇鋪陳）',
          '完整部署 FAQPage schema',
          '建立網站整體權威（DA 30 以上為常見基準）',
          '清楚的作者 / 編輯部標記（Person schema 或 Organization）',
          '定期更新內容（last-modified 時間戳）',
        ],
      },
    ],
    faq: [
      {
        question: 'Perplexity 跟 ChatGPT 引用邏輯一樣嗎？',
        answer:
          '不完全一樣。Perplexity 強制列出來源（每個答案附 3-5 個網站），ChatGPT 是對話式回答、有時提及品牌但不一定附連結。優化方式有共同點但需分別測試。',
      },
    ],
    relatedServices: ['aeo', 'geo'],
  },
  'google-ai-overview-basics': {
    slug: 'google-ai-overview-basics',
    title: 'Google AI Overview 是什麼？對 SEO 的影響',
    h1: 'Google AI Overview 與 SEO 的關係',
    description:
      'Google AI Overview 在搜尋結果頁直接顯示 AI 生成答案。本文說明它對傳統 SEO 的影響，以及該如何調整內容策略。',
    keywords: ['Google AI Overview', 'AI Overview 優化', 'SGE', 'Search Generative Experience'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'informational',
    intro:
      'Google AI Overview（前身 SGE）會在搜尋結果頁上方直接顯示 AI 生成的答案。對 SEO 的影響是：用戶可能在不點進任何網站的情況下得到答案。本文討論如何在這個變化下保持流量。',
    sections: [
      {
        heading: 'AI Overview 會抓取怎樣的內容',
        body: '',
        items: [
          '直接回答型內容（用戶問什麼、文章前段直接回答）',
          '步驟化內容（HowTo 結構）',
          '比較表 / 條列式結構（便於 AI 擷取）',
          '具明確作者與發布日期的權威來源',
        ],
      },
      {
        heading: '不容易被引用的內容類型',
        body: '',
        items: [
          '純行銷話術（缺乏可驗證資訊）',
          '重點埋藏太深（要滑到底才出現）',
          '需要 JavaScript 渲染才會顯示的內容',
          '完全沒有 schema 標記',
        ],
      },
    ],
    faq: [
      {
        question: 'AI Overview 會搶走我的流量嗎？',
        answer:
          '部分搜尋查詢的點擊率確實會下降。但若內容被列為 AI Overview 引用來源，仍能取得品牌曝光與部分點擊。策略重點是「成為引用來源」而非抗拒 AI Overview。',
      },
    ],
    relatedServices: ['aeo', 'seo'],
  },
  'website-pricing-2026': {
    slug: 'website-pricing-2026',
    title: '網站建置費用區間：台灣行情與成本拆解',
    h1: '網站建置費用區間與成本拆解',
    description:
      '網站建置費用從幾萬到幾百萬都有，差別在哪？本文拆解四個價格區間的實際內容、常被忽略的隱藏成本、轉換廠商時的注意事項。',
    keywords: ['網站建置費用', '網頁設計費用', '網站架設多少錢', '網站報價'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'transactional',
    intro:
      '網站建置費用差距很大。本文只談「實際費用包含什麼」，不貶低任何特定廠商或工具。',
    sections: [
      {
        heading: '台灣網站建置費用四個區間',
        body: '',
        items: [
          'NT$ 3,000-30,000：模板網站（Wix / Squarespace 等）— 適合個人 / 微型企業',
          'NT$ 30,000-100,000：WordPress 套版或半客製化',
          'NT$ 100,000-500,000：完整客製化開發',
          'NT$ 500,000+：複雜系統 / 大型電商 / 多語言企業網站',
        ],
      },
      {
        heading: '常被忽略的隱藏成本',
        body: '',
        items: [
          '主機 / 網域年費',
          'CMS 或 plugin 商業授權費（特別是 WordPress 商業套件）',
          'SSL 憑證（多數廠商已含但要確認）',
          '後續維護費（通常另計）',
          '修改費用（小改是否含？大改怎麼算？合約必寫）',
          '搬家 / 移交費（轉換廠商時的成本）',
        ],
      },
      {
        heading: '簽約前要確認的事',
        body: '',
        items: [
          '原始碼歸誰所有（合約必寫，否則綁定）',
          '主機帳號是在你名下還是廠商代管',
          'CMS 後台你能不能自己改',
          'SEO 內建到什麼程度（Lighthouse SEO 分數可作基準）',
          '是否支援響應式設計',
          '售後保固範圍與年限',
        ],
      },
    ],
    faq: [
      {
        question: '5 萬可以做出像樣的網站嗎？',
        answer:
          '可以，但限制較多：5-8 頁靜態內容、套用既有設計風格、不含複雜功能。如果需要客製化視覺、會員系統、電商或後台管理，預算建議 15 萬以上。',
      },
    ],
    relatedServices: ['web-development'],
  },
  'common-seo-mistakes': {
    slug: 'common-seo-mistakes',
    title: '網站 SEO 沒效果？常見的技術 SEO 問題盤點',
    h1: '常見技術 SEO 問題盤點',
    description:
      'SEO 做了卻沒看到排名變化？多數情況問題出在技術面而非內容。本文整理我們接手客戶網站時最常發現的技術 SEO 問題。',
    keywords: ['SEO 沒效果', 'SEO 錯誤', '技術 SEO', 'SEO 問題'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'informational',
    intro:
      'SEO 沒見到變化，多數情況不是內容問題，是技術面的基本設定有錯。本文整理我們接手新客戶時最常發現的問題類型。',
    sections: [
      {
        heading: '常見技術 SEO 問題',
        body: '依出現頻率排序：',
        items: [
          '站速過慢（LCP > 4 秒）— Google 演算法會降權',
          '沒有手機版或手機版體驗差',
          'Robots.txt 把重要頁面意外擋掉',
          'Sitemap 不完整或沒提交',
          'Canonical 設錯（導致 Google 視為重複內容）',
          'HTTPS 設定有混合內容問題',
          'Schema.org 完全沒部署',
          '圖片缺 alt text',
          '關鍵內容靠 JS 渲染，爬蟲讀不到',
          'Internal linking 結構崩壞（孤兒頁面）',
        ],
      },
      {
        heading: '自我檢查工具',
        body:
          '可以用 Google Search Console、Lighthouse、Screaming Frog 這三項工具掃描，多數技術問題會被偵測出來。',
      },
    ],
    faq: [
      {
        question: '我自己檢查就好還是要找廠商？',
        answer:
          '基礎問題（如 Sitemap、HTTPS、手機版）可自己用 GSC + Lighthouse 找出來。較複雜的問題（如 canonical 衝突、JS 渲染、internal linking 重構）通常需要有經驗的人介入。',
      },
    ],
    relatedServices: ['seo'],
  },
  'ai-customer-service-cost': {
    slug: 'ai-customer-service-cost',
    title: 'AI 客服系統：自建與 SaaS 的成本比較',
    h1: 'AI 客服自建 vs SaaS 成本比較',
    description:
      'AI 客服該自建還是用 Intercom AI、Zendesk AI 等 SaaS？本文比較兩種方案的長期成本、技術門檻、適用情境。',
    keywords: ['AI 客服', 'AI 客服費用', '聊天機器人', 'Intercom AI', 'AI 客服自建'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'commercial',
    intro:
      'AI 客服是 2026 年企業導入 AI 最常見的切入點。但「自建」與「用 SaaS」的長期成本差距可能很大，本文整理可參考的成本結構（實際費用依授權方案、用量而定）。',
    sections: [
      {
        heading: 'SaaS AI 客服費用參考',
        body: '以下為各服務官方公開的牌價區間（請以該品牌最新報價為準）：',
        items: [
          'Intercom Fin：每次解決對話約 USD 0.99 起',
          'Zendesk AI Agent：依授權方案，通常從 USD 50 / 座位 / 月起',
          'Salesforce Einstein：依方案組合差異大',
        ],
      },
      {
        heading: '自建 AI 客服的成本結構',
        body: '',
        items: [
          'MVP 開發：一次性 10-15 萬',
          'AI API 費用：每月 5,000-30,000（依對話量、模型選擇）',
          '維護費：每月 1-3 萬（可選包月或按工時）',
        ],
      },
      {
        heading: '什麼情況該選 SaaS',
        body: '',
        items: [
          '需要立即上線（SaaS 通常 1 週內、自建需 3-4 週）',
          '團隊沒有 IT 人員可維護',
          '客服流程很標準、不需太多客製化',
          '客戶數還少，月對話量低於 1,000 次',
        ],
      },
      {
        heading: '什麼情況自建較划算',
        body: '',
        items: [
          '對話量大（自建邊際成本低）',
          '需要連接內部系統 / 資料庫',
          '有資料合規要求（部分產業如金融、醫療）',
          '希望避免長期被授權費綁定',
        ],
      },
    ],
    faq: [
      {
        question: '自建 AI 客服需要哪些技術人員？',
        answer:
          '可委外開發，內部不需要養工程師。隼訊提供「開發 + 後續維護」的服務，客戶端只需要一位「對話策略 / 知識庫管理」的 PM 角色。',
      },
    ],
    relatedServices: ['ai-tools'],
  },
  'how-we-define-good-seo-content': {
    slug: 'how-we-define-good-seo-content',
    title: '我們對「好 SEO 內容」的定義',
    h1: '我們對「好 SEO 內容」的定義',
    description:
      '內容是 SEO 的核心，但「好內容」很難量化。本文整理隼訊在客戶內容生產時實際遵守的判斷標準。',
    keywords: ['SEO 內容', '內容行銷', 'E-E-A-T', '內容品質'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'informational',
    intro:
      '「內容是國王」這句話被講爛了，但什麼算好內容沒有統一答案。本文記錄我們在實際接案時對「可生產 / 不可生產」的判斷標準。',
    sections: [
      {
        heading: '不會通過審稿的內容類型',
        body: '',
        items: [
          '空泛優點堆疊（「我們最專業、最便宜、最快交件」）',
          '無來源的統計數字（任何數字若無法附 source，要嘛刪除要嘛改為「依我們觀察」）',
          '貶低競品但無證據（例：宣稱某平台「速度差」卻沒提供實測數據）',
          '靠數字湊版面的標題（多數時候只是把可寫 1 段的東西硬拆成清單）',
          '純 AI 生成、未經人工編輯與事實查核的內容',
        ],
      },
      {
        heading: '我們認可的內容類型',
        body: '',
        items: [
          '具體流程說明（我們實際怎麼做，含工具與步驟）',
          '誠實的限制聲明（什麼客戶不適合我們）',
          '可驗證的數據（含 source 連結）',
          '不模糊的觀點（敢於說「我們不建議這樣做」）',
          '能引導讀者下一步行動的具體建議',
        ],
      },
    ],
    relatedServices: ['seo', 'geo', 'aeo'],
  },
  'how-we-pick-clients': {
    slug: 'how-we-pick-clients',
    title: '我們選客戶的標準（誰不適合找隼訊）',
    h1: '我們選客戶的標準',
    description:
      '不是每個案子我們都接。本文說明哪幾種需求類型我們不接，避免雙方浪費時間。',
    keywords: ['行銷公司選擇', '行銷公司合作', '不接哪些案'],
    datePublished,
    reviewedByRole,
    qualityTier: 'draft',
    intent: 'informational',
    intro:
      '多數行銷公司網站只寫「為什麼選我們」，少數會寫「什麼客戶不該找我們」。我們認為後者對雙方比較公平，這篇是我們的版本。',
    sections: [
      {
        heading: '我們不接的案類型',
        body: '',
        items: [
          '產業：博弈、傳直銷、未經主管機關核准的金融商品',
          '預算明顯不符需求（例：5 萬預算要做電商 + 會員 + ERP 整合）',
          '需要保證排名 / 保證 ROAS 的客戶',
          '希望用 AI 大量灌水內容衝排名的客戶',
          '預算極低（如 SEO 月費低於 3 萬），我們無法做出真正有效的工作',
        ],
      },
      {
        heading: '我們適合接的案類型',
        body: '',
        items: [
          '中小企業主想長期經營品牌、願意投入 6-12 個月看效果',
          '客戶對 SEO / GEO 已有基本理解（或願意花時間學）',
          '客戶可提供基本內容素材（公司資料、案例、產品細節）',
          '客戶願意採用透明定價、不殺價、按合約執行',
        ],
      },
    ],
    relatedServices: ['seo', 'geo'],
  },
}

export const blogSlugs = Object.keys(blogPosts)

export function getBlogPost(slug: string): BlogContent | null {
  return blogPosts[slug] ?? null
}

export function getAllBlogPosts(): BlogContent[] {
  return Object.values(blogPosts)
}
