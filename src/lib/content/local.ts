import type { LocalContent, CaseStudy } from './types'

const lastModified = '2026-05-18'

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
      '隼訊數位行銷總部位於桃園市桃園區，服務桃園、龜山、八德、中壢等桃園地區企業的 SEO 需求。可面對面開會、實體簽約。',
    keywords: ['桃園 SEO', '桃園 SEO 公司', '桃園 SEO 推薦', '桃園搜尋引擎優化'],
    lastModified,
    qualityTier: 'draft',
    intro:
      '我們辦公室在桃園市桃園區民權路 6 號 5 樓之 4，服務桃園、中壢、龜山、八德、楊梅、平鎮的中小企業。對在地客戶來說，找在地廠商的好處是可面對面開會、不需付台北辦公室成本溢價。',
    sections: [
      {
        heading: '隼訊在桃園的 SEO 服務範圍',
        body: '我們提供的工作項目跟全國方案一致：',
        items: [
          'SEO 全站健檢（技術 SEO + 內容稽核）',
          '關鍵字研究與佈局（含地區性長尾關鍵字）',
          '月度內容企劃與產出',
          'Google Business Profile 優化（本地搜尋必備）',
          '反向連結建立',
        ],
      },
      {
        heading: '桃園在地客戶舉例',
        body:
          '以下為我們在桃園地區服務過的客戶。完整數據尚未取得客戶授權公開，僅列名稱與專案類型：',
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
          '我們的 SEO 方案不分區域：基礎方案 30,000 / 月、進階方案 60,000 / 月、企業方案 120,000 / 月。',
      },
      {
        question: '我做的是 B2B 桃園在地服務，SEO 真的有用嗎？',
        answer:
          'B2B 客戶的決策者多數仍會用 Google 搜尋廠商資料，特別是「桃園 + 服務類型」這類長尾關鍵字，競爭通常較低、轉換相對直接。',
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
      '隼訊提供桃園地區企業官網、電商平台、客製化系統開發。使用 Next.js 現代技術棧，永久售後保固。',
    keywords: ['桃園網頁設計', '桃園網站建置', '桃園網頁設計公司', '中壢網頁設計'],
    lastModified,
    qualityTier: 'draft',
    intro:
      '我們在桃園的客戶涵蓋餐飲、室內設計、人力資源、電商等不同產業。網站建置不分區域定價，差別只在「能不能面對面討論」這個體驗。',
    sections: [
      {
        heading: '我們在桃園做過的網站類型',
        body: '',
        items: [
          '電商平台（含金流與會員系統）',
          '品牌形象官網',
          '人力資源管理平台',
          'CMS 內容管理系統',
        ],
      },
      {
        heading: '桃園客戶案例',
        body: '完整數據尚未取得客戶授權公開：',
      },
    ],
    caseStudies: taoyuanCases,
    faq: [
      {
        question: '桃園網頁設計大概多少錢？',
        answer:
          '與全國定價一致：企業官網 80,000 起、電商 180,000 起、客製化系統 300,000 起。實際依需求複雜度報價。',
      },
      {
        question: '可以面對面討論需求嗎？',
        answer:
          '可以。歡迎到桃園市桃園區辦公室面議，或我們前往您公司提案（桃園市內）。',
      },
      {
        question: '網站可以自己改內容嗎？',
        answer:
          '可以。我們會建置 CMS 後台並提供操作教學。',
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
    qualityTier: 'draft',
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
          '我們的定價全國統一：小型方案 3-5 萬 / 月、中型方案 5-15 萬 / 月、企業方案 20 萬以上 / 月。',
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
    qualityTier: 'draft',
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
    ],
    caseStudies: [],
    faq: [
      {
        question: '台北 SEO 行情？',
        answer:
          'SEO 廠商定價差異很大，從幾千元（套裝低品質）到幾十萬（企業級全包）都有。我們的方案：基礎 3 萬、進階 6 萬、企業 12 萬，全國統一定價。',
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
    qualityTier: 'draft',
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
          '行動裝置體驗優化（新北用戶手機搜尋比例高）',
          '整合 GEO 與 AEO',
        ],
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
    qualityTier: 'draft',
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
          '科技業客製化網站起價約 15 萬（中型企業官網），複雜需求 30 萬以上（多語、招募系統、產品配置工具）。',
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
