import type { ServiceContent } from '../types'

export const videoService: ServiceContent = {
  slug: 'video',
  title: '短影音與形象影片製作｜TikTok、Reels、企業形象片',
  h1: '影片製作',
  description:
    '隼訊提供短影音（TikTok、IG Reels）、企業形象影片、產品宣傳影片、活動紀錄影片製作。從腳本企劃到後製剪輯一條龍服務。',
  keywords: ['短影音製作', 'Reels 製作', 'TikTok 製作', '形象影片', '企業影片', '產品影片'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  qualityTier: 'draft',
  intro:
    '影片是社群演算法重點扶植的內容類型，也是轉換率較高的廣告素材。我們做的是從腳本到剪輯一條龍，避免你同時找腳本、攝影、剪接三家不同廠商的協調成本。',
  sections: [
    {
      heading: '我們製作的影片類型',
      body: '',
      items: [
        '短影音（IG Reels、TikTok、YouTube Shorts，15-60 秒）',
        '產品宣傳影片（30 秒 - 2 分鐘）',
        '企業形象影片（3-5 分鐘）',
        '案例 / 客戶見證影片',
        '活動紀錄影片（記者會、發表會、展會）',
        '教學 / 知識型影片（YouTube 經營）',
      ],
    },
    {
      heading: '製作流程',
      body: '',
      items: [
        '第 1 週：腳本企劃、分鏡圖、選角 / 場地',
        '第 2 週：拍攝',
        '第 3 週：剪輯、配樂、字幕、調色',
        '第 4 週：客戶修改回饋、最終交付',
      ],
    },
  ],
  faq: [
    {
      question: '一支影片大概多少錢？',
      answer:
        '短影音 1.5-3 萬 / 支；產品宣傳影片 5-10 萬 / 支；企業形象片 15-30 萬 / 支。費用差異主要在：拍攝天數、場景複雜度、是否需演員、後製複雜度。',
    },
    {
      question: '可以包月嗎？',
      answer:
        '可以。短影音包月：4 支 / 月 5 萬、8 支 / 月 8 萬、12 支 / 月 11 萬。適合需要持續社群經營的品牌。',
    },
    {
      question: '腳本是我自己想還是你們想？',
      answer:
        '腳本企劃服務內含。但你需要提供：品牌調性、想傳達的核心訊息、目標受眾、參考範例（若有）。完全沒方向的客戶我們會先做 1-2 小時方向訪談（不另收費）。',
    },
  ],
  pricing: [
    {
      name: '短影音單支',
      price: '15,000',
      unit: '支',
      includes: ['半日拍攝', '腳本企劃', '剪輯字幕', '1 次修改'],
      bestFor: '社群短影音、Reels',
    },
    {
      name: '短影音包月',
      price: '50,000',
      unit: '月（4 支）',
      includes: ['4 支 Reels', '統一品牌調性', '客戶專屬模板', '2 次修改'],
      bestFor: '社群品牌',
    },
    {
      name: '形象影片',
      price: '180,000',
      unit: '支',
      includes: ['2-3 日拍攝', '專業設備', '配樂版權', '4K 交付', '2 次修改'],
      bestFor: '企業官網、品牌主視覺',
    },
  ],
  serviceType: '影片製作',
  priceMin: '15000',
  priceUnit: '支',
}
