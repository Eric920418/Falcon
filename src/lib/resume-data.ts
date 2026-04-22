export type Bilingual = { zh: string; en: string }

export type ContactInfo = {
  email: string
  phone: string
  location: Bilingual
  github?: string
  linkedin?: string
  portfolio?: string
}

export type SkillGroup = {
  category: Bilingual
  items: string[]
}

export type ExperienceItem = {
  company: Bilingual
  role: Bilingual
  period: string
  highlights: Bilingual[]
}

export type ProjectItem = {
  name: string
  description: Bilingual
  tech: string[]
  url?: string
  image?: string
}

export type CompactProjectItem = {
  name: string
  category: Bilingual
  tech: string[]
  url?: string
  image?: string
}

export type EducationItem = {
  school: Bilingual
  degree: Bilingual
  period: string
}

export type ExtraItem = {
  label: Bilingual
  value?: Bilingual
}

export type ResumeData = {
  name: Bilingual
  title: Bilingual
  contact: ContactInfo
  summary: Bilingual
  skills: SkillGroup[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  additionalProjects?: CompactProjectItem[]
  education: EducationItem[]
  certifications?: ExtraItem[]
  photoPath?: string
}

// === 真實內容（以 Falcon 作品集為基礎） ===
// 請把 TODO 欄位填成你的個人資料，其餘已依 Portfolio.tsx 擷取真實專案資訊
export const resumeData: ResumeData = {
  name: {
    zh: '蔡翊廉',
    en: 'Eric Tsai',
  },
  title: {
    zh: '全端工程師 · 數位產品創業者',
    en: 'Full-Stack Engineer · Digital Product Builder',
  },
  contact: {
    email: '26416387.re@gmail.com',
    phone: '+886 958-801-559',
    location: { zh: '台灣桃園', en: 'Taoyuan, Taiwan' },
    github: 'https://github.com/Eric920418',
  },
  summary: {
    zh:
      '全端工程師，從構想到上線獨立交付 20+ 個生產級專案，橫跨電商、AI 應用、學術系統、POS、企業後台、3D 互動等領域。以 Next.js 16 + React 19 + GraphQL/Prisma/Drizzle 為主技術棧，關注性能、可維護性與商業價值。近期專注於 AI 整合（Claude API、LLM 本地化部署）與 SEO/GEO 優化，為客戶網站取得 LCP < 2.5s 與自然流量成長。擅長獨自承擔從需求訪談、資料建模、系統架構、實作到上線運維的全流程。',
    en:
      'Full-stack engineer who has shipped 20+ production systems end-to-end across e-commerce, AI applications, academic platforms, POS, enterprise dashboards, and 3D interactive sites. Primary stack: Next.js 16 + React 19 + GraphQL/Prisma/Drizzle. Deeply invested in AI integration (Claude API, local LLM deployment) and SEO/GEO optimization — delivered LCP < 2.5s and measurable organic traffic growth for client sites. Comfortable owning the entire lifecycle solo: requirements, data modeling, architecture, implementation, and production ops.',
  },
  skills: [
    {
      category: { zh: '程式語言', en: 'Languages' },
      items: ['TypeScript', 'JavaScript', 'Python', 'Swift', 'Kotlin', 'SQL', 'PHP'],
    },
    {
      category: { zh: '前端', en: 'Frontend' },
      items: [
        'Next.js 16 (App Router)',
        'React 19',
        'Vue.js',
        'Tailwind CSS v4',
        'Framer Motion',
        'GSAP + ScrollTrigger',
        'Three.js / React Three Fiber',
        'Craft.js',
      ],
    },
    {
      category: { zh: '後端 / API', en: 'Backend / API' },
      items: [
        'Node.js',
        'GraphQL Yoga',
        'Apollo Client + DataLoader',
        'REST',
        'Socket.io',
        'BullMQ + Redis',
        'Server-Sent Events',
        'Express',
      ],
    },
    {
      category: { zh: '資料庫 / ORM', en: 'Databases / ORM' },
      items: [
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Redis',
        'Neon (Serverless)',
        'Supabase',
        'Prisma ORM',
        'Drizzle ORM',
      ],
    },
    {
      category: { zh: 'AI / LLM', en: 'AI / LLM' },
      items: [
        'Claude API',
        'ChatGPT API',
        'LLaMA3 / Ollama',
        'Whisper.cpp',
        'Coqui TTS',
        'MediaPipe',
        'Google GenAI',
      ],
    },
    {
      category: { zh: '雲端 / DevOps', en: 'Cloud / DevOps' },
      items: [
        'Vercel',
        'Vercel Blob',
        'Cloudflare R2',
        'MinIO',
        'Docker',
        'AWS',
        'NextAuth',
        'Git / GitHub Actions',
      ],
    },
    {
      category: { zh: '整合 / 其他', en: 'Integrations / Other' },
      items: [
        'LINE LIFF v2',
        '藍新金流',
        'Stripe',
        'CKEditor 5',
        'React Flow',
        'Azure Kinect',
        'Unreal Engine',
        'SEO / GEO / AEO',
      ],
    },
  ],
  experience: [
    {
      company: { zh: '獨立接案 / 自由工作者', en: 'Independent / Freelance' },
      role: { zh: '全端工程師', en: 'Full-Stack Engineer' },
      period: '2024 ~ Present',
      highlights: [
        {
          zh: '獨立交付 20+ 個生產級專案，涵蓋電商、企業官網、AI 工具、POS、學術系統等領域，客戶包括老字號食品品牌、國際顧問公司、學術機構與新創',
          en: 'Shipped 20+ production systems end-to-end across e-commerce, corporate sites, AI tooling, POS, and academic platforms — clients include legacy food brands, international consultancies, academic institutions, and startups',
        },
        {
          zh: '精通 SEO / GEO / AEO 架構（JSON-LD schema、OpenGraph、llms.txt、多層 breadcrumb），協助客戶網站被 ChatGPT、Gemini、Perplexity 等 AI 引擎優先引用',
          en: 'Expert in SEO / GEO / AEO architecture (JSON-LD schema, OpenGraph, llms.txt, layered breadcrumbs) — get client sites prioritized by ChatGPT, Gemini, Perplexity, and other AI engines',
        },
        {
          zh: '為翊珍香電商導入 Core Web Vitals 優化：圖片體積壓縮 88.8%、LCP 控制在 2.5s 內、企業級 SEO 後台，支撐 30 年老字號品牌數位轉型',
          en: 'Delivered Core Web Vitals optimization for Yizhenxiang e-commerce: 88.8% image size reduction, LCP under 2.5s, enterprise-grade SEO admin — powering digital transformation of a 30-year-old brand',
        },
        {
          zh: '打造 TellCraft AI 網站生成平台，整合 Claude API + BullMQ 任務佇列 + Sandpack 即時沙箱，實現從需求對話到部署上線的一站式流程',
          en: 'Built TellCraft AI website generation platform, integrating Claude API + BullMQ job queues + Sandpack live sandbox — a complete flow from requirement chat to live deployment',
        },
        {
          zh: '開發企業 HR 管理系統（四級 RBAC、32 項細粒度權限、React Flow 工作流編輯器、GraphQL DataLoader 解 N+1），支撐人力仲介的三層架構（前台/員工/決策）',
          en: 'Developed enterprise HR platform (4-tier RBAC with 32 fine-grained permissions, React Flow workflow editor, GraphQL DataLoader to fix N+1) supporting three-tier architecture (frontend/employee/admin) for staffing agencies',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'TellCraft AI 網站生成平台',
      description: {
        zh: 'AI 驅動的網站生成平台：使用者描述需求，Claude API 自動釐清、生成程式碼並部署上線。核心為 BullMQ 任務佇列、WebSocket 即時回饋、Sandpack 即時程式碼沙箱。',
        en: 'AI-driven website generator: users describe intent, Claude API clarifies, generates code, and deploys. Built on BullMQ job queues, WebSocket live updates, and Sandpack live code sandbox.',
      },
      tech: ['Next.js 16', 'React 19', 'Claude API', 'BullMQ', 'Redis', 'Socket.io', 'Supabase'],
      url: 'https://tellcraft.com/zh',
      image: '/resume-images/TellCraft.jpg',
    },
    {
      name: '翊珍香電商平台',
      description: {
        zh: '新北汐止 30 年老字號滷味品牌的電商平台，聚焦 Core Web Vitals：圖片壓縮 88.8%、LCP < 2.5s、企業級 SEO 後台。含 19 種活動類型、5 層會員等級、優惠券系統。',
        en: 'E-commerce for a 30-year-old braised food brand in Xizhi, focused on Core Web Vitals: 88.8% image compression, LCP < 2.5s, enterprise SEO admin. Includes 19 campaign types, 5-tier membership, coupon system.',
      },
      tech: ['Next.js 14', 'TypeScript', 'GraphQL Yoga', 'Prisma', 'PostgreSQL', 'Redis'],
      url: 'https://yizhenxiang.com.tw/zh-TW',
      image: '/resume-images/滷味.jpg',
    },
    {
      name: '企業 HR 管理系統',
      description: {
        zh: '企業級人力資源管理與形象網站系統，三層架構（前台形象/員工平台/決策後台）。四級 RBAC 權限（32 項細粒度權限）、React Flow 可視化工作流編輯器、動態 CMS、行政簽核系統、活動日誌追蹤，GraphQL DataLoader 解決 N+1。',
        en: 'Enterprise HR platform with three-tier architecture (brand site / employee platform / decision admin). 4-tier RBAC with 32 fine-grained permissions, React Flow visual workflow editor, dynamic CMS, approval system, activity logs. GraphQL DataLoader fixes N+1.',
      },
      tech: ['Next.js 16', 'React 19', 'GraphQL Yoga', 'Apollo Client', 'React Flow', 'NextAuth'],
      url: 'https://manpower2.vercel.app',
      image: '/resume-images/展望國際人力.jpg',
    },
    {
      name: '現場 AI 智能客服系統',
      description: {
        zh: '部署於實體場域的離線 AI 客服：Unreal Engine 3D 虛擬角色 + Azure Kinect 人體偵測 + Whisper.cpp 語音辨識 + Ollama LLM + Coqui TTS。全鏈路可離線運作。',
        en: 'On-premise AI concierge for physical locations: Unreal Engine avatar + Azure Kinect body detection + Whisper.cpp speech-to-text + Ollama LLM + Coqui TTS. Full pipeline runs offline.',
      },
      tech: ['Unreal Engine', 'Azure Kinect', 'MediaPipe', 'Whisper.cpp', 'Ollama', 'Coqui TTS'],
      image: '/resume-images/AI智能客服系統網頁首頁.jpg',
    },
    {
      name: 'CosmosWork 自由接案媒合平台',
      description: {
        zh: '連接發案人與接案人的平台，含 AI 智能媒合、14+ 複合索引與 N+1 查詢優化、CKEditor 富文本、NextAuth + Apollo 認證架構。',
        en: 'Matching platform connecting clients and freelancers. AI-powered matching, 14+ composite indexes + N+1 query optimization, CKEditor rich text, NextAuth + Apollo auth.',
      },
      tech: ['Next.js 15', 'React 19', 'GraphQL Yoga', 'Prisma', 'PostgreSQL'],
      url: 'https://falcontaskbridge.com/',
      image: '/resume-images/CosmosWork.jpg',
    },
  ],
  additionalProjects: [
    {
      name: 'TISCLLB 國際學會官網',
      category: { zh: '學術系統', en: 'Academic' },
      tech: ['Next.js 16', 'Drizzle ORM', 'Neon', 'NextAuth', 'Vercel Blob'],
      url: 'https://www.tiscllb.org.tw/',
      image: '/resume-images/TISCLLB.jpg',
    },
    {
      name: 'ROLL ON. 外商顧問企業官網',
      category: { zh: '企業官網', en: 'Corporate Site' },
      tech: ['Next.js 16', 'GSAP + ScrollTrigger', 'next-intl', 'Motion'],
      url: 'https://www.rollgrp.com/',
      image: '/resume-images/RollOn.jpg',
    },
    {
      name: '破浪三國遊戲官網',
      category: { zh: '遊戲官網', en: 'Game Site' },
      tech: ['Next.js 16', 'GraphQL Yoga', 'Prisma', 'PostgreSQL', 'AI 生成內容'],
      url: 'https://www.kingdoms.blog/',
      image: '/resume-images/遊戲.jpg',
    },
    {
      name: '神經元 2026 畢業展官網',
      category: { zh: '形象網站', en: 'Showcase' },
      tech: ['React 19', 'Three.js', 'React Three Fiber', 'd3-force', 'Google GenAI'],
      url: 'https://neuron.bond/home',
      image: '/resume-images/神經元.jpg',
    },
    {
      name: '展覽管理系統 gradexhibit',
      category: { zh: '企業系統', en: 'Enterprise' },
      tech: ['Next.js 16', 'Craft.js', '52 tables', 'SSE', 'MinIO'],
      url: 'https://gradexhibit.tech/artworks',
      image: '/resume-images/截圖 2026-04-01 中午12.05.04.jpg',
    },
    {
      name: '中醫診所 LINE 預約系統',
      category: { zh: 'LINE 應用', en: 'LINE App' },
      tech: ['Next.js 16', 'Supabase Realtime', 'LINE LIFF v2', 'Row-Level Lock', '130+ E2E'],
      image: '/resume-images/欣百漢.jpg',
    },
    {
      name: '茶客棧飲料店官網',
      category: { zh: '形象網站', en: 'Brand Site' },
      tech: ['Next.js 15', 'Prisma 7', 'Cloudflare R2', 'CMS'],
      url: 'https://ckh2013.com/',
      image: '/resume-images/茶客棧.jpg',
    },
    {
      name: '球鞋電商（財神）',
      category: { zh: '電商平台', en: 'E-commerce' },
      tech: ['Next.js 14', 'GraphQL Yoga', '藍新金流', 'LINE 登入'],
      url: 'https://www.xn--cjzl80byf571b.tw/',
      image: '/resume-images/財神賣鞋.jpg',
    },
    {
      name: 'R collectives 室內設計形象網站',
      category: { zh: '企業官網', en: 'Corporate Site' },
      tech: ['Next.js 15', 'GraphQL', 'Prisma', 'Framer Motion'],
      image: '/resume-images/ROC.jpg',
    },
    {
      name: '書籍形象網站（MAIA-2 測驗）',
      category: { zh: '形象網站', en: 'Brand Site' },
      tech: ['Next.js 15', 'Chart.js', '自訂計分引擎', '音頻播放器'],
      url: 'https://chaohealing.com/#audio-guide',
      image: '/resume-images/書.jpg',
    },
    {
      name: '燒烤形象網站 + 線上訂餐',
      category: { zh: '電商平台', en: 'E-commerce' },
      tech: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '/resume-images/燒烤.jpg',
    },
    {
      name: '會議論文投稿系統（國北教大）',
      category: { zh: '學術系統', en: 'Academic' },
      tech: ['Next.js 16', '雙盲審稿', 'CKEditor 5', '4 層 RBAC', 'Zod'],
      url: 'https://cictconf.jichiu.art/',
      image: '/resume-images/投稿.jpg',
    },
    {
      name: 'ICTE 2025 國際學術研討會',
      category: { zh: '學術系統', en: 'Academic' },
      tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'CKEditor'],
      url: 'https://icte2025.ntue.edu.tw/',
      image: '/resume-images/ictu.jpg',
    },
    {
      name: '元智大學管理學系校網',
      category: { zh: '企業官網', en: 'Corporate Site' },
      tech: ['Next.js', 'GraphQL', 'AI 客服', '3D 模型'],
      image: '/resume-images/元智管院.jpg',
    },
    {
      name: '展覽活動網站',
      category: { zh: '形象網站', en: 'Brand Site' },
      tech: ['React', 'Laravel', 'MySQL'],
      url: 'https://strawberrypie.aaronlow.dev/',
      image: '/resume-images/活動官網.jpg',
    },
    {
      name: '餐飲 POS 整合系統',
      category: { zh: 'POS 系統', en: 'POS System' },
      tech: ['Next.js', 'Swift', 'Kotlin', 'GraphQL', 'Redis', '多裝置併發'],
      image: '/resume-images/餐飲POS系統網頁首頁.jpg',
    },
    {
      name: 'AI 學習程式設計研究（教授指導）',
      category: { zh: '教育科技', en: 'EdTech' },
      tech: ['Vue.js', 'ChatGPT API', 'LLaMA3', 'Socket.io'],
      image: '/resume-images/寫code工具.jpg',
    },
  ],
  education: [
    {
      school: {
        zh: '國立臺北教育大學',
        en: 'National Taipei University of Education',
      },
      degree: {
        zh: '科技教育傳播學系',
        en: 'Department of Technology, Education & Communication',
      },
      period: '— TODO 就學期間 —', // 請改成例如 2019-09 ~ 2023-06
    },
  ],
  photoPath: undefined, // 等你給照片後設為 '/resume-photo.jpg'
}
