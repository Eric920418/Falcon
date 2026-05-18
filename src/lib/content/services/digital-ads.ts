import type { ServiceContent } from '../types'

export const digitalAdsService: ServiceContent = {
  slug: 'digital-ads',
  title: '數位廣告投放｜Google Ads、Meta、LINE LAP 代操',
  h1: '數位廣告代操 — 把每一塊預算花在刀口上',
  description:
    '隼訊提供 Google Ads、Meta（Facebook / Instagram）、LINE LAP、TikTok 廣告代操。專注 ROAS 而非「曝光率」這種虛榮指標。透明月報、可驗證的轉換追蹤。',
  keywords: ['Google Ads', 'Facebook 廣告', 'IG 廣告', 'Meta 廣告', 'LINE LAP', '廣告代操', '數位廣告', '廣告投放公司'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  intro:
    '90% 的廣告代操公司在欺騙你：他們秀「點擊數」「曝光數」這種看起來很大但跟營收無關的數字。真正的廣告代操只看一個指標：你花 1 元，換回幾元營收（ROAS）。隼訊只用這個邏輯做事。',
  sections: [
    {
      heading: '我們投放的平台',
      body: '',
      items: [
        'Google Ads（搜尋廣告、購物廣告、YouTube、Display）',
        'Meta（Facebook + Instagram 廣告，所有版位）',
        'LINE LAP（LINE 官方帳號、LINE Today、LINE TV）',
        'TikTok Ads（短影音廣告）',
        'YouTube Ads（前貼片、串流內、發現）',
      ],
    },
    {
      heading: '隼訊廣告代操的差異化',
      body: '',
      items: [
        'ROAS 為核心：每月報告聚焦「花多少賺多少」，不秀虛榮指標',
        '完整轉換追蹤：GA4 + Meta Pixel + 加 server-side tracking，避免 iOS 14.5 數據遺失',
        '客製化 Landing Page：廣告流量導入專屬頁，轉換率比導首頁高 2-3 倍',
        '創意 A/B 測試：每月測試 5-10 組素材，淘汰低效廣告',
        '透明報告：所有數據開放讓你看到，不藏帳',
      ],
    },
    {
      heading: '什麼產業適合做廣告投放？',
      body:
        '不是所有產業都適合大量投廣告。我們會誠實告知：客單價低、利潤率低於 30% 的產品很難做廣告賺錢。最適合廣告投放的：客單價 > 1000 元、利潤率 > 50%、有明確購買場景的產品 / 服務。',
    },
  ],
  faq: [
    {
      question: '廣告代操費怎麼算？',
      answer: '兩種模式：(1) 固定月費 1.5-3 萬 + 廣告費另計（適合預算 < 10 萬/月）；(2) 廣告費 15-25% 抽成（適合預算 > 10 萬/月）。隼訊兩種都做，根據你預算建議。',
    },
    {
      question: '最低廣告預算多少才划算？',
      answer: 'Google Ads 建議每月 1-3 萬起、Meta 廣告每月 1-2 萬起。預算太低（< 1 萬）廣告系統樣本不夠，演算法無法優化。',
    },
    {
      question: '廣告多久看到效果？',
      answer: '前 2 週為「學習期」，廣告系統測試最佳投放對象。第 3-4 週起 ROAS 通常會顯著改善。如果 1 個月還沒效果，通常是著陸頁 / 產品本身問題，不是廣告問題。',
    },
    {
      question: '保證 ROAS 多少？',
      answer: '不保證。任何廣告代操公司「保證 ROAS 5x」幾乎都是話術。我們承諾的是：每月透明報告、根據數據快速優化、達不到目標時主動分析原因（而非只丟結果）。',
    },
    {
      question: '可以自己投嗎？',
      answer: '預算 < 3 萬/月可以自己學著投。預算 > 5 萬/月找代操更划算，因為廣告經理的優化能力可以多賺回 20-30% ROAS，遠超代操費。',
    },
  ],
  pricing: [
    {
      name: '基礎代操',
      price: '20,000',
      unit: '月',
      includes: ['單一平台代操', '月度報告', '創意建議（不含設計製作）', 'GA4 設定'],
      bestFor: '廣告預算 < 10 萬/月',
    },
    {
      name: '進階代操',
      price: '40,000',
      unit: '月',
      includes: ['多平台代操', '創意設計 + A/B 測試', '客製化 Landing Page', '雙週優化會議', 'Server-side tracking'],
      bestFor: '廣告預算 10-50 萬/月',
    },
    {
      name: '抽成方案',
      price: '15-25%',
      unit: '廣告費抽成',
      includes: ['所有平台代操', '無上限創意製作', '專屬 PM', '即時數據儀表板'],
      bestFor: '廣告預算 > 50 萬/月',
    },
  ],
  cta: '免費廣告帳戶健檢：分析你過去 3 個月廣告數據，找出浪費的預算',
  serviceType: '數位廣告',
  priceMin: '20000',
  priceUnit: '月',
}
