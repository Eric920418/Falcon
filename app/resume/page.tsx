'use client'

import { useState } from 'react'
import { resumeData } from '@/lib/resume-data'
import { PDFDownloader } from './PDFDownloader'

type Lang = 'zh' | 'en'

export default function ResumePage() {
  const [lang, setLang] = useState<Lang>('zh')
  const fileName = `${resumeData.name.en.replace(/\s+/g, '_')}_Resume_${lang}.pdf`

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-16 text-stone-900">
      <div className="mx-auto max-w-xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            個人履歷產生器 / Resume Generator
          </h1>
          <p className="text-sm text-stone-600">
            選擇語言後點「下載」按鈕產生 PDF。內容在{' '}
            <code className="rounded bg-stone-200 px-1.5 py-0.5 text-xs">
              src/lib/resume-data.ts
            </code>
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-sm font-medium uppercase tracking-wider text-stone-500">
            語言 / Language
          </h2>
          <div className="inline-flex rounded-lg border border-stone-200 bg-white p-1">
            {(['zh', 'en'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`rounded-md px-4 py-1.5 text-sm transition ${
                  lang === l
                    ? 'bg-stone-900 text-stone-50'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {l === 'zh' ? '繁體中文' : 'English'}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium uppercase tracking-wider text-stone-500">
            下載 / Download
          </h2>
          <PDFDownloader lang={lang} fileName={fileName} data={resumeData} />
        </section>

        <footer className="border-t border-stone-200 pt-6 text-xs text-stone-500">
          <p>版面設定：{styleNote(lang)}</p>
        </footer>
      </div>
    </main>
  )
}

function styleNote(lang: Lang) {
  return lang === 'zh'
    ? 'A4 單頁・繁體中文字型 Noto Sans TC・預設黑白灰配色'
    : 'A4 single page · Noto Sans TC font · Neutral B/W palette'
}
