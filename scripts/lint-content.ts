/**
 * 內容護欄 lint：偵測 AI slop pattern。
 * 用法：pnpm lint:content
 *
 * 不會自動修改檔案，只列出疑似 AI slop 的字串位置，方便 commit 前人工檢查。
 */
import { readdirSync, readFileSync, statSync } from 'fs'
import { join } from 'path'

interface Pattern {
  id: string
  label: string
  regex: RegExp
  severity: 'high' | 'medium' | 'low'
  reason: string
}

const AI_SLOP_PATTERNS: Pattern[] = [
  {
    id: 'fomo-urgency',
    label: '緊迫感行銷話術',
    regex: /(藍海窗口期|先發優勢|搶占|時代先機|不存在|徹底消失|完全失去)/g,
    severity: 'high',
    reason: '空泛 FOMO 行銷話術，零證據支撐',
  },
  {
    id: 'unsourced-stat',
    label: '無來源統計數字',
    regex: /(年增[\s]?\d+%|月活[\s]?\d+萬|突破[\s]?\d+萬|轉換率[\s]?[高高出]\s?\d+(\.\d+)?[-~]?\d*\s?倍)/g,
    severity: 'high',
    reason: '統計數字未附 source，疑似編造',
  },
  {
    id: 'numbered-title',
    label: '數字化標題狂熱',
    regex: /(^|\s|「|『)(\d+)[\s]?(個|大|招|步|秒|分鐘|天)(關鍵)?(方法|步驟|秘訣|招式|技巧|理由|原因|要點|策略|錯誤|跡象|問題|陷阱|誤區)/g,
    severity: 'medium',
    reason: 'LLM 常用的「N 個方法」湊版面句構',
  },
  {
    id: 'why-must-do',
    label: '「為什麼必須做」boilerplate',
    regex: /為什麼\s*(\d{4}\s*年的?\s*)?(台灣\s*)?[^？]{1,15}\s*必須(做|做好|關注|了解|採用)/g,
    severity: 'medium',
    reason: 'AI 標誌性緊迫感 section heading',
  },
  {
    id: 'who-fits',
    label: '「適合做 X 的企業」模板',
    regex: /適合做\s*[A-Za-z0-9]+\s*的(企業|公司|品牌|產業)/g,
    severity: 'medium',
    reason: 'AI 標誌性 boilerplate 段落',
  },
  {
    id: 'why-choose-us',
    label: '「為什麼選 / 為什麼比 X 貴」自吹自擂',
    regex: /為什麼(選|找)[^？，。\n]{2,15}[較比更]/g,
    severity: 'low',
    reason: '自吹自擂 section，多數無證據支撐',
  },
  {
    id: 'template-cta',
    label: '模板化 CTA',
    regex: /想(知道|了解)你?(的)?[^？]{2,20}\s*(預約|聯絡|諮詢)\s*免費\s*[A-Za-z0-9]*\s*(健診|健檢|諮詢)/g,
    severity: 'high',
    reason: '套版式 CTA，跨檔重複出現',
  },
  {
    id: 'competitor-trash',
    label: '競品貶低（無證據）',
    regex: /(Wix|Strikingly|Wordpress|Intercom|Zendesk)[^。\n]{0,30}(差|爛|限|貴|綁定|無法擴展|跑不動)/g,
    severity: 'high',
    reason: '貶低競品但無數據證據',
  },
  {
    id: 'fake-author',
    label: '匿名作者「隼訊團隊」',
    regex: /author\s*[:=]\s*['"]隼訊團隊['"]/g,
    severity: 'medium',
    reason: '「團隊」非 Schema.org Person，應改用 Organization 或實名',
  },
  {
    id: 'integration-merchandising',
    label: '服務頁交叉推銷',
    regex: /整合\s*SEO\s*\+\s*GEO\s*\+\s*AEO\s*三合一/g,
    severity: 'low',
    reason: '服務頁之間互相推銷，類 merchandising',
  },
]

const TARGET_DIRS = ['src/lib/content']

interface Finding {
  file: string
  line: number
  pattern: Pattern
  match: string
}

function walk(dir: string): string[] {
  const out: string[] = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const s = statSync(full)
    if (s.isDirectory()) {
      out.push(...walk(full))
    } else if (entry.endsWith('.ts') && !entry.endsWith('.d.ts')) {
      out.push(full)
    }
  }
  return out
}

function lint(): Finding[] {
  const findings: Finding[] = []
  for (const dir of TARGET_DIRS) {
    for (const file of walk(dir)) {
      const content = readFileSync(file, 'utf-8')
      const lines = content.split('\n')
      lines.forEach((line, idx) => {
        for (const pattern of AI_SLOP_PATTERNS) {
          const matches = line.matchAll(pattern.regex)
          for (const m of matches) {
            findings.push({
              file,
              line: idx + 1,
              pattern,
              match: m[0],
            })
          }
        }
      })
    }
  }
  return findings
}

const findings = lint()

if (findings.length === 0) {
  console.log('✓ 沒有偵測到 AI slop pattern')
  process.exit(0)
}

const bySeverity = { high: 0, medium: 0, low: 0 }
for (const f of findings) bySeverity[f.pattern.severity]++

console.log(`偵測到 ${findings.length} 個疑似 AI slop pattern：`)
console.log(`  高風險：${bySeverity.high} ｜ 中風險：${bySeverity.medium} ｜ 低風險：${bySeverity.low}`)
console.log('')

for (const f of findings) {
  const tag = f.pattern.severity === 'high' ? '[HIGH]' : f.pattern.severity === 'medium' ? '[MED] ' : '[LOW] '
  console.log(`${tag} ${f.file}:${f.line}`)
  console.log(`       pattern: ${f.pattern.label}（${f.pattern.reason}）`)
  console.log(`       match:   "${f.match.trim()}"`)
}

console.log('')
console.log('提醒：本工具只標示位置，不會自動修改。建議：')
console.log('  - HIGH：commit 前必處理')
console.log('  - MEDIUM：能改則改')
console.log('  - LOW：可保留但留意是否累積過多')

process.exit(bySeverity.high > 0 ? 1 : 0)
