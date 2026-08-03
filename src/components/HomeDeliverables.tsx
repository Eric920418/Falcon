import Link from 'next/link'
import { ArrowRight, Bot, Code2, PhoneCall, Search, Sparkles } from 'lucide-react'

const deliveryTracks = [
  {
    number: '01',
    label: 'Build',
    title: '把需求做成能營運的產品',
    description:
      '不是只交一張首頁。依專案範圍把公開介面、後台、資料、權限、第三方串接與上線維運一起拆清楚。',
    deliverables: [
      {
        title: '網站與交易流程',
        body: '企業官網、電商、預約、會員與表單流程，兼顧手機體驗、內容維護與搜尋基礎。',
      },
      {
        title: '後台與企業系統',
        body: 'CMS、權限、資料模型、API 與營運後台，讓團隊能自己更新，不把日常操作綁在工程師手上。',
      },
      {
        title: 'AI 與流程自動化',
        body: '知識庫問答、語音接聽、LINE／網站入口與人工接手機制；高風險決策保留人工把關。',
      },
    ],
    validation: '以功能驗收、錯誤情境、跨裝置測試、效能與交付清單確認。',
    links: [
      { label: '網站與系統開發', href: '/services/web-development', icon: Code2 },
      { label: 'AI 工具開發', href: '/services/ai-tools', icon: Bot },
      { label: '企業 AI 電話', href: '/services/ai-voice-agent', icon: PhoneCall },
    ],
  },
  {
    number: '02',
    label: 'Grow',
    title: '把曝光接到可追蹤的詢盤',
    description:
      '不是塞關鍵字或安裝神奇標記。先處理抓取、索引、內容責任與量測，再決定該做哪些主題與案例。',
    deliverables: [
      {
        title: '技術搜尋基礎',
        body: '檢查 canonical、sitemap、內鏈、速度與結構化資料，讓重要內容可被搜尋引擎取得。',
      },
      {
        title: '證據型內容',
        body: '把真實服務、負責人、案例、來源與限制寫進頁面，避免只有通順卻無法驗證的文章。',
      },
      {
        title: 'SEO／GEO 量測',
        body: '拆分品牌與非品牌搜尋、自然詢盤、AI 平台引薦與固定查詢集，不把「被提到」當成成交。',
      },
    ],
    validation: '以索引狀態、GSC／GA4、平台引薦與合格詢盤檢查，不承諾固定排名。',
    links: [
      { label: 'SEO 搜尋成長', href: '/services/seo', icon: Search },
      { label: 'GEO AI 搜尋', href: '/services/geo', icon: Sparkles },
    ],
  },
]

export function HomeDeliverables() {
  return (
    <section className="bg-[#E0E5E8] px-6 py-24 text-[#1E2A2E]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 border-b border-[#1E2A2E]/20 pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-700">Actual deliverables</p>
            <h2 className="text-3xl leading-tight md:text-5xl">真正交付的，不是一句服務名稱</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-[#344349] lg:justify-self-end">
            首頁要回答的核心不是「我們什麼都會」，而是你委託之後會得到什麼、如何驗收，以及哪些結果不能亂保證。
          </p>
        </div>

        <div className="divide-y divide-[#1E2A2E]/20">
          {deliveryTracks.map((track) => (
            <article
              key={track.number}
              className="grid gap-9 py-14 lg:grid-cols-[0.58fr_1.42fr] lg:gap-16"
            >
              <div>
                <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-amber-700">
                  <span className="font-mono">{track.number}</span>
                  <span className="h-px w-10 bg-amber-700/60" />
                  <span>{track.label}</span>
                </div>
                <h3 className="max-w-md text-2xl leading-snug md:text-3xl">{track.title}</h3>
                <p className="mt-5 max-w-md leading-relaxed text-[#344349]">{track.description}</p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {track.links.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="inline-flex items-center gap-2 border-b border-[#1E2A2E]/25 pb-1 text-sm font-medium hover:border-amber-700 hover:text-amber-800"
                    >
                      <Icon size={16} aria-hidden="true" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="divide-y divide-[#1E2A2E]/15 border-y border-[#1E2A2E]/15">
                  {track.deliverables.map((item, index) => (
                    <div key={item.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_0.62fr_1.38fr] sm:gap-5">
                      <span className="font-mono text-xs text-amber-700">0{index + 1}</span>
                      <h4 className="text-lg">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-[#344349]">{item.body}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-[#344349]">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-amber-700" aria-hidden="true" />
                  <span>
                    <strong className="font-medium text-[#1E2A2E]">驗收方式：</strong>
                    {track.validation}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
