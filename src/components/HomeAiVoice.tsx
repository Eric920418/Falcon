import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, PhoneCall, ShieldCheck } from 'lucide-react'
import { ServiceCtaLink } from '@/components/ServiceCtaLink'

const flow = [
  ['來電', '取得任務與必要欄位'],
  ['AI', '理解、追問與重述確認'],
  ['系統', '建派單／工單／CRM 紀錄'],
  ['接手', '低信心與敏感事項轉人工'],
]

export function HomeAiVoice() {
  return (
    <section id="ai-voice" className="relative overflow-hidden border-y border-[#344349] bg-[#0d1315] px-6 py-24">
      <div className="absolute inset-0 industrial-grid opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber-500">Flagship capability</span>
              <span className="border border-emerald-500/35 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">GoGoCha 公開實作</span>
            </div>
            <h2 className="max-w-3xl text-3xl leading-tight text-[#E0E5E8] md:text-5xl">
              企業 AI 電話，不只回答問題；要能把工作做進系統
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#A8B6BC]">
              隼訊把來電內容接到派單、工單、CRM、LINE、App 與營運後台。GoGoCha 證明我們做過 AI 電話入口與即時派單整合；PBX、多線、錄音、監控及客服席位則依企業環境客製並經 POC 驗收。
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex gap-3 border border-[#344349] bg-[#131d20] p-4">
                <Check size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                <div>
                  <p className="text-sm text-[#E0E5E8]">案例已實作</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#7A8A91]">AI 接聽、即時派單、多入口與後台整合</p>
                </div>
              </div>
              <div className="flex gap-3 border border-[#344349] bg-[#131d20] p-4">
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true" />
                <div>
                  <p className="text-sm text-[#E0E5E8]">企業客製範圍</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#7A8A91]">電話環境、併發、錄音、席位與既有系統</p>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/ai-voice-agent" className="falcon-btn-primary inline-flex items-center justify-center gap-2">
                了解 AI 電話方案 <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <ServiceCtaLink
                href="/?service=ai_voice#contact"
                placement="home_ai_voice"
                className="falcon-btn-outline inline-flex items-center justify-center gap-2"
              >
                預約流程 Demo <PhoneCall size={17} aria-hidden="true" />
              </ServiceCtaLink>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="border border-[#46616a] bg-[#131d20] p-5">
              <div className="mb-5 flex items-center justify-between border-b border-[#344349] pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#7A8A91]">Call → Action</span>
                <span className="text-xs text-amber-500">互動流程示意</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {flow.map(([title, description], index) => (
                  <div key={title} className="border border-[#344349] bg-[#0d1315] p-4">
                    <span className="font-mono text-xs text-amber-500">0{index + 1}</span>
                    <p className="mt-5 text-sm text-[#E0E5E8]">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#7A8A91]">{description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[#7A8A91]">示意流程，不是實際通話紀錄，也不代表零誤判或零漏接。</p>
            </div>

            <Link href="/case-studies/gogocha-ai-dispatch" className="group grid gap-4 border border-[#344349] bg-[#131d20] p-4 sm:grid-cols-[10rem_1fr] sm:items-center">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1E2A2E]">
                <Image src="/GoGoChaWebsite.png" alt="GoGoCha AI 電話與派單公開案例畫面" fill loading="lazy" sizes="160px" className="object-cover" />
              </div>
              <div>
                <p className="text-xs text-amber-500">公開案例與可驗證證據</p>
                <p className="mt-2 text-sm leading-relaxed text-[#C5CED2] group-hover:text-amber-400">查看 AI 接聽如何接到即時派單、LINE、App 與後台</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
