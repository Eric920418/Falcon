export interface VisualAsset {
  src: string
  source: string
  title: string
  prompt: string
  width: number
  height: number
}

export const visualStylePrompt = "Asset: premium 3D cutout illustration for a light corporate website section, landscape 16:9 with a truly transparent alpha background. Only the explicitly listed topic-related objects, arranged as a single clear, compact composition with depth, entirely inside the central 85% for safe placement. Pearl-white matte ceramic, frosted aqua glass and sea-glass mint, restrained brushed metal, soft studio lighting and subtle contact shadows only beneath the objects. No room, no backdrop, no floor, no tabletop, no decorative plinth, no plants, no scenery, no landscape photographs, no random props, no floating decorative blobs, no people, no mascot, no logo, no watermark. No text, no letters, no numerals; screens contain only blank geometric interface shapes and meaningful simple pictograms. Remove all environmental background from the reference and rebuild only these topic-relevant objects. This will be placed directly beside real HTML text, not inside a framed image card."

export const visualAssets: Record<string, VisualAsset> = Object.fromEntries(
  [
  [
    "/",
    "home-hero",
    "台灣企業網站與 AI 系統開發",
    "An open laptop displaying modular website layout blocks, a matching mobile screen, and a small automation flow of three connected task tiles; a magnifying lens inspects one website document. Focus on website building, AI workflow and searchable content. Three-quarter angled composition."
  ],
  [
    "/#build",
    "home-build",
    "網站與 AI 開發",
    "A laptop and mobile screen with matching blank layout blocks connect to a compact database stack and a manual approval switch. Show maintainable website and business-system development. Low oblique composition."
  ],
  [
    "/#grow",
    "home-grow",
    "SEO／GEO 搜尋成長",
    "A magnifying lens examines connected website document cards; one document links to a short answer panel and a final inquiry envelope. Show content discovery leading to a business inquiry, no growth statistics."
  ],
  [
    "/#ai-voice",
    "home-ai-voice",
    "企業 AI 語音客服",
    "A business telephone handset with a speech waveform connects to an appointment-calendar tile, task inbox and a manual handoff headset. Show a purposeful telephone service flow."
  ],
  [
    "/services",
    "services-index",
    "企業網站、AI 開發與搜尋成長服務",
    "Five connected service objects, no shelves: responsive browser and mobile pair, automation cog, business telephone handset, indexing lens, source-linked answer card. Balanced arc, each service clearly identifiable."
  ],
  [
    "/about",
    "about",
    "關於隼訊與負責人蔡翊廉",
    "Four connected software-delivery stages: blank requirements diagram, laptop prototype, verification checklist with check pictograms and a handover folder containing a key and code-bracket pictogram. Show discovery, implementation, acceptance and ownership transfer. No physical consumer product, calipers or bottle."
  ],
  [
    "/pricing",
    "pricing-index",
    "透明定價",
    "A blank estimate sheet, balanced scale and three differently sized project-scope modules containing website, automation and search pictograms. Show scope determining budgets. No currency symbols, numbers or calculator."
  ],
  [
    "/blog",
    "blog-index",
    "部落格",
    "An open reference book connects to three topic cards: responsive website, search lens, and telephone waveform. Show practical knowledge for business website and AI decisions. No generic reading-desk props."
  ],
  [
    "/services/web-development",
    "services-web-development",
    "網站建置與軟體開發",
    "Desktop display, tablet and mobile screen at staggered angles with matching blank website layout components; three fitted reusable component tiles. Show responsive website development."
  ],
  [
    "/services/ai-tools",
    "services-ai-tools",
    "AI 工具開發",
    "Incoming document cards enter a compact automation module and emerge into an organized task tray; a side route leads to a manual approval switch. Show document processing and safe workflow automation."
  ],
  [
    "/services/ai-voice-agent",
    "services-ai-voice-agent",
    "企業 AI 語音客服與電話自動化系統",
    "A telephone handset and speech waveform connect to appointment, customer-record and work-order cards; a clear fallback branch reaches a human-support headset."
  ],
  [
    "/services/seo",
    "services-seo",
    "SEO 搜尋引擎優化",
    "A magnifying lens inspects a small group of connected website documents; an indexing path and maintenance tool beneath the document foundation show crawlability and technical SEO. No robot or vehicle."
  ],
  [
    "/services/geo",
    "services-geo",
    "GEO AI 搜尋優化",
    "A concise answer panel connects to three original source documents through clear citation threads; a lens inspects one source-to-answer connection."
  ],
  [
    "/pricing/web-development",
    "pricing-web-development",
    "網站與系統開發費用",
    "A modular website prototype, CMS drawer, hosting block and maintenance wrench arranged around a blank project estimate folder. Show the concrete components that change a development quote."
  ],
  [
    "/pricing/ai-development",
    "pricing-ai-development",
    "AI 工具開發費用",
    "A modular automation processor, connector pieces, knowledge-document stack and manual approval lever beside a blank estimate sheet. Distinguish integration and acceptance effort."
  ],
  [
    "/pricing/seo",
    "pricing-seo",
    "SEO 搜尋成長費用",
    "A recurring work tray holds an indexing lens, repair wrench, content document and blank report panel; four unmarked calendar tiles communicate ongoing monthly work."
  ],
  [
    "/pricing/geo",
    "pricing-geo",
    "SEO／GEO 搜尋成長費用",
    "A balanced scale weighs linked source-document work against answer-observation panels, with a blank budget sheet. Show evidence and measurement effort, no invented performance."
  ],
  [
    "/blog/ai-voice-customer-service-guide",
    "blog-ai-voice-customer-service-guide",
    "AI 語音客服是什麼？企業導入架構與適用情境",
    "Five connected physical modules: telephone handset, speech waveform, dialogue cards, decision junction and enterprise task tray. One explicit branch ends at a human-support headset."
  ],
  [
    "/blog/ai-voice-customer-service-cost",
    "blog-ai-voice-customer-service-cost",
    "AI 語音客服費用怎麼算？",
    "A telephone handset next to a balanced scale weighing infrastructure modules and usage tokens, with a blank budget folder. No calculator, prices or numbers."
  ],
  [
    "/blog/ai-voice-vs-ivr-human-agent",
    "blog-ai-voice-vs-ivr-human-agent",
    "AI 語音客服、傳統 IVR 與真人客服比較",
    "Three equal connected options: AI waveform with task connector, an IVR telephone with entirely blank tactile keys and branching menu rails, and a human-agent headset. No digits on any telephone keys."
  ],
  [
    "/blog/ai-phone-pbx-crm-integration",
    "blog-ai-phone-pbx-crm-integration",
    "AI 電話如何串接 PBX、CRM、工單與派單系統？",
    "A small business telephone switchboard with blank keys connects by tidy cables to customer-record drawers, a work-order inbox and a dispatch-route card with abstract pins. A spare fallback connector is visible."
  ],
  [
    "/blog/ai-voice-agent-poc-acceptance-checklist",
    "blog-ai-voice-agent-poc-acceptance-checklist",
    "AI 語音客服 POC 怎麼驗收？測試情境、指標與上線門檻",
    "A telephone handset connects to a voice waveform and a verification board with raised checkpoints; mint checks mark passed scenarios, and one open exception path remains. A lens inspects the waveform-to-test junction."
  ],
  [
    "/blog/ai-voice-latency-barge-in-turn-taking",
    "blog-ai-voice-latency-barge-in-turn-taking",
    "AI 語音客服延遲與打斷怎麼測？VAD、Barge-in 與輪替設計",
    "Two speech waveforms approach a turn-taking gate, with a small interruption branch and an unmarked mechanical timer, beside a telephone handset. Show latency and interruption testing."
  ],
  [
    "/blog/ai-call-recording-privacy-security",
    "blog-ai-call-recording-privacy-security",
    "AI 電話錄音與個資怎麼處理？告知、保存、權限與稽核清單",
    "Audio-waveform record cards are protected inside a locked archive drawer; three role-access keys and a blank audit ledger accompany it. One expired recording card moves toward a deletion chute."
  ],
  [
    "/blog/ai-voice-human-handoff-escalation",
    "blog-ai-voice-human-handoff-escalation",
    "AI 語音客服怎麼轉真人？觸發條件、上下文交接與失敗降級",
    "A telephone waveform path reaches an exception gate, then curves toward a support headset while carrying context-document cards. A separate fallback branch leads to a task inbox."
  ],
  [
    "/blog/geo-complete-guide-2026",
    "blog-geo-complete-guide-2026",
    "GEO 生成式引擎優化指南",
    "An open reference book supports a short answer panel linked to three source documents, with a magnifying lens inspecting citations. No scenic photos in any document."
  ],
  [
    "/blog/schema-org-tutorial",
    "blog-schema-org-tutorial",
    "Schema.org 結構化資料教學｜JSON-LD、驗證與常見錯誤",
    "Nested translucent data-document frames fit neatly into a web-page card; aligned key-value slots and a validation lens with check pictogram communicate structured data. No actual code text."
  ],
  [
    "/blog/perplexity-aeo-overview",
    "blog-perplexity-aeo-overview",
    "Perplexity 引用邏輯與 AEO 實作",
    "A frosted answer panel is linked to four distinct source cards by citation threads; a large lens clearly selects one cited source. Asymmetric arrangement, no brand marks."
  ],
  [
    "/blog/google-ai-overview-basics",
    "blog-google-ai-overview-basics",
    "Google AI Overview 與 SEO 的關係",
    "A browser-shaped frame shows a short answer card above three ordinary search-result cards; visible links connect both to the same original source documents."
  ],
  [
    "/blog/website-pricing-2026",
    "blog-website-pricing-2026",
    "2026 台灣網站建置費用｜行情區間、隱藏成本與報價比較",
    "A website prototype beside a blank estimate folder; separate hosting, content and maintenance modules reveal project-cost components. No currency symbols or decorative tools unrelated to maintenance."
  ],
  [
    "/blog/common-seo-mistakes",
    "blog-common-seo-mistakes",
    "常見技術 SEO 問題盤點",
    "A website document has a broken indexing connector, two duplicated page cards and an unmarked slow-loading timer; a repair wrench and lens identify these concrete technical faults."
  ],
  [
    "/blog/ai-customer-service-cost",
    "blog-ai-customer-service-cost",
    "AI 客服自建 vs SaaS 成本比較",
    "Two balanced customer-service systems: custom modular processing blocks and a compact cloud-subscription module, both connected to the same support headset and blank budget ledger."
  ],
  [
    "/blog/how-we-define-good-seo-content",
    "blog-how-we-define-good-seo-content",
    "SEO 內容品質怎麼判斷？E-E-A-T、證據與驗收標準",
    "A reference document with source tabs is checked by a lens and validation stamp; a blank author-identity card and cited evidence stack show accountability and evidence."
  ],
  [
    "/blog/llms-txt-implementation-guide",
    "blog-llms-txt-implementation-guide",
    "llms.txt 是什麼？格式、實作與效果評估",
    "One lightweight plain-text index card sits beside a full website-document library and a crawler-access gate. Its thin connecting path clearly shows a supplementary index, not a magic ranking tool."
  ],
  [
    "/blog/chatgpt-search-citation-observations",
    "blog-chatgpt-search-citation-observations",
    "ChatGPT 搜尋的引用來源：觀察方法與限制",
    "A short AI answer card connects to two cited website documents; an observation lens and dated but completely unmarked sample tiles show citation tracking rather than guaranteed inclusion."
  ],
  [
    "/blog/geo-measurement-guide",
    "blog-geo-measurement-guide",
    "GEO 成效怎麼衡量？Google AI、Bing AI 與 GA4 量測實作",
    "A measurement clipboard compares repeated answer-observation cards, source-citation markers and an inquiry envelope; a small unmarked sampling timer communicates repeatable observation. No rising charts or invented statistics."
  ],
  [
    "/blog/ai-crawler-robots-guide",
    "blog-ai-crawler-robots-guide",
    "AI 爬蟲清單與 robots.txt 決策",
    "A website document library with two access gates, one open and one closed; small crawler-path rails and a shield show permission boundaries. No actual robot or vehicle."
  ],
  [
    "/blog/seo-vendor-evaluation-guide",
    "blog-seo-vendor-evaluation-guide",
    "SEO 公司怎麼選？合約、報表與驗收檢查清單",
    "Three blank vendor-proposal folders are evaluated using an evidence lens, ownership key and acceptance checklist. Equal scale, no brand logos or rankings."
  ],
  [
    "/local/taoyuan-seo",
    "local-taoyuan-seo",
    "桃園 SEO 公司",
    "A small abstract industrial-business storefront cluster sits beside an indexing lens and linked business webpage cards. Service dominates the composition; city reference is only a compact airport-canopy silhouette, not a scenic city image."
  ],
  [
    "/local/taoyuan-web-design",
    "local-taoyuan-web-design",
    "桃園網頁設計",
    "A responsive desktop and mobile website pair connect to a small local manufacturer storefront and product-catalog cards. A subtle compact airport-canopy silhouette suggests Taoyuan business context."
  ],
  [
    "/local/taipei-digital-marketing",
    "local-taipei-digital-marketing",
    "台北數位行銷",
    "A website card, search-content documents and inquiry envelope connect as a marketing flow beside a small abstract urban shop cluster with one slender tower silhouette. Marketing service is the main subject."
  ],
  [
    "/local/taipei-seo",
    "local-taipei-seo",
    "台北 SEO 公司",
    "An indexing lens inspects connected local-business website documents beside a compact abstract urban tower cluster. Focus on content and crawlability, no geographic map or office marker."
  ],
  [
    "/local/xinbei-seo",
    "local-xinbei-seo",
    "新北 SEO 公司",
    "A search lens and linked business webpage cards connect two small storefronts across a compact bridge-shaped connector. Local business search is primary; no scenic city backdrop."
  ],
  [
    "/local/hsinchu-web-design",
    "local-hsinchu-web-design",
    "新竹網頁設計",
    "Desktop and mobile website prototypes with catalog and inquiry modules connect to a small abstract technology-workshop building. Focus on responsive website design for technology businesses."
  ],
  [
    "/compare/seo-vs-geo-vs-aeo",
    "compare-seo-vs-geo-vs-aeo",
    "SEO、GEO、AEO 的共同基礎與差別",
    "Three connected discovery objects share one document foundation: search lens, cited answer panel, and question-response card represented by speech pictograms. Show shared content and differing output."
  ],
  [
    "/compare/ai-voice-vs-chatbot",
    "compare-ai-voice-vs-chatbot",
    "AI 語音客服與文字客服機器人的差別",
    "Two equal interfaces: telephone handset with voice waveform and a mobile screen with blank chat bubbles. Both connect to the same task tray and support-handoff headset."
  ],
  [
    "/compare/wordpress-vs-custom-website",
    "compare-wordpress-vs-custom-website",
    "WordPress 套版與客製化網站的差別",
    "Two equal website-building prototypes: fitted reusable template tiles and individually shaped custom interface modules, with a shared CMS drawer and maintenance wrench. No brand logos or superiority claims."
  ]
].map(([path, id, title, prompt]) => [path, { src: `/visuals/${id}-cutout.webp`, source: 'OpenAI imagegen; transparent cutout', title, prompt, width: 1600, height: 900 }]),
)
