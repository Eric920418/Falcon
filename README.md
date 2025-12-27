# Falcon - 整合行銷服務平台

3D 互動式公司網站，使用 Next.js 16 + React 19 + Tailwind CSS v4 構建。

**網站**: https://falconinformation.com

## 業務範圍

- 網站建置與軟體開發
- CRM 系統、ERP 系統
- AI 工具開發
- APP 與互動應用程式設計
- 搜尋引擎優化（SEO）
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
│   ├── layout.tsx        # 根布局
│   ├── page.tsx          # 首頁
│   └── globals.css       # 全局樣式 (Tailwind CSS v4)
├── src/
│   └── components/       # React 組件
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Navigation.tsx
│       ├── TechServices.tsx
│       ├── MarketingServices.tsx
│       ├── ContentServices.tsx
│       ├── Philosophy.tsx
│       ├── Contact.tsx
│       └── ui/           # shadcn/ui 組件
├── public/               # 靜態資源
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

## SEO 配置

網站已配置完整的 SEO 優化：

### 已實現
- **Metadata** - 完整的 title、description、keywords
- **Open Graph** - Facebook/LINE 分享預覽 (`og:title`, `og:description`, `og:image`)
- **Twitter Cards** - Twitter 分享預覽
- **Canonical URL** - 避免重複內容問題
- **robots.txt** - 搜尋引擎爬蟲規則 (`public/robots.txt`)
- **sitemap.xml** - 網站地圖 (`public/sitemap.xml`)
- **JSON-LD** - Organization Schema 結構化數據

### 待完成
- [ ] 創建 `public/og-image.png` (1200x630px) 用於社群分享預覽
- [ ] 註冊 [Google Search Console](https://search.google.com/search-console) 並提交 sitemap
- [ ] 添加 Google Analytics 追蹤碼
- [ ] 在 `layout.tsx` 中填入 Google 驗證碼
- [ ] 添加社群媒體連結到 JSON-LD `sameAs` 欄位
