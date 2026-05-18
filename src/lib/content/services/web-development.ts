import type { ServiceContent } from '../types'

export const webDevelopmentService: ServiceContent = {
  slug: 'web-development',
  title: '網站建置與軟體開發｜企業官網、電商、CMS/ERP 客製化',
  h1: '網站建置與軟體開發 — 從品牌官網到企業系統',
  description:
    '隼訊提供企業官網、電商平台、APP、CMS/ERP 系統客製化開發。使用 Next.js、React、Node.js 等現代技術，兼顧速度、SEO 與可維護性。永久售後保固。',
  keywords: ['網站建置', '網頁設計', '網站架設', '企業官網', '電商平台', '客製化網站', 'CMS', 'ERP', '網站開發費用'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  intro:
    '一個慢、醜、SEO 差的網站不是「省錢」，是每天在燒錢 — 因為它把每一個本來會成交的潛在客戶趕走。隼訊用現代技術（Next.js + React + Tailwind）打造的網站，平均 LCP < 1.5 秒、Lighthouse SEO 100 分，從第一天上線就是 SEO 友善的網站。',
  sections: [
    {
      heading: '我們做哪些類型的網站？',
      body: '隼訊擅長的網站類型：',
      items: [
        '企業形象官網（5-10 頁、品牌呈現 + SEO 優化）',
        '電商平台（金流串接、會員系統、後台管理）',
        '客製化 SaaS / 軟體平台（複雜業務邏輯）',
        'CMS 內容管理系統（讓你自己改文章不用找工程師）',
        'ERP 企業資源規劃（庫存、訂單、客戶管理整合）',
        '學術 / 政府網站（論文投稿、線上報名）',
        'APP（iOS + Android，React Native 跨平台）',
      ],
    },
    {
      heading: '為什麼隼訊比模板網站貴 3 倍但值得？',
      body: 'Wix、Strikingly 等模板每月 500 元就能用，但你會付出長期代價：',
      items: [
        '速度差：模板網站 LCP 平均 4-6 秒，Google 直接降權',
        'SEO 受限：無法部署完整 schema、無法客製 meta、無法做 GEO 優化',
        '無法擴展：當你想加會員系統、API、自動化就卡死',
        '資料綁架：你的資料在他們伺服器，搬家極困難',
        '月費永遠付不完：5 年 6 萬，10 年 12 萬 — 客製網站早就回本',
      ],
    },
    {
      heading: '隼訊網站開發特色',
      body: '',
      items: [
        '速度極致：Next.js 16 + Turbopack，LCP < 1.5 秒',
        'SEO 內建：每個頁面預載 schema、metadata、OG image',
        'GEO 就緒：llms.txt、Speakable schema、AI 可讀架構從設計起點就建',
        '響應式設計：手機、平板、桌機完美呈現',
        '永久售後：上線後持續免費修小問題（不另收費）',
        '原始碼歸屬：完整交付，不綁定我們',
      ],
    },
  ],
  howTo: {
    name: '網站開發 5 階段流程',
    description: '隼訊標準網站開發流程',
    steps: [
      { name: '需求訪談', text: '深度訪談 1-2 小時，釐清商業目標、目標用戶、必要功能、預算' },
      { name: '視覺設計', text: 'Figma 設計稿（含手機 / 桌機），通過確認後再進開發' },
      { name: '開發實作', text: 'Next.js + Tailwind 切版，串接 CMS、金流、會員系統' },
      { name: 'QA + 部署', text: '跨瀏覽器測試、Lighthouse 優化、SEO 健檢、部署到 Vercel / 自有伺服器' },
      { name: '上線教學', text: '訓練你或你的團隊使用後台，提供教學文件與影片' },
    ],
    totalTime: 'P45D',
    estimatedCost: { value: '150000', currency: 'TWD' },
  },
  faq: [
    {
      question: '網站建置費用多少？',
      answer: '依需求差異很大：企業形象官網 5-15 萬；電商平台 15-50 萬；客製化系統（CMS/ERP）30-100 萬；APP 50-200 萬。隼訊提供免費諮詢與透明報價，沒有隱藏費用。',
    },
    {
      question: '網站開發要多久？',
      answer: '企業官網 4-6 週；電商平台 8-12 週；複雜系統 3-6 個月。實際時程依需求複雜度與您回饋速度而定。',
    },
    {
      question: '網站上線後我可以自己改內容嗎？',
      answer: '可以。我們提供 CMS 後台（如 Strapi、Sanity），讓你不用懂程式就能改文字、圖片、新增頁面。也有完整教學影片。',
    },
    {
      question: '網站歸誰所有？',
      answer: '完全歸你。我們交付原始碼、設計檔、CMS 帳號。即使未來不跟我們合作，你的網站可以順利搬到任何廠商或自己維護。',
    },
    {
      question: '有售後保固嗎？',
      answer: '有，永久售後服務。網站上線後若有 bug 或小修改，我們持續免費處理。大型功能擴充另行報價。',
    },
    {
      question: '我預算不多，可以分期嗎？',
      answer: '可以。專案款一般分 3 期：簽約 30%、設計通過 30%、上線 40%。專案總額 > 50 萬可協商更彈性的付款方式。',
    },
  ],
  pricing: [
    {
      name: '形象官網',
      price: '80,000',
      unit: '專案起',
      includes: ['5-10 頁設計', 'CMS 後台', 'SEO + GEO 基礎部署', '響應式設計', '永久保固'],
      bestFor: '中小企業形象網站',
    },
    {
      name: '電商平台',
      price: '180,000',
      unit: '專案起',
      includes: ['商品 / 購物車 / 金流', '會員系統', '訂單後台', 'SEO + GEO 完整', '物流串接'],
      bestFor: '品牌電商、D2C',
    },
    {
      name: '客製化系統',
      price: '300,000',
      unit: '專案起',
      includes: ['CMS / ERP / SaaS', '複雜業務邏輯', 'API 開發', '完整文件', '6 個月技術支援'],
      bestFor: 'B2B、企業內部系統',
    },
  ],
  cta: '想知道你的網站需求預算落點？預約免費諮詢（含 Figma 概念稿示意）',
  serviceType: '網站開發',
  priceMin: '80000',
  priceUnit: '專案',
}
