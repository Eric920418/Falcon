import type { ServiceContent } from '../types'

export const digitalAdsService: ServiceContent = {
  slug: 'digital-ads',
  title: '數位廣告投放｜Google Ads、Meta、LINE LAP 代操',
  h1: '數位廣告代操',
  description:
    '隼訊提供 Google Ads、Meta（Facebook / Instagram）、LINE LAP、TikTok 廣告代操。以 ROAS 為核心指標，透明月報、客製化 Landing Page、Server-side Tracking。',
  keywords: ['Google Ads', 'Facebook 廣告', 'Meta 廣告', 'LINE LAP', '廣告代操', '數位廣告'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  qualityTier: 'draft',
  intro:
    '廣告代操常被當成「點擊數」「曝光率」這類虛榮指標的遊戲。我們的做法是把所有焦點放在 ROAS：客戶每花 1 元廣告費，換回多少營收。',
  sections: [
    {
      heading: '我們投放的平台',
      body: '',
      items: [
        'Google Ads（搜尋、購物、YouTube、Display）',
        'Meta（Facebook + Instagram，所有版位）',
        'LINE LAP（LINE 官方帳號、LINE Today、LINE TV）',
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
        '創意 A/B 測試（每月測 5-10 組素材）',
        '所有數據開放給客戶查看',
      ],
    },
  ],
  faq: [
    {
      question: '廣告代操費怎麼算？',
      answer:
        '兩種模式：(1) 固定月費 1.5-3 萬 + 廣告費另計，適合月廣告預算 10 萬以下；(2) 廣告費 15-25% 抽成，適合月廣告預算 10 萬以上。',
    },
    {
      question: '最低廣告預算多少才划算？',
      answer:
        'Google Ads 建議月預算 1-3 萬起、Meta 廣告 1-2 萬起。預算太低（< 1 萬）廣告系統樣本不足，演算法無法有效優化。',
    },
    {
      question: '廣告多久看到效果？',
      answer:
        '前 2 週通常是「學習期」，廣告系統測試最佳投放對象。第 3-4 週起 ROAS 通常會改善。如果 1 個月仍沒效果，問題多半在著陸頁或產品本身，不在廣告操作。',
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
      price: '20,000',
      unit: '月',
      includes: ['單一平台代操', '月度報告', 'GA4 設定', '創意建議（不含設計製作）'],
      bestFor: '廣告預算 10 萬以下',
    },
    {
      name: '進階代操',
      price: '40,000',
      unit: '月',
      includes: ['多平台代操', '創意設計 + A/B 測試', '客製化 Landing Page', 'Server-side Tracking'],
      bestFor: '廣告預算 10-50 萬',
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
  priceMin: '20000',
  priceUnit: '月',
}
