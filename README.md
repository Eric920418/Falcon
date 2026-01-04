# 隼訊數位行銷服務平台

3D 互動式公司網站，使用 Next.js 16 + React 19 + Tailwind CSS v4 構建。

**網站**: https://falconinformation.com

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
├── app/                  # Next.js App Router
│   ├── layout.tsx        # 根布局（含 SEO 配置）
│   ├── page.tsx          # 首頁
│   ├── sitemap.ts        # 動態 Sitemap 生成
│   ├── robots.ts         # 動態 Robots.txt 生成
│   └── globals.css       # 全局樣式 (Tailwind CSS v4)
├── src/
│   └── components/       # React 組件
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Portfolio.tsx     # 作品案例展示
│       ├── Navigation.tsx
│       ├── TechServices.tsx
│       ├── MarketingServices.tsx
│       ├── ContentServices.tsx
│       ├── Philosophy.tsx
│       ├── Contact.tsx
│       └── ui/           # shadcn/ui 組件
├── public/               # 靜態資源
│   └── manifest.json     # PWA Manifest
├── next.config.ts        # Next.js 配置
├── postcss.config.mjs    # PostCSS 配置
└── tsconfig.json         # TypeScript 配置
```

## 功能特色

- 響應式設計 (RWD)
- 3D 視差動畫效果
- 滾動進度條
- 滑鼠跟隨漸層背景
- 流暢的頁面過渡動畫
- **Hero 純 CSS 動態背景** - 流動波浪、浮動氣泡、光暈效果（無需圖片）
- **信任徽章** - 首屏展示「永久售後服務」與「快速交件保證」，搭配 hover 動畫
- **作品案例展示** - 包含 14+ 專案，支援分類篩選與展開詳情

## 作品案例

Portfolio 組件展示公司的專案作品，包含：

- **電商平台** - 翊珍香電商、球鞋電商、燒烤訂餐服務
- **企業官網** - 佑羲人力、R.OC 室內設計
- **形象網站** - 書籍形象網站
- **App 開發** - 接案媒合平台（Web + iOS + Android）
- **AI 應用** - 現場 AI 智能客服系統
- **學術系統** - 會議論文投稿審查系統
- **POS 系統** - 餐飲 POS 機整合系統
- **自由接案平台** - CosmosWork（AI 智能媒合、人才履歷展示、需求追蹤）

每個專案卡片包含：技術棧標籤、專案描述、核心功能、技術亮點

## Hero 背景實現

主視覺背景使用純 CSS 實現，包含以下效果：

- **多層漸變背景** - 深藍到黑色的基礎色調
- **流動波浪** - 使用 `radial-gradient` + CSS animation 模擬
- **浮動氣泡** - 半透明玻璃質感球體
- **光暈效果** - 使用 `filter: blur()` 實現柔和光暈
- **動態光點** - 使用 Motion 動畫的閃爍光點

相關檔案：
- `app/globals.css` - CSS 動畫和樣式定義
- `src/components/Hero.tsx` - HTML 結構和 Motion 動畫

## SEO / GEO / AEO 配置

網站已配置完整的搜尋引擎優化：

### SEO 基礎配置
- **Metadata** - 完整的 title、description、keywords
- **Open Graph** - Facebook/LINE 分享預覽 (`og:title`, `og:description`, `og:image`)
- **Twitter Cards** - Twitter 分享預覽
- **Canonical URL** - 避免重複內容問題
- **動態 robots.ts** - 搜尋引擎爬蟲規則（支援 AI 爬蟲）
- **動態 sitemap.ts** - 網站地圖自動生成
- **PWA manifest.json** - 應用程式清單

### GEO 優化（地理位置優化）
- **LocalBusiness Schema** - 完整的本地商家結構化數據
- **GeoCoordinates** - 精確的經緯度座標
- **GEO Meta Tags** - `geo.region`, `geo.placename`, `geo.position`, `ICBM`
- **areaServed** - 服務區域標記（台灣、桃園、台北、新北）
- **PostalAddress** - 完整地址結構化數據

### AEO 優化（AI 搜尋優化）
- **AI 爬蟲友善** - robots.ts 允許 GPTBot、ChatGPT-User、PerplexityBot、ClaudeBot 等
- **knowsAbout Schema** - 明確標記專業領域，幫助 AI 理解品牌專長
- **Service Schema** - 服務項目結構化數據，讓 AI 更容易引用
- **Organization Schema** - 品牌識別與社群連結

### JSON-LD 結構化數據
網站包含以下 Schema：
1. **Organization** - 品牌組織資訊
2. **LocalBusiness** - 本地商家（GEO 核心）
3. **WebSite** - 網站基本資訊
4. **BreadcrumbList** - 導航結構
5. **OfferCatalog** - 服務項目清單

### 社群連結
- Instagram: https://www.instagram.com/falcon.information
- Threads: https://www.threads.net/@falcon.information

### 待完成
- [ ] 創建 `public/og-image.png` (1200x630px) 用於社群分享預覽
- [ ] 添加 Google Analytics 追蹤碼
- [ ] 申請並設定 Google Business Profile

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

## 部署

本專案支援 Vercel 部署：

```bash
# 建置生產版本
pnpm build
```

**重要**：部署時需在 Vercel 後台設定環境變數 `GMAIL_USER` 和 `GMAIL_APP_PASSWORD`。

**注意**：UI 組件使用 shadcn/ui，import 語句不應包含版本號（如 `@radix-ui/react-dialog` 而非 `@radix-ui/react-dialog@1.1.6`）。
