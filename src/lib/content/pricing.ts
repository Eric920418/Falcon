import type { PricingPageContent, ComparePageContent } from './types'

const lastModified = '2026-05-18'

export const pricingPages: Record<string, PricingPageContent> = {
  'web-development': {
    slug: 'web-development',
    title: '網站建置費用透明定價｜2026 台灣行情完整公開',
    h1: '網站建置費用 — 完全透明，無隱藏成本',
    description: '隼訊網站建置定價公開：企業官網 8 萬起、電商平台 18 萬起、客製化系統 30 萬起。無隱藏費用、原始碼歸客戶、永久售後保固。',
    keywords: ['網站建置費用', '網頁設計費用', '網站架設多少錢', '網站報價', '電商網站費用'],
    lastModified,
    intro: '90% 的網站廠商會問你「預算多少」，然後配合你預算殺到底。隼訊反過來：先公開定價，讓你看完再決定要不要找我們。',
    tiers: [
      {
        name: '形象官網',
        price: '80,000',
        unit: '專案起',
        includes: ['5-10 頁客製化設計', '響應式設計（手機 / 平板 / 桌機）', 'CMS 後台（可自行編輯）', 'SEO + GEO 基礎部署', '聯絡表單 + Email 通知', '永久售後保固'],
        notIncludes: ['網域 / 主機年費（另計）', '會員系統（+15 萬）', '電商功能（+10 萬起）'],
        bestFor: '中小企業形象網站、個人品牌、專業服務業',
      },
      {
        name: '電商平台',
        price: '180,000',
        unit: '專案起',
        includes: ['商品 / 購物車 / 結帳流程', '會員系統 + 訂單後台', '金流串接（綠界、藍新等）', '物流串接', 'SEO + GEO 完整部署', '響應式設計', '永久售後保固'],
        notIncludes: ['POS 整合（+10 萬）', '多倉庫 / ERP 整合（+30 萬起）'],
        bestFor: '品牌電商、D2C、線上銷售為主的業務',
      },
      {
        name: '客製化系統',
        price: '300,000',
        unit: '專案起',
        includes: ['完整需求訪談 + Figma 設計稿', 'CMS / ERP / SaaS 客製開發', '複雜業務邏輯實作', 'API 開發 + 第三方串接', '完整技術文件', '6 個月技術支援'],
        bestFor: 'B2B、企業內部系統、複雜業務流程',
      },
    ],
    marketComparison: {
      heading: '市場比較',
      body: '台灣網站建置市場價格分布：',
      items: [
        'Wix / Strikingly 模板：NT$ 3,000-30,000（外觀差、SEO 受限、無法擴展）',
        'WordPress 套版：NT$ 30,000-100,000（速度普通、需付 plugin 月費）',
        '一般客製化（中小型廠商）：NT$ 100,000-300,000',
        '大型行銷公司客製化：NT$ 300,000-1,000,000+（含台北辦公室溢價）',
        '隼訊客製化：NT$ 80,000-500,000（比台北便宜 25-40%）',
      ],
    },
    faq: [
      { question: '為什麼隼訊比模板貴 3 倍？', answer: '模板網站每月還要付 500-2000 元月費，5 年總成本 3-12 萬，跟我們起價接近 — 但你只拿到難擴展、SEO 差的網站。客製化網站投入一次、用 5 年以上、長期 ROI 完勝。' },
      { question: '原始碼歸誰所有？', answer: '完全歸你。我們交付完整原始碼、CMS 後台、主機帳號，未來要搬廠商完全沒問題。' },
      { question: '售後保固範圍？', answer: '永久售後：小修改、Bug 修正、文字更新都免費。大型功能擴充另行報價。維護費可選包月（5,000-30,000/月，依複雜度）。' },
    ],
    cta: '想知道你需求的精準預算？預約免費諮詢（含初步報價單）',
  },
  seo: {
    slug: 'seo',
    title: 'SEO 費用一個月多少？隼訊透明定價方案',
    h1: 'SEO 費用透明定價',
    description: 'SEO 一個月多少錢？隼訊三個 SEO 方案：3 萬、6 萬、12 萬，公開每個方案實際包含的服務內容。',
    keywords: ['SEO 多少錢', 'SEO 費用', 'SEO 報價', 'SEO 一個月多少', 'SEO 包月費用'],
    lastModified,
    intro: 'SEO 廠商最常見的話術是「依需求報價」。隼訊反其道而行：先公開定價，讓你看完再決定。',
    tiers: [
      {
        name: '基礎 SEO',
        price: '30,000',
        unit: '月',
        includes: ['月度 SEO 健檢報告', '4 篇深度 SEO 內容（每篇 1500+ 字）', '技術 SEO 修正', 'GSC + GA4 監測', '月度成效報告'],
        bestFor: '中小企業、單一服務領域、預算有限',
      },
      {
        name: '進階 SEO',
        price: '60,000',
        unit: '月',
        includes: ['8 篇深度內容（每篇 2000+ 字）', '反向連結建立（每月 5 個）', '競品深度分析', '雙週優化會議', '完整 Schema 部署', '初步 GEO + AEO 整合'],
        bestFor: '中大型企業、競爭產業',
      },
      {
        name: '企業 SEO',
        price: '120,000',
        unit: '月',
        includes: ['15+ 篇內容', 'PR + 媒體外鏈（每月 2-3 篇）', '專屬 SEO 顧問', '完整 SEO + GEO + AEO 整合', '即時報告儀表板', '每週優化會議'],
        bestFor: '上市櫃公司、品牌大戰、競爭極激烈產業',
      },
    ],
    faq: [
      { question: 'SEO 一個月多少錢才合理？', answer: '台灣行情：3 萬最低門檻（再低就只能寫 AI 灌水內容）、6-10 萬是主流、20 萬以上是大型企業級。低於 3 萬通常無法做出真正有效的 SEO。' },
      { question: '為什麼有些公司 SEO 費用更便宜？', answer: '常見便宜手法：(1) 用 AI 大量生成低品質內容、(2) 買垃圾外鏈、(3) 把舊文章換標題重發。這些短期可能看到排名上升，但 6-12 個月內會被 Google 演算法懲罰。' },
    ],
    cta: '想知道你產業的 SEO 機會與費用評估？預約免費 SEO 健檢',
  },
  'ai-development': {
    slug: 'ai-development',
    title: 'AI 開發報價｜AI 客服、智能助理、企業 AI 工具費用',
    h1: 'AI 工具開發報價',
    description: 'AI 開發費用怎麼算？隼訊 AI 客服 MVP 12 萬起、客製化 AI 助理 30 萬起。比 Intercom AI 等 SaaS 三年總成本省 70%。',
    keywords: ['AI 開發報價', 'AI 客服費用', 'AI 工具費用', '聊天機器人費用', 'AI 開發多少錢'],
    lastModified,
    intro: 'AI 開發費用差距極大：從 5 萬塊到 500 萬都有。本頁公開隼訊的標準方案與費用，讓你能直接判斷預算落點。',
    tiers: [
      {
        name: 'AI 客服 MVP',
        price: '120,000',
        unit: '專案',
        includes: ['基礎 chatbot（GPT/Claude API）', '知識庫整合（50 題以內）', 'LINE / 網站嵌入', '3 個月技術支援', '完整原始碼交付'],
        notIncludes: ['API 費用（OpenAI / Anthropic 月費約 5,000-30,000 另計）', 'CRM 整合（+5 萬）', '多語言（+3 萬）'],
        bestFor: '中小企業、想試水溫',
      },
      {
        name: '客製化 AI 助理',
        price: '300,000',
        unit: '專案起',
        includes: ['完整客製功能（需求訪談 + 設計）', 'CRM / Slack / 內部系統整合', '多語言（中、英、日）', '客製化 UI', '6 個月技術支援', 'Prompt 優化'],
        bestFor: '中大型企業、特定流程需求',
      },
      {
        name: '企業 AI 顧問',
        price: '50,000',
        unit: '月',
        includes: ['AI 策略諮詢', '導入優先順序規劃', '工具選型（自建 vs SaaS）', '員工訓練', '定期模型更新', 'Prompt 庫維護'],
        bestFor: '上市櫃公司、要全面導入 AI',
      },
    ],
    marketComparison: {
      heading: '隼訊自建 vs SaaS（3 年總成本比較，10 座位）',
      body: '',
      items: [
        'Intercom AI：USD 240,000（NT$ 720 萬）',
        'Zendesk AI：USD 90,000（NT$ 270 萬）',
        '隼訊自建：NT$ 80-150 萬',
      ],
    },
    faq: [
      { question: '為什麼 AI 開發費用差這麼多？', answer: '差別在：(1) 客製化程度、(2) 整合複雜度、(3) 是否需要在本地伺服器部署（資料隱私）、(4) 訓練資料量。MVP 跟企業級需求差距 3-5 倍很正常。' },
      { question: 'API 費用是多少？', answer: 'GPT-4o 平均每次對話 NT$ 0.5-2 元，每月 5,000 次對話約 NT$ 10,000。實際依模型選擇與對話長度而定。' },
    ],
    cta: '想找出你公司 ROI 最高的 AI 切入點？預約 1 小時免費 AI 導入諮詢',
  },
}

