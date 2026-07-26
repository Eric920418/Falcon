import Link from 'next/link'
import { ArrowRight, Bot, Code2, Search, Sparkles } from 'lucide-react'

const hubs = [
  {
    eyebrow: 'Build',
    title: '網站與 AI 開發',
    description:
      '企業官網、電商、客製系統與 AI 工具。從需求、資料、權限、測試到部署，交付可維護的產品。',
    href: '/services/web-development',
    cta: '查看網站開發 Hub',
    children: [
      { label: '網站與系統開發', href: '/services/web-development', icon: Code2 },
      { label: 'AI 工具開發', href: '/services/ai-tools', icon: Bot },
    ],
  },
  {
    eyebrow: 'Grow',
    title: 'SEO／GEO 搜尋成長',
    description:
      '先修抓取、索引、速度與量測，再用實名內容、案例證據與外部實體訊號爭取傳統與 AI 搜尋曝光。',
    href: '/services/seo',
    cta: '查看搜尋成長 Hub',
    children: [
      { label: 'SEO 搜尋成長', href: '/services/seo', icon: Search },
      { label: 'GEO AI 搜尋', href: '/services/geo', icon: Sparkles },
    ],
  },
]

export function HomeHubs() {
  return (
    <section id="services" className="py-24 px-6 bg-stone-950">
      <div className="max-w-6xl mx-auto">
        <p className="text-amber-500 text-sm tracking-widest uppercase mb-3">Two focused hubs</p>
        <h2 className="text-3xl md:text-5xl text-[#E0E5E8] mb-5">兩條清楚的合作路徑</h2>
        <p className="text-[#A8B6BC] max-w-3xl leading-relaxed mb-12">
          不把所有會做的事情都當成主服務。開發解決產品與流程問題；搜尋成長解決被找到與產生詢盤的問題。
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {hubs.map((hub) => (
            <article key={hub.title} className="border border-[#344349] rounded-2xl p-7 md:p-9 bg-[#1E2A2E]/55">
              <span className="text-amber-500 text-sm">{hub.eyebrow}</span>
              <h3 className="text-3xl text-[#E0E5E8] mt-3 mb-4">{hub.title}</h3>
              <p className="text-[#A8B6BC] leading-relaxed">{hub.description}</p>
              <div className="grid sm:grid-cols-2 gap-3 mt-7">
                {hub.children.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-3 rounded-lg border border-[#344349] p-4 text-[#C5CED2] hover:border-amber-500 hover:text-amber-500 transition-colors"
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
              <Link href={hub.href} className="inline-flex items-center gap-2 text-amber-500 mt-8 hover:underline">
                {hub.cta} <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
