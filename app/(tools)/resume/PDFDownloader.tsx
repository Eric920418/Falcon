'use client'

import { useState } from 'react'
import type { ResumeData } from '@/lib/resume-data'

type Lang = 'zh' | 'en'

export function PDFDownloader({
  data,
  lang,
  fileName,
}: {
  data: ResumeData
  lang: Lang
  fileName: string
}) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  async function handleClick() {
    setError(null)
    setBusy(true)
    try {
      const [{ pdf }, { ResumeDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('@/components/resume/ResumeDocument'),
      ])
      const blob = await pdf(<ResumeDocument data={data} lang={lang} />).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (e) {
      setError(e instanceof Error ? e : new Error(String(e)))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={busy}
        className="inline-flex items-center justify-center rounded-md bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {busy ? '產生 PDF 中…請稍候' : `下載 ${fileName}`}
      </button>
      {error && (
        <pre className="max-h-80 overflow-auto whitespace-pre-wrap rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-900">
          {error.stack || error.message || String(error)}
        </pre>
      )}
    </div>
  )
}
