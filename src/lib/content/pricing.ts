import type {
  PricingPageContent,
  ComparePageContent,
  ContentSection,
  FAQItem,
  RelatedLink,
} from './types'
import { primaryPriceDefinitions } from './price-catalog'

const lastModified = '2026-08-12'

const pricingTitles: Record<string, string> = {
  'web-development': '網站建置費用｜企業官網、電商與客製系統報價',
  'ai-development': 'AI 工具開發費用｜客服 MVP、模型成本與系統串接報價',
  seo: 'SEO 服務費用｜月費方案、工作內容與退場方式',
  geo: 'SEO／GEO 搜尋成長費用｜公開起價與報價因素',
}

const pricingTitleUpdatedAt: Record<string, string> = {
  'web-development': '2026-08-26',
  'ai-development': '2026-08-26',
  seo: '2026-08-26',
}

const pricingKeywords: Record<string, string[]> = {
  'web-development': ['網站建置費用', '網頁設計費用', '網站報價'],
  'ai-tools': ['AI 開發報價', 'AI 客服費用', 'AI 工具費用'],
  seo: ['SEO 費用', 'SEO 報價', 'SEO 顧問價格'],
  geo: ['GEO 費用', 'AI 搜尋優化報價', 'SEO GEO 顧問'],
}

interface PricingPageDetails {
  description: string
  intro: string
  sections: ContentSection[]
  faq: FAQItem[]
  relatedLinks?: RelatedLink[]
}

/**
 * 逐頁手寫內容。價格數字、方案與報價因素一律來自 price-catalog.ts，
 * 這裡只寫各服務獨有的計價邏輯、歸屬政策與 FAQ，避免四頁近重複。
 */
