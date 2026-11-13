import type { ServiceContent } from '../types'

export const geoService: ServiceContent = {
  slug: 'geo',
  title: 'GEO AI 搜尋優化｜以 SEO、證據與量測提高可見度',
  h1: 'GEO AI 搜尋優化',
  description:
    '隼訊以技術 SEO、實名作者、原創案例與 AI 搜尋量測執行 GEO；不販售 llms.txt、特殊 AI Schema 或保證引用。',
  keywords: ['GEO', '生成式引擎優化', 'GEO 服務', 'GEO 優化公司', 'Generative Engine Optimization', 'ChatGPT 優化'],
  intent: 'commercial',
  lastModified: '2026-11-13',
  qualityTier: 'production',
  intro:
    'GEO 是改善品牌與內容在 AI 搜尋中的可見度。隼訊先確認頁面可抓取、可索引，再補上實名作者、一手案例、清楚來源與相關內鏈；以可用的官方報表、AI 引薦和合格詢盤觀察變化，不保證被引用或推薦。',
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
        '以可用的 GSC Generative AI、Bing AI Performance、GA4、固定查詢集與詢盤建立可核對基準',
      ],
    },
    {
      heading: '想被 AI 引用，內容不能只是「通順」——要有數據、引述與來源',
      body:
        '2023 年 GEO 研究在受控實驗中，測試加入統計、引述與來源對生成式回答「來源可見度」的影響，結果依查詢類型而異。這不能推論到本站在 Google、ChatGPT 或 Perplexity 的引用率、流量或營收。隼訊只引用可核對的資料與自身經驗，並標明方法與限制。',
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
        text: '對照 Google／Bing 官方 AI 報表（帳號可用時）、GA4、固定查詢集與合格詢盤，依落地頁與意圖調整現有內容。',
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
        '優先使用帳號可見的 Search Console Generative AI 報表與 Bing AI Performance，再對照 GA4 的 AI 來源、固定查詢抽樣與合格詢盤。各項數據分開標示口徑；citations 不當排名，抽樣也不冒充平台總曝光。',
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
        '先看 Google AI 曝光與 Bing 引用頁面，再在 GA4 同時追蹤 ChatGPT 的 utm_source=chatgpt.com、AI 平台 referrer、落地頁、CTA 與詢盤。無連結提及與部分 App 流量仍可能量不到，因此報告必須保留限制，不把曝光或 citations 當成已轉換。',
    },
  ],
  relatedLinks: [
    { label: 'GEO 生成式引擎優化指南：技術與內容怎麼準備', href: '/blog/geo-complete-guide-2026' },
    { label: 'GEO 成效怎麼衡量？Google AI、Bing AI 與 GA4 量測實作', href: '/blog/geo-measurement-guide' },
    { label: 'SEO、GEO、AEO 差別｜先做共同基礎再談平台', href: '/compare/seo-vs-geo-vs-aeo' },
  ],
  references: [
    { name: 'Optimizing your website for generative AI features on Google Search', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide', publisher: 'Google Search Central' },
    { name: 'GEO: Generative Engine Optimization', url: 'https://arxiv.org/abs/2311.09735', publisher: 'arXiv' },
  ],
  serviceType: '生成式引擎優化',
  priceMin: '12500',
  priceUnit: '月',
}
