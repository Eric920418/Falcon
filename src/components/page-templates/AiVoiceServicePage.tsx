import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  CircleAlert,
  Database,
  Headphones,
  Network,
  PhoneCall,
  Radio,
  ShieldCheck,
  Waypoints,
} from 'lucide-react'
import { ServiceCtaLink } from '@/components/ServiceCtaLink'
import type { ServiceContent } from '@/lib/content/types'
import {
  aiVoiceArticles,
  aiVoiceCapabilities,
  aiVoiceQuoteFactors,
  aiVoiceWorkflow,
} from '@/lib/content/services/ai-voice-agent'

interface AiVoiceServicePageProps {
  service: ServiceContent
}

const painPoints = [
  ['尖峰來電塞車', '同一時間的電話量超過人力時，等待、漏接與重複回撥會一起發生。'],
  ['接完仍要重抄', '內容留在電話或逐字稿，員工還要重新登入 CRM、工單或派單系統。'],
  ['入口各自為政', '電話、LINE、網站與 App 各有一份資料，狀態不同步就容易重複處理。'],
  ['AI 出錯沒出口', '沒有信心門檻、欄位確認與人工接手，語音模型的誤判會直接變成營運問題。'],
]

const integrations = [
  { icon: Radio, label: '電話層', text: '代表號、PBX、SIP、雲端電話' },
  { icon: Headphones, label: '對話層', text: '辨識、追問、回覆、人工接手' },
  { icon: Waypoints, label: '工作流層', text: '規則、權限、佇列、狀態機' },
  { icon: Database, label: '企業系統層', text: 'CRM、ERP、派單、工單、預約' },
]

const industries = [
  ['派車與物流', '蒐集地點、任務與聯絡資訊後，送入派單或調度流程。'],
  ['維修與到府服務', '辨識故障類型、服務地點與時段，建立工單並通知人員。'],
  ['預約型服務', '依可用時段、資格與規則建立預約，例外情況轉人工。'],
  ['企業客服與售後', '處理狀態查詢、常見問題與案件建立，敏感申訴由真人承接。'],
]

const deliverySteps = [
  ['需求與電話環境盤點', '確認來電量、既有號碼、PBX／SIP、人工席位、系統 API 與不可自動化的風險。'],
  ['定義任務與接手邊界', '先寫清楚 AI 要取得哪些欄位、可執行哪些動作，以及什麼情況一定轉人工。'],
  ['POC 驗證', '用代表性對話、背景噪音、錯誤輸入與系統失敗測試技術可行性。'],
  ['整合與壓力測試', '接上企業系統，驗證權限、重試、併發、通知與資料一致性。'],
  ['分階段上線', '先導入可控時段或單一任務，再依實際錯誤與轉接資料調整。'],
]