const pricingPageDetails: Record<string, PricingPageDetails> = {
  'web-development': {
    description:
      '網站建置費用公開：形象官網 NT$ 20,000 起、電商平台 45,000 起、客製系統 75,000 起。本頁說明一次性建置與持續成本怎麼分、原始碼與帳號歸屬，以及常見加購項目的計價方式。',
    intro:
      '企業形象官網 NT$ 20,000 專案起；電商與客製系統依功能、資料與整合複雜度報價。這裡列的是起價，不是所有需求都能用同一價格完成——正式報價會逐項寫出範圍、修改輪次與不包含內容。',
    sections: [
      {
        heading: '一次性建置費之外，還有哪些持續成本？',
        body:
          '網站的總花費不是只有建置費。用三年持有的角度看，至少還有四筆錢：網域年費、主機或雲端費用、憑證與信件服務，以及內容更新與功能維護。我們報價時會把這些分開列，一次性歸一次性、年費歸年費，讓你能跟其他報價單逐項對照，而不是只比第一期的總價。有些報價看起來便宜，是因為把主機與維護藏進了每年續約費。',
        items: [
          '一次性：設計、開發、測試、部署、教育訓練',
          '年費：網域、主機／雲端、憑證、信件服務',
          '按需：內容更新、功能追加、第三方服務調整',
          '我們的報價單會標明每一筆屬於哪一類、由誰收費',
        ],
      },
      {
        heading: '原始碼、帳號與資料歸誰？',
        body:
          '交付內容包含完整原始碼。網域、主機、Google Analytics 與 Search Console 帳號，我們的作法是一開始就開在客戶自己的名下，我們以協作者身分進入。這代表合作結束時你不需要「要回」任何東西——網站、資料、量測歷史本來就都是你的。換廠商或收回自營時，移交的只是權限，不是資產。',
      },
      {
        heading: '常見加購項目怎麼計價？',
        body:
          '起價對應的是基礎範圍。以下是實務上最常被加購的項目，每一項都會在報價單獨立列出金額與工作內容，不會事後才出現：',
        items: [
          '金流串接（綠界、藍新、LINE Pay 等）',
          '物流串接與運費規則',
          '多語系版本與語系切換',
          '會員系統與權限分級',
          '預約、排程或表單流程客製',
          '既有資料匯入與格式清整',
        ],
      },
      {
        heading: '修改輪次與驗收怎麼寫進報價？',
        body:
          '開發案最常見的糾紛不是價格，是「改到什麼程度算完成」。我們的報價單會寫清楚：設計稿確認後才進開發、每個階段的修改輪次上限、驗收條件（功能清單與瀏覽器範圍），以及超出範圍的追加怎麼另外計價。這些條款不是防客戶，是讓雙方在動工前就對「完成」有一樣的定義。',
      },
    ],
    faq: [
      {
        question: 'NT$ 20,000 的形象官網能做到什麼程度？',
        answer:
          '對應 5–10 頁客製化設計、響應式介面、CMS 後台、SEO 基礎部署與聯絡表單。適合以介紹公司與服務為主的網站；電商、會員或客製流程屬於另外兩個方案的範圍。',
      },
      {
        question: '上線後的維護費怎麼算？',
        answer:
          '依維護範圍報價：只做主機與安全性更新，跟包含內容更新、功能調整的維護，是不同的金額。報價單會列出維護包含與不包含的項目，也可以選擇不簽維護、需要時按次計費。',
      },
      {
        question: '可以分階段付款或分階段開發嗎？',
        answer:
          '可以。常見作法是簽約、設計稿確認、驗收上線三期付款；大型系統會拆成多個階段各自報價與驗收，先上線核心功能再逐步擴充。',
      },
      {
        question: '已經有網站了，改版會比較便宜嗎？',
        answer:
          '不一定。改版要多做既有內容盤點、資料搬遷與轉址規劃，這些是新站沒有的工作。若舊站結構還健康，可以沿用的部分會反映在報價；若技術債太重，打掉重做有時反而便宜。',
      },
    ],
    relatedLinks: [
      { label: '網站建置與軟體開發服務內容', href: '/services/web-development' },
      { label: '2026 台灣網站架設費用行情', href: '/blog/website-pricing-2026' },
      { label: 'WordPress 套版與客製化比較', href: '/compare/wordpress-vs-custom-website' },
    ],
  },
  'ai-development': {
    description:
      'AI 工具開發報價公開：AI 客服 MVP NT$ 30,000 起、客製化 AI 助理 75,000 起。本頁說明建置費與模型用量費為何分開計算、知識庫整理的分工，以及 MVP 到正式版的分段報價方式。',
    intro:
      'AI 客服 MVP NT$ 30,000 專案起。AI 專案的花費分兩塊：一次性的建置費，跟持續發生的模型用量費——報價時我們把兩者分開列，因為把用量藏進月費對雙方都不誠實。',
    sections: [
      {
        heading: '建置費與模型用量費為什麼分開列？',
        body:
          '建置費是一次性的：對話流程設計、知識庫建置、介面與系統整合、測試與交付。模型用量費是持續性的：每次對話都會呼叫語言模型 API，由平台按用量計費，流量大用得多、流量小用得少。這筆錢我們建議直接由客戶的 API 帳號支付——用多少付多少，帳單透明，也不會被中間商加價。報價單上兩者分開，你才能算出真正的每月營運成本。',
      },
      {
        heading: '知識庫整理誰負責？佔多少工作量？',
        body:
          '依我們接案的經驗，AI 客服的效果七成取決於知識庫品質，而不是模型選擇。散落在員工腦中、LINE 對話與舊文件裡的知識，要先整理成結構化的問答與流程文件，AI 才有東西可答。這部分的分工會在報價前談清楚：客戶提供原始素材與領域知識，我們負責結構化、去重與測試覆蓋。素材越亂，整理工作量越大，報價也會反映這一點。',
      },
      {
        heading: 'MVP 到正式版怎麼分段？',
        body:
          'NT$ 30,000 的 MVP 目的是驗證：用真實的知識庫、真實的客戶問題，測試 AI 回答品質能不能達到你要的標準。驗證通過再進入 75,000 起的客製化階段——加上企業系統整合、權限稽核、人工接手機制與維運交接。驗證不通過就停在 MVP，損失有限。我們不建議跳過驗證直接做正式版，因為知識庫品質沒經過實測前，誰都不該承諾效果。',
        items: [
          'MVP 階段：基礎對話介面＋小型知識庫＋單一入口（網站或 LINE）',
          '驗收標準：以一組真實客戶問題實測回答品質',
          '正式版：系統整合、權限與稽核、人工接手、維運交接',
          '每階段獨立報價、獨立驗收，可以在任何階段停下',
        ],
      },
      {
        heading: '資料隱私與部署選項對價格的影響',
        body:
          '多數專案使用雲端模型 API 即可，成本低、品質好。但若你的產業有資料落地或隱私要求（醫療、金融、政府往來），需要評估私有部署或資料去識別化流程，這會明顯增加建置與維運成本。這類需求請在諮詢時先提出，因為它影響的不只是價格，還有技術選型的方向。',
      },
    ],
    faq: [
      {
        question: 'NT$ 30,000 的 AI 客服 MVP 包含什麼？',
        answer:
          '基礎對話介面、小型知識庫建置、網站或 LINE 單一入口串接、測試與原始碼交付。目的是用真實資料驗證效果，不含企業系統整合與人工接手機制。',
      },
      {
        question: '每月的模型 API 費用大概怎麼估？',
        answer:
          '取決於對話量與回答長度。估算方式是：預估每月對話數 × 平均每次對話的 token 用量 × 模型單價。我們會在 MVP 實測後給出以實際用量為基礎的估算，而不是憑空報一個月費。',
      },
      {
        question: '直接訂閱 SaaS 客服工具跟委外開發怎麼選？',
        answer:
          '流程標準、不需要接內部系統的話，SaaS 通常更快更便宜；需要接訂單、庫存、CRM 或有客製流程時，委外開發的長期成本反而可控。詳細的成本比較我們寫在 AI 客服導入成本的文章裡。',
      },
      {
        question: '上線之後的維護包含什麼？',
        answer:
          '知識庫更新、回答品質監控、模型版本調整與錯誤修正。維護可以簽月約也可以按次計費；交付時包含維運文件，客戶團隊要自己接手也可以。',
      },
    ],
    relatedLinks: [
      { label: 'AI 工具開發服務內容', href: '/services/ai-tools' },
      { label: '企業 AI 語音客服', href: '/services/ai-voice-agent' },
      { label: 'AI 客服導入成本拆解', href: '/blog/ai-customer-service-cost' },
      { label: '語音與文字客服比較', href: '/compare/ai-voice-vs-chatbot' },
    ],
  },
  seo: {
    description:
      'SEO 服務費用公開：基礎方案 NT$ 7,500／月起、成長方案 15,000／月起。本頁說明月費對應的實際工作、合約與退場方式、內容產出的分工，以及哪些情況我們會建議先不要買月費 SEO。',
    intro:
      'SEO 基礎方案 NT$ 7,500／月起。月費服務最怕的是「錢付了但不知道對方每月在做什麼」——所以這一頁把月費對應的工作項目、交付節奏與退場方式都寫清楚。',
    sections: [
      {
        heading: '月費對應的實際工作是什麼？',
        body:
          '基礎方案（7,500／月起）的節奏：第一個月做技術健檢與量測建置，之後每月處理索引與內鏈問題、排定內容優先序、月底交檢視報告。成長方案（15,000／月起）在此之上加入主題集群規劃、案例與專家內容製作、競品差距分析，檢視頻率改為雙週。報告內容是 GSC 與 GA4 的實際數據加上下月工作清單，不是流量截圖拼貼。',
      },
      {
        heading: '合約期與退場方式',
        body:
          'SEO 是累積型工作，通常需要幾個月才看得出趨勢，但這不代表你該被長約綁住。合約期與提前終止條件會白紙黑字寫在報價單裡。更重要的是退場設計：GSC、GA4 與所有量測帳號從第一天就開在你的網站與帳號之下，內容發在你的網站上——合作結束時，累積的排名、內容與數據都留在你手上，不會跟著廠商離開。',
      },
      {
        heading: '內容產出的分工與計價',
        body:
          '有效的 SEO 內容需要一手經驗：實際案例、專業判斷、業內才知道的細節。這些素材只有你有，我們負責把它變成能被搜尋與引用的內容。分工方式是：你提供訪談時間或粗稿（每月一到兩次、每次半小時就夠），我們負責選題、改寫、結構化與上稿。若你完全沒時間參與內容，我們會誠實告訴你成長方案的效果會打折，並建議先從基礎方案開始。',
      },
      {
        heading: '哪些情況我們會建議先不要買月費 SEO？',
        body:
          '不是每個網站都適合馬上開始月費 SEO。遇到以下情況，我們會建議把預算先花在別的地方：',
        items: [
          '網站本身結構或速度問題太重——先做一次性的網站改版，比按月修補划算',
          '完全沒有可寫的素材與案例——先累積實際業務成果，內容才有東西可寫',
          '業務主要靠在地客源——先把 Google 商家檔案經營好，成本低見效快',
          '預算低於基礎方案——與其縮水執行，不如先做一次性健檢自己執行',
        ],
      },
    ],
    faq: [
      {
        question: '7,500 跟 15,000 的方案差在哪？',
        answer:
          '基礎方案處理技術與索引問題、給內容優先序建議，月度檢視；成長方案加入主題集群、案例內容製作與競品分析，雙週檢視。簡單說：基礎方案修體質，成長方案主動進攻。',
      },
      {
        question: '需要綁約多久？',
        answer:
          '合約期與提前終止條件在報價單載明。我們用退場設計取代長約綁定：帳號與內容從第一天就在你名下，任何時候結束合作，累積的資產都留在你手上。',
      },
      {
        question: '內容素材誰提供？',
        answer:
          '你提供一手素材（訪談、案例、專業判斷），我們負責選題、撰寫與結構化。每月一到兩次、每次半小時的訪談就足夠支撐內容產出。',
      },
      {
        question: '費用包含廣告投放嗎？',
        answer:
          '不包含。SEO 月費對應自然搜尋的技術與內容工作；廣告投放（Google Ads 等）是另一項服務，廣告費本身也由你的廣告帳戶直接支付。',
      },
    ],
    relatedLinks: [
      { label: 'SEO 搜尋成長服務內容', href: '/services/seo' },
      { label: '我們怎麼定義好的 SEO 內容', href: '/blog/how-we-define-good-seo-content' },
      { label: '常見 SEO 錯誤盤點', href: '/blog/common-seo-mistakes' },
    ],
  },
  geo: {
    description:
      'GEO（AI 搜尋優化）費用公開：GEO 基礎 NT$ 12,500／月起、搜尋成長整合 25,000／月起。本頁說明 GEO 與 SEO 月費的差額買到什麼、成效怎麼量測，以及我們明確不販售的項目。',
    intro:
      'GEO 基礎方案 NT$ 12,500／月起。GEO 市場上充滿「保證被 AI 引用」的話術——這一頁反過來，把差額對應的實際工作、量測方式跟我們不賣的東西都攤開來講。',
    sections: [
      {
        heading: 'GEO 與 SEO 月費的差額買到什麼？',
        body:
          'GEO 基礎（12,500／月起）與 SEO 基礎（7,500／月起）的差額，對應三塊 SEO 方案沒有的工作：一是 AI 平台查詢基準——用一組固定問題在 ChatGPT、Perplexity 等平台記錄品牌被提及的狀況，建立可重測的基準線；二是實體與作者訊號——組織資料、實名作者、外部平台的品牌一致性；三是內容證據化——把服務與案例改寫成有一手證據、可被引用的形式。前提是 SEO 基礎已包含在內，因為 AI 搜尋仍大量依賴傳統搜尋索引。',
      },
      {
        heading: '成效怎麼量測、報告裡有什麼？',
        body:
          '我們的量測分三層：AI 平台查詢集的定期重測結果（品牌有沒有被提到、引用了哪些頁面）、GSC 與 GA4 中來自 AI 平台的引薦流量，以及詢盤來源記錄。報告會誠實標明量測的限制——AI 平台的回答有隨機性，同一問題不同時間可能得到不同答案，所以我們看的是多次重測的趨勢，不是單次截圖。量不到的東西（例如 AI 平台內部的曝光次數）我們直接說量不到。',
      },
      {
        heading: '我們明確不販售的項目',
        body:
          '以下項目常出現在 GEO 服務的推銷中，但缺乏官方依據，我們不賣：',
        items: [
          '保證被 ChatGPT、Perplexity 或 AI Overview 引用——沒有任何管道能保證',
          '所謂「AI 專用 Schema」——Google 官方文件沒有這種東西',
          '承諾幾週內見效——AI 平台的抓取與引用節奏不受任何廠商控制',
          '用 llms.txt 換取收錄資格——llms.txt 是輔助檔案，Google 已明確表示不使用',
        ],
      },
      {
        heading: '什麼時候該從 SEO 升級到 GEO？',
        body:
          '兩個條件都成立時再升級：一是網站的技術 SEO 與索引已經健康——AI 搜尋讀的還是同一份索引，基礎沒修好，GEO 是空中樓閣；二是你有可公開的一手素材——真實案例、專業觀點、原創資料，因為 AI 引用的是有證據的內容，不是行銷文案。兩個條件缺一個，我們會建議先停留在 SEO 方案把基礎補齊，這也是對你的預算比較負責的建議。',
      },
    ],
    faq: [
      {
        question: '已經在做 SEO 了，還需要另外買 GEO 嗎？',
        answer:
          '不一定。GEO 方案已包含 SEO 基礎，兩者不是分開的兩筆預算。若你的 SEO 已在其他廠商手上運作良好，可以談只補 GEO 特有的量測與實體訊號工作，範圍與價格另議。',
      },
      {
        question: '多久看得到 GEO 成效？',
        answer:
          '我們不承諾固定週期，因為 AI 平台的抓取與引用節奏不受廠商控制。能承諾的是量測誠實：每次重測的查詢集結果與引薦數據都會如實呈現，趨勢好壞都看得到。',
      },
      {
        question: 'AI 曝光在報告裡怎麼呈現？',
        answer:
          '三個來源：固定查詢集在各 AI 平台的重測記錄（提及與引用情況）、GSC／GA4 的 AI 平台引薦流量，以及詢盤時客戶自述的來源。每一項都附原始數據，不做無法驗證的推估。',
      },
      {
        question: '做 GEO 需要改我的網站嗎？',
        answer:
          '通常需要。內容證據化、結構化資料與作者資訊都要動到網站本身。若網站不在我們手上維護，會先確認可修改的範圍與流程，再決定執行方式。',
      },
    ],
    relatedLinks: [
      { label: 'GEO AI 搜尋服務內容', href: '/services/geo' },
      { label: 'SEO、GEO、AEO 差別比較', href: '/compare/seo-vs-geo-vs-aeo' },
      { label: 'GEO 完整指南', href: '/blog/geo-complete-guide-2026' },
    ],
  },
}

