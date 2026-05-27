import type { ServiceContent } from '../types'

export const socialMediaService: ServiceContent = {
  slug: 'social-media',
  title: '社群經營｜Instagram、Facebook、LINE 官方帳號',
  h1: '社群經營',
  description:
    '隼訊提供 Instagram、Facebook、LINE、Threads、TikTok 社群經營服務。內容企劃、視覺設計、Reels 製作、KOL 合作媒合。',
  keywords: ['社群經營', 'IG 經營', 'Facebook 經營', 'LINE 官方帳號', '社群行銷', 'KOL 行銷'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  qualityTier: 'draft',
  intro:
    '社群經營是把陌生人 → 粉絲 → 客戶 → 推薦人的轉換工程，不是「衝粉絲數」的競賽。我們不接純衝按讚數的案，只做能銜接業務目標的社群策略。',
  sections: [
    {
      heading: '我們經營的平台',
      body: '',
      items: [
        'Instagram（視覺品牌、餐飲、設計、時尚）',
        'Facebook（本地服務、中高年齡層 B2C、社團經營）',
        'LINE 官方帳號（會員忠誠度、快訊推播）',
        'TikTok（年輕受眾、品牌曝光）',
        'Threads（B2B、知識型品牌）',
      ],
    },
    {
      heading: '隼訊社群服務內容',
      body: '',
      items: [
        '月度內容企劃（依方案 12-30 篇貼文）',
        '視覺設計（IG 九宮格、Reels、限動模板）',
        'Reels / TikTok 短影音製作',
        '互動經營（回覆留言、私訊管理）',
        '社群廣告投放（Meta Ads 整合）',
        'KOL / 微網紅合作媒合',
      ],
    },
  ],
  faq: [
    {
      question: '社群代操大概多少錢？',
      answer:
        '基礎方案 1.5-2.5 萬 / 月（單平台、12 篇貼文）；進階方案 3-5 萬（多平台、Reels）；企業級 8 萬以上（含 KOL 合作、廣告整合）。差異在內容產量與是否含影音製作。',
    },
    {
      question: '一定要拍短影音嗎？',
      answer:
        '2026 年的演算法已大幅偏好短影音。預算有限可採「2 篇 Reels + 4 篇靜態」混合策略，而非全部都做。',
    },
    {
      question: '粉絲多久會增加？',
      answer:
        '無法給準確時程。健康經營每月通常有自然成長，搭配 Reels + 廣告增速會明顯加快。我們不採用「衝粉」手法（買殭屍粉、互按俱樂部），那些粉絲不會帶來實際成交。',
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
      includes: ['多平台整合', '4 支 Reels + TikTok', 'KOL 合作 1 次', '社群廣告整合'],
      bestFor: '中大型品牌、電商',
    },
  ],
  serviceType: '社群行銷',
  priceMin: '15000',
  priceUnit: '月',
}
