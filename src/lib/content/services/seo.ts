import type { ServiceContent } from '../types'

export const seoService: ServiceContent = {
  slug: 'seo',
  title: 'SEO 搜尋引擎優化｜2026 台灣企業 Google 排名實戰',
  h1: 'SEO 搜尋引擎優化 — 不靠廣告也能長期穩定獲客',
  description:
    '隼訊數位行銷提供完整 SEO 服務：技術 SEO 健檢、關鍵字研究、內容優化、反向連結建立、Google Search Console 監測。專注台灣中小企業 Google 排名提升與自然流量增長。',
  keywords: ['SEO', '搜尋引擎優化', 'SEO 公司', 'SEO 服務', 'SEO 多少錢', 'Google 排名', '台灣 SEO', 'SEO 推薦'],
  intent: 'commercial',
  lastModified: '2026-05-18',
  intro:
    'SEO 是花錢買廣告之外，唯一能長期帶來穩定流量的渠道。一篇排到 Google 第一名的文章，可能連續 3-5 年每月帶來上千名訪客 — 而成本是一次性的。但 SEO 沒有捷徑，只有方法。隼訊用白帽手法搭配 GEO/AEO 整合，確保你的 SEO 投資在 AI 搜尋時代仍然有效。',
  sections: [
    {
      heading: 'SEO 的核心三要素：技術、內容、權威',
      body:
        '技術 SEO 解決爬蟲能不能讀懂你的網站（站速、行動裝置、結構化資料）；內容 SEO 解決你的內容是否回應用戶搜尋意圖；權威 SEO 解決外界（其他網站）對你信任度。三者缺一不可。',
      items: [
        '技術面：Core Web Vitals、HTTPS、Mobile-First、Schema.org、Sitemap、Robots.txt',
        '內容面：關鍵字研究、搜尋意圖匹配、內容深度（>1500 字）、E-E-A-T 訊號',
        '權威面：高品質反向連結、品牌提及、媒體報導、社群訊號',
      ],
    },
    {
      heading: '隼訊 SEO 服務流程',
      body: '我們不做黑帽、不買垃圾連結、不寫 AI 灌水內容。所有手法皆遵循 Google Webmaster Guidelines。',
      items: [
        '第一個月：SEO 全站健檢、競品分析、關鍵字戰略制定',
        '第二個月起：每月內容產出 4-8 篇、技術修正、反向連結建立',
        '每月報告：排名變化、流量數據、轉換追蹤、下月優化計劃',
        '與 GEO/AEO 整合：避免 SEO 內容在 AI 搜尋時代失效',
      ],
    },
    {
      heading: '什麼產業適合做 SEO？',
      body:
        'SEO 不適合所有產業。如果你的客戶決策週期極短（如外送、即時服務），SEO ROI 較低。SEO 最適合：客戶有研究行為的產業、競爭中等的細分市場、客單價 > 5000 元的服務或產品。',
    },
    {
      heading: '為什麼很多公司的 SEO 做不出來？',
      body: '我們接手過 30+ 家「之前找別人做 SEO 沒效果」的客戶，根本原因通常是：',
      items: [
        '只做關鍵字塞入，沒做搜尋意圖匹配（搜「SEO 報價」的人想看價錢，不是看 SEO 是什麼）',
        '內容量不夠（單篇 800 字，競品 3000 字，根本沒機會贏）',
        '網站速度差（LCP > 4 秒，Google 直接降權）',
        '沒有反向連結戰略（光靠站內優化已經不夠了）',
        '完全沒做結構化資料（錯失 Rich Results 加分）',
      ],
    },
  ],
  howTo: {
    name: 'SEO 優化的 6 個關鍵步驟',
    description: '隼訊的標準 SEO 執行流程',
    steps: [
      { name: '全站健檢', text: '使用 Screaming Frog、Lighthouse、Search Console 完整掃描技術問題' },
      { name: '關鍵字研究', text: 'Ahrefs / Semrush 找出 50-100 個目標關鍵字，依搜尋意圖分類' },
      { name: '內容架構規劃', text: '建立主題集群（pillar page + cluster posts），覆蓋目標關鍵字' },
      { name: '技術 SEO 修正', text: '處理站速、結構化資料、internal linking、canonical' },
      { name: '反向連結建立', text: '透過 PR、guest post、broken link building 取得高品質外鏈' },
      { name: '監測迭代', text: '每月分析 GSC 數據，調整低效頁面' },
    ],
    totalTime: 'P180D',
    estimatedCost: { value: '180000', currency: 'TWD' },
  },
  faq: [
    {
      question: 'SEO 多久會看到效果？',
      answer: 'SEO 是長期投資。新網站通常需要 4-6 個月才會看到顯著效果，已有基礎的網站約 2-3 個月。第一名通常需要 6-12 個月。如果有廠商承諾「一個月衝第一」，幾乎都是黑帽手法。',
    },
    {
      question: 'SEO 一個月多少錢？',
      answer: '隼訊 SEO 服務起價 3 萬/月（基礎包），主流方案 5-8 萬/月，企業級方案 10 萬以上。費用取決於：競爭程度、內容產出量、是否需要 PR / 外鏈服務。我們提供透明報價，無隱藏費用。',
    },
    {
      question: '我可以自己做 SEO 嗎？',
      answer: '可以，但成本通常更高。SEO 需要工具（Ahrefs 月費 100 美金）、知識、時間（每週 10+ 小時）。自己做適合：時間充足、願意學習、長期經營的個人品牌。企業外包更划算。',
    },
    {
      question: 'SEO 跟 Google Ads 哪個 ROI 比較高？',
      answer: '長期而言 SEO 完勝。Google Ads 停廣告流量歸零，SEO 排名穩定可維持數年。但 SEO 起效慢，建議「Ads 快速測試關鍵字 + SEO 長期經營」雙軌並行。',
    },
    {
      question: '聽說 AI 搜尋會取代 Google，做 SEO 還有意義嗎？',
      answer: '有，但要搭配 GEO。Google 仍是 80% 搜尋流量來源，AI 搜尋目前占 5-15%。我們的做法是 SEO + GEO + AEO 三合一，確保你在傳統與 AI 搜尋都有能見度。',
    },
  ],
  pricing: [
    {
      name: '基礎 SEO 方案',
      price: '30,000',
      unit: '月',
      includes: ['月度健檢報告', '4 篇 SEO 內容（每篇 1500+ 字）', '技術修正', 'GSC 監測'],
      bestFor: '中小企業、單一服務領域',
    },
    {
      name: '進階 SEO 方案',
      price: '60,000',
      unit: '月',
      includes: ['8 篇深度內容', '反向連結建立（每月 5 個）', '競品深度分析', '雙週優化會議', 'Schema 完整部署'],
      bestFor: '中大型企業、競爭產業',
    },
    {
      name: '企業 SEO 方案',
      price: '120,000',
      unit: '月',
      includes: ['15+ 篇內容', 'PR + 媒體外鏈', '專屬 SEO 顧問', '完整 SEO + GEO + AEO 整合', '即時報告儀表板'],
      bestFor: '上市櫃公司、品牌大戰',
    },
  ],
  cta: '想知道你網站目前 SEO 健康度？預約免費 SEO 健檢',
  serviceType: '搜尋引擎優化',
  priceMin: '30000',
  priceUnit: '月',
}
