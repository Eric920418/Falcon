import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: '診斷現在',
    body: '先看既有網站、流程、資料、帳號與量測，找出真正卡住成交或營運的位置。',
    output: '問題清單與優先序',
  },
  {
    number: '02',
    title: '定義範圍',
    body: '把目標、功能、內容、責任、時程、費用與不包含項目寫清楚，再決定技術。',
    output: '範圍與驗收標準',
  },
  {
    number: '03',
    title: '分段交付',
    body: '用可檢查的版本持續確認方向；遇到資料、內容或整合限制，直接揭露並調整。',
    output: '可測試版本與紀錄',
  },
  {
    number: '04',
    title: '驗證與移交',
    body: '完成錯誤情境、效能、追蹤與內容檢查，確認帳號、原始碼與維運方式。',
    output: '驗收、部署與交接',
  },
]

export function HomeProcess() {
  return (
    <section className="relative overflow-hidden bg-[#152024] px-6 py-24">
      <div className="industrial-grid absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-amber-500">Working method</p>
            <h2 className="max-w-3xl text-3xl leading-tight text-[#E0E5E8] md:text-5xl">
              先把成功與失敗講清楚，再開始做
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#A8B6BC]">
              開發案最常敗在需求一直漂移；搜尋案最常敗在只有曝光、沒有詢盤基準。兩者都需要同一件事：能被雙方檢查的定義。
            </p>
          </div>

          <aside className="border-l-2 border-amber-600 bg-[#1E2A2E]/70 p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-[#7A8A91]">Fit check</p>
            <h3 className="mt-3 text-2xl text-[#E0E5E8]">先確認彼此適不適合</h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed">
              <p className="flex gap-3 text-[#C5CED2]">
                <Check size={17} className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true" />
                <span>適合：願意提供真實資料、定義決策者，並一起確認驗收標準。</span>
              </p>
              <p className="flex gap-3 text-[#C5CED2]">
                <X size={17} className="mt-0.5 shrink-0 text-red-400" aria-hidden="true" />
                <span>不適合：要求保證第一名、隱藏限制，或用遠低於範圍的預算假裝全做。</span>
              </p>
            </div>
            <Link href="/blog/how-we-pick-clients" className="mt-7 inline-flex items-center gap-2 text-sm text-amber-500 hover:underline">
              看完整合作標準 <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </aside>
        </div>

        <ol className="mt-16 grid border-y border-[#344349] md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className={`relative px-1 py-8 md:px-7 ${
                index > 0 ? 'border-t border-[#344349] md:border-t-0 md:border-l' : ''
              } ${index === 2 ? 'md:border-l-0 xl:border-l' : ''}`}
            >
              <span className="font-mono text-sm text-amber-500">{step.number}</span>
              <h3 className="mt-5 text-xl text-[#E0E5E8]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A8B6BC]">{step.body}</p>
              <p className="mt-6 border-t border-[#344349]/70 pt-4 text-xs text-[#7A8A91]">
                交付：{step.output}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
