import type { PricingPageContent, ComparePageContent } from './types'

const lastModified = '2026-06-29'

export const pricingPages: Record<string, PricingPageContent> = {
  'web-development': {
    slug: 'web-development',
    title: '網站建置費用｜隼訊定價公開',
    h1: '網站建置費用',
    description:
      '隼訊網站建置定價：企業官網 40,000 起、電商平台 90,000 起、客製化系統 150,000 起。本頁列出每個方案的實際包含內容。',
    keywords: ['網站建置費用', '網頁設計費用', '網站架設多少錢', '網站報價'],
    lastModified,
    qualityTier: 'production',
    intro:
      '我們公開定價是因為相信透明合約對雙方都好。但每個案的實際報價會依需求複雜度做調整，本頁的數字是起價，實際報價請預約諮詢。',
    tiers: [
      {
        name: '形象官網',
        price: '40,000',
        unit: '專案起',
        includes: [
          '5-10 頁客製化設計',
          '響應式設計（手機 / 平板 / 桌機）',
          'CMS 後台（可自行編輯）',
          'SEO 基礎部署',
          '聯絡表單 + Email 通知',
          '永久售後保固（小修改不另收費）',
        ],
        notIncludes: ['網域 / 主機年費（另計）', '會員系統（+7.5 萬）', '電商功能（+5 萬起）'],
        bestFor: '中小企業形象網站、專業服務業、個人品牌',
      },
      {
        name: '電商平台',
        price: '90,000',
        unit: '專案起',
        includes: [
          '商品 / 購物車 / 結帳流程',
          '會員系統 + 訂單後台',
          '金流串接（綠界、藍新等）',
          '物流串接',
          'SEO 完整部署',
          '響應式設計',
          '永久售後保固',
        ],
        notIncludes: ['POS 整合（+5 萬）', '多倉庫 / ERP 整合（+15 萬起）'],
        bestFor: '品牌電商、D2C、線上銷售為主的業務',
      },
      {
        name: '客製化系統',
        price: '150,000',
        unit: '專案起',
        includes: [
          '完整需求訪談 + Figma 設計稿',
          'CMS / ERP / SaaS 客製開發',
          '複雜業務邏輯實作',
          'API 開發 + 第三方串接',
          '完整技術文件',
          '6 個月技術支援',
        ],
        bestFor: 'B2B、企業內部系統、複雜業務流程',
      },
    ],
    faq: [
      {
        question: '為什麼比月費型模板服務（例如 Wix、Strikingly）的單次費用高？',
        answer:
          '兩種產品定位不同。模板服務月費低、可快速上線、適合輕量需求；客製化網站初期投入較高，但可完全擁有原始碼、自由擴展、SEO 控制更細。哪一種適合需要看你的需求類型。',
      },
      {
        question: '原始碼歸誰所有？',
        answer:
          '完全歸客戶。交付完整原始碼、CMS 後台、主機帳號。未來轉換廠商不會被「資料綁架」。',
      },
      {
        question: '售後保固範圍？',
        answer:
          '永久售後：Bug 修正、小幅文字 / 圖片更新免費。大型功能擴充另行報價。',
      },
      {
        question: '可以分期付款嗎？',
        answer:
          '可以。專案款一般分 3 期：簽約 30%、設計通過 30%、上線 40%。25 萬以上專案可協商更彈性付款方式。',
      },
      {
        question: '上線後每年還要花哪些錢？維護費怎麼算？',
        answer:
          '網站上線不是一次付清就結束，之後每年通常還有：網域（數百元）、主機（依流量從數千到數萬元不等）、以及選擇性的維護。我們的維護採自由選擇——小修改在永久保固範圍內免費，需要持續改版或功能維護的可談月費（約 NT$ 2,500-15,000 / 月，依範圍而定）。因為原始碼與主機都在你名下，你也可以自行維護或另找廠商，這些金額只是行情參考，實際依規格與流量而定。',
      },
    ],
  },
  seo: {
    slug: 'seo',
    title: 'SEO 費用｜隼訊三方案定價',
    h1: 'SEO 費用',
    description:
      '隼訊 SEO 三個方案：基礎 15,000、進階 30,000、企業 60,000 / 月。本頁列出每個方案實際包含的工作內容。',
    keywords: ['SEO 多少錢', 'SEO 費用', 'SEO 報價', 'SEO 一個月多少'],
    lastModified,
    qualityTier: 'production',
    intro:
      'SEO 廠商報價常會「依需求報價」，本頁公開隼訊三個方案的固定定價與內容。實際合作前會做免費健檢，確認方案適合度。',
    tiers: [
      {
        name: '基礎 SEO',
        price: '15,000',
        unit: '月',
        includes: ['月度 SEO 健檢報告', '4 篇深度 SEO 內容（每篇 1500+ 字）', '技術 SEO 修正', 'GSC + GA4 監測', '月度成效報告'],
        bestFor: '中小企業、單一服務領域、預算有限',
      },
      {
        name: '進階 SEO',
        price: '30,000',
        unit: '月',
        includes: ['8 篇深度內容（每篇 2000+ 字）', '反向連結建立（每月 5 個）', '競品深度分析', '雙週優化會議', '完整 Schema 部署', '初步 GEO + AEO 整合'],
        bestFor: '中大型企業、競爭較激烈產業',
      },
      {
        name: '企業 SEO',
        price: '60,000',
        unit: '月',
        includes: ['15+ 篇內容', 'PR + 媒體外鏈（每月 2-3 篇）', '專屬 SEO 顧問', '完整 SEO + GEO + AEO 整合', '即時報告儀表板', '每週優化會議'],
        bestFor: '上市櫃公司、極激烈競爭產業',
      },
    ],
    faq: [
      {
        question: 'SEO 一個月多少錢才合理？',
        answer:
          '我們的最低方案是 15,000 / 月。再低通常只能用 AI 大量生成內容或買低品質外鏈，反而會被 Google 演算法懲罰，不建議。',
      },
      {
        question: '為什麼有些 SEO 廠商更便宜？',
        answer:
          '常見便宜手法：用 AI 大量生成低品質內容、買垃圾外鏈、舊文章換標題重發。短期可能看到變化，長期通常會被演算法處罰。',
      },
    ],
  },
  'ai-development': {
    slug: 'ai-development',
    title: 'AI 開發費用｜AI 客服、智能助理定價',
    h1: 'AI 工具開發報價',
    description:
      '隼訊 AI 客服 MVP 6 萬起、客製化 AI 助理 15 萬起、AI 顧問 2.5 萬 / 月。本頁列出方案實際包含內容。',
    keywords: ['AI 開發報價', 'AI 客服費用', 'AI 工具費用', '聊天機器人費用'],
    lastModified,
    qualityTier: 'production',
    intro:
      'AI 開發費用差距大（2.5 萬到 250 萬都有），本頁公開隼訊標準方案。實際依需求複雜度報價。',
    tiers: [
      {
        name: 'AI 客服 MVP',
        price: '60,000',
        unit: '專案',
        includes: ['基礎 chatbot（GPT / Claude API）', '知識庫整合（50 題以內）', 'LINE / 網站嵌入', '3 個月技術支援', '完整原始碼交付'],
        notIncludes: ['API 費用（依用量另計）', 'CRM 整合（+2.5 萬）', '多語言（+1.5 萬）'],
        bestFor: '中小企業、想試水溫',
      },
      {
        name: '客製化 AI 助理',
        price: '150,000',
        unit: '專案起',
        includes: ['完整客製功能（需求訪談 + 設計）', 'CRM / Slack / 內部系統整合', '多語言（中、英、日）', '客製化 UI', '6 個月技術支援', 'Prompt 優化'],
        bestFor: '中大型企業、特定流程需求',
      },
      {
        name: 'AI 顧問',
        price: '25,000',
        unit: '月',
        includes: ['AI 策略諮詢', '導入順序規劃', '工具選型（自建 vs SaaS）', '員工訓練', '定期模型更新', 'Prompt 庫維護'],
        bestFor: '上市櫃公司、全面導入 AI',
      },
    ],
    faq: [
      {
        question: '為什麼 AI 開發費用差異這麼大？',
        answer:
          '差異主要在：(1) 客製化程度（套用既有 framework vs 從零開發）；(2) 整合複雜度（連接幾個既有系統）；(3) 部署位置（雲端 API vs 客戶自有伺服器）；(4) 訓練資料量。',
      },
      {
        question: 'API 費用估算？',
        answer:
          '依模型與用量：GPT-4o / Claude Sonnet 平均每次對話約 NT$ 0.5-2 元，每月 5,000 次對話約 NT$ 10,000。詳細試算可在諮詢時提供。',
      },
      {
        question: '除了開發費和 API，還有哪些容易被忽略的成本？',
        answer:
          '最常被低估的是「知識庫整理」的人力。AI 客服要準，前提是你的 FAQ、產品文件、SOP 得先整理乾淨、餵得進去——這段前置工時往往比想像中多。其次是上線後的維運：定期檢視答錯的對話、補內容、隨產品更新。我們會在報價時把這些一起講清楚，讓你看到的是「總持有成本」，而不是只有開發報價那個數字。',
      },
    ],
  },
}

