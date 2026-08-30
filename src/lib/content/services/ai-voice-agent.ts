import type { AiVoiceCapability, ServiceContent } from '../types'

export const aiVoiceCapabilities: AiVoiceCapability[] = [
  {
    title: 'AI 電話接聽與需求追問',
    description: '把來電內容整理為系統可使用的欄位；資訊不足時追問，無法確認時保留人工接手。',
    status: 'demonstrated',
    evidenceHref: '/case-studies/gogocha-ai-dispatch',
  },
  {
    title: '即時建單與派單工作流',
    description: '接聽結果不只產生逐字稿，而是直接進入後端建單、佇列與即時通知流程。',
    status: 'demonstrated',
    evidenceHref: '/case-studies/gogocha-ai-dispatch',
  },
  {
    title: '網站、LINE、App 與後台共用流程',
    description: '不同入口共用資料與派單後端，降低重複輸入和跨系統狀態不一致。',
    status: 'demonstrated',
    evidenceHref: '/case-studies/gogocha-ai-dispatch',
  },
  {
    title: 'PBX、SIP Trunk 與企業代表號',
    description: '依既有電信與交換機環境設計串接；正式建置前需先確認供應商、號碼與路由限制。',
    status: 'custom',
  },
  {
    title: '多線併發、排隊與溢出路由',
    description: '依尖峰量、等待策略與人工席位規劃容量，並以壓力測試和驗收條件確認。',
    status: 'custom',
  },
  {
    title: '錄音、逐字稿、監控與稽核',
    description: '依告知、權限、保存期限與刪除政策客製，不預設所有通話都適合永久保存。',
    status: 'custom',
  },
  {
    title: 'CRM、ERP、工單與客服席位',
    description: '透過 API 或事件串接既有系統；能否雙向同步取決於對方系統權限與介面。',
    status: 'custom',
  },
  {
    title: '外撥通知與人工轉接',
    description: '依聯絡目的、同意管理、電話服務商能力與內部流程設計，需個別 POC 驗收。',
    status: 'custom',
  },
]

export const aiVoiceWorkflow = [
  ['01', '來電進入', '既有代表號、雲端電話或 SIP 路由將來電送進處理流程。'],
  ['02', '辨識與追問', 'AI 依任務取得必要欄位；不確定時追問，不硬猜地址、金額或身分。'],
  ['03', '規則與權限', '後端檢查營業規則、資料格式、權限與可執行範圍。'],
  ['04', '執行系統動作', '建立派單、工單、預約或 CRM 紀錄，而不是只留下對話摘要。'],
  ['05', '通知與同步', '把狀態同步至後台、LINE、App 或企業既有系統。'],
  ['06', '人工接手', '低信心、敏感事項或系統失敗時，保留上下文轉給人工處理。'],
] as const

export const aiVoiceQuoteFactors = [
  '進線、外撥或雙向通話範圍',
  '尖峰併發線路與等待策略',
  '既有 PBX、SIP、代表號與電信商',
  '語言、專有名詞與知識庫品質',
  'CRM、ERP、工單、預約或派單 API',
  '錄音告知、保存期限、權限與稽核',
  '人工席位、轉接規則與服務時段',
  '雲端、自有環境、維運與 SLA',
]

export const aiVoiceArticles = [
  {
    slug: 'ai-voice-customer-service-guide',
    title: 'AI 語音客服是什麼？企業導入架構與適用情境',
    description: '先理解它如何從通話走到系統動作，再判斷是否適合導入。',
  },
  {
    slug: 'ai-voice-customer-service-cost',
    title: 'AI 語音客服費用：建置、電話、模型與維運成本',
    description: '拆解客製報價的成本項目，不用不切實際的低價吸引詢問。',
  },
  {
    slug: 'ai-voice-vs-ivr-human-agent',
    title: 'AI 語音客服、IVR 與真人客服怎麼選？',
    description: '依任務風險、流程變化與服務品質選擇，而非全面取代人工。',
  },
  {
    slug: 'ai-phone-pbx-crm-integration',
    title: 'AI 電話如何串接 PBX、CRM、工單與派單系統',
    description: '整理電話層、AI 層與企業系統層的責任邊界。',
  },
  {
    slug: 'ai-voice-agent-poc-acceptance-checklist',
    title: 'AI 語音客服 POC 怎麼驗收？測試情境、指標與上線門檻',
    description: '用黃金測試案例、失敗路徑與系統結果決定是否值得進入正式建置。',
  },
  {
    slug: 'ai-voice-latency-barge-in-turn-taking',
    title: 'AI 語音客服延遲與打斷怎麼測？',
    description: '拆解 VAD、Barge-in、工具呼叫與端到端延遲，不用單一秒數掩蓋問題。',
  },
  {
    slug: 'ai-call-recording-privacy-security',
    title: 'AI 電話錄音與個資怎麼處理？',
    description: '盤點錄音、逐字稿、權限、保存、供應商與測試資料的風險邊界。',
  },
  {
    slug: 'ai-voice-human-handoff-escalation',
    title: 'AI 語音客服怎麼轉真人？',
    description: '設計觸發條件、上下文交接，以及滿線、斷線與系統失敗的降級流程。',
  },
] as const

