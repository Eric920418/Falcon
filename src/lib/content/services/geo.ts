import type { ServiceContent } from '../types'

export const geoService: ServiceContent = {
  slug: 'geo',
  title: 'GEO 生成式引擎優化｜讓 AI 搜尋引擎引用你的品牌',
  h1: 'GEO 生成式引擎優化',
  description:
    'GEO (Generative Engine Optimization) 是針對 ChatGPT、Gemini、Claude、Perplexity 等 AI 搜尋引擎的優化策略。本頁說明我們實際的 GEO 工作流程、定價、與 SEO／AEO 的差異與搭配順序。',
  keywords: ['GEO', '生成式引擎優化', 'GEO 怎麼做', 'AI 搜尋優化', 'Generative Engine Optimization', 'ChatGPT 優化'],
  intent: 'commercial',
  lastModified: '2026-06-29',
  qualityTier: 'production',
  intro:
    'GEO 是針對生成式 AI 搜尋（ChatGPT、Claude、Gemini、Perplexity）的內容優化。傳統 SEO 競爭的是「進入前 10 名」，GEO 競爭的是「被 AI 直接引用」——當使用者問 AI 一個問題，AI 給出一段對話式答案，你的品牌要嘛被點名，要嘛在那段答案裡缺席。我們會把醜話講在前面：GEO 不是部署一個檔案就見效的魔法，它是 SEO 內容地基鋪好之後、針對 AI 可讀性的再加工。',
  sections: [
    {
      heading: 'GEO 與 SEO 的核心差別',
      body:
        'SEO 競爭 Google 搜尋結果的排名，訊號是反向連結、E-E-A-T、關鍵字相關性。GEO 競爭的是生成式 AI 回答中的品牌提及，訊號偏向：內容結構化程度、可被擷取的句式、權威來源累積、品牌在公開資料中的覆蓋。兩者在「優質內容」這個基礎上重疊，但訊號權重分布不同——這也是為什麼我們主張同一份內容同時餵兩種引擎，而不是養兩個團隊互打。',
    },
    {
      heading: '隼訊 GEO 服務範圍',
      body: '這是我們實際提供的工作項目：',
      items: [
        'Schema.org 結構化資料審計與部署（Organization、LocalBusiness、FAQPage、HowTo、Speakable）',
        'llms.txt 與 llms-full.txt 建立與維護',
        'AI 可讀性內容重構（明確段落、可引用句式、長尾關鍵字、清楚的事實與來源）',
        '主題集群（topic cluster）規劃，把相關主題串成完整知識體',
        '每月 AI 引用率監測報告：用固定問題組測試在 ChatGPT、Claude、Perplexity 中的品牌提及，記錄留檔可重現',
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
        'AI 引擎回答問題時，靠的不只是你官網那幾頁，而是它對「你這個品牌實體」的整體認知。這裡有兩個常被忽略的功課。第一是實體一致性：公司名稱、地址、電話、負責領域，在官網 Schema、Google 商家檔案、社群、以及維基百科／Wikidata（若條件符合）之間要對得起來，並用 sameAs 把這些身分串起來，AI 才不會把你跟別人搞混。第二是第三方聲量：ChatGPT 常參考維基百科這類權威來源，Perplexity 則很吃論壇討論——在 Reddit、PTT、Dcard 上被真實地討論、被專業地回答，會變成 AI 眼中的佐證。這件事只有一種正確做法：真實參與、提供有用的專業內容。任何買帳號、灌水、假評論的操作，違反平台規則也會反噬品牌，我們不做也不建議。',
    },
    {
      heading: '我們的觀點：llms.txt 不是開關，內容才是',
      body:
        'GEO 最常見的誤會，是以為它能脫離內容品質單獨存在——以為部署一個 llms.txt，隔天 ChatGPT 就會開始推薦你。不會。AI 引用的是它判斷為可信、結構清楚、有來源的內容；llms.txt 只是讓 AI 更容易讀到你「已經寫好的好內容」。沒有好內容，GEO 沒有素材可以優化。所以對全新、零內容的品牌，我們通常會建議先把 SEO 與內容做起來、把 Google 商家檔案（GBP）補齊，再來談 GEO，否則是本末倒置。',
    },
    {
      heading: '我們自己就是 GEO 的實作範例',
      body:
        '你不必只聽我們說。你現在看的這個網站本身就部署了完整的 GEO 設定：/llms.txt 與 /llms-full.txt 公開可查，每個服務頁都帶 Service、FAQPage、HowTo、Speakable 等結構化資料，robots.txt 也明確放行 GPTBot、PerplexityBot、Google-Extended、ClaudeBot 等 AI 爬蟲。我們把交付給客戶的方法，先用在自己身上。',
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
        name: '結構化資料與 llms.txt 部署',
        text: '盤點並補上缺漏的 Schema.org 標記，建立 llms.txt 與 llms-full.txt，讓 AI 爬蟲能正確讀懂品牌定位與服務。',
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
        '依現有內容基礎而定。已經有完整 SEO 與品牌內容的網站，部署完 schema 與 llms.txt 後通常 4–8 週可在 ChatGPT、Perplexity 等 AI 引用中出現。從零開始的新品牌需要更長時間累積權威訊號，無法給準確時程。',
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
        '通常我們會勸你先別急。GEO 優化的是「已經存在的好內容」，零內容的品牌沒有素材可被 AI 引用。建議先把 SEO 內容與 Google 商家檔案做起來，再進入 GEO 才划算。',
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
      price: '25,000',
      unit: '月',
      includes: ['llms.txt 建立與維護', '基礎 Schema 部署', '首頁與服務頁的 AI 可讀性重構', '月度監測報告'],
      bestFor: '中小企業、首次嘗試 GEO',
    },
    {
      name: '進階方案',
      price: '50,000',
      unit: '月',
      includes: ['全站 Schema + Speakable', '每月 5 篇主題集群文章', '雙週優化會議'],
      bestFor: '中大型企業、需快速建立 AI 權威',
    },
  ],
  serviceType: '生成式引擎優化',
  priceMin: '25000',
  priceUnit: '月',
}
