
import { getI18n } from '@/lib/i18n/server'
import { Bot, Code2, PhoneCall, Search, Sparkles } from 'lucide-react'

export const homeHubs = [
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
      { label: '企業 AI 電話', href: '/services/ai-voice-agent', icon: PhoneCall },
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
  const { t } = getI18n()

  return (
    <div className="fh-hubs-layout">
      <div className="fh-hubs-intro">
        <p className="fh-editorial-eyebrow">{t("Two focused hubs")}</p>
        <h2>{t("兩條清楚的合作路徑")}</h2>
        <svg className="fh-hub-flow" viewBox="0 0 400 130" aria-hidden="true"><path d="M5 95C80 95 80 20 150 20S220 110 285 110 340 35 395 35" fill="none" stroke="#d9dfec" strokeWidth="12"/><path className="fh-service-route" pathLength="1" d="M5 95C80 95 80 20 150 20S220 110 285 110 340 35 395 35" fill="none" stroke="#3152e7" strokeWidth="12" strokeLinecap="round"/></svg>
      </div>
      <p className="fh-editorial-description">
        {t("不把所有會做的事情都當成主服務。開發解決產品與流程問題；搜尋成長解決被找到與產生詢盤的問題。")}
      </p>
    </div>
  )
}
