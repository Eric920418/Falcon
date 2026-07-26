import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function HomeHero() {
  return (
    <section id="hero" className="relative min-h-[760px] flex items-center overflow-hidden bg-[#1E2A2E] pt-24">
      <Image
        src="/主視覺背景_3D立體風格.png"
        alt=""
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A2E]/55 via-[#1E2A2E]/50 to-[#1E2A2E]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-7">
            <div className="brand-line" />
            <span className="text-[#A8B6BC] text-sm tracking-[0.18em] uppercase">
              Web, AI & Search Growth
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#E0E5E8] leading-[1.15] tracking-tight">
            台灣企業網站與 AI 系統開發
            <span className="block text-falcon-gradient mt-3">SEO／GEO 搜尋成長</span>
          </h1>

          <p className="text-lg md:text-xl text-[#A8B6BC] mt-8 max-w-3xl leading-relaxed">
            從可維護的網站與企業系統，到可索引、可量測的搜尋成長。
            以公開案例、實名責任與合格詢盤檢驗成果，不販售保證排名或 AI 引用。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link href="/#contact" className="falcon-btn-primary inline-flex items-center justify-center gap-2">
              討論專案需求 <ArrowRight size={18} />
            </Link>
            <Link href="/case-studies" className="falcon-btn-outline inline-flex items-center justify-center">
              查看公開案例
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mt-14 pt-8 border-t border-[#344349]">
            {[
              '原始碼與帳號歸屬先確認',
              '技術量測與商業結果分開揭露',
              '錯誤與限制不隱藏',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-[#A8B6BC]">
                <CheckCircle2 size={17} className="text-amber-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
