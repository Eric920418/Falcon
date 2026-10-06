# 隼訊數位行銷服務平台

隼訊企業官網，以「網站與 AI 開發」及「SEO／GEO 搜尋成長」兩個獲客 Hub 為核心，使用 Next.js 16 + React 19 + Tailwind CSS v4 構建。

**網站**: https://www.falconinformation.com

## 隱私權政策與服務條款（2026-09-08）

- 公開路徑為 `/privacy` 與 `/terms`，沿用 `(tools)` 的獨立繁中布局。部署後可將 `https://www.falconinformation.com/privacy` 與 `https://www.falconinformation.com/terms` 填入服務提供者登錄欄位。
- 條文提供單一繁體中文版；各語系頁尾連至相同網址，外語入口標示內容為繁體中文。詢價表單送出前提供隱私告知與新分頁政策連結，避免離開頁面而遺失輸入。
- 此次未加入額外同意勾選或變更表單送出流程；分析 Cookie 的載入行為維持現況，政策頁本身不等同 Cookie 同意管理功能。
- 隱私政策依現有表單寄信、Google 分析、主機紀錄及本機語言偏好撰寫；服務條款以官網使用與諮詢為範圍，正式合作以個別契約及法令為準。參考 [個人資料保護法](https://law.pdpc.gov.tw/LawContent.aspx?id=FL010627) 與 [Google 合作網站資料說明](https://policies.google.com/technologies/partner-sites?hl=zh-TW)。
- 更新條文請修改 `app/(tools)/privacy/page.tsx`、`app/(tools)/terms/page.tsx` 的內容及日期，同步更新 sitemap 日期與本 README；不另建條款 Markdown 或管理後台。路徑與 hreflang 回歸納入 `pnpm check:i18n`，兩頁及 sitemap 納入 `pnpm check:seo`。新增頁面不等於正式站已部署。
- 驗收通過：內容檢查、30,915 筆翻譯檢查、TypeScript 與 `pnpm build`、本機正式版全站 SEO 檢查，以及政策頁／中英文首頁的 1440px、390px 瀏覽器檢查（頁尾、表單連結、無橫向溢出或瀏覽器錯誤；外部請求及寄信已封鎖）。沙箱限制 tsx IPC 時，以 `pnpm exec node --import tsx scripts/lint-content.ts` 及 `pnpm exec node --import tsx scripts/check-i18n.ts` 執行同一檢查。建置仍輸出 metadataBase 預設 localhost 警告，但全站 canonical 與社群 metadata 驗收通過。

## 業務範圍

- 企業網站、電商、CMS 與客製系統開發
- AI 工具、LINE／Telegram Bot 與流程自動化
- 企業 AI 語音客服、電話自動化、派單／工單／CRM 整合
- SEO 技術、內容與自然搜尋成長
- GEO／AI 搜尋可引用內容、實體一致性與引薦量測

舊有廣告、社群、影片與量化交易頁只保留既有資訊，不列入主導覽與 sitemap，並設定 `noindex,follow`。AEO 是 GEO 的回答設計方法，不作獨立服務銷售。

## 技術棧

- **Next.js** 16.1.1 (App Router + Turbopack)
- **React** 19.2.3
- **Tailwind CSS** 4.1.3
- **Motion** (Framer Motion) - 動畫效果
- **Radix UI** - UI 組件庫
- **Lucide React** - 圖標庫

## 開始使用

```bash
# 安裝依賴
pnpm install

# 啟動開發伺服器 (使用 Turbopack)
pnpm dev

# 建置生產版本
pnpm build

# 啟動生產伺服器
pnpm start
```

## 專案結構

```
├── app/                               # Next.js App Router
│   ├── [locale]/                      # 官網語系根布局，伺服器輸出 html lang
│   │   ├── page.tsx                   # 首頁
│   │   ├── services/                  # 服務總覽與詳細頁
│   │   ├── about/                     # 實名負責人與工作方法
│   │   ├── case-studies/              # 作品集與公開案例
│   │   ├── local/[slug]/              # 城市服務指南
│   │   ├── blog/                      # 文章索引與完整文章
│   │   ├── pricing/                   # 定價索引與詳細頁
│   │   ├── compare/[slug]/            # SEO／GEO／AEO 比較
│   │   ├── llms.txt/                  # 同一內容來源產生摘要
│   │   └── llms-full.txt/             # 同一內容來源產生完整摘要
│   ├── (tools)/                       # 獨立繁中根布局
│   │   ├── resume/                    # 履歷與 PDF 工具，原網址不變
│   │   └── card/                      # 名片與社群圖，原網址不變
│   ├── sitemap.ts                     # 九語 sitemap 與對等版本
│   ├── robots.ts                      # Robots.txt 與 AI 爬蟲規則
│   ├── opengraph-image.tsx            # 既有繁中社群圖
│   ├── ai-voice-og/                   # 企業 AI 電話專用社群圖
│   ├── brand-og/                      # 外語共用純品牌社群圖
│   ├── globals.css                    # 全局樣式與多語排版
│   └── api/                           # 聯絡、履歷與名片工具 API
├── src/
│   ├── components/
│   │   ├── Home*.tsx, Contact.tsx     # 首頁定位、AI 電話、交付、案例、流程、定價與信任元件
│   │   ├── ui/                        # shadcn/ui 元件
│   │   ├── page-layout/               # 子頁面共用 layout
│   │   │   ├── PageShell.tsx
│   │   │   ├── SitePageHeader.tsx
│   │   │   └── SitePageFooter.tsx
│   │   └── page-templates/            # 共用內容渲染模板
│   │       ├── ServicePageTemplate.tsx
│   │       ├── AiVoiceServicePage.tsx
│   │       ├── LocalPageTemplate.tsx
│   │       ├── BlogPostTemplate.tsx
│   │       ├── PricingPageTemplate.tsx
│   │       └── ComparePageTemplate.tsx
│   └── lib/
│       ├── i18n/                      # 語系、網址、翻譯、Intl 與分類 JSON 字典
│       ├── seo/                       # metadata 與精簡結構化資料工廠
│       │   ├── site-config.ts         # 全站常數
│       │   ├── metadata.ts            # createMetadata() 統一 metadata 產生器
│       │   ├── json-ld.tsx            # <JsonLd> 元件
│       │   └── schemas/               # 9 種 schema 工廠
│       │       ├── organization.ts    # 全站級
│       │       ├── website.ts         # 全站級
│       │       ├── breadcrumb.ts      # 頁面級（工廠）
│       │       ├── service.ts         # 頁面級（工廠）
│       │       ├── article.ts         # 頁面級（工廠）
│       │       ├── webpage.ts         # 頁面級（工廠）
│       │       ├── profile-page.ts    # 實名作者頁
│       │       ├── case-study.ts      # 案例 CreativeWork
│       │       └── item-list.ts       # portfolio 列表
│       └── content/                   # 內容資料層（data-driven UI）
│           ├── types.ts               # 共用 content schema
│           ├── authors.ts             # 實名作者資料
│           ├── case-studies.ts        # 公開案例證據
│           ├── price-catalog.ts       # 單一價格來源
│           ├── services/              # 服務內容
│           ├── local.ts               # 6 個城市服務指南內容＋isIndexableLocalPage 閘門
│           ├── blog.ts                # 21 篇文章內容
│           └── pricing.ts             # pricing 逐頁手寫細節 + 3 個 compare 內容
├── public/
│   ├── logo.png
│   └── manifest.json
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## 設計美學

### 淺色官網與主題去背插畫

主要官網以易讀的淺色圖文版面呈現；履歷、名片與法律頁保留各自視覺系統：

**配色系統**
- **主色**：深青綠 (#2C7169)，搭配淡藍青與薄荷色細節
- **背景**：白色 (#FFFFFF)、霧灰 (#F8FAF8)、柔和綠灰 (#EDF4F0)
- **文字**：深色 (#233D3D) 與次要文字 (#526965)
- 色彩變數僅套用於 `.falcon-site` 範圍。

**字體選擇**
- **標題與內文**：沿用 Noto Sans TC（思源黑體）
- **外語**：沿用各語言系統字體與原有字形規則

**設計元素**
- 品牌裝飾線 - 書法筆觸感的漸層線條
- 工業感網格背景
- 斜線紋理
- 大型漢字裝飾（「隼」「關」「理」等）
- 克制的動畫效果（避免過度 hover scale、rotate 360°）

**組件風格**
- `.falcon-card` - 克制的懸浮陰影與邊框變色
- `.falcon-btn-primary` - 俐落的按鈕設計
- `.brand-line` - 品牌裝飾線
- `.text-falcon-gradient` - 深青綠漸層文字

## 功能特色

- 響應式設計 (RWD)
- 滾動進度條（暖色調漸層）
- 流暢的頁面過渡動畫
- **Hero 背景** - 工業網格 + 暖色光暈 + 大型漢字裝飾
- **信任徽章** - 首屏展示「永久售後服務」與「快速交件保證」
- **作品案例展示** - 完整案例頁收錄 33 項作品，首頁精選三項可驗證案例
- **決策型首頁內容** - 兩個獲客 Hub、企業 AI 電話旗艦區、實際交付、四步合作流程、適配條件、公開起價、實名負責人與精選實作文章

## 作品案例

Portfolio 組件展示公司的專案作品，包含：

- **電商平台** - 翊珍香電商、財神賣鞋球鞋電商（https://www.xn--cjzl80byf571b.tw/）、燒烤訂餐服務
- **YUHE 品牌服飾電商** - 服飾品牌電商（https://yuhe.studio/）（分類選購、完整尺寸資訊、會員登入、購物車、Vercel Blob 圖片與安全標頭；公開站目前 noindex，頁尾標示商品圖片為暫代素材）
- **企業官網** - 佑羲人力（https://yoshi3166.com）、R collectives 室內設計、ROLL ON. 外商顧問官網（https://www.rollgrp.com/）
- **形象網站** - 書籍形象網站
- **桃園歸正福音教會官方網站** - 教會資訊與內容管理網站（https://recty.org/）（主日與固定聚會、首次來訪導覽、消息、講道影音、教義與文章典藏；後台具角色權限；封面截自公開首頁，首頁主視覺為 AI 插畫而非實景）
- **遊戲官網** - 破浪三國（https://www.kingdoms.blog/）
- **App 開發** - 接案媒合平台（Web + iOS + Android）、GoGoCha 花蓮計程車雙模式 App（Kotlin + Jetpack Compose，已上架 Google Play）
- **翻譯蒟蒻 CLASP 原生協作 App** - 大學跨領域課程的學生協作工具（App Store：https://apps.apple.com/tw/app/id6798919455；Google Play：https://play.google.com/store/apps/details?id=art.jichiu.clasp）（SwiftUI iOS 與 Kotlin／Jetpack Compose Android 皆有公開商店頁；手動觸發 AI 跨域概念轉譯、即時群聊、人才搜尋與六大工作室工具）
- **AI 應用** - 現場 AI 智能客服系統
- **學術系統** - 會議論文投稿審查系統、國際學術研討會（https://icte2025.ntue.edu.tw/）
- **POS 系統** - 餐飲 POS 機整合系統
- **自由接案平台** - CosmosWork（https://falcontaskbridge.com/）（AI 智能媒合、人才履歷展示、需求追蹤）
- **展覽管理系統** - 完整的展覽作品管理與預約系統（52 資料表、Craft.js 編輯器、任務看板、即時叫號）
- **2026 上緯智聯自動化展 AI Explorer** - 行動優先展場互動平台（https://guangdian-2026.vercel.app/）（台智寶 TAIIBOT、會員登錄、六大任務集點、許願牆、限量禮物兌換）
- **車輛履歷管理系統** - 租車與旅遊接駁業者的車籍、里程、維修保養、成本與到期提醒管理系統（https://vehicle-history-eight.vercel.app/）（AI 單據辨識、重複維修警示、角色權限、稽核紀錄、Excel 匯出、Google Sheets 同步與備份）
- **中醫診所 LINE 預約系統** - LINE LIFF 整合預約系統（Supabase Realtime、併發控制、130+ E2E 測試）
- **茶客棧飲料店官網** - 茶飲品牌官網（東方墨韻視覺設計、CMS 後台管理、Cloudflare R2 圖片存儲）
- **invisible care 居家健康守護官網與 CMS** - 居家清潔六大服務品牌官網（https://needfix.com.tw/）（Section CMS 動態區塊、Before/After 對比圖、完整 SEO 實體圖、老人友善後台 UI）
- **Telegram 雙群管理機器人 + 後台** - grammY + Vercel Pro 部署（主群→子群 fan-out 同步、入群題庫認證、OpenCC 簡體字守門、防 raid、QStash 排程貼文）
- **ESCROWA 全球遊戲交易託管服務官網** - 遊戲交易中間人形象官網（https://escrowa.com.tw/zh）（Laravel 12 自刻 CMS、中英雙語、純 canvas 金色點陣地球、cPanel FTP 部署）
- **GoGoCha 花蓮計程車品牌官網 + 自建派單後端** - 花蓮 24h 計程車隊官網（https://hualientaxi.taxi/）（與雙模式 App 同生態系；AI 接電話派車、車資試算真實 API、長輩友善無障礙；後端 SmartDispatcherV2 AI 派單、LINE Bot、跨車隊媒合分潤、完整營運後台）
- **鴻緯商仲顧問 工業地產官網 + CMS** - 北桃竹苗企業廠房・工業土地顧問官網（https://allenlo.com.tw/）（精選物件分頁篩選、市場分析文章、結構化詢問表單、Resend 雙向通知；後台完整 CRUD、Prisma migrate 版本化遷移、Zod 前後端共用驗證、企業藏青視覺）
- **Alive AI 互動戀愛遊戲（雙平台）** - iOS＋Android 上架（Google Play com.aliverole.app）（Convex + 多模型編排 Claude/Gemini/OpenAI、7 維情緒系統、配對→分手關係生命週期、AI 即時生成劇照、雙平台內購）

每個專案卡片包含：專案描述、核心功能、技術亮點

## 首頁圖文版面

首頁主視覺採桌面左右圖文、手機文字先行，使用 `home-hero-cutout.webp` 透明物件直接融合 section 底色。原全幅背景圖片保留在 public，首頁不再引用。交付、合作路徑、AI 電話與文章區引用相關素材，真實案例繼續使用原始截圖。

相關檔案：`app/globals.css`、`src/components/HomeHero.tsx`、`src/components/PageVisual.tsx`、`src/lib/content/visual-assets.ts`。

## SEO／GEO 配置

網站採用資料驅動的多頁面架構。SEO 與 GEO 共用抓取、索引、效能、原創內容、實體一致性與可驗證證據；AEO 只作為清楚回答問題的內容方法，不另建近義服務頁。

### 內容架構

| 路由群 | 路徑 | 數量 | 搜尋意圖 |
| --- | --- | --- | --- |
| 服務總覽頁 | `/services` | 1 | navigational |
| 核心服務頁 | `/services/[slug]` | 5 | informational + commercial |
| 舊服務頁 | `/services/[slug]` | 4 | `noindex,follow` |
| AEO 舊路徑 | `/services/aeo` | 1 | 永久轉址至 `/services/geo` |
| 本地頁 | `/local/[slug]` | 6 | 城市服務指南；`isIndexableLocalPage()` 內容品質閘門達標才可索引 |
| 案例頁 | `/case-studies`、`/case-studies/[slug]` | 4 | commercial + evidence |
| 部落格 | `/blog`、`/blog/[slug]` | 22 | 1 個索引頁＋21 篇 informational / commercial 文章 |
| 定價頁 | `/pricing`、`/pricing/[slug]` | 5 | transactional |
| 比較頁 | `/compare/[slug]` | 3 | commercial investigation |
| 公司頁 | `/about` | 1 | E-E-A-T / entity |
| 首頁 | `/` | 1 | navigational + commercial |

每個可索引頁面維持唯一 title、description、canonical、單一 H1，以及預設 OG／Twitter 圖。索引與 sitemap 由內容證據門檻控制，不以「檔案存在」等同「應該收錄」。

> **合規紅線（量化交易服務頁）**：`/services/quant-trading` 一律維持「**軟體開發**」定位——交付程式、客戶以自有帳戶自行下單、本公司不碰資金。文案**禁止**出現代操、保證獲利、收益分潤、招攬資金等字眼（在台灣需金管會投顧／投信牌照，且會被 `pnpm lint:content` 擋）。該頁 `src/lib/content/services/quant-trading.ts` 內含「重要聲明：服務性質與風險告知」段落，修改文案時務必保留。

### Schema 架構（模組化、可擴展）

`src/lib/seo/` 把所有 SEO 邏輯抽出為純資料 + 工廠函數，分兩層：

所有 JSON-LD 在單一 `@graph` 輸出，且只標記畫面上真實可見的資料：

- 全站：Organization、WebSite
- 頁面：WebPage、BreadcrumbList、Service、Article、ProfilePage、CreativeWork

沒有可到訪門市，因此不輸出 LocalBusiness、地理座標、地址或營業時間。FAQ 與步驟內容可以保留給讀者，但不輸出 FAQPage、HowTo、Speakable，也不宣稱存在 AI 專用 Schema。

> **重要**：先前版本的 `AggregateRating`（4.9/47 評分）已移除，因為缺少對應的 Google Business Profile 驗證來源，違反 Google Rich Results 政策。如未來有真實 Google 商家評論，請改用 `sameAs` 指向 GBP。

> **JsonLd 安全 escape**：`src/lib/seo/json-ld.tsx` 的 `safeJsonForScript()` 會額外 escape `<`、`>`、`&`、`U+2028`、`U+2029` 後再塞進 `<script type="application/ld+json">`。原因：原生 `JSON.stringify` 不會處理這些字元 — schema 內任一字串若含 `</script>` 會造成 HTML parser 提前關閉標籤（XSS），含 U+2028/U+2029 則會在瀏覽器 hydrate 時拋 `Invalid or unexpected token` SyntaxError 讓整頁炸掉。新增 schema 工廠時直接傳物件給 `<JsonLd>` 即可，escape 已內建。

### llms.txt 與 llms-full.txt

- `/llms.txt`：品牌、服務、公開案例、起價，加上價格頁、比較頁、內容文章與服務地區的連結清單
- `/llms-full.txt`：服務全文、案例證據與限制，加上價格頁方案與 FAQ、比較頁表格、各文章段落標題與 FAQ 題目、城市頁摘要

兩者由 TypeScript 內容資料源生成，目的是降低內容漂移；過濾條件與 sitemap 完全一致（production tier＋local 內容品質閘門），noindex 內容不會出現在摘要中。Google 官方文件明確說明 Google Search 不使用 llms.txt，因此它不是排名、索引或 AI 引用保證。

### 動態 Sitemap

`app/sitemap.ts` 只聚合可索引 canonical URL，使用內容真實更新日期，不輸出 Google 不採用的 `priority` 或 `changefreq`。

### URL 命名與驗收政策

- 公開內容維持短、穩定、描述性的英文或產業通用縮寫，統一使用小寫 ASCII kebab-case；分類路徑固定為 `/about`、`/blog`、`/case-studies`、`/pricing`、`/services` 等既有層級。
- 不為 Ubersuggest 等第三方工具的中文關鍵字逐字匹配警告更換已發布 canonical，也不建立中文 alias 或重複頁。URL 語意需由人工核對搜尋意圖，不能只靠字串比對判定。
- 年份只用於確實具有年度意圖的內容；後續更新不為了刷新年份反覆搬移 URL。永久整併一律使用單次 301，舊 URL 必須自 sitemap、站內連結與 canonical 移除。
- `pnpm check:seo` 會驗證所有內容路徑與 sitemap URL：小寫、連字號、無空白／底線／連續斜線／query／fragment／非必要尾斜線，路徑不得超過 100 字元；永久轉址的目的頁必須直接回傳 200，禁止 redirect chain。

### Local SEO

6 個城市頁定位為「城市服務指南」：內容以服務方式、在地市場觀察、常接需求類型與城市限定 FAQ 為主，不依賴未授權的客戶數據。索引資格由 `src/lib/content/local.ts` 的 `isIndexableLocalPage()` 內容品質閘門機器判定：production tier、非空 `coverageDisclosure`（誠實的無門市／預約前往聲明，會渲染在頁面上）、段落 ≥4、FAQ ≥5、全頁文字量 ≥2,000 字。`consentToPublish` 只控制客戶案例的展示層級，不再控制索引。

保留的紅線不變：不輸出 LocalBusiness、地理座標、地址或營業時間；不暗示當地有分公司或門市；name-only 案例只列名稱與一句話描述。

### Core Web Vitals 優化
- `next/font/local` 自託管 Noto Sans TC
- Next.js Image 自動優化（AVIF/WebP）與折疊下方圖片延遲載入
- Logo 256×256 約 34KB；favicon 為真正的 64×64 ICO
- Server-rendered schema（JSON-LD 在 HTML 內，AI 爬蟲可直接讀）

### AI 爬蟲規則

`app/robots.ts` 明確允許 OAI-SearchBot 與 PerplexityBot。GPTBot 的用途是訓練控制，不當作 ChatGPT Search 曝光訊號或保證。

### 怎麼新增一個服務 / blog / 本地頁面

只需修改資料層，不用碰 React：

1. **新增服務頁** — 在 `src/lib/content/services/` 加一個 `[slug].ts`，並在 `services/index.ts` 註冊。動態路由自動產生對應頁面。
2. **新增 blog 文章** — 在 `src/lib/content/blog.ts` 加一個物件條目。
3. **新增 local landing** — 在 `src/lib/content/local.ts` 加條目。
4. **新增定價頁** — 在 `src/lib/content/pricing.ts` 加條目。
5. **新增作品** — 在 `src/components/Portfolio.tsx` 的 `projects` 陣列加條目，封面放在 `public/` 並同步更新首頁、案例頁與 README 的公開作品總數。

前四類資料頁新增後，sitemap、navigation、JSON-LD、metadata 會由資料層自動生效；作品項目仍需依第 5 點同步公開總數與 sitemap 日期。

### 驗證指令

```bash
# Build 並檢查所有頁面 SSG 成功
pnpm build

# 啟動 production server
pnpm start

# 驗證 schema 渲染
curl -s http://localhost:3000/services/geo | grep -oE '"@type":"[^"]+' | sort -u

# 驗證 sitemap 完整
curl -s http://localhost:3000/sitemap.xml | grep -c "<loc>"

# Google Rich Results Test（推薦）
# https://search.google.com/test/rich-results
```

### 安全標頭（SEO 間接排名信號）
- **HSTS** - 強制 HTTPS 連線
- **CSP** - 內容安全策略（白名單：GTM、GA；字型與圖片改為同網域）。`/resume` 額外放寬 `wasm-unsafe-eval`、`worker-src blob:`、`connect-src data: blob:` 給 `@react-pdf/renderer` 使用。Preview / development 環境（`VERCEL_ENV !== 'production'`）額外放行 `https://vercel.live` 與 `wss://ws-us3.pusher.com` 讓 Vercel Live toolbar（Comments / Feedback）可運作；**production 不受影響**。CSP 構造集中在 `next.config.ts` 的 `buildCsp()` helper，避免字串 `.replace()` 的脆弱性。
- **X-Frame-Options** - 防止 clickjacking
- **X-Content-Type-Options** - 防止 MIME sniffing
- **Referrer-Policy** - 跨域來源控制
- **Permissions-Policy** - 瀏覽器功能權限限制
- **圖片優化** - 自動 AVIF/WebP 格式轉換

### Core Web Vitals 優化
- **DNS Prefetch** - 預解析外部資源域名（Google Fonts、Analytics）
- **Preconnect** - 建立早期 TCP 連接
- **Font Preload** - 預加載關鍵字體（Noto Serif TC、Noto Sans TC）
- **Image Preload** - 預加載關鍵圖片（Logo）
- **PWA Meta Tags** - Apple/Android 應用程式支援

### 社群連結
- Instagram: https://www.instagram.com/falcon.information
- Threads: https://www.threads.net/@falcon.information
- LINE 官方帳號: https://lin.ee/7IjIYw2

### Google Tag Manager (GTM)

GTM 已整合至 `src/components/SiteRoot.tsx`，透過環境變數控制。部署時需設定：

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

未設定時 GTM 不會載入，不影響開發環境。

**ID 會先 `trim()` 再以 `/^GTM-[A-Z0-9]+$/i` 驗證格式，不符者一律不注入。**
原因：`NEXT_PUBLIC_*` 是 build 時被字串替換進 inline `<script>`，若環境變數挾帶換行/引號（例如貼進 Vercel env 欄位時多了結尾換行 `GTM-XXXX\n`），會讓 inline JS 字串字面值斷行，瀏覽器丟 `Uncaught SyntaxError: Failed to execute 'appendChild' on 'Node': Invalid or unexpected token`，導致**全站 GTM/GA 追蹤失效**，同時是 script injection 破口。驗證後即使環境變數髒掉也不會炸；但仍應到 Vercel 後台確認該變數**值的前後無多餘空白或換行**，改完需重新部署（build 時才會重新替換）。

### 待完成
- [ ] 申請並設定 Google Business Profile（本地 SEO 關鍵；含真實評論後可重新加入 AggregateRating，連結至 GBP）
- [ ] 申請 Google Search Console 並提交新版 sitemap

### SEO／GEO 與企業 AI 電話架構（2026-08-03）

- 網站獲客主軸收斂為「網站與 AI 開發」及「SEO／GEO 搜尋成長」。
- 實名作者資料集中於 `src/lib/content/authors.ts`；公開案例證據集中於 `src/lib/content/case-studies.ts`。
- 公開起價與報價因素集中於 `src/lib/content/price-catalog.ts`，服務頁、價格頁、Schema 與 llms 路由必須共用此來源。
- 案例只可使用已公開或取得同意的資料；沒有 GA4、GSC、營收等原始資料時，不得宣稱商業成長幅度。
- 不把 `llms.txt`、FAQ／HowTo／Speakable Schema 當作 Google AI 搜尋排名手段；GEO 以可索引內容、真實經驗與可驗證證據為核心。
- 全站 JSON-LD 只輸出單一 `@graph`；全站實體為 Organization + WebSite，借址不再輸出為 LocalBusiness、地理 meta 或 vCard 地址。
- 已刪除失效的 `MarketingAgency`／`ProfessionalService`／重複 LocalBusiness Schema 實作，避免未被引用的檔案仍在型別檢查或日後誤用。
- 字型改由 `next/font/local` 自託管 `public/fonts` 內的 Noto Sans TC，不再從瀏覽器重複請求 Google Fonts。
- 可索引服務固定為 `/services/web-development`、`/services/ai-tools`、`/services/ai-voice-agent`、`/services/seo`、`/services/geo`；AEO 永久轉址至 GEO，其餘舊服務保留可讀但設為 `noindex,follow` 並移出 sitemap。
- 城市頁索引由 `isIndexableLocalPage()` 內容品質閘門判定（詳見 Local SEO 段）；不達標的頁自動 `noindex,follow` 並移出 sitemap，避免薄弱城市頁成為 doorway page。
- `robots.txt` 明確允許 `OAI-SearchBot` 與 `PerplexityBot`；GPTBot 保留但只視為訓練爬蟲設定，不當作搜尋曝光保證。
- `/about` 使用實名負責人與可核對的公開連結；`/case-studies` 與三個案例詳頁明確區分技術量測、產品能力與商業成效，並顯示資料限制。
- 所有文章作者統一為實名蔡翊廉並連到 `/about`；已移除虛構的「資深 SEO 顧問」審稿者。
- `/pricing` 與四個價格詳頁直接由 `price-catalog.ts` 產生；2026-07-27 依指示全部除以二，公開起價為網站 2 萬／專案、AI 工具 3 萬／專案、SEO 7,500／月、SEO／GEO 12,500／月。企業 AI 電話不沿用聊天機器人起價，依電話、併發、系統整合、人工席位與 SLA 客製報價；AEO 併入 GEO、不另售 Schema 套餐。
- 服務頁的價格卡片與 `/pricing` 速覽也直接讀取同一價格目錄；各服務檔內的舊價格欄位不再作為前端或 Schema 輸出來源。
- `/llms.txt` 與 `/llms-full.txt` 改為 App Router 純文字路由，直接讀取服務、價格、案例與作者資料；不再維護可能漂移的手寫靜態副本。
- 首頁已移除遊戲、廣告、社群、影片等稀釋主題的平鋪區塊與捲動進度動畫；保留單一 H1 與兩個獲客 Hub，並加入實際交付、三個證據化案例、四步合作流程、公開起價、實名負責人、精選文章與聯絡轉換。子頁導覽同步收斂為六個主要入口。
- 全站 footer 已移除借址、AEO 舊連結、非主軸服務與外部 LINE QR 大圖，改為兩個 Hub、案例、價格、實名資料與直接聯絡入口。
- 聯絡表單可由 `?service=ai_voice#contact` 預選服務；成功推送含非敏感 `service` 分類的 `generate_lead`、AI 電話 CTA 推送 `service_cta_click`、電話／Email／LINE 推送 `contact_click`、失敗推送不含 PII 的 `form_error`。API 回傳穩定錯誤碼，前端完整顯示錯誤碼與訊息。
- Logo 與 App icon 已由 2048×2048／約 2MB 改為 256×256／約 34KB；`public/favicon.ico` 已改為真正的 64×64 ICO（約 17KB）。
- 電子名片不再連到借址，只顯示「台灣桃園（非到訪門市）」作為主要服務區；vCard 同樣不輸出街道地址。
- SEO／GEO 服務內容已依 Google 2026-07-10 官方指引重寫：明確說明 Google 忽略 llms.txt、沒有 AI 專用 Schema、沒有固定見效週期，並移除借址辦公室與 FAQ／HowTo／Speakable 成效宣稱。
- GEO 指南、SEO／GEO／AEO 比較、Schema、Perplexity 與 Google AI Overview 五篇文章已同步改寫；移除 TF-IDF、DA 門檻、固定週期、FAQ rich result 與「無 Schema 就不會被引用」等錯誤說法。
- 預設 OG 圖已改為雙 Hub 定位並移除 AEO 與借址；拿掉 Edge runtime，讓 Next.js 可靜態產生分享圖。
- FAQ 與步驟內容仍可供讀者閱讀，但 FAQPage／HowTo Schema 工廠已刪除；AEO 舊內容檔也已刪除，僅保留 `/services/aeo` 永久轉址。
- 2026-08-12 起，六個城市頁的索引改由內容品質閘門判定（取代原本的客戶授權證據閘門）；頁面重寫為不依賴客戶數據的城市服務指南後全數達標開放索引，並渲染誠實的 `coverageDisclosure` 服務方式聲明。
- Footer 的電話、Email、LINE 入口均統一發送不含 PII 的 `contact_click` 事件；履歷也已移除「AI 引擎優先引用」的不實保證。
- `/services/aeo`、`/blog/seo-vs-geo-vs-aeo`、`/blog/how-we-pick-clients` 由 Next.js redirects 明確回傳單次 301；後兩者分別整併至比較頁與 `/about`，不再留在 sitemap 或站內連結。
- `pnpm check:seo` 會全站驗證 HTTP 200、index/noindex、sitemap、唯一 metadata/canonical、單一 H1、OG/Twitter、單一 JSON-LD `@graph`、孤兒頁與三條單次 301。
- sitemap 已納入案例索引頁與三個案例詳頁；城市頁在證據達標前不會被列入。
- SEO 服務 FAQ 已移除固定 2–6 個月見效區間；舊作品元件也不再把 FAQPage／Review JSON-LD 當作成果賣點。
- 內容 lint 標記的空泛絕對化用語已改為可驗證表述。
- `/pricing` 已補上 SEO／GEO／AEO 比較頁的直接文字內鏈，避免比較頁成為孤兒頁。
- 自託管 Noto Sans TC 已依網站實際字元產生 WOFF2 子集：Regular 約 220KB、Bold 約 224KB，取代初始載入的兩個 1.3MB 全字集檔。
- 冷快取 headless lab：2026-07-26 首頁 LCP 0.61s、CLS 0.0215；2026-07-27 新增案例／價格決策區後，Fast 4G 行動傳輸約 0.92MB、DOM 408，仍低於 1.5MB 與原 1,586 DOM 目標。這是本機實驗室值，不等同 CrUX。
- 聯絡驗收涵蓋 `REQUIRED_FIELDS_MISSING`、`SMTP_NOT_CONFIGURED` 前端完整顯示、電話／Email／LINE `contact_click`、失敗 `form_error`、模擬成功 `generate_lead`；所有事件均未帶姓名、Email 或訊息內容。
- JSON-LD 已改成每頁剛好一個 script／一個 `@graph`；Organization 與 WebSite 由 `JsonLd` 合併並依 `@id` 去重，頁面 schema 接在同一 graph。
- `pnpm check:seo` 也會強制驗證 JSON-LD 可解析、script 數量為 1，且 Organization／WebSite 各只有一個節點。
- 聯絡區塊已移除依賴 viewport 才顯示的 reveal 動畫，避免完整頁、弱 JS 或動畫尚未觸發時出現大片空白，並確保表單錯誤直接可見。
- 2026-07-27：依 Git `HEAD^` 核對並恢復全部 29 項作品；案例頁使用單一「公開案例與可驗證證據」區塊，不再拆成兩段。翊珍香、GoGoCha、診所 LINE 預約在同一批卡片中標示可驗證證據並連至證據詳頁，首頁入口明示「完整 29 項作品」。
- 2026-07-27：網站、AI、SEO、GEO 的服務內容、FAQ、`priceMin` 與方案價格同步除以二；第三方 AI API 用量費不屬於隼訊服務費，維持供應商實際成本。
- 2026-07-27：保留但 `noindex` 的廣告、社群、影片與量化交易頁也同步將固定費、方案費、維護費及廣告代操抽成除以二；客戶直接支付給廣告平台的媒體預算不變。
- 2026-07-27：六個城市頁 FAQ 與文章中的隼訊自建／維護價格同步除以二；市場行情、第三方 SaaS、AI API、網域主機與廣告平台成本不改寫。
- 2026-07-27：首頁新增精簡「案例有廣度，價格不藏」區塊，顯示 29 項作品、3 個證據詳頁與四個砍半後起價；不重複渲染 29 張案例卡，維持首頁效能與主題聚焦。
- 2026-07-28：首頁擴充為完整決策頁，新增 Build／Grow 實際交付、可驗收方式、四步合作流程、合作適配條件、實名負責人與三篇精選實作文章；採文字與分隔線為主的編輯式版面，不新增重型媒體或 viewport 動畫。
- 2026-07-28：擴充後首頁以 production build 實測手機／平板／桌面三種尺寸：單一 H1、8 個主區塊、約 596 個 DOM 節點，手機冷載入約 0.76MB，無橫向溢位、主控台錯誤或失敗請求；5 張圖片均在捲動後完成延遲載入。數值為本機實驗室結果，不等同 CrUX。
- 2026-08-03：新增 `/services/ai-voice-agent` 企業 AI 語音客服核心頁與專用 OG 圖，首頁加入輕量 AI 電話旗艦區；導覽、AI Hub、Footer、價格頁及 GoGoCha 案例完成雙向內鏈。能力資料以 `demonstrated`／`custom` 分層，GoGoCha 只證明 AI 接聽、即時派單與多入口整合，PBX、多線、錄音、監控與席位列為需 POC 驗收的客製範圍。
- 2026-08-03：AI 電話頁的畫面與 Breadcrumb schema 都以 `/services/ai-tools` 為父層；Service schema 只描述可見服務，不輸出固定 Offer。
- 2026-08-03：發布 AI 語音客服導入、費用、IVR／真人比較及 PBX／CRM 串接四篇內容集群；文章共同連回核心服務與 GoGoCha 證據頁。FAQ 保留可讀內容但不輸出 FAQPage／HowTo／Speakable，AI 電話 Service schema 不輸出虛構 Offer 或固定價格。
- 2026-08-03：本機 production 以 390×844、Fast 4G、4× CPU 節流量測：首頁 LCP 1.136s、CLS 0.0215、初始傳輸約 0.86MB、DOM 685；AI 電話頁 LCP 1.148s、CLS 0、初始傳輸約 0.89MB、DOM 698，兩頁均無水平溢位。此為實驗室數值，不等同 CrUX。
- 2026-08-07：完整作品集新增「2026 上緯智聯自動化展 AI Explorer」，以公開首頁實際畫面製作橫幅封面，收錄會員登錄、六大任務集點、許願牆與兌獎流程；作品總數由 29 更新為 30，並同步首頁、案例頁 metadata／文案與 sitemap 更新日期。
- 2026-08-11：依 Ubersuggest 中文字數警告進行搜尋意圖審核，不設定全站最低字數。三篇企業 AI 電話文章補上架構／成本／選型表與失敗邊界；GEO、Google AI、Perplexity、Schema、技術 SEO 與內容品質文章改用官方來源並增加可見參考資料。`ContentSection` 支援語意表格，`BlogContent`／`ComparePageContent` 支援 `ContentReference`。
- 2026-08-11：`/blog/seo-vs-geo-vs-aeo` 301 整併至比較頁，`/blog/how-we-pick-clients` 301 整併至 About 的合作適配區；三個案例補齊負責範圍、各自命名的實作流程、限制與證據核對，價格索引與四個價格頁補上報價形成方式與影響因素。第三方字數警告只作線索，正式驗收仍以索引、非品牌曝光、點擊與合格詢盤為準。
- 2026-08-11：Ubersuggest 的「URL 對 SEO 不友善」清單實際只在中文關鍵字逐字匹配失敗，字元與動態參數皆通過；現有英文 canonical 保持不變。全站驗收新增 URL 語法、100 字元上限、sitemap 參數、尾斜線與 redirect chain 檢查，避免為工具分數製造不必要的 URL 遷移。
- 2026-08-12：新增 `/services` 服務總覽頁（WebPage＋BreadcrumbList＋通用 ItemList schema），修正 5 個服務頁與 compare、local 頁把父層指向 `/services/seo` 或自身的假麵包屑；header 兩個下拉與 footer 加入總覽入口。
- 2026-08-12：四個價格頁由共用模板改為 `pricing.ts` 內逐頁手寫的 `pricingPageDetails`（各 4–5 段獨特內容＋4 題獨特 FAQ＋延伸閱讀內鏈）；價格數字仍由 `price-catalog.ts` 單一來源供給。`PricingPageContent` 新增 `relatedLinks`。
- 2026-08-12：深化 `clinic-line-booking` 與 `yizhenxiang-commerce-performance` 兩個案例（具體失敗情境、實作細節、量測方法），維持既有揭露與限制模式；`website-pricing-2026` 與 `ai-customer-service-cost` 兩篇擴寫（報價單名目解讀、三年成本試算方法、轉換成本）；全站 blog FAQ 由 21 題補至 42 題（每篇 ≥3 題）。
- 2026-08-12：新增五篇文章：`llms-txt-implementation-guide`、`chatgpt-search-citation-observations`、`geo-measurement-guide`、`ai-crawler-robots-guide`、`seo-vendor-evaluation-guide`；關鍵字經比對確認與既有 30+ 頁零競食（llms.txt／引用觀察／量測／爬蟲／採購字各自獨立）。blog 索引頁新增「AI 搜尋量測與爬蟲」內容路徑。
- 2026-08-12：新增兩個比較頁：`ai-voice-vs-chatbot`（與 IVR 比較文分軸：語音 vs 文字模態）、`wordpress-vs-custom-website`（開頭揭露只做客製的立場，WordPress 陳述維持中性事實框架）。
- 2026-08-12：六個城市頁重寫為城市服務指南並全數開放索引（詳見 Local SEO 段）；同步修正城市頁殘留的舊價格（企業方案 30,000、新竹 3.75 萬起等與 price-catalog 不一致的數字）。footer 新增「服務地區」欄。
- 2026-08-12：`/llms.txt` 與 `/llms-full.txt` 擴充 blog／compare／pricing／local 四個內容群組，過濾條件與 sitemap 一致。`/card` 改為 noindex（比照 `/resume`），`/card` 與 `/resume` 納入 `check:seo` 稽核路由；`manifest.json` 修正重複的 icon 條目並改指向 `/icon.png`。sitemap 由 30 個 URL 增至 44 個。
- 2026-08-26：依 Ubersuggest「title 過短」清單逐頁審核 14 個 URL；首頁、服務總覽、三篇文章、兩個案例、四個城市頁與三個價格頁改為查詢意圖優先的描述性 title，品牌仍由共用 metadata 模板附加。未設定全站最低字數，避免為第三方門檻灌入關鍵字；驗收以 title 唯一、頁面語意一致與搜尋點擊表現為準。
- 2026-08-31：依 Google Search Console Generative AI performance report、Bing Webmaster Tools AI Performance 與 OpenAI 發布者文件，更新 GEO 完整指南、Google AI Overview、ChatGPT 引用觀察與 GEO 量測指南。`/blog/geo-measurement-guide` 保留原 URL 並成為唯一量測核心頁；Google AI 曝光、Bing citations、GA4、固定查詢與詢盤分開呈現，不把局部數據當市占或排名。
- 2026-08-31：ChatGPT 搜尋引薦改以 `utm_source=chatgpt.com` 與 referrer 交叉量測；GEO 服務與價格頁的交付口徑同步改為帳號可用的 Google／Bing 官方 AI 報表、GA4、抽樣與合格詢盤。後續新文章必須先由 GSC 的不同搜尋意圖證明站內無合適落地頁；否則優先修現有頁面。
- 2026-09-06：完整作品集新增「車輛履歷管理系統」，使用隔離的本機固定種子資料製作 Dashboard 示意封面，並標示為 DEMO；收錄車籍、維修履歷、成本報表、AI 單據辨識、到期／重複維修警示、角色權限與稽核紀錄。作品總數由 30 更新為 31，並同步首頁、案例頁 metadata／文案與 sitemap 更新日期。
- 2026-09-07：完整作品集新增「YUHE 品牌服飾電商」，以公開首頁實際畫面製作封面，收錄分類選購、商品資訊、會員登入、購物車與政策頁面；作品總數由 31 更新為 32，並同步首頁、案例頁 metadata／文案與 sitemap 更新日期。公開站維持 noindex，且如實標示商品圖片為暫代素材。
- 2026-09-07：完整作品集新增「翻譯蒟蒻 CLASP 原生協作 App」，以三張匿名化 App Store 宣傳畫面組合 App-first 封面，聚焦原生 iOS／Android、手動觸發 AI 跨域概念轉譯、即時群聊、人才搜尋與六大工作室工具；作品總數由 32 更新為 33，並同步首頁與案例頁 metadata／文案。雙平台皆有公開商店頁，不宣稱下載量、評分或使用成效。
- 2026-09-17：YUHE 作品名稱移除「測試版」，仍如實保留官網目前的 noindex 與暫代圖片提示；新增「桃園歸正福音教會官方網站」，使用正式首頁截圖作封面，收錄聚會、消息、講道、教義、文章及角色權限後台，作品數由 33 更新為 34，並同步首頁與案例頁 sitemap 日期。
- [ ] 設定 GTM 容器 ID（`NEXT_PUBLIC_GTM_ID` 環境變數）
- [ ] 從已有 GSC／GA4 匯出近 16 個月與發布前 90 天基準；原始匯出檔只放 `/Users/eric/Downloads`，不提交至 Git。
- [ ] 從 GSC 匯入 Bing Webmaster Tools、提交 sitemap 並保存首份 AI Performance 基準；若 GSC Generative AI 報表尚未開放，明確以 Web Performance＋GA4 替代。
- [ ] 取得城市案例完整公開同意、期間、基準、結果後，把城市頁的案例區從 name-only 升級為含量化證據的展示（索引已由內容品質閘門開放，此項只影響案例展示深度）。
- [ ] 請案例客戶在其官網連回對應案例頁；不購買假提及或批量垃圾外鏈。

## 內容品質護欄

為避免 AI slop（會被 Google 2024+ Helpful Content Update 降權）：

### 三層機制

1. **qualityTier 三態**（在每個 content 檔的物件上）
   - `'placeholder'`：空殼，不進 sitemap、加 `<meta robots="noindex">`
   - `'draft'`：寫了但未審核，不進 sitemap、加 noindex
   - `'production'`：完整、有 E-E-A-T 訊號，進 sitemap 且可被 Google 收錄

   預設為 `'draft'`。升 `'production'` 前須跑 `pnpm lint:content` 且通過 `.claude/content-playbook.md` 的審核清單。

2. **CaseStudy.consentToPublish 三態**（在 `LocalContent.caseStudies` 上）
   - `'name-only'`：只顯示客戶名 + 一句描述（預設值，未取得客戶授權前用）
   - `'metrics-only'`：加上接手日期、量化指標
   - `'full'`：完整 case study（客戶已簽過授權）

   未填的欄位在前端**條件式渲染、不會露出**，避免「假裝有資料」。

3. **AI slop lint**（`scripts/lint-content.ts`）
   - 跑 `pnpm lint:content` 掃描所有 content 檔
   - 偵測 10 種 AI 寫作 pattern（緊迫感詞、無來源統計、數字標題、模板 CTA、競品貶低等）
   - HIGH 風險項使 exit code 1，可整合到 CI / pre-commit hook

### 編輯部架構

所有文章作者統一使用 `src/lib/content/authors.ts` 的實名資料，作者頁連至 `/about`。禁止以未具名「資深顧問」、虛構審稿人或團隊 Person Schema 製造信任訊號。

文章與比較頁可用 `ContentReference` 顯示官方或原始來源；複雜比較使用 `ContentSection.table` 輸出具 `caption`、表頭與行動版橫向捲動的語意表格。字數不是排名 KPI：中文第三方工具的斷詞結果只用來發現可能的主題缺口，不用來要求索引頁、價格頁與文章達到相同篇幅。

### 撰寫指南

詳見 `.claude/content-playbook.md`：訪談題庫、AI slop 範例 vs 改寫範例、跨檔協作流程。

### 競品內容缺口分析（Competitor Content Gap）

用「文件頻率」找出對手常寫、我方卻缺的核心概念，補進對應服務／定價頁，提升內容深度與 SEO/GEO 涵蓋度。

**方法**：對四大主題（SEO・GEO/AEO・網站建置費用・AI 客服）以 WebSearch 取得排名前列對手文章 → WebFetch 抽取 H2/H3＋核心概念＋FAQ → 統計「幾篇對手提到某概念」（文件頻率）→ 減去 `src/lib/content` 既有概念 → 依「對手涵蓋率 × 我方缺口」排序。不採用 spaCy（Python，與本專案 pnpm/TS 工具鏈衝突，且 spaCy 本身不含爬蟲與 TF-IDF）。

**2026-07-10 首批補寫**（共 6 檔、+115 行、純新增無覆蓋，全數通過 `pnpm lint:content` 與 `tsc`）：
- `services/seo.ts`：搜尋三階段白話（檢索→索引→排名）、SEO 自己做 vs 委外、長尾關鍵字、AI Overview 對流量的衝擊
- `services/geo.ts`：加數據/引述/來源提升被引用率（引 Princeton GEO 研究並標限制）、品牌實體一致性＋第三方聲量、E-E-A-T 對 AI 引用、GA4 referral 成效衡量
- `services/geo.ts`：回答前置、Query Fan-Out 與各平台引用來源差異；AEO 舊頁已合併並永久轉址
- `services/web-development.ts`：網站速度＝業績問題、三年總持有成本(TCO)、SSL 憑證、WordPress vs 客製（中立）、如何看報價單
- `services/ai-tools.ts`：RAG 與幻覺控制、轉真人與對話流程設計、成效指標、維運迭代
- `pricing.ts`：網站年度維護費行情、AI 導入的知識庫整理隱藏成本

**誠信原則**：所有實證數字掛出處與限制條件；不承諾「保證排名／保證被引用」；不貶低競品（WordPress/Wix 等）；社群聲量只寫「真實參與」。

**2026-07-10 第二批補寫**（blog + local，共 5 檔，全數通過 `pnpm lint:content` 與 `tsc`）：
- `blog/how-we-define-good-seo-content`：E-E-A-T 四支柱、AI 生成內容是否被罰、字數／密度魔數迷思
- `blog/common-seo-mistakes`：DA/DR 與跳出率迷思破解、演算法更新與排名波動判斷、拆穿「保證第一名」
- `blog/website-pricing-2026`：三年總持有成本(TCO)觀點、一頁式／WordPress／客製選型、年度維護費行情
- `blog/ai-customer-service-cost`：客服成效指標體系（自動解決率/CSAT/FCR）、導入常見的坑、人機協作
- `local/taoyuan-seo`：Google 商家檔案（GBP）優化清單、無實體店面的服務範圍商家

**2026-07-10 第三批：關鍵字競食去重 + Suggest 長尾**（源自 HasData `python-for-seo` 請求，改用免費非 Python 等價做法；該工具需付費 key 故未實跑）：
- 稽核全站 30 個 `keywords[]`，修正 9 處跨頁重複（依 intent 分工：pricing 佔費用字、service 佔服務字、blog 佔資訊字、compare 佔比較字、地區字歸 local）；腳本驗證後「已無關鍵字跨頁重複」。
- 提醒：`keywords[]` 進 `<meta keywords>`（Google 不用於排名），此為意圖對齊的內容衛生；真正競食由 title/H1/內文決定，各頁已大致區隔。
- Google Suggest 公開端點挖真實長尾，轉 3 條 FAQ：`services/seo`（怎麼挑 SEO 公司）、`services/ai-tools`（怎麼挑 AI 客服廠商）、`blog/ai-customer-service-cost`（聊天機器人類型）。

## Safari 移動版相容性

為確保在 iOS Safari 上正常顯示，已修復以下問題：

### 已修復問題

1. **`overflow-hidden` + `preserve-3d` 衝突**
   - Safari 在父容器有 `overflow: hidden` 且子元素使用 `transform-style: preserve-3d` 時會隱藏內容
   - 解決方案：移除相關 section 的 `overflow-hidden`

2. **`translateZ()` 渲染問題**
   - Safari 對 `translateZ()` 支援不完整
   - 解決方案：移除不必要的 `translateZ()` 變換

3. **缺少 WebKit 前綴**
   - 添加 `-webkit-transform-style` 和 `-webkit-perspective` 前綴

4. **Portfolio 效能優化**
   - 移除 17 個卡片的延遲動畫（原本最後一個要等 2 秒）
   - 移除 `backdrop-blur`（移動端效能殺手）
   - 移除 `height: auto` 動畫
   - 添加圖片 `loading="lazy"` 和 `sizes` 屬性

5. **圖片壓縮**
   - 原始圖片總計 ~40MB，嚴重影響載入速度
   - 使用 sharp 壓縮後減少 93%+（~3MB）
   - 壓縮腳本：`node scripts/compress-images.mjs`

6. **MarketingServices 響應式修復**
   - 手機版間距過大（`space-y-32` → `space-y-12 md:space-y-20 lg:space-y-32`）
   - 標題 margin 過大（`mb-24` → `mb-12 md:mb-16 lg:mb-24`）
   - 卡片 padding 過大（`p-10` → `p-6 md:p-8 lg:p-10`）
   - Icon 尺寸過大（`w-24 h-24` → `w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24`）
   - Features 改用 grid 佈局（手機 2 欄，桌面單欄）
   - 移除手機版不必要的動畫效果（背景粒子、光暈）以提升效能
   - 添加 `overflow-hidden` 防止動畫溢出

7. **移動端性能優化（2025/01）**
   - 移除 `backdrop-blur-md` 和 `backdrop-blur-lg`（GPU 密集型操作）
   - 為 scroll 事件添加 `requestAnimationFrame` 節流
   - 簡化 Hero 的 blur 效果（`blur-[120px]` → `blur-[60px]`，移動端隱藏）
   - **Hero 完全移除 Framer Motion**，改用純 CSS 動畫（減少 JS 開銷）
   - 添加 `prefers-reduced-motion` 媒體查詢支持
   - 移動端禁用 hover transform 效果（`@media (hover: none)`）
   - 新增 CSS 動畫類：`animate-fade-in-up`、`animate-fade-in-left` 等

### 受影響組件

- `TechServices.tsx`
- `MarketingServices.tsx`
- `ContentServices.tsx`
- `Portfolio.tsx`

## 聯絡表單郵件設定

聯絡表單提交後會自動發送通知郵件到聯絡信箱 `26416387.re@gmail.com`（取自 `src/lib/seo/site-config.ts` 的 `email`，單一來源）。

採「**寄、收分離**」架構：

- **寄**：透過現有 **Gmail SMTP**（`falconinformation0113@gmail.com`）送出通知信。
- **收**：通知信預設投遞到 `26416387.re@gmail.com`，與官網公開聯絡信箱一致。

環境變數採廠商中立命名（`SMTP_*`），未來若改付費方案直接用公司信箱寄信，只需改 `.env` 的值、不必動 code。

### 環境變數設定（本機 `.env.local` 與 Vercel 皆需設定）

```env
# 寄件：Gmail SMTP（需在該 Gmail 帳號開兩步驟驗證並產生 16 碼應用程式密碼）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=falconinformation0113@gmail.com
SMTP_PASSWORD=你的Gmail應用程式密碼
# 選填：覆寫表單通知收件人（預設為 siteConfig.email = 26416387.re@gmail.com）
# 測試「寄信」是否通時，可暫時指向你確定收得到的信箱：
# CONTACT_RECIPIENT=falconinformation0113@gmail.com
```

- `SMTP_HOST` / `SMTP_PORT` 未設定時，程式碼預設 `smtp.zoho.com` 與 `465`（SSL）。
- 寄件人 `from` 一律使用 `SMTP_USER`（Gmail / Zoho 都會拒絕非本帳號的寄件地址）。
- 收件人 `to` 預設取 `siteConfig.email`，可用 `CONTACT_RECIPIENT` 覆寫。

### 取得 Gmail 應用程式密碼

1. 前往 [Google 帳戶設定](https://myaccount.google.com/) →「安全性」，確認已開啟「兩步驟驗證」。
2. 在「應用程式密碼」產生一組（名稱如 "Falcon 網站"），複製 16 位密碼貼到 `SMTP_PASSWORD`。

公開聯絡信箱與表單預設收件人已統一為 `26416387.re@gmail.com`；寄件 SMTP 帳號維持原設定。若環境另設 `CONTACT_RECIPIENT`，表單通知仍依該覆寫值寄送。

## 個人履歷 PDF 產生器

路由 `/resume` 是一個**隱藏的個人履歷 PDF 產生器**（不在主導覽、不進 sitemap、`robots: noindex/nofollow`）。開啟頁面後選擇語言（繁中 / 英文），按下載即可取得對應語言的 A4 單頁 PDF。

另備有本機 `output/pdf/蔡翊廉_個人履歷.pdf`，由 `pnpm exec tsx scripts/generate-personal-resume.tsx` 產生。三頁 A4：首頁整合個人資料、簡介、工作經驗、技術與語言能力、學歷；第二、三頁依本人選擇只保留四項精選作品，依序為 GoGoCha AI 通話、TellCraft、翻譯蒟蒻 CLASP、診所預約。每頁兩項，每項包含口語用途介紹、四段自然敘述、技術清單及圖片。依本人最新回饋移除「問題、流程、選擇、例外、驗證」制式標題，將需求、技術理由、失敗處理及測試方法融合為完整句子，以實際操作解釋專業名詞，包括派車通知、同時預約及備份還原。作品頁維持原字級與清楚段落間距，避免自動分頁將同頁兩案拆開。縮圖以 Sharp 暫時壓縮，完成後刪除暫存。

舊履歷來源為本人提供的 `~/Downloads/蔡翊廉.pdf`。保留的資料融合到首頁對應位置：英文姓名、性別與兵役放在姓名區，通訊地址、駕照與交通工具放在聯絡資料區，個人特質放入簡介，英文聽說讀寫程度加入能力區，基隆商工電機科直接加入原學歷列表。依本人 PDF 批註，通訊地址改為本人提供的完整地址（僅存於私人產生腳本與 PDF），基隆商工不顯示就學期間。依本人最新指示刪除獨立補充頁、早期穿搭與串燒作品、Python 早期學習／APCS／進修段落、額外實務與團隊協作段落、全部求職條件。首頁既有簡介、工作經驗、精通與常用技術、最新大學與研究所學歷，以及四項作品與開發月份保留原資料。新版獨立開發經歷本身表達工作狀態與 2022 年至今年資，不另外重複欄位；舊版過期的任職與學歷狀態不覆蓋新版。舊 PDF 保持原檔。

本人另提供 `~/Downloads/IMG_0770.JPG` 作為大頭照，原檔複製至私人輸出目錄 `output/pdf/resume-photo.jpg`。首頁右上角依原比例顯示完整照片。首頁用原有字級調整段落間距，將保留欄位融合為一頁，整份維持三頁；照片不修改、不上傳網站。

四項作品標題下補上「開發起始」：GoGoCha 約 2025/10、TellCraft 約 2026/01、CLASP 約 2026/05、診所預約約 2026/01。同列「製作時間(估計)」依本人更正，將先前粗估區間各加三個月：GoGoCha 原 4-6 個月改為約 7-9 個月、TellCraft 原 3-4 個月改為約 6-7 個月、CLASP 原 2-3 個月改為約 5-6 個月、診所原 1-2 個月改為約 4-5 個月；不是四案統一寫三個月，也非已核實工時。CLASP 的時長與既有起始月份至目前的日曆跨度有落差，已向本人指出，未自行變更起始月份。日期標籤使用半形冒號，避免目前 PDF 字型缺少全形冒號造成漏字。起始月份依本機 Git 初始提交估計；GoGoCha 主專案首筆提交為 2025/10/25，TellCraft 為 2026/01/26，CLASP 為 2026/05/26，診所初始提交為 2026/01/11、業務程式加入為 2026/01/12。GoGoCha 的 Realtime bridge 於 2026/06/24 補進版控，但該次提交說明為記錄既有線上程式，不能當成 AI 模組起始日。履歷僅列整體專案的近似起始月份，並非精確開工、全部功能完成或上線日期；僅寫入本機履歷產生器與 PDF。

履歷沿用可正常顯示的中文句號、頓號及半形符號，不使用目前字型無法正常顯示的全形逗號。輸出後檢查保留欄位、指定刪除段落、精選作品資料與圖片，再渲染確認文字不重疊或溢出。

四項敘述已對照本機原始碼，來源分別為 `~/Desktop/HualienTaxiServer`、`~/Desktop/tellcraft`、`~/Desktop/Translation_gummy` 和 `~/Desktop/project/clinic-booking`，搭配相關原生 App 專案。GoGoCha 說明 Asterisk／AudioSocket 音訊橋接、OpenAI Realtime 插話處理、驗址／建單／查單工具、真人轉接、錄音備援及多因素派單。TellCraft 說明 LangGraph StateGraph 的 Agent 子流程、PostgreSQL checkpoint、BullMQ 長任務、BDD 驗證、Neon 資料庫及現行 Vercel Preview。CLASP 說明原生雙平台、手動跨域轉譯、pgvector／加權 RRF、GPT-5.4 Nano／ICAP 支援與六項協作工具。診所系統說明 LINE LIFF 流程、SQL 列鎖／Serializable、診療時長快照、同日預約唯一索引、Realtime 同步、Playwright 案例及加密備份還原驗證；不將測試案例存在等同於本輪已執行全部測試。

專案內容另核對 GoGoCha 的 `test-decimator.mjs`、地址／服務區域回歸腳本與 `test-claim-race.ts`；TellCraft 的 `graph/main-graph.ts`、`graph/checkpointer.ts`、`preview-auto-fix.ts` 與預覽驗證測試；CLASP 的 `ai/retrieval.ts`、轉譯政策、轉譯 API 與 `qa-rag-retrieval.mjs`；診所的預約交易、Playwright 案例、備份加密及隔離還原驗證腳本。口語改寫沿用已核對的實作與測試範圍，不增加未核實的成效數字或測試通過結果。段落間距為 6pt，中文與英文內部名稱以空格分隔，避免括號接在中文後造成不自然斷字。這次僅編輯私人履歷內容與敘述方式。

首頁頭銜為「數位產品創業者」，獨立開發經歷為 2022 年至今。受僱經歷依本人確認列為嘉生活有限公司 2024/01 至 2026/06、積大企業有限公司 2023/02 至 2023/12。簡介保留本人舊履歷的語氣並補充 Vue／API、框架重整、資料維護及全端開發實務。技術先列「精通」「常用」，再列 AI、行動整合、其他後端、資料自動化與部署。學歷為國立臺北教育大學課程與教學傳播科技研究所在學、元智大學資訊傳播學系畢業；未提供年份不代填。生日為本人確認的 2003/04/18，年齡依台北日期計算，不顯示計算日期。聯絡列不顯示地點。

此次作品精簡只更新本機 PDF，不變更公開網站內容。產生腳本及 PDF 已加入 `.gitignore`；網站履歷及作品集不讀取本機 PDF，生日也不寫入共用履歷資料。先前移除的履歷限定展示案維持非公開，網站現有 33 項作品。「精選作品」使用可正常顯示的標點與短段落；全文件統一在中文句讀處加入空白換行點，包含字型分段末端的標點，避免長句溢出、被圖片遮擋或出現多餘連字號，英文名稱不在行尾斷字。新內容若有超過欄寬的單句，需先拆句。

### 使用方式

1. `pnpm dev` 後開 http://localhost:3000/resume
2. 選擇語言，點「下載」按鈕

### 相關檔案

- `app/(tools)/resume/page.tsx` — 產生器 UI（客戶端元件）
- `app/(tools)/resume/layout.tsx` — 設定 noindex metadata
- `src/components/resume/ResumeDocument.tsx` — `@react-pdf/renderer` 的 PDF 版面定義
- `src/lib/resume-data.ts` — 履歷內容（中英雙語結構化資料）
- `public/fonts/NotoSansTC-{Regular,Bold}.woff` — 繁中字型（來源：`@fontsource/noto-sans-tc` 的 `chinese-traditional` 子集，共 ~2.7MB）

### 修改履歷內容

改 `src/lib/resume-data.ts` 即可。每個欄位都是 `{ zh, en }` 物件，中英文內容各寫一版。新增工作經歷、專案、學歷都直接往 array 裡推。

### 放個人照片

把照片命名為 `resume-photo.jpg` 放到 `public/` 資料夾，然後把 `src/lib/resume-data.ts` 裡的 `photoPath` 從 `undefined` 改成 `'/resume-photo.jpg'`。建議正方形 512×512 以上。

### 字型支援範圍

- 繁體中文 ✅
- 英文、數字、常見符號 ✅
- 簡體中文 ❌（若需要請加裝 `@fontsource/noto-sans-sc` 並額外 `Font.register`）
- 日文 / 韓文 ❌

### 技術細節

- `@react-pdf/renderer` 純前端產 PDF，不需要 serverless / Puppeteer runtime
- 字型透過 `Font.register()` 從 `/fonts/*.woff` 載入；React-PDF 支援 TTF/WOFF/WOFF2
- 錯誤會在頁面上完整顯示（包含 stack trace），符合專案 CLAUDE.md 規範

## 電子名片（Digital Business Card）

路由 `/card` 是一張**正式的個人電子名片**（蔡翊廉 · 隼訊數位行銷），採現代數位名片標準三件套：**可分享連結 + vCard 聯絡檔 + QR Code**，另可下載三種規格的名片圖。

### 使用方式

1. `pnpm dev` 後開 http://localhost:3000/card
2. 對方可：點「儲存聯絡人」下載 `.vcf` 匯入通訊錄、掃 QR 開啟此名片、加 LINE、下載名片圖

### 站內任意頁面嵌入（可重用元件）

名片本體是自包含的 React 元件，站內任何頁面直接 import 即可放，**不需** iframe、不需動安全標頭：

```tsx
import { BusinessCard } from '@/components/card/BusinessCard'

export default function SomePage() {
  return <BusinessCard className="my-8" />
}
```

> 註：因 `next.config.ts` 設有 `X-Frame-Options: SAMEORIGIN`，此名片**不支援被外部網站 iframe 嵌入**；外部分享請用 `/card` 連結或下載的名片圖。

### 名片圖下載網址

| 規格 | 網址 | 尺寸 | 用途 |
|------|------|------|------|
| 直式 | `/api/card-image/portrait` | 1080×1350 | IG／LINE 分享 |
| 橫式 | `/api/card-image/landscape` | 1200×630 | 社群預覽 |
| 印刷 | `/api/card-image/print` | 1063×638 | 90×54mm @300DPI 名片印刷 |

分享 `/card` 連結時，社群預覽圖由 `app/(tools)/card/opengraph-image.tsx` 自動產生（同橫式版面）。

### 相關檔案

- `app/(tools)/card/page.tsx` — `/card` 分享頁（`PageShell` 包名片）
- `src/components/card/BusinessCard.tsx` — 可重用名片元件（QR、vCard 下載、行動按鈕）
- `src/lib/card-data.ts` — 名片資料**單一來源**，從 `resume-data.ts`（個人）+ `seo/site-config.ts`（公司）組裝
- `src/lib/vcard.ts` — vCard 4.0（RFC 6350）`.vcf` 產生器（純函式）
- `src/lib/card-og.tsx` — 三種名片圖共用版面（next/og）
- `src/lib/og-fonts.ts` — 名片圖中文字體載入器
- `app/(tools)/card/opengraph-image.tsx`、`app/api/card-image/[format]/route.tsx` — 產圖路由

### 修改名片內容

聯絡資訊改 `src/lib/resume-data.ts`（個人）與 `src/lib/seo/site-config.ts`（公司）即同步，不需改名片程式碼。個人 LINE ID（`personalLineId` / `personalLineUrl`）直接寫在 `src/lib/card-data.ts`，因為它不屬於履歷或公司設定。「加 LINE」按鈕指向個人 LINE；公司 LINE 官方帳號仍在全站頁尾。

### 技術細節

- QR 用 `qrcode.react`（純 inline SVG，零外部請求，符合 CSP）
- 產圖路由用 **Node.js runtime**（非 edge），以 `fs` 讀取 `@fontsource/noto-sans-tc` 的 **`.woff`** 字體傳入 `next/og` — satori 支援 woff/ttf/otf 但**不支援 woff2**，且預設字體不含中文，未載入會變豆腐□
- vCard 以 `Blob` + `<a download>` 觸發下載；產生失敗時於前端完整顯示錯誤，符合 CLAUDE.md 規範

## 企業 AI 電話內容集群

### 2026-09-07 詢盤轉換修正

- 沿用 21 篇文章及既有 URL，八篇 AI 電話文章導向方案與流程 Demo 需求，不新增近義內容。GoGoCha 公開證據與可客製能力繼續分開標示；送出需求不等於完成預約，POC 範圍與報價另行確認。
- 既有 `ServiceCtaLink` 使用 `service_cta_click`＋`service=ai_voice`＋固定 `placement`，可選 `action=view_service|request_demo`（預設 `request_demo`）。同頁 CTA 透過 `falcon:service-interest` 同步服務白名單，跨頁由網址初始化；重複點擊不清除已填文字。
- 聯絡區 `contact_click` 可帶白名單服務，Footer 不強制歸因。表單只接受 HTTP 成功＋JSON 物件＋`CONTACT_SENT`，才清空欄位並送 `generate_lead`；此事件只代表成功送出，不代表合格商機。失敗保留輸入、完整顯示錯誤；分析只送白名單錯誤碼，不送姓名、Email、電話、需求、回應或堆疊。
- 本地 dataLayer 不代表 GA4 已收到。匯出僅留 Downloads，不進 Git；第 28／56／90 天比較文章至方案、Demo CTA、有效表單與人工確認的合格詢盤，低樣本不推算改善百分比。已完成本機測試不表示已部署或已 push。
- 首頁與 AI 電話服務頁的實質文案更新日期為 2026-09-07；文章／案例僅修改共用 CTA，不批次刷新文章日期。首頁靜態展示正名為「流程示意」，不加入互動模擬器或大型媒體。
- 轉換回歸：production server 啟動後執行 `pnpm check:conversion http://127.0.0.1:3000`。沿用 `puppeteer-core` 與本機 Chrome（可指定 `CHROME_PATH`），只允許 loopback 網域、攔截全部聯絡 API 與外部網路，不實際寄信或污染 GA4；截圖寫入系統暫存目錄。涵蓋八篇文章 CTA、服務預選／手動選擇、失敗保留、成功防重複、分析白名單及桌面／手機／鍵盤。
- 本機驗收：`lint:content`、production build、`check:seo` 已通過（48 個索引 URL、6 個 noindex、3 條單次 301）。轉換回歸涵蓋 15 種失敗、成功碼與同輪重複提交防護；Chrome 使用 Locator 等候連結位置穩定，並保存表單失敗／成功、390px／1440px 截圖。錯誤文字保留換行，長字串可換行，避免手機溢出。
- 帳號端待補：2026-09-07 已在 Falcon GSC 設定 2026-06-08 至 2026-09-05 的 90 天報表，但官方 CSV 匯出被 Chrome 以 `ERR_BLOCKED_BY_CLIENT` 封鎖，未成功下載；目前登入的 GA4 資源搜尋不到 Falcon，且 Google SEO API 憑證未設定。未取得完整基準、不使用其他網站數據、不將缺資料當作零詢盤。需在可匯出的瀏覽器操作 GSC，並切換具有 Falcon 權限的 GA4 帳號；部署後再驗證 DebugView 與固定事件參數。
- 方法參考：[Google AI 搜尋指引](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)、[GA4 generate_lead 事件](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead)。Google SEO 技能在未設定 API 時改用已登入的官方報表，不新增憑證或擴大權限。
- 最終驗收結果：`pnpm lint:content`、`pnpm build`、production server 的 `pnpm check:seo http://127.0.0.1:3000` 與 `pnpm check:conversion http://127.0.0.1:3000` 全部通過；所有測試表單均被攔截，沒有實際寄信或傳送 GA4 測試事件。正式站 DebugView 與基準原始匯出仍待上述帳號／瀏覽器問題解決。

- Blog 共 21 篇正式文章，其中 8 篇組成企業 AI 電話決策集群：原理、POC 驗收、延遲與插話、費用、IVR／真人比較、PBX／CRM 串接、錄音個資，以及人工轉接。
- AI 電話文章使用 `relatedLinks` 建立文章間內鏈，並固定回連 `/services/ai-voice-agent` 與 GoGoCha 公開案例；服務頁、Blog 閱讀路徑與首頁精選提供主要入口。
- 法規與供應商技術內容只引用可見的官方來源；未公開的 GoGoCha SLA、辨識率、PBX／客服席位與營運成果不得寫成已驗證能力。
- 文章不設定通用 POC 及格數字，門檻必須依任務風險、企業基準與可補救性決定。
- 驗收順序：`pnpm lint:content`、`pnpm build`，啟動 production server 後執行 `pnpm check:seo http://127.0.0.1:3000`。

## 部署

本專案支援 Vercel 部署：

```bash
# 建置生產版本
pnpm build
```

**重要**：部署時需在 Vercel 後台設定環境變數 `SMTP_HOST`、`SMTP_PORT`、`SMTP_USER`、`SMTP_PASSWORD`（選填 `CONTACT_RECIPIENT`）。

**注意**：UI 組件使用 shadcn/ui，import 語句不應包含版本號（如 `@radix-ui/react-dialog` 而非 `@radix-ui/react-dialog@1.1.6`）。

## 官網九語系

繁中沿用原網址；英文 `/en`、日文 `/ja`、韓文 `/ko`、簡中 `/zh-hans`、西班牙文 `/es`、法文 `/fr`、德文 `/de`、葡萄牙文 `/pt` 使用相同 slug。葡萄牙文以巴西用語為基準；品牌、客戶專名、台灣案例與法規背景維持原意。這是第一版市場組合，後續以各語言的有效詢價決定投入，不宣稱涵蓋大部分潛在客戶。

### 路由與使用體驗

- 官網使用 `[locale]` 靜態產生，繁中原網址由 `next.config.ts` 內部 rewrite；直接存取 `/zh-tw/...` 單次 301 至原網址。三條舊網址的九語版本直接 301 至最終對應頁。
- 履歷、名片與下載工具使用獨立根布局。API、圖片、靜態資源及工具網址不加語言前綴。未知語言與不存在的 slug 回傳 404。
- `src/lib/i18n/config.ts` 統一產生公開網址；導覽、麵包屑、相關文章、詢價 CTA 與切換器保留目前語言。切換語言保留 query／hash，未送出表單會先提醒可能遺失輸入。
- 首次造訪根據 `navigator.languages` 提供可關閉的建議，不自動跳轉；明確選擇或關閉會記錄於 localStorage，儲存不可用仍能手動切換。桌面及手機原生選單支援鍵盤與 Escape。
- 外語使用各語言系統字體後備，韓文保留單字斷行，歐語長字可換行；桌面導覽使用 xl 分界。金額透過原生 Intl 明確標示 TWD，不換匯；首頁文章日期使用 Intl，其餘既有 ISO 日期保留。

### 翻譯與維護

`src/lib/i18n/messages/{locale}/{category}.json` 依 common、home、pages、services、pricing、articles、cases、portfolio、local 分類，以正規化的繁中原文為鍵。九語字典合計 30,915 筆文案（含繁中來源；新增八語共 27,480 筆），包含完整內容、FAQ、表格、圖片替代文字與無障礙標籤；重要互動短句由 `overrides.ts`、`language-ui.ts`、`contact-messages.ts` 管理。

價格數字、聯絡資訊、識別碼、案例證據及日期沿用既有內容資料；只翻譯描述。新增或修改原文時，同步補齊八語字典並執行內容檢查；缺少必要翻譯、數字不一致、插值遺失或原文未抽出會使檢查失敗，不以繁中回填外語頁。

伺服器頁面與 metadata 先 `await initLocale(params.locale)`，再呼叫預設繁中的內容讀取函式並傳入 locale（非繁中讀取依賴已初始化的當次請求字典）；語言狀態使用 React request cache 隔離。Route Handler 明確傳入 locale／messages。客戶端只取得共用介面字典，作品集另接收該頁字典，長篇文章字典留在伺服器。

初稿以本機離線工具輔助，並逐語檢查數字、技術術語、品牌、案例限制及可疑段落；網站執行時不依賴模型、翻譯 API、翻譯平台或資料庫。翻譯未經母語者校稿。

### 海外詢價與 SEO

- 海外聯絡區優先 Email、表單與 +886 電話，說明接受九語文字詢價、可用翻譯協助溝通，不承諾九語電話客服。
- `/api/contact` 接受選填的白名單 locale，舊請求預設繁中。通知信維持繁中並附訪客語言及原始訊息；既有回應代碼不變。前端顯示當頁語言與完整公開診斷，敏感設定、憑證與 Bearer 權杖先遮蔽。
- 保留失敗輸入、成功確認、防重複提交與服務預選；原生必填／Email 驗證也使用當頁語言。分析事件加入白名單 locale，繼續排除個資。
- canonical 指向各版本自身，雙向 hreflang 列出九語完整版本，x-default 指向繁中。Metadata、Open Graph、Twitter、JSON-LD 與 sitemap 共用網址規則；外語社群圖使用純品牌圖，既有 noindex 與地區品質門檻不變。
- 九語 llms.txt／llms-full.txt 從相同服務、文章、案例、價格與地區來源產生，沒有另存維護副本。已翻譯正文直接輸出，來源價格單位另外翻譯，避免重複處理或混入中文單位。
- 路由與索引規則參考 [Next.js 國際化指南](https://nextjs.org/docs/app/guides/internationalization) 與 [Google 多語版本指南](https://developers.google.com/search/docs/specialty/international/localized-versions)。

### 本機驗收

```bash
pnpm lint:content
pnpm exec tsc --noEmit --incremental false
pnpm build
pnpm start --hostname 127.0.0.1 --port 3007
# 另開終端
pnpm check:seo http://127.0.0.1:3007
pnpm check:conversion http://127.0.0.1:3007
```

內容檢查涵蓋字典與實際元件／資料來源、必要術語、數值、幣別、插值、網址、瀏覽器語言匹配，另有 17 個 API 驗證及 18 個九語寄信成功／失敗替身測試。SEO 檢查所有語言頁面的狀態、canonical、hreflang、sitemap、JSON-LD、內鏈、社群圖、404、llms 摘要與單次轉址。瀏覽器檢查九語表單、服務預選、語言切換／建議／停用儲存，以及九種主要頁型的手機／桌面溢出與導覽鍵盤操作。

驗收只允許本機表單；SMTP 以記憶體替身處理，Chrome 攔截聯絡及第三方請求，不產生真實郵件或分析數據。需本機 Chrome，可使用 `CHROME_PATH` 指定，不另安裝瀏覽器套件。截圖寫入系統暫存目錄，路徑由檢查腳本輸出。Chrome 關閉快取以確認新回應狀態；不存在頁面由伺服器回傳 404，Next.js 錯誤邊界完成九語顯示，另以瀏覽器驗證。

2026-09-08 本機驗收全部通過：

- `pnpm lint:content`：30,915 筆九語字典、17 個 API 邊界驗證與 18 個九語成功／失敗隔離測試。
- `pnpm exec tsc --noEmit --incremental false` 與 `pnpm build`：型別與正式建置通過，共產生 498 個靜態頁面／端點。
- `pnpm check:seo http://127.0.0.1:3007`：432 個索引頁、38 個 noindex 頁（含兩個工具頁），以及 sitemap、雙向 hreflang、JSON-LD、摘要與轉址全部通過。
- `pnpm check:conversion http://127.0.0.1:3007`：8 篇文章 CTA、15 種表單失敗、成功防重複、事件隱私、九語詢價／404／語言切換與建議、停用儲存，以及九語九種主要頁型在 1440px／390px 的排版與鍵盤檢查通過；另檢視各語言手機／桌面截圖，無缺字或橫向溢出。
- `git diff --check`：通過。瀏覽器截圖保留於 `/var/folders/_2/0cgnyjy96gq7clyqpvzrx0vm0000gn/T/falcon-conversion-svnJPn`；這是本次本機暫存產物，重跑會使用新目錄。

本次沒有新增套件、修改資料庫、正式部署或調整 GA4 帳號設定。正式環境的搜尋收錄與實際詢價成效仍需上線後觀察。

## 全站淺色視覺與專屬圖片（2026-10-06）

- 已實作：保留原有文字、價格、內鏈與案例證據，官網主要頁面改為白／霧灰底、深色文字與淡藍青／薄荷色 3D 插畫。
- 47 張專屬素材：首頁 4、服務 6、關於 1、價格 5、文章 22、城市 6、比較 3；九語共用無文字插畫。案例沿用真實截圖。
- 素材使用內建 imagegen，存入 `public/visuals/`，以既有 sharp 壓縮；生成提示詞、清單與驗收紀錄均記錄於本 README。
- 修改前來源已保存於本機 `tmp/visual-refresh-20261006/before/`，供內容保留驗收；既有工作區修改保留，履歷、名片、法律頁不改版，不操作資料庫、不部署。

### 圖片生成提示詞與清單

依 2026-10-06 補充要求改為真正透明背景的去背圖，直接融入 section；只保留與文字主題相關的物件，不使用風景、盆栽或無關裝飾。每張完整提示詞由共用風格加上以下主題組成。

```text
Asset: premium 3D cutout illustration for a light corporate website section, landscape 16:9 with a truly transparent alpha background. Only the explicitly listed topic-related objects, arranged as a single clear, compact composition with depth, entirely inside the central 85% for safe placement. Pearl-white matte ceramic, frosted aqua glass and sea-glass mint, restrained brushed metal, soft studio lighting and subtle contact shadows only beneath the objects. No room, no backdrop, no floor, no tabletop, no decorative plinth, no plants, no scenery, no landscape photographs, no random props, no floating decorative blobs, no people, no mascot, no logo, no watermark. No text, no letters, no numerals; screens contain only blank geometric interface shapes and meaningful simple pictograms. Remove all environmental background from the reference and rebuild only these topic-relevant objects. This will be placed directly beside real HTML text, not inside a framed image card.
```

| 路徑 | 素材 | 主題／替代文字依據 | 主題提示詞  生成原檔 |
|---|---|---|---|---|
| / | `home-hero-cutout.webp` | 台灣企業網站與 AI 系統開發 | An open laptop displaying modular website layout blocks, a matching mobile screen, and a small automation flow of three connected task tiles; a magnifying lens inspects one website document. Focus on website building, AI workflow and searchable content. Three-quarter angled composition.  `exec-87cab92f-85fc-407e-92ab-c2ff8113d035.png` |
| /#build | `home-build-cutout.webp` | 網站與 AI 開發 | A laptop and mobile screen with matching blank layout blocks connect to a compact database stack and a manual approval switch. Show maintainable website and business-system development. Low oblique composition.  `exec-0ac1b21b-d9ce-49d0-b928-0a8fdcd9d8bf.png` |
| /#grow | `home-grow-cutout.webp` | SEO／GEO 搜尋成長 | A magnifying lens examines connected website document cards; one document links to a short answer panel and a final inquiry envelope. Show content discovery leading to a business inquiry, no growth statistics.  `exec-00027a9e-08fd-44df-8c3c-b75d7308b158.png` |
| /#ai-voice | `home-ai-voice-cutout.webp` | 企業 AI 語音客服 | A business telephone handset with a speech waveform connects to an appointment-calendar tile, task inbox and a manual handoff headset. Show a purposeful telephone service flow.  `exec-d7f5ce79-a336-4c94-a1df-36a7a893c6be.png` |
| /services | `services-index-cutout.webp` | 企業網站、AI 開發與搜尋成長服務 | Five connected service objects, no shelves: responsive browser and mobile pair, automation cog, business telephone handset, indexing lens, source-linked answer card. Balanced arc, each service clearly identifiable.  `exec-da31ea82-dd04-4721-8312-c29c38f6bd85.png` |
| /about | `about-cutout.webp` | 關於隼訊與負責人蔡翊廉 | Four connected software-delivery stages: blank requirements diagram, laptop prototype, verification checklist with check pictograms and a handover folder containing a key and code-bracket pictogram. Show discovery, implementation, acceptance and ownership transfer. No physical consumer product, calipers or bottle.  `exec-7c3717d3-aecd-41dc-87f2-98f119385080.png` |
| /pricing | `pricing-index-cutout.webp` | 透明定價 | A blank estimate sheet, balanced scale and three differently sized project-scope modules containing website, automation and search pictograms. Show scope determining budgets. No currency symbols, numbers or calculator.  `exec-a9e2b6e6-e573-4cb5-bb0f-b6a431f1af81.png` |
| /blog | `blog-index-cutout.webp` | 部落格 | An open reference book connects to three topic cards: responsive website, search lens, and telephone waveform. Show practical knowledge for business website and AI decisions. No generic reading-desk props.  `exec-74e459c0-67fe-4f59-b29a-15b71ead7215.png` |
| /services/web-development | `services-web-development-cutout.webp` | 網站建置與軟體開發 | Desktop display, tablet and mobile screen at staggered angles with matching blank website layout components; three fitted reusable component tiles. Show responsive website development.  `exec-6df274a1-57ab-41be-9d76-589d26ec8918.png` |
| /services/ai-tools | `services-ai-tools-cutout.webp` | AI 工具開發 | Incoming document cards enter a compact automation module and emerge into an organized task tray; a side route leads to a manual approval switch. Show document processing and safe workflow automation.  `exec-f5b1d0e3-3801-49c4-a8e8-fdd0c4618c4d.png` |
| /services/ai-voice-agent | `services-ai-voice-agent-cutout.webp` | 企業 AI 語音客服與電話自動化系統 | A telephone handset and speech waveform connect to appointment, customer-record and work-order cards; a clear fallback branch reaches a human-support headset.  `exec-c5a9a8f0-adeb-44ef-83b8-d19c91e0c4a4.png` |
| /services/seo | `services-seo-cutout.webp` | SEO 搜尋引擎優化 | A magnifying lens inspects a small group of connected website documents; an indexing path and maintenance tool beneath the document foundation show crawlability and technical SEO. No robot or vehicle.  `exec-19835f24-eec0-4093-ac29-8f09a33ce09e.png` |
| /services/geo | `services-geo-cutout.webp` | GEO AI 搜尋優化 | A concise answer panel connects to three original source documents through clear citation threads; a lens inspects one source-to-answer connection.  `exec-edb6a5a9-ee00-482d-9636-9a6be1851c95.png` |
| /pricing/web-development | `pricing-web-development-cutout.webp` | 網站與系統開發費用 | A modular website prototype, CMS drawer, hosting block and maintenance wrench arranged around a blank project estimate folder. Show the concrete components that change a development quote.  `exec-06b2d870-4848-4fb4-b1f2-d57a715d0463.png` |
| /pricing/ai-development | `pricing-ai-development-cutout.webp` | AI 工具開發費用 | A modular automation processor, connector pieces, knowledge-document stack and manual approval lever beside a blank estimate sheet. Distinguish integration and acceptance effort.  `exec-a73d237c-7070-45fc-954a-74e711e3b19e.png` |
| /pricing/seo | `pricing-seo-cutout.webp` | SEO 搜尋成長費用 | A recurring work tray holds an indexing lens, repair wrench, content document and blank report panel; four unmarked calendar tiles communicate ongoing monthly work.  `exec-c78bfb06-f621-4446-b871-29204b355a5d.png` |
| /pricing/geo | `pricing-geo-cutout.webp` | SEO／GEO 搜尋成長費用 | A balanced scale weighs linked source-document work against answer-observation panels, with a blank budget sheet. Show evidence and measurement effort, no invented performance.  `exec-96dd3e33-544a-4af8-bab1-95dc9e2f7fb2.png` |
| /blog/ai-voice-customer-service-guide | `blog-ai-voice-customer-service-guide-cutout.webp` | AI 語音客服是什麼？企業導入架構與適用情境 | Five connected physical modules: telephone handset, speech waveform, dialogue cards, decision junction and enterprise task tray. One explicit branch ends at a human-support headset.  `exec-9b3c00ac-c9c5-44b2-9da6-d05f8c7c9899.png` |
| /blog/ai-voice-customer-service-cost | `blog-ai-voice-customer-service-cost-cutout.webp` | AI 語音客服費用怎麼算？ | A telephone handset next to a balanced scale weighing infrastructure modules and usage tokens, with a blank budget folder. No calculator, prices or numbers.  `exec-752ed5da-374d-4add-b1a4-5789239710eb.png` |
| /blog/ai-voice-vs-ivr-human-agent | `blog-ai-voice-vs-ivr-human-agent-cutout.webp` | AI 語音客服、傳統 IVR 與真人客服比較 | Three equal connected options: AI waveform with task connector, an IVR telephone with entirely blank tactile keys and branching menu rails, and a human-agent headset. No digits on any telephone keys.  `exec-7eadb5c5-1fb9-4271-bfc4-3f7554161713.png` |
| /blog/ai-phone-pbx-crm-integration | `blog-ai-phone-pbx-crm-integration-cutout.webp` | AI 電話如何串接 PBX、CRM、工單與派單系統？ | A small business telephone switchboard with blank keys connects by tidy cables to customer-record drawers, a work-order inbox and a dispatch-route card with abstract pins. A spare fallback connector is visible.  `exec-b65e7240-2657-4f37-8d31-03033f7a9392.png` |
| /blog/ai-voice-agent-poc-acceptance-checklist | `blog-ai-voice-agent-poc-acceptance-checklist-cutout.webp` | AI 語音客服 POC 怎麼驗收？測試情境、指標與上線門檻 | A telephone handset connects to a voice waveform and a verification board with raised checkpoints; mint checks mark passed scenarios, and one open exception path remains. A lens inspects the waveform-to-test junction.  `exec-ee8136f5-b0af-4164-932b-18e5811c3aea.png` |
| /blog/ai-voice-latency-barge-in-turn-taking | `blog-ai-voice-latency-barge-in-turn-taking-cutout.webp` | AI 語音客服延遲與打斷怎麼測？VAD、Barge-in 與輪替設計 | Two speech waveforms approach a turn-taking gate, with a small interruption branch and an unmarked mechanical timer, beside a telephone handset. Show latency and interruption testing.  `exec-6898d866-6f6c-4a77-96ec-8cda29a6da35.png` |
| /blog/ai-call-recording-privacy-security | `blog-ai-call-recording-privacy-security-cutout.webp` | AI 電話錄音與個資怎麼處理？告知、保存、權限與稽核清單 | Audio-waveform record cards are protected inside a locked archive drawer; three role-access keys and a blank audit ledger accompany it. One expired recording card moves toward a deletion chute.  `exec-7fefea98-fa14-4202-bfca-4e5b6f2f1575.png` |
| /blog/ai-voice-human-handoff-escalation | `blog-ai-voice-human-handoff-escalation-cutout.webp` | AI 語音客服怎麼轉真人？觸發條件、上下文交接與失敗降級 | A telephone waveform path reaches an exception gate, then curves toward a support headset while carrying context-document cards. A separate fallback branch leads to a task inbox.  `exec-02dd7fda-d460-4746-b1a7-9e9dc8de4b41.png` |
| /blog/geo-complete-guide-2026 | `blog-geo-complete-guide-2026-cutout.webp` | GEO 生成式引擎優化指南 | An open reference book supports a short answer panel linked to three source documents, with a magnifying lens inspecting citations. No scenic photos in any document.  `exec-9750d39d-fead-418e-8c74-2ef28e6cc387.png` |
| /blog/schema-org-tutorial | `blog-schema-org-tutorial-cutout.webp` | Schema.org 結構化資料教學｜JSON-LD、驗證與常見錯誤 | Nested translucent data-document frames fit neatly into a web-page card; aligned key-value slots and a validation lens with check pictogram communicate structured data. No actual code text.  `exec-f8df218b-6ee7-4700-bb94-7dc35e13d6cd.png` |
| /blog/perplexity-aeo-overview | `blog-perplexity-aeo-overview-cutout.webp` | Perplexity 引用邏輯與 AEO 實作 | A frosted answer panel is linked to four distinct source cards by citation threads; a large lens clearly selects one cited source. Asymmetric arrangement, no brand marks.  `exec-5f1780f1-4168-4c95-bb88-fca22649c379.png` |
| /blog/google-ai-overview-basics | `blog-google-ai-overview-basics-cutout.webp` | Google AI Overview 與 SEO 的關係 | A browser-shaped frame shows a short answer card above three ordinary search-result cards; visible links connect both to the same original source documents.  `exec-3104c6bd-df3a-43aa-80b6-3e4a8cd030ee.png` |
| /blog/website-pricing-2026 | `blog-website-pricing-2026-cutout.webp` | 2026 台灣網站建置費用｜行情區間、隱藏成本與報價比較 | A website prototype beside a blank estimate folder; separate hosting, content and maintenance modules reveal project-cost components. No currency symbols or decorative tools unrelated to maintenance.  `exec-534437e5-6be8-427a-8c08-fff7979dd4e3.png` |
| /blog/common-seo-mistakes | `blog-common-seo-mistakes-cutout.webp` | 常見技術 SEO 問題盤點 | A website document has a broken indexing connector, two duplicated page cards and an unmarked slow-loading timer; a repair wrench and lens identify these concrete technical faults.  `exec-1c113fdb-79d9-4cbc-9827-99e782102a97.png` |
| /blog/ai-customer-service-cost | `blog-ai-customer-service-cost-cutout.webp` | AI 客服自建 vs SaaS 成本比較 | Two balanced customer-service systems: custom modular processing blocks and a compact cloud-subscription module, both connected to the same support headset and blank budget ledger.  `exec-a1977732-f5f5-4ea8-bf3a-8aa693a5d6b0.png` |
| /blog/how-we-define-good-seo-content | `blog-how-we-define-good-seo-content-cutout.webp` | SEO 內容品質怎麼判斷？E-E-A-T、證據與驗收標準 | A reference document with source tabs is checked by a lens and validation stamp; a blank author-identity card and cited evidence stack show accountability and evidence.  `exec-67ba2947-ca1b-4908-bd14-2c0e3e0e4a63.png` |
| /blog/llms-txt-implementation-guide | `blog-llms-txt-implementation-guide-cutout.webp` | llms.txt 是什麼？格式、實作與效果評估 | One lightweight plain-text index card sits beside a full website-document library and a crawler-access gate. Its thin connecting path clearly shows a supplementary index, not a magic ranking tool.  `exec-4c66b0a6-e774-4ab5-bab7-287826a289a7.png` |
| /blog/chatgpt-search-citation-observations | `blog-chatgpt-search-citation-observations-cutout.webp` | ChatGPT 搜尋的引用來源：觀察方法與限制 | A short AI answer card connects to two cited website documents; an observation lens and dated but completely unmarked sample tiles show citation tracking rather than guaranteed inclusion.  `exec-3807c5b4-b517-4f8f-b3a6-4d513e0649a2.png` |
| /blog/geo-measurement-guide | `blog-geo-measurement-guide-cutout.webp` | GEO 成效怎麼衡量？Google AI、Bing AI 與 GA4 量測實作 | A measurement clipboard compares repeated answer-observation cards, source-citation markers and an inquiry envelope; a small unmarked sampling timer communicates repeatable observation. No rising charts or invented statistics.  `exec-e7406b48-f0d8-4090-ac58-eedd230428a1.png` |
| /blog/ai-crawler-robots-guide | `blog-ai-crawler-robots-guide-cutout.webp` | AI 爬蟲清單與 robots.txt 決策 | A website document library with two access gates, one open and one closed; small crawler-path rails and a shield show permission boundaries. No actual robot or vehicle.  `exec-245b1367-7d06-4d42-a307-01acc44f1e92.png` |
| /blog/seo-vendor-evaluation-guide | `blog-seo-vendor-evaluation-guide-cutout.webp` | SEO 公司怎麼選？合約、報表與驗收檢查清單 | Three blank vendor-proposal folders are evaluated using an evidence lens, ownership key and acceptance checklist. Equal scale, no brand logos or rankings.  `exec-f9d33f21-da4b-4bec-b27b-510ba4c8f8a7.png` |
| /local/taoyuan-seo | `local-taoyuan-seo-cutout.webp` | 桃園 SEO 公司 | A small abstract industrial-business storefront cluster sits beside an indexing lens and linked business webpage cards. Service dominates the composition; city reference is only a compact airport-canopy silhouette, not a scenic city image.  `exec-e50408ff-b335-45ec-9ab3-9879c77a8b12.png` |
| /local/taoyuan-web-design | `local-taoyuan-web-design-cutout.webp` | 桃園網頁設計 | A responsive desktop and mobile website pair connect to a small local manufacturer storefront and product-catalog cards. A subtle compact airport-canopy silhouette suggests Taoyuan business context.  `exec-19b2fcfc-4fb8-4da3-aef5-4075c751d01f.png` |
| /local/taipei-digital-marketing | `local-taipei-digital-marketing-cutout.webp` | 台北數位行銷 | A website card, search-content documents and inquiry envelope connect as a marketing flow beside a small abstract urban shop cluster with one slender tower silhouette. Marketing service is the main subject.  `exec-c8b2eaeb-17cd-4efd-93ab-4875180d6495.png` |
| /local/taipei-seo | `local-taipei-seo-cutout.webp` | 台北 SEO 公司 | An indexing lens inspects connected local-business website documents beside a compact abstract urban tower cluster. Focus on content and crawlability, no geographic map or office marker.  `exec-3e66cefb-2805-4282-86e2-dced1c8bda7e.png` |
| /local/xinbei-seo | `local-xinbei-seo-cutout.webp` | 新北 SEO 公司 | A search lens and linked business webpage cards connect two small storefronts across a compact bridge-shaped connector. Local business search is primary; no scenic city backdrop.  `exec-92234ec8-e706-40f0-8a5f-c58443e24fd7.png` |
| /local/hsinchu-web-design | `local-hsinchu-web-design-cutout.webp` | 新竹網頁設計 | Desktop and mobile website prototypes with catalog and inquiry modules connect to a small abstract technology-workshop building. Focus on responsive website design for technology businesses.  `exec-c8306849-9311-4c17-b2f6-b8cb0ec253c7.png` |
| /compare/seo-vs-geo-vs-aeo | `compare-seo-vs-geo-vs-aeo-cutout.webp` | SEO、GEO、AEO 的共同基礎與差別 | Three connected discovery objects share one document foundation: search lens, cited answer panel, and question-response card represented by speech pictograms. Show shared content and differing output.  `exec-f48c120c-1817-4e51-a032-057ab8e3d9e9.png` |
| /compare/ai-voice-vs-chatbot | `compare-ai-voice-vs-chatbot-cutout.webp` | AI 語音客服與文字客服機器人的差別 | Two equal interfaces: telephone handset with voice waveform and a mobile screen with blank chat bubbles. Both connect to the same task tray and support-handoff headset.  `exec-e578c0b4-23ef-4496-af55-6648d5c2ae2d.png` |
| /compare/wordpress-vs-custom-website | `compare-wordpress-vs-custom-website-cutout.webp` | WordPress 套版與客製化網站的差別 | Two equal website-building prototypes: fitted reusable template tiles and individually shaped custom interface modules, with a shared CMS drawer and maintenance wrench. No brand logos or superiority claims.  `exec-30cbd4cd-071b-4236-abe3-599e574abc79.png` |



- 透明素材使用獨立 `*-cutout.webp` 檔名，避免舊試稿的圖片最佳化快取；網站主體由圖片本身的 alpha 與 section 底色直接融合。



- 首頁以去背主體取代舊全幅裝飾背景（原始檔保留），避免雙重圖像與額外下載；手機交付區先讀文字再顯示對應圖。內容檢查與 TypeScript 已通過。



- 手機合作路徑卡片調整為文字／連結在前、去背圖在後；沒有新增收合或隱藏正文。



- 語意修稿：services-seo、services-geo、pricing-web-development、blog-ai-voice-vs-ivr-human-agent、blog-geo-complete-guide-2026、blog-schema-org-tutorial、blog-website-pricing-2026、blog-common-seo-mistakes；去除非電話主題的耳機、卡片風景與生成的人像。

| 素材 | 修稿指令 |
|---|---|
| services-seo | Remove all scenic pictures and leaf pictures from the document cards; replace them with abstract gray content lines and small chain-link pictograms. Remove the large display table and decorative arch; retain only connected website documents, indexing paths, a magnifying lens and a small maintenance wrench in a compact cutout. |
| services-geo | Replace every mountain, leaf and building picture on source documents with abstract gray content lines and small chain-link pictograms. Keep the original source-to-answer connections and inspection lens. No other objects. |
| pricing-web-development | Remove the calculator completely. Replace all scenic photos in page modules with abstract gray content blocks. Retain website modules, CMS drawer, hosting blocks, maintenance wrench and blank estimate clipboard. No phone or headset. |
| blog-ai-voice-vs-ivr-human-agent | Remove the entire woman bust and circular portrait frame from the right station. Replace it with one standalone professional support headset at the same scale. Keep the AI waveform and IVR telephone stations, all phone keys completely blank. |
| blog-geo-complete-guide-2026 | Remove the headset completely. Retain the reference book, source cards, answer panel and citation-inspection lens. Remove rising bar charts from sources; use neutral content-line blocks and chain-link pictograms. |
| blog-schema-org-tutorial | Remove the headset completely. Remove the rising bar-chart tile. Retain structured nested document frames, key-value slots, browser frame, branching data pictogram and validation lens. No phone-related objects. |
| blog-website-pricing-2026 | Remove the headset completely. Keep the website laptop, scope folder, hosting blocks, content cards and maintenance tools. Replace laptop scenic placeholders with plain modular interface rectangles. |
| blog-common-seo-mistakes | Remove the headset completely. Keep the duplicate page cards, broken chain, slow-loading timer, website frame, lens and repair wrench. No unrelated objects. |

- 最終語意修正：blog-ai-customer-service-cost：Refine this exact transparent cutout to illustrate the true costs of AI customer service: a custom modular system and a managed cloud service with a headset and a plain blank cost ledger. Remove the entire telephone object in the lower right. No phone keypad, no numbers, no letters, no text anywhere. Do not add new unrelated objects. Preserve the composition, matte pearl white / aqua / mint materials and true transparent background.
  - blog-llms-txt-implementation-guide：Refine this exact transparent cutout for a technical article about an llms.txt website content index and crawler access. Remove the entire robot mascot, including its body and face. Replace the mascot area with a simple non-personified mint directional arrow on the access route. Keep the plain index document, website document library, and access gateway. No people, no face, no robot, no headset, no text, no letters, no numbers. Preserve the meaningful object arrangement, soft studio materials, and true transparent background.

- 最終素材整理：`public/visuals/` 僅保留 47 張透明 WebP，矩形試稿移入本機暫存資料夾；生成原檔不刪除。全部素材完成後重新啟動本機服務，避免啟動前的 public 檔案清單與圖片快取造成假性 400。

- 視覺驗收擴充：47 個唯一檔案、alpha 透明範圍、檔案大小、頁面對應、48 頁原文／連結比對、三種寬度、九語替代文字，以及主體／次要文字／按鈕至少 4.5:1 對比；圖片錯誤含頁面路徑與完整診斷。

- 圖片預覽：`tmp/visual-refresh-20261006/preview.html` 為本機 47 張預覽，四張素材總覽為 `preview-1.png` 至 `preview-4.png`；原始生成 PNG 與素材 ID 對應保存在同目錄 `cutouts.json`。來源 PNG 保留於 Codex 生成目錄，WebP 全部為 1600 × 900 且含 alpha。

- 對比驗收讀取正式 CSS 的色彩變數，兼容建置壓縮後的三位十六進位色碼。

### 最終驗收（2026-10-06）

- 素材：47 張不同構圖，1600 × 900 WebP，保留真實 alpha，每張 76–244 KB，合計 6.39 MB；只提供最終 `*-cutout.webp`，首頁主圖優先載入，其餘延遲載入並提供尺寸與 sizes。
- 版面：圖片沒有額外框線、底色或卡片陰影，直接融入 section；桌面左右圖文，手機文字先行，價格表、比較表、正文、案例與揭露保留。案例放大原始真實截圖，不使用生成圖表示成果。
- 內容：`pnpm check:visuals http://127.0.0.1:3001` 通過 48 頁修改前後的原文與連結數量比對、素材對應與唯一性、透明範圍、尺寸及大小。修改前快照與驗收產物在 `tmp/visual-refresh-20261006/`。
- 響應式與語言：1440／768／390px 的十種代表頁，九語首頁／SEO 服務／錄音隱私文章無橫向溢出，圖片完整載入、提供當頁語言替代文字；實際檢視桌面、平板、手機、各語言及素材總覽。主要文字與按鈕對比至少 4.5:1。
- 錯誤：模擬圖片 HTTP 503，前端顯示來源、請求、事件、HTTP 狀態及完整回應；原文和已輸入表單資料保留。表單驗收涵蓋 15 種失敗、成功與防重複送出，測試攔截請求，不寄出真實郵件。
- `pnpm lint:content`、`pnpm exec tsc --noEmit --incremental false`、`pnpm build` 通過；九語字典共 31,014 筆，另有 17 個 API 邊界與 18 個九語成功／失敗隔離測試，建置產生 500 個靜態頁面／端點。
- `pnpm check:seo http://127.0.0.1:3001` 通過：434 個索引頁、38 個 noindex 頁，以及 canonical、雙向 hreflang、社群圖規則、JSON-LD、sitemap、內鏈與轉址。Article 沿用既有 image 欄位接入各篇封面，外語品牌社群圖規則不變。
- `pnpm check:conversion http://127.0.0.1:3001` 通過：8 篇文章 CTA、九語表單、語言切換與建議、停用儲存、主要頁型的手機／桌面及鍵盤導覽。截圖保留於系統暫存目錄 `falcon-conversion-GV6e4A`。
- 載入觀察：相同本機 Chrome、1440px、關閉快取、暖機後三次載入，開發版本首頁 LCP 中位數由 120 ms 至 148 ms，CLS 均為 0；正式本機版本中位數 60 ms、CLS 0。開發／正式數字不可直接當作效能改善比例，也不是公網 Core Web Vitals；原始紀錄為 `performance.json` 與 `performance-dev.json`。
- `git diff --check` 通過。正式建置仍有原有 metadataBase 警告，現有 SEO 驗收通過；本次沒有新增套件、對外 API、資料庫操作或正式部署。既有工作區修改與原始圖片保留。

本機網站預覽：`http://127.0.0.1:3001`；47 張素材預覽為 `tmp/visual-refresh-20261006/preview.html`（需本機服務運作）。

- 手機人工檢視後，主比較表沿用既有內表的 680px 最小寬度，在區塊內原生橫向捲動，避免欄位被擠成逐字直排；多語主標題使用瀏覽器依語言自動斷字，改善德文長單字的換行。沒有隱藏表格或正文。

- 真實案例圖片驗收發現原有含空白的截圖檔名會令 Next 圖片最佳化回傳 400；`ImageWithFallback` 以原生 URL 統一正規化本機圖片網址，保留既有百分比編碼與查詢參數。原始檔與案例文字不改，視覺檢查擴充為 main 內全部圖片載入成功、沒有圖片錯誤。

- 47 張素材的生成原檔 ID 已記錄於上表，原始 PNG 位於 `/Users/eric/.codex/generated_images/01a10ef5-ff50-7e62-be46-16d666471397/`，不覆蓋或刪除原檔。僅本次 QA 快照、預覽、來源備份與試稿資料夾加入 Git 忽略，避免暫存截圖隨程式提交；本機預覽仍可使用。

- 最終重跑通過：正式建置、內容／九語檢查、SEO、轉換及擴充視覺檢查；main 中的生成插畫與真實案例截圖均正常載入，含空白檔名的原案例截圖已恢復。48 頁原文與內鏈保留、三尺寸與九語無溢出，圖片 HTTP 503 仍完整呈現錯誤並保留輸入。

### 首頁 Hero 構圖重做（2026-10-06）

- 針對首屏層級不足重新排版：主標放大、搜尋副標降低層級，正文收窄；去背裝置以較大比例呈現，搭配單一淺鼠尾草展示區，移除原網格／漸層背景與通用封面版型。
- 首屏採獨立構圖，主要 CTA 改為深色圓角按鈕與箭頭，案例 CTA 改為文字連結；三項原有合作原則收整為底部資訊列。
- 沿用現有 Logo、字體、主圖與所有文字／連結；只更新 `HomeHero.tsx`、官網 Hero 範圍的 CSS 與本 README，不新增套件、素材、API 或資料庫操作。
- 驗收通過：1440／768／390px、九語首頁與 48 頁原文／內鏈比對，47 張既有素材全部保留；圖片 HTTP 503 仍完整顯示錯誤並保留輸入。Hero 實際文字與按鈕最低對比 5.93:1，鍵盤焦點、聯絡錨點與案例 CTA 通過。

- 首屏細修：中文主標控制為完整語意的兩行，拉開主標與搜尋副標的字級差距；拉丁語系依字長調整主標尺寸，首屏關閉自動連字斷行，避免英文 systems 被拆開。手機減少導覽下方留白，保留文字→圖片→合作原則的閱讀順序。
- `pnpm lint:content`、TypeScript、`pnpm build`、本機 `check:seo`、`check:conversion` 與 `check:visuals` 通過；本機正式版本暖機後三次首頁 LCP 中位數 64 ms、CLS 0，僅供本機觀察。Hero 截圖及九語檢查紀錄保留於 `tmp/visual-refresh-20261006/hero-v2-*`；本機預覽 `http://127.0.0.1:3001`，未正式部署。

### 聯絡信箱更新（2026-10-06）

- 官網公開聯絡信箱改為 `26416387.re@gmail.com`。聯絡區、九語頁尾、法律頁、名片／vCard、Organization 結構化資料、llms.txt 與表單預設收件人共用 `siteConfig.email`，頁尾移除寫死的舊地址與不再使用的信箱翻譯項目。
- SMTP 寄件設定與 `CONTACT_RECIPIENT` 覆寫規則沿用；九語移除不再使用的信箱翻譯鍵。本次不寄測試郵件、不操作資料庫、不正式部署，保留既有 Hero 修改。
- 驗收通過：`pnpm lint:content`（31,005 筆翻譯）、TypeScript、`pnpm build`；正式本機版本九語聯絡區／頁尾的顯示與 mailto、Organization／llms.txt、法律頁與名片均為新地址。隔離 SMTP 驗證預設收件人與環境覆寫規則、vCard 新信箱，全程沒有寄出郵件。已重啟 `http://127.0.0.1:3001`，重新整理即可看到更新。
