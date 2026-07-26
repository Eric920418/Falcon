import type { CaseEvidence } from './types'

export const caseStudies: Record<string, CaseEvidence> = {
  'yizhenxiang-commerce-performance': {
    slug: 'yizhenxiang-commerce-performance',
    title: '翊珍香電商效能與營運系統案例',
    clientName: '翊珍香',
    location: '新北市汐止',
    period: '公開專案資料，2026-07-26 更新',
    summary:
      '為老字號食品品牌建置電商與營運後台，重點是可量測的網站效能、促銷彈性與資料自主權。',
    challenge:
      '品牌需要的不只是形象頁，而是能承接商品、會員、促銷與內容營運的完整電商，同時不能讓大量商品圖片拖慢使用體驗。',
    approach: [
      '以 Next.js、GraphQL、PostgreSQL 與 Redis 建立電商核心流程。',
      '先處理圖片輸出尺寸與格式，再檢查 LCP 資源載入鏈。',
      '將活動、會員與優惠券規則放入可由業主操作的後台。',
    ],
    metrics: [
      {
        label: '圖片體積',
        value: '降低 88.8%',
        context: '公開作品紀錄中的技術量測；不是營收或自然流量成長宣稱。',
        sourceUrl: 'https://yizhenxiang.com.tw/zh-TW',
      },
      {
        label: 'LCP',
        value: '< 2.5 秒',
        context: '專案交付時的效能目標；實際數值仍會隨頁面、裝置與網路條件變動。',
        sourceUrl: 'https://yizhenxiang.com.tw/zh-TW',
      },
      {
        label: '營運規則',
        value: '19 種活動／5 層會員',
        context: '系統功能規模，不代表活動或會員帶來的營收結果。',
      },
    ],
    technologies: ['Next.js', 'TypeScript', 'GraphQL Yoga', 'PostgreSQL', 'Redis'],
    image: '/滷味.png',
    projectUrl: 'https://yizhenxiang.com.tw/zh-TW',
    updatedAt: '2026-07-26',
    disclosure:
      '本頁只引用已在隼訊作品集公開的技術資料；未取得並公開客戶 GA4、GSC 或營收資料，因此不宣稱商業成長幅度。',
    evidenceStatus: 'public-project',
  },
  'gogocha-ai-dispatch': {
    slug: 'gogocha-ai-dispatch',
    title: 'GoGoCha AI 接電話與派單系統案例',
    clientName: 'GoGoCha 花蓮計程車',
    location: '花蓮縣',
    period: '公開上線產品，2026-07-26 更新',
    summary:
      '整合品牌官網、AI 電話接聽、即時派單、LINE Bot 與司機／乘客 App，將分散的叫車入口接到同一套後端。',
    challenge:
      '叫車使用者包含長輩、旅客與企業客戶，入口可能來自電話、網站或 LINE；系統必須讓資訊進入同一條派單流程並保留人工介入能力。',
    approach: [
      '使用 Express、PostgreSQL、Redis、BullMQ 與 Socket.IO 建立即時派單後端。',
      '網站車資試算先呼叫真實費率 API，失敗時以本地規則提供清楚的替代結果。',
      '以大字級、語音優先與高對比方式處理長輩使用情境。',
    ],
    metrics: [
      {
        label: '派單產品目標',
        value: '3 秒',
        context: '公開產品功能目標，不代表所有真實叫車都能在三秒內由司機接單。',
        sourceUrl: 'https://hualientaxi.taxi/',
      },
      {
        label: '主要入口',
        value: '電話／網站／LINE',
        context: '三個入口共用後端流程，屬系統覆蓋範圍。',
      },
      {
        label: '無障礙設計',
        value: '大字級與高對比',
        context: '依公開介面功能描述，不將自評等同第三方無障礙認證。',
      },
    ],
    technologies: ['Next.js', 'Express', 'PostgreSQL', 'Socket.IO', 'Redis', 'BullMQ', 'OpenAI'],
    image: '/GoGoChaWebsite.png',
    projectUrl: 'https://hualientaxi.taxi/',
    updatedAt: '2026-07-26',
    disclosure:
      '本頁說明已公開的產品能力與技術範圍；未公開車隊營收、訂單量或人力節省數據。',
    evidenceStatus: 'public-project',
  },
  'clinic-line-booking': {
    slug: 'clinic-line-booking',
    title: '診所 LINE 預約與併發控制案例',
    clientName: '中醫診所（依公開作品資料匿名）',
    location: '台灣',
    period: '公開技術案例，2026-07-26 更新',
    summary:
      '以 LINE LIFF 串接病患預約與診所管理後台，重點處理同時搶約、時段異動與前後台即時同步。',
    challenge:
      '預約系統最危險的不是畫面不好看，而是多人同時選到同一時段、黑名單規則不一致，或後台異動沒有即時反映。',
    approach: [
      '以資料庫鎖定與交易處理同時預約，避免只在前端做表面檢查。',
      '使用 Supabase Realtime 同步可預約時段與後台變更。',
      '將病患流程、診所後台與例外情境納入端對端測試。',
    ],
    metrics: [
      {
        label: '端對端測試',
        value: '130+',
        context: '公開作品資料中的測試案例數，不代表零缺陷或醫療成效。',
      },
      {
        label: '預約一致性',
        value: '資料庫併發控制',
        context: '以後端交易處理衝突，不依賴前端先到先得。',
      },
      {
        label: '同步方式',
        value: 'Realtime',
        context: '預約狀態與後台異動採即時更新。',
      },
    ],
    technologies: ['Next.js', 'Supabase Realtime', 'LINE LIFF', 'Row-level locking', 'E2E testing'],
    image: '/TISCLLB.png',
    updatedAt: '2026-07-26',
    disclosure:
      '客戶名稱與內部營運數據未公開；本頁只呈現既有作品集中已揭露的技術範圍與測試數量。',
    evidenceStatus: 'anonymized',
  },
}

export const caseStudySlugs = Object.keys(caseStudies)

export function getCaseStudy(slug: string): CaseEvidence | null {
  return caseStudies[slug] ?? null
}

export function getAllCaseStudies(): CaseEvidence[] {
  return Object.values(caseStudies)
}
