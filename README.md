# 隼訊數位行銷服務平台

3D 互動式公司網站，使用 Next.js 16 + React 19 + Tailwind CSS v4 構建。

**網站**: https://www.falconinformation.com

## 業務範圍

- 網站建置與軟體開發
- CMS 系統、ERP 系統
- AI 工具開發
- APP 與互動應用程式設計
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
│   ├── services/[slug]/              # 8 個服務子頁（SEO/GEO/AEO/網站/AI 等）
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
│           ├── services/             # 8 項服務內容
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
- **作品案例展示** - 包含 20+ 專案，支援分類篩選與展開詳情

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
| 服務頁 | `/services/[slug]` | 8 | informational + commercial |
| 本地頁 | `/local/[slug]` | 6 | local SEO |
| 部落格 | `/blog`、`/blog/[slug]` | 11 | informational + topical authority |
| 定價頁 | `/pricing`、`/pricing/[slug]` | 4 | transactional |
| 比較頁 | `/compare/[slug]` | 1+ | commercial investigation |
| 首頁 | `/` | 1 | navigational |

每個頁面：獨立 metadata、獨立 OG、獨立 schema（透過 `lib/seo/schemas/*` 工廠產生）、獨立 canonical。

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
- **CSP** - 內容安全策略（白名單：Google Fonts、GTM、GA、LINE QR）
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

聯絡表單提交後會自動發送郵件到 `26416387.re@gmail.com`。使用 Gmail SMTP 發送。

### 環境變數設定

在 `.env.local` 中添加以下變數：

```env
GMAIL_USER=你的gmail帳號@gmail.com
GMAIL_APP_PASSWORD=你的應用程式密碼
```

### 取得 Gmail 應用程式密碼

1. 前往 [Google 帳戶設定](https://myaccount.google.com/)
2. 選擇「安全性」
3. 確認已開啟「兩步驟驗證」
4. 在「兩步驟驗證」頁面底部找到「應用程式密碼」
5. 選擇「郵件」和「其他」，輸入名稱（如 "Falcon 網站"）
6. 點擊「產生」，複製 16 位密碼
7. 將密碼貼到 `.env.local` 的 `GMAIL_APP_PASSWORD`

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

## 部署

本專案支援 Vercel 部署：

```bash
# 建置生產版本
pnpm build
```

**重要**：部署時需在 Vercel 後台設定環境變數 `GMAIL_USER` 和 `GMAIL_APP_PASSWORD`。

**注意**：UI 組件使用 shadcn/ui，import 語句不應包含版本號（如 `@radix-ui/react-dialog` 而非 `@radix-ui/react-dialog@1.1.6`）。
