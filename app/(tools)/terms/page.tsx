import { PageShell } from '@/components/page-layout/PageShell'
import { primaryAuthor } from '@/lib/content/authors'
import { createMetadata, createWebPageSchema, JsonLd, siteConfig } from '@/lib/seo'

const title = '服務條款'
const description = '隼訊數位行銷官網使用與服務諮詢條款，說明合作成立、報價與付款、智慧財產權、第三方服務、責任及聯絡方式。'
export const metadata = createMetadata({ title, description, path: '/terms' })

export default function TermsPage() {
  return (
    <PageShell>
      <JsonLd data={createWebPageSchema({ name: title, description, url: `${siteConfig.url}/terms` })} />
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-[#A8B6BC] leading-relaxed [overflow-wrap:anywhere]">
        <header className="mb-12 border-b border-[#344349] pb-8">
          <p className="mb-3 text-sm text-amber-500">Terms of Service · 繁體中文版</p>
          <h1 className="mb-4 text-4xl sm:text-5xl text-[#E0E5E8]">{title}</h1>
          <p>最後更新日期：<time dateTime="2026-09-08">2026 年 9 月 8 日</time>；自本頁公開發布日起生效。</p>
          <p className="mt-4">本條款說明 {siteConfig.name}（Falcon Information，負責人：{primaryAuthor.name}，以下稱「我們」）官網的使用及服務諮詢規則。正式委託案件依雙方確認的報價、契約與適用法令辦理。</p>
        </header>
        <div className="space-y-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:text-[#E0E5E8] [&_p+p]:mt-3 [&_a]:text-amber-400 [&_a]:underline [&_a]:underline-offset-4 [&_li]:mt-2">
          <section>
            <h2>一、服務範圍與合作成立</h2>
            <p>本站提供網站與系統開發、AI 工具及流程整合、SEO／GEO 等服務資訊、案例、文章與諮詢管道。提交表單、加入 LINE 或提出 Demo 需求，僅表示您希望聯絡，不代表我們已接受委託、保留時段或保證交付。</p>
            <p>正式合作前，雙方應確認工作範圍、交付項目、時程、驗收、費用、維護及資料責任。若個別契約與本頁不同，於法律允許範圍內以雙方個別約定為準。</p>
          </section>
          <section>
            <h2>二、報價、付款與取消</h2>
            <p>網站所列起價或估算用於初步評估；最終金額、稅額、第三方費用及付款節點，以雙方確認的報價或契約為準。需求新增或變更，應先確認對費用與時程的影響。</p>
            <p>取消、終止、退款、已完成工作的結算及交付處理，依個別契約與適用法令辦理。本條款不設一律不退款的規則，也不排除依法不得預先拋棄的消費者權利。</p>
          </section>
          <section>
            <h2>三、使用者應遵守的事項</h2>
            <ul className="list-disc pl-6">
              <li>提供可供聯絡且正確的必要資訊，並確保您有權提供需求素材、帳號與資料。</li>
              <li>不得冒用他人身分、侵害智慧財產權或隱私、散布惡意程式、寄送垃圾訊息，或未經授權存取與干擾網站。</li>
              <li>請勿透過公開詢價表單傳送密碼、敏感個資、私人錄音或機密文件；確有交付需求時，應先確認安全傳輸方式與授權範圍。</li>
            </ul>
            <p>如有具體濫用或安全風險，我們得於必要範圍內限制相關請求或使用，以保護網站及其他使用者。</p>
          </section>
          <section>
            <h2>四、智慧財產權與客戶資料</h2>
            <p>本站文字、設計、程式及圖像之權利，屬於我們或各自權利人。您可在法律允許範圍內瀏覽、分享連結及適當引用；其他重製、改作或商業利用應取得所需授權。案例中的商標與素材仍屬其權利人，公開展示不代表對外授權。</p>
            <p>委託成果、原始碼、設計檔、帳號與資料的歸屬、授權及交付條件，依個別契約明定。您提供的資料不因提出諮詢而移轉所有權；我們僅在回覆、評估及履行合作所需範圍內使用。公開客戶機密或未公開成果前，應取得必要授權。</p>
          </section>
          <section>
            <h2>五、第三方服務與成果說明</h2>
            <p>外部連結、雲端平台、AI 模型、搜尋引擎、通訊及付款等第三方服務，另有其使用條件、費率與資料政策；是否採用及其成本，於相關專案中確認。第三方的功能、價格與可用性可能變動。</p>
            <p>SEO／GEO 排名、流量、AI 引用、模型輸出及商業成果受多種外部因素影響；除雙方另有具體約定外，本站資訊不構成固定排名、營收、準確率或不中斷服務的保證。AI 輸出與重要業務操作應依專案風險安排驗證及人工確認。</p>
          </section>
          <section>
            <h2>六、網站維護與責任</h2>
            <p>我們會合理維護網站與資訊正確性，但維護、網路問題或第三方故障可能造成暫時中斷或內容延遲。若您發現錯誤，請透過下方聯絡方式通知我們。</p>
            <p>各方責任依適用法令及個別契約判斷。本條款不免除依法不得免除的責任，也不排除因故意或重大過失所生的責任。</p>
          </section>
          <section>
            <h2>七、隱私、條款更新與爭議處理</h2>
            <p>個人資料處理請參閱<a href="/privacy">隱私權政策</a>。本頁更新時會標示日期；已成立的合作不因本頁單方更新而變更原約定，需另行同意的事項將另行確認。</p>
            <p>本條款以中華民國（台灣）法律為準據，但不排除依法應適用的強制規定。發生爭議時可先聯絡協商；未能解決時，依法律規定的管轄及救濟程序處理。</p>
          </section>
          <section>
            <h2>八、聯絡服務提供者</h2>
            <p>{siteConfig.name}／{primaryAuthor.name}：<a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>，電話 <a href={`tel:${siteConfig.telephone}`}>0958-801-559</a>。</p>
          </section>
          <nav aria-label="相關頁面" className="flex flex-wrap gap-6 border-t border-[#344349] pt-8">
            <a href="/privacy">隱私權政策</a><a href="/#contact">聯絡我們</a>
          </nav>
        </div>
      </article>
    </PageShell>
  )
}
