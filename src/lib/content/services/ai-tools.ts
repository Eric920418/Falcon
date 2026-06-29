import type { ServiceContent } from '../types'

export const aiToolsService: ServiceContent = {
  slug: 'ai-tools',
  title: 'AI 工具開發｜客服機器人、智能助理、企業自動化',
  h1: 'AI 工具開發',
  description:
    '隼訊提供客製化 AI 工具開發：AI 客服、語音接聽、知識庫問答、文件處理自動化、銷售助理。整合 GPT、Claude、Gemini API，可部署在客戶自有伺服器。',
  keywords: ['AI 工具', 'AI 開發', 'AI 客服', '聊天機器人', 'ChatGPT 整合', 'AI 自動化', 'AI 語音'],
  intent: 'commercial',
  lastModified: '2026-06-29',
  qualityTier: 'production',
  intro:
    'AI 工具導入的關鍵不是「用什麼模型」，而是「找到 ROI 最高的切入點」。我們做的第一件事是盤點你的流程，找出哪些工作適合 AI 取代或輔助，再決定該自建還是用現成 SaaS——不是每個環節都值得導入 AI，硬塞反而是浪費。',
  sections: [
    {
      heading: '我們做的 AI 應用類型',
      body: '',
      items: [
        'AI 客服 / 智能助理（LINE、網站、Slack）',
        'AI 語音接聽與派單（電話即時語音對話、自動建單）',
        '企業知識庫問答系統（員工問內部文件、SOP）',
        '文件處理自動化（合約審閱、發票辨識、報表整理）',
        '客製化 GPT / Claude 助理（特定領域知識）',
      ],
    },
    {
      heading: '技術選擇彈性',
      body: '',
      items: [
        '不綁定單一 AI 廠商：整合 GPT、Claude、Gemini，依任務選最適合的模型',
        '部署彈性：可用雲端 API，也可把開源模型部署在客戶自有伺服器（資料不外流）',
        '完整原始碼交付，不收長期授權費',
        '與 LINE、Slack 及自有後端系統的串接經驗',
      ],
    },
    {
      heading: '我們的觀點：先算 ROI，別為了 AI 而 AI',
      body:
        '這兩年最常見的狀況，是老闆看了新聞覺得「我們也該導入 AI」，但說不清楚要解決什麼問題。我們的做法剛好相反：先找那個「重複、耗人力、又有明確規則」的環節下手，因為那裡的投資報酬最容易算得出來。舉個我們自己做的例子——花蓮計程車車隊每天大量電話叫車，接線是高度重複的人力工作，我們替它做了 AI 語音接聽（即時語音對話、自動辨識地標、直接建單派車），這種地方導入 AI 才划算。反過來，如果只是想要一個「看起來很厲害」的 AI，我們會老實跟你說別花這個錢。',
    },
    {
      heading: '實際做過的 AI 案子',
      body:
        '我們交付過的 AI 應用包括：GoGoCha 花蓮計程車的 AI 電話接聽與 SmartDispatcherV2 智慧派單後端；戀愛互動遊戲《Alive》的多模型編排（Claude／Gemini／OpenAI）與 7 維情緒系統，已上架 iOS／Android；以及中醫診所的 LINE 預約系統（含併發控制與大量 E2E 測試）。這些都是上線運行中的真實系統，不是 demo。',
    },
  ],
  howTo: {
    name: '隼訊 AI 工具導入流程',
    description: '我們替企業導入 AI 工具時，從盤點到上線的實際步驟。',
    steps: [
      {
        name: '流程盤點找切入點',
        text: '盤點你的工作流程，找出重複、耗人力、規則明確、ROI 最高的環節作為導入起點。',
      },
      {
        name: '自建 vs SaaS 選型',
        text: '依資料敏感度、整合需求與成本，決定該用雲端 API、開源自架，還是現成 SaaS。',
      },
      {
        name: 'MVP 開發',
        text: '先做一個能試用的最小可行版本，通常第二週就能看到雛形，及早驗證方向。',
      },
      {
        name: '試用回饋與調整',
        text: '讓實際使用者試用，依回饋調整提示詞、知識庫與互動流程。',
      },
      {
        name: '整合上線與交付',
        text: '與既有系統整合、上線，交付原始碼並提供維運說明。',
      },
    ],
    totalTime: 'P30D',
  },
  faq: [
    {
      question: 'AI 客服開發大概多少錢？',
      answer:
        'MVP 版本約 6 萬一次性費用 + 每月 1–3 萬 API 費用（API 為實際用量成本，照原價計）。客製化複雜版本 15–25 萬。具體價格依需求功能、整合複雜度而定。',
    },
    {
      question: 'AI 工具要做多久？',
      answer:
        'MVP 約 3–4 週；完整客製化 6–12 週。採用敏捷開發，通常第二週可看到可試用的雛形。',
    },
    {
      question: '我可以自己用 ChatGPT，為什麼要找你們開發？',
      answer:
        '如果是個人輔助，自己用即可。客製化開發適用於：員工 / 客戶共用、需連接內部資料、需整合既有系統、需符合資料合規要求。建議先諮詢釐清需求屬於哪一類。',
    },
    {
      question: '會不會洩漏客戶資料？',
      answer:
        '依資料敏感度設計：低敏感度可用 OpenAI / Anthropic API（有資料保留政策）；高敏感度可部署開源模型在客戶自有伺服器，資料完全不出去。我們做過含併發控制與測試的醫療預約系統，理解敏感資料的處理要求。',
    },
  ],
  pricing: [
    {
      name: 'AI 客服 MVP',
      price: '60,000',
      unit: '專案',
      includes: ['基礎 chatbot（GPT / Claude API）', '知識庫整合（50 題以內）', 'LINE / 網站嵌入', '3 個月技術支援'],
      bestFor: '中小企業、想試水溫',
    },
    {
      name: '客製化 AI 助理',
      price: '150,000',
      unit: '專案起',
      includes: ['完整客製功能', 'CRM / 內部系統整合', '多語言', '客製化 UI', '6 個月技術支援'],
      bestFor: '中大型企業、特定流程需求',
    },
    {
      name: 'AI 顧問',
      price: '25,000',
      unit: '月',
      includes: ['AI 策略諮詢', '導入順序規劃', '自建 vs SaaS 工具選型', '員工訓練', '定期模型更新'],
      bestFor: '上市櫃公司、全面導入 AI',
    },
  ],
  serviceType: 'AI 開發',
  priceMin: '25000',
  priceUnit: '專案',
}