export const aiVoiceService: ServiceContent = {
  slug: 'ai-voice-agent',
  title: 'AI 語音客服系統｜企業 AI 電話、派單與 CRM 串接',
  h1: '企業 AI 語音客服與電話自動化系統',
  description:
    '隼訊客製企業 AI 語音客服與電話自動化：串接既有電話、派單、工單、CRM 與人工接手流程；以 GoGoCha 公開案例證明實作範圍。',
  keywords: [
    'AI 語音客服',
    'AI 電話客服',
    'AI 語音客服系統',
    '電話機器人',
    'AI IVR',
    'VoiceBot',
    'AI Voice Agent',
    'AI 電話系統',
  ],
  intent: 'commercial',
  lastModified: '2026-08-30',
  qualityTier: 'production',
  intro:
    'AI 語音客服不是把聊天機器人接上電話而已。企業真正需要的是讓來電內容進入可控工作流：取得必要資訊、查詢規則、建立派單或工單、同步既有系統，並在 AI 無法確認時交給人工。隼訊提供這類客製整合，GoGoCha 是我們已公開的實作證據。',
  sections: [
    {
      heading: 'AI 語音客服是什麼？',
      body:
        'AI 語音客服是能在電話中辨識語音、理解任務、產生回覆並呼叫企業系統的軟體流程。和只播放選單的傳統 IVR 不同，它可處理較自然的說法與追問；但它仍會誤判，所以金額、身分、地址與高風險決策必須搭配規則驗證、低信心降級與人工接手。',
    },
    {
      heading: '我們主打的不是語音展示，而是系統真的完成工作',
      body:
        '若電話結束後仍要員工重新抄寫、登入另一套系統建單，AI 只把接線工作換成逐字稿。隼訊的重點是把通話結果轉成派單、工單、預約或 CRM 動作，並讓網站、LINE、App 與後台看到同一份狀態。',
    },
  ],
  faq: [
    {
      question: 'AI 語音客服可以直接取代真人客服嗎？',
      answer:
        '不建議把「全面取代」當成導入目標。規則明確、重複性高的查詢與建單適合自動化；客訴、金流、法遵、身分爭議與低信心對話應轉人工。好的系統會先定義接手條件，而不是讓 AI 硬撐到底。',
    },
    {
      question: '可以沿用公司的電話號碼或 PBX 嗎？',
      answer:
        '通常可評估沿用，但要先確認電信商、代表號、PBX／SIP 支援、轉接方式與錄音需求。這些屬客製範圍，會在 POC 前確認，不會在沒看環境前保證一定能直接接上。',
    },
    {
      question: 'AI 聽錯地址、姓名或訂單內容怎麼辦？',
      answer:
        '重要欄位要重述確認，後端再做格式與業務規則檢查。連續無法確認、信心不足或觸及敏感事項時，應攜帶已取得的上下文轉人工，避免使用者全部重講。',
    },
    {
      question: 'AI 電話系統怎麼計價？',
      answer:
        '採客製報價。成本取決於通話方向、併發線路、電信與 PBX、語言、企業系統串接、錄音保存、人工席位、部署與 SLA；另有電話、語音辨識、語音合成與模型的實際用量費。',
    },
    {
      question: 'GoGoCha 案例證明了哪些能力？',
      answer:
        '公開資料可證明 AI 電話入口、即時派單後端，以及網站、LINE、司機／乘客 App 與營運後台整合。未公開的車隊營收、人力節省與真實通話 SLA 不會被拿來當成成效宣稱。',
    },
  ],
  serviceType: '企業 AI 語音客服與電話自動化系統開發',
  priceMin: '客製報價',
  priceUnit: '依需求',
}
