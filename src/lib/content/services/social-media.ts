import type { ServiceContent } from '../types'

export const socialMediaService: ServiceContent = {
  slug: 'social-media',
  title: '社群經營｜Instagram、Facebook、LINE 官方帳號',
  h1: '社群經營 — 把粉絲變成客戶，把客戶變成傳教士',
  description:
    '隼訊提供 Instagram、Facebook、LINE、Threads、TikTok 社群經營服務。內容企劃、視覺設計、互動經營、KOL 合作、社群電商整合。',
  keywords: ['社群經營', 'IG 經營', 'Facebook 經營', 'LINE 官方帳號', '社群行銷', '小編', 'KOL 行銷'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  intro:
    '社群不是「發貼文衝粉絲數」的遊戲。真正有效的社群經營是把陌生人 → 粉絲 → 客戶 → 推薦人的轉換工程。隼訊不接「只衝按讚數」的案，我們只做能帶來實際轉換的社群策略。',
  sections: [
    {
      heading: '我們經營的平台與適用對象',
      body: '',
      items: [
        'Instagram：視覺品牌、餐飲、設計、時尚（年輕女性受眾）',
        'Facebook：本地服務、中高年齡層 B2C、社團經營',
        'LINE 官方帳號：客戶服務、會員忠誠度、快訊推播（轉換率最高）',
        'TikTok：年輕受眾、品牌曝光、病毒式內容',
        'Threads：B2B、知識型品牌、品牌調性建立',
      ],
    },
    {
      heading: '隼訊社群服務內容',
      body: '',
      items: [
        '月度內容企劃（每月 12-30 篇貼文，依方案）',
        '視覺設計（IG 九宮格、Reels、限動模板）',
        '短影音製作（IG Reels、TikTok）',
        '互動經營（回覆留言、私訊、社群管理）',
        '社群廣告投放（Meta Ads 整合）',
        'KOL / 微網紅合作媒合',
        '月度成效報告（粉絲增長、互動率、轉換）',
      ],
    },
  ],
  faq: [
    {
      question: '社群代操一個月多少錢？',
      answer: '基礎方案 1.5-2.5 萬/月（單一平台、12 篇貼文）；進階方案 3-5 萬（多平台、Reels 製作）；企業級 8 萬以上（含 KOL 合作、廣告投放）。費用差異主要在內容產量與是否含影音製作。',
    },
    {
      question: '我自己經營粉專很久沒成效，找代操會比較好嗎？',
      answer: '不一定。先檢視：(1) 內容是否符合平台演算法（Reels 比靜態貼文觸及高 5-10 倍）；(2) 是否有清楚的品牌調性；(3) 是否與業務目標連結。如果這些都做了還沒效，找代操才有意義。',
    },
    {
      question: '一定要拍短影音嗎？',
      answer: '2026 年是的。IG Reels 觸及率是靜態貼文的 5-10 倍；TikTok 全平台都是短影音。如果預算有限，建議「2 篇 Reels + 4 篇靜態」的混合策略，而非全部都做。',
    },
    {
      question: '粉絲多久會增加？',
      answer: '健康經營的粉專每月增 5-15% 自然粉絲。如果搭配 Reels + 廣告，可達每月 30-50%。但我們不追求「快速衝粉」（買殭屍粉、互按俱樂部），那些粉絲不會買東西。',
    },
  ],
  pricing: [
    {
      name: '單平台經營',
      price: '15,000',
      unit: '月',
      includes: ['12 篇貼文', '4 則限動', '基礎視覺設計', '月度報告'],
      bestFor: '小型品牌、新創',
    },
    {
      name: '雙平台經營',
      price: '25,000',
      unit: '月',
      includes: ['IG + FB 各 12 篇', '2 支 Reels', '互動經營', '月度策略會議'],
      bestFor: '成長期中小企業',
    },
    {
      name: '全方位社群',
      price: '50,000',
      unit: '月',
      includes: ['多平台整合', '4 支 Reels + TikTok', 'KOL 合作 1 次', '社群廣告整合', '專屬小編'],
      bestFor: '中大型品牌、電商',
    },
  ],
  cta: '想知道你品牌適合哪個社群平台？預約 30 分鐘社群策略諮詢',
  serviceType: '社群行銷',
  priceMin: '15000',
  priceUnit: '月',
}
