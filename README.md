# 隼訊數位行銷服務平台

隼訊企業官網，以「網站與 AI 開發」及「SEO／GEO 搜尋成長」兩個獲客 Hub 為核心，使用 Next.js 16 + React 19 + Tailwind CSS v4 構建。

**網站**: https://www.falconinformation.com

## 業務範圍

- 企業網站、電商、CMS 與客製系統開發
- AI 工具、LINE／Telegram Bot 與流程自動化
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
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # 根布局（全站級 schema + metadata）
│   ├── page.tsx                      # 首頁
│   ├── sitemap.ts                    # 動態 Sitemap（自動聚合所有 routes）
│   ├── robots.ts                     # 動態 Robots.txt（含 AI 爬蟲規則）
│   ├── opengraph-image.tsx           # 首頁 OG image 動態生成
│   ├── globals.css                   # 全局樣式
│   ├── services/[slug]/              # 4 個索引 Hub/子服務 + 4 個 noindex 舊服務 + AEO 轉址
│   ├── about/                        # 實名負責人與工作方法
│   ├── case-studies/[slug]/          # 證據、資料來源與限制
│   ├── local/[slug]/                 # 6 個保留 URL；證據達標前一律 noindex
│   ├── blog/                         # Blog index + blog/[slug] 動態文章頁
│   ├── pricing/                      # 透明定價 index + 4 個 pricing/[slug]
│   ├── compare/[slug]/               # SEO／GEO／AEO 名詞比較
│   ├── llms.txt/                     # 共用內容資料源生成的低成本摘要
│   ├── llms-full.txt/                # 共用內容資料源生成的完整摘要
│   ├── resume/                       # 履歷頁（noindex）
│   └── api/contact/                  # 聯絡表單 API
├── src/
│   ├── components/
│   │   ├── Home*.tsx, Contact.tsx    # 首頁定位、交付、案例、流程、定價與信任元件
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
│       ├── seo/                      # metadata 與精簡結構化資料工廠
│       │   ├── site-config.ts        # 全站常數
│       │   ├── metadata.ts           # createMetadata() 統一 metadata 產生器
│       │   ├── json-ld.tsx           # <JsonLd> 元件
│       │   └── schemas/              # 9 種 schema 工廠
│       │       ├── organization.ts   # 全站級
│       │       ├── website.ts        # 全站級
│       │       ├── breadcrumb.ts     # 頁面級（工廠）
│       │       ├── service.ts        # 頁面級（工廠）
│       │       ├── article.ts        # 頁面級（工廠）
│       │       ├── webpage.ts        # 頁面級（工廠）
│       │       ├── profile-page.ts   # 實名作者頁
│       │       ├── case-study.ts     # 案例 CreativeWork
│       │       └── item-list.ts      # portfolio 列表
│       └── content/                  # 內容資料層（data-driven UI）
│           ├── types.ts              # 共用 content schema
│           ├── authors.ts            # 實名作者資料
│           ├── case-studies.ts       # 公開案例證據
│           ├── price-catalog.ts      # 單一價格來源
│           ├── services/             # 服務內容
│           ├── local.ts              # 6 個 local landing 內容
│           ├── blog.ts               # 10 篇文章內容
│           └── pricing.ts            # pricing + compare 內容
├── public/
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
- **作品案例展示** - 完整案例頁收錄 29 項作品，首頁精選三項可驗證案例
- **決策型首頁內容** - 兩個獲客 Hub、實際交付、四步合作流程、適配條件、公開起價、實名負責人與精選實作文章

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
- **GoGoCha 花蓮計程車品牌官網 + 自建派單後端** - 花蓮 24h 計程車隊官網（https://hualientaxi.taxi/）（與雙模式 App 同生態系；AI 接電話派車、車資試算真實 API、長輩友善無障礙；後端 SmartDispatcherV2 AI 派單、LINE Bot、跨車隊媒合分潤、完整營運後台）
- **鴻緯商仲顧問 工業地產官網 + CMS** - 北桃竹苗企業廠房・工業土地顧問官網（https://allenlo.com.tw/）（精選物件分頁篩選、市場分析文章、結構化詢問表單、Resend 雙向通知；後台完整 CRUD、Prisma migrate 版本化遷移、Zod 前後端共用驗證、企業藏青視覺）
- **Alive AI 互動戀愛遊戲（雙平台）** - iOS＋Android 上架（Google Play com.aliverole.app）（Convex + 多模型編排 Claude/Gemini/OpenAI、7 維情緒系統、配對→分手關係生命週期、AI 即時生成劇照、雙平台內購）

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

## SEO／GEO 配置