export const pricingPages: Record<string, PricingPageContent> = Object.fromEntries(
  primaryPriceDefinitions.map((definition) => {
    const details = pricingPageDetails[definition.pricingSlug]
    return [
      definition.pricingSlug,
      {
        slug: definition.pricingSlug,
        title:
          pricingTitles[definition.pricingSlug] ??
          `${definition.name}費用｜公開起價與報價因素`,
        h1: `${definition.name}費用`,
        description: details.description,
        keywords: pricingKeywords[definition.serviceSlug] ?? [],
        lastModified: pricingTitleUpdatedAt[definition.pricingSlug] ?? lastModified,
        qualityTier: 'production',
        intro: details.intro,
        tiers: definition.tiers,
        sections: details.sections,
        faq: details.faq,
        relatedLinks: details.relatedLinks,
      } satisfies PricingPageContent,
    ]
  }),
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
  'ai-voice-vs-chatbot': {
    slug: 'ai-voice-vs-chatbot',
    title: 'AI 語音客服與文字客服機器人比較｜通路、成本與失敗模式',
    h1: 'AI 語音客服與文字客服機器人的差別',
    description:
      '比較電話通路的 AI 語音客服與網站／LINE 的文字客服機器人：適用客群、成本結構、整合需求、失敗模式與量測指標，並說明兩者共用後端的架構。',
    keywords: ['AI 語音客服 聊天機器人 比較', '語音客服 文字客服 差異', 'VoiceBot Chatbot 差異', '電話 AI 客服 比較'],
    lastModified: '2026-08-12',
    qualityTier: 'production',
    intro:
      '語音與文字客服的差別不是技術高下，是通路差異：你的客戶習慣打電話，還是習慣用 LINE 與網站？選錯通路，再強的 AI 也接不到人。本頁把兩者的成本結構、失敗模式與量測方式攤開比較。',
    comparisonHeaders: ['面向', 'AI 語音客服（電話）', '文字客服機器人（網站／LINE）'],
    comparisonTable: [
      { feature: '互動通路', values: ['電話進線與外撥', '網站對話框、LINE 官方帳號'] },
      { feature: '典型使用者', values: ['習慣打電話的客群、開車或不便打字的情境', '習慣傳訊息的客群、可非同步往返'] },
      { feature: '成本結構', values: ['建置＋電信線路＋語音辨識合成＋模型用量', '建置＋模型用量（少了電信與語音層）'] },
      { feature: '整合需求', values: ['PBX／SIP、代表號、錄音政策、併發容量', '網站或 LINE 入口、知識庫、後端 API'] },
      { feature: '主要失敗模式', values: ['辨識錯誤、噪音口音、通話中斷', '意圖誤判、模型幻覺、答非所問'] },
      { feature: '量測指標', values: ['接通與完成率、欄位取得率、轉人工率', '解決率、對話輪次、轉人工率'] },
      { feature: '隼訊起價', values: ['需求與環境盤點後報價', 'NT$ 30,000 專案起（AI 客服 MVP）'] },
    ],
    sections: [
      {
        heading: '先分清楚：這是通路選擇，不是技術高下',
        body:
          '兩者底層都是「理解使用者、查資料、執行動作」的流程，差別在入口。語音客服活在電話裡：即時、免打字、對長輩與行動中的使用者友善，但每一秒都在計費、聽錯就要重來。文字機器人活在網站與 LINE 裡：可以慢慢回、可以貼連結圖文、對話紀錄天然留存，但接觸不到只打電話的客群。所以第一個問題永遠是：你的客戶現在都從哪裡來？',
      },
      {
        heading: '成本結構差在哪？',
        body:
          '文字機器人的成本結構比較單純：一次性建置加上模型 API 用量。語音客服在這之上多了三層：電信層（號碼月租、通話分鐘）、語音層（辨識與合成按音訊計費）、以及併發容量（尖峰同時來電數決定線路與運算配置）。這也是為什麼我們的文字客服 MVP 有公開起價（NT$ 30,000），語音專案卻堅持先盤點環境再報價——沒看過 PBX、併發與錄音需求就報的價格，多半不含你真正需要的範圍。',
      },
      {
        heading: '失敗模式不同，安全網設計也不同',
        body:
          '文字機器人的主要風險是理解層面：意圖誤判、模型幻覺、答非所問——補救靠知識庫品質、回答限制與轉真人機制。語音客服除了這些，還多了聲音層面的風險：辨識錯誤、背景噪音、口音、通話中斷。所以語音流程必須設計重述確認（重要欄位讓使用者確認一次）、低信心轉人工、斷線後的狀態保存。評估廠商時，直接問「聽錯的時候會發生什麼事」，答不清楚的展示都只是理想情境。',
      },
      {
        heading: '怎麼選：從客群行為回推，不從技術出發',
        body:
          '判斷方式很務實：翻你現在的客服紀錄。進線電話占大宗、客群偏好口語溝通（例如在地服務、年長客群）——語音優先；詢問集中在 LINE 與網站表單、問題適合圖文回覆（例如電商、預約服務）——文字優先；兩邊都有量，先做量大的那一邊，驗證流程後再擴充另一邊。預算有限時，文字機器人是比較低門檻的起點，因為少了電信與語音層的複雜度。',
      },
      {
        heading: '兩者並用：共用後端，通路只是入口',
        body:
          '成熟的架構是把語音與文字當成同一套系統的兩個入口：知識庫共用（維護一份）、後端動作共用（查訂單、建工單、轉人工走同一套 API）、對話策略依通路調整（語音要簡短口語、文字可以貼連結）。我們公開的 GoGoCha 案例就是這個思路——電話、網站、LINE 三個入口接到同一套派單後端。先做哪個入口都可以，重點是後端設計時就預留多通路，避免之後重做。',
      },
    ],
    faq: [
      {
        question: '可以先做文字客服，之後再加語音嗎？',
        answer:
          '可以，這也是常見路徑。知識庫與後端 API 可以直接沿用，語音階段新增的是電話串接與語音處理層。前提是文字階段的後端有預留擴充空間——這點在第一次規劃時就要提出來。',
      },
      {
        question: '語音跟文字，哪個建置比較便宜？',
        answer:
          '文字。語音多了電信、語音辨識合成與併發容量三層成本，持續費用也較高（通話分鐘與音訊處理都計量）。這是通路價值的代價：有些客群就是只打電話。',
      },
      {
        question: 'LINE 上可以做語音客服嗎？',
        answer:
          '常見做法是 LINE 走文字機器人（可含語音訊息的辨識），即時語音對話則屬於電話通路。兩者可以接同一套後端，讓客戶自己選擇習慣的入口。',
      },
      {
        question: '兩種都想做，預算怎麼分配？',
        answer:
          '先做客群量大的通路並完成驗證，再擴充第二通路。共用後端的架構下，第二通路的增量成本低於重新開案——所以順序影響的是風險，不是總成本。',
      },
    ],
  },
  'wordpress-vs-custom-website': {
    slug: 'wordpress-vs-custom-website',
    title: 'WordPress 套版與客製化網站比較｜費用結構與維護責任',
    h1: 'WordPress 套版與客製化網站的差別',
    description:
      '比較 WordPress 套版與客製化開發：費用結構、維護責任、擴充方式與資產歸屬。先揭露立場：隼訊只做客製化開發，但本頁誠實列出套版更合適的情境。',
    keywords: ['WordPress 客製化 比較', '套版網站 客製網站 差異', 'WordPress 自架網站 比較', '網站 套版 客製 怎麼選'],
    lastModified: '2026-08-12',
    qualityTier: 'production',
    intro:
      '先揭露立場：隼訊提供客製化開發（Next.js），不提供 WordPress 套版服務，所以這不是中立評測。但我們會誠實列出套版更合適的情境——因為接了不適合客製的案子，雙方都痛苦。',
    comparisonHeaders: ['面向', 'WordPress 套版', '客製化開發'],
    comparisonTable: [
      { feature: '初期費用結構', values: ['較低；含主題與外掛的一次性或年度授權', '較高；一次性開發費，無授權費'] },
      { feature: '交付速度', values: ['快，數天到數週', '較慢，數週到數月'] },
      { feature: '內容編輯', values: ['成熟的後台生態，上手資源多', '後台依需求客製，範圍先定義'] },
      { feature: '功能擴充', values: ['以外掛組合為主，客製開發為輔', '直接開發，不受外掛框架約束'] },
      { feature: '維護責任', values: ['核心、外掛、主題的更新需有人持續管理', '依維護合約由開發商負責，範圍白紙黑字'] },
      { feature: '效能與資安控制', values: ['取決於主題外掛品質與維護紀律', '整條技術棧可控，責任集中於開發商'] },
      { feature: '資產歸屬', values: ['內容可匯出；主題外掛授權依條款', '原始碼完整交付，帳號開在客戶名下'] },
      { feature: '隼訊起價', values: ['不提供此服務', 'NT$ 20,000 專案起（形象官網）'] },
    ],
    sections: [
      {
        heading: '兩條路線的本質差異',
        body:
          'WordPress 是成熟的開源內容管理系統，套版路線是站在現成系統上組裝：選主題、裝外掛、調整設定，大量需求已有現成解法。客製化路線是從框架蓋起：每個頁面、流程與後台功能都為你的需求開發。前者的優勢是速度與初期成本，後者的優勢是控制粒度與長期彈性。沒有絕對的優劣，只有你的需求落在哪一邊。',
      },
      {
        heading: '費用結構怎麼比才公平',
        body:
          '比較時把三年的總持有成本攤開，而不是只看第一筆。套版路線：建置費較低，但要把主題與外掛的年度授權、主機費、以及持續維護（誰負責更新？）算進去。客製路線：建置費較高，沒有授權費，維護依合約計價。哪邊便宜取決於規格與時間長度——內容簡單的形象站，套版的總成本通常較低；功能持續長大的網站，客製的攤提曲線在後期反超。詳細的計算方法在我們的網站費用文章有完整拆解。',
      },
      {
        heading: '維護責任：最常被低估的差異',
        body:
          '這是實務上最常見的落差。WordPress 生態的更新是持續的：核心版本、外掛、主題都會發布更新，其中不少與資安相關——這些更新需要有人定期執行並在出問題時處理相容性。自己維護就要有人力，委外維護就要算月費。客製化網站的維護責任集中在開發商，範圍與費用寫在合約裡。兩種模式都可行，前提是簽約前想清楚：三年內，誰負責讓網站保持健康？這個問題沒有答案的網站，通常在第二年開始出狀況。',
      },
      {
        heading: '什麼情況套版是對的選擇',
        body:
          '以下情境我們會直接建議用套版，即使這代表我們不接這個案子：預算集中在業務驗證期，網站只需要標準的形象與內容功能；團隊有人願意學習後台並管理更新；需求高度標準化——部落格、活動頁、基本表單，現成生態已經很成熟。這些情境硬上客製，多花的錢買到的彈性你用不到。',
      },
      {
        heading: '什麼情況值得投資客製',
        body:
          '反過來，這些訊號出現時，客製的價值才真正展開：業務流程獨特（預約規則、會員邏輯、報價流程現成外掛做不到）；要跟內部系統或第三方服務深度整合；效能與體驗是競爭力的一部分（高流量、電商轉換）；網站是長期資產，功能會持續演進。判斷的關鍵問題：三年後這個網站要做到什麼？答案越具體、越不標準，客製越划算。',
      },
      {
        heading: '從套版換到客製：轉換時的注意事項',
        body:
          '很多客戶的路徑是先套版驗證、業務成長後轉客製，這條路完全可行，但要顧好三件事：網域從第一天就要買在自己名下，轉換時才不會被卡；內容要能完整匯出（文章、圖片、SEO 設定）；有累積搜尋排名的頁面要做 301 轉址對應，否則排名資產會在轉換時流失。這三件事在還沒決定轉換前就可以先確認——它們同時也是你評估目前方案健康度的指標。',
      },
    ],
    faq: [
      {
        question: '你們可以接手維護我現有的 WordPress 網站嗎？',
        answer:
          '我們專注在客製化開發，不提供 WordPress 的維護服務。若你的網站要走向客製化重建，我們可以協助搬遷規劃（內容、轉址、SEO 資產）；若只需要維護現有網站，建議找 WordPress 生態的專業團隊。',
      },
      {
        question: '套版網站的 SEO 會比較弱嗎？',
        answer:
          '不必然。SEO 成效主要取決於內容品質與技術執行，兩種路線都能做好也都能做壞。差異在控制粒度：客製化對速度、結構化資料與渲染方式的控制更直接；套版則依賴主題與外掛的品質。用「誰在執行」判斷，比用「用什麼系統」判斷準確。',
      },
      {
        question: '從 WordPress 搬到客製網站，排名會掉嗎？',
        answer:
          '做好對應通常可控：逐頁列出舊網址與新網址的 301 轉址表、保留有排名頁面的內容主題、上線後用 GSC 監控索引狀態。風險最大的是漏轉址與內容大幅刪減——搬遷計畫要在報價階段就出現，而不是上線後補救。',
      },
      {
        question: '客製網站交付後，可以自己接手維護嗎？',
        answer:
          '可以。我們交付完整原始碼與部署文件，帳號開在客戶名下；團隊有工程能力就能自行維護，也可以只在需要時按次委託。這是客製路線的資產歸屬優勢，簽約時可以把交接條款寫明。',
      },
    ],
    references: [
      {
        name: 'WordPress.org',
        url: 'https://wordpress.org/',
        publisher: 'WordPress Foundation',
      },
    ],
  },
}

export const compareSlugs = Object.keys(comparePages)

export function getComparePage(slug: string): ComparePageContent | null {
  return comparePages[slug] ?? null
}