export const pricingSlugs = Object.keys(pricingPages)

export function getPricingPage(slug: string): PricingPageContent | null {
  return pricingPages[slug] ?? null
}

export const comparePages: Record<string, ComparePageContent> = {
  'seo-vs-geo-vs-aeo': {
    slug: 'seo-vs-geo-vs-aeo',
    title: 'SEO vs GEO vs AEO 完整比較表｜該優先做哪一個？',
    h1: 'SEO、GEO、AEO 完整比較',
    description: 'SEO、GEO、AEO 差別在哪？該選哪個？本頁用表格一次釐清三者目標、適用平台、預算分配。',
    keywords: ['SEO vs GEO', 'SEO GEO 差別', 'GEO 是什麼', 'AEO 是什麼', '搜尋優化比較'],
    lastModified,
    intro: '三者不是同義詞，也不能互相取代。它們是現代搜尋優化的三個面向，理解差異才能正確分配預算。',
    comparisonHeaders: ['面向', 'SEO', 'GEO', 'AEO'],
    comparisonTable: [
      { feature: '完整名稱', values: ['Search Engine Optimization', 'Generative Engine Optimization', 'Answer Engine Optimization'] },
      { feature: '目標平台', values: ['Google、Bing 等傳統搜尋', 'ChatGPT、Claude、Gemini', 'Perplexity、Google AI Overview'] },
      { feature: '核心訊號', values: ['關鍵字、反向連結、E-E-A-T', '內容權威、結構化資料、引用密度', '可引用性、Schema、即時搜尋'] },
      { feature: '主要產出', values: ['搜尋排名', 'AI 對話中的品牌提及', '精選答案來源'] },
      { feature: '見效時間', values: ['4-6 個月', '2-3 個月', '2-4 週' ] },
      { feature: '隼訊起價', values: ['NT$ 30,000/月', 'NT$ 50,000/月', 'NT$ 40,000/月'] },
      { feature: '產業優先度', values: ['本地服務、電商', '高客單價 B2B、專業服務', '答案型查詢密集產業'] },
      { feature: '2026 重要性', values: ['仍是基礎，但份額下滑', '上升趨勢、藍海窗口期', '答案引擎使用率爆發'] },
    ],
    sections: [
      {
        heading: '怎麼決定優先順序？',
        body: '隼訊建議的決策樹：',
        items: [
          '預算 3 萬/月以下：先做 SEO（最成熟、最可預測）',
          '預算 5 萬/月：SEO 70% + GEO 30%',
          '預算 10 萬/月以上：SEO + GEO + AEO 三合一整合方案',
          '產業已被 SEO 紅海覆蓋（如保健食品）：直接做 GEO + AEO 跳過 SEO 紅海',
        ],
      },
    ],
    faq: [
      { question: '只做 SEO 不做 GEO 會怎樣？', answer: '短期 OK，長期會被淘汰。Google AI Overview 已覆蓋 70% 查詢，傳統 SEO 點擊率 2024 年下降 30%。' },
      { question: 'GEO 和 AEO 重疊很多嗎？', answer: '約 60% 重疊。兩者都需要 schema、內容結構化、權威性。整合執行最有效率。' },
    ],
    cta: '想知道你公司該怎麼分配 SEO/GEO/AEO 預算？預約 30 分鐘策略諮詢',
  },
}

export const compareSlugs = Object.keys(comparePages)

export function getComparePage(slug: string): ComparePageContent | null {
  return comparePages[slug] ?? null
}