export const pricingSlugs = Object.keys(pricingPages)

export function getPricingPage(slug: string): PricingPageContent | null {
  return pricingPages[slug] ?? null
}

export const comparePages: Record<string, ComparePageContent> = {
  'seo-vs-geo-vs-aeo': {
    slug: 'seo-vs-geo-vs-aeo',
    title: 'SEO vs GEO vs AEO 完整比較表',
    h1: 'SEO、GEO、AEO 完整比較',
    description:
      'SEO、GEO、AEO 三種搜尋優化策略的差異、適用場景、預算分配。本頁用比較表清楚對照三者特性。',
    keywords: ['SEO vs GEO', 'SEO GEO 差別', 'GEO 是什麼', 'AEO 是什麼', '搜尋優化比較'],
    lastModified,
    qualityTier: 'production',
    intro:
      '三者不是同義詞、不能互相取代。理解差異後，才知道該怎麼分配資源。',
    comparisonHeaders: ['面向', 'SEO', 'GEO', 'AEO'],
    comparisonTable: [
      { feature: '完整名稱', values: ['Search Engine Optimization', 'Generative Engine Optimization', 'Answer Engine Optimization'] },
      { feature: '目標平台', values: ['Google、Bing 等傳統搜尋', 'ChatGPT、Claude、Gemini', 'Perplexity、Google AI Overview'] },
      { feature: '核心訊號', values: ['關鍵字、反向連結、E-E-A-T', '內容權威、結構化資料、引用密度', '可引用性、Schema、即時搜尋'] },
      { feature: '主要產出', values: ['搜尋排名', 'AI 對話中的品牌提及', '精選答案來源'] },
      { feature: '見效時間', values: ['4-6 個月', '2-3 個月', '2-4 週'] },
      { feature: '隼訊起價', values: ['NT$ 15,000 / 月', 'NT$ 25,000 / 月', 'NT$ 20,000 / 月'] },
    ],
    sections: [
      {
        heading: '怎麼決定優先順序',
        body: '我們對客戶的建議：',
        items: [
          '預算 1.5 萬 / 月以下：先做 SEO（基礎、可預測）',
          '預算 2.5 萬 / 月：SEO 70% + GEO 30%',
          '預算 5 萬 / 月以上：可三者整合進行',
        ],
      },
    ],
    faq: [
      {
        question: '只做 SEO 不做 GEO 會怎樣？',
        answer:
          '短期沒問題。Google 仍是主要流量來源。但 AI 搜尋使用率上升中，建議至少把 GEO 基礎（schema、llms.txt）跟著做。',
      },
      {
        question: 'GEO 跟 AEO 重疊很多嗎？',
        answer:
          '大部分重疊。兩者都需要 schema、內容結構化、權威性建立，所以整合執行最有效率，不必重複投資。',
      },
    ],
  },
}

export const compareSlugs = Object.keys(comparePages)

export function getComparePage(slug: string): ComparePageContent | null {
  return comparePages[slug] ?? null
}
