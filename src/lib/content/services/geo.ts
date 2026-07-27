import type { ServiceContent } from '../types'

export const geoService: ServiceContent = {
  slug: 'geo',
  title: 'GEO AI 搜尋優化｜以 SEO、證據與量測提高可見度',
  h1: 'GEO AI 搜尋優化',
  description:
    '隼訊以技術 SEO、實名作者、原創案例與 AI 搜尋量測執行 GEO；不販售 llms.txt、特殊 AI Schema 或保證引用。',
  keywords: ['GEO', '生成式引擎優化', 'GEO 服務', 'GEO 優化公司', 'Generative Engine Optimization', 'ChatGPT 優化'],
  intent: 'commercial',
  lastModified: '2026-07-26',
  qualityTier: 'production',
  intro:
    'GEO 是業界用來描述 AI 搜尋可見度工作的名稱。依 Google 2026 年官方指引，AI Overview 與 AI Mode 沒有額外技術門檻，也沒有專用 AI Schema；頁面仍須先能被搜尋引擎抓取、索引並提供摘要。隼訊把 GEO 視為 SEO 的延伸：用一手案例、實名責任、清楚來源與量測，增加內容在 Google AI、ChatGPT Search 與 Perplexity 被找到的機會，但不保證引用。',
  sections: [
    {
      heading: 'GEO 與 SEO 的核心差別',
      body:
        'SEO 與 GEO 不是兩套互不相干的工程。Google AI 功能使用搜尋索引與核心品質系統；ChatGPT Search、Perplexity 也需要能抓取的公開頁面。差別主要在量測與內容場景：SEO 常看非品牌查詢、點擊與詢盤；GEO 另看 AI 搜尋功能曝光、平台引薦與固定查詢集的品牌／來源出現狀況。共同基礎仍是技術品質、真實經驗與外部信任。',
    },
    {
      heading: '隼訊 GEO 服務範圍',
      body: '這是我們實際提供的工作項目：',
      items: [
        '抓取、索引、canonical、內鏈、速度與內容可見性檢查',
        'Organization、WebSite、Service、Article、Breadcrumb 等與畫面一致的必要 Schema',
        '實名作者、案例證據、更新日期、來源與限制揭露',
        '依真實客戶問題規劃主題集群，不批量建立查詢變體頁',
        '以 GSC、GA4、AI 平台引薦與固定查詢集建立可重現基準',
      ],
    },
    {
      heading: '想被 AI 引用，內容不能只是「通順」——要有數據、引述與來源',
      body:
        'Princeton 等大學團隊在 2023 年的 GEO 研究裡做過一件事：拿同一批內容，分別加上統計數據、專家引述、以及可查證的來源，再測它們在生成式引擎裡被引用的機率。結論是——這幾種「增加可信度」的寫法，確實會提高被 AI 挑中的機會。要先講清楚限制：那是受控實驗裡「相對可見度」的提升，會因題目類型而異（技術、數據型主題吃引用來源，生活型主題吃易讀性），不等於保證流量或營收。我們把這個發現落地成具體寫法：關鍵論點盡量附上可查的數字與出處、引用第一手經驗或專家說法、避免空泛形容詞。這也是為什麼我們寧可少放一個沒來源的漂亮數字，也不想讓 AI（和讀者）覺得內容不可信。',
    },
    {
      heading: '讓 AI「認得你是誰」：品牌實體一致性與第三方聲量',
      body:
        '品牌名稱、負責人、服務、電話與公開連結必須在官網、社群、客戶案例與第三方資料中一致；沒有可到訪門市，就不能用借址製造 LocalBusiness 訊號。外部提及也只做真實合作、客戶引用與專業參與，不買帳號、不灌論壇、不建立不符合收錄條件的百科頁。',
    },
    {
      heading: 'llms.txt 的正確定位：可保留，但 Google 會忽略',
      body:
        'Google 2026 年 7 月的 Generative AI 指引明確寫明：Google Search 不使用 llms.txt，保留或移除都不會幫助 Google 排名與 AI 功能曝光。其他系統是否採用並無統一保證，所以我們只把它當作低成本內容摘要，並由網站同一資料來源產生；不會把它包裝成付費 GEO 核心成果。',
    },
    {
      heading: '這個網站如何實作 GEO',
      body:
        '本站只保留與可見內容一致的 Organization、WebSite、Service、Article、CreativeWork 與 Breadcrumb Schema；文章使用實名作者，案例顯示來源與限制，robots.txt 放行 OAI-SearchBot 與 PerplexityBot。FAQ 仍保留給讀者，但不再輸出 FAQPage／HowTo／Speakable 來宣稱 AI 搜尋效果。',
    },
  ],
  howTo: {
    name: '隼訊 GEO 導入流程',
    description: '我們替一個品牌做 GEO 時，從測基準到驗證 AI 引用變化的實際步驟。',
    steps: [
      {
        name: '測 baseline',
        text: '用一組固定問題在 ChatGPT、Claude、Gemini、Perplexity 上測試目前的品牌提及狀況，記錄下來作為對照基準。',
      },
      {
        name: '索引與實體資料修正',
        text: '修正抓取、索引、canonical、內鏈與必要 Schema，確保機器可取得的內容和使用者看到的內容一致。',
      },
      {
        name: 'AI 可讀性內容重構',
        text: '把關鍵頁面重寫成 AI 容易擷取的形式：明確的段落、可直接引用的句子、清楚標示的事實與來源。',
      },
      {
        name: '主題集群建立',
        text: '圍繞核心主題產出成組內容並彼此連結，累積該領域的權威覆蓋。',
      },
      {
        name: '重測與量化',
        text: '一段時間後用同一組問題重測，比較品牌提及前後的變化，依結果調整內容與結構。',
      },
    ],
    totalTime: 'P60D',
  },
  faq: [
    {
      question: 'GEO 大概多久能看到效果？',
      answer:
        '沒有可保證的時程。抓取與索引修正可以很快驗證，但品牌是否被 AI 功能引用會受查詢、平台、既有權威與內容競爭影響。我們在第 7、28、56、90 天用同一組指標觀察，不承諾幾週內出現。',
    },
    {
      question: 'GEO 跟 SEO 該分開做還是一起做？',
      answer:
        '訊號基礎重疊，分開做會重複投資。我們的做法是一份內容同時優化兩種引擎，避免兩個團隊互相打架。若你已有 SEO 廠商，我們也可只補 AI 可讀性的缺口。',
    },
    {
      question: '如何驗證 GEO 真的有效？',
      answer:
        '每月在 ChatGPT、Claude、Gemini、Perplexity 上用一組固定問題測試品牌提及率，量化比較。所有測試記錄留檔可重現——我們不交「感覺有效」的報告。',
    },
    {
      question: '我已經有 SEO 廠商，可以只找你們做 GEO 嗎？',
      answer:
        '可以。我們會盤點現有內容的 AI 可讀性，補上缺的部分，避免跟現有 SEO 工作衝突。',
    },
    {
      question: '全新品牌、還沒什麼內容，適不適合先做 GEO？',
      answer:
        '通常先不要買獨立 GEO 專案。先建立清楚網站、實名負責人、真實案例、搜尋量測與必要的 SEO 內容；若公司完全線上且不與客戶面對面，也不應為了 Local SEO 建立不符合資格的 Google 商家檔案。',
    },
    {
      question: 'E-E-A-T 對「被 AI 引用」有影響嗎？',
      answer:
        '有，尤其是 Google AI Overview。E-E-A-T（經驗、專業、權威、信任）本來是 Google 評估內容品質的框架，而 AI 摘要傾向引用它判斷為可信的來源。實務上這代表：內容要有具名作者與真實經驗、要有可查證的來源、品牌在外部要有一致且正面的形象。這些訊號同時對 SEO 與 GEO 有用，不必為兩者各做一套。',
    },
    {
      question: 'GEO 做了之後，怎麼看有沒有帶來流量？',
      answer:
        '除了每月用固定問題組測品牌在 ChatGPT、Perplexity 的提及率，我們也建議在 GA4 追蹤來自 AI 平台的 referral 流量（例如 chatgpt.com、perplexity.ai 的來源），觀察引用是否真的帶人進站。要誠實說：AI 引用常是「看到答案就滿足、不一定點連結」，所以曝光與引用本身也是要看的指標，不能只用點擊評斷。',
    },
  ],
  pricing: [
    {
      name: '基礎方案',
      price: '12,500',
      unit: '月',
      includes: ['索引與爬蟲檢查', '必要 Schema', '實名與案例證據', 'AI 搜尋基準與月度監測'],
      bestFor: '中小企業、首次嘗試 GEO',
    },
    {
      name: '進階方案',
      price: '25,000',
      unit: '月',
      includes: ['SEO／GEO 技術基礎', '案例與原創內容', '外部實體訊號建議', '雙週檢視'],
      bestFor: '有真實專業素材、要同時經營搜尋與 AI 引薦的企業',
    },
  ],
  serviceType: '生成式引擎優化',
  priceMin: '12500',
  priceUnit: '月',
}
