import type { ServiceContent } from '../types'

export const digitalAdsService: ServiceContent = {
  slug: 'digital-ads',
  title: '數位廣告投放｜Google Ads、Meta、LINE LAP 代操',
  h1: '數位廣告代操',
  description:
    '隼訊提供 Google Ads、Meta（Facebook / Instagram）、LINE LAP、TikTok 廣告代操。以 ROAS 為核心指標，透明月報、客製化 Landing Page、Server-side Tracking。',
  keywords: ['Google Ads', 'Facebook 廣告', 'Meta 廣告', 'LINE LAP', '廣告代操', '數位廣告'],
  intent: 'commercial',
  lastModified: '2026-06-29',
  qualityTier: 'production',
  intro:
    '廣告代操常被當成「點擊數」「曝光率」這類虛榮指標的遊戲。我們的做法是把焦點放在 ROAS：你每花 1 元廣告費，換回多少營收。其他數字再好看，不能轉成生意都只是參考。',
  sections: [
    {
      heading: '我們投放的平台',
      body: '',
      items: [
        'Google Ads（搜尋、購物、YouTube、Display）',
        'Meta（Facebook + Instagram，所有版位）',
        'LINE LAP（LINE 官方帳號、LINE Today）',
        'TikTok Ads',
        'YouTube Ads',
      ],
    },
    {
      heading: '隼訊代操執行內容',
      body: '',
      items: [
        '月度 ROAS 報告（不秀曝光 / 點擊這類虛榮指標）',
        '完整轉換追蹤（GA4 + Pixel + Server-side Tracking）',
        '客製化 Landing Page（依廣告族群分流）',
        '創意 A/B 測試（每月測多組素材）',
        '所有數據開放給客戶查看',
      ],
    },
    {
      heading: '我們的觀點：廣告救不了爛產品與爛著陸頁',
      body:
        '我們最常需要先說清楚的一件事是：廣告只負責「把對的人帶到你面前」，成不成交，看的是產品、價格與著陸頁。如果一個月過去 ROAS 還是不行，問題十之八九不在廣告操作，而在著陸頁說服力不足、產品本身沒有競爭力、或目標受眾設錯。所以我們接案前會先看你的著陸頁與轉換流程——如果那一段有明顯破洞，我們會建議你先把那裡補好，再開廣告，否則等於拿廣告費去測一個注定漏水的桶子。這也是為什麼我們的代操含客製化 Landing Page 與完整轉換追蹤：沒有乾淨的數據，優化就是瞎猜。',
    },
  ],
  howTo: {
    name: '隼訊廣告代操流程',
    description: '我們接手一個廣告帳戶時，從建立追蹤到持續優化的實際步驟。',
    steps: [
      {
        name: '建立轉換追蹤',
        text: '先設定 GA4、Pixel 與 Server-side Tracking，確保每一筆轉換都量得準——數據不乾淨，後面的優化都是瞎猜。',
      },
      {
        name: '受眾與素材規劃',
        text: '依產品與目標客群規劃投放受眾，並準備多組創意素材與對應的著陸頁。',
      },
      {
        name: '學習期投放',
        text: '前一兩週讓廣告系統累積資料、找到最佳投放對象，此時數字波動屬正常。',
      },
      {
        name: '依數據優化',
        text: '根據 ROAS 與轉換數據關掉表現差的素材與受眾、加碼有效的組合，並持續 A/B 測試。',
      },
      {
        name: '月報與檢討',
        text: '每月提供以 ROAS 為核心的透明報告，未達標時主動分析原因（廣告、著陸頁，還是產品）。',
      },
    ],
    totalTime: 'P30D',
  },
  faq: [
    {
      question: '廣告代操費怎麼算？',
      answer:
        '兩種模式：(1) 固定月費 0.75–1.5 萬 + 廣告費另計，適合月廣告預算 10 萬以下；(2) 廣告費 15–25% 抽成，適合月廣告預算 10 萬以上。',
    },
    {
      question: '最低廣告預算多少才划算？',
      answer:
        'Google Ads 建議月預算 1–3 萬起、Meta 廣告 1–2 萬起。預算太低（< 1 萬）廣告系統樣本不足，演算法無法有效優化。',
    },
    {
      question: '廣告多久看到效果？',
      answer:
        '前 2 週通常是「學習期」，廣告系統測試最佳投放對象。第 3–4 週起 ROAS 通常會改善。如果 1 個月仍沒效果，問題多半在著陸頁或產品本身，不在廣告操作。',
    },
    {
      question: '可以保證 ROAS 嗎？',
      answer:
        '不能。我們不做「保證 ROAS 5x」這類承諾。能做到的是：透明數據、根據結果快速優化、達不到目標時主動分析原因。',
    },
  ],
  pricing: [
    {
      name: '基礎代操',
      price: '10,000',
      unit: '月',
      includes: ['單一平台代操', '月度報告', 'GA4 設定', '創意建議（不含設計製作）'],
      bestFor: '廣告預算 10 萬以下',
    },
    {
      name: '進階代操',
      price: '20,000',
      unit: '月',
      includes: ['多平台代操', '創意設計 + A/B 測試', '客製化 Landing Page', 'Server-side Tracking'],
      bestFor: '廣告預算 10–50 萬',
    },
    {
      name: '抽成方案',
      price: '15-25%',
      unit: '廣告費抽成',
      includes: ['全平台代操', '創意製作無上限', '專屬 PM', '即時數據儀表板'],
      bestFor: '廣告預算 50 萬以上',
    },
  ],
  serviceType: '數位廣告',
  priceMin: '10000',
  priceUnit: '月',
}
