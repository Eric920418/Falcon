import type { BlogContent } from './types'

const datePublished = '2026-05-18'

export const blogPosts: Record<string, BlogContent> = {
  'ai-voice-customer-service-guide': {
    slug: 'ai-voice-customer-service-guide',
    title: 'AI 語音客服是什麼？企業導入架構與適用情境',
    h1: 'AI 語音客服是什麼？企業導入架構與適用情境',
    description:
      '從電話、語音辨識、對話、企業 API 到人工接手，理解 AI 語音客服的完整架構、適用任務、風險與導入驗收方式。',
    keywords: ['AI 語音客服是什麼', 'AI 語音客服系統', 'AI 電話客服', 'VoiceBot', 'AI Voice Agent'],
    datePublished: '2026-08-03',
    dateModified: '2026-08-11',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'AI 語音客服是能在電話中辨識語音、理解任務、回覆使用者，並呼叫 CRM、工單、預約或派單系統的軟體流程。它不是單一模型，也不是把網站聊天機器人接上麥克風；能否營運，取決於電話串接、欄位確認、業務規則、系統動作與人工接手是否一起設計。',
    toc: ['完整系統有哪些層', '適合與不適合的任務', '錯誤如何降級', 'GoGoCha 實作證據', '導入前驗收'],
    sections: [
      {
        heading: '一套 AI 語音客服系統有哪些層？',
        body:
          '完整架構至少分成電話、語音、對話、工作流及企業系統五層。電話層處理代表號、PBX、SIP 與轉接；語音層負責辨識和合成；對話層判斷意圖與追問；工作流層驗證欄位、權限和狀態；最後才由 API 建立工單、預約、CRM 紀錄或派單。只展示自然對話，無法證明後面四層能穩定執行。',
        table: {
          caption: '從來電到企業系統動作的責任分層',
          headers: ['層級', '主要責任', '不能省略的驗收'],
          rows: [
            ['電話與路由', '代表號、PBX／SIP、排隊、轉接與溢出', '尖峰來電、斷線、轉人工與號碼沿用'],
            ['語音與對話', '語音辨識、合成、意圖判斷與追問', '口音、噪音、專有名詞與低信心處理'],
            ['工作流', '欄位確認、權限、規則、狀態與重複請求', '資料不足、使用者改口、冪等與逾時'],
            ['企業系統', 'CRM、工單、預約、派單或通知', '建立、查詢、取消、失敗回報與人工待辦'],
          ],
        },
      },
      {
        heading: '哪些電話任務適合先導入 AI？',
        body: '優先選擇重複性高、欄位明確、結果可驗證，且發生錯誤後有補救方式的任務：',
        items: [
          '服務狀態、營業資訊與案件進度查詢',
          '蒐集地址、設備、時段等資料後建立工單',
          '依明確規則建立預約、取消或改期申請',
          '建立派車、物流或到府服務任務',
          '把整理後的內容交給真人繼續處理',
        ],
      },
      {
        heading: '哪些情境不該第一階段交給 AI？',
        body:
          '醫療判斷、法律結論、付款授權、身分爭議、重大客訴及不可逆的高金額動作，不適合作為第一個自動化任務。這些情境即使保留語音整理，也應由真人確認後執行。判斷標準不是 AI 能不能說出答案，而是說錯時能否發現、停止並補救。',
      },
      {
        heading: 'AI 聽錯或系統失敗時怎麼降級？',
        body:
          '重要欄位要讓使用者重述確認，後端再做格式與業務規則驗證。連續誤解、信心不足、敏感關鍵字或使用者要求時，系統應把已確認欄位與對話摘要一起交給人工。若企業 API 逾時，應進入重試、佇列或待辦狀態，不能先向使用者回報任務已完成。',
      },
      {
        heading: '錄音、逐字稿與個資要先決定邊界',
        body:
          '電話流程可能接觸姓名、電話、地址、訂單與通話內容。導入前要由企業確認告知方式、蒐集目的、可存取角色、保存期限與刪除流程；開發端則把權限、遮罩、稽核與環境隔離落實。不是所有對話都需要永久保存，也不該把真實客戶錄音直接拿來當未隔離的測試資料。涉及特定產業法規時，仍應由企業法務或合規角色確認。',
      },
      {
        heading: 'GoGoCha 證明了什麼？',
        body:
          '隼訊公開的 GoGoCha 案例把 AI 電話入口、網站與 LINE 的叫車需求接到同一套即時派單後端，再同步至司機／乘客 App 與營運介面。公開資料能證明系統範圍與技術架構，但沒有公開營收、人力節省、接通率或真實通話 SLA，因此我們不把這些數字寫成成果。',
      },
      {
        heading: '導入前應先定義哪些驗收條件？',
        body: '不要只驗收「能對話」，至少要用代表性真實情境檢查：',
        items: [
          '必要欄位取得率與重述確認方式',
          '低信心、敏感事項與人工接手條件',
          'API 逾時、重複請求與斷線後的任務狀態',
          '尖峰併發、等待、轉接與溢出路由',
          '錄音、逐字稿的告知、權限、保存與刪除',
        ],
      },
    ],
    faq: [
      {
        question: 'AI 語音客服和電話機器人是一樣的嗎？',
        answer: '市場上常混用。採購時不要只看名稱，要確認是否能自然追問、呼叫企業系統、驗證欄位，以及在不確定時轉人工。',
      },
      {
        question: '需要先換掉公司現有電話系統嗎？',
        answer: '不一定。是否能沿用要看電信商、PBX、SIP、代表號與轉接方式，應先做環境盤點再決定。',
      },
      {
        question: 'AI 語音客服多久可以上線？',
        answer:
          '依環境而定：單一任務的 POC 通常以週計，含 PBX 與企業系統整合的正式版以月計。時程的關鍵變數是企業 API 的成熟度與資料整理進度，不是模型本身。',
      },
      {
        question: 'AI 語音客服能處理台語或多種語言嗎？',
        answer:
          '取決於語音辨識引擎對該語言與口音的實際支援程度。導入前用真實客群的錄音樣本實測辨識率，比看供應商規格表可靠；實測沒過就先縮小服務範圍。',
      },
    ],
    relatedLinks: [
      { label: 'AI 語音客服 POC 驗收清單', href: '/blog/ai-voice-agent-poc-acceptance-checklist' },
      { label: 'AI 語音客服延遲與打斷測試', href: '/blog/ai-voice-latency-barge-in-turn-taking' },
      { label: 'AI 電話如何串接 PBX 與 CRM', href: '/blog/ai-phone-pbx-crm-integration' },
    ],
    relatedServices: ['ai-voice-agent', 'ai-tools'],
    relatedCaseStudies: ['gogocha-ai-dispatch'],
  },
  'ai-voice-customer-service-cost': {
    slug: 'ai-voice-customer-service-cost',
    title: 'AI 語音客服費用：建置、電話、模型與維運成本',
    h1: 'AI 語音客服費用怎麼算？',
    description:
      'AI 語音客服沒有單一公定價。本文拆解建置費、電信與模型用量、系統整合、併發容量、人工席位及後續維運成本。',
    keywords: ['AI 語音客服費用', 'AI 電話客服費用', '電話機器人價格', 'VoiceBot 費用', 'AI 電話系統報價'],
    datePublished: '2026-08-03',
    dateModified: '2026-08-11',
    qualityTier: 'production',
    intent: 'commercial',
    intro:
      'AI 語音客服費用通常分成一次性的設計與整合，以及持續發生的電話、語音辨識、語音合成、模型、主機和維運成本。若廠商沒有先問進線或外撥、尖峰併發、既有 PBX、企業 API、錄音政策與人工席位，就給出一個看似精準的總價，那個數字多半還不足以代表可上線的範圍。',
    toc: ['一次性建置', '持續用量成本', '併發的影響', '容易漏算的工作', '取得可比較報價'],
    sections: [
      {
        heading: '一次性建置費包含哪些工作？',
        body: '客製專案的建置費通常不是買模型授權，而是把企業流程做成可測試、可回復的系統：',
        items: [
          '電話環境、任務與風險盤點',
          '對話、必要欄位、確認與人工接手設計',
          'PBX、SIP、代表號或雲端電話串接',
          'CRM、ERP、工單、預約或派單 API 整合',
          '權限、紀錄、錯誤重試、測試與部署',
        ],
      },
      {
        heading: '每月或每通電話會產生哪些成本？',
        body:
          '持續成本可能包含電話號碼與通話分鐘、語音辨識、語音合成、語言模型、伺服器、監控、錄音儲存及廠商維運。不同供應商的計價單位不同，不能只比較單一模型的每分鐘價格；一通電話可能同時使用電信、語音和模型服務。報價應清楚區分第三方實際用量與開發商的維運費。',
        table: {
          caption: 'AI 電話預算應拆成可核對的成本項目',
          headers: ['成本類型', '常見計價方式', '估價前需要的資料'],
          rows: [
            ['電話與線路', '號碼月租、分鐘或同時線路', '進線／外撥、國內外、尖峰併發'],
            ['語音與模型', '音訊分鐘、字元、token 或請求量', '語言、平均通話長度、任務複雜度'],
            ['企業整合', '一次性開發與測試', 'PBX、API、權限、測試環境與資料契約'],
            ['營運與維護', '月費、工時或 SLA 層級', '監控、錄音保存、席位、值班與變更頻率'],
          ],
        },
      },
      {
        heading: '為什麼尖峰併發比平均通話量更重要？',
        body:
          '平均每天一百通，可能平均分散，也可能集中在短時間。後者需要更多同時線路、語音處理容量、企業 API 吞吐與人工溢出席位。容量若只按月總分鐘估算，尖峰時仍可能排隊或失敗。因此應提供尖峰時段、同時來電與可接受等待時間，而不是只給每月通數。',
      },
      {
        heading: '最容易被漏算的成本是什麼？',
        body: '以下項目常在展示版之後才出現，卻直接影響能否正式營運：',
        items: [
          '整理專有名詞、地址、產品與知識庫資料',
          '企業系統沒有 API 時的改造或中介層',
          '低信心對話的人工接手與席位流程',
          '錄音告知、權限、保存、刪除與稽核',
          '上線後持續檢查誤判、流程變更與供應商異常',
        ],
      },
      {
        heading: '怎麼取得真正可比較的報價？',
        body:
          '請所有廠商用同一份範圍回覆：通話方向、號碼與 PBX、尖峰併發、語言、任務、必要欄位、企業 API、人工接手、錄音政策、部署方式、預估用量、維運責任及驗收標準。若其中一份只報語音模型，另一份包含電話與系統整合，兩個總價不能直接比較。',
      },
      {
        heading: '估價情境應該怎麼寫才可比較？',
        body:
          '先用一個可被驗收的情境描述需求，例如「上班時間進線、尖峰同時三通、蒐集五個必要欄位、建立工單，低信心與客訴轉兩個人工席位」。再要求廠商分別列出 POC、正式建置、每月固定費、預估用量及超量單價。這不是公開報價承諾，而是把未知條件攤開，避免上線後才發現電話、錄音或人工席位不在範圍內。',
      },
      {
        heading: '為什麼隼訊不公開一個 AI 電話起價？',
        body:
          '一般聊天機器人的起價不能代表電話專案。電話系統多了電信、即時性、併發、錄音、人工席位與任務失敗責任；在沒有看過環境前刊登低起價，容易讓企業誤以為完整範圍都包含。隼訊先做需求與環境盤點，再分開列建置、第三方用量及維運。',
      },
    ],
    faq: [
      {
        question: '可以先做小規模 POC 嗎？',
        answer: '可以，而且建議只選一個規則清楚、可補救的任務驗證。POC 仍要包含失敗與人工接手，不能只演示順利對話。',
      },
      {
        question: '模型費是不是全部成本？',
        answer: '不是。電話、語音辨識、語音合成、主機、儲存、監控、企業整合與維運都可能另外計費。',
      },
      {
        question: 'AI 語音客服一定比真人客服便宜嗎？',
        answer:
          '不一定。通話量大且任務重複時，攤薄後的每通成本優勢明顯；量小或例外情境多時，省下的人力可能補不回建置與維運成本。先用自己的通話量試算，再決定要不要做。',
      },
      {
        question: '報價單上要出現哪些項目才算完整？',
        answer:
          '至少分開列出：一次性建置、電話與線路用量、語音與模型用量、維運月費與超量單價。只有一個總價的報價既無法跨廠商比較，也難以驗收。',
      },
    ],
    relatedLinks: [
      { label: 'AI 語音客服 POC 驗收清單', href: '/blog/ai-voice-agent-poc-acceptance-checklist' },
      { label: 'AI、IVR 與真人客服怎麼選', href: '/blog/ai-voice-vs-ivr-human-agent' },
      { label: 'AI 電話錄音、個資與資安', href: '/blog/ai-call-recording-privacy-security' },
    ],
    relatedServices: ['ai-voice-agent', 'ai-tools'],
    relatedCaseStudies: ['gogocha-ai-dispatch'],
  },
  'ai-voice-vs-ivr-human-agent': {
    slug: 'ai-voice-vs-ivr-human-agent',
    title: 'AI 語音客服、IVR 與真人客服怎麼選？',
    h1: 'AI 語音客服、傳統 IVR 與真人客服比較',
    description:
      '比較 AI 語音客服、傳統按鍵式 IVR 與真人客服的優缺點、適用任務、錯誤風險及混合式導入方式。',
    keywords: ['AI 語音客服 IVR 比較', 'AI 電話 真人客服', '電話機器人 比較', 'AI IVR', 'VoiceBot 比較'],
    datePublished: '2026-08-03',
    dateModified: '2026-08-11',
    qualityTier: 'production',
    intent: 'commercial',
    intro:
      'AI 語音客服、傳統 IVR 和真人客服不是三選一。固定分類、風險低且分支少的任務可用 IVR；需要理解自然說法並操作系統的重複任務可評估 AI；涉及情緒、例外、重大權益或不可逆決策時，真人仍是主要處理者。多數企業更適合混合式架構。',
    toc: ['IVR 適合什麼', 'AI 適合什麼', '真人不可替代處', '混合式架構', '選型問題'],
    sections: [
      {
        heading: '傳統 IVR 的優勢與限制',
        body:
          'IVR 以按鍵或固定語音選單分流，規則清楚、結果可預期、系統風險容易控制。它適合查分機、選部門、輸入固定編號等短流程；缺點是分支一多就難走，使用者若不知道該選哪一項，仍需要轉人工。不要因為 AI 新就把原本簡單可靠的 IVR 全部換掉。',
      },
      {
        heading: 'AI 語音客服適合處理什麼？',
        body:
          'AI 的優勢是能理解較自然的說法、針對缺少資訊追問，並把結果轉成企業系統動作。它適合重複但說法多變的資料蒐集、案件建立、狀態查詢與派單。限制是語音辨識與模型都可能誤判，因此必須用欄位確認、後端規則與人工接手把錯誤限制在可補救範圍。',
      },
      {
        heading: '哪些工作仍應由真人負責？',
        body:
          '重大客訴、情緒安撫、合約與法律爭議、醫療判斷、付款授權、身分異常及跨部門例外協調，需要理解脈絡、承擔責任與彈性判斷。AI 可以整理已知資料、查找紀錄或建立待辦，但不應假裝自己有完整決策權。',
      },
      {
        heading: '實務上更穩的是混合式架構',
        body: '常見分工不是「AI 取代真人」，而是讓每一層處理自己擅長的部分：',
        items: [
          'IVR：處理最固定的分流、身分輸入與法定告知',
          'AI：處理自然語句、追問、資料整理與低風險系統動作',
          '真人：處理例外、敏感決策、客訴與低信心對話',
          '後端：統一驗證權限、資料格式、重試、狀態與稽核',
        ],
        table: {
          caption: '依任務特性選擇 IVR、AI、真人或混合流程',
          headers: ['判斷面向', 'IVR', 'AI 語音客服', '真人客服'],
          rows: [
            ['輸入方式', '按鍵或固定選項', '自然語句與多輪追問', '自然對話與彈性判斷'],
            ['適合任務', '分機、編號、短分流', '資料蒐集、查詢、低風險系統動作', '客訴、例外、敏感或高權益決策'],
            ['主要風險', '選單過深、找不到選項', '辨識與模型誤判、錯誤動作', '等待時間、人力容量與一致性'],
            ['必要安全網', '隨時可轉人工', '欄位確認、後端驗證、低信心轉接', '知識、權限、紀錄與主管支援'],
          ],
        },
      },
      {
        heading: '企業選型前應回答哪些問題？',
        body: '若以下問題無法回答，先別急著選供應商或模型：',
        items: [
          '來電者最常要完成的任務是什麼？',
          '哪些欄位錯了可以補救，哪些絕對不能錯？',
          '尖峰時同時幾通、可接受等多久？',
          'AI 要呼叫哪些企業系統與權限？',
          '何時轉人工、轉接後要帶哪些上下文？',
        ],
      },
      {
        heading: 'GoGoCha 採用的是哪種思路？',
        body:
          'GoGoCha 的公開實作重點是讓電話、網站與 LINE 的叫車需求進入共用派單後端，而非做一個只會聊天的語音展示。這種架構仍保留人工介入，並以 App、後台和即時通知承接任務狀態，符合「AI 處理重複入口、後端控制任務、人工處理例外」的混合式方向。',
      },
      {
        heading: '什麼情況只做 IVR 或只增加真人更合理？',
        body:
          '如果主要需求只是依部門分流、輸入固定編號或播放法定告知，既有 IVR 往往更便宜、可預期。若電話量不高但每通都涉及複雜客訴、談判或專業判斷，先改善真人席位、知識與 CRM 畫面可能更有效。AI 的價值應來自重複任務與系統整合，不是為了在採購簡報上出現 AI。',
      },
    ],
    faq: [
      {
        question: 'AI 一定比 IVR 好嗎？',
        answer: '不一定。固定分流用 IVR 通常更簡單可控；需要理解自然說法與多輪追問時，AI 才有明顯價值。',
      },
      {
        question: '導入 AI 後還需要客服席位嗎？',
        answer: '通常需要，只是席位會更集中處理例外、敏感事項與高價值對話。接手規則應在上線前完成驗收。',
      },
      {
        question: '現有 IVR 可以跟 AI 並存嗎？',
        answer:
          '可以，而且常是最穩的路徑：IVR 保留法定告知與固定分流，AI 承接自然語句任務，兩者接到同一套後端與人工席位。不需要為了導入 AI 把運作正常的 IVR 全部換掉。',
      },
    ],
    relatedLinks: [
      { label: 'AI 語音客服怎麼轉真人', href: '/blog/ai-voice-human-handoff-escalation' },
      { label: 'AI 語音客服 POC 驗收清單', href: '/blog/ai-voice-agent-poc-acceptance-checklist' },
      { label: 'AI 語音客服費用怎麼算', href: '/blog/ai-voice-customer-service-cost' },
    ],
    relatedServices: ['ai-voice-agent', 'ai-tools'],
    relatedCaseStudies: ['gogocha-ai-dispatch'],
  },
  'ai-phone-pbx-crm-integration': {
    slug: 'ai-phone-pbx-crm-integration',
    title: 'AI 電話如何串接 PBX、CRM、工單與派單系統',
    h1: 'AI 電話如何串接 PBX、CRM、工單與派單系統？',
    description:
      '拆解企業 AI 電話的電話層、對話層、工作流與企業系統整合，包含 PBX／SIP、資料契約、失敗重試與人工接手。',
    keywords: ['AI 電話 PBX 串接', 'AI 電話 CRM 串接', 'SIP AI 客服', 'AI 電話 工單', 'AI 電話 派單'],
    datePublished: '2026-08-03',
    dateModified: '2026-08-03',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'AI 電話串接不是一條 API 就完成。電話層負責號碼、路由與轉接；對話層把語音整理成結構化欄位；工作流層驗證權限、規則與狀態；CRM、工單、預約或派單系統才負責真正的業務動作。四層責任若沒有拆開，任何一層失敗都可能變成重複建單或錯誤承諾。',
    toc: ['電話層', '資料契約', '企業 API', '失敗重試', '人工接手', 'POC'],
    sections: [
      {
        heading: 'PBX、SIP 與 AI 各自負責什麼？',
        body:
          'PBX 管理分機、路由、排隊與轉接；SIP 是常見的語音通訊協定；AI 則處理辨識、理解與回覆。企業是否能沿用代表號，要看電信商、PBX 能力與既有合約。AI 廠商不能只說「支援 SIP」就假設所有號碼、錄音、轉接和併發需求都已解決。',
      },
      {
        heading: '對話內容要先轉成資料契約',
        body:
          '企業系統不應直接接收一整段自然語句，而要定義必要欄位、格式、來源、確認狀態與唯一請求識別。例如維修工單可能需要設備、地址、聯絡方式、可服務時段與問題分類。AI 只能提出候選值，重要欄位經使用者確認和後端驗證後才能執行。',
      },
      {
        heading: 'CRM、工單與派單 API 要檢查什麼？',
        body: '串接前至少確認以下介面條件：',
        items: [
          '有沒有正式 API、測試環境與權限模型',
          '建立、查詢、更新與取消的責任歸屬',
          '如何避免相同通話重複建立案件',
          '回應逾時時能否查詢最終狀態',
          '事件或 webhook 是否能把後續狀態同步回來',
        ],
      },
      {
        heading: 'API 逾時時，AI 不能先說成功',
        body:
          '網路逾時不代表任務一定失敗，也不代表一定成功。系統應使用唯一識別、冪等處理、重試佇列和狀態查詢，避免重複建單。若無法在通話內確認結果，應明確告知已轉入待確認，並建立人工待辦或後續通知，而不是為了讓對話順暢就回覆「已完成」。',
      },
      {
        heading: '人工接手要帶走哪些上下文？',
        body:
          '至少包含來電來源、已確認欄位、未確認問題、對話摘要、系統查詢結果與失敗原因。原始錄音或逐字稿是否提供給席位，要依告知、權限與保存政策決定。若只把電話轉過去、不帶任何上下文，使用者仍得全部重講，自動化價值會被打折。',
      },
      {
        heading: 'POC 應該怎麼驗證整合？',
        body:
          '選一個業務任務，用實際電話環境和測試 API 驗證順利、資料不足、辨識錯誤、重複請求、API 逾時、企業系統拒絕、使用者改口及人工接手。驗收結果要能從後台追蹤每一步狀態，而不是只聽一段預錄的理想對話。',
      },
      {
        heading: 'GoGoCha 的整合重點',
        body:
          'GoGoCha 公開架構使用 Express、PostgreSQL、Redis、BullMQ 與 Socket.IO，把電話、網站與 LINE 入口接到共用派單流程。資料庫保存任務狀態，佇列承接非同步工作，即時通訊同步至 App 與營運介面。這個案例證明的是跨入口工作流，不代表所有企業 PBX 都能原封不動套用。',
      },
    ],
    faq: [
      {
        question: '沒有 API 的舊系統也能串嗎？',
        answer: '要個別評估。可能需要先替舊系統補 API 或中介層；直接操作畫面的自動化較脆弱，不應假裝和正式 API 同樣可靠。',
      },
      {
        question: 'SIP 串上就算完成 AI 電話系統嗎？',
        answer: '不是。SIP 只解決部分語音傳輸，後面仍有對話、資料驗證、企業系統動作、監控、失敗降級與人工接手。',
      },
      {
        question: '整合時要開放哪些系統權限給開發商？',
        answer:
          '原則是最小權限：測試環境先行、正式環境只開必要的 API 範圍、每個動作留稽核紀錄。若對方要求整包管理員權限才能開工，應把它當成風險訊號，先問清楚用途。',
      },
    ],
    relatedLinks: [
      { label: 'AI 語音客服 POC 驗收清單', href: '/blog/ai-voice-agent-poc-acceptance-checklist' },
      { label: 'AI 語音客服延遲與打斷測試', href: '/blog/ai-voice-latency-barge-in-turn-taking' },
      { label: 'AI 語音客服怎麼轉真人', href: '/blog/ai-voice-human-handoff-escalation' },
    ],
    relatedServices: ['ai-voice-agent', 'ai-tools'],
    relatedCaseStudies: ['gogocha-ai-dispatch'],
  },
  'ai-voice-agent-poc-acceptance-checklist': {
    slug: 'ai-voice-agent-poc-acceptance-checklist',
    title: 'AI 語音客服 POC 怎麼驗收？測試情境、指標與上線門檻',
    h1: 'AI 語音客服 POC 怎麼驗收？測試情境、指標與上線門檻',
    description:
      '用代表性通話、黃金測試案例與失敗情境驗收 AI 語音客服，檢查任務完成、誤解、欄位正確性、API 執行、延遲與人工接手。',
    keywords: ['AI 語音客服 POC', 'AI 電話客服驗收', 'VoiceBot POC', 'AI 電話測試', 'AI 客服上線門檻'],
    datePublished: '2026-08-30',
    dateModified: '2026-08-30',
    qualityTier: 'production',
    intent: 'commercial',
    intro:
      'AI 語音客服 POC 的目的不是錄出一段順利 Demo，而是用有限範圍回答三件事：真實來電能否完成指定任務、失敗時能否被發現與接手、整體成本是否值得進入正式建置。只驗收聲音自然或回答流暢，無法證明系統能正確建立工單、查詢狀態或保護重要資料。',
    toc: ['先鎖定任務', '建立測試案例', '定義指標', '設定門檻', '失敗情境', 'GoGoCha 證據邊界', '正式上線'],
    sections: [
      {
        heading: '先把 POC 縮成一個可判斷的業務任務',
        body:
          'POC 應選擇規則相對明確、通話量可估、結果能從後台核對，且發生錯誤後可以補救的任務。例如蒐集維修資料後建立工單，比「處理所有客服問題」更適合驗證。開始前要寫清楚通話入口、必要欄位、可執行動作、禁止動作、人工接手條件，以及企業 API 和測試環境由誰提供。範圍若無法畫出邊界，驗收就只會變成主觀試聽。',
      },
      {
        heading: '先保存人工流程基準，再談 AI 改善',
        body:
          '沒有基準值就無法判斷 POC 是否改善。至少記錄目前任務由誰處理、成功如何定義、常見錯誤、尖峰等待、需要重新輸入的資料，以及人工如何補救。基準不一定要是漂亮的 KPI；一小批經確認的實際案件，也比供應商自行假設合理。正式比較時要使用相同任務、相近來電條件與一致的成功定義。',
      },
      {
        heading: '黃金測試案例要包含正常、模糊與失敗路徑',
        body:
          '先由業務、客服與系統負責人共同寫出輸入、預期追問、必要欄位、允許動作與最終狀態，再交給系統重複測試。案例不能全部使用照稿念的標準句，應包含使用者改口、資料缺漏、同音字、背景噪音、沉默、插話、API 逾時及要求真人。涉及姓名、地址、金額或身分時，還要測試 AI 是否會重述確認，而不是只看逐字稿像不像。',
        table: {
          caption: 'AI 語音客服 POC 的最低測試矩陣',
          headers: ['情境', '要觀察什麼', '可核對的結果'],
          rows: [
            ['正常完成', '必要欄位、追問順序與工具呼叫', 'CRM／工單／派單狀態與通話紀錄一致'],
            ['資料模糊或改口', '是否重新確認並覆蓋舊值', '只保留最後確認資料，不重複建單'],
            ['語音誤解', '低信心、重問與轉人工條件', '錯誤未被直接寫入正式系統'],
            ['API 逾時或拒絕', '回覆、重試、待辦與冪等', '不先宣稱成功，後台可追蹤最終狀態'],
            ['要求真人或高風險事項', '轉接路由與上下文交接', '人工收到已確認欄位與未解問題'],
          ],
        },
      },
      {
        heading: '指標要對應任務，不要只看辨識率',
        body:
          '語音辨識正確不代表任務成功，逐字稿有錯也不一定影響結果。驗收應同時看任務完成、必要欄位正確性、工具呼叫成功、誤解或 fallback、計畫性轉接、異常升級、使用者放棄、回應延遲及人工修正量。每一項都要有明確分母與資料來源，例如以「符合範圍的測試通話」為分母，並由電話紀錄、模型事件、API log 與企業系統最終狀態交叉核對。',
        table: {
          caption: '從對話品質到系統結果的驗收口徑',
          headers: ['指標', '定義方式', '避免的誤判'],
          rows: [
            ['任務完成率', '符合範圍且最終狀態正確的通話占比', '不能把只完成對話算成完成工單'],
            ['必要欄位正確性', '經確認欄位與真實答案相符程度', '平均值不可掩蓋地址、金額等關鍵欄位'],
            ['工具執行成功', 'API 動作成功且沒有重複或錯誤副作用', '網路逾時不能直接算失敗或成功'],
            ['誤解與 fallback', '系統無法理解或進入重問的頻率', '要區分合理追問與無效循環'],
            ['人工接手', '計畫轉接、異常升級與使用者主動要求', '轉人工不是一律失敗，要依原因分類'],
          ],
        },
      },
      {
        heading: '上線門檻必須依錯誤成本設定',
        body:
          '沒有一條及格線適用於所有 AI 電話。查詢營業時間與修改付款資料的錯誤成本完全不同；同一個任務中，地址錯一個字也可能比語氣不自然嚴重。做法是先把錯誤分為可自動重試、需要人工覆核、不得自動執行三類，再為每類指定門檻與責任人。若樣本不足，只能說 POC 尚未發現特定問題，不能推論正式環境一定達標。',
      },
      {
        heading: 'POC 驗收也要測失敗後能不能營運',
        body:
          '正式服務一定會遇到電信斷線、模型逾時、企業 API 異常、人工席位滿線及供應商維護。POC 應確認每種異常會回覆什麼、資料停在哪個狀態、誰會收到通知，以及恢復後能否安全重試。前端與營運後台要完整顯示可理解的錯誤，不能把例外吞掉後讓客服以為案件已成立。',
      },
      {
        heading: 'GoGoCha 能作為架構證據，不是通用驗收數據',
        body:
          'GoGoCha 公開案例可證明隼訊做過 AI 電話入口、共用派單後端、佇列、即時通知，以及網站、LINE、App 與後台整合。案例沒有公開辨識率、平均延遲、接通率、人力節省或正式通話 SLA，因此這些數字不能拿來替另一個企業設定門檻。新的 POC 仍要用該企業的電話環境、客群語言與任務資料重新驗收。',
      },
      {
        heading: '從 POC 進正式版前要留下哪些交付物？',
        body:
          '至少留下版本固定的測試案例、結果明細、未解風險、系統架構、資料流、權限、監控、人工接手與回復流程。正式版還要重新測尖峰併發、真實 PBX／SIP、備援、錄音政策與營運權限。POC 通過只表示值得繼續建置，不表示可以原封不動直接承擔正式流量。',
      },
    ],
    faq: [
      {
        question: 'AI 語音客服 POC 要測多少通才夠？',
        answer:
          '沒有通用數字。樣本要覆蓋主要意圖、常見說法、重要失敗路徑與不同來電條件；高風險或低頻例外不能只靠隨機通話碰運氣，必須刻意建立測試案例。',
      },
      {
        question: 'POC 能只用網頁麥克風測試嗎？',
        answer:
          '可以用來早期確認對話，但不能替代真實電話驗收。正式 POC 至少要加入實際電話路由、音訊品質、轉接與企業系統，否則會漏掉電信延遲、斷線和 PBX 限制。',
      },
      {
        question: '轉人工很多就代表 POC 失敗嗎？',
        answer:
          '不一定。高風險事項的計畫性轉接可能正是正確設計；要分開看計畫轉接、使用者主動要求與系統誤解造成的異常升級。',
      },
    ],
    relatedLinks: [
      { label: 'AI 語音客服完整導入架構', href: '/blog/ai-voice-customer-service-guide' },
      { label: 'AI 語音客服延遲與打斷測試', href: '/blog/ai-voice-latency-barge-in-turn-taking' },
      { label: 'AI 語音客服怎麼轉真人', href: '/blog/ai-voice-human-handoff-escalation' },
    ],
    relatedServices: ['ai-voice-agent'],
    relatedCaseStudies: ['gogocha-ai-dispatch'],
    references: [
      {
        name: 'Evaluate agents with golden test cases and scenarios',
        url: 'https://docs.cloud.google.com/gemini-enterprise-cx/cx-agent-studio/evaluation',
        publisher: 'Google Cloud Documentation',
      },
      {
        name: 'Voice virtual agent dashboard metrics',
        url: 'https://docs.cloud.google.com/contact-center/ccai-platform/docs/voice-virtual-agent-dashboard',
        publisher: 'Google Cloud Documentation',
        updatedAt: '2026-08-26',
      },
    ],
  },
  'ai-voice-latency-barge-in-turn-taking': {
    slug: 'ai-voice-latency-barge-in-turn-taking',
    title: 'AI 語音客服延遲與打斷怎麼測？VAD、Barge-in 與輪替設計',
    h1: 'AI 語音客服延遲與打斷怎麼測？VAD、Barge-in 與輪替設計',
    description:
      '拆解 AI 語音客服的電信、VAD、模型、工具與合成延遲，說明插話、錯誤截斷、沉默、噪音及 p50／p95 測試方式。',
    keywords: ['AI 語音客服延遲', 'VoiceBot 延遲', 'VAD 語音客服', 'Barge-in', 'AI 電話打斷'],
    datePublished: '2026-08-30',
    dateModified: '2026-08-30',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'AI 語音客服聽起來卡頓，原因不一定在模型。電話網路、語音活動偵測、輪次判斷、模型推理、企業 API 和語音合成都會累積等待；調快其中一段，也可能把使用者尚未說完的內容截斷。正確測法不是只記一個「回覆幾秒」，而是把延遲、插話與任務結果一起觀察。',
    toc: ['延遲鏈', 'VAD 與輪次', 'Barge-in', '量測口徑', '真實環境測試', '長工具呼叫', '證據邊界'],
    sections: [
      {
        heading: '一通 AI 電話的等待時間從哪裡來？',
        body:
          '來電先經過電信與 SIP／PBX 路由，音訊送進語音處理後，系統要判斷使用者是否說完，再由模型理解、呼叫企業工具，最後把回覆轉成語音送回電話。若查詢 CRM 或建立工單需要等待，工具時間也會進入體感延遲。只量模型首 token，會忽略來電者真正感受到的整條路徑。',
        table: {
          caption: 'AI 語音客服的端到端延遲拆解',
          headers: ['階段', '量測起訖', '常見風險'],
          rows: [
            ['電話傳輸', '來電音訊進入與離開語音平台', '電信路由、編解碼、網路抖動與封包遺失'],
            ['輪次判斷', '使用者停止說話到系統確認結束', '等待過久或太早截斷'],
            ['模型回應', '送出有效輸入到產生可播放內容', '上下文過長、模型選擇與複雜推理'],
            ['工具呼叫', '發出 API 到取得可用結果', '企業系統逾時、重試與排隊'],
            ['語音播放', '文字或音訊產生到電話端開始播放', '合成緩衝、首包等待與播放取消'],
          ],
        },
      },
      {
        heading: 'VAD 解決的是「有沒有在說話」，輪次判斷是「說完了嗎」',
        body:
          'Server VAD 通常依音量與沉默時間判斷語音開始及停止；Semantic VAD 會進一步估計語意是否尚未完成。等待較久可降低截斷，卻會增加停頓；反應太快則可能把「嗯……我想改成」切成兩輪。參數不能全站共用一個答案，姓名、長地址、代碼與開放式描述需要的停頓容忍度不同。',
      },
      {
        heading: 'Barge-in 是插話控制，不等於結束輪次',
        body:
          'Barge-in 讓來電者在 AI 播放期間插話並停止原本回覆，適合更正資訊、跳過已知內容與縮短選單。它和系統因沉默判斷使用者已說完是兩件事。一般對話通常應允許插話；錄音告知、必要揭露或重要欄位確認是否允許打斷，則要依企業流程與法務要求個別決定。把 Barge-in 全域關閉會讓對話遲鈍，把它全域開啟也可能讓必要內容沒播完。',
      },
      {
        heading: '不要只報平均延遲，要同時看 p50、p95 與錯誤輪替',
        body:
          '平均值容易被少數極慢或大量極快樣本扭曲。p50 用來看一般通話體感，p95 用來看較差但仍常遇到的尾端；另外記錄使用者停止說話到首段回覆、工具完成時間、錯誤截斷、錯誤等待及插話未生效。每筆樣本還要標記任務、網路、語言和是否呼叫企業 API，否則不同情境混在一起無法定位問題。',
        table: {
          caption: '延遲與輪替應一起記錄',
          headers: ['觀察項目', '事件定義', '判讀用途'],
          rows: [
            ['首段回應延遲', '確認輪次結束到使用者聽見回覆', '區分輪次、模型與合成等待'],
            ['工具等待', 'API 發出到結果可用', '找出企業系統或第三方瓶頸'],
            ['錯誤截斷', '使用者未說完就開始回覆', '調整 VAD、輪次與欄位策略'],
            ['錯誤等待', '使用者已說完但系統持續沉默', '檢查結束判斷、逾時與工具狀態'],
            ['插話成功', '使用者開口後原回覆停止並保留新輸入', '驗證取消播放與上下文一致性'],
          ],
        },
      },
      {
        heading: '真實電話測試要加入噪音、回音、口音與長欄位',
        body:
          '網頁麥克風在安靜辦公室的結果，不能代表手機、車內、免持、藍牙耳機或市話。測試至少要涵蓋背景人聲、回音、訊號不穩、快慢語速、常見口音、數字、英數代碼與長地址。對重要欄位，目標不只是逐字正確，而是系統能否重述、讓使用者修正，並在仍不確定時停止執行。',
      },
      {
        heading: '工具呼叫很久時，不要用假成功填滿沉默',
        body:
          'CRM、ERP 或派單 API 可能需要數秒甚至進入非同步流程。系統可以用簡短進度語句降低死寂，但不能在結果返回前說「已完成」。超過通話內可接受時間時，應建立待確認狀態、人工待辦或後續通知，並用唯一識別避免重複執行。延遲優化若犧牲結果真實性，只是把錯誤更快地說出口。',
      },
      {
        heading: '「3 秒」只能是設計目標，不是 GoGoCha 公開 SLA',
        body:
          'GoGoCha 的公開案例證明電話入口與即時派單工作流，但沒有公開端到端延遲分布、電信環境、通話樣本或 SLA。未經相同事件定義與真實量測，不應把產品設計目標寫成已達成服務水準。企業專案要在自己的 PBX／SIP、API 與尖峰條件下重新建立 p50、p95 和失敗樣本。',
      },
    ],
    faq: [
      {
        question: 'AI 語音客服一定要低於一秒才自然嗎？',
        answer:
          '沒有所有任務通用的秒數。簡短問答和需要查詢企業系統的任務不同；除了等待時間，是否截斷使用者、是否正確回報進度及結果也會影響體感。',
      },
      {
        question: 'Server VAD 和 Semantic VAD 哪個比較好？',
        answer:
          '取決於供應商支援與通話型態。Server VAD 較容易用沉默參數控制；Semantic VAD 可等待語意完成，但可能增加延遲。應以自己的語言、欄位與電話樣本比較。',
      },
      {
        question: '為什麼網頁 Demo 很順，電話上卻變慢？',
        answer:
          '實際電話多了電信路由、編解碼、網路品質與 PBX，音訊條件也不同。POC 必須用正式預計採用的電話路徑測試。',
      },
    ],
    relatedLinks: [
      { label: 'AI 語音客服 POC 驗收清單', href: '/blog/ai-voice-agent-poc-acceptance-checklist' },
      { label: 'AI 電話如何串接 PBX 與 CRM', href: '/blog/ai-phone-pbx-crm-integration' },
      { label: 'AI 語音客服完整導入架構', href: '/blog/ai-voice-customer-service-guide' },
    ],
    relatedServices: ['ai-voice-agent'],
    relatedCaseStudies: ['gogocha-ai-dispatch'],
    references: [
      {
        name: 'Realtime API reference: SIP and voice activity detection',
        url: 'https://platform.openai.com/docs/api-reference/realtime',
        publisher: 'OpenAI Platform Documentation',
      },
      {
        name: 'Agentic voice best practices: barge-in and end-of-turn tuning',
        url: 'https://docs.aws.amazon.com/connect/latest/adminguide/agentic-voice-best-practices.html',
        publisher: 'Amazon Web Services Documentation',
      },
    ],
  },
  'ai-call-recording-privacy-security': {
    slug: 'ai-call-recording-privacy-security',
    title: 'AI 電話錄音與個資怎麼處理？告知、保存、權限與稽核清單',
    h1: 'AI 電話錄音與個資怎麼處理？告知、保存、權限與稽核清單',
    description:
      '盤點 AI 電話錄音、逐字稿、欄位與模型紀錄，整理蒐集告知、保存刪除、最小權限、供應商及 POC 測試資料的風險清單。',
    keywords: ['AI 電話錄音個資', 'AI 語音客服資安', '客服錄音個資法', 'AI 電話錄音保存', '語音客服隱私'],
    datePublished: '2026-08-30',
    dateModified: '2026-08-30',
    qualityTier: 'production',
    intent: 'commercial',
    intro:
      'AI 電話留下的不只一個錄音檔。逐字稿、來電號碼、對話摘要、模型事件、API 欄位、人工備註與備份都可能包含可識別資訊。企業若只討論「要不要錄音」，卻沒有盤點資料流、蒐集目的、存取角色、保存期限與刪除流程，風險會散落在電話商、AI 供應商、企業系統及測試環境。本文提供技術與治理盤點，不是法律意見。',
    toc: ['資料盤點', '個資判斷', '告知與目的', '保存與刪除', '權限與供應商', 'POC 資料', '事故處理'],
    sections: [
      {
        heading: '先畫出一通電話會留下哪些資料',
        body:
          '錄音只是資料鏈的一部分。來電號碼、通話時間、SIP 識別、逐字稿、對話摘要、情緒或意圖標籤、姓名地址、CRM 查詢結果、工具呼叫參數、客服備註、監控事件與備份都要列入盤點。每一項應標記由誰產生、傳到哪裡、誰能看、保存多久及如何刪除；若供應商無法回答，就不能只靠一句「資料有加密」結案。',
        table: {
          caption: 'AI 電話資料盤點表',
          headers: ['資料類型', '常見位置', '主要問題'],
          rows: [
            ['原始音訊', '電信商、語音平台、錄音儲存', '是否必要、告知、權限、保存與下載'],
            ['逐字稿與摘要', '模型平台、應用後端、客服畫面', '可識別內容、錯誤內容與搜尋權限'],
            ['結構化欄位', 'CRM、工單、預約或派單系統', '蒐集目的、正確性、最小欄位與修正'],
            ['模型與工具事件', '供應商 log、監控與稽核平台', '提示內容、API 參數、保留期限與跨境'],
            ['備份與匯出', '物件儲存、備援、客服下載檔', '主系統刪除後是否仍可還原或散落'],
          ],
        },
      },
      {
        heading: '可直接或間接識別個人的錄音可能受個資法規範',
        body:
          '法務部函釋指出，客服錄音若能直接或間接識別特定自然人，可能屬個人資料，其蒐集、處理與利用即受到個資法規範。實務上電話內容常和來電號碼、姓名、訂單、地址或會員資料連結，不能只因音檔沒有寫姓名就假設完全匿名。資料是否可識別與適用哪種法律依據，仍要由企業法務依實際流程判斷。',
      },
      {
        heading: '告知、蒐集目的與法律依據要在錄音前確認',
        body:
          '企業應先確認誰是蒐集者、蒐集目的、使用範圍、保存期間、資料提供對象及當事人權利，再決定通話中的告知方式。不能武斷地說所有錄音都必須取得同一形式的同意，也不能假設既有客服話術自動涵蓋 AI 模型、逐字稿與第三方供應商。金融、醫療、電信或外撥行銷可能另有產業規範，應交由法務或合規角色確認。',
      },
      {
        heading: '保存期限要從用途推回來，不能預設永久',
        body:
          '錄音為了爭議處理、品質抽查、模型改善或法定保存，可能需要不同期限與權限。每種用途都要分開決定，期限到期後應涵蓋原檔、逐字稿、摘要、匯出與備份的刪除或不可逆去識別。若系統只有新增、沒有查詢與刪除能力，就還不能承諾企業能履行自己的保存政策。',
        table: {
          caption: '保存與刪除驗收清單',
          headers: ['檢查點', '驗收問題', '應留下的證據'],
          rows: [
            ['用途與期限', '每種資料為何保存、保存多久', '核准政策與系統設定'],
            ['查詢與存取', '誰能依案件或當事人找到資料', '角色權限與查詢稽核'],
            ['刪除與去識別', '到期或核准申請後如何處理', '刪除事件、結果與例外清單'],
            ['備份與匯出', '副本何時過期、下載檔如何控管', '備份週期與匯出紀錄'],
          ],
        },
      },
      {
        heading: '最小權限要涵蓋人、服務帳號與模型工具',
        body:
          '客服席位可能只需要看到摘要與已確認欄位，主管才可調閱錄音；開發與供應商不應因維護方便就取得所有正式資料。模型可呼叫的 API 也要限制到必要動作，重要寫入需後端驗證，密鑰不得出現在對話或前端。每次查看、匯出、刪除與權限變更都應留下稽核事件，並讓前端完整呈現操作失敗。',
      },
      {
        heading: '供應商評估不能只問模型會不會拿資料訓練',
        body:
          '還要確認資料處理地區、子處理者、預設保存、刪除方式、支援人員存取、加密、事件通知、服務終止後匯出與清除，以及不同環境是否隔離。電話商、語音辨識、模型、主機與監控可能由不同公司提供；任何一層留下可識別資料，都要納入契約與資料流。供應商政策日後可能變更，正式上線前應保存當時版本並定期複核。',
      },
      {
        heading: 'POC 不應把未隔離的真實錄音直接丟進測試環境',
        body:
          '優先使用人工設計、去識別或已取得適當授權的測試資料。若真實樣本確有必要，應縮小範圍、限制存取、設定到期刪除並記錄使用目的；姓名、電話、地址、病歷、付款與帳號等內容要依風險遮罩。測試完成後還要確認供應商 log、下載檔與備份是否一併處理，不能只刪除應用資料庫。',
      },
      {
        heading: '事故處理要能知道資料停在哪一層',
        body:
          '發生誤轉、異常匯出、權限錯誤或供應商事件時，企業需要快速確認受影響資料、時間、使用者、供應商與後續流向。監控不能紀錄姓名、電話或完整逐字稿來換取方便；錯誤碼、事件識別與安全摘要通常足以定位。事故通報、保存證據與當事人處理方式，應由企業依適用法律和內部程序決定。',
      },
    ],
    faq: [
      {
        question: 'AI 電話錄音一定要先取得同意嗎？',
        answer:
          '不能一概而論。是否需要同意、可依何種法律依據蒐集，以及告知內容，取決於目的、關係、產業規範與實際流程；應由企業法務確認，不能只靠系統供應商回答。',
      },
      {
        question: '不保存錄音，只留逐字稿就沒有個資問題嗎？',
        answer:
          '不一定。逐字稿、摘要、電話號碼和結構化欄位仍可能直接或間接識別個人，應一起納入資料盤點與權限、保存及刪除政策。',
      },
      {
        question: '把電話號碼雜湊後就算匿名嗎？',
        answer:
          '不一定。若仍能透過相同演算法比對、與其他資料連結或還原識別，可能仍屬個人資料。匿名化判斷要看整體可識別性，不只看欄位表面。',
      },
    ],
    relatedLinks: [
      { label: 'AI 語音客服 POC 驗收清單', href: '/blog/ai-voice-agent-poc-acceptance-checklist' },
      { label: 'AI 電話如何串接 PBX 與 CRM', href: '/blog/ai-phone-pbx-crm-integration' },
      { label: 'AI 語音客服怎麼轉真人', href: '/blog/ai-voice-human-handoff-escalation' },
    ],
    relatedServices: ['ai-voice-agent'],
    relatedCaseStudies: ['gogocha-ai-dispatch'],
    references: [
      {
        name: '客服專線通話錄音與個人資料保護法適用函釋',
        url: 'https://mojlaw.moj.gov.tw/LawContentExShow.aspx?etype=etype5&id=FE253692&kw=&type=E',
        publisher: '法務部',
        updatedAt: '2012-11-22',
      },
      {
        name: '通傳產業個人資料保護與管理實作指引手冊',
        url: 'https://www.ncc.gov.tw/chinese/files/21033/5164_45874_210331_2.pdf',
        publisher: '國家通訊傳播委員會',
        updatedAt: '2021-03',
      },
      {
        name: '可間接識別資料仍可能適用個資法之函釋要旨',
        url: 'https://www.pdpc.gov.tw/News_Content/102/1056/',
        publisher: '個人資料保護委員會籌備處',
        updatedAt: '2025',
      },
    ],
  },
  'ai-voice-human-handoff-escalation': {
    slug: 'ai-voice-human-handoff-escalation',
    title: 'AI 語音客服怎麼轉真人？觸發條件、上下文交接與失敗降級',
    h1: 'AI 語音客服怎麼轉真人？觸發條件、上下文交接與失敗降級',
    description:
      '說明 AI 語音客服何時轉真人、如何透過 PBX／SIP／客服佇列交接上下文，以及滿線、斷線與系統失敗時的降級方式。',
    keywords: ['AI 語音客服轉真人', 'AI 電話人工轉接', 'VoiceBot 人工客服', 'AI 客服 escalation', 'AI 電話失敗降級'],
    datePublished: '2026-08-30',
    dateModified: '2026-08-30',
    qualityTier: 'production',
    intent: 'commercial',
    intro:
      'AI 語音客服的人工轉接不是失敗按鈕，而是完整服務流程的一部分。系統要先判斷何時不該繼續、找到正確席位、帶走已確認資訊，並在滿線、斷線或企業系統異常時留下可追蹤的下一步。只把電話丟回總機，讓來電者全部重講，並沒有完成真正的上下文交接。',
    toc: ['轉接觸發', '計畫轉接與異常升級', '電話路由', '交接資料', '滿線與斷線', '量測', 'GoGoCha 邊界'],
    sections: [
      {
        heading: '先定義 AI 必須停止的條件',
        body:
          '使用者明確要求真人、連續誤解、必要欄位無法確認、涉及金流或權益、高風險關鍵字、企業 API 回傳不可處理狀態，以及模型或電話服務異常，都可以成為接手條件。條件要寫成可記錄的原因碼，而不是只依模型自由判斷。這樣客服才能知道為何收到電話，營運端也能分辨流程設計與模型品質問題。',
        table: {
          caption: '人工接手觸發與預期處理',
          headers: ['觸發原因', 'AI 應做的事', '人工收到的重點'],
          rows: [
            ['使用者要求真人', '立即確認並進入適當佇列', '來意、已確認身分與等待狀態'],
            ['重複誤解或低信心', '停止猜測並說明將轉接', '原始問題、失敗欄位與重問次數'],
            ['敏感或高風險事項', '不執行不可逆動作', '風險分類與相關案件資料'],
            ['企業系統失敗', '不宣稱成功，建立待處理狀態', 'API 狀態、請求識別與是否可重試'],
            ['人工席位不可用', '提供排隊、回撥或建立待辦', '聯絡方式、時段與追蹤識別'],
          ],
        },
      },
      {
        heading: '計畫轉接和異常升級要分開量測',
        body:
          '計畫轉接是流程本來就設計由真人完成，例如 AI 先蒐集資料再送到特定專員；異常升級則是 AI 無法理解、系統失敗或使用者不滿而退出。兩者混在一起會讓團隊誤以為所有轉人工都是自動化失敗，也可能掩蓋真正的誤解問題。Google Cloud 的虛擬客服指標同樣區分 planned transfer、escalation、resolved 與 abandoned。',
      },
      {
        heading: 'PBX、SIP 與客服佇列負責真正的電話路由',
        body:
          'AI 應用可以提出轉接目標與原因，但代表號、分機、技能群組、營業時間、排隊、溢出與錄音延續通常由 PBX、SIP 平台或聯絡中心處理。導入前要確認盲轉、諮詢轉、保留原號碼、跨系統會話識別及轉接失敗事件。只說「支援 SIP」不足以證明現有電話環境能完成所有路由。',
      },
      {
        heading: '上下文交接只帶完成任務所需資料',
        body:
          '人工席位至少需要知道來電目的、已確認欄位、未解問題、企業系統查詢結果、已執行動作與失敗原因。原始錄音、完整逐字稿或敏感欄位是否顯示，應依角色和目的決定；能用摘要與必要欄位完成工作，就不應把所有資料全部暴露。席位畫面還要標示哪些值由使用者確認、哪些只是模型推測。',
        table: {
          caption: '建議的最小交接內容',
          headers: ['資料', '用途', '控制方式'],
          rows: [
            ['轉接原因碼', '判斷優先順序與下一步', '固定分類，不讓模型輸出任意權限指令'],
            ['已確認欄位', '避免使用者重複回答', '標示確認時間與來源'],
            ['未解問題', '讓人工直接接續對話', '和模型摘要分開呈現'],
            ['系統狀態', '避免重複查詢或建單', '附唯一請求識別與最終狀態'],
            ['安全摘要', '快速理解脈絡', '遮罩非必要個資並限制原文存取'],
          ],
        },
      },
      {
        heading: '人工滿線、轉接失敗與斷線都要有下一步',
        body:
          '若席位滿線，可讓使用者選擇等待、指定時段回撥或建立工單；若轉接 API 失敗，應保留原通話、重試到備援佇列，或明確說明後續處理。斷線後能否回撥，要先確認聯絡目的、號碼使用與企業政策。每一條降級路徑都要產生案件識別與前端可見狀態，不能把錯誤寫進 log 後讓使用者自行重打。',
      },
      {
        heading: '人工接手成效要從原因和結果一起看',
        body:
          '轉接率只能說明有多少通進入人工，不能單獨判斷好壞。應搭配計畫轉接、異常升級、誤分流、排隊放棄、首次解決、總處理時間及使用者重複說明的比例。若某個意圖大量計畫轉接，可能代表流程設計正確；若某個欄位反覆造成異常升級，才是對話、資料或模型需要修正的訊號。',
      },
      {
        heading: 'GoGoCha 沒有公開證明完整聯絡中心轉接能力',
        body:
          'GoGoCha 公開內容可證明電話入口、共用派單後端、即時通知，以及網站、LINE、App 與營運介面整合；它沒有公開 PBX 型號、客服技能佇列、滿線策略或轉接 SLA。這些屬隼訊可依企業環境客製並透過 POC 驗收的範圍，不能包裝成 GoGoCha 已驗證的完整客服席位成果。',
      },
    ],
    faq: [
      {
        question: '使用者說要找真人時，AI 應該繼續挽留嗎？',
        answer:
          '一般不應設計成反覆阻擋。可以詢問一次必要的分流資訊，但使用者持續要求真人時應依規則轉接或提供可追蹤的替代方案。',
      },
      {
        question: '轉接後一定要提供完整逐字稿嗎？',
        answer:
          '不一定。多數任務可先提供轉接原因、已確認欄位、未解問題與安全摘要；完整逐字稿或錄音應依目的、權限和個資政策限制。',
      },
      {
        question: '沒有客服席位也能導入 AI 電話嗎？',
        answer:
          '可以評估，但必須設計替代降級，例如建立工單、指定時段回撥或轉給值班人員。若高風險任務沒有任何人工承接，就不應讓 AI 自動執行。',
      },
    ],
    relatedLinks: [
      { label: 'AI、IVR 與真人客服怎麼選', href: '/blog/ai-voice-vs-ivr-human-agent' },
      { label: 'AI 語音客服 POC 驗收清單', href: '/blog/ai-voice-agent-poc-acceptance-checklist' },
      { label: 'AI 電話如何串接 PBX 與 CRM', href: '/blog/ai-phone-pbx-crm-integration' },
    ],
    relatedServices: ['ai-voice-agent'],
    relatedCaseStudies: ['gogocha-ai-dispatch'],
    references: [
      {
        name: 'Voice virtual agent dashboard: planned transfer, escalation and abandonment',
        url: 'https://docs.cloud.google.com/contact-center/ccai-platform/docs/voice-virtual-agent-dashboard',
        publisher: 'Google Cloud Documentation',
        updatedAt: '2026-08-26',
      },
      {
        name: 'Voice agent design best practices',
        url: 'https://docs.cloud.google.com/dialogflow/cx/docs/concept/voice-agent-design',
        publisher: 'Google Cloud Documentation',
      },
    ],
  },
  'geo-complete-guide-2026': {
    slug: 'geo-complete-guide-2026',
    title: 'GEO 生成式引擎優化指南：技術與內容怎麼準備',
    h1: 'GEO 生成式引擎優化指南',
    description:
      '依 Google 2026 年官方指引整理 GEO：從搜尋索引、原創內容、實名案例、AI 爬蟲到量測，並拆解 llms.txt 與特殊 AI Schema 迷思。',
    keywords: ['GEO 怎麼做', 'GEO 完整指南', 'GEO 教學', 'AI 搜尋優化', '生成式引擎優化 教學'],
    datePublished,
    dateModified: '2026-08-31',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'GEO 是業界描述 AI 搜尋可見度的名稱，不是一組神祕標記。Google 2026 年官方指引明確表示：AI Overview 與 AI Mode 沒有額外技術門檻，Google 也不使用 llms.txt。真正能長期累積的，是搜尋索引、原創經驗、實名責任、外部信任與轉換量測。',
    sections: [
      {
        heading: 'GEO 與 SEO 的共同基礎和差別',
        body:
          'Google 的生成式搜尋功能建立在搜尋索引與核心品質系統上，所以 GEO 不會繞過 SEO。Google 官方文件指出，能成為 AI Overview 或 AI Mode 支援連結的頁面，必須先被索引並符合一般搜尋摘要資格，沒有額外的技術申請。差別主要在使用情境與量測：SEO 常看非品牌查詢、自然點擊與詢盤；GEO 另觀察 AI 引薦、固定問題集的來源出現與品牌被描述是否正確。',
      },
      {
        heading: '第一步不是寫更多，而是確認能被抓取與索引',
        body:
          '先檢查 robots.txt、CDN／WAF、HTTP 狀態、canonical、noindex、站內連結與 sitemap。重要資訊要以文字存在於可取得的 HTML 中，不能只放在圖片、登入後畫面或爬蟲無法執行的互動裡。技術條件只是參賽資格，不代表一定被索引或引用；若服務頁本身沒有清楚回答問題，增加 AI 專用檔案也不會補上內容缺口。',
      },
      {
        heading: '第二步是建立可核對的一手價值',
        body:
          'AI 搜尋很容易重新整理網路上的共同知識，因此企業內容要說明「自己做過什麼、如何知道、限制在哪」。隼訊的作法是把服務說明、實名作者、公開案例、技術畫面、量測口徑與限制連起來。沒有客戶同意的營運數據就不推算效益；可客製能力也不冒充已驗證成果。這類證據同時改善真人採購判斷，不只是為了 AI。',
        items: [
          '案例標示實際負責範圍、資料來源、期間與未公開項目',
          '文章由實名作者負責，區分官方規則、專案經驗與推論',
          '數字附來源與口徑，產品目標不寫成已達成 SLA',
          '讓服務頁、文章、案例和 About 互相內鏈，形成可追溯的證據鏈',
        ],
      },
      {
        heading: '第三步是依問題建立主題集群',
        body:
          '不要把一個關鍵字拆成大量城市或產業近義頁。核心服務頁回答採購與交付，指南回答原理，成本頁回答預算，案例證明實作，整合文章處理技術細節。每頁要有不同的主要問題和下一步，並以描述性錨文字相連。若兩頁都在回答同一件事，應合併或重新分工，而不是各自補到兩千字。',
      },
      {
        heading: '結構化資料能做什麼、不能做什麼？',
        body:
          'Organization、WebSite、Service、Article、Breadcrumb 等結構化資料可以協助描述頁面實體，且內容必須與使用者看得到的文字一致。Google 明確表示 AI 功能不需要特殊 Schema；正確標記也只代表有資格使用對應搜尋功能，不保證 rich result、排名或引用。沒有實體門市就不輸出 LocalBusiness，沒有公開評價也不自填 AggregateRating。',
      },
      {
        heading: '怎麼量測 GEO，而不是靠截圖報喜？',
        body:
          '先保存發布前基準，再用官方報表、到站行為與商業結果交叉驗證。Google 已推出 Search Console Generative AI performance report，可查看 AI Overviews 與 AI Mode 的曝光、呈現頁面、國家、裝置與日期，但目前仍只對部分網站開放。Bing Webmaster Tools 也有 AI Performance，可看引用次數、被引用頁面與 grounding queries；這些數字不代表排名、權威或回答中的位置。尚未取得官方報表時，就明確回退到一般 Web Performance、GA4、固定查詢集與詢盤來源，不把抽樣包裝成平台總曝光。',
        table: {
          caption: 'GEO 建議量測層級',
          headers: ['層級', '觀察項目', '解讀限制'],
          rows: [
            ['可用性', '抓取、索引、canonical、AI 爬蟲存取', '通過不代表一定排名或引用'],
            ['Google AI 可見度', 'Generative AI 曝光、呈現頁面、國家、裝置與日期', '報表仍在分批開放，且不是查詢排名報表'],
            ['Bing AI 引用', 'citations、cited pages、grounding queries 與趨勢', '引用次數不代表排名、權威或呈現位置'],
            ['AI 引薦', 'ChatGPT、Perplexity 等來源與到站行為', '無連結提及、App 與隱私限制可能使數據低估'],
            ['商業結果', 'Demo、表單、電話與合格詢盤', '要排除其他活動與季節性的影響'],
          ],
        },
      },
      {
        heading: 'GEO 最常見的錯誤觀念',
        body:
          'Google 不要求 llms.txt、AI 文字檔或專用標記才能進入 AI Overview／AI Mode；結構化資料也不是 AI 引用資格。允許爬蟲只表示平台可以存取，不代表一定收錄。修正後多久被引用沒有固定答案，因為查詢、競爭、索引狀態與平台模型都會改變。真正可驗收的是技術可用性、內容證據、引薦與詢盤，而不是廠商保證的時程。',
      },
    ],
    faq: [
      {
        question: 'GEO 跟 SEO 衝突嗎？',
        answer: '不衝突。技術 SEO、原創內容、清楚來源與品牌信任，同時是傳統搜尋與 AI 搜尋的共同基礎。',
      },
      {
        question: '我自己可以做嗎？',
        answer:
          '可以先做：確認頁面可索引、補實名作者與案例、在 GSC／GA4 建立基準。若沒有原創資料，先整理第一手經驗，比增加更多標記更重要。',
      },
      {
        question: 'GEO 需要每個月持續做嗎？',
        answer:
          '技術基礎的修正是階段性的，但內容證據與量測是持續的：案例要更新、固定查詢集要定期重測、新內容要持續累積。一次性健檢能找出問題，長期可見度靠持續經營。',
      },
    ],
    relatedServices: ['geo', 'seo'],
    references: [
      {
        name: 'Optimizing your website for generative AI features on Google Search',
        url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
        publisher: 'Google Search Central',
        updatedAt: '2026-07-10',
      },
      {
        name: 'Creating helpful, reliable, people-first content',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        publisher: 'Google Search Central',
      },
      {
        name: 'Generative AI performance report (Search)',
        url: 'https://support.google.com/webmasters/answer/16984139',
        publisher: 'Google Search Console Help',
      },
      {
        name: 'Introducing AI Performance in Bing Webmaster Tools Public Preview',
        url: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview',
        publisher: 'Microsoft Bing Webmaster Blog',
        updatedAt: '2026-02-10',
      },
    ],
  },
  'schema-org-tutorial': {
    slug: 'schema-org-tutorial',
    title: 'Schema.org 結構化資料教學｜JSON-LD、驗證與常見錯誤',
    h1: 'Schema.org 結構化資料教學｜JSON-LD、驗證與常見錯誤',
    description:
      'Schema.org 用來描述頁面實體並支援特定搜尋功能。本文說明該用哪些類型、哪些已失效，以及內容一致性規則。',
    keywords: ['Schema.org', '結構化資料', 'JSON-LD', 'LocalBusiness schema', 'FAQ schema'],
    datePublished,
    dateModified: '2026-08-26',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'Schema.org 是讓搜尋引擎以明確欄位理解頁面實體的格式，但不是排名保證，也不是 AI 搜尋必要條件。少而準比多而錯重要；標記內容必須能在頁面上看見。',
    sections: [
      {
        heading: '先分清 Schema.org 與 Google 搜尋功能',
        body:
          'Schema.org 提供描述實體與關係的通用詞彙；Google 只支援其中部分類型作為特定搜尋外觀的依據。網站可以使用有效的 Schema.org 屬性，但這不代表 Google 一定顯示 rich result。部署前先確認頁面主要內容、Google 是否支援對應功能，以及是否有足夠可見資料能如實標記。',
      },
      {
        heading: '本網站實際使用哪些類型？',
        body: '隼訊採少而一致的 @graph，讓品牌、網站、作者與頁面內容共用同一組實體識別：',
        items: [
          'Organization：品牌身份與公開聯絡資料',
          'WebSite：網站實體與出版者關係',
          'Service：可見的服務範圍與提供者',
          'Article：文章內容（含作者、發布日期）',
          'BreadcrumbList：麵包屑導航',
          'ProfilePage／Person：實名作者與公開專業連結',
          'CreativeWork：案例內容與證據揭露',
        ],
      },
      {
        heading: 'JSON-LD 應如何部署？',
        body:
          'Google 建議 JSON-LD，也支援 Microdata 與 RDFa。Next.js 可以在伺服器輸出的 HTML 中放置 application/ld+json script；重點不是放在 head 或 body 的形式差異，而是資料能被抓取、JSON 可解析、URL 使用正式 canonical，且每個欄位都能在頁面主要內容或明確相關資訊中核對。共用實體應使用穩定 @id，避免同頁產生多個互相衝突的公司。',
      },
      {
        heading: '從畫面內容建立 Schema 的順序',
        body: '不要先找一份產生器範本再回填文案。比較安全的工作順序是：',
        items: [
          '確認頁面主要目的、canonical 與實際可見內容',
          '選擇 Google 支援且與主內容相符的類型',
          '只映射已存在的作者、日期、圖片、服務或案例資料',
          '以 Rich Results Test 檢查 Google 功能，以 Schema Markup Validator 檢查一般語法',
          '上線後再用 URL Inspection 確認 Google 實際取得的 HTML',
        ],
      },
      {
        heading: '常見錯誤',
        body: '',
        items: [
          '加入不真實的 AggregateRating（如自填 4.9 星 / 50 評論）— 違反 Google Rich Results 政策',
          'schema 內容與頁面實際內容不一致 — Google 會直接拒絕 rich results',
          '沒有實體門市卻輸出 LocalBusiness 地址或營業時間',
          '商業網站把 FAQPage、HowTo、Speakable 當成一般 rich result 或 AI 引用捷徑',
        ],
      },
      {
        heading: 'FAQ、HowTo 與 Speakable 為什麼不能亂套？',
        body:
          '可見 FAQ 對使用者仍有價值，但 Google 的 FAQ rich result 主要限於具權威性的政府與健康網站；HowTo rich result 已不再顯示。Speakable 的 Google 文件則限定特定新聞使用情境。這不等於網站不能使用問答或步驟內容，而是不該向一般企業承諾加上標記就能取得 rich result 或 AI 引用。',
      },
      {
        heading: '驗證通過仍不代表一定顯示',
        body:
          'Rich Results Test 通過只代表技術格式與部分資格符合，Google 仍會依搜尋情境、品質政策與頁面代表性決定是否顯示。若結構化資料誤導、標記隱藏內容或違反政策，頁面可能失去 rich result 資格，嚴重時也可能在 Search Console 出現結構化資料人工處置。它不等於一般自然排名必然下降，但足以讓錯誤標記失去價值。',
      },
    ],
    faq: [
      {
        question: 'schema 加錯會被懲罰嗎？',
        answer:
          '誤導或違反政策的結構化資料可能失去 rich result 資格，也可能收到人工處置。常見風險包括自填 AggregateRating、標記使用者看不到的內容，以及建立虛構的商家或作者實體。',
      },
      {
        question: 'JSON-LD、Microdata、RDFa 該選哪一種？',
        answer:
          'Google 三種都支援，官方建議 JSON-LD：與畫面 HTML 分離、容易維護、不會改壞版面。除非既有系統已大量使用 Microdata，新專案直接採用 JSON-LD 即可。',
      },
      {
        question: '結構化資料需要每一頁都放嗎？',
        answer:
          '依頁面類型決定：Organization 與 WebSite 全站共用，文章頁加 Article、服務頁加 Service、有導航層級的頁面加 BreadcrumbList。與畫面內容無關的類型不要硬塞——錯誤標記比沒有標記更糟。',
      },
    ],
    relatedServices: ['seo', 'geo'],
    references: [
      {
        name: 'General structured data guidelines',
        url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies',
        publisher: 'Google Search Central',
      },
      {
        name: 'Google Search structured data markup',
        url: 'https://developers.google.com/search/docs/appearance/structured-data/search-gallery',
        publisher: 'Google Search Central',
      },
      {
        name: 'Changes to HowTo and FAQ rich results',
        url: 'https://developers.google.com/search/blog/2023/08/howto-faq-changes',
        publisher: 'Google Search Central Blog',
      },
    ],
  },
  'perplexity-aeo-overview': {
    slug: 'perplexity-aeo-overview',
    title: 'Perplexity AI 的引用邏輯與 AEO 實作',
    h1: 'Perplexity 引用邏輯與 AEO 實作',
    description:
      'Perplexity 會列出引用來源。本文只採官方爬蟲規則與可重現量測，不宣稱任何無法證實的固定引用公式。',
    keywords: ['Perplexity', 'Perplexity 排名', 'Perplexity 引用', 'AEO 實作'],
    datePublished,
    dateModified: '2026-08-11',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'Perplexity 的回答通常會附來源連結，但被引用不等於一定帶來流量或成交。官方文件能確認的是爬蟲用途與存取方式，沒有公開一套讓網站保證被引用的排名公式。網站應先確保公開內容可被搜尋爬蟲取得，再以真實來源、第一手證據與可重現量測改善內容。',
    sections: [
      {
        heading: 'PerplexityBot 與 Perplexity-User 不相同',
        body:
          'Perplexity 官方將兩個 user agent 分開：PerplexityBot 用於建立搜尋索引並呈現網站連結，不用於基礎模型訓練；Perplexity-User 則在使用者提出問題時即時存取頁面。前者遵循 robots.txt，後者屬使用者請求，官方文件說明其一般不受 robots.txt 控制。若網站使用 WAF，還要同時核對官方公布的 user agent 與 IP 範圍，避免只靠名稱放行偽造爬蟲。',
        table: {
          caption: 'Perplexity 官方爬蟲用途',
          headers: ['User agent', '用途', '站方注意事項'],
          rows: [
            ['PerplexityBot', '建立搜尋索引並在結果中呈現連結', 'robots.txt 允許抓取，WAF 核對官方 IP'],
            ['Perplexity-User', '回應使用者問題時存取頁面', '與索引爬蟲分開管理，依網站安全政策決定存取'],
          ],
        },
      },
      {
        heading: '可被抓取只是起點，不是引用保證',
        body: '以下條件能由站方自行驗證，也同時有利於一般搜尋與真人閱讀：',
        items: [
          '頁面回傳 200、canonical 正確，重要內容存在可取得的 HTML 中',
          '主題具體、有實名作者、日期、來源與第一手經驗',
          '標題與段落直接回答問題，但不為第三方分數追求固定字數',
          '更新日期反映真實修改，不在每次建置時偽造新時間',
          '內容與其他網站相比有可引用的案例、方法或限制，而不是同義摘要',
        ],
      },
      {
        heading: '內容端應該做哪些工作？',
        body:
          '隼訊把「答案先行」當成編輯方法，而不是 Perplexity 官方排名因子。先用一段話回答主題，再提供證據、步驟、比較與限制，讓真人能快速判斷資訊是否適用。外部來源要連到原始文件，內部經驗則連回案例或負責人頁，並清楚標示哪些是已實作、哪些只是建議。',
        items: [
          '用明確定義回答問題，再補條件與例外',
          '以公開案例、原始資料和官方文件增加可核對性',
          '取得真實客戶、合作夥伴或專業社群的自然提及',
          '使用實名作者、穩定品牌名稱與一致的公司資訊',
          '內容實質變更時才更新頁面日期與 sitemap 時間',
        ],
      },
      {
        heading: '如何量測 Perplexity 可見度？',
        body:
          '先在 GA4 或伺服器紀錄中觀察 perplexity.ai 引薦、到站頁面、互動與詢盤，再用一組固定且貼近客戶決策的問題定期人工檢查來源。不要只測品牌名稱，否則結果只反映既有認知；也不要用單次截圖宣稱排名，因為回答可能隨時間、位置、模型與問題措辭變動。若平台沒有附連結，分析工具通常無法完整取得品牌提及。',
      },
      {
        heading: '允許 Perplexity 會不會等於同意模型訓練？',
        body:
          '依 Perplexity 官方文件，PerplexityBot 用於搜尋索引，不用於 AI 基礎模型預訓練。這只說明該公司目前公開的爬蟲用途，不代表網站可以忽略自己的內容授權、隱私與存取政策。含有客戶資料、付費內容或內部資訊的路徑仍應以登入、權限與伺服器控制保護，不能只依賴 robots.txt。',
      },
    ],
    faq: [
      {
        question: 'Perplexity 跟 ChatGPT 引用邏輯一樣嗎？',
        answer:
          '不能視為同一套規則。平台的索引、查詢處理、回答與來源呈現方式不同，而且都會更新；共同基礎是公開可存取、主題相關、來源清楚且具一手價值的內容，成效仍要分平台量測。',
      },
      {
        question: '該封鎖 PerplexityBot 嗎？',
        answer:
          '看你的目標：想取得 AI 搜尋能見度就允許抓取；有付費內容或授權顧慮則封鎖，並搭配伺服器端存取控制。這是可隨時調整的政策決定，本站的選擇是全面開放並定期核對存取紀錄。',
      },
      {
        question: '被 Perplexity 引用能帶來多少流量？',
        answer:
          '因查詢與產業而異，沒有可信的固定數字。可在 GA4 觀察 perplexity.ai 引薦的實際到站量與後續行為，用自己的數據判斷價值，不要套用第三方宣稱的平均值。',
      },
    ],
    relatedServices: ['geo', 'seo'],
    references: [
      {
        name: 'Perplexity Crawlers',
        url: 'https://docs.perplexity.ai/docs/resources/perplexity-crawlers',
        publisher: 'Perplexity Documentation',
      },
      {
        name: 'How does Perplexity follow robots.txt?',
        url: 'https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt',
        publisher: 'Perplexity Help Center',
        updatedAt: '2026-07-16',
      },
    ],
  },
  'google-ai-overview-basics': {
    slug: 'google-ai-overview-basics',
    title: 'Google AI Overview 是什麼？對 SEO 的影響',
    h1: 'Google AI Overview 與 SEO 的關係',
    description:
      'Google AI Overview 在搜尋結果頁直接顯示 AI 生成答案。本文說明它對傳統 SEO 的影響，以及該如何調整內容策略。',
    keywords: ['Google AI Overview', 'AI Overview 優化', 'SGE', 'Search Generative Experience'],
    datePublished,
    dateModified: '2026-08-31',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'Google AI Overview 會在部分搜尋中整理資訊並提供支援連結；AI Mode 則適合更複雜的探索、比較與追問。站方沒有專用提交表單或特殊 Schema，頁面必須先符合一般 Google Search 的技術與內容條件。與其猜測每次版面會怎麼變，更實際的是確保內容可索引、有一手價值，並追蹤搜尋與轉換結果。',
    sections: [
      {
        heading: 'AI Overview 與 AI Mode 怎麼使用網頁？',
        body:
          'Google 官方說明，兩項功能可能使用 query fan-out，把問題拆成多個相關搜尋並尋找支援頁面；不同功能可能使用不同模型與方法，因此顯示的回答和連結會變化。AI Overview 只在系統判斷能為一般搜尋增加價值時出現，不是每個查詢都固定觸發。這也代表單一「目標關鍵字」不足以涵蓋使用者會延伸詢問的子題。',
      },
      {
        heading: '網站要符合哪些基本資格？',
        body:
          '要成為 AI Overview 或 AI Mode 的支援連結，頁面必須已被索引、能在 Google Search 顯示摘要，並符合搜尋技術要求與政策。Google 沒有額外的 AI 技術要求，也不需要新增 AI 文字檔或專用 Schema。符合條件仍不保證抓取、索引或呈現，因為 Google 會依查詢與品質系統決定結果。',
        items: [
          'robots.txt、CDN 與 WAF 允許 Googlebot 抓取',
          '頁面可索引、canonical 正確且能顯示搜尋摘要',
          '重要內容以文字存在，並能由站內連結找到',
          '結構化資料與使用者看得到的內容一致',
          '頁面體驗、圖片與影片在適用時真正幫助理解',
        ],
      },
      {
        heading: '內容怎麼增加被選為支援來源的機會？',
        body:
          'Google 不公布固定引用公式，但人本內容原則仍適用：直接回答問題、補上專案經驗、引用原始資料、清楚標示作者與限制。比較表和條列能改善理解，卻不是特殊排名訊號；真正差異在於資訊是否比現有結果更具體、更容易核對。若文章只重述別人的定義，即使篇幅很長也沒有新增價值。',
      },
      {
        heading: '常見失敗原因',
        body: '以下問題同時會降低一般搜尋與 AI 搜尋的可用性：',
        items: [
          '純行銷話術（缺乏可驗證資訊）',
          '重點埋藏太深（要滑到底才出現）',
          '需要 JavaScript 渲染才會顯示的內容',
          '重複整理網路常識、沒有第一手經驗或獨特價值',
        ],
      },
      {
        heading: 'Search Console 能看到多少 AI 資料？',
        body:
          'Google 已推出獨立的 Search Console Generative AI performance report，顯示網站在 AI Overviews 與 AI Mode 的曝光、呈現頁面、國家、裝置與日期。這份報表仍分批對部分網站開放，而且目前不提供查詢、點擊、CTR 或平均排名；相關曝光同時仍包含在一般 Web Performance 報表。若帳號尚未看到專用報表，就以 Web Performance 的非品牌查詢與落地頁趨勢，搭配 GA4 轉換作為基準，不應使用第三方抽樣反推 Google 的平台總曝光。',
        table: {
          caption: '發布後的量測分工',
          headers: ['資料來源', '適合回答', '不能單獨證明'],
          rows: [
            ['Generative AI 報表', 'AI 功能曝光、呈現頁面、國家、裝置與日期', '查詢、點擊、CTR、排名或尚未開放的網站'],
            ['Web Performance', '非品牌查詢、落地頁、點擊、CTR 與整體趨勢', '每一筆曝光是否來自 AI 功能'],
            ['GA4／分析工具', '使用者進站後是否閱讀案例、點擊 CTA 或詢盤', '沒有點擊的品牌提及'],
            ['固定問題集', '特定問題是否出現來源與品牌描述', '整體市場曝光或固定排名'],
          ],
        },
      },
      {
        heading: '不要對流量影響下無來源結論',
        body:
          'AI Overview 可能讓部分使用者直接取得答案，也可能為複雜問題帶來新的支援連結。單一網站的結果會受查詢組合、品牌、版面、競爭與時間影響，不能在沒有自己的 Search Console 與轉換資料前，直接宣稱流量一定下降或「成為引用來源就能拿回點擊」。正確作法是按頁面與非品牌查詢建立基準，再觀察改版後的趨勢。',
      },
    ],
    faq: [
      {
        question: 'AI Overview 會搶走我的流量嗎？',
        answer:
          '不能一概而論。不同查詢與網站可能出現不同結果；應以自己的 Search Console 點擊、曝光、CTR 與詢盤基準判斷，而不是套用第三方平均數或保證引用後一定帶來流量。',
      },
      {
        question: 'AI Overview 什麼時候會出現在搜尋結果？',
        answer:
          '由 Google 依查詢判斷，只在系統認為能為搜尋增加價值時顯示，站方無法主動觸發。同一查詢在不同時間、地區可能出現不同結果，所以量測要看趨勢，不是單次截圖。',
      },
      {
        question: '要為 AI Overview 另外寫一版內容嗎？',
        answer:
          '不用。AI Overview 的支援連結來自一般搜尋索引，頁面符合一般搜尋資格即可。把同一頁內容寫得答案先行、可核對，比維護兩套內容實際得多。',
      },
    ],
    relatedServices: ['geo', 'seo'],
    references: [
      {
        name: 'Optimizing your website for generative AI features on Google Search',
        url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
        publisher: 'Google Search Central',
        updatedAt: '2026-07-10',
      },
      {
        name: 'Generative AI performance report (Search)',
        url: 'https://support.google.com/webmasters/answer/16984139',
        publisher: 'Google Search Console Help',
      },
    ],
  },
  'website-pricing-2026': {
    slug: 'website-pricing-2026',
    title: '2026 台灣網站建置費用｜行情區間、隱藏成本與報價比較',
    h1: '2026 台灣網站建置費用｜行情區間、隱藏成本與報價比較',
    description:
      '網站建置費用從幾萬到幾百萬都有，差別在哪？本文拆解四個價格區間的實際內容、常被忽略的隱藏成本、轉換廠商時的注意事項。',
    keywords: ['網站建置費用區間', '網站建置費用怎麼算', '網站成本拆解', '網站建置隱藏成本', '網站維護費用'],
    datePublished,
    dateModified: '2026-08-26',
    qualityTier: 'production',
    intent: 'transactional',
    intro:
      '網站建置費用差距很大。本文只談「實際費用包含什麼」、報價單名目怎麼讀、三年總成本怎麼算，不貶低任何特定廠商或工具。',
    sections: [
      {
        heading: '台灣網站建置費用四個區間',
        body:
          '價格區間之間會重疊，因為決定價格的不是「網站」兩個字，而是規格：頁數與流程數量、設計是套用還是客製、後台要管到什麼程度、要不要接金流或外部系統。同一個「公司形象網站」的需求，用模板自己拉和找團隊客製，費用可以差十倍——兩者都沒有錯，錯的是拿不同規格的報價互比。以下區間是我們接案與同業觀察的粗略分布，實際仍以規格為準：',
        items: [
          'NT$ 3,000-30,000：模板網站（Wix / Squarespace 等）— 適合個人 / 微型企業',
          'NT$ 30,000-100,000：WordPress 套版或半客製化',
          'NT$ 100,000-500,000：完整客製化開發',
          'NT$ 500,000+：複雜系統 / 大型電商 / 多語言企業網站',
        ],
      },
      {
        heading: '常被忽略的隱藏成本',
        body:
          '報價單通常只寫「做好上線」那一筆，但網站是持續產生費用的資產。簽約前把下面每一項都問一次「這筆誰付、付給誰、一年多少」，可以避免上線後才發現的預算缺口。特別留意授權費：某些佈景主題、外掛與圖庫是按年計費，第一年可能包含在建置費裡，第二年開始就是你的持續支出：',
        items: [
          '主機 / 網域年費',
          'CMS 或 plugin 商業授權費（特別是 WordPress 商業套件）',
          'SSL 憑證（多數廠商已含但要確認）',
          '後續維護費（通常另計）',
          '修改費用（小改是否含？大改怎麼算？合約必寫）',
          '搬家 / 移交費（轉換廠商時的成本）',
        ],
      },
      {
        heading: '簽約前要確認的事',
        body:
          '下面這些問題在簽約前問，答案會寫進合約；上線後才問，答案就由對方決定。其中「原始碼歸屬」和「主機帳號在誰名下」兩項最關鍵——它們決定你未來換廠商時，帶得走的是完整網站，還是只有一堆截圖：',
        items: [
          '原始碼歸誰所有（合約必寫，否則變更廠商時很被動）',
          '主機帳號是在你名下還是廠商代管',
          'CMS 後台你能不能自己改',
          'SEO 內建到什麼程度（Lighthouse SEO 分數可作基準）',
          '是否支援響應式設計',
          '售後保固範圍與年限',
        ],
      },
      {
        heading: '報價單常見名目逐項解讀',
        body:
          '不同廠商的報價單名目差異很大，這裡把常見項目翻成白話。「視覺設計」：是套現成版型微調，還是從線框稿開始客製？兩者工作量差數倍，報價單應寫明。「前端切版／後端開發」：前端是把設計稿變成網頁，後端是會員、表單、後台這些看不見的邏輯；只有形象頁的網站後端占比低，有系統功能的網站後端才是大頭。「CMS 後台」：讓你自己改內容的介面，要確認能改的範圍（只有文字？還是版面與新頁面？）。「SEO 基礎設定」：合理範圍是 meta 標籤、sitemap、robots、結構化資料與速度基礎——若寫著「保證排名」就是紅旗。「專案管理費」：不是灌水，需求訪談、進度協調、驗收整理都是真實工時，但比例通常在總價一到兩成之間。看不懂的名目直接要求拆解，正規團隊都拆得出來。',
      },
      {
        heading: '什麼時候該重做網站，什麼時候修就好？',
        body:
          '不是每個「網站很舊」都需要打掉重練。判斷方式是看問題出在哪一層：內容過時、圖片老舊，這是內容層，後台能改就不用重做；版面跑版、手機難用，這是樣式層，小規模改版可能就夠；但如果是技術層的問題——後台沒人會用、想加功能發現當初的系統加不了、原始碼拿不到、或建站工具已停止維護——修補的錢會一直丟進去卻換不到彈性，這時重做反而是止損。另一個常見的重做時機是商業模式變了：原本只要形象展示，現在要線上接單，這已經不是改版，是換一種網站。重做前記得盤點舊站資產：有排名的頁面要做 301 轉址、既有內容要搬遷，這些工作要出現在報價單上，沒出現就要問。',
      },
      {
        heading: '算網站要看三年，不是只看第一年報價',
        body:
          '比報價時最容易踩的坑，是只比「做好上線」那一筆。但網站是會持續產生費用的資產——網域、主機、SSL、內容更新、維護，這些每年都在。比較不同方案時，建議用「建置費 ＋ 每年營運費 ×3 年」一起算：有些首年特別便宜的方案，把功能一項項拆開加購、或用月租把你綁住，三年攤下來反而更貴。反過來，交付原始碼、主機網域掛在你名下的方案，初期看起來貴一點，但你之後換不換廠商、要不要自己維護都有選擇權，長期成本反而可控。金額會隨規格與流量變動，重點是「你算得出三年要花多少」。',
      },
      {
        heading: '一頁式、WordPress、全客製，怎麼選？',
        body:
          '沒有哪個「最好」，只有「哪個適合你現在的目標」。一頁式（Landing Page）適合單一活動、單一產品的導購，做得快、費用低，但頁面少、能承載的 SEO 內容也有限。WordPress 是成熟的開源系統、外掛生態豐富、內容編輯方便，內容型網站或預算優先時很務實；要留意的是外掛越加越多時，效能與資安需要多花心思維護。全客製開發（我們用 Next.js）在效能、獨特流程與複雜整合上空間最大，適合長期經營、需要獨特功能或高流量的網站，代價是初期投入較高。先想清楚這個網站三年後要長成什麼樣，再回頭選型，比一開始就挑最便宜的實在。',
      },
    ],
    faq: [
      {
        question: '5 萬可以做出像樣的網站嗎？',
        answer:
          '可以，但限制較多：5-8 頁靜態內容、套用既有設計風格、不含複雜功能。如果需要客製化視覺、會員系統、電商或後台管理，預算建議 15 萬以上。',
      },
      {
        question: '網站上線後，每年維護費行情大概多少？',
        answer:
          '看你要維護到什麼程度。純放著不動，成本主要是網域（數百元）加主機（依流量從數千到數萬元不等）；若要持續改版、更新內容、修 bug，市場行情多半是月費制或按工時計。建議先問清楚：哪些屬於免費保固範圍、哪些要另計。這些數字只是行情參考，實際依網站規格與流量而定。',
      },
      {
        question: '報價單上的「SEO 優化」到底包含什麼？',
        answer:
          '建站階段合理的範圍是技術基礎：meta 標籤、sitemap、robots、結構化資料、載入速度與行動版體驗。這些是「讓網站能被搜尋引擎正確讀取」，跟上線後持續的關鍵字內容經營是兩回事。報價單若承諾排名，建議把它當紅旗。',
      },
      {
        question: '網站做到一半想換廠商，做得到嗎？',
        answer:
          '取決於合約與交付形式。原始碼與設計稿歸屬有寫清楚、主機網域在你名下，接手方通常能延續；反之若做到一半的成品全在廠商環境裡，多半只能重做。這也是為什麼歸屬條款要在簽約前談，而不是想換的時候才談。',
      },
      {
        question: '先用模板網站，之後可以升級成客製化嗎？',
        answer:
          '可以，而且對很多微型企業是合理路徑：先用低成本驗證業務，流量與需求成長後再客製。要注意的是「升級」實際上是重做——模板平台的版型與功能通常搬不走，能搬的是網域、內容與既有排名（透過 301 轉址）。規劃時把網域買在自己名下，未來轉移就順利得多。',
      },
    ],
    relatedServices: ['web-development'],
  },
  'common-seo-mistakes': {
    slug: 'common-seo-mistakes',
    title: '網站 SEO 沒效果？常見的技術 SEO 問題盤點',
    h1: '常見技術 SEO 問題盤點',
    description:
      'SEO 做了卻沒看到排名變化？多數情況問題出在技術面而非內容。本文整理我們接手客戶網站時最常發現的技術 SEO 問題。',
    keywords: ['SEO 沒效果', 'SEO 錯誤', '技術 SEO', 'SEO 問題'],
    datePublished,
    dateModified: '2026-08-11',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'SEO 沒見到變化，不能先假設是文章不夠長，也不能一律歸咎技術。正確順序是確認搜尋需求、索引資格、頁面品質與量測是否成立，再看外部競爭。本文整理隼訊檢查網站時會先排除的技術問題，以及如何避免一次亂改整站。',
    sections: [
      {
        heading: '常見技術 SEO 問題',
        body: '以下不是固定頻率或排名因素清單，而是網站改版與接手時值得優先排除的風險：',
        items: [
          '核心內容載入過慢或版面位移，讓行動使用者難以完成任務',
          '沒有手機版或手機版體驗差',
          'Robots.txt 把重要頁面意外擋掉',
          'Sitemap 不完整或沒提交',
          'Canonical 設錯（導致 Google 視為重複內容）',
          'HTTPS 設定有混合內容問題',
          '結構化資料與畫面不一致，或重複產生衝突實體',
          '有資訊作用的圖片缺少適當替代文字或尺寸',
          '關鍵內容靠 JS 渲染，爬蟲讀不到',
          '站內連結結構崩壞，重要頁面成為孤兒頁',
        ],
      },
      {
        heading: '先用證據判斷是哪一層出問題',
        body:
          '先在 Search Console 查看 Page Indexing、URL Inspection 與 Performance，再用實際瀏覽器、Lighthouse 或爬蟲重現問題。第三方工具只能指出線索，不能取代 Google 實際取得的 canonical、索引狀態與查詢資料。若網站沒有曝光，先查索引和主題相關性；有曝光沒點擊，再檢查標題、摘要與搜尋意圖；有點擊沒詢盤，問題可能在服務內容、證據或轉換流程。',
        table: {
          caption: '依症狀選擇第一個檢查點',
          headers: ['症狀', '先檢查', '不要先做'],
          rows: [
            ['重要頁完全沒有曝光', '索引、canonical、robots、內鏈與查詢相關性', '批量加長所有文章'],
            ['有曝光但 CTR 低', '查詢意圖、title、description 與 SERP 競爭', '直接換網址或刪頁'],
            ['點擊正常但沒有詢盤', '案例、價格、CTA、表單與服務適配', '只追平均排名'],
            ['改版後整體下滑', '發布時間、轉址、noindex、內容差異與效能', '同時修改所有模板和文案'],
          ],
        },
      },
      {
        heading: '順手破解幾個常見的 SEO 迷思',
        body:
          '接手客戶時，我們也常要先拆掉一些流傳很廣、卻站不住腳的說法。像是「網站權重分數（DA / DR）越高排名越好」——Google 從來沒有對外公布的權重分數，DA、DR 是 Moz、Ahrefs 這些第三方工具自己估的，只能當相對參考，不該寫進成效承諾。又像「跳出率高會害排名掉」——跳出率、停留時間並非 Google 官方直接的排名因素，真正該優化的是使用者體驗與載入速度本身。還有「Meta Keywords 要塞好塞滿」——這個標籤 Google 早就不看了。把力氣花在這些迷思上，不如回頭把技術地基與內容做扎實。',
      },
      {
        heading: '排名突然掉了，先別急著怪內容',
        body:
          '排名波動時，第一步是判斷原因來自「外部」還是「自己」。外部是指 Google 的核心演算法更新——它不定期發生、會讓整個產業的排名重新洗牌，這種情況要看的是內容整體品質與 E-E-A-T，而不是某個單一頁面。自己的問題則像是：改版後不小心 noindex、網站搬家忘了做 301 轉址、頁面載入變慢、或被掛了垃圾連結。我們的處理順序是先用 Search Console 對時間軸——下滑的時間點有沒有對上已知的演算法更新、或對上你自己做過的某次改動，再決定要修技術還是補內容，而不是一看到掉就整站亂改。',
      },
      {
        heading: '修復順序要降低二次傷害',
        body:
          '先保存改版前的 URL、canonical、索引與 Performance 基準，再一次修一類問題。影響抓取與索引的錯誤優先，其次是主要頁面的內容與內鏈，最後才處理低影響警告。每批發布都記錄日期、受影響 URL 與預期結果；發布後先確認爬蟲取得正確 HTML，再於數週至數月觀察搜尋趨勢。不要因為七天沒有上升就反覆更換 title、URL 或主題。',
      },
    ],
    faq: [
      {
        question: '我自己檢查就好還是要找廠商？',
        answer:
          '基礎問題（如 Sitemap、HTTPS、手機版）可自己用 GSC + Lighthouse 找出來。較複雜的問題（如 canonical 衝突、JS 渲染、internal linking 重構）通常需要有經驗的人介入。',
      },
      {
        question: '別家說可以「保證關鍵字排第一」，是真的嗎？',
        answer:
          '把它當成紅旗訊號。排名由 Google 的演算法決定，沒有任何廠商能對它下指令、保證特定名次；做得到「短期衝上去」的，多半用的是會被演算法懲罰的手法，賭輸的是你的網站。我們寧可把預期講保守，也不做這種承諾。',
      },
      {
        question: '技術問題修完，多久會反映在搜尋表現上？',
        answer:
          '從 Google 重新抓取到重新評估通常需要數週至數月，幅度取決於問題嚴重性與競爭環境。修完先用 URL 檢查工具確認 Google 取得新版本，再觀察趨勢——不要七天沒動靜就把 title 或 URL 又改一輪。',
      },
    ],
    relatedServices: ['seo'],
    references: [
      {
        name: 'Search technical requirements',
        url: 'https://developers.google.com/search/docs/essentials/technical',
        publisher: 'Google Search Central',
      },
      {
        name: 'Performance report: Common tasks and use cases',
        url: 'https://support.google.com/webmasters/answer/17010961',
        publisher: 'Google Search Console Help',
      },
      {
        name: 'Debugging drops in Google Search traffic',
        url: 'https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops',
        publisher: 'Google Search Central',
      },
    ],
  },
  'ai-customer-service-cost': {
    slug: 'ai-customer-service-cost',
    title: 'AI 客服系統：自建與 SaaS 的成本比較',
    h1: 'AI 客服自建 vs SaaS 成本比較',
    description:
      'AI 客服該自建還是用 Intercom AI、Zendesk AI 等 SaaS？本文比較兩種方案的長期成本、技術門檻、適用情境。',
    keywords: ['AI 客服自建', 'AI 客服 SaaS', 'AI 客服成本比較', 'Intercom AI', 'AI 客服 ROI'],
    datePublished,
    dateModified: '2026-08-12',
    qualityTier: 'production',
    intent: 'commercial',
    intro:
      'AI 客服是 2026 年企業導入 AI 最常見的切入點。但「自建」與「用 SaaS」的長期成本差距可能很大，本文整理可參考的成本結構與三年總成本的試算方法（實際費用依授權方案、用量而定）。',
    sections: [
      {
        heading: 'SaaS AI 客服費用參考',
        body:
          'SaaS 方案最大的比較困難在計價單位不同：有的按「每次成功解決的對話」收費、有的按座位月費、有的按方案組合，直接比單價沒有意義，要換算成「你的對話量之下每月付多少」才能比。以下為各服務官方公開的牌價區間（請以該品牌最新報價為準）：',
        items: [
          'Intercom Fin：每次解決對話約 USD 0.99 起',
          'Zendesk AI Agent：依授權方案，通常從 USD 50 / 座位 / 月起',
          'Salesforce Einstein：依方案組合差異大',
        ],
      },
      {
        heading: '自建 AI 客服的成本結構',
        body:
          '自建的成本分三塊，性質完全不同：開發費是一次性的、API 費隨用量浮動、維護費看你要不要委外。三塊分開列的好處是每一塊都能獨立決策——例如維護可以先委外、團隊熟了再收回自己做。以隼訊的公開報價為例：',
        items: [
          '隼訊 MVP 開發：一次性 2.5-3.75 萬',
          'AI API 費用：每月 5,000-30,000（API 為實際用量成本，照原價計）',
          '隼訊維護費：每月 0.25-0.75 萬（可選包月或按工時）',
        ],
      },
      {
        heading: '三年總成本怎麼試算',
        body:
          '比較兩條路線時，建議用同一條公式各算一次三年總額，把你自己的數字代進去：SaaS 三年成本＝（月費或每次解決費 × 你的月對話量）× 36 個月＋導入設定費；自建三年成本＝一次性開發費＋（API 月費＋維護月費）× 36 個月。兩個提醒：第一，對話量是最關鍵的變數——量小的時候 SaaS 幾乎一定比較便宜，量大的時候自建的固定成本會被攤薄；第二，SaaS 的單價可能隨方案調整，自建的 API 單價也可能變動，試算時用區間而不是單點，結論才穩。我們在報價時會陪客戶把這條公式實際算一遍，而不是只給一句「長期比較划算」。',
      },
      {
        heading: '什麼情況該選 SaaS',
        body:
          '誠實說，不少情境下 SaaS 是更合理的選擇，我們也會這樣建議：',
        items: [
          '需要立即上線（SaaS 通常 1 週內、自建需 3-4 週）',
          '團隊沒有 IT 人員可維護',
          '客服流程很標準、不需太多客製化',
          '客戶數還少，月對話量低於 1,000 次',
        ],
      },
      {
        heading: '什麼情況自建較划算',
        body:
          '反過來，出現以下條件時，自建的長期成本與彈性通常勝出：',
        items: [
          '對話量大（自建邊際成本低）',
          '需要連接內部系統 / 資料庫',
          '有資料合規要求（部分產業如金融、醫療）',
          '希望避免長期被授權費綁定',
        ],
      },
      {
        heading: '從 SaaS 換到自建（或反過來）的轉換成本',
        body:
          '很多企業的實際路徑是先用 SaaS 驗證、量大了再自建，這條路可行，但轉換不是免費的，規劃時要把四筆成本算進去。一是知識庫可攜性：整理好的問答與文件是最有價值的資產，選 SaaS 時就先確認能不能完整匯出，格式是不是通用的。二是對話歷史：歷史對話是訓練與優化的素材，匯出限制要先問。三是流程重接：原本接在 SaaS 上的通知、轉真人、工單流程都要重新串。四是雙軌並行期：切換期間新舊系統並跑幾週，兩邊費用同時發生。反方向（自建換 SaaS）成本通常低一些，因為自建時資料本來就在你手上——這也是我們把「資料歸屬客戶」寫進交付標準的原因。',
      },
      {
        heading: '導入後怎麼看成效：該追的指標',
        body:
          '很多人上線 AI 客服後只憑「感覺有沒有變聰明」判斷，這樣很難說服老闆繼續投資。建議一開始就約定幾個看得見的指標：自動解決率（多少對話沒轉人工就結束）、首次回應時間、客戶滿意度（CSAT）、以及人力成本或平均處理時間的變化。要誠實提醒：這些數字的健康區間會因產業、問題複雜度、知識庫成熟度差很多，別直接套用別人宣稱的「解決率八成」當目標。我們的做法是先量一段「導入前」的基準，上線後再比較，讓成效有對照、可討論，而不是各說各話。',
      },
      {
        heading: 'AI 客服導入常見的坑',
        body:
          '導入不順，十之八九不是模型不夠強，而是這幾件事沒做好。第一是知識庫太髒：文件散亂、內容過期，AI 拿到的是壞資料，答出來自然不準（垃圾進、垃圾出）。第二是期待值錯位：以為 AI 能百分之百取代人工，一遇到它答不了的狀況就砸招牌——正確做法是設計好轉真人機制當安全網。第三是上線即放生：沒人定期檢視答錯的對話、補內容，準確率只會越用越退。第四是被過度樂觀的話術影響、低估了前置整理與維運的工時。我們寧可在報價階段就把這些講白，也不想讓你上線後才發現落差。',
      },
    ],
    faq: [
      {
        question: '自建 AI 客服需要哪些技術人員？',
        answer:
          '可委外開發，內部不需要養工程師。隼訊提供「開發 + 後續維護」的服務，客戶端只需要一位「對話策略 / 知識庫管理」的 PM 角色。',
      },
      {
        question: 'AI 客服能完全取代人工客服嗎？',
        answer:
          '不建議這樣期待。AI 適合處理大量重複、規則明確的問題，把人力釋放去處理真正需要判斷或情緒安撫的個案。實務上跑得穩的是「人機協作」：AI 當第一線、遇到答不了或高風險的問題就帶著上下文轉真人。把 AI 設定成「全部它來」，通常是導入翻車的起點。',
      },
      {
        question: '聊天機器人有哪些類型？差在哪？',
        answer:
          '大致分三種：規則型（照設定好的流程走，精準但不靈活）、AI 生成型（用大型語言模型自由對話，靈活但要控制幻覺）、以及兩者混合型（固定流程走規則、開放問題交給 AI）。實務上跑得穩的多半是混合型——查訂單、預約這類走規則確保不出錯，開放問答才交給 AI，再搭配 RAG 與轉真人當安全網。',
      },
      {
        question: '知識庫要準備到什麼程度才能上線？',
        answer:
          '不用等到完美，但要過最低門檻：高頻問題（通常是客服量前二三十題）有明確答案、過期資訊已清掉、答不了的問題有轉真人路徑。上線後每週檢視答錯的對話補內容，比上線前想做到一百分實際得多。',
      },
      {
        question: 'LINE 官方帳號可以接 AI 客服嗎？',
        answer:
          '可以，LINE 是台灣企業最常見的接入口，透過 Messaging API 就能把 AI 客服接進官方帳號。要注意 LINE 官方帳號本身的訊息費用是另一筆（依 LINE 的方案計價），跟 AI 的 API 費用分開算。',
      },
    ],
    relatedServices: ['ai-tools'],
  },
  'how-we-define-good-seo-content': {
    slug: 'how-we-define-good-seo-content',
    title: 'SEO 內容品質怎麼判斷？E-E-A-T、證據與驗收標準',
    h1: 'SEO 內容品質怎麼判斷？E-E-A-T、證據與驗收標準',
    description:
      '內容是 SEO 的核心，但「好內容」很難量化。本文整理隼訊在客戶內容生產時實際遵守的判斷標準。',
    keywords: ['SEO 內容', '內容行銷', 'E-E-A-T', '內容品質'],
    datePublished,
    dateModified: '2026-08-26',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      '「內容是國王」這句話被講爛了，但什麼算好內容沒有統一答案。本文記錄我們在實際接案時對「可生產 / 不可生產」的判斷標準。',
    sections: [
      {
        heading: '不會通過審稿的內容類型',
        body: '',
        items: [
          '空泛優點堆疊（「我們最專業、最便宜、最快交件」）',
          '無來源的統計數字（任何數字若無法附 source，要嘛刪除要嘛改為「依我們觀察」）',
          '貶低競品但無證據（例：宣稱某平台「速度差」卻沒提供實測數據）',
          '靠數字湊版面的標題（多數時候只是把可寫 1 段的東西硬拆成清單）',
          '純 AI 生成、未經人工編輯與事實查核的內容',
        ],
      },
      {
        heading: '我們認可的內容類型',
        body: '',
        items: [
          '具體流程說明（我們實際怎麼做，含工具與步驟）',
          '誠實的限制聲明（什麼客戶不適合我們）',
          '可驗證的數據（含 source 連結）',
          '不模糊的觀點（敢於說「我們不建議這樣做」）',
          '能引導讀者下一步行動的具體建議',
        ],
      },
      {
        heading: 'E-E-A-T 四支柱：把「權威」拆成做得到的事',
        body:
          'Google 用 E-E-A-T 這個框架判斷內容值不值得信任，拆開來是四件事：經驗（Experience，你是不是真的做過、用過）、專業（Expertise，內容有沒有專業深度）、權威（Authoritativeness，外部認不認你是這領域的來源）、信任（Trust，資訊正不正確、來源透不透明）。很多人把它喊成口號，我們則把它對應成具體交付：經驗＝寫進第一手案例與實際流程，而不是通論；專業＝由懂的人審稿、標注審稿角色；權威＝靠真實內容與公關累積外部提及，不買連結；信任＝數字附來源、限制講清楚、聯絡與公司資訊公開可查。這四項同時是 Google 傳統排名與 AI 摘要引用都看的訊號，值得從內容生產的第一天就內建。',
      },
      {
        heading: 'AI 寫的內容會被 Google 懲罰嗎？',
        body:
          '不是「用了 AI」就會被罰——Google 官方說法是，它針對的是「為了操弄排名而大量生產、對使用者沒有幫助的內容」，跟你用什麼工具寫沒有直接關係。換句話說，AI 幫你打草稿、整理結構完全沒問題，問題在於有沒有人把關：有沒有加入第一手經驗與觀點、有沒有查證事實、有沒有刪掉空話。我們的作法是把 AI 當助手而非作者——所有對外內容都會經過人工編輯與事實查核，這也是我們敢公開審稿標準的原因。真正危險的是那種「一鍵生成上百篇、沒人讀過就發佈」的做法，那才是會被演算法盯上的薄內容。',
      },
      {
        heading: '發布前的內容品質評分方式',
        body:
          '我們不使用單一字數或關鍵字密度決定發布，而是逐項檢查搜尋意圖、第一手價值、可核對性、責任與下一步。任何一項有明顯缺口，都應回到資料與採訪，而不是用更長的前言掩蓋。',
        table: {
          caption: '隼訊內容發布檢查表',
          headers: ['面向', '通過條件', '不通過例子'],
          rows: [
            ['搜尋意圖', '標題、開頭與主要段落回答同一個決策問題', '標題談費用，內容只介紹優點'],
            ['第一手價值', '有實作流程、案例、畫面、觀察或明確方法', '只重述搜尋結果中的共同定義'],
            ['證據', '數字、平台規則與成果能追到原始來源', '引用無日期統計或把目標當成果'],
            ['責任', '實名作者、更新日期、限制與修正邊界清楚', '匿名團隊、沒有日期、絕對承諾'],
            ['行動', '讀者知道如何自查、比較或進入相關服務／案例', '結尾只剩空泛銷售 CTA'],
          ],
        },
      },
      {
        heading: '發布後用什麼判斷要不要更新？',
        body:
          '先保存頁面的查詢、曝光、點擊與轉換基準。若開始取得不符合意圖的查詢，調整標題與內容邊界；若有曝光但 CTR 低，檢查搜尋結果上的承諾是否清楚；若讀者進站卻沒有下一步，補案例、比較或 CTA。只有官方規則、產品能力、價格或實作經驗真的變更時才更新日期，不用為了新鮮度每月重寫。',
      },
    ],
    faq: [
      {
        question: '內容長度一定要 2000 字以上、關鍵字密度要抓幾 % 嗎？',
        answer:
          '沒有這種魔法數字。內容該多長由搜尋意圖決定——有些問題兩三段就講完，硬灌到兩千字反而稀釋重點。關鍵字密度更是早就過時的概念，刻意塞關鍵字只會讓內容變難讀。我們看的是「有沒有把使用者的問題回答到位」，而不是湊字數或抓密度。',
      },
      {
        question: '用 AI 寫的內容會被 Google 懲罰嗎？',
        answer:
          'Google 官方立場是看品質、不看產製方式：無論人寫或 AI 寫，大量缺乏原創價值的內容都會被品質系統降權。我們的做法是 AI 可以輔助整理草稿，但一手經驗、數據與專業判斷必須來自真人，發布前逐篇人工審核。',
      },
      {
        question: '內容多久更新一次比較好？',
        answer:
          '沒有固定頻率。官方規則、價格、產品能力或實作經驗有變才更新，並如實標注修改日期。為了「新鮮度」把日期改新而內容沒變，短期看似有利，長期傷害的是讀者與搜尋引擎對網站的信任。',
      },
    ],
    relatedServices: ['seo', 'geo'],
    references: [
      {
        name: 'Creating helpful, reliable, people-first content',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        publisher: 'Google Search Central',
      },
      {
        name: 'Google Search spam policies',
        url: 'https://developers.google.com/search/docs/essentials/spam-policies',
        publisher: 'Google Search Central',
      },
      {
        name: 'Performance report: Common tasks and use cases',
        url: 'https://support.google.com/webmasters/answer/17010961',
        publisher: 'Google Search Console Help',
      },
    ],
  },
  'llms-txt-implementation-guide': {
    slug: 'llms-txt-implementation-guide',
    title: 'llms.txt 是什麼？格式、實作與誠實的效果評估',
    h1: 'llms.txt 是什麼？格式、實作與效果評估',
    description:
      'llms.txt 是給 AI 系統的網站導覽提案。本文說明它的由來與格式、本站用 Next.js 動態生成的實作方式，以及包含 Google 官方立場在內的誠實效果評估。',
    keywords: ['llms.txt', 'llms.txt 是什麼', 'llms.txt 格式', 'llms-full.txt', 'llms.txt 教學'],
    datePublished: '2026-08-12',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'llms.txt 是 2024 年由社群提出的檔案格式提案，用一份精簡的 Markdown 讓 AI 系統快速理解網站結構與重點內容。本站有部署它，但我們要先把話說在前面：Google 已表明不使用 llms.txt，它不是收錄或引用的門票。這篇文章教你怎麼做，也告訴你該對它抱多少期待。',
    toc: ['由來與定位', '格式規範', '本站實作方式', '效果的誠實評估', '該不該部署', '部署後驗證'],
    sections: [
      {
        heading: 'llms.txt 從哪來？定位是什麼？',
        body:
          'llms.txt 由 Answer.AI 的 Jeremy Howard 在 2024 年 9 月提出，動機很實際：網頁塞滿導覽、廣告與腳本，對上下文長度有限的語言模型不友善，不如提供一份乾淨的 Markdown 摘要，列出網站是什麼、重點頁面在哪。要注意它的身分：這是社群提案，不是任何搜尋引擎或 AI 平台的官方標準——這個定位決定了你該投資多少心力在上面。',
      },
      {
        heading: '格式長什麼樣？',
        body:
          '規範刻意簡單，就是一份放在網站根目錄的 Markdown 檔。結構依序是：H1 寫網站名稱、引言區塊（blockquote）寫一段網站摘要、之後用 H2 分區放連結清單，每個連結附一句說明。另外有一個選配的 llms-full.txt，直接放入完整的頁面內容，給願意讀長文件的系統使用。兩個檔案都以純文字回應，不需要任何特殊標頭。',
        items: [
          'H1：網站或專案名稱（必要）',
          'Blockquote：一段話的網站摘要',
          'H2 區塊：分類的連結清單，每條附說明',
          'llms-full.txt（選配）：完整內容的展開版本',
        ],
      },
      {
        heading: '本站的實作：動態生成，不手寫',
        body:
          '我們在 Next.js App Router 用 Route Handler 提供 /llms.txt 與 /llms-full.txt，內容不是手寫的靜態檔，而是從跟網頁同一份資料層（服務、案例、價格的 TypeScript 內容檔）動態組出來，並以 force-static 在建置時輸出。這個設計解決了手寫檔案最大的問題：內容漂移。價格改了、服務改了，llms.txt 在下次建置自動同步，不會出現網頁說一套、llms.txt 說另一套的情況——對 AI 系統輸出過期資訊，比沒有這個檔案更糟。',
      },
      {
        heading: '效果的誠實評估：Google 不用它',
        body:
          '這是多數教學不會告訴你的部分。Google 官方文件明確說明 AI 功能沒有額外的技術門檻，搜尋團隊成員也公開表示不使用 llms.txt；其他 AI 平台是否讀取、讀了是否影響引用，目前都沒有官方承諾。我們檢視自己的伺服器紀錄，能看到部分 AI 爬蟲抓取過這兩個檔案，但「被抓取」與「影響引用」是兩件事，後者無法驗證。所以我們的結論是：llms.txt 是成本極低的補充措施，不是 GEO 的核心工作——真正的核心仍是可索引的內容與一手證據。',
      },
      {
        heading: '該不該部署？判斷方式',
        body:
          '值得做的理由：成本極低（一個檔案）、沒有任何已知風險、萬一未來有平台正式採用你已就位。不值得投入的情況：有人要你為此付顧問費，或把它包裝成「AI 收錄必備」來賣——這與平台官方立場不符，可以直接當成判斷廠商誠信的試金石。我們對客戶的說法是一致的：做，但它排在技術 SEO、內容證據與量測之後，優先序很後面。',
      },
      {
        heading: '部署後怎麼驗證？',
        body:
          '三件事：一是用 curl 或瀏覽器直接開 /llms.txt，確認回應 200、內容是最新的；二是檢查內容過濾與 sitemap 一致——noindex 的頁面不應該出現在 llms.txt 裡，否則等於把你不想曝光的內容主動遞給 AI；三是定期看伺服器紀錄，記錄哪些爬蟲實際抓取過，這是你判斷「有沒有人在讀」的唯一一手資料。',
      },
    ],
    faq: [
      {
        question: 'llms.txt 跟 sitemap.xml 有什麼不同？',
        answer:
          'sitemap.xml 是搜尋引擎官方支援的標準，列出所有可索引 URL 供爬蟲發現；llms.txt 是社群提案，用人類可讀的 Markdown 描述網站重點。前者有明確的官方用途，後者目前沒有平台承諾使用——兩者不互相取代。',
      },
      {
        question: '一定要有 llms-full.txt 嗎？',
        answer:
          '不一定。llms-full.txt 是選配的完整內容版本，適合內容量可控的網站；頁面很多的網站全文展開會過大，反而稀釋重點。本站的做法是 llms.txt 放結構化清單、llms-full.txt 放服務與案例的完整段落。',
      },
      {
        question: '沒有 llms.txt 會影響 AI 引用嗎？',
        answer:
          '以目前各平台的公開文件來看，不會。Google 明確不使用；其他平台也沒有把它列為條件。決定引用的仍是內容能不能被抓取、有沒有可信的一手價值。把它當加分題，不要當必考題。',
      },
    ],
    relatedServices: ['geo', 'seo'],
    references: [
      {
        name: 'The /llms.txt file specification',
        url: 'https://llmstxt.org/',
        publisher: 'llmstxt.org（Answer.AI 社群提案）',
      },
      {
        name: 'AI features and your website',
        url: 'https://developers.google.com/search/docs/appearance/ai-features',
        publisher: 'Google Search Central',
        updatedAt: '2025-12-10',
      },
    ],
  },
  'chatgpt-search-citation-observations': {
    slug: 'chatgpt-search-citation-observations',
    title: 'ChatGPT 搜尋怎麼選引用來源？觀察方法與限制',
    h1: 'ChatGPT 搜尋的引用來源：觀察方法與限制',
    description:
      '拆解 OpenAI 官方文件能確認的爬蟲機制（OAI-SearchBot、ChatGPT-User、GPTBot），以及我們用固定查詢集觀察 ChatGPT 引用行為的方法與限制。',
    keywords: ['ChatGPT 搜尋 引用', 'ChatGPT 引用來源', 'OAI-SearchBot', 'ChatGPT 搜尋 SEO', 'ChatGPT 引用 網站'],
    datePublished: '2026-08-12',
    dateModified: '2026-08-31',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'ChatGPT 搜尋的回答會附來源連結，這讓「怎麼被 ChatGPT 引用」成為常見問題。誠實的答案是：OpenAI 沒有公開排名公式，任何宣稱掌握「引用演算法」的說法都是推測。本文整理官方文件能確認的機制，以及我們實際在用的觀察方法——包含它的限制。',
    toc: ['官方能確認的機制', '引用怎麼產生', '固定查詢集方法', '方法的限制', '內容端可以做什麼', '流量怎麼量'],
    sections: [
      {
        heading: '官方文件能確認的三個爬蟲',
        body:
          'OpenAI 公開了三個用途不同的 user agent，站方可以分開控制：OAI-SearchBot 用來建立搜尋索引、讓網站出現在 ChatGPT 搜尋結果的連結中；ChatGPT-User 是使用者在對話中要求讀取網頁時的即時代理；GPTBot 則用於模型訓練資料的收集。三者在 robots.txt 各自獨立——封了 GPTBot 不等於退出 ChatGPT 搜尋，想要搜尋能見度的網站至少要放行 OAI-SearchBot。',
        table: {
          caption: 'OpenAI 三個 user agent 的用途區分',
          headers: ['User agent', '用途', '想被 ChatGPT 搜尋引用時'],
          rows: [
            ['OAI-SearchBot', '建立搜尋索引與呈現連結', '必須放行'],
            ['ChatGPT-User', '使用者要求時即時讀取頁面', '建議放行'],
            ['GPTBot', '收集模型訓練資料', '依內容授權政策自行決定'],
          ],
        },
      },
      {
        heading: '引用是怎麼產生的？能確認與不能確認的',
        body:
          '能確認的：ChatGPT 搜尋會對查詢做檢索、綜合多個來源生成回答、在回答旁附上來源連結。不能確認的：來源怎麼排序、為什麼選 A 不選 B、內容特徵佔多少權重——這些 OpenAI 都沒有公開。市面上的「ChatGPT 引用因子研究」多半是第三方對樣本的逆向推測，參考可以，但引用這類結論時應標明它是推測，不能寫成平台規則。我們自己的立場：把可驗證的基礎做好，用觀察代替猜測。',
      },
      {
        heading: '我們的觀察方法：固定查詢集',
        body:
          '做法是建立一組固定的問題清單，定期在 ChatGPT 重測並記錄結果。要點如下：問題選「客戶做決策時真的會問的」（例如比較服務、詢問費用行情），不要只測品牌名，因為品牌名只反映既有認知；每次都開新對話，避免上下文影響回答；每題記錄日期、品牌是否被提及、引用了哪些網域與頁面；同一組題目按月重測，看的是趨勢變化，不是單次結果。這個方法成本很低——一份表格加上固定的執行紀律。',
      },
      {
        heading: '這個方法的限制，要先講清楚',
        body:
          '固定查詢集有明確的限制，我們在報告裡都會註明：AI 回答有隨機性，同一問題連問兩次可能得到不同來源；回答會受帳號、地區與模型版本影響，你測到的不等於所有使用者看到的；模型或產品改版時，整組基準可能重洗。所以它只能回答「我們的品牌在這組問題下的相對趨勢」，不能推論市占或曝光量。任何用單次截圖宣稱「已被 ChatGPT 推薦」的報告，都要打折看待。',
      },
      {
        heading: '內容端可以做什麼？',
        body:
          '與其追逐未公開的演算法，不如做可驗證的基礎，這些工作同時服務傳統搜尋與所有 AI 平台：確認 OAI-SearchBot 能抓到頁面（robots.txt 與 WAF 都要查）；重要內容以文字存在 HTML 中，不藏在互動元件裡；答案先行的寫作結構，一段話先回答問題再展開；一手證據與實名作者，因為可核對的內容才有被綜合引用的價值；品牌名稱與公司資訊在全網一致，減少實體混淆。',
      },
      {
        heading: '被引用之後，流量怎麼量？',
        body:
          'OpenAI 官方說明 ChatGPT 搜尋的引薦 URL 會自動加上 utm_source=chatgpt.com，因此可在 GA4 用 campaign source 與 session source 一起建立 ChatGPT 群組，再觀察落地頁、閱讀案例、CTA 與詢盤。這不代表所有 ChatGPT 曝光都能被量到：沒有點擊就沒有到站資料，App 開啟、隱私限制、重新導向或參數被移除時，仍可能被歸到 referral 或 direct。報告應同時檢查 UTM 與 referrer，並以後續詢盤而不是單純 session 數判斷價值。',
      },
    ],
    faq: [
      {
        question: '封鎖 GPTBot 之後，內容就不會出現在 ChatGPT 了嗎？',
        answer:
          '不完全是。GPTBot 管的是訓練資料收集；搜尋引用走 OAI-SearchBot 的索引。封 GPTBot、留 OAI-SearchBot 的組合，理論上仍可能在 ChatGPT 搜尋被引用。另外歷史訓練資料與第三方轉載的內容不受你現在的 robots.txt 控制。',
      },
      {
        question: 'ChatGPT 搜尋跟 Bing 的索引有關嗎？',
        answer:
          'OpenAI 與微軟有合作關係，ChatGPT 的檢索歷史上部分依賴 Bing 的基礎，但 OpenAI 也建立自己的索引（OAI-SearchBot），完整的現況沒有官方文件。務實作法：Bing Webmaster Tools 順手提交，但不要把「做 Bing SEO」當成進 ChatGPT 的保證路徑。',
      },
      {
        question: '查詢集多久重測一次合理？',
        answer:
          '我們的節奏是每月一次，搭配季度回顧。太頻繁沒有意義——AI 回答的隨機波動會蓋過真實變化；太久則抓不到模型改版造成的斷點。重點是每次重測的條件（題目、措辭、新對話）保持一致。',
      },
    ],
    relatedServices: ['geo'],
    references: [
      {
        name: 'Publishers and Developers FAQ',
        url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq',
        publisher: 'OpenAI Help Center',
        updatedAt: '2026-08-29',
      },
      {
        name: 'ChatGPT search',
        url: 'https://help.openai.com/en/articles/9237897-chatgpt-search',
        publisher: 'OpenAI Help Center',
      },
    ],
  },
  'geo-measurement-guide': {
    slug: 'geo-measurement-guide',
    title: 'GEO 成效怎麼衡量？Google AI、Bing AI 與 GA4 量測實作',
    h1: 'GEO 成效怎麼衡量？Google AI、Bing AI 與 GA4 量測實作',
    description:
      '以 Google Generative AI、Bing AI Performance、GA4、固定查詢集與詢盤建立 GEO 量測架構，並說明每種資料的限制。',
    keywords: ['GEO 成效衡量', 'AI 搜尋 流量 追蹤', 'AI 引薦 GA4', 'GEO 量測', 'AI 流量 分析'],
    datePublished: '2026-08-12',
    dateModified: '2026-08-31',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      'GEO 量測不再只能靠截圖：Google 於 2026 年推出 Search Console Generative AI performance report，Bing Webmaster Tools 也提供 AI Performance。但這些工具仍無法回答「所有平台總共提到品牌幾次」，更不能單獨證明成交。本文把官方可見度、到站行為、抽樣觀測與詢盤整合成一套可核對的架構。',
    toc: ['官方 AI 報表的現況', '五個量測訊號', 'Google Generative AI 報表', 'Bing AI Performance', 'GA4 與 ChatGPT UTM', '固定查詢與詢盤', '用資料決定下一步'],
    sections: [
      {
        heading: '官方 AI 報表已經出現，但不是完整市占',
        body:
          'Google 專用報表量的是網站在 Google AI 功能的曝光；Bing 報表量的是支援的 Microsoft AI 體驗中的引用。它們的平台、口徑與可用欄位都不同，不能相加成「AI 市占」。ChatGPT、Perplexity 與其他平台也沒有提供跨平台的完整品牌提及後台。所以報告要將「官方曝光」、「官方引用」、「到站流量」、「查詢抽樣」與「商業結果」分開，不用一個漂亮總數掩蓋限制。',
      },
      {
        heading: '五個量測訊號，分別回答不同問題',
        body:
          '沒有單一指標可以證明 GEO 帶來生意。有官方可見度卻沒有點擊，可能是使用者已在回答中解決問題，也可能是頁面沒有足夠的點擊理由。有引薦卻沒有詢盤，則應先檢查案例、CTA 與服務適配，而不是繼續加文章。',
        table: {
          caption: 'GEO 量測的五個訊號',
          headers: ['訊號', '能回答的問題', '主要限制'],
          rows: [
            ['Google Generative AI', '哪些頁面在 Google AI 功能取得曝光', '只對部分網站開放，目前不提供查詢、點擊、CTR 與排名'],
            ['Bing AI Performance', '哪些 URL 被引用、對應哪些 grounding queries', '引用次數不是排名、權威或呈現位置'],
            ['GA4', '使用者從哪個 AI 來源進站、後續做了什麼', '沒有點擊就沒有到站資料，部分流量可能被低估'],
            ['固定查詢集', '抽樣問題是否出現品牌、來源與描述', '回答受帳號、地區、模型與隨機性影響'],
            ['詢盤來源', 'AI 可見度是否轉成 Demo、表單或合格機會', '需排除其他活動、延遲轉換與客戶自述誤差'],
          ],
        },
      },
      {
        heading: 'Google Generative AI 報表：看曝光與頁面，不假裝有查詢排名',
        body:
          '專用報表顯示 AI Overviews 與 AI Mode 的 impressions，並可按頁面、國家、裝置與日期查看。最新數據可能是 preliminary，圖表與表格也可能因為 property 與 page 的彙總方式不同而有差異。目前報表不提供查詢、點擊、CTR 或平均排名，所以不能用它說「哪個 AI 查詢帶來多少點擊」。相關曝光仍包含在一般 Web Performance 報表；若帳號尚未獲得專用報表，就保存 Web Performance 的非品牌查詢、落地頁、點擊與 CTR 作為替代基準。',
      },
      {
        heading: 'Bing AI Performance：引用次數不是排名',
        body:
          'Bing Webmaster Tools 的 AI Performance 公開預覽提供 Total Citations、Average Cited Pages、grounding queries、URL 層級引用活動與時間趨勢。它可以幫助找出「哪些頁已被 Microsoft AI 體驗當作來源」與「擷取時使用什麼詞組」。官方同時明確說明，citation 不代表頁面權威、排名或在單一回答中的位置。有引用但沒有點擊或詢盤時，報告要保留這個差距，不能把 citations 包裝成營收成果。',
      },
      {
        heading: 'GA4 與 ChatGPT UTM：同時查 campaign source 與 referrer',
        body:
          'OpenAI 表示 ChatGPT 搜尋引薦會自動加上 utm_source=chatgpt.com，所以 GA4 應同時檢查 campaign source 與 session source，不能再只靠 chatgpt.com referrer。Perplexity、Copilot、Gemini 與其他平台的參數與網域可能改變，需定期檢視真實來源值。報告不只看 sessions，還要依落地頁觀察案例瀏覽、service_cta_click、contact_click 與 generate_lead。App 開啟、隱私限制、重新導向或參數被移除時，部分流量仍可能被歸到 referral 或 direct，所以 GA4 是「到站行為」證據，不是「平台總曝光」。',
      },
      {
        heading: '固定查詢與詢盤：補官方報表的空白',
        body:
          '對 ChatGPT、Perplexity 或無連結品牌提及，固定查詢集仍有用，但它只是抽樣。題目要選客戶真正的決策情境，每月使用新對話、固定措辭，並記錄日期、平台、模型、品牌提及、引用網域與頁面。結果只能用來觀察這組題目的相對趨勢，不能推論市占。同一期間再比對表單的 service=ai_voice、聯絡點擊與客戶自述來源，才能判斷 AI 電話集群是否帶來合格詢盤。',
      },
      {
        heading: '用資料決定下一步，不用文章數量代替判斷',
        body:
          '每月先依落地頁與搜尋意圖分類。已有頁面曝光高但點擊低，先修 title、description 與搜尋摘要；查詢與現有頁意圖相同但排名尚未穩定，先補證據、決策資訊與內鏈，不另開 URL；只有出現明確不同的購買或技術意圖、且站內沒有可合理擴寫的頁面時，才建新文章。若 AI 引薦已有瀏覽卻沒有詢盤，優先改案例證據、CTA 與表單流程，不繼續堆內容。',
      },
    ],
    faq: [
      {
        question: 'GA4 裡的 AI 流量要去哪裡看？',
        answer:
          '在探索（Explore）建自訂報表，同時使用 session source 與 campaign source 篩選 AI 來源。ChatGPT 要包含 utm_source=chatgpt.com 與 chatgpt.com referrer；其他平台再依實際收到的網域與參數維護自訂管道群組。報表要與 generate_lead、contact_click 及落地頁一起看。',
      },
      {
        question: '品牌被 AI 提到但沒附連結，量得到嗎？',
        answer:
          '幾乎量不到——沒有點擊就沒有 referrer，分析工具拿不到資料。這正是固定查詢集存在的原因：用主動觀測補被動數據的盲區。報告裡應把「無連結提及」列為已知量測盲點。',
      },
      {
        question: '需要買 AI 可見度追蹤工具嗎？',
        answer:
          '先用手動查詢集跑三個月再說。多數工具做的事本質相同（批量查詢＋記錄），數據一樣是抽樣不是母體。查詢量大、平台多到手動吃不消時，工具才有性價比；一開始就買，容易把工具輸出當成官方數據誤用。',
      },
    ],
    relatedServices: ['geo', 'seo'],
    references: [
      {
        name: 'Generative AI performance report (Search)',
        url: 'https://support.google.com/webmasters/answer/16984139',
        publisher: 'Google Search Console Help',
      },
      {
        name: 'Introducing AI Performance in Bing Webmaster Tools Public Preview',
        url: 'https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview',
        publisher: 'Microsoft Bing Webmaster Blog',
        updatedAt: '2026-02-10',
      },
      {
        name: 'Publishers and Developers FAQ',
        url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq',
        publisher: 'OpenAI Help Center',
        updatedAt: '2026-08-29',
      },
      {
        name: '[GA4] Default channel group',
        url: 'https://support.google.com/analytics/answer/9756891',
        publisher: 'Google Analytics Help',
      },
    ],
  },
  'ai-crawler-robots-guide': {
    slug: 'ai-crawler-robots-guide',
    title: 'AI 爬蟲有哪些？robots.txt 開放與封鎖的決策',
    h1: 'AI 爬蟲清單與 robots.txt 決策',
    description:
      '整理 GPTBot、OAI-SearchBot、ClaudeBot、PerplexityBot、Google-Extended 等主要 AI 爬蟲的用途差異，以及依內容商業模式決定開放或封鎖的框架——附本站的實際決策。',
    keywords: ['AI 爬蟲', 'GPTBot robots.txt', 'ClaudeBot', 'Google-Extended', '封鎖 AI 爬蟲'],
    datePublished: '2026-08-12',
    qualityTier: 'production',
    intent: 'informational',
    intro:
      '該不該讓 AI 爬蟲抓你的網站？這個問題沒有通用答案，因為「AI 爬蟲」不是一種東西——訓練用、搜尋索引用、使用者即時讀取用的代理，控制方式與封鎖後果完全不同。本文先把類型分清楚，再給決策框架，最後公開本站自己的選擇與理由。',
    toc: ['三種爬蟲類型', '主要爬蟲清單', '決策框架', '本站的選擇', '實作細節與常見錯誤'],
    sections: [
      {
        heading: '先分清三種用途，再談開放或封鎖',
        body:
          '第一類是訓練型：收集內容用於模型訓練，如 GPTBot、ClaudeBot；封鎖它表達的是「不同意內容進入未來的訓練資料」，但管不到已經發生的訓練與第三方轉載。第二類是搜尋索引型：建立 AI 搜尋的索引與來源連結，如 OAI-SearchBot、PerplexityBot；封鎖它等於退出該平台的搜尋能見度。第三類是使用者代理型：使用者在對話中要求讀取特定網址時的即時抓取，如 ChatGPT-User、Perplexity-User；依 Perplexity 官方說明，這類請求屬使用者行為，一般不受 robots.txt 控制，要擋只能靠伺服器端。另外有兩個特例：Google-Extended 與 Applebot-Extended 不是獨立爬蟲，而是 robots.txt 中的控制代號，分別管內容能否用於 Gemini 訓練與 Apple 的模型訓練——實際抓取的仍是 Googlebot 與 Applebot。',
      },
      {
        heading: '主要 AI 爬蟲清單',
        body: '依各平台官方文件整理（用途定義以官方文件為準，會隨平台政策更新）：',
        table: {
          caption: '主要 AI 爬蟲與封鎖影響',
          headers: ['名稱', '所屬', '類型', '封鎖的主要影響'],
          rows: [
            ['GPTBot', 'OpenAI', '訓練', '內容不用於模型訓練；不影響 ChatGPT 搜尋'],
            ['OAI-SearchBot', 'OpenAI', '搜尋索引', '退出 ChatGPT 搜尋的來源連結'],
            ['ChatGPT-User', 'OpenAI', '使用者代理', '使用者要求讀取時被拒'],
            ['ClaudeBot', 'Anthropic', '訓練', '內容不用於 Claude 訓練'],
            ['PerplexityBot', 'Perplexity', '搜尋索引', '退出 Perplexity 的來源呈現'],
            ['Google-Extended', 'Google', '訓練控制代號', '不用於 Gemini 訓練；不影響 Google 搜尋與 AI Overview'],
            ['Applebot-Extended', 'Apple', '訓練控制代號', '不用於 Apple 模型訓練'],
            ['Amazonbot', 'Amazon', '索引／助理', 'Alexa 等服務的引用受限'],
            ['CCBot', 'Common Crawl', '公開資料集', '退出 Common Crawl（許多模型的訓練資料源）'],
          ],
        },
      },
      {
        heading: '決策框架：看內容的商業模式',
        body:
          '判斷的軸線是「內容被 AI 讀取後，你得到什麼、失去什麼」。公開行銷內容（服務說明、案例、文章）：目的本來就是被找到，開放搜尋型與使用者代理型幾乎沒有下檔風險，訓練型看品牌立場。付費內容與原創資料庫：內容本身就是商品，封鎖訓練型是合理預設，搜尋型看導流價值是否大於內容外洩。媒體與出版：授權談判是核心考量，封鎖常是談判籌碼的一部分。共通原則：這是可逆的政策決定，不是一次性的技術決定——先選一個立場，每季檢視。',
      },
      {
        heading: '本站的選擇：全面開放，理由如下',
        body:
          '本站的 robots.txt 對 GPTBot、OAI-SearchBot、ChatGPT-User、ClaudeBot、PerplexityBot、Google-Extended、Applebot-Extended、Amazonbot 全部開放。理由很直接：我們是 B2B 服務網站，內容的唯一目的是讓潛在客戶找到我們、判斷我們可不可信——AI 平台引用我們的內容回答使用者問題，對我們是曝光不是損失。同時要說明：不想被索引的頁面（如草稿、個人頁）我們用頁面層級的 noindex 控制，而不是 robots.txt——這兩個機制的差異在下一段。',
      },
      {
        heading: '實作細節與常見錯誤',
        body:
          '第一個常見錯誤：把 robots.txt 當成隱私工具。robots.txt 只擋守規矩的爬蟲抓取，不是存取控制——敏感內容要用登入與權限保護。第二個：搞混抓取與索引。robots.txt 擋抓取；不想被收錄要用 noindex，而且被 robots.txt 擋住的頁面 Google 反而讀不到它的 noindex 標記。第三個：封錯對象。封 Google-Extended 不影響搜尋，但誤封 Googlebot 會直接掉出搜尋結果，改 robots.txt 前後都要用 GSC 的 robots.txt 報告驗證。第四個：WAF 誤擋。防火牆規則可能在 robots.txt 放行的同時把爬蟲擋在門外，要用伺服器紀錄與官方 IP 清單核對實際存取。',
      },
    ],
    faq: [
      {
        question: '封了 GPTBot，內容就完全不會出現在 ChatGPT 嗎？',
        answer:
          '不會完全消失。GPTBot 只管未來的訓練資料收集；ChatGPT 搜尋的引用走 OAI-SearchBot 索引，已訓練進模型的歷史資料與第三方網站轉載的內容也不受影響。要分別控制，先想清楚你要擋的是哪一種使用。',
      },
      {
        question: '封鎖 Google-Extended 會影響 Google 搜尋排名嗎？',
        answer:
          '依 Google 官方文件，不會。Google-Extended 只控制內容是否用於 Gemini 等模型訓練，不影響 Google 搜尋的抓取、索引與排名，也不影響 AI Overview——後者用的是一般 Googlebot 的索引。',
      },
      {
        question: 'robots.txt 改了多久生效？',
        answer:
          '要等爬蟲下次重新抓取 robots.txt，各家頻率不同，Google 通常在 24 小時內。改完可以用 GSC 的 robots.txt 報告確認 Google 取得的版本，其他平台則觀察伺服器紀錄的實際存取變化。',
      },
      {
        question: '怎麼確認來的是真爬蟲不是冒名的？',
        answer:
          'User agent 字串可以偽造。OpenAI、Google、Perplexity 都公布官方 IP 範圍，嚴謹做法是在伺服器或 WAF 用 IP 反查驗證，只對通過驗證的請求套用放行規則。',
      },
    ],
    relatedServices: ['geo', 'seo'],
    references: [
      {
        name: 'Overview of OpenAI crawlers',
        url: 'https://platform.openai.com/docs/bots',
        publisher: 'OpenAI Platform Documentation',
      },
      {
        name: 'Overview of Google crawlers and fetchers',
        url: 'https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers',
        publisher: 'Google Search Central',
      },
      {
        name: 'Does Anthropic crawl data from the web, and how can site owners block the crawler?',
        url: 'https://support.claude.com/en/articles/8896518',
        publisher: 'Anthropic Support',
      },
      {
        name: 'Perplexity Crawlers',
        url: 'https://docs.perplexity.ai/docs/resources/perplexity-crawlers',
        publisher: 'Perplexity Documentation',
      },
    ],
  },
  'seo-vendor-evaluation-guide': {
    slug: 'seo-vendor-evaluation-guide',
    title: 'SEO 公司怎麼選？合約、報表與驗收的檢查清單',
    h1: 'SEO 公司怎麼選？合約、報表與驗收檢查清單',
    description:
      '從簡報話術、合約條款、報表口徑到驗收設計，整理評估 SEO 廠商的實用檢查清單。由同樣賣 SEO 服務的我們來寫——包含你該拿來檢驗我們的標準。',
    keywords: ['SEO 公司 怎麼選', 'SEO 廠商 評估', 'SEO 合約 注意事項', 'SEO 外包', 'SEO 報表 怎麼看'],
    datePublished: '2026-08-12',
    qualityTier: 'production',
    intent: 'commercial',
    intro:
      '這篇由賣 SEO 服務的我們來寫，立場要先揭露：我們有利益衝突，但也因此知道這個行業的話術長什麼樣。文中每一條檢查標準，你都可以拿來檢驗包括我們在內的任何廠商——這正是我們敢寫它的原因。',
    toc: ['先想清楚要買什麼', '簡報階段的紅旗', '合約條款', '報表口徑', '驗收設計', '你自己要做的事'],
    sections: [
      {
        heading: '先想清楚你要買的是什麼',
        body:
          '「SEO 服務」這個詞涵蓋了完全不同的工作：技術修復（網站體質、索引問題，偏一次性）、內容產出（持續的文章與頁面經營）、還是全包顧問（策略、執行、量測都管）。需求不同，適合的廠商型態就不同——技術強的團隊不一定會寫你產業的內容，內容農場式的量產也修不了你的網站。先對內確認要買哪一塊、預算多少，再去比廠商，否則比價根本不在同一個基準上。各型態的費用結構可以參考我們公開的 SEO 費用頁。',
      },
      {
        heading: '簡報階段的紅旗話術',
        body: '聽到以下說法時提高警覺，每一條都有具體原因：',
        items: [
          '「保證排名第一」——排名由演算法決定，沒有廠商能保證；能短期衝上去的手法多半伴隨懲罰風險',
          '「保證被 AI 引用」——沒有任何平台提供這種管道，這是把 GEO 話術化的典型',
          '「我們跟 Google 有特殊關係」——Google 不提供任何付費或關係型的自然排名通道',
          '「一個月見效」——重新抓取與評估以週、月計，承諾快速見效通常靠的是操弄短期指標',
          '「超低月費全包」——低價全包的常見實情是模板化內容量產，不動技術也不做量測',
        ],
      },
      {
        heading: '合約要盯的條款',
        body:
          '簽約前逐條確認，這些條款決定合作結束時你剩下什麼：資產歸屬——GSC、GA4 帳號開在誰名下？內容版權歸誰？外部連結資源會不會隨約終止而撤掉？退場條件——提前終止的通知期與費用、交接內容清單。範圍定義——每月做哪些工作、產出多少內容、誰負責審稿。轉包揭露——內容與連結是否轉包給第三方執行。我們的立場寫在自己的費用頁裡：帳號從第一天就該在客戶名下，這一條你可以要求任何廠商比照。',
      },
      {
        heading: '報表怎麼看才不會被唬',
        body:
          '第一原則：要求開 GSC 權限給你自己。廠商報表可以美化，GSC 的原始數據不能——你隨時可以自己核對。第二原則：分清虛榮指標與商業指標。總曝光、平均排名這類數字容易衝高（多發長尾頁就有），真正該追的是非品牌查詢的點擊、到站後的行為與詢盤數。第三原則：警惕排名截圖——單次搜尋結果受個人化與地區影響，截圖可以挑時間挑條件；請廠商用 GSC 的查詢數據代替截圖。報表裡若從不提「這個月哪些沒做好」，也是一種訊號。',
      },
      {
        heading: '驗收與試用期怎麼設計',
        body:
          '合理的驗收設計要區分「可承諾」與「不可承諾」：技術修復可驗收——索引問題數、修復清單、抓取狀態，這些有客觀標準；排名與流量不可承諾——能驗收的是工作有沒有做、口徑有沒有透明。實務建議：把合作拆成先做一次性的技術健檢與修復（一到三個月、產出明確），滿意再進入月費內容經營；一開始就簽長約全包的結構，議價能力全在對方。第一次檢視會議看兩件事：對方能不能講清楚「為什麼做這些」，以及數據口徑是否跟簽約時說的一致。',
      },
      {
        heading: '你自己要做的事：好廠商也需要好客戶',
        body:
          '最後這段是很多採購指南不寫的：SEO 外包不是把問題丟出去就結束。有效的內容需要你的一手素材——案例、專業判斷、客戶常問的問題，這些廠商編不出來；每月留半小時到一小時受訪或審稿，內容品質會差很多。決策節奏也要配合——網站要改的技術項目卡在你這邊三個月，怪不了廠商沒成效。合作前先確認內部有人能對接：給素材、審內容、拍板技術修改。這個人不需要懂 SEO，需要懂你的業務。',
      },
    ],
    faq: [
      {
        question: '月費很便宜的全包方案能買嗎？',
        answer:
          '先問清楚範圍再說。把「每月做哪些具體工作、產出什麼、誰執行」列出來對比，低價方案的常見實情是模板化內容、不碰技術、報表只給截圖。範圍攤開後，有些低價方案其實不便宜。',
      },
      {
        question: '簽約前可以要求廠商提供什麼證明？',
        answer:
          '可驗證的公開案例（能實際搜尋核對的頁面與內容，而非只有成效截圖）、作法說明（願意講清楚會做哪些事、不做哪些事）、以及資產歸屬的書面承諾。截圖式的成功案例最容易造假，可核對性是關鍵。',
      },
      {
        question: '自己學 SEO 跟外包，怎麼選？',
        answer:
          '網站小、時間多、產業競爭低：自學基礎（GSC、技術健檢、內容原則）通常夠用，本站的文章就是為此寫的。競爭產業、沒時間、或網站有累積的技術債：外包較實際——但無論選哪條路，帳號都握在自己手上。',
      },
      {
        question: '換 SEO 廠商時要注意什麼？',
        answer:
          '交接清單至少包含：GSC／GA4 權限移轉、內容清單與版權確認、已建外部連結的清單、進行中工作的狀態。最怕的是帳號在前廠商名下——這也是為什麼資產歸屬要在簽約時就談好，而不是分手時才發現。',
      },
    ],
    relatedServices: ['seo'],
    references: [
      {
        name: 'Do you need an SEO?',
        url: 'https://developers.google.com/search/docs/fundamentals/do-i-need-seo',
        publisher: 'Google Search Central',
      },
      {
        name: 'Google Search spam policies',
        url: 'https://developers.google.com/search/docs/essentials/spam-policies',
        publisher: 'Google Search Central',
      },
    ],
  },
}

export const blogSlugs = Object.keys(blogPosts)

export function getBlogPost(slug: string): BlogContent | null {
  return blogPosts[slug] ?? null
}

export function getAllBlogPosts(): BlogContent[] {
  return Object.values(blogPosts)
}
