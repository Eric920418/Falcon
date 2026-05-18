import type { ServiceContent } from '../types'

export const aiToolsService: ServiceContent = {
  slug: 'ai-tools',
  title: 'AI 工具開發｜AI 客服、智能助理、企業自動化',
  h1: 'AI 工具開發 — 用 AI 替你的企業省下 50% 重複工作',
  description:
    '隼訊提供客製化 AI 工具開發：AI 聊天機器人、智能客服、知識庫問答、自動化工作流。整合 GPT、Claude、Gemini API，串接 LINE、Slack、企業內部系統。',
  keywords: ['AI 工具', 'AI 開發', 'AI 客服', '聊天機器人', 'ChatGPT 整合', 'AI 自動化', '企業 AI', 'AI 開發報價'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  intro:
    '2026 年，AI 不再是「未來」，而是「現在不做就會落後」的剛性需求。但很多企業導入 AI 失敗的原因不是 AI 不好，是導入策略錯了 — 把 AI 當成「萬能解」而非「特定流程的優化器」。隼訊專注於替你找出 ROI 最高的 AI 切入點，而不是賣你華麗但用不到的功能。',
  sections: [
    {
      heading: '我們提供的 AI 解決方案',
      body: '',
      items: [
        'AI 客服 / 智能助理（LINE、網站聊天視窗、Slack）',
        '企業知識庫問答系統（員工問內部文件、SOP）',
        'AI 內容生成（行銷文案、產品描述、社群貼文）',
        '文件處理自動化（合約審閱、發票辨識、報表整理）',
        'AI 銷售助理（潛客資格判斷、自動回覆、跟進）',
        '客製化 GPT / Claude 助理（特定領域知識訓練）',
      ],
    },
    {
      heading: 'AI 客服 vs 傳統客服系統的差別',
      body: '傳統 chatbot（按鈕選單式）能解決 30% 簡單問題，AI 客服能解決 70-80%。差異：',
      items: [
        '理解自然語言（用戶不用按按鈕，直接打字描述問題）',
        '基於你的知識庫回答（不會像 ChatGPT 那樣亂掰）',
        '24/7 不需人工值班、不會累、不會情緒化',
        '多語言（中、英、日同時支援）',
        '可整合 CRM 自動建立客戶資料',
      ],
    },
    {
      heading: '為什麼找隼訊做 AI 開發比較划算？',
      body: '',
      items: [
        '不綁定 OpenAI：我們整合 GPT、Claude、Gemini，按需求選最便宜方案',
        '不收授權費：完整原始碼交付，不像 SaaS 平台月月收',
        '本地化：在地團隊、中文無障礙溝通、半天可到場開會',
        '安全合規：可部署在你自己的伺服器，資料不外流',
        'API 串接經驗：與 LINE、Slack、HubSpot、SAP 等系統整合過',
      ],
    },
  ],
  faq: [
    {
      question: 'AI 客服開發要多少錢？',
      answer: 'AI 客服 MVP（基礎版）約 10-15 萬一次性費用 + 每月 1-3 萬 API 費用。客製化複雜版本 30-50 萬。比 SaaS（如 Intercom AI 一年 30 萬）長期划算。',
    },
    {
      question: 'AI 工具開發要多久？',
      answer: 'MVP（最小可用版）約 3-4 週；完整客製化 6-12 週。我們採敏捷開發，第二週就能看到雛形試用。',
    },
    {
      question: '我可以自己用 ChatGPT，為什麼要找你們開發 AI？',
      answer: '如果你的需求是「個人輔助」，自己用 ChatGPT 就夠了。但如果是「企業級應用」（員工 / 客戶共用、要連你的內部資料、要整合系統、要符合合規），就需要客製化開發。我們提供 30 分鐘免費諮詢判斷你的需求屬於哪一類。',
    },
    {
      question: '會不會用 AI 把客戶資料洩漏？',
      answer: '我們會根據資料敏感度設計架構：低敏感度可用 OpenAI API（資料 30 天後刪除）；高敏感度部署 Llama 3 / Mistral 在你自己伺服器，資料完全不出去。隼訊有金融與醫療客戶的合規開發經驗。',
    },
    {
      question: 'AI 工具用一陣子會「變笨」嗎？',
      answer: '不會自動變笨，但會需要維護。我們提供月度模型更新服務（新 GPT 模型上線後升級）、prompt 優化、知識庫更新。維護費用約 1-3 萬/月。',
    },
  ],
  pricing: [
    {
      name: 'AI 客服 MVP',
      price: '120,000',
      unit: '專案',
      includes: ['基礎 chatbot', '知識庫整合（50 題以內）', 'LINE / 網站嵌入', '3 個月技術支援'],
      bestFor: '中小企業、想試水溫',
    },
    {
      name: '客製化 AI 助理',
      price: '300,000',
      unit: '專案起',
      includes: ['完整客製功能', 'CRM 整合', '多語言', '客製化 UI', '6 個月技術支援'],
      bestFor: '中大型企業、有特定流程需求',
    },
    {
      name: '企業 AI 顧問',
      price: '50,000',
      unit: '月',
      includes: ['AI 策略諮詢', '導入優先順序規劃', '工具選型', '員工訓練', '定期優化'],
      bestFor: '上市櫃公司、要全面導入 AI',
    },
  ],
  cta: '想找出你公司 ROI 最高的 AI 切入點？預約 1 小時免費 AI 導入諮詢',
  serviceType: 'AI 開發',
  priceMin: '50000',
  priceUnit: '專案',
}
