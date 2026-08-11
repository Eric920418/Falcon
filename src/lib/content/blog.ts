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
    ],
    relatedServices: ['ai-voice-agent', 'ai-tools'],
    relatedCaseStudies: ['gogocha-ai-dispatch'],
  },
  'geo-complete-guide-2026': {
    slug: 'geo-complete-guide-2026',
    title: 'GEO 生成式引擎優化指南：技術與內容怎麼準備',
    h1: 'GEO 生成式引擎優化指南',
    description:
      '依 Google 2026 年官方指引整理 GEO：從搜尋索引、原創內容、實名案例、AI 爬蟲到量測，並拆解 llms.txt 與特殊 AI Schema 迷思。',
    keywords: ['GEO 怎麼做', 'GEO 完整指南', 'GEO 教學', 'AI 搜尋優化', '生成式引擎優化 教學'],
    datePublished,
    dateModified: '2026-08-11',
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
          '先保存發布前基準，再追蹤可重現指標。Google 的 AI 功能流量目前計入 Search Console 的 Web 搜尋類型，不能從一張總覽圖直接拆出所有 AI 曝光；因此還要搭配 GA4 的自然搜尋轉換、ChatGPT／Perplexity 引薦、核心頁與案例頁瀏覽，以及固定問題集的人工觀察。固定問題集只能看趨勢，不能宣稱代表所有使用者。',
        table: {
          caption: 'GEO 建議量測層級',
          headers: ['層級', '觀察項目', '解讀限制'],
          rows: [
            ['可用性', '抓取、索引、canonical、AI 爬蟲存取', '通過不代表一定排名或引用'],
            ['搜尋表現', '非品牌曝光、點擊、查詢與落地頁', 'Search Console 會省略部分匿名查詢'],
            ['AI 引薦', 'ChatGPT、Perplexity 等 referrer 與到站行為', '無連結的品牌提及不一定可被分析工具取得'],
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
    ],
    relatedServices: ['geo', 'seo'],
    references: [
      {
        name: 'AI features and your website',
        url: 'https://developers.google.com/search/docs/appearance/ai-features',
        publisher: 'Google Search Central',
        updatedAt: '2025-12-10',
      },
      {
        name: 'Creating helpful, reliable, people-first content',
        url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
        publisher: 'Google Search Central',
      },
      {
        name: 'Performance report: Common tasks and use cases',
        url: 'https://support.google.com/webmasters/answer/17010961',
        publisher: 'Google Search Console Help',
      },
    ],
  },
  'schema-org-tutorial': {
    slug: 'schema-org-tutorial',
    title: 'Schema.org 結構化資料部署實作',
    h1: 'Schema.org 結構化資料部署實作',
    description:
      'Schema.org 用來描述頁面實體並支援特定搜尋功能。本文說明該用哪些類型、哪些已失效，以及內容一致性規則。',
    keywords: ['Schema.org', '結構化資料', 'JSON-LD', 'LocalBusiness schema', 'FAQ schema'],
    datePublished,
    dateModified: '2026-08-11',
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
    dateModified: '2026-08-11',
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
          'Google 官方目前將 AI Overview 與 AI Mode 帶來的搜尋表現計入 Search Console Performance 的 Web 搜尋類型。站方可依查詢、頁面、國家、裝置與日期觀察曝光、點擊和 CTR，但不應假設每一筆都能被單獨標記為 AI Overview。若要看商業價值，還要搭配 GA4 的到站行為、表單與聯絡事件，並在內容更新前保存可比較的基準。',
        table: {
          caption: '發布後的量測分工',
          headers: ['資料來源', '適合回答', '不能單獨證明'],
          rows: [
            ['Search Console', '哪些查詢與頁面取得曝光、點擊及 CTR', '所有曝光是否來自 AI Overview'],
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
    ],
    relatedServices: ['geo', 'seo'],
    references: [
      {
        name: 'AI features and your website',
        url: 'https://developers.google.com/search/docs/appearance/ai-features',
        publisher: 'Google Search Central',
        updatedAt: '2025-12-10',
      },
      {
        name: 'How are you performing on Google?',
        url: 'https://support.google.com/webmasters/answer/10268906',
        publisher: 'Google Search Console Help',
      },
    ],
  },
  'website-pricing-2026': {
    slug: 'website-pricing-2026',
    title: '網站建置費用區間：台灣行情與成本拆解',
    h1: '網站建置費用區間與成本拆解',
    description:
      '網站建置費用從幾萬到幾百萬都有，差別在哪？本文拆解四個價格區間的實際內容、常被忽略的隱藏成本、轉換廠商時的注意事項。',
    keywords: ['網站建置費用區間', '網站建置費用怎麼算', '網站成本拆解', '網站建置隱藏成本', '網站維護費用'],
    datePublished,
    qualityTier: 'production',
    intent: 'transactional',
    intro:
      '網站建置費用差距很大。本文只談「實際費用包含什麼」，不貶低任何特定廠商或工具。',
    sections: [
      {
        heading: '台灣網站建置費用四個區間',
        body: '',
        items: [
          'NT$ 3,000-30,000：模板網站（Wix / Squarespace 等）— 適合個人 / 微型企業',
          'NT$ 30,000-100,000：WordPress 套版或半客製化',
          'NT$ 100,000-500,000：完整客製化開發',
          'NT$ 500,000+：複雜系統 / 大型電商 / 多語言企業網站',
        ],
      },
      {
        heading: '常被忽略的隱藏成本',
        body: '',
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
        body: '',
        items: [
          '原始碼歸誰所有（合約必寫，否則綁定）',
          '主機帳號是在你名下還是廠商代管',
          'CMS 後台你能不能自己改',
          'SEO 內建到什麼程度（Lighthouse SEO 分數可作基準）',
          '是否支援響應式設計',
          '售後保固範圍與年限',
        ],
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
    qualityTier: 'production',
    intent: 'commercial',
    intro:
      'AI 客服是 2026 年企業導入 AI 最常見的切入點。但「自建」與「用 SaaS」的長期成本差距可能很大，本文整理可參考的成本結構（實際費用依授權方案、用量而定）。',
    sections: [
      {
        heading: 'SaaS AI 客服費用參考',
        body: '以下為各服務官方公開的牌價區間（請以該品牌最新報價為準）：',
        items: [
          'Intercom Fin：每次解決對話約 USD 0.99 起',
          'Zendesk AI Agent：依授權方案，通常從 USD 50 / 座位 / 月起',
          'Salesforce Einstein：依方案組合差異大',
        ],
      },
      {
        heading: '自建 AI 客服的成本結構',
        body: '',
        items: [
          '隼訊 MVP 開發：一次性 2.5-3.75 萬',
          'AI API 費用：每月 5,000-30,000（API 為實際用量成本，照原價計）',
          '隼訊維護費：每月 0.25-0.75 萬（可選包月或按工時）',
        ],
      },
      {
        heading: '什麼情況該選 SaaS',
        body: '',
        items: [
          '需要立即上線（SaaS 通常 1 週內、自建需 3-4 週）',
          '團隊沒有 IT 人員可維護',
          '客服流程很標準、不需太多客製化',
          '客戶數還少，月對話量低於 1,000 次',
        ],
      },
      {
        heading: '什麼情況自建較划算',
        body: '',
        items: [
          '對話量大（自建邊際成本低）',
          '需要連接內部系統 / 資料庫',
          '有資料合規要求（部分產業如金融、醫療）',
          '希望避免長期被授權費綁定',
        ],
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
    ],
    relatedServices: ['ai-tools'],
  },
  'how-we-define-good-seo-content': {
    slug: 'how-we-define-good-seo-content',
    title: '我們對「好 SEO 內容」的定義',
    h1: '我們對「好 SEO 內容」的定義',
    description:
      '內容是 SEO 的核心，但「好內容」很難量化。本文整理隼訊在客戶內容生產時實際遵守的判斷標準。',
    keywords: ['SEO 內容', '內容行銷', 'E-E-A-T', '內容品質'],
    datePublished,
    dateModified: '2026-08-11',
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
}

export const blogSlugs = Object.keys(blogPosts)

export function getBlogPost(slug: string): BlogContent | null {
  return blogPosts[slug] ?? null
}

export function getAllBlogPosts(): BlogContent[] {
  return Object.values(blogPosts)
}
