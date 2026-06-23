# 隼訊數位行銷服務平台

3D 互動式公司網站，使用 Next.js 16 + React 19 + Tailwind CSS v4 構建。

**網站**: https://www.falconinformation.com

## 業務範圍

- 網站建置與軟體開發
- CMS 系統、ERP 系統
- AI 工具開發
- APP 與互動應用程式設計
- **Telegram / LINE Bot 開發**（群組管理、廣告同步、排程貼文、入群認證、防 raid）
- **量化／自動交易系統開發**（證券・虛擬貨幣，純軟體開發：串接券商／交易所 API、策略回測、風控監控、原始碼交付；不代操、不提供投資建議、不保證獲利）
- 搜尋引擎優化（SEO）
- **GEO 生成式引擎優化**（Generative Engine Optimization）- 讓 ChatGPT、Gemini 等 AI 優先引用您的品牌
- **AEO 答案引擎優化**（Answer Engine Optimization）- 成為 Perplexity、Google AI 的首選答案來源
- 數位廣告投放
- 社群經營策略
- 口碑行銷及輿情管理
- 短影音與形象影片製作
- 整合活動與企劃執行
- 互動體驗設計

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
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # 根布局（全站級 schema + metadata）
│   ├── page.tsx                      # 首頁
│   ├── sitemap.ts                    # 動態 Sitemap（自動聚合所有 routes）
│   ├── robots.ts                     # 動態 Robots.txt（含 AI 爬蟲規則）
│   ├── opengraph-image.tsx           # 首頁 OG image 動態生成
│   ├── globals.css                   # 全局樣式
│   ├── services/[slug]/              # 9 個服務子頁（SEO/GEO/AEO/網站/AI/量化交易 等）
│   ├── local/[slug]/                 # 6 個 local landing page
│   ├── blog/                         # Blog index + blog/[slug] 動態文章頁
│   ├── pricing/                      # 透明定價 index + pricing/[slug]
│   ├── compare/[slug]/               # 服務比較頁（SEO vs GEO vs AEO 等）
│   ├── resume/                       # 履歷頁（noindex）
│   └── api/contact/                  # 聯絡表單 API
├── src/
│   ├── components/
│   │   ├── Hero.tsx, About.tsx ...   # 首頁元件
│   │   ├── ui/                       # shadcn/ui 元件
│   │   ├── page-layout/              # 子頁面共用 layout
│   │   │   ├── PageShell.tsx
│   │   │   ├── SitePageHeader.tsx
│   │   │   └── SitePageFooter.tsx
│   │   └── page-templates/           # 共用內容渲染模板
│   │       ├── ServicePageTemplate.tsx
│   │       ├── LocalPageTemplate.tsx
│   │       ├── BlogPostTemplate.tsx
│   │       ├── PricingPageTemplate.tsx
│   │       └── ComparePageTemplate.tsx
│   └── lib/
│       ├── seo/                      # SEO/GEO/AEO 工廠函數
│       │   ├── site-config.ts        # 全站常數
│       │   ├── metadata.ts           # createMetadata() 統一 metadata 產生器
│       │   ├── json-ld.tsx           # <JsonLd> 元件
│       │   └── schemas/              # 9 種 schema 工廠
│       │       ├── organization.ts   # 全站級
│       │       ├── local-business.ts # 全站級
│       │       ├── website.ts        # 全站級
│       │       ├── professional-service.ts # 全站級
│       │       ├── breadcrumb.ts     # 頁面級（工廠）
│       │       ├── faq.ts            # 頁面級（工廠）
│       │       ├── howto.ts          # 頁面級（GEO 神器）
│       │       ├── service.ts        # 頁面級（工廠）
│       │       ├── article.ts        # 頁面級（工廠）
│       │       ├── webpage.ts        # 頁面級（含 Speakable）
│       │       └── item-list.ts      # portfolio 列表
│       └── content/                  # 內容資料層（data-driven UI）
│           ├── types.ts              # 共用 content schema
│           ├── services/             # 9 項服務內容
│           ├── local.ts              # 6 個 local landing 內容
│           ├── blog.ts               # 10 篇文章內容
│           └── pricing.ts            # pricing + compare 內容
├── public/
│   ├── llms.txt                      # AI 搜尋引擎發現檔（精簡版）
│   ├── llms-full.txt                 # AI 完整可引用知識庫
│   ├── logo.png
│   └── manifest.json
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## 設計美學