export function AiVoiceServicePage({ service }: AiVoiceServicePageProps) {
  return (
    <div className="bg-[#0d1315] text-[#E0E5E8]">
      <section className="relative overflow-hidden border-b border-[#344349]/70 px-6 py-16 md:py-24">
        <div className="absolute inset-0 industrial-grid opacity-25" aria-hidden="true" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-amber-500/8 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm text-[#7A8A91]" aria-label="麵包屑">
            <Link href="/" className="hover:text-amber-500">首頁</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/services" className="hover:text-amber-500">服務項目</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/services/ai-tools" className="hover:text-amber-500">AI 工具開發</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-[#A8B6BC]">AI 語音客服</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="border border-amber-500/40 bg-amber-500/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-amber-400">
                  Enterprise voice workflow
                </span>
                <span className="text-xs text-[#7A8A91]">客製建置 · POC 驗收 · 非套裝 SaaS</span>
              </div>
              <h1 className="max-w-4xl text-4xl leading-[1.12] md:text-6xl lg:text-7xl">{service.h1}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#A8B6BC] md:text-xl">{service.intro}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ServiceCtaLink
                  href="/?service=ai_voice#contact"
                  placement="ai_voice_hero_demo"
                  className="falcon-btn-primary inline-flex items-center justify-center gap-2"
                >
                  預約流程 Demo <ArrowRight size={18} aria-hidden="true" />
                </ServiceCtaLink>
                <Link
                  href="/case-studies/gogocha-ai-dispatch"
                  className="falcon-btn-outline inline-flex items-center justify-center gap-2"
                >
                  查看 GoGoCha 證據 <ArrowDown size={18} aria-hidden="true" />
                </Link>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#7A8A91]">
                不承諾零誤判或全面取代人工；先用真實任務與失敗情境確認是否值得導入。
              </p>
            </div>

            <div className="relative border border-[#46616a] bg-[#131d20] p-4 shadow-2xl shadow-black/30 md:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-[#344349] pb-4 font-mono text-xs uppercase tracking-[0.14em] text-[#7A8A91]">
                <span>Call flow simulator</span>
                <span className="inline-flex items-center gap-2 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> 流程示意
                </span>
              </div>
              <div className="space-y-3">
                {[
                  ['來電', '「我要預約明天下午到府維修」'],
                  ['AI 追問', '確認地址、設備、可聯絡時段'],
                  ['規則檢查', '查詢服務區與可預約時段'],
                  ['系統動作', '建立工單並通知負責人'],
                  ['例外出口', '不確定或敏感事項轉人工'],
                ].map(([label, text], index) => (
                  <div key={label} className="grid grid-cols-[4.75rem_1fr] gap-3 border border-[#344349]/80 bg-[#0d1315]/80 p-3">
                    <span className="font-mono text-xs text-amber-500">0{index + 1} {label}</span>
                    <span className="text-sm leading-relaxed text-[#C5CED2]">{text}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#7A8A91]">示意內容，不是 GoGoCha 真實通話錄音或實際客服承諾。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E0E5E8] px-6 py-20 text-[#1E2A2E]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 border-b border-[#1E2A2E]/20 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-800">Why calls break</p>
              <h2 className="text-3xl leading-tight md:text-5xl">企業真正要解的，不只是接電話</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#344349] lg:justify-self-end">
              電話自動化的價值發生在通話結束之後：資料有沒有確認、任務有沒有建立、狀態有沒有同步，以及錯誤能不能被人工接住。
            </p>
          </div>
          <div className="grid gap-px bg-[#1E2A2E]/20 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map(([title, text], index) => (
              <article key={title} className="bg-[#E0E5E8] px-5 py-8">
                <span className="font-mono text-xs text-amber-800">0{index + 1}</span>
                <h3 className="mt-7 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#344349]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-500">One workflow, six controls</p>
            <h2 className="text-3xl md:text-5xl">AI 電話如何從一句話走到系統動作？</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#A8B6BC]">
              每一步都要留下可驗收的輸入、規則與失敗出口。語音模型只是其中一層，真正決定能否營運的是後端工作流。
            </p>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aiVoiceWorkflow.map(([number, title, text]) => (
              <li key={number} className="border border-[#344349] bg-[#131d20] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-amber-500">{number}</span>
                  <Network size={18} className="text-[#5F808B]" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A8B6BC]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-[#344349] bg-[#131d20] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-500">Evidence boundary</p>
              <h2 className="text-3xl md:text-5xl">已實作，和可客製，不混著說</h2>
            </div>
            <p className="max-w-2xl leading-relaxed text-[#A8B6BC] lg:justify-self-end">
              綠色代表已有公開案例可查；灰色代表可納入企業專案，但要看電話環境與系統介面，並經 POC、整合測試與正式驗收。
            </p>
          </div>

          <div className="mt-12 overflow-hidden border border-[#344349]">
            {aiVoiceCapabilities.map((capability) => (
              <div key={capability.title} className="grid gap-4 border-b border-[#344349] p-5 last:border-b-0 md:grid-cols-[10rem_0.7fr_1.3fr] md:items-center">
                <div>
                  <span className={capability.status === 'demonstrated'
                    ? 'inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300'
                    : 'inline-flex items-center gap-2 border border-[#5F808B] bg-[#0d1315] px-3 py-1 text-xs text-[#A8B6BC]'}>
                    {capability.status === 'demonstrated' ? <Check size={13} aria-hidden="true" /> : <Building2 size={13} aria-hidden="true" />}
                    {capability.status === 'demonstrated' ? '已實作證據' : '可客製交付'}
                  </span>
                </div>
                <h3 className="text-lg">{capability.title}</h3>
                <div>
                  <p className="text-sm leading-relaxed text-[#A8B6BC]">{capability.description}</p>
                  {capability.evidenceHref && (
                    <Link href={capability.evidenceHref} className="mt-2 inline-flex items-center gap-1 text-sm text-amber-500 hover:underline">
                      查看公開證據 <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gogocha-evidence" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-500">Public implementation</p>
              <h2 className="text-3xl md:text-5xl">公開案例與可驗證證據</h2>
              <p className="mt-6 text-lg leading-relaxed text-[#A8B6BC]">
                GoGoCha 在這裡不是被推廣的客運品牌，而是隼訊技術能力的公開證據：電話、網站與 LINE 的需求可進入同一套即時派單後端，再同步至司機／乘客 App 與營運介面。
              </p>
              <div className="mt-8 space-y-4 border-l border-amber-500/50 pl-5 text-sm leading-relaxed text-[#C5CED2]">
                <p><strong className="text-amber-400">隼訊負責範圍：</strong>品牌官網、AI 電話入口、即時派單後端、LINE Bot、App 與營運系統整合。</p>
                <p><strong className="text-amber-400">公開技術：</strong>Express、PostgreSQL、Redis、BullMQ、Socket.IO 與 OpenAI。</p>
                <p><strong className="text-amber-400">證據限制：</strong>未公開營收、訂單、人力節省、接通率或通話 SLA；「3 秒」只保留為產品設計目標。</p>
              </div>
              <Link href="/case-studies/gogocha-ai-dispatch" className="mt-8 inline-flex items-center gap-2 text-amber-500 hover:underline">
                查看完整技術案例與限制 <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="border border-[#344349] bg-[#131d20] p-3 sm:translate-y-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1E2A2E]">
                  <Image src="/GoGoChaWebsite.png" alt="GoGoCha 公開網站與 AI 派單服務畫面" fill loading="lazy" sizes="(min-width: 1024px) 28vw, 90vw" className="object-cover" />
                </div>
                <figcaption className="p-3 text-xs leading-relaxed text-[#7A8A91]">公開品牌網站：多入口導向同一派單流程。</figcaption>
              </figure>
              <figure className="border border-[#344349] bg-[#131d20] p-3">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1E2A2E]">
                  <Image src="/GoGoCha.png" alt="GoGoCha 司機與乘客 App 公開畫面" fill loading="lazy" sizes="(min-width: 1024px) 28vw, 90vw" className="object-cover" />
                </div>
                <figcaption className="p-3 text-xs leading-relaxed text-[#7A8A91]">公開 App 畫面：承接後端的通知與任務狀態。</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E0E5E8] px-6 py-24 text-[#1E2A2E]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-800">System boundaries</p>
              <h2 className="text-3xl md:text-5xl">可以串哪些電話與企業系統？</h2>
              <p className="mt-5 leading-relaxed text-[#344349]">
                是否能串接，不看 Logo 清單，而看既有系統是否提供正確權限、API、事件或標準電話介面。正式報價前會先確認責任邊界。
              </p>
              <div className="mt-8 grid gap-px bg-[#1E2A2E]/20 sm:grid-cols-2">
                {integrations.map(({ icon: Icon, label, text }) => (
                  <div key={label} className="bg-[#E0E5E8] p-5">
                    <Icon size={20} className="text-amber-800" aria-hidden="true" />
                    <h3 className="mt-6 text-lg">{label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#344349]">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-800">Use cases</p>
              <h2 className="text-3xl md:text-5xl">哪些任務適合先導入？</h2>
              <div className="mt-8 divide-y divide-[#1E2A2E]/20 border-y border-[#1E2A2E]/20">
                {industries.map(([title, text]) => (
                  <article key={title} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr]">
                    <h3 className="text-lg">{title}</h3>
                    <p className="text-sm leading-relaxed text-[#344349]">{text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-7 flex gap-3 border border-red-900/20 bg-red-950/5 p-5">
                <CircleAlert size={20} className="mt-0.5 shrink-0 text-red-800" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-[#344349]">
                  不建議第一階段自動處理醫療判斷、法律結論、重大客訴、付款授權或身分爭議；這些工作應以人工審核為主。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-500">Fail safely</p>
            <h2 className="text-3xl md:text-5xl">AI 判斷不了時，系統怎麼收尾？</h2>
            <p className="mt-5 leading-relaxed text-[#A8B6BC]">
              導入前先設計失敗路徑，通常比調整一句提示詞更重要。每個專案至少要驗收下列機制。
            </p>
            <ul className="mt-8 space-y-4">
              {[
                '重要欄位重述確認，不能把猜測直接寫入訂單。',
                '低信心、連續誤解、敏感關鍵字或客戶要求時轉人工。',
                '企業 API 逾時時重試、排隊或建立待辦，不回報不存在的成功結果。',
                '人工接手時攜帶已確認欄位與對話摘要，避免使用者全部重講。',
                '錄音與逐字稿依告知、權限、保存及刪除規則處理。',
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#C5CED2]">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#344349] bg-[#131d20] p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-500">Implementation sequence</p>
            <h2 className="mt-4 text-2xl md:text-3xl">企業 AI 電話導入流程</h2>
            <ol className="mt-8 space-y-6">
              {deliverySteps.map(([title, text], index) => (
                <li key={title} className="grid grid-cols-[2.75rem_1fr] gap-4">
                  <span className="flex h-10 w-10 items-center justify-center border border-[#5F808B] font-mono text-xs text-amber-500">0{index + 1}</span>
                  <div>
                    <h3 className="text-lg">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A8B6BC]">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-y border-[#344349] bg-[#131d20] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-500">Custom quotation</p>
              <h2 className="text-3xl md:text-5xl">AI 電話系統怎麼報價？</h2>
              <p className="mt-5 leading-relaxed text-[#A8B6BC]">
                不用一般聊天機器人的起價套用電話專案。AI 電話同時涉及電信、即時語音、企業 API、人工席位與維運責任，需先完成需求與環境盤點。
              </p>
              <ServiceCtaLink
                href="/?service=ai_voice#contact"
                placement="ai_voice_pricing"
                className="mt-8 inline-flex items-center gap-2 text-amber-500 hover:underline"
              >
                提供現況，取得評估清單 <ArrowRight size={17} aria-hidden="true" />
              </ServiceCtaLink>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {aiVoiceQuoteFactors.map((factor, index) => (
                <div key={factor} className="flex items-start gap-3 border border-[#344349] bg-[#0d1315] p-4">
                  <span className="font-mono text-xs text-amber-500">0{index + 1}</span>
                  <span className="text-sm leading-relaxed text-[#C5CED2]">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-500">Decision library</p>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl md:text-5xl">先把技術、成本與選型看懂</h2>
            <Link href="/blog" className="inline-flex items-center gap-2 text-amber-500 hover:underline">查看所有文章 <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {aiVoiceArticles.map((article, index) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group border border-[#344349] bg-[#131d20] p-6 hover:border-amber-500">
                <span className="font-mono text-xs text-[#7A8A91]">0{index + 1}</span>
                <h3 className="mt-7 text-xl group-hover:text-amber-400">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A8B6BC]">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#E0E5E8] px-6 py-24 text-[#1E2A2E]">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-amber-800">Buyer questions</p>
          <h2 className="text-3xl md:text-5xl">企業導入 AI 語音客服常見問題</h2>
          <div className="mt-10 divide-y divide-[#1E2A2E]/20 border-y border-[#1E2A2E]/20">
            {service.faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg">
                  <span>{item.question}</span>
                  <span className="font-mono text-amber-800 group-open:rotate-45">＋</span>
                </summary>
                <p className="max-w-3xl pt-4 leading-relaxed text-[#344349]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 industrial-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <PhoneCall size={34} className="mx-auto text-amber-500" aria-hidden="true" />
          <h2 className="mt-6 text-3xl md:text-5xl">拿一條真實電話流程來談</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#A8B6BC]">
            告訴我們目前怎麼接、接完要做什麼、最怕哪種錯誤。我們會先判斷適不適合自動化，再決定 POC 範圍。
          </p>
          <ServiceCtaLink
            href="/?service=ai_voice#contact"
            placement="ai_voice_final"
            className="falcon-btn-primary mt-8 inline-flex items-center gap-2"
          >
            預約流程 Demo <ArrowRight size={18} aria-hidden="true" />
          </ServiceCtaLink>
        </div>
      </section>
    </div>
  )
}
