
import { getI18n } from '@/lib/i18n/server'
import Link from '@/lib/i18n/link'
import { ArrowRight } from 'lucide-react'
import { HomeServiceGraphic } from './HomeServiceGraphic'
import { HomeHubs, homeHubs } from './HomeHubs'

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
  },
]

export function HomeDeliverables() {
  const { t } = getI18n()

  return (
    <section id="services" className="fh-content fh-service-hubs fh-deliverables">
      <div>
        <HomeHubs />
        <div id="deliverables" className="fh-delivery-heading">
          <div>
            <p className="fh-editorial-eyebrow">{t("Actual deliverables")}</p>
            <h2>{t("真正交付的，不是一句服務名稱")}</h2>
          </div>
          <p className="fh-editorial-description">
            {t("首頁要回答的核心不是「我們什麼都會」，而是你委託之後會得到什麼、如何驗收，以及哪些結果不能亂保證。")}</p>
        </div>

        <div className="fh-delivery-tracks">
          {deliveryTracks.map((track) => {
            const hub=homeHubs.find(hub=>hub.eyebrow===track.label)!
            return (
            <article
              key={track.number}
              className="fh-delivery-track"
            >
              <div className="fh-delivery-summary"><div className="fh-delivery-summary-inner">
                <div className="fh-track-heading"><div>
                <div className="fh-track-label">
                  <span>{t(track.number)}</span>
                  <span>{t(track.label)}</span>
                </div>
                <h3>{t(hub.title)}</h3>
                </div>
                <HomeServiceGraphic kind={track.label==='Build'?'build':'grow'} />
                </div>
                <p className="fh-editorial-description">{t(hub.description)}</p>
                <div className="fh-service-links">
                  {hub.children.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="fh-service-link"
                    >
                      <Icon size={16} aria-hidden="true" />
                      {t(label)}
                    </Link>
                  ))}
                </div>
                <Link href={hub.href} className="fh-service-cta">{t(hub.cta)}<ArrowRight size={17} aria-hidden="true" /></Link>
              </div></div>

              <div className="fh-delivery-details">
                <div className="fh-track-progress" aria-hidden="true"><span /></div>
                <h4 className="fh-delivery-title">{t(track.title)}</h4>
                <p className="fh-editorial-description">{t(track.description)}</p>
                <ol className="fh-delivery-list">
                  {track.deliverables.map((item, index) => (
                    <li key={item.title} className="fh-delivery-row">
                      <span className="fh-delivery-number">{t("0")}{index + 1}</span>
                      <div className="fh-delivery-row-copy"><h5>{t(item.title)}</h5>
                      <p>{t(item.body)}</p></div>
                    </li>
                  ))}
                </ol>
                <p className="fh-delivery-validation">
                  <ArrowRight size={16} className="mt-0.5 shrink-0 text-[var(--site-accent)]" aria-hidden="true" />
                  <span>
                    <strong>{t("驗收方式：")}</strong>
                    {t(track.validation)}
                  </span>
                </p>
              </div>
            </article>
          )})}
        </div>
      </div>
    </section>
  )
}
