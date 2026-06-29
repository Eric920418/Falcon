import type { ServiceContent } from '../types'

export const webDevelopmentService: ServiceContent = {
  slug: 'web-development',
  title: '網站建置與軟體開發｜企業官網、電商、客製化系統',
  h1: '網站建置與軟體開發',
  description:
    '隼訊提供企業官網、電商平台、CMS/ERP 系統、APP 客製化開發。使用 Next.js、React、TypeScript，永久售後保固，原始碼歸客戶所有。',
  keywords: ['網站建置', '網頁設計', '企業官網', '電商平台', '客製化網站', 'CMS', 'ERP'],
  intent: 'commercial',
  lastModified: '2026-06-29',
  qualityTier: 'production',
  intro:
    '隼訊用 Next.js + React 現代技術棧打造客製化網站。我們不接套版需求——如果你的預算只夠用模板自助建站，我們不是適合的廠商；但如果你需要長期經營、SEO 友善、日後能擴充也能換廠商的網站，可以繼續往下看。我們的原則很簡單：原始碼完整交給你，不做資料綁架。',
  sections: [
    {
      heading: '我們做的網站類型',
      body: '',
      items: [
        '企業形象官網（5–10 頁、品牌呈現 + SEO 優化）',
        '電商平台（金流串接、會員系統、後台管理）',
        '客製化 SaaS / 軟體平台',
        'CMS 內容管理系統',
        'ERP 企業資源規劃',
        'APP 開發（iOS + Android）',
      ],
    },
    {
      heading: '技術選擇與交付',
      body: '',
      items: [
        '前端：Next.js 16 + React 19 + Tailwind CSS',
        'CMS 後台：依需求選用（客戶可自行更新內容）',
        '部署：Vercel / Cloudflare / 客戶自有伺服器',
        '響應式設計（手機 / 平板 / 桌機）',
        '原始碼完整交付，不綁定我們',
        '永久售後保固（小修改不另收費）',
      ],
    },
    {
      heading: '我們的觀點：網站是資產，不是一次性費用',
      body:
        '便宜的套版網站，貴在你看不見的地方——資料綁在平台上搬不走、想加一個功能就卡住、改個版型還要月租。我們的立場是：一個網站要算「資產」，它得滿足三件事——你能自己改內容、它能被 Google 與 AI 搜尋找到、以及哪天你想換廠商或自行維護時，原始碼與資料都帶得走。我們交付時一定附上原始碼、設計檔與後台帳號，就是這個道理。短期看客製比套版貴，但兩三年下來，省下的綁定成本與重做成本往往更多。',
    },
    {
      heading: '實際做過的案子',
      body:
        '我們不靠形容詞說服你，直接看上線的網站：花蓮計程車派單平台（hualientaxi.taxi，含 AI 接電話與後端派單）、ESCROWA 全球遊戲交易託管官網（escrowa.com.tw，中英雙語自刻 CMS）、鴻緯商仲工業地產官網 + CMS（allenlo.com.tw）、CosmosWork 接案媒合平台（falcontaskbridge.com）、invisible care 居家清潔品牌官網 + CMS（needfix.com.tw）。更多案例可見首頁「作品案例」區。',
    },
  ],
  howTo: {
    name: '隼訊網站開發流程',
    description: '我們承接一個網站專案時，從需求訪談到上線交付的實際步驟。',
    steps: [
      {
        name: '需求訪談',
        text: '先確認這個網站要替你解決什麼——接訂單、接預約、做品牌、還是省人工，把目標與功能範圍談清楚。',
      },
      {
        name: '設計與確認',
        text: '依需求產出版型與視覺設計稿，與你確認方向後再進入開發，避免做到一半才發現方向不對。',
      },
      {
        name: '開發與串接',
        text: '前後端開發、金流／會員／CMS 等系統串接，並建置可自行更新內容的後台。',
      },
      {
        name: '測試與上線',
        text: '跨裝置測試、效能與 SEO 基礎檢查後上線，並設定好結構化資料與基本追蹤。',
      },
      {
        name: '交付與教學',
        text: '交付原始碼、設計檔與後台帳號，並提供操作教學，讓你日後能自行維護內容。',
      },
    ],
    totalTime: 'P42D',
  },
  faq: [
    {
      question: '網站建置大概多少錢？',
      answer:
        '依需求差異很大：企業形象官網 4–7.5 萬；電商平台 9–25 萬；客製化系統（CMS/ERP）15–50 萬以上。建議先諮詢，依需求複雜度提供報價。',
    },
    {
      question: '網站要做多久？',
      answer:
        '企業官網 4–6 週；電商平台 8–12 週；複雜系統 3–6 個月。實際時程依需求複雜度與雙方回饋速度而定。',
    },
    {
      question: '網站上線後我可以自己改內容嗎？',
      answer:
        '可以。我們提供 CMS 後台，可編輯文字、圖片、新增頁面，不需懂程式，並會提供操作教學。',
    },
    {
      question: '網站歸誰所有？',
      answer:
        '完全歸客戶。我們交付原始碼、設計檔、CMS 帳號。日後若要轉換廠商或自行維護，沒有資料綁架問題。',
    },
    {
      question: '售後保固範圍？',
      answer:
        '永久售後：Bug 修正、小幅文字 / 圖片更新免費。大型功能擴充另行報價。',
    },
  ],
  pricing: [
    {
      name: '形象官網',
      price: '40,000',
      unit: '專案起',
      includes: ['5–10 頁客製化設計', 'CMS 後台', 'SEO 基礎部署', '響應式設計', '永久保固'],
      bestFor: '中小企業形象網站、專業服務業',
    },
    {
      name: '電商平台',
      price: '90,000',
      unit: '專案起',
      includes: ['商品 / 購物車 / 結帳', '會員系統 + 訂單後台', '金流串接', '物流串接', '永久保固'],
      bestFor: '品牌電商、D2C',
    },
    {
      name: '客製化系統',
      price: '150,000',
      unit: '專案起',
      includes: ['完整需求訪談 + 設計', 'CMS / ERP / SaaS 客製開發', 'API 開發', '6 個月技術支援'],
      bestFor: 'B2B、企業內部系統',
    },
  ],
  serviceType: '網站開發',
  priceMin: '40000',
  priceUnit: '專案',
}
