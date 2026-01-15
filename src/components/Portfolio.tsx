'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  features: string[]
  highlights: string[]
  image?: string
  imageContain?: boolean
  url?: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "翊珍香電商系統官網",
    description:
      "為新北汐止 30 年老字號滷味品牌打造的現代化電商平台，專案核心聚焦於 SEO 優化與 Core Web Vitals 性能優化，實現圖片體積壓縮達 88.8%、LCP < 2.5s。",
    tech: ["Next.js 14", "TypeScript", "GraphQL Yoga", "Prisma ORM", "PostgreSQL", "Redis"],
    features: ["完整電商流程", "19 種活動類型", "5 層會員等級系統", "優惠券系統", "SEO 後台管理"],
    highlights: ["企業級 SEO 實現", "極致性能優化", "國際化架構（中英雙語）"],
    image: "/滷味.png",
    url: "https://yizhenxiang.com.tw/zh-TW",
    category: "電商平台",
  },
  {
    id: 2,
    title: "球鞋電商",
    description:
      "專業的鞋類電商平台，採用 Next.js 14 App Router 全端單體架構，整合品牌形象展示與完整購物流程。支援多國尺碼對照、會員等級制度、後台訂單管理與即時通知系統。",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "GraphQL Yoga", "Prisma ORM", "Redis"],
    features: ["多國尺碼對照", "5 級會員等級", "藍新金流串接", "客服聊天系統", "邀請碼推薦系統"],
    highlights: ["Line 登入串接", "第三方金流與物流整合", "GraphQL API 架構"],
    image: "/財神賣鞋.png",
    category: "電商平台",
  },
  {
    id: 3,
    title: "佑羲人力",
    description:
      "結合企業形象網站與人力資源管理的平台，針對人力派遣公司設計，提供客戶線上瀏覽人才履歷、提交人力需求的完整體驗。",
    tech: ["Next.js 15", "React 19", "TypeScript", "GraphQL", "Prisma", "PostgreSQL"],
    features: ["動態內容管理系統", "人力需求管理系統", "三層 RBAC 權限系統", "合約電子簽署系統"],
    highlights: ["GraphQL + Prisma 彈性架構", "前後端完全類型安全", "14+ 複合索引優化"],
    image: "/人力.png",
    category: "企業官網",
  },
  {
    id: 4,
    title: "R.OC 室內設計形象網站",
    description:
      "現代化的設計公司形象網站，結合企業品牌展示與社群論壇功能。網站設計風格強調「當代設計」理念，以簡潔的線條與純粹的比例呈現品牌形象。",
    tech: ["Next.js 15", "React 19", "TypeScript", "GraphQL", "Prisma", "PostgreSQL", "Framer Motion"],
    features: ["動態內容管理系統", "論壇社群系統", "後台管理系統", "RWD 響應式設計"],
    highlights: ["Tailwind CSS v4 主題系統", "豐富的前端動畫效果", "支援假數據模式"],
    image: "/ROC.png",
    category: "企業官網",
  },
  {
    id: 5,
    title: "書籍形象網站",
    description:
      "書籍推廣網站，結合 17 分鐘身心導引音頻與 MAIA-2 測驗系統。採用極簡黑白灰設計風格呈現療癒品牌調性。",
    tech: ["Next.js 15", "TypeScript", "Prisma ORM", "PostgreSQL", "Chart.js"],
    features: ["MAIA-2 量表測驗系統", "17 分鐘導引音頻播放器", "自動進度緩存機制", "後台管理系統"],
    highlights: ["自定義計分引擎", "使用 Chart.js 雷達圖", "純 CSS 粒子動畫效果"],
    image: "/書.png",
    url: "https://chaohealing.com/#audio-guide",
    category: "形象網站",
  },
  {
    id: 6,
    title: "燒烤形象網站＋訂餐服務",
    description:
      "結合品牌形象網站與線上訂餐服務的平台，針對燒烤餐廳設計，提供顧客沉浸式的線上點餐體驗，並支援後台訂單管理與即時訂單通知。",
    tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    features: ["線上訂餐系統", "訂單後台管理", "即時訂單通知", "RWD 響應式設計"],
    highlights: ["Socket.io 實時雙向通訊", "前後端分離架構", "RESTful API 設計"],
    image: "/燒烤.png",
    category: "電商平台",
  },
  {
    id: 7,
    title: "破浪三國遊戲官網",
    description:
      "三國主題手遊的官方網站平台，採用 Next.js App Router 全端單體架構。提供玩家遊戲資訊查詢、社群互動、評價分享等完整功能。",
    tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "GraphQL Yoga", "Prisma ORM"],
    features: ["評價系統", "論壇系統", "公告系統", "遊戲指南", "會員系統", "管理後台"],
    highlights: ["AI 自動生成擬人化評價", "完整的內容審核工作流", "動態首頁內容管理"],
    image: "/遊戲.png",
    category: "遊戲官網",
  },
  {
    id: 8,
    title: "會議論文投稿官網",
    description:
      "專業的學術投稿審查管理系統，專為「國立臺北教育大學課程與教學傳播科技研究所」研討會設計，實現從投稿、審稿到決議的完整工作流程。",
    tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS v4"],
    features: ["6 步驟投稿流程", "雙盲審稿系統", "智慧審稿人分配", "主編決議系統", "完整郵件通知"],
    highlights: ["4 層角色權限控制", "CKEditor 5 整合", "Zod Schema 統一驗證"],
    image: "/投稿.png",
    category: "學術系統",
  },
  {
    id: 9,
    title: "國際學術研討會",
    description:
      "使用後台控制前台樣式，實現產品生命週期延續。使用 GraphQL 實作資料介接，支援多端資料統一存取。",
    tech: ["Next.js", "PostgreSQL", "GraphQL"],
    features: ["後台系統", "CKEditor 編輯器", "SSR 支援"],
    highlights: ["GraphQL 資料介接", "後台管理", "複雜交易邏輯與索引優化"],
    image: "/ictu.png",
    category: "學術系統",
  },
  {
    id: 10,
    title: "元智大學管理學系校網",
    description:
      "使用後台控制前台樣式，實現產品生命週期延續。整合 AI 客服與 3D 模型展示。",
    tech: ["Next.js", "PostgreSQL", "GraphQL"],
    features: ["後台系統", "AI 客服串接", "3D 模型串接"],
    highlights: ["GraphQL 資料介接", "AI fine tune", "SSR 與後台管理"],
    image: "/元智管院.png",
    category: "企業官網",
  },
  {
    id: 11,
    title: "展覽活動網站",
    description:
      "展覽活動網站，含特殊擴張功能。使用 React.js 與 Laravel 打造。",
    tech: ["React.js", "PHP (Laravel)", "MySQL"],
    features: ["活動展示", "特殊擴張功能", "RWD 響應式設計"],
    highlights: ["前後端分離架構", "活動管理系統"],
    image: "/活動官網.png",
    url: "https://strawberrypie.aaronlow.dev/",
    category: "形象網站",
  },
  {
    id: 12,
    title: "幫棒生活網",
    description:
      "企業級內容服務平台，提供心理健康、生活知識與自我成長的文章與課程。由 Laravel monolith 架構重構為前後端分離架構。",
    tech: ["Next.js", "PostgreSQL", "GraphQL", "Docker", "GitHub Actions"],
    features: ["前後端架構重構", "資料庫遷移", "GraphQL API 建構", "容器化部署", "CI/CD 整合"],
    highlights: ["MySQL 轉 PostgreSQL", "SSR / ISR 機制", "DevOps 自動化"],
    url: "https://www.bounbang.com/",
    category: "內容平台",
  },
  {
    id: 14,
    title: "餐飲 POS 機整合系統",
    description:
      "專為餐廳設計的全功能 POS 系統，涵蓋點餐、出單、庫存、桌位、報表、會員等模組，支援店內多裝置協同運作。",
    tech: ["Next.js", "PostgreSQL", "GraphQL", "Swift", "Kotlin", "Redis"],
    features: ["POS 點餐介面", "廚房出單管理", "銷售報表", "桌位管理", "庫存管理", "會員系統"],
    highlights: ["高併發訂單流處理", "多裝置併發寫入解決方案", "Redis 即時通訊"],
    image: "/餐飲POS系統網頁首頁.png",
    category: "POS 系統",
  },
  {
    id: 15,
    title: "現場 AI 智能客服系統",
    description:
      "部署於實體場域的 AI 智能客服，結合虛擬角色展示與人體偵測技術，讓顧客以自然語音與 AI 進行互動。",
    tech: ["Unreal Engine", "Azure Kinect", "MediaPipe", "Whisper.cpp", "Ollama", "Coqui TTS"],
    features: ["3D 虛擬角色顯示", "人體偵測技術", "語音辨識", "大語言模型整合", "語音合成"],
    highlights: ["所有元件可離線部署", "模組化架構設計", "語音到語音完整流程"],
    image: "/AI智能客服系統網頁首頁.png",
    category: "AI 應用",
  },
  {
    id: 17,
    title: "AI 學習程式設計研究專案",
    description:
      "教授指導研究專案，探索如何運用 AI 輔助學生學習程式設計，同時評估 ChatGPT 與 LLaMA3 模型在教育場域的應用效果。",
    tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "ChatGPT API", "LLaMA3"],
    features: ["ChatGPT API 串接", "LLaMA3 本地模型整合", "師生即時互動", "學習行為記錄"],
    highlights: ["多種 AI 模型對比分析", "即時教學模擬體驗", "支援學習行為研究"],
    image: "/寫code工具.png",
    category: "教育科技",
  },
  {
    id: 18,
    title: "CosmosWork 自由接案平台",
    description:
      "打造公平、透明、高效的自由接案生態系統，連結發案人與接案人，消除資訊不對稱。平台支援 AI 智能媒合，讓專業人才找到價值，讓企業高效尋才。",
    tech: ["Next.js 15", "React 19", "TypeScript", "GraphQL Yoga", "Prisma ORM", "PostgreSQL"],
    features: ["AI 智能媒合系統", "案件發布與瀏覽", "人才履歷展示", "需求追蹤管理", "邀請獎勵機制"],
    highlights: ["CKEditor 5 富文本編輯器整合", "NextAuth + Apollo Client 認證架構", "14+ 複合索引與 N+1 查詢優化"],
    image: "/CosmosWork.png",
    category: "其他",
  },
  {
    id: 19,
    title: "展覽管理系統",
    description:
      "專業的展覽作品管理與預約系統，涵蓋展覽管理、團隊協作、作品管理、前台模板編輯器、任務看板、預約叫號等完整功能。採用 Next.js 16 全端架構，支援 52 個資料表與 Craft.js 視覺化編輯器。",
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "PostgreSQL", "Redis", "Socket.io", "MinIO"],
    features: ["展覽與作品管理", "Craft.js 視覺化模板編輯器", "Trello-like 任務看板", "即時預約叫號系統 (SSE)", "數據匯出 (CSV/JSON/Excel)"],
    highlights: ["52 個資料表完整架構", "4 種預設模板與拖放編輯", "Redis Pub/Sub 即時通訊"],
    image: "/展覽管理系統.png",
    category: "其他",
  },
  {
    id: 20,
    title: "中醫診所 LINE 預約系統",
    description:
      "整合 LINE LIFF 的中醫診所預約系統，提供病患線上預約與診所後台管理功能。支援時段分鐘數管理、黑名單自動判定、併發預約控制，並使用 Supabase Realtime 實現即時更新。",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "LINE LIFF v2", "Prisma ORM", "Tailwind CSS"],
    features: ["LINE LIFF 病患預約", "班表與時段管理", "黑名單自動管理", "後台 Dashboard", "即時時段餘量更新"],
    highlights: ["Supabase Realtime 即時同步", "Row-Level Lock 併發控制", "130+ E2E 測試案例"],
    image: "/欣百漢.png",
    imageContain: true,
    category: "其他",
  },
];