網站採用資料驅動的多頁面架構。SEO 與 GEO 共用抓取、索引、效能、原創內容、實體一致性與可驗證證據；AEO 只作為清楚回答問題的內容方法，不另建近義服務頁。

### 內容架構

| 路由群 | 路徑 | 數量 | 搜尋意圖 |
| --- | --- | --- | --- |
| 核心服務頁 | `/services/[slug]` | 4 | informational + commercial |
| 舊服務頁 | `/services/[slug]` | 4 | `noindex,follow` |
| AEO 舊路徑 | `/services/aeo` | 1 | 永久轉址至 `/services/geo` |
| 本地頁 | `/local/[slug]` | 6 | 證據達標前 `noindex,follow` |
| 案例頁 | `/case-studies`、`/case-studies/[slug]` | 4 | commercial + evidence |
| 部落格 | `/blog`、`/blog/[slug]` | 11 | informational + topical authority |
| 定價頁 | `/pricing`、`/pricing/[slug]` | 5 | transactional |
| 比較頁 | `/compare/[slug]` | 1+ | commercial investigation |
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

- `/llms.txt`：品牌、核心服務與公開起價的精簡摘要
- `/llms-full.txt`：加入實名作者、案例證據與限制

兩者由 TypeScript 的服務、價格、案例與作者資料源生成，目的是降低內容漂移。Google 官方文件明確說明 Google Search 不使用 llms.txt，因此它不是排名、索引或 AI 引用保證。

### 動態 Sitemap

`app/sitemap.ts` 只聚合可索引 canonical URL，使用內容真實更新日期，不輸出 Google 不採用的 `priority` 或 `changefreq`。

### Local SEO

6 個城市 URL 目前全部保留，但只有同時具備完整客戶同意、服務期間、基準與結果證據時才可索引。借址、name-only 案例或空白服務清單不構成索引資格，也不得暗示當地有分公司。

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

GTM 已整合至 `app/layout.tsx`，透過環境變數控制。部署時需設定：

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

未設定時 GTM 不會載入，不影響開發環境。

**ID 會先 `trim()` 再以 `/^GTM-[A-Z0-9]+$/i` 驗證格式，不符者一律不注入。**
原因：`NEXT_PUBLIC_*` 是 build 時被字串替換進 inline `<script>`，若環境變數挾帶換行/引號（例如貼進 Vercel env 欄位時多了結尾換行 `GTM-XXXX\n`），會讓 inline JS 字串字面值斷行，瀏覽器丟 `Uncaught SyntaxError: Failed to execute 'appendChild' on 'Node': Invalid or unexpected token`，導致**全站 GTM/GA 追蹤失效**，同時是 script injection 破口。驗證後即使環境變數髒掉也不會炸；但仍應到 Vercel 後台確認該變數**值的前後無多餘空白或換行**，改完需重新部署（build 時才會重新替換）。

### 待完成
- [ ] 申請並設定 Google Business Profile（本地 SEO 關鍵；含真實評論後可重新加入 AggregateRating，連結至 GBP）
- [ ] 申請 Google Search Console 並提交新版 sitemap

### SEO／GEO 架構（2026-07-26）

