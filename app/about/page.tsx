import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Github, ShieldCheck } from 'lucide-react'
import { PageShell } from '@/components/page-layout/PageShell'
import { primaryAuthor } from '@/lib/content/authors'
import {
  createBreadcrumbSchema,
  createMetadata,
  createProfilePageSchema,
  createWebPageSchema,
  JsonLd,
  siteConfig,
} from '@/lib/seo'

export function generateMetadata(): Metadata {
  return createMetadata({
    title: '關於隼訊｜蔡翊廉的網站、AI 與搜尋成長實作',
    description:
      '認識隼訊負責人蔡翊廉：從需求、架構、開發、部署到 SEO／GEO 量測，以公開作品與可驗證技術資料說明實際能力。',
    path: '/about',
  })
}

export default function AboutPage() {
  const url = `${siteConfig.url}/about`
  const schemas = [
    createWebPageSchema({
      name: '關於隼訊與蔡翊廉',
      description: primaryAuthor.description,
      url,
    }),
    createProfilePageSchema(),
    createBreadcrumbSchema([
      { name: '首頁', path: '/' },
      { name: '關於', path: '/about' },
    ]),
  ]

  return (
    <PageShell>
      <JsonLd data={schemas} />
      <article className="bg-stone-950">
        <header className="px-6 py-20 bg-gradient-to-b from-[#1E2A2E] to-stone-950">
          <div className="max-w-4xl mx-auto">
            <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">About Falcon</p>
            <h1 className="text-4xl md:text-6xl text-[#E0E5E8] mb-6">關於隼訊與負責人蔡翊廉</h1>
            <p className="text-xl text-[#A8B6BC] leading-relaxed max-w-3xl">
              我們不以模糊的「專業團隊」或無來源數字包裝能力。網站、AI 系統與搜尋成長工作，
              由實名負責人承擔需求、架構、實作、部署與量測。
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
          <section className="grid md:grid-cols-[1fr_2fr] gap-8">
            <div>
              <p className="text-amber-500 text-sm mb-2">負責人</p>
              <h2 className="text-3xl text-[#E0E5E8]">{primaryAuthor.name}</h2>
              <p className="text-[#7A8A91] mt-1">{primaryAuthor.nameEn}</p>
              <p className="text-[#A8B6BC] mt-3">{primaryAuthor.jobTitle}</p>
              <a
                href={primaryAuthor.sameAs[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-500 mt-5 hover:underline"
              >
                <Github size={18} /> GitHub 公開資料
              </a>
            </div>
            <div className="space-y-5 text-[#A8B6BC] leading-relaxed">
              <p>{primaryAuthor.description}</p>
              <p>
                目前公開作品涵蓋電商、企業官網、AI 電話與派單、LINE 預約、學術投稿、
                企業後台與行動 App。網站現有履歷資料記錄 20+ 個生產級專案；這是專案數量，
                不等同 20 位客戶，也不拿來推導滿意度。
              </p>
              <p>
                SEO／GEO 的工作原則同樣簡單：先確保可抓取、可索引與可量測，再用真實案例、
                作者責任與一手經驗建立內容。沒有原始數據，就不承諾排名、流量或 AI 引用時程。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl text-[#E0E5E8] mb-6">工作方法</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ['01', '先定義成果', '把詢盤、流程時間、錯誤率或效能指標說清楚，避免只交付畫面。'],
                ['02', '保留資料自主', '原始碼、帳號與資料歸屬在合作前確認，不用平台綁住客戶。'],
                ['03', '完整揭露限制', '區分產品目標、實驗室量測與真實營運結果，不把三者混為一談。'],
              ].map(([number, title, body]) => (
                <div key={number} className="border border-[#344349] rounded-xl p-6 bg-stone-900/40">
                  <span className="text-amber-500 text-sm">{number}</span>
                  <h3 className="text-xl text-[#E0E5E8] mt-3 mb-3">{title}</h3>
                  <p className="text-sm text-[#A8B6BC] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-amber-700/40 bg-amber-950/10 rounded-xl p-7">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-amber-500 shrink-0 mt-1" />
              <div>
                <h2 className="text-xl text-[#E0E5E8] mb-2">證據與揭露原則</h2>
                <p className="text-[#A8B6BC] leading-relaxed">
                  案例頁目前只使用網站已公開的技術資料。若客戶未提供可公開的 GA4、GSC、
                  營收或工時數據，就只陳述系統能力，不宣稱商業成長幅度。
                </p>
              </div>
            </div>
          </section>

          <div className="flex flex-wrap gap-4">
            <Link href="/case-studies" className="falcon-btn-primary inline-flex items-center gap-2">
              查看證據化案例 <ArrowRight size={18} />
            </Link>
            <Link href="/#contact" className="falcon-btn-outline">
              討論需求
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  )
}