### 東方俐落 × 暖色工業風格

本網站採用獨特的「東方俐落」美學方向，區別於常見的 AI 生成風格：

**配色系統**
- **主色**：琥珀色 (#D97706) - 暖色調取代冷藍紫
- **輔色**：銅色 (#B45309)、青銅色 (#92400E)
- **背景**：深石色系 (stone-950, stone-900)
- **文字**：奶油色 (#FAFAF9) + 石灰色層次

**字體選擇**
- **標題**：Noto Serif TC（思源宋體）- 東方書法韻味
- **內文**：Noto Sans TC（思源黑體）- 現代簡潔

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
- `.text-falcon-gradient` - 暖色調漸層文字

## 功能特色

- 響應式設計 (RWD)
- 滾動進度條（暖色調漸層）
- 流暢的頁面過渡動畫
- **Hero 背景** - 工業網格 + 暖色光暈 + 大型漢字裝飾
- **信任徽章** - 首屏展示「永久售後服務」與「快速交件保證」
- **作品案例展示** - 包含 25+ 專案，支援分類篩選與展開詳情
- **AI 語音客服區塊** - 首頁主打的新興服務 section（見下節）

## 首頁區塊：AI 語音客服・智慧派單系統（新興服務）

首頁在「技術開發」之後新增一個主打 section，向客戶宣傳本公司**已實際導入運行**的 AI 電話語音派單服務（電信級 SIP Trunk + OpenAI Realtime 即時語音 + 自動派單）。此為公司新增業務的對外門面。

### 相關檔案

- `src/components/AIVoiceDispatch.tsx` — section 本體（`id="ai-voice"`）
- `app/page.tsx` — 在 `<TechServices />` 與 `<MarketingServices />` 之間引入 `<AIVoiceDispatch />`
- `src/components/Navigation.tsx` — `navItems` 在「技術開發」後加入 `{ label: 'AI 語音', id: 'ai-voice' }`

### 區塊內容

- **標題區**：`AI Voice Agent` 標籤 + 脈動「新興服務」徽章 + 漸層標題「AI 語音客服／智慧派單系統」
- **AI 對話示意卡**：模擬一通真實電話（來電狀態列 + 計時），左 AI／右客人的對話氣泡逐則動畫浮現（自強路近遠百 → 花蓮火車站），底部「已自動建單派車・車號 888・ETA 5 分鐘」結果條
- **數據格**：24h 不打烊接聽／即時語音雙向對話／3 通路（電話・App・LINE）／0 漏接訂單
- **功能卡（6）**：24h AI 真人對話、在地口音辨識、智慧即時派單、全通路整合、電信級串接、全程留痕可稽核
- **CTA**：捲動至 `#contact` 的「預約 AI 語音方案」按鈕

### 設計一致性

完全沿用既有設計系統，未新增任何 CSS token 或全域 class：

- 背景 `bg-[#16201F]`（比 TechServices 的 `#1E2A2E` 略深一階以做區隔）+ `.industrial-grid`
- 沿用 `.falcon-card`、`.brand-line`、`.text-falcon-gradient`、`.falcon-btn-outline`
- 標題字體 `var(--font-display)`（Noto Serif TC）、配色取自 globals.css 的 falcon 色票（`#6D8F96`／`#A8B6BC`／`#E0E5E8`／`#2D3B40`／`#344349`）
- 動畫用 `motion/react` 的 `whileInView`（`once: true`），與 TechServices 同模式

> 對話內容為示意，刻意呼應實際導入案例（GoGoCha 花蓮計程車）。若要改文案，編輯 `AIVoiceDispatch.tsx` 上方的 `conversation` / `features` / `stats` 三個常數陣列即可，不需動 JSX。

## 作品案例

Portfolio 組件展示公司的專案作品，包含：

- **電商平台** - 翊珍香電商、財神賣鞋球鞋電商（https://www.xn--cjzl80byf571b.tw/）、燒烤訂餐服務
- **企業官網** - 佑羲人力（https://yoshi3166.com）、R collectives 室內設計、ROLL ON. 外商顧問官網（https://www.rollgrp.com/）
- **形象網站** - 書籍形象網站
- **遊戲官網** - 破浪三國（https://www.kingdoms.blog/）
- **App 開發** - 接案媒合平台（Web + iOS + Android）、GoGoCha 花蓮計程車雙模式 App（Kotlin + Jetpack Compose，已上架 Google Play）
- **AI 應用** - 現場 AI 智能客服系統
- **學術系統** - 會議論文投稿審查系統、國際學術研討會（https://icte2025.ntue.edu.tw/）
- **POS 系統** - 餐飲 POS 機整合系統
- **自由接案平台** - CosmosWork（https://falcontaskbridge.com/）（AI 智能媒合、人才履歷展示、需求追蹤）
- **展覽管理系統** - 完整的展覽作品管理與預約系統（52 資料表、Craft.js 編輯器、任務看板、即時叫號）
- **中醫診所 LINE 預約系統** - LINE LIFF 整合預約系統（Supabase Realtime、併發控制、130+ E2E 測試）
- **茶客棧飲料店官網** - 茶飲品牌官網（東方墨韻視覺設計、CMS 後台管理、Cloudflare R2 圖片存儲）
- **invisible care 居家健康守護官網與 CMS** - 居家清潔六大服務品牌官網（https://needfix.com.tw/）（Section CMS 動態區塊、Before/After 對比圖、完整 SEO 實體圖、老人友善後台 UI）
- **Telegram 雙群管理機器人 + 後台** - grammY + Vercel Pro 部署（主群→子群 fan-out 同步、入群題庫認證、OpenCC 簡體字守門、防 raid、QStash 排程貼文）
- **ESCROWA 全球遊戲交易託管服務官網** - 遊戲交易中間人形象官網（https://escrowa.com.tw/zh）（Laravel 12 自刻 CMS、中英雙語、純 canvas 金色點陣地球、cPanel FTP 部署）

每個專案卡片包含：專案描述、核心功能、技術亮點

## Hero 背景實現

主視覺背景結合圖片與 CSS 效果：

- **背景圖片** - 3D 立體風格主視覺（40% 透明度）
- **工業感網格** - 使用 `.industrial-grid` CSS class
- **斜線紋理** - 使用 `.diagonal-lines` CSS class
- **暖色光暈** - 琥珀色/橘色柔和光暈
- **大型漢字裝飾** - 右側「隼」字作為品牌標識

相關檔案：
- `app/globals.css` - 品牌視覺系統和 CSS 組件
- `src/components/Hero.tsx` - HTML 結構和 Motion 動畫

## SEO / GEO / AEO 配置

網站採用 **資料驅動的多頁面架構**，覆蓋四種搜尋意圖（informational / commercial / transactional / navigational），整合傳統 SEO、GEO 生成式引擎優化、AEO 答案引擎優化。

### 內容架構（30+ indexable pages）

| 路由群 | 路徑 | 數量 | 搜尋意圖 |
| --- | --- | --- | --- |
| 服務頁 | `/services/[slug]` | 9 | informational + commercial |
| 本地頁 | `/local/[slug]` | 6 | local SEO |
| 部落格 | `/blog`、`/blog/[slug]` | 11 | informational + topical authority |
| 定價頁 | `/pricing`、`/pricing/[slug]` | 4 | transactional |
| 比較頁 | `/compare/[slug]` | 1+ | commercial investigation |
| 首頁 | `/` | 1 | navigational |

每個頁面：獨立 metadata、獨立 OG、獨立 schema（透過 `lib/seo/schemas/*` 工廠產生）、獨立 canonical。

> **合規紅線（量化交易服務頁）**：`/services/quant-trading` 一律維持「**軟體開發**」定位——交付程式、客戶以自有帳戶自行下單、本公司不碰資金。文案**禁止**出現代操、保證獲利、收益分潤、招攬資金等字眼（在台灣需金管會投顧／投信牌照，且會被 `pnpm lint:content` 擋）。該頁 `src/lib/content/services/quant-trading.ts` 內含「重要聲明：服務性質與風險告知」段落，修改文案時務必保留。

### Schema 架構（模組化、可擴展）

`src/lib/seo/` 把所有 SEO 邏輯抽出為純資料 + 工廠函數，分兩層：

**全站級**（在 `app/layout.tsx` 內，所有頁面共享）
- Organization
- LocalBusiness（含 areaServed、hasOfferCatalog、openingHoursSpecification）
- WebSite
- ProfessionalService

**頁面級**（在各 `page.tsx` 內，按需引入）
- WebPage + SpeakableSpecification（標記 AI 可引用內容）
- BreadcrumbList
- Service（每個服務頁）
- Article（每篇 blog）
- FAQPage（每頁不同問題集）
- HowTo（GEO 神器，AI 最愛引用步驟化內容）
- OfferCatalog（定價頁）

> **重要**：先前版本的 `AggregateRating`（4.9/47 評分）已移除，因為缺少對應的 Google Business Profile 驗證來源，違反 Google Rich Results 政策。如未來有真實 Google 商家評論，請改用 `sameAs` 指向 GBP。

> **JsonLd 安全 escape**：`src/lib/seo/json-ld.tsx` 的 `safeJsonForScript()` 會額外 escape `<`、`>`、`&`、`U+2028`、`U+2029` 後再塞進 `<script type="application/ld+json">`。原因：原生 `JSON.stringify` 不會處理這些字元 — schema 內任一字串若含 `</script>` 會造成 HTML parser 提前關閉標籤（XSS），含 U+2028/U+2029 則會在瀏覽器 hydrate 時拋 `Invalid or unexpected token` SyntaxError 讓整頁炸掉。新增 schema 工廠時直接傳物件給 `<JsonLd>` 即可，escape 已內建。

### llms.txt + llms-full.txt（GEO 雙層架構）

- `public/llms.txt` — 精簡版，AI 爬蟲快速理解品牌定位
- `public/llms-full.txt` — 完整知識庫，含定價、案例、FAQ、產業專業領域

兩份檔案皆在 `<head>` 用 `<link rel="alternate">` 宣告，讓 AI 爬蟲明確發現。

### 動態 Sitemap

`app/sitemap.ts` 從 `lib/content/` 動態聚合所有頁面，新增頁面**自動進入 sitemap**，無需手動維護。

### Local SEO

6 個 local landing page 使用拼音 URL（`/local/taoyuan-seo` 而非中文 URL），避免編碼風險並有利於反向連結。每頁針對：在地關鍵字、在地客戶案例、在地化 FAQ。

### Core Web Vitals 優化
- DNS Prefetch / Preconnect / Font Preload / Image Preload
- Next.js Image 自動優化（AVIF/WebP）
- Server-rendered schema（JSON-LD 在 HTML 內，AI 爬蟲可直接讀）

### AI 爬蟲規則

`app/robots.ts` 明確 allow：GPTBot、ChatGPT-User、Google-Extended、PerplexityBot、Amazonbot、ClaudeBot、Applebot-Extended。

### 怎麼新增一個服務 / blog / 本地頁面

只需修改資料層，不用碰 React：

1. **新增服務頁** — 在 `src/lib/content/services/` 加一個 `[slug].ts`，並在 `services/index.ts` 註冊。動態路由自動產生對應頁面。
2. **新增 blog 文章** — 在 `src/lib/content/blog.ts` 加一個物件條目。
3. **新增 local landing** — 在 `src/lib/content/local.ts` 加條目。
4. **新增定價頁** — 在 `src/lib/content/pricing.ts` 加條目。

每次新增，sitemap、navigation、JSON-LD、metadata 全部自動生效。

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
- **CSP** - 內容安全策略（白名單：Google Fonts、GTM、GA、LINE QR）。`/resume` 額外放寬 `wasm-unsafe-eval`、`worker-src blob:`、`connect-src data: blob:` 給 `@react-pdf/renderer` 使用。Preview / development 環境（`VERCEL_ENV !== 'production'`）額外放行 `https://vercel.live` 與 `wss://ws-us3.pusher.com` 讓 Vercel Live toolbar（Comments / Feedback）可運作；**production 不受影響**。CSP 構造集中在 `next.config.ts` 的 `buildCsp()` helper，避免字串 `.replace()` 的脆弱性。
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

GTM 已整合至 `app/layout.tsx`，透過環境變數控制。部署時需設定：

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

未設定時 GTM 不會載入，不影響開發環境。

### 待完成
- [ ] 申請並設定 Google Business Profile（本地 SEO 關鍵；含真實評論後可重新加入 AggregateRating，連結至 GBP）
- [ ] 申請 Google Search Console 並提交新版 sitemap
- [ ] 設定 GTM 容器 ID（`NEXT_PUBLIC_GTM_ID` 環境變數）
- [ ] 為 8 個 service 子頁加上獨立 OG image（目前只有首頁有動態 OG）
- [ ] 補真實客戶 case study 細節（接手日期、量化成果），把對應頁面 qualityTier 升為 'production'
- [ ] 申請 Wikidata 條目強化 GEO 訊號

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

所有文章作者統一為 `siteConfig.editorial.teamName`（隼訊數位行銷編輯部），使用 Schema.org 的 Organization-as-Author 規範。
blog 文章可選擇性顯示 `reviewedByRole`（如「資深 SEO 顧問」）強化 trust 訊號 — 不公開實名但表明審稿角色。

### 撰寫指南

詳見 `.claude/content-playbook.md`：訪談題庫、AI slop 範例 vs 改寫範例、跨檔協作流程。

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

聯絡表單提交後會自動發送通知郵件到公司信箱 `contact@falconinformation.com`（取自 `src/lib/seo/site-config.ts` 的 `email`，單一來源）。

採「**寄、收分離**」架構：

- **寄**：透過 **Gmail SMTP**（`falconinformation0113@gmail.com`）送出通知信。Zoho 免費版不支援 SMTP/IMAP/POP，故寄信仍走 Gmail。
- **收**：通知信投遞到公司信箱 `contact@falconinformation.com`（Zoho 託管），對外顯示與收件人皆為公司網域。

環境變數採廠商中立命名（`SMTP_*`），未來若改付費方案直接用公司信箱寄信，只需改 `.env` 的值、不必動 code。

### 環境變數設定（本機 `.env.local` 與 Vercel 皆需設定）

```env
# 寄件：Gmail SMTP（需在該 Gmail 帳號開兩步驟驗證並產生 16 碼應用程式密碼）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=falconinformation0113@gmail.com
SMTP_PASSWORD=你的Gmail應用程式密碼
# 選填：覆寫表單通知收件人（預設為 siteConfig.email = contact@falconinformation.com）
# 測試「寄信」是否通時，可暫時指向你確定收得到的信箱：
# CONTACT_RECIPIENT=falconinformation0113@gmail.com
```

- `SMTP_HOST` / `SMTP_PORT` 未設定時，程式碼預設 `smtp.zoho.com` 與 `465`（SSL）。
- 寄件人 `from` 一律使用 `SMTP_USER`（Gmail / Zoho 都會拒絕非本帳號的寄件地址）。
- 收件人 `to` 預設取 `siteConfig.email`，可用 `CONTACT_RECIPIENT` 覆寫。

### 取得 Gmail 應用程式密碼

1. 前往 [Google 帳戶設定](https://myaccount.google.com/) →「安全性」，確認已開啟「兩步驟驗證」。
2. 在「應用程式密碼」產生一組（名稱如 "Falcon 網站"），複製 16 位密碼貼到 `SMTP_PASSWORD`。

### 前置：讓 `contact@falconinformation.com` 能收信

1. 在 [Zoho Mail](https://www.zoho.com/mail/) 新增網域 `falconinformation.com` 並完成「網域驗證」（加一筆 TXT 到 DNS）。
2. 設定 DNS：將 **MX** 記錄指向 Zoho（`mx.zoho.com` / `mx2.zoho.com`），並加上 Zoho 提供的 **SPF（TXT）** 與 **DKIM（TXT）**。
3. 建立信箱使用者 `contact@falconinformation.com`，即可在 Zoho 網頁版收信。

> 注意：DNS 與 Zoho 後台設定屬基礎建設層，無法由程式碼完成。若 `contact@` 尚未建立 / MX 未設好，通知信會收不到——此時請先用 `CONTACT_RECIPIENT` 指向可收信箱，把「寄信」與「收信」兩個問題切開排查。
>
> 升級路徑：日後付 Zoho Mail Lite（約 $1/人/月）即可解鎖 SMTP，把 `SMTP_*` 改成 `contact@falconinformation.com` 的 Zoho 設定，達成全程公司網域寄收。

## 個人履歷 PDF 產生器

路由 `/resume` 是一個**隱藏的個人履歷 PDF 產生器**（不在主導覽、不進 sitemap、`robots: noindex/nofollow`）。開啟頁面後選擇語言（繁中 / 英文），按下載即可取得對應語言的 A4 單頁 PDF。

### 使用方式

1. `pnpm dev` 後開 http://localhost:3000/resume
2. 選擇語言，點「下載」按鈕

### 相關檔案

- `app/resume/page.tsx` — 產生器 UI（客戶端元件）
- `app/resume/layout.tsx` — 設定 noindex metadata
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

分享 `/card` 連結時，社群預覽圖由 `app/card/opengraph-image.tsx` 自動產生（同橫式版面）。

### 相關檔案

- `app/card/page.tsx` — `/card` 分享頁（`PageShell` 包名片）
- `src/components/card/BusinessCard.tsx` — 可重用名片元件（QR、vCard 下載、行動按鈕）
- `src/lib/card-data.ts` — 名片資料**單一來源**，從 `resume-data.ts`（個人）+ `seo/site-config.ts`（公司）組裝
- `src/lib/vcard.ts` — vCard 4.0（RFC 6350）`.vcf` 產生器（純函式）
- `src/lib/card-og.tsx` — 三種名片圖共用版面（next/og）
- `src/lib/og-fonts.ts` — 名片圖中文字體載入器
- `app/card/opengraph-image.tsx`、`app/api/card-image/[format]/route.tsx` — 產圖路由

### 修改名片內容

聯絡資訊改 `src/lib/resume-data.ts`（個人）與 `src/lib/seo/site-config.ts`（公司）即同步，不需改名片程式碼。個人 LINE ID（`personalLineId` / `personalLineUrl`）直接寫在 `src/lib/card-data.ts`，因為它不屬於履歷或公司設定。「加 LINE」按鈕指向個人 LINE；公司 LINE 官方帳號仍在全站頁尾。

### 技術細節

- QR 用 `qrcode.react`（純 inline SVG，零外部請求，符合 CSP）
- 產圖路由用 **Node.js runtime**（非 edge），以 `fs` 讀取 `@fontsource/noto-sans-tc` 的 **`.woff`** 字體傳入 `next/og` — satori 支援 woff/ttf/otf 但**不支援 woff2**，且預設字體不含中文，未載入會變豆腐□
- vCard 以 `Blob` + `<a download>` 觸發下載；產生失敗時於前端完整顯示錯誤，符合 CLAUDE.md 規範

## 部署

本專案支援 Vercel 部署：

```bash
# 建置生產版本
pnpm build
```

**重要**：部署時需在 Vercel 後台設定環境變數 `SMTP_HOST`、`SMTP_PORT`、`SMTP_USER`、`SMTP_PASSWORD`（選填 `CONTACT_RECIPIENT`）。

**注意**：UI 組件使用 shadcn/ui，import 語句不應包含版本號（如 `@radix-ui/react-dialog` 而非 `@radix-ui/react-dialog@1.1.6`）。
