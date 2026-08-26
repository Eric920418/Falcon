import type { CaseEvidence } from './types'

export const caseStudies: Record<string, CaseEvidence> = {
  'yizhenxiang-commerce-performance': {
    slug: 'yizhenxiang-commerce-performance',
    title: '翊珍香電商系統案例｜圖片效能、會員與促銷後台',
    clientName: '翊珍香',
    location: '新北市汐止',
    period: '公開專案資料，2026-08-26 更新',
    summary:
      '為老字號食品品牌建置電商與營運後台，重點是可量測的網站效能、促銷彈性與資料自主權。',
    challenge:
      '老字號食品品牌要的不只是形象頁，而是能承接商品、會員、促銷與內容營運的完整電商。難點有兩個：一是商品與活動圖片量大，若不先處理圖片管線，最大內容繪製（LCP）會被原始大圖拖垮；二是促銷規則複雜——多檔活動同時進行、會員分層折扣、優惠券疊加條件——這些規則若寫死在程式裡，每檔新活動都要等工程師改版上線，營運節奏會被開發時程綁死。',
    approach: [
      '以 Next.js、GraphQL、PostgreSQL 與 Redis 建立電商核心：前台經由 GraphQL 取得商品、會員與促銷資料，三者各自建模；Redis 承接熱門查詢的快取，降低資料庫壓力。',
      '圖片管線先行：上傳的原始圖在輸出時轉換為現代格式，並依版位裁切多種尺寸，前台依裝置載入對應版本，而不是把原圖直接交給瀏覽器縮放。',
      '檢查 LCP 資源載入鏈：確認首屏主圖的載入優先序、預載與尺寸宣告，把效能目標訂在 LCP 2.5 秒以內，於交付時驗證。',
      '促銷規則後台化：把 19 種活動類型（滿額、滿件、贈品、限時折扣等）與 5 層會員等級建成可組合的規則模型，營運人員在後台設定條件與檔期，前台結帳時由後端依規則計算——上新活動不需要改程式。',
    ],
    responsibilities: [
      '電商前台、商品與內容頁面',
      '會員、活動與優惠券營運規則',
      'GraphQL API、資料庫與快取整合',
      '圖片輸出與主要載入路徑優化',
    ],
    workflow: [
      '消費者由商品或活動頁進入購物流程，頁面圖片依裝置載入對應尺寸的優化版本。',
      '前台透過 GraphQL 取得商品、會員與促銷所需資料，熱門查詢由 Redis 快取供應。',
      '結帳時後端依會員等級、進行中活動與優惠券規則計算最終金額；多條規則同時命中時依明確的優先序處理，不在前端計算價格。',
      '營運人員由後台維護商品、內容與活動檔期，規則生效不需要修改程式或重新部署。',
    ],
    workflowTitle: '購物與營運資料流',
    fallbacks: [
      '圖片優化數字只描述技術資產差異，不推導為營收成長。',
      '效能表現會隨頁面、圖片、裝置、網路與第三方服務變動，不能視為永久固定值。',
      '會員與活動功能數量代表系統範圍，不等於實際使用率或促銷成效。',
      '促銷金額一律由後端計算，前端顯示僅供參考，避免規則變更期間出現價格不一致。',
    ],
    verification: [
      '可由公開網站核對品牌、商品與主要購物介面。',
      '88.8% 是同一批商品圖優化前後的檔案總體積對比，屬一次性技術量測，量測對象是圖片資產本身，非持續監測數據。',
      'LCP 目標與功能規模來自既有公開作品紀錄。',
      '未取得可公開的 GA4、GSC、轉換率、訂單或營收資料。',
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
    updatedAt: '2026-08-26',
    disclosure:
      '本頁只引用已在隼訊作品集公開的技術資料；未取得並公開客戶 GA4、GSC 或營收資料，因此不宣稱商業成長幅度。',
    evidenceStatus: 'public-project',
  },
  'gogocha-ai-dispatch': {
    slug: 'gogocha-ai-dispatch',
    title: '企業 AI 語音客服如何串接即時派單｜GoGoCha 技術案例',
    clientName: 'GoGoCha 花蓮計程車',
    location: '花蓮縣',
    period: '公開上線產品，2026-08-11 更新',
    summary:
      '整合品牌官網、AI 電話接聽、即時派單、LINE Bot 與司機／乘客 App，將分散的叫車入口接到同一套後端。',
    challenge:
      '叫車使用者包含長輩、旅客與企業客戶，入口可能來自電話、網站或 LINE；系統必須讓資訊進入同一條派單流程並保留人工介入能力。',
    approach: [
      '將 AI 電話接聽取得的任務資訊送入共用後端，不讓電話入口成為獨立資料孤島。',
      '使用 Express、PostgreSQL、Redis、BullMQ 與 Socket.IO 建立即時派單後端。',
      '網站車資試算先呼叫真實費率 API，失敗時以本地規則提供清楚的替代結果。',
      '以大字級、語音優先與高對比方式處理長輩使用情境。',
    ],
    responsibilities: [
      '品牌官網與車資試算介面',
      'AI 電話接聽入口與任務資料結構',
      'SmartDispatcherV2 即時派單後端',
      'LINE Bot、司機／乘客 App 與營運後台整合',
    ],
    workflow: [
      '使用者由電話、網站或 LINE 提出叫車需求。',
      '系統整理地點、聯絡與任務欄位，送入共用派單流程。',
      '後端以 PostgreSQL 保存狀態、BullMQ 處理佇列，並透過 Redis／Socket.IO 即時同步。',
      '司機端、乘客端與營運介面取得同一筆任務狀態。',
    ],
    workflowTitle: 'AI 接聽至派單的資料流',
    fallbacks: [
      '資訊不足或 AI 無法可靠確認時保留人工介入，不把猜測直接當成派單資料。',
      '網站費率 API 失敗時顯示本地規則估算與限制，不偽裝成正式報價成功。',
      '佇列與即時通訊分層處理，避免單次連線問題直接等同任務消失。',
    ],
    verification: [
      '可由公開品牌網站核對電話、網站、LINE 與車資試算等入口。',
      '公開 App 畫面與網站畫面用來證明跨入口產品範圍，不包含私人乘客或司機資料。',
      '技術架構來自隼訊實際負責範圍；未公開營運量、接通率、節省工時或正式 SLA。',
    ],
    gallery: [
      {
        src: '/GoGoChaWebsite.png',
        alt: 'GoGoCha 公開品牌網站與 AI 派單服務畫面',
        caption: '公開品牌網站：電話、網站與 LINE 入口導向共用派單流程。',
      },
      {
        src: '/GoGoCha.png',
        alt: 'GoGoCha 司機與乘客 App 公開畫面',
        caption: '公開 App 畫面：司機與乘客端承接即時任務與通知。',
      },
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
    updatedAt: '2026-08-11',
    disclosure:
      '本頁說明已公開的產品能力與隼訊技術範圍；未公開車隊營收、訂單量、人力節省、接通率、真實通話錄音或通話 SLA。「3 秒」是產品設計目標，不代表每筆叫車都能在三秒內由司機接單。',
    evidenceStatus: 'public-project',
  },
  'clinic-line-booking': {
    slug: 'clinic-line-booking',
    title: '診所 LINE 預約系統案例｜併發控制、即時同步與 130+ 測試',
    clientName: '中醫診所（依公開作品資料匿名）',
    location: '台灣',
    period: '公開技術案例，2026-08-26 更新',
    summary:
      '以 LINE LIFF 串接病患預約與診所管理後台，重點處理同時搶約、時段異動與前後台即時同步。',
    challenge:
      '預約系統最危險的不是畫面不好看，而是資料層的競態：兩位病患在同一秒送出同一時段、診所臨時停診但病患端還看得到舊時段、櫃檯更新了預約規則但 LINE 端還在放行。這些情境在展示時不會出現，在真實流量下一定會出現。這個案子的核心，是把「畫面上看起來可以約」與「資料庫裡真的約到了」當成兩件事分開處理，並讓後台每一筆異動即時反映到病患端。',
    approach: [
      '以資料庫鎖定與交易處理同時預約：建立預約時在交易內重新查詢並鎖定該時段，兩人同時送出時只有先取得鎖的一方成立，另一方收到明確的失敗訊息，不會出現兩人都顯示成功的假象。',
      '不信任前端狀態：畫面上的可預約時段只是參考，預約成立的唯一依據是後端交易當下的重新檢查——時段是否仍開放、病患是否符合規則、是否與既有預約衝突，全部在伺服器端重查一次。',
      '使用 Supabase Realtime 同步：後台停診、調整時段或修改規則時，變更即時推送到開啟中的病患介面，縮短資訊落差；但送出後仍以後端檢查為準，Realtime 負責體驗，不負責正確性。',
      '把例外情境寫成端對端測試：同時搶約、預約後立即取消、後台臨時停診、規則變更後的重新檢查、連線中斷後重送，都做成可重複執行的測試，每次修改都能整批重跑驗證。',
    ],
    responsibilities: [
      'LINE LIFF 病患預約流程',
      '診所時段與預約管理後台',
      'Supabase Realtime 即時同步',
      '資料庫併發控制與端對端測試',
    ],
    workflow: [
      '病患由 LINE 開啟 LIFF 預約介面，載入當下可用時段；這份清單只是畫面參考，不是最終依據。',
      '送出預約時，後端在同一筆交易內重新檢查時段開放狀態、預約規則與時段衝突，全部通過才寫入。',
      '兩人同時送出同一時段時，由資料庫交易決定成功者；失敗端收到明確訊息，並重新載入最新的可用時段。',
      'Realtime 將時段變化與後台異動同步到病患端與診所管理介面，雙方看到同一份狀態。',
    ],
    workflowTitle: 'LINE 預約與併發控制流程',
    fallbacks: [
      '多人同時選擇同一時段時，由後端交易結果決定成功者，失敗端必須重新選擇，不做「先到畫面先得」的假設。',
      '即時連線中斷時不能假設預約成功，畫面需重新查詢後端正式狀態後才顯示結果。',
      '後台規則異動的生效時間以伺服器端為準，病患端畫面若尚未更新，送出時仍會被後端檢查攔下。',
      '匿名案例不公開病患、診所、預約量與醫療資訊，也不宣稱醫療或營運成效。',
    ],
    verification: [
      '130+ 端對端測試涵蓋的情境類別：正常預約與取消、同時段併發搶約、後台時段異動與臨時停診、規則變更後的預約檢查、連線中斷與重送。',
      '測試數字代表既有公開作品紀錄中的案例數，不代表零缺陷。',
      '資料庫鎖定、交易與 Realtime 描述的是系統設計，不代表任何營運承諾。',
      '客戶名稱、病患資料、預約量與營運指標均未公開。',
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
    updatedAt: '2026-08-26',
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
