import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Github, ShieldCheck, X } from 'lucide-react'
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

          <section>
            <h2 className="text-3xl text-[#E0E5E8] mb-4">實際負責範圍</h2>
            <p className="max-w-3xl text-[#A8B6BC] leading-relaxed mb-6">
              隼訊承接的是需要釐清流程、整合系統與持續驗證的工作，不把需求訪談、開發、搜尋內容和上線量測切成彼此不知道在做什麼的黑盒子。每個專案仍會依規模決定合作人員，但對外內容與交付邊界由實名負責人確認。
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['需求與架構', '確認使用者、資料流、權限、例外與驗收方式，再決定技術。'],
                ['網站與系統實作', '涵蓋前後台、API、資料庫、部署，以及需要的第三方整合。'],
                ['AI 工作流', '把模型放進可驗證的欄位、規則、企業系統動作與人工接手流程。'],
                ['SEO／GEO', '處理抓取、索引、內容證據、實名作者、內鏈與轉換量測。'],
              ].map(([title, body]) => (
                <div key={title} className="border border-[#344349] bg-stone-900/40 p-5">
                  <h3 className="text-lg text-[#E0E5E8]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A8B6BC]">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="client-fit" className="scroll-mt-24">
            <h2 className="text-3xl text-[#E0E5E8] mb-4">合作適配與拒絕條件</h2>
            <p className="max-w-3xl text-[#A8B6BC] leading-relaxed mb-7">
              合作前先說清楚不適配情境，比簽約後用模糊話術維持期待更負責。以下是範圍判斷，不代表對客戶規模或產業價值下結論；若預算與需求不匹配，優先縮小第一階段，而不是假裝完整功能都做得到。
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="border border-emerald-800/50 bg-emerald-950/10 p-6">
                <h3 className="text-xl text-[#E0E5E8] mb-4">較適合合作</h3>
                <ul className="space-y-3 text-sm leading-relaxed text-[#A8B6BC]">
                  {[
                    '願意提供公司、流程、產品或案例等必要素材',
                    '接受先定義範圍、驗收與資料責任，再開始開發',
                    '需要客製流程、既有系統整合或可持續維護的網站',
                    '願意用真實基準與詢盤量測成果，不要求保證排名或營收',
                  ].map((item) => <li key={item}>✓ {item}</li>)}
                </ul>
              </div>
              <div className="border border-red-900/50 bg-red-950/10 p-6">
                <h3 className="text-xl text-[#E0E5E8] mb-4">不承接或需先調整</h3>
                <ul className="space-y-3 text-sm leading-relaxed text-[#A8B6BC]">
                  {[
                    '博弈、傳直銷或未經主管機關核准的金融商品',
                    '要求保證搜尋名次、ROAS、AI 引用或固定商業成果',
                    '要求批量生成沒有原創資料的搜尋頁與假案例',
                    '拒絕確認資料權限、客戶同意、限制與錯誤處理責任',
                  ].map((item) => (
                    <li key={item} className="flex gap-2"><X size={16} className="mt-0.5 shrink-0 text-red-400" /> <span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl text-[#E0E5E8] mb-4">合作如何開始？</h2>
            <p className="text-[#A8B6BC] leading-relaxed">
              第一次討論先確認問題、現況、使用者、必要整合與不能接受的失敗，再決定是否進入盤點、POC 或正式建置。報價會列出交付、第三方費用、驗收、不包含範圍與後續維護；若現有資料不足以支持 SEO 或案例主張，就先補資料，不會用想像的數字填滿頁面。
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <Link href="/pricing" className="text-amber-500 hover:underline">查看公開起價與報價因素</Link>
              <Link href="/case-studies" className="text-amber-500 hover:underline">核對公開案例證據</Link>
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