- 網站獲客主軸收斂為「網站與 AI 開發」及「SEO／GEO 搜尋成長」。
- 實名作者資料集中於 `src/lib/content/authors.ts`；公開案例證據集中於 `src/lib/content/case-studies.ts`。
- 公開起價與報價因素集中於 `src/lib/content/price-catalog.ts`，服務頁、價格頁、Schema 與 llms 路由必須共用此來源。
- 案例只可使用已公開或取得同意的資料；沒有 GA4、GSC、營收等原始資料時，不得宣稱商業成長幅度。
- 不把 `llms.txt`、FAQ／HowTo／Speakable Schema 當作 Google AI 搜尋排名手段；GEO 以可索引內容、真實經驗與可驗證證據為核心。
- 全站 JSON-LD 只輸出單一 `@graph`；全站實體為 Organization + WebSite，借址不再輸出為 LocalBusiness、地理 meta 或 vCard 地址。
- 已刪除失效的 `MarketingAgency`／`ProfessionalService`／重複 LocalBusiness Schema 實作，避免未被引用的檔案仍在型別檢查或日後誤用。
- 字型改由 `next/font/local` 自託管 `public/fonts` 內的 Noto Sans TC，不再從瀏覽器重複請求 Google Fonts。
- 可索引服務固定為 `/services/web-development`、`/services/ai-tools`、`/services/seo`、`/services/geo`；AEO 永久轉址至 GEO，其餘舊服務保留可讀但設為 `noindex,follow` 並移出 sitemap。
- 沒有公開案例證據的城市頁會自動 `noindex,follow` 並移出 sitemap，避免把薄弱城市頁當成虛構據點或 doorway page。
- `robots.txt` 明確允許 `OAI-SearchBot` 與 `PerplexityBot`；GPTBot 保留但只視為訓練爬蟲設定，不當作搜尋曝光保證。
- `/about` 使用實名負責人與可核對的公開連結；`/case-studies` 與三個案例詳頁明確區分技術量測、產品能力與商業成效，並顯示資料限制。
- 所有文章作者統一為實名蔡翊廉並連到 `/about`；已移除虛構的「資深 SEO 顧問」審稿者。
- `/pricing` 與四個價格詳頁直接由 `price-catalog.ts` 產生；2026-07-27 依指示全部除以二，公開起價為網站 2 萬／專案、AI 工具 3 萬／專案、SEO 7,500／月、SEO／GEO 12,500／月。AEO 併入 GEO、不另售 Schema 套餐。
- 服務頁的價格卡片與 `/pricing` 速覽也直接讀取同一價格目錄；各服務檔內的舊價格欄位不再作為前端或 Schema 輸出來源。
- `/llms.txt` 與 `/llms-full.txt` 改為 App Router 純文字路由，直接讀取服務、價格、案例與作者資料；不再維護可能漂移的手寫靜態副本。
- 首頁已移除遊戲、廣告、社群、影片等稀釋主題的平鋪區塊與捲動進度動畫；保留單一 H1 與兩個獲客 Hub，並加入實際交付、三個證據化案例、四步合作流程、公開起價、實名負責人、精選文章與聯絡轉換。子頁導覽同步收斂為六個主要入口。
- 全站 footer 已移除借址、AEO 舊連結、非主軸服務與外部 LINE QR 大圖，改為兩個 Hub、案例、價格、實名資料與直接聯絡入口。
- 聯絡表單成功推送 `generate_lead`、電話／Email／LINE 推送 `contact_click`、失敗推送不含 PII 的 `form_error`；API 回傳穩定錯誤碼，前端完整顯示錯誤碼與訊息。
- Logo 與 App icon 已由 2048×2048／約 2MB 改為 256×256／約 34KB；`public/favicon.ico` 已改為真正的 64×64 ICO（約 17KB）。
- 電子名片不再連到借址，只顯示「台灣桃園（非到訪門市）」作為主要服務區；vCard 同樣不輸出街道地址。
- SEO／GEO 服務內容已依 Google 2026-07-10 官方指引重寫：明確說明 Google 忽略 llms.txt、沒有 AI 專用 Schema、沒有固定見效週期，並移除借址辦公室與 FAQ／HowTo／Speakable 成效宣稱。
- GEO 指南、SEO／GEO／AEO 比較、Schema、Perplexity 與 Google AI Overview 五篇文章已同步改寫；移除 TF-IDF、DA 門檻、固定週期、FAQ rich result 與「無 Schema 就不會被引用」等錯誤說法。
- 預設 OG 圖已改為雙 Hub 定位並移除 AEO 與借址；拿掉 Edge runtime，讓 Next.js 可靜態產生分享圖。
- FAQ 與步驟內容仍可供讀者閱讀，但 FAQPage／HowTo Schema 工廠已刪除；AEO 舊內容檔也已刪除，僅保留 `/services/aeo` 永久轉址。
- 六個城市 URL 在缺少「完整客戶同意＋期間＋基準＋結果」前一律 `noindex,follow` 並排除 sitemap；不以 name-only 案例或借址通過索引門檻。
- Footer 的電話、Email、LINE 入口均統一發送不含 PII 的 `contact_click` 事件；履歷也已移除「AI 引擎優先引用」的不實保證。
- `/services/aeo` 由 Next.js redirects 明確回傳單次 301 至 `/services/geo`，文章與舊元件內鏈皆直接改連 GEO。
- `pnpm check:seo` 會全站驗證 HTTP 200、index/noindex、sitemap、唯一 metadata/canonical、單一 H1、OG/Twitter、單一 JSON-LD `@graph`、孤兒頁與 AEO 301。
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
- [ ] 設定 GTM 容器 ID（`NEXT_PUBLIC_GTM_ID` 環境變數）
- [ ] 匯入 GSC、GA4、Bing Webmaster Tools 與 GBP 的近 16 個月資料，另保存發布前 90 天基準。
- [ ] 取得城市案例完整公開同意、期間、基準、結果、來源、圖片與限制後，再逐頁解除 noindex。
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