const categories = ['全部', '電商平台', '企業官網', '形象網站', 'App 開發', 'AI 應用', '學術系統', '其他']

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === '全部'
    ? projects
    : projects.filter(p => p.category === selectedCategory || (selectedCategory === '其他' && !categories.slice(1, -1).includes(p.category)))

  return (
    <section id="portfolio" className="relative py-32 px-6 bg-[#2D3B40]/50">
      {/* 背景 */}
      <div className="absolute inset-0 diagonal-lines" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#344349] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* 標籤 */}
          <div className="flex items-center gap-3 mb-6">
            <div className="brand-line" />
            <span className="text-[#6D8F96] text-sm tracking-widest uppercase">Portfolio</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl text-[#E0E5E8] mb-4">
                作品<span className="text-falcon-gradient">案例</span>
              </h2>
              <p className="text-lg text-[#A8B6BC] max-w-xl">
                我們為各行各業打造高品質的數位解決方案，從電商平台到企業官網，從 AI 應用到行動 App
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-[#5F808B] text-[#1E2A2E]'
                      : 'bg-[#2D3B40]/50 text-[#A8B6BC] hover:text-[#E0E5E8] hover:bg-[#2D3B40]'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="falcon-card rounded-lg overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 bg-[#2D3B40] overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`${project.imageContain ? 'object-contain p-4' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-bold text-[#344349]" style={{ fontFamily: 'var(--font-display)' }}>
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A2E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 falcon-badge">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg text-[#E0E5E8] group-hover:text-[#A8B6BC] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      {project.title}
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6D8F96] hover:text-[#A8B6BC] transition-colors ml-2 flex-shrink-0"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  <p className="text-[#6D8F96] text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Expandable Details */}
                  {expandedProject === project.id && (
                    <motion.div
                      className="mt-auto pt-4 border-t border-[#344349]"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="mb-3">
                        <p className="text-xs text-[#5F808B] mb-2">核心功能</p>
                        <div className="flex flex-wrap gap-1">
                          {project.features.map((feature) => (
                            <span key={feature} className="text-xs text-[#6D8F96]">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-[#5F808B] mb-2">技術亮點</p>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="text-xs text-[#6D8F96] flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#5F808B] mt-1.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {/* Expand Button */}
                  <button
                    className="flex items-center justify-center gap-1 text-sm text-[#6D8F96] hover:text-[#A8B6BC] transition-colors mt-4 pt-4 border-t border-[#344349]"
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  >
                    {expandedProject === project.id ? (
                      <>收起 <ChevronUp size={16} /></>
                    ) : (
                      <>查看詳情 <ChevronDown size={16} /></>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
