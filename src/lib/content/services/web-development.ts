import type { ServiceContent } from '../types'

export const webDevelopmentService: ServiceContent = {
  slug: 'web-development',
  title: '網站建置與軟體開發｜企業官網、電商、客製化系統',
  h1: '網站建置與軟體開發',
  description:
    '隼訊提供企業官網、電商平台、CMS/ERP 系統、APP 客製化開發。使用 Next.js、React、TypeScript，永久售後保固，原始碼歸客戶所有。',
  keywords: ['網站建置', '網頁設計', '企業官網', '電商平台', '客製化網站', 'CMS', 'ERP'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  qualityTier: 'draft',
  intro:
    '隼訊用 Next.js + React 現代技術棧打造客製化網站。我們不接套版需求（如果你預算只夠 Wix，我們不是適合的廠商）；如果你需要長期經營、SEO 友善、可擴展的網站，可以繼續往下看。',
  sections: [
    {
      heading: '我們做的網站類型',
      body: '',
      items: [
        '企業形象官網（5-10 頁、品牌呈現 + SEO 優化）',
        '電商平台（金流串接、會員系統、後台管理）',
        '客製化 SaaS / 軟體平台',
        'CMS 內容管理系統',
        'ERP 企業資源規劃',
        'APP 開發（iOS + Android，React Native）',
      ],
    },
    {
      heading: '技術選擇與交付',
      body: '',
      items: [
        '前端：Next.js 16 + React 19 + Tailwind CSS',
        'CMS 後台：Sanity 或 Strapi（依需求）',
        '部署：Vercel / Cloudflare Pages / 客戶自有伺服器',
        '響應式設計（手機 / 平板 / 桌機）',
        '原始碼完整交付，不綁定我們',
        '永久售後保固（小修改不另收費）',
      ],
    },
  ],
  faq: [
    {
      question: '網站建置大概多少錢？',
      answer:
        '依需求差異很大：企業形象官網 8-15 萬；電商平台 18-50 萬；客製化系統（CMS/ERP）30-100 萬以上。建議先諮詢，依需求複雜度提供報價。',
    },
    {
      question: '網站要做多久？',
      answer:
        '企業官網 4-6 週；電商平台 8-12 週；複雜系統 3-6 個月。實際時程依需求複雜度與雙方回饋速度而定。',
    },
    {
      question: '網站上線後我可以自己改內容嗎？',
      answer:
        '可以。我們提供 CMS 後台，可編輯文字、圖片、新增頁面，不需懂程式。會提供操作教學。',
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
      price: '80,000',
      unit: '專案起',
      includes: ['5-10 頁客製化設計', 'CMS 後台', 'SEO 基礎部署', '響應式設計', '永久保固'],
      bestFor: '中小企業形象網站、專業服務業',
    },
    {
      name: '電商平台',
      price: '180,000',
      unit: '專案起',
      includes: ['商品 / 購物車 / 結帳', '會員系統 + 訂單後台', '金流串接', '物流串接', '永久保固'],
      bestFor: '品牌電商、D2C',
    },
    {
      name: '客製化系統',
      price: '300,000',
      unit: '專案起',
      includes: ['完整需求訪談 + Figma 設計', 'CMS / ERP / SaaS 客製開發', 'API 開發', '6 個月技術支援'],
      bestFor: 'B2B、企業內部系統',
    },
  ],
  serviceType: '網站開發',
  priceMin: '80000',
  priceUnit: '專案',
}
