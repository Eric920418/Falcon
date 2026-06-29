import type { LocalContent, CaseStudy } from './types'

const lastModified = '2026-06-29'

const taoyuanCases: CaseStudy[] = [
  {
    clientName: '翊珍香電商',
    industry: '食品電商',
    oneLineSummary: '手工麵線品牌電商，含購物車與金流系統',
    consentToPublish: 'name-only',
  },
  {
    clientName: 'R collectives 室內設計',
    industry: '室內設計',
    oneLineSummary: '東方美學設計工作室品牌官網',
    consentToPublish: 'name-only',
  },
  {
    clientName: '佑羲人力',
    industry: '人力資源',
    url: 'https://yoshi3166.com',
    oneLineSummary: '人力資源招募與管理平台',
    consentToPublish: 'name-only',
  },
]

export const localPages: Record<string, LocalContent> = {
  'taoyuan-seo': {
    slug: 'taoyuan-seo',
    city: '桃園',
    serviceFocus: 'SEO',
    title: '桃園 SEO 公司｜在地團隊、可面對面諮詢',
    h1: '桃園 SEO 公司',
    description:
      '隼訊數位行銷總部位於桃園市桃園區，服務桃園、中壢、龜山、八德等地企業的 SEO 需求。可面對面開會、實體簽約，定價全國統一不溢價。',
    keywords: ['桃園 SEO', '桃園 SEO 公司', '桃園 SEO 推薦', '桃園搜尋引擎優化', '中壢 SEO'],
    lastModified: '2026-06-29',
    qualityTier: 'production',
    intro:
      '我們辦公室就在桃園市桃園區民權路 6 號 5 樓之 4，服務桃園、中壢、龜山、八德、楊梅、平鎮一帶的中小企業。講白話：找在地廠商最實在的好處不是「比較便宜」，而是能坐下來把策略當面講清楚、客戶看得到負責的人，而且不必替台北辦公室的租金溢價買單。我們的 SEO 定價全國統一，桃園客戶不會比較貴，也不會比較便宜——差別只在「能不能面對面」這個體驗。',
    sections: [
      {
        heading: '隼訊在桃園的 SEO 服務範圍',
        body: '工作項目跟全國方案一致，差別只在能不能面對面：',
        items: [
          'SEO 全站健檢（技術 SEO + 內容稽核）',
          '關鍵字研究與佈局（含「桃園／中壢 + 服務」地區性長尾關鍵字）',
          '月度內容企劃與產出',
          'Google 商家檔案（GBP）優化——在地搜尋與地圖區塊曝光的關鍵',
          '反向連結建立（白帽手法）',
        ],
      },
      {
        heading: '我們的觀點：桃園在地生意，最被低估的是 Google 商家檔案',
        body:
          '桃園不少中小企業老闆覺得「我做在地生意、客人都靠熟客介紹，不用做 SEO」。但實際上，新客在決定要不要找你之前，幾乎都會先 Google 一下店名、看評論、確認地址電話——這時候真正在發揮作用的，常常不是排名第一的文章，而是你的 Google 商家檔案。所以我們做桃園在地 SEO，會把 GBP 的完整度、評論回覆、在地關鍵字（「桃園 SEO」「中壢網頁設計」這類）擺在跟網站排名同等重要的位置。對在地生意來說，地圖區塊的曝光往往比自然搜尋第一頁更直接帶來來電與到店。',
      },
      {
        heading: '桃園在地客戶舉例',
        body:
          '以下是我們在桃園地區服務過的客戶。完整數據尚未取得客戶授權公開，這裡只列名稱與專案類型、不誇大成果：',
      },
    ],
    caseStudies: taoyuanCases,
    faq: [
      {
        question: '我公司在桃園，可以面對面開會嗎？',
        answer:
          '可以。我們辦公室位於桃園市桃園區民權路 6 號 5 樓之 4，歡迎預約面議。桃園市內客戶我們也可前往您公司提案。',
      },
      {
        question: '桃園 SEO 費用大約多少？',
        answer:
          '我們的 SEO 方案不分區域：基礎方案 15,000 / 月、進階方案 30,000 / 月、企業方案 60,000 / 月。詳細內容見「SEO 搜尋引擎優化」服務頁。',
      },
      {
        question: '桃園 SEO 多久看得到效果？',
        answer:
          '已有基礎的網站約 2–3 個月可見排名變化，新網站 4–6 個月。GBP 與在地關鍵字的優化通常更快反映在地圖區塊的曝光上。任何承諾「一個月衝第一」的，請避開。',
      },
      {
        question: '我做的是 B2B 桃園在地服務，SEO 真的有用嗎？',
        answer:
          'B2B 客戶的決策者多數仍會用 Google 搜尋廠商資料，特別是「桃園 + 服務類型」這類長尾關鍵字，競爭通常較低、轉換相對直接。',
      },
      {
        question: '你們會幫忙做 Google 商家檔案嗎？',
        answer:
          '會。GBP 是桃園在地 SEO 的核心之一，我們會協助建立或優化檔案、設定服務項目與營業資訊、並建議評論經營的做法。',
      },
    ],
  },
  'taoyuan-web-design': {
    slug: 'taoyuan-web-design',
    city: '桃園',
    serviceFocus: '網頁設計',
    title: '桃園網頁設計｜客製化網站開發',
    h1: '桃園網頁設計',
    description:
      '隼訊提供桃園地區企業官網、電商平台、客製化系統開發。使用 Next.js 現代技術棧，永久售後保固，可面對面討論需求。',
    keywords: ['桃園網頁設計', '桃園網站建置', '桃園網頁設計公司', '中壢網頁設計', '桃園架站'],
    lastModified: '2026-06-29',
    qualityTier: 'production',
    intro:
      '我們在桃園的客戶橫跨餐飲、室內設計、人力資源、電商等不同產業。網站建置不分區域定價，差別只在一件事：能不能坐下來面對面把需求講清楚。以我們的經驗，會卡住一個專案的從來不是技術，而是「老闆腦中想的」跟「寫進需求單的」對不上——這件事當面聊一小時，往往比來回十封 email 還有效，這也是在地廠商真正的價值。',
    sections: [
      {
        heading: '我們在桃園做過的網站類型',
        body: '',
        items: [
          '電商平台（含金流與會員系統）',
          '品牌形象官網',
          '人力資源招募與管理平台',
          'CMS 內容管理系統（客戶可自行改內容）',
          'LINE 預約 / 線上預約系統',
        ],
      },
      {
        heading: '我們的觀點：先想清楚「網站要替你做什麼事」，再談設計',
        body:
          '很多人來找網頁設計，第一句話是「我要一個很漂亮的網站」。但漂亮不是目的，帶來客人、接到訂單、省下人工才是。我們接桃園的案子，會先花時間確認這個網站到底要解決什麼問題——是要接預約？要賣東西？還是要讓客人自己查得到資料、少打一通電話？把這件事想清楚，設計與功能才有依據，也才不會花錢做一堆上線後根本用不到的花俏功能。預算有限時，我們寧可把錢花在「會帶來生意的那幾個功能」上。',
      },
      {
        heading: '桃園客戶案例',
        body: '完整數據尚未取得客戶授權公開，僅列名稱與專案類型：',
      },
    ],
    caseStudies: taoyuanCases,
    faq: [
      {
        question: '桃園網頁設計大概多少錢？',
        answer:
          '與全國定價一致：企業官網 40,000 起、電商 90,000 起、客製化系統 150,000 起。實際依需求複雜度報價。',
      },
      {
        question: '可以面對面討論需求嗎？',
        answer:
          '可以。歡迎到桃園市桃園區辦公室面議，或我們前往您公司提案（桃園市內）。',
      },
      {
        question: '做一個網站大概要多久？',
        answer:
          '形象官網約 4–6 週、電商或含後台的系統約 8–12 週，實際依需求複雜度與素材（文案、圖片）到位的速度而定。需求釐清得越清楚，時程越好控制。',
      },
      {
        question: '網站可以自己改內容嗎？',
        answer:
          '可以。我們會建置 CMS 後台並提供操作教學，日常文案、圖片、最新消息你都能自己更新，不必每次都回來找我們。',
      },
    ],
  },
  'taipei-digital-marketing': {
    slug: 'taipei-digital-marketing',
    city: '台北',
    serviceFocus: '數位行銷',
    title: '台北數位行銷｜整合 SEO、廣告、社群、AI',
    h1: '台北數位行銷',
    description:
      '隼訊提供台北地區企業整合數位行銷服務：SEO、Google Ads、Meta 廣告、社群經營、AI 工具導入。',
    keywords: ['台北數位行銷', '台北數位行銷公司', '台北整合行銷'],
    lastModified,
    qualityTier: 'production',
    intro:
      '我們辦公室在桃園，多數溝通透過線上會議完成。需要面對面時可前往台北面議（依案件需求安排）。對台北客戶來說，差別在「實體拜訪頻率」，工作品質本身與在地廠商沒有差異。',
    sections: [
      {
        heading: '我們提供的服務組合',
        body: '',
        items: [
          'SEO + GEO + AEO 三位一體搜尋優化',
          'Google Ads + Meta 廣告代操',
          '社群經營（IG、FB、LINE、TikTok）',
          'AI 工具導入',
          '網站建置與優化',
          '短影音與形象影片製作',
        ],
      },
      {
        heading: '我們的觀點：台北客戶找桃園廠商，差的是通勤不是品質',
        body:
          '數位行銷的多數工作——SEO 健檢、廣告投放、內容產出、報告——都在線上完成，廠商在台北還是桃園不影響成果。對台北客戶來說，找我們的實際差別只有一個：實體拜訪要多花約 30 分鐘車程。但你省下的是台北辦公室的租金溢價，換來的是同一個團隊整合 SEO、廣告、社群、內容，不必為了協調好幾家廠商而開一堆會。',
      },
    ],
    caseStudies: [],
    faq: [
      {
        question: '公司在台北，找桃園廠商不會不方便嗎？',
        answer:
          '線上會議（Google Meet / Zoom）能應付絕大多數溝通。需要面對面時我們可前往台北面議，依案件規模安排頻率。',
      },
      {
        question: '台北數位行銷大概多少錢？',
        answer:
          '我們的定價全國統一：小型方案 1.5-2.5 萬 / 月、中型方案 2.5-7.5 萬 / 月、企業方案 10 萬以上 / 月。',
      },
      {
        question: '可以只做單項服務嗎？',
        answer:
          '可以。雖然整合行銷的綜效較大，但接受單項委託（如只做 SEO 或只做廣告代操）。',
      },
    ],
  },
  'taipei-seo': {
    slug: 'taipei-seo',
    city: '台北',
    serviceFocus: 'SEO',
    title: '台北 SEO 公司｜白帽手法、透明定價',
    h1: '台北 SEO 公司',
    description:
      '隼訊提供台北地區企業 SEO 服務：技術健檢、關鍵字研究、內容優化、反向連結建立。整合 GEO 與 AEO。',
    keywords: ['台北 SEO', '台北 SEO 公司', '台北 SEO 推薦', '台北搜尋引擎優化'],
    lastModified,
    qualityTier: 'production',
    intro:
      'SEO 工作的多數環節（健檢、關鍵字研究、內容生產、報告）都在線上完成，與廠商地點關係不大。我們服務台北客戶的方式以線上會議為主，需要面對面時前往台北面議。',
    sections: [
      {
        heading: '我們的 SEO 服務內容',
        body: '',
        items: [
          '完整 SEO 健檢（Core Web Vitals + Schema + Mobile-First）',
          '關鍵字研究與內容戰略',
          '月度深度內容（4-15 篇，依方案）',
          '反向連結建立（白帽手法）',
          '台北在地關鍵字優化',
          '整合 GEO + AEO（為 AI 搜尋時代準備）',
        ],
      },
      {
        heading: '我們的觀點：SEO 是線上工作，廠商在哪不重要',
        body:
          'SEO 的健檢、關鍵字研究、內容生產、報告幾乎都在線上完成，這也是為什麼我們服務台北客戶完全沒有距離問題。真正該看的不是廠商離你多近，而是手法乾不乾淨——是白帽、可驗證、報告看得懂，還是靠買外鏈與 AI 灌量衝一時排名。我們做台北 SEO 跟做桃園、全國一樣一套白帽流程，定價也全國統一，不收台北辦公室的溢價。',
      },
    ],
    caseStudies: [],
    faq: [
      {
        question: '台北 SEO 行情？',
        answer:
          'SEO 廠商定價差異很大，從幾千元（套裝低品質）到幾十萬（企業級全包）都有。我們的方案：基礎 1.5 萬、進階 3 萬、企業 6 萬，全國統一定價。',
      },
      {
        question: '台北客戶要面議怎麼安排？',
        answer:
          '我們依案件規模安排月度或雙週前往台北面議的頻率。多數客戶反映線上會議的效率反而較高（不用花通勤時間）。',
      },
    ],
  },
  'xinbei-seo': {
    slug: 'xinbei-seo',
    city: '新北',
    serviceFocus: 'SEO',
    title: '新北 SEO 公司｜板橋、新莊、中和、三重',
    h1: '新北 SEO 公司',
    description:
      '隼訊提供新北市企業 SEO 服務，覆蓋板橋、新莊、中和、三重、淡水、林口等行政區。',
    keywords: ['新北 SEO', '新北 SEO 公司', '板橋 SEO', '新莊 SEO', '中和 SEO'],
    lastModified,
    qualityTier: 'production',
    intro:
      '新北市行政區多，產業也分散。從板橋的服務業、新莊的科技業到林口的新興企業，不同區的關鍵字結構不同。本頁說明我們在新北的服務內容。',
    sections: [
      {
        heading: '我們服務的新北行政區',
        body: '',
        items: [
          '板橋區',
          '新莊區',
          '中和、永和區',
          '三重、蘆洲區',
          '林口、五股區',
          '淡水、八里區',
        ],
      },
      {
        heading: '新北在地 SEO 戰略要點',
        body: '',
        items: [
          '「行政區 + 服務」長尾關鍵字佈局',
          'Google Business Profile 完整化',
          '行動裝置體驗優化（在地查詢多半在手機上發生）',
          '整合 GEO 與 AEO',
        ],
      },
      {
        heading: '我們的觀點：新北的關鍵字，要照行政區拆',
        body:
          '新北市幅員大、產業分散，搜尋行為跟台北不太一樣。台北人習慣用「捷運站 + 服務」（像「中山牙醫」），新北人更常用「行政區 + 服務」（像「板橋牙醫」「新莊網頁設計」）。所以我們做新北 SEO 不會把全市當成一個市場打，而是照板橋、新莊、中和、林口這些行政區拆開佈局關鍵字，再搭配各區的 Google 商家檔案。對在地生意來說，先把自己所在行政區的字做起來，比一開始就搶全市大字務實得多。',
      },
    ],
    caseStudies: [],
    faq: [
      {
        question: '公司在新北，可以面對面開會嗎？',
        answer:
          '可以。我們在桃園，到板橋、新莊、林口都在 30-40 分鐘內。我們可安排前往新北面議。',
      },
      {
        question: '新北 SEO 跟台北 SEO 有差別嗎？',
        answer:
          '搜尋習慣略有差異。新北用戶常用「行政區 + 服務」（如「板橋牙醫」），台北用戶常用「捷運站 + 服務」（如「中山牙醫」）。關鍵字戰略會依在地搜尋行為微調。',
      },
    ],
  },
  'hsinchu-web-design': {
    slug: 'hsinchu-web-design',
    city: '新竹',
    serviceFocus: '網頁設計',
    title: '新竹網頁設計｜科技業、新創官網',
    h1: '新竹網頁設計',
    description:
      '隼訊為新竹科學園區企業、新創、研發中心提供客製化網站開發。Next.js 現代技術、英文版整合、可簽 NDA。',
    keywords: ['新竹網頁設計', '新竹網站建置', '竹科網站', '科技業網站'],
    lastModified,
    qualityTier: 'production',
    intro:
      '新竹企業多數是科技業，對網站的需求與一般企業不同：常需要英文版、招募頁、技術文件下載、投資人專區。本頁說明我們在新竹接案時的工作方式。',
    sections: [
      {
        heading: '新竹企業常見的網站需求',
        body: '',
        items: [
          '雙語或多語（中、英、日）',
          '招募頁面 + ATS 整合',
          '技術文件 / 白皮書下載',
          '投資人專區（年報、財報、新聞稿）',
          '產品技術規格頁（複雜表格、技術圖）',
          '英文版 SEO',
        ],
      },
      {
        heading: '與技術業客戶合作的工作方式',
        body: '',
        items: [
          '使用 Next.js + React + TypeScript（多數工程師熟悉）',
          '可整合 GitHub / Slack / Linear 等工具',
          'NDA、IP 歸屬、原始碼託管條款可協商',
        ],
      },
      {
        heading: '我們的觀點：科技業的網站，重點不是花俏',
        body:
          '幫科技業客戶做網站，我們學到的是：他們要的不是炫技的動畫，而是把專業講清楚。技術文件下載順不順、英文版到不到位、招募頁能不能接 ATS、投資人專區的財報好不好找——這些「不性感」的東西，才是科技業網站真正被使用的部分。所以我們接這類案子會先問清楚這個網站主要給誰看（客戶？求職者？投資人？），把資訊架構排對，再談視覺。技術棧用 Next.js + React + TypeScript，多數工程師背景的窗口都熟悉，溝通起來也省事。',
      },
    ],
    caseStudies: [
      {
        clientName: 'ICTE 2025 國際學術研討會',
        industry: '學術',
        url: 'https://icte2025.ntue.edu.tw/',
        oneLineSummary: '國際學術研討會官網與論文投稿系統',
        consentToPublish: 'name-only',
      },
    ],
    faq: [
      {
        question: '新竹網頁設計多少錢？',
        answer:
          '科技業客製化網站起價約 7.5 萬（中型企業官網），複雜需求 15 萬以上（多語、招募系統、產品配置工具）。',
      },
      {
        question: '可以簽 NDA 嗎？',
        answer:
          '可以。NDA、IP 歸屬、原始碼託管條款都可協商。',
      },
    ],
  },
}

export const localSlugs = Object.keys(localPages)

export function getLocalPage(slug: string): LocalContent | null {
  return localPages[slug] ?? null
}

export function getAllLocalPages(): LocalContent[] {
  return Object.values(localPages)
}
