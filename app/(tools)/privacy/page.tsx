import { PageShell } from '@/components/page-layout/PageShell'
import { primaryAuthor } from '@/lib/content/authors'
import { createMetadata, createWebPageSchema, JsonLd, siteConfig } from '@/lib/seo'

const title = '隱私權政策'
const description = '說明隼訊數位行銷如何處理詢價資料、網站使用紀錄、Cookie 與語言偏好，以及您可以如何行使個人資料權利。'
export const metadata = createMetadata({ title, description, path: '/privacy' })

export default function PrivacyPage() {
  return (
    <PageShell>
      <JsonLd data={createWebPageSchema({ name: title, description, url: `${siteConfig.url}/privacy` })} />
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-[#A8B6BC] leading-relaxed [overflow-wrap:anywhere]">
        <header className="mb-12 border-b border-[#344349] pb-8">
          <p className="mb-3 text-sm text-amber-500">Privacy Policy · 繁體中文版</p>
          <h1 className="mb-4 text-4xl sm:text-5xl text-[#E0E5E8]">{title}</h1>
          <p>最後更新日期：<time dateTime="2026-09-08">2026 年 9 月 8 日</time>；自本頁公開發布日起生效。</p>
          <p className="mt-4">本政策適用於 {siteConfig.name}（Falcon Information，以下稱「我們」）經營的官網與透過官網提出的服務諮詢。負責人為{primaryAuthor.name}。</p>
        </header>
        <div className="space-y-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:text-[#E0E5E8] [&_p+p]:mt-3 [&_a]:text-amber-400 [&_a]:underline [&_a]:underline-offset-4 [&_li]:mt-2">
          <section>
            <h2>一、蒐集哪些資料與用途</h2>
            <ul className="list-disc pl-6">
              <li>服務諮詢：您提供的姓名、電子郵件、公司名稱（選填）、服務需求、訊息內容與介面語言，用於回覆詢問、需求評估、報價與後續合作聯繫。若您以電話、Email 或 LINE 聯絡，我們也會處理您在該管道主動提供的聯絡資料與對話。</li>
              <li>網站運作與安全：主機及相關服務可能處理 IP 位址、瀏覽器與裝置資訊、請求時間、網址及錯誤紀錄，用於提供網站、防止濫用與排除故障。</li>
              <li>使用情形分析：透過 Google Tag Manager 管理分析標籤，並使用 Google Analytics 了解頁面瀏覽、來源、服務按鈕、聯絡點擊及表單成功或失敗等事件，以改善內容與詢價流程。</li>
            </ul>
            <p>本站自行設定的詢價分析事件不附帶姓名、Email、公司名稱、訊息全文或原始錯誤內容；這不代表網站與第三方分析服務完全不處理個人資料。請勿在表單或網址參數中提供密碼、身分證字號、金融帳戶、病歷、私人錄音或未獲授權的第三人資料。</p>
          </section>
          <section>
            <h2>二、利用方式、對象與地區</h2>
            <p>詢價表單會以電子郵件送交我們的聯絡信箱，由負責回覆及合作的人員於必要範圍內處理。我們使用的網站主機與傳輸服務（Vercel）、郵件服務供應商，以及 Google 分析服務，可能依其職能處理資料；郵件供應商以實際啟用的服務為準。</p>
            <p>資料可能在台灣，以及上述服務供應商的營運或伺服器所在地（包括美國等境外地區）儲存或處理。我們不販售或出租您的詢價個資；除提供服務所需的受託處理、您的另行授權，或依法應提供的情形外，不將資料提供給無關第三人。</p>
            <p>透過 LINE 或外部網站互動時，也適用該平台的政策。客戶自行營運的網站、App，以及個別委託專案的資料處理，依其各自政策與合作約定辦理，不因展示在本站案例中而由本政策涵蓋。</p>
          </section>
          <section>
            <h2>三、保存期間與保護</h2>
            <p>詢價及往來資料在回覆、合作洽談與後續服務所需期間保存；若成立合作，相關資料依契約履行、會計稅務及爭議處理所需期間保存。目的消失且無其他合法保存理由時，將刪除或停止利用；備份與供應商紀錄依其保存及輪替機制處理。</p>
            <p>分析及主機紀錄的保存期間依各服務的實際設定與必要用途決定，並非所有資料都有相同期限。您可透過下方聯絡方式詢問涉及您的資料及保存情形。我們以加密傳輸與必要的存取限制保護資料，並在發生個資事件時依適用法令處理及通知。</p>
          </section>
          <section>
            <h2>四、Cookie、分析與語言偏好</h2>
            <p>Google 分析可能使用 Cookie 或類似技術處理裝置、瀏覽及互動資訊。詳見 <a href="https://policies.google.com/technologies/partner-sites?hl=zh-TW">Google 如何使用合作網站資訊</a>。您可透過瀏覽器封鎖或清除 Cookie，或使用 <a href="https://tools.google.com/dlpage/gaoptout?hl=zh-TW">Google Analytics 停用工具</a>；封鎖 Cookie 不代表所有網路紀錄都會停止。</p>
            <p>網站會讀取瀏覽器語言以提出語言建議；當您選擇語言或關閉建議時，會在本機儲存偏好。您可在瀏覽器清除本站資料以重設，停用本機儲存時仍可手動選擇語言。</p>
          </section>
          <section>
            <h2>五、您的權利與不提供資料的影響</h2>
            <p>您可依法要求查詢、閱覽、取得複製本、補充或更正，以及停止蒐集、處理、利用或刪除您的個人資料。請來信說明請求與可辨識的往來資訊；我們會在必要範圍內核對身分，並依法回覆。若有依法必須保存或其他法定例外，將說明原因與處理範圍。</p>
            <p>您可自由決定是否提供資料。不提供姓名、可回覆的 Email 或需求內容，將無法透過表單完成諮詢；不填公司名稱或服務分類，不影響送出。您仍可瀏覽公開內容，或自行選擇其他聯絡方式。</p>
          </section>
          <section>
            <h2>六、政策更新與聯絡方式</h2>
            <p>我們會因服務或資料處理方式變動更新本頁，並標示更新日期。若依法需要另行告知或取得同意，將另行辦理，不以更新本頁取代必要程序。</p>
            <p>個資權利或政策問題請聯絡 {siteConfig.name}／{primaryAuthor.name}：<a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>，電話 <a href={`tel:${siteConfig.telephone}`}>0958-801-559</a>。</p>
            <p>相關權利與告知事項可參閱<a href="https://law.pdpc.gov.tw/LawContent.aspx?id=FL010627">個人資料保護法</a>。</p>
          </section>
          <nav aria-label="相關頁面" className="flex flex-wrap gap-6 border-t border-[#344349] pt-8">
            <a href="/terms">服務條款</a><a href="/#contact">聯絡我們</a>
          </nav>
        </div>
      </article>
    </PageShell>
  )
}
