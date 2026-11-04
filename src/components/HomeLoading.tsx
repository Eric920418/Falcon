'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { useI18n } from '@/lib/i18n/client'

export function HomeLoading({ ready, error, phase, detail, onExit, onRetry }: {
  ready: boolean; error: string; phase: string; detail: string; onExit: () => void; onRetry: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useI18n()
  useLayoutEffect(() => {
    const html = document.documentElement, body = document.body
    const content = ref.current?.parentElement?.querySelector<HTMLElement>('.fh-page-content')
    if (content) content.inert = true
    const previous = [html.style.overflow, body.style.overflow, html.style.scrollbarGutter]
    const focus = document.activeElement as HTMLElement | null
    html.style.scrollbarGutter = 'stable'; html.style.overflow = body.style.overflow = 'hidden'
    ref.current?.focus({ preventScroll: true })
    return () => {
      html.style.overflow = previous[0]; body.style.overflow = previous[1]; html.style.scrollbarGutter = previous[2]
      if (content) content.inert = false
      if (focus?.isConnected) focus.focus({ preventScroll: true })
    }
  }, [])
  useEffect(() => {
    if (!ready) return
    const timer = setTimeout(onExit, 700)
    return () => clearTimeout(timer)
  }, [ready, onExit])
  return <div ref={ref} className="fh-loading" data-ready={ready} data-error={Boolean(error)} role="dialog" aria-modal="true" aria-label="FALCON · Loading 3D" tabIndex={-1} onKeyDown={event => {
    if (event.key !== 'Tab') return
    const buttons = [...event.currentTarget.querySelectorAll('button')]
    if (!buttons.length) { event.preventDefault(); return }
    const index = buttons.indexOf(document.activeElement as HTMLButtonElement)
    event.preventDefault(); buttons[index < 0 ? (event.shiftKey ? buttons.length - 1 : 0) : (index + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length].focus()
  }}>
    <div className="fh-loading-brand"><img src="/logo.png" alt="" width="36" height="36" /> FALCON<span>INFORMATION</span></div>
    <div className="fh-loading-art" aria-hidden="true">
      <div className="fh-loading-orbit" /><div className="fh-loading-orbit" />
      <div className="fh-loading-wing">{[0,1,2,3,4,5,6].map(i=><i key={i} style={{ '--i': i } as React.CSSProperties} />)}</div>
    </div>
    <div className="fh-loading-title" aria-hidden="true">Ideas take<br /><em>flight.</em></div>
    <div className="fh-loading-status" role="status" aria-live="polite"><span>{phase}</span><span>{detail}</span></div>
    <div className="fh-loading-line" aria-hidden="true"><span /></div>
    {error && <div className="fh-loading-error" role="alert"><pre>{error}</pre><div><button onClick={onRetry}>↻ {t('重新載入 3D')}</button><button onClick={onExit}>{t('以靜態版本繼續')} →</button></div></div>}
  </div>
}
