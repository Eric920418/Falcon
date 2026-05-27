import type { ServiceContent } from '../types'

export const aiToolsService: ServiceContent = {
  slug: 'ai-tools',
  title: 'AI 工具開發｜客服機器人、智能助理、企業自動化',
  h1: 'AI 工具開發',
  description:
    '隼訊提供客製化 AI 工具開發：AI 客服、知識庫問答、文件處理自動化、銷售助理。整合 GPT、Claude、Gemini API，可部署在客戶自有伺服器。',
  keywords: ['AI 工具', 'AI 開發', 'AI 客服', '聊天機器人', 'ChatGPT 整合', 'AI 自動化'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  qualityTier: 'draft',
  intro:
    'AI 工具導入的關鍵不是「用什麼模型」，而是「找到 ROI 最高的切入點」。我們做的事是先盤點你的流程，找出哪些工作適合 AI 取代或輔助，再決定該自建還是用 SaaS。',
  sections: [
    {
      heading: '我們做的 AI 應用類型',
      body: '',
      items: [
        'AI 客服 / 智能助理（LINE、網站、Slack）',
        '企業知識庫問答系統（員工問內部文件、SOP）',
        '文件處理自動化（合約審閱、發票辨識、報表整理）',
        'AI 銷售助理（潛客資格判斷、自動跟進）',
        '客製化 GPT / Claude 助理（特定領域知識訓練）',
      ],
    },
    {
      heading: '技術選擇彈性',
      body: '',
      items: [
        '不綁定單一 AI 廠商：整合 GPT、Claude、Gemini，依需求選擇',
        '部署彈性：可用雲端 API，也可部署 Llama / Mistral 在客戶自有伺服器（資料不外流）',
        '完整原始碼交付，不收長期授權費',
        '與 LINE、Slack、HubSpot、SAP 等系統有串接經驗',
      ],
    },
  ],
  faq: [
    {
      question: 'AI 客服開發大概多少錢？',
      answer:
        'MVP 版本約 12 萬一次性費用 + 每月 1-3 萬 API 費用。客製化複雜版本 30-50 萬。具體價格依需求功能、整合複雜度而定。',
    },
    {
      question: 'AI 工具要做多久？',
      answer:
        'MVP 約 3-4 週；完整客製化 6-12 週。採用敏捷開發，通常第二週可看到可試用的雛形。',
    },
    {
      question: '我可以自己用 ChatGPT，為什麼要找你們開發？',
      answer:
        '如果是個人輔助，自己用即可。客製化開發適用於：員工 / 客戶共用、需連接內部資料、需整合既有系統、需符合資料合規要求。建議先做免費諮詢釐清需求屬於哪一類。',
    },
    {
      question: '會不會洩漏客戶資料？',
      answer:
        '依資料敏感度設計：低敏感度可用 OpenAI / Anthropic API（資料有保留期限政策）；高敏感度可部署開源模型在客戶自有伺服器，資料完全不出去。我們有醫療與金融客戶的合規開發經驗。',
    },
  ],
  pricing: [
    {
      name: 'AI 客服 MVP',
      price: '120,000',
      unit: '專案',
      includes: ['基礎 chatbot（GPT / Claude API）', '知識庫整合（50 題以內）', 'LINE / 網站嵌入', '3 個月技術支援'],
      bestFor: '中小企業、想試水溫',
    },
    {
      name: '客製化 AI 助理',
      price: '300,000',
      unit: '專案起',
      includes: ['完整客製功能', 'CRM / 內部系統整合', '多語言', '客製化 UI', '6 個月技術支援'],
      bestFor: '中大型企業、特定流程需求',
    },
    {
      name: 'AI 顧問',
      price: '50,000',
      unit: '月',
      includes: ['AI 策略諮詢', '導入順序規劃', '自建 vs SaaS 工具選型', '員工訓練', '定期模型更新'],
      bestFor: '上市櫃公司、全面導入 AI',
    },
  ],
  serviceType: 'AI 開發',
  priceMin: '50000',
  priceUnit: '專案',
}
